import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

function Registration() {
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
          <h1>{t('registerTitle')}</h1>
          <p className="last-updated">{t('registerSubtitle')}</p>
        </header>

        <div className="register-split fade-in-up delay-1">
          <section className="register-split__col register-split__col--form">
            <h2>{t('registerWhatsappTitle')}</h2>
            <div className="form-embed">
              <iframe
                src="https://whatsform.com/8aHdM4"
                width="100%"
                height="600"
                frameBorder="0"
                loading="lazy"
                title={t('registerWhatsappTitle')}
              />
            </div>
          </section>

          <section className="register-split__col register-split__col--video">
            <h2>{t('registerVideoTitle')}</h2>
            <div className="video-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Jvzp7VM_z7I?modestbranding=1&rel=0"
                width="100%"
                title={t('registerVideoTitle')}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        </div>

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

export default Registration
