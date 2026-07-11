import { Link } from 'react-router-dom'
import CursoLayout from '../../curso/CursoLayout'
import { useCursoArm } from '../../curso/armContext'
import { recursosParaArm } from '../../curso/recursos'

function ListaRecursos() {
  const arm = useCursoArm()
  const recursos = recursosParaArm(arm)

  return (
    <>
      <header className="curso-header fade-in-up">
        <h1>Recursos del curso</h1>
        <p>
          Aquí viven los materiales del programa: blogs, quizzes y guías a las
          que puedes volver cuando quieras. Iremos publicando contenido nuevo a
          medida que avanza el curso.
        </p>
      </header>

      <div className="curso-lista fade-in-up delay-1">
        {recursos.map((r) => (
          <Link key={r.slug} to={`/curso/${r.slug}`} className="curso-card">
            <span className="curso-card__emoji" aria-hidden="true">{r.emoji}</span>
            <div className="curso-card__body">
              <span className="curso-card__tipo">{r.tipo} · {r.fecha}</span>
              <h2>{r.titulo}</h2>
              <p>{r.descripcion}</p>
            </div>
            <span className="curso-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}

        <div className="curso-card curso-card--proximamente">
          <span className="curso-card__emoji" aria-hidden="true">🌱</span>
          <div className="curso-card__body">
            <span className="curso-card__tipo">Próximamente</span>
            <h2>Más recursos en camino</h2>
            <p>Nuevos blogs, quizzes y materiales aparecerán aquí durante el programa.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function CursoHome() {
  return (
    <CursoLayout>
      <ListaRecursos />
    </CursoLayout>
  )
}

export default CursoHome
