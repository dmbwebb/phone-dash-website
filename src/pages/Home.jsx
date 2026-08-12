import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

function Home() {
  const { language, toggleLanguage, t } = useLanguage()
  const [activeTab, setActiveTab] = useState('program')

  return (
    <div className="page">
      {/* Decorative background waves */}
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
          <Link to="/delete-data" className="nav-link">
            {t('navDeleteData')}
          </Link>
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <main className="hero">
        <img
          src={`${baseUrl}logo.png`}
          alt="Mi Ritmo Digital App Icon"
          className="hero-icon fade-in"
        />

        <h1 className="fade-in-up delay-1">Mi Ritmo Digital</h1>

        {/* Tab switcher */}
        <div className="home-tabs fade-in-up delay-2" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'program'}
            className={`home-tab${activeTab === 'program' ? ' active' : ''}`}
            onClick={() => setActiveTab('program')}
          >
            {t('tabProgram')}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'app'}
            className={`home-tab${activeTab === 'app' ? ' active' : ''}`}
            onClick={() => setActiveTab('app')}
          >
            {t('tabApp')}
          </button>
        </div>

        {/* Tab: The App */}
        {activeTab === 'app' && (
          <div className="tab-content fade-in-up" role="tabpanel">
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            <div className="feature-cards">
              <div className="feature-card feature-card--blue">
                <span className="feature-card__icon">📊</span>
                <span className="feature-card__label">{t('featureUsage')}</span>
              </div>
              <div className="feature-card feature-card--yellow">
                <span className="feature-card__icon">⏱</span>
                <span className="feature-card__label">{t('featureBudgets')}</span>
              </div>
              <div className="feature-card feature-card--coral">
                <span className="feature-card__icon">🔒</span>
                <span className="feature-card__label">{t('featurePrivacy')}</span>
              </div>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.miritmodigital.app"
              className="play-store-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('playStoreAria')}
            >
              <svg className="play-store-btn__icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#00C3FF" d="M45.3 21.1c-7.1 4-12 11.5-12 20.2v429.3c0 8.7 4.9 16.2 12 20.2l237.3-234.9z"/>
                <path fill="#FFC700" d="M395.5 208.7l-77.9-45.1-43 42.4 43 42.4 78-45.1c23.9-13.7 23.9-31 0-44.6z"/>
                <path fill="#FF3A44" d="M317.6 163.6L45.3 21.1c-2.5-1.5-5.2-2.3-8-2.5l253.3 251 27-106z"/>
                <path fill="#00A651" d="M290.6 241.5L37.3 492.9c2.8-0.3 5.5-1.1 8-2.5l272.3-142.5z"/>
              </svg>
              <span className="play-store-btn__text">
                <span className="play-store-btn__small">{t('playStoreGetItOn')}</span>
                <span className="play-store-btn__big">Google Play</span>
              </span>
            </a>
            <Link to="/privacy" className="cta-link">
              <span>{t('ctaText')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}

        {/* Tab: The Parental Program */}
        {activeTab === 'program' && (
          <div className="tab-content fade-in-up" role="tabpanel">
            <p className="hero-subtitle">
              {t('programSubtitle')}
            </p>
            <div className="feature-cards">
              <div className="feature-card feature-card--blue">
                <span className="feature-card__icon">👨‍👩‍👧</span>
                <span className="feature-card__label">{t('featureParents')}</span>
              </div>
              <div className="feature-card feature-card--yellow">
                <span className="feature-card__icon">💙</span>
                <span className="feature-card__label">{t('featureAdolescent')}</span>
              </div>
              <div className="feature-card feature-card--coral">
                <span className="feature-card__icon">🎓</span>
                <span className="feature-card__label">{t('featureResearch')}</span>
              </div>
            </div>
            <Link to="/inscripcion" className="cta-link cta-link--program">
              <span>{t('programCta')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link to="/curso" className="curso-home-link">
              <span aria-hidden="true">🔐</span>
              <span>{t('cursoCta')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}
      </main>

      <footer className="footer fade-in-up delay-4">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}

export default Home
