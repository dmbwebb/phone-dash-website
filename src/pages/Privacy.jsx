import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

function Privacy() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <div className="page">
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

      <main className="content container">
        <header className="content-header fade-in-up">
          <h1>{t('privacyTitle')}</h1>
          <p className="last-updated">{t('privacyUpdated')}</p>
        </header>

        <section className="section fade-in-up delay-1">
          <h2>{t('privacyIntroTitle')}</h2>
          <p>{t('privacyIntroText')}</p>
        </section>

        <section className="section fade-in-up delay-2">
          <h2>{t('privacyDataTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('privacyDataIntro') }} />
          <ul>
            <li><strong>{t('privacyDataItem1Label')}</strong> {t('privacyDataItem1')}</li>
            <li><strong>{t('privacyDataItem2Label')}</strong> {t('privacyDataItem2')}</li>
            <li><strong>{t('privacyDataItem3Label')}</strong> {t('privacyDataItem3')}</li>
          </ul>
          <p>
            <strong>{t('privacyDataNote')}</strong>
          </p>
        </section>

        <section className="section fade-in-up delay-3">
          <h2>{t('privacyUseTitle')}</h2>
          <p>{t('privacyUseIntro')}</p>
          <ul>
            <li>{t('privacyUseItem1')}</li>
            <li>{t('privacyUseItem2')}</li>
            <li>{t('privacyUseItem3')}</li>
          </ul>
        </section>

        <section className="section fade-in-up delay-4">
          <h2>{t('privacyStorageTitle')}</h2>
          <p>{t('privacyStorageIntro')}</p>
          <ul>
            <li>{t('privacyStorageItem1')}</li>
            <li>{t('privacyStorageItem2')}</li>
            <li>{t('privacyStorageItem3')}</li>
            <li>{t('privacyStorageItem4')}</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>{t('privacySharingTitle')}</h2>
          <p>{t('privacySharingText')}</p>
        </section>

        <section className="section fade-in-up">
          <h2>{t('privacyRightsTitle')}</h2>
          <p>{t('privacyRightsIntro')}</p>
          <ul>
            <li>{t('privacyRightsItem1')}</li>
            <li><Link to="/delete-data">{t('privacyRightsItem2')}</Link></li>
            <li>{t('privacyRightsItem3')}</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>{t('privacyPermsTitle')}</h2>
          <p>{t('privacyPermsIntro')}</p>
          <ul>
            <li><strong>{t('privacyPermsItem1Label')}</strong> {t('privacyPermsItem1')}</li>
            <li><strong>{t('privacyPermsItem2Label')}</strong> {t('privacyPermsItem2')}</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>{t('privacyYouthTitle')}</h2>
          <p>{t('privacyYouthText1')}</p>
          <p>{t('privacyYouthIntro')}</p>
          <ul>
            <li>{t('privacyYouthItem1')}</li>
            <li>{t('privacyYouthItem2')}</li>
          </ul>
          <p>{t('privacyYouthNote')}</p>
        </section>

        <section className="section fade-in-up">
          <h2>{t('privacyRetentionTitle')}</h2>
          <p>{t('privacyRetentionText')}</p>
        </section>

        <section className="section fade-in-up">
          <h2>{t('privacyContactTitle')}</h2>
          <p>{t('privacyContactText')}</p>
          <div className="contact-card">
            <p>
              <strong>Duncan Webb</strong><br />
              Email: <a href="mailto:duncan.webb@novasbe.pt">duncan.webb@novasbe.pt</a><br />
              WhatsApp: +33 7 82 64 65 07
            </p>
          </div>
        </section>

        <Link to="/" className="back-link fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
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

export default Privacy
