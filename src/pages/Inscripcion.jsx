import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { REGISTRO_FORM_URL } from '../config'

const baseUrl = import.meta.env.BASE_URL

// Sign-up page: embeds the SurveyCTO registration + eligibility form.
// The iframe is best-effort — the always-visible "open in a new tab" link is
// the guaranteed path on phones or if the embed is ever blocked.
function Inscripcion() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <div className="page">
      {/* Decorative background waves (same as Programa) */}
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
          <Link to="/programa" className="nav-link">
            {t('navPrograma')}
          </Link>
          <Link to="/register" className="nav-link">
            {t('navRegister')}
          </Link>
          <Link to="/agendar" className="nav-link">
            {t('navAgendar')}
          </Link>
          <Link to="/privacy" className="nav-link">
            {t('navPrivacy')}
          </Link>
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <main className="content container">
        <header className="programa-hero fade-in-up">
          <img
            src={`${baseUrl}logo.png`}
            alt="Mi Ritmo Digital"
            className="programa-hero__icon"
          />
          <h1>{t('inscripcionH1')}</h1>
          <p className="programa-hero__subtitle">{t('inscripcionSubtitle')}</p>
        </header>

        <section className="section fade-in-up delay-1">
          <div className="form-embed">
            <iframe
              src={REGISTRO_FORM_URL}
              title={t('inscripcionH1')}
              loading="lazy"
              style={{
                width: '100%',
                minHeight: '75vh',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                background: '#fff',
              }}
            />
          </div>
          <p className="agendar-next__helper" style={{ marginTop: '1rem' }}>
            {t('inscripcionFallbackText')}{' '}
            <a href={REGISTRO_FORM_URL} target="_blank" rel="noopener noreferrer">
              {t('inscripcionFallbackLink')}
            </a>
          </p>
        </section>

        <Link to="/" className="back-link fade-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>{t('backHome')}</span>
        </Link>
      </main>

      <footer className="footer fade-in-up">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}

export default Inscripcion
