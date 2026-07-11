import { useState } from 'react'
import { Link } from 'react-router-dom'
import { buildWhatsappLink } from '../config'
import { getStoredArm, tryUnlock, lock } from './access'
import { CursoArmContext } from './armContext'

const baseUrl = import.meta.env.BASE_URL

function CursoGate({ onUnlock }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const arm = tryUnlock(code)
    if (arm) {
      onUnlock(arm)
    } else {
      setError(true)
    }
  }

  return (
    <div className="curso-gate fade-in-up">
      <div className="curso-gate__icon" aria-hidden="true">🔐</div>
      <h1>Contenido del curso</h1>
      <p className="curso-gate__text">
        Esta sección es exclusiva para las familias que participan en el
        curso <strong>Mi Ritmo Digital</strong>. Ingresa la clave que te
        compartió el equipo del programa.
      </p>
      <form onSubmit={handleSubmit} className="curso-gate__form">
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
            setError(false)
          }}
          placeholder="Clave de acceso"
          aria-label="Clave de acceso"
          autoCapitalize="characters"
          autoCorrect="off"
          autoComplete="off"
        />
        <button type="submit" className="curso-gate__btn">Entrar</button>
      </form>
      {error && (
        <p className="curso-gate__error" role="alert">
          Clave incorrecta. Revisa e intenta de nuevo.
        </p>
      )}
      <p className="curso-gate__help">
        ¿No tienes la clave o la olvidaste?{' '}
        <a href={buildWhatsappLink('es')} target="_blank" rel="noopener noreferrer">
          Escríbenos por WhatsApp
        </a>
        .
      </p>
    </div>
  )
}

// Envuelve todas las páginas del curso: fondo, barra de navegación,
// candado de acceso y pie de página.
function CursoLayout({ children }) {
  const [arm, setArm] = useState(() => getStoredArm())

  const handleLock = () => {
    lock()
    setArm(null)
  }

  return (
    <div className="page">
      <div className="home-waves" aria-hidden="true">
        <svg className="wave wave--blue" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C180,170 360,30 540,100 C720,170 900,40 1080,110 C1260,180 1380,70 1440,110 L1440,10 C1380,50 1260,150 1080,80 C900,10 720,140 540,70 C360,0 180,130 0,60 Z" />
        </svg>
        <svg className="wave wave--yellow" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,70 C240,150 480,10 720,90 C960,170 1200,30 1440,110 L1440,150 C1200,70 960,210 720,130 C480,50 240,190 0,110 Z" />
        </svg>
        <svg className="wave wave--coral" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,90 C360,170 720,10 1080,90 C1260,130 1380,50 1440,90 L1440,150 C1380,110 1260,190 1080,150 C720,70 360,230 0,150 Z" />
        </svg>
      </div>

      <nav className="nav">
        <Link to="/" className="nav-brand">
          <img src={`${baseUrl}logo.png`} alt="Mi Ritmo Digital" />
          <span>Mi Ritmo Digital</span>
        </Link>
        <div className="nav-links">
          <Link to="/curso" className="nav-link">Recursos del curso</Link>
          {arm && (
            <button onClick={handleLock} className="lang-toggle" aria-label="Cerrar acceso al curso">
              Salir
            </button>
          )}
        </div>
      </nav>

      <main className="content container">
        {arm ? (
          <CursoArmContext.Provider value={arm}>{children}</CursoArmContext.Provider>
        ) : (
          <CursoGate onUnlock={setArm} />
        )}
      </main>

      <footer className="footer">
        <p>Mi Ritmo Digital · Contenido exclusivo para familias del programa</p>
      </footer>
    </div>
  )
}

export default CursoLayout
