import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ02PY8GjwQjC2qLbqGnblR5tO6EDm53dT2m0Xgz3HDtaUHkYHiKELpNfHU3Svl0iP50D_mBYw7R'

function Agendar() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <div className="page">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          <img src={`${baseUrl}logo.png`} alt="Mi Ritmo Digital" />
          <span>Mi Ritmo Digital</span>
        </Link>
        <div className="nav-links">
          <Link to="/register" className="nav-link">
            {t('navRegister')}
          </Link>
          <Link to="/privacy" className="nav-link">
            {t('navPrivacy')}
          </Link>
          <Link to="/delete-data" className="nav-link">
            {t('navDeleteData')}
          </Link>
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <main className="content content--wide">
        <header className="content-header fade-in-up">
          <h1>{t('agendarTitle')}</h1>
          <p className="last-updated">{t('agendarSubtitle')}</p>
        </header>

        <p className="agendar-intro fade-in-up delay-1">{t('agendarIntro')}</p>

        <div className="form-embed agendar-embed fade-in-up delay-2">
          <iframe
            src={`${CALENDAR_URL}?gv=true`}
            width="100%"
            height="700"
            frameBorder="0"
            loading="lazy"
            title={t('agendarTitle')}
          />
        </div>

        <p className="agendar-fallback fade-in-up delay-3">
          {t('agendarFallback')}{' '}
          <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
            {t('agendarFallbackLink')}
          </a>
          .
        </p>

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

export default Agendar
