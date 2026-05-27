import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

const baseUrl = import.meta.env.BASE_URL

function DataDeletion() {
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
          <h1>{t('deleteTitle')}</h1>
          <p className="last-updated">{t('deleteSubtitle')}</p>
        </header>

        <section className="section fade-in-up delay-1">
          <h2>{t('deleteRightTitle')}</h2>
          <p>{t('deleteRightText')}</p>
        </section>

        <section className="section fade-in-up delay-2">
          <h2>{t('deleteDataTitle')}</h2>
          <p>{t('deleteDataIntro')}</p>
          <ul>
            <li>
              <strong>{t('deleteDataItem1Label')}</strong> {t('deleteDataItem1')}
            </li>
            <li>
              <strong>{t('deleteDataItem2Label')}</strong> {t('deleteDataItem2')}
            </li>
            <li>
              <strong>{t('deleteDataItem3Label')}</strong> {t('deleteDataItem3')}
            </li>
            <li>
              <strong>{t('deleteDataItem4Label')}</strong> {t('deleteDataItem4')}
            </li>
            <li>
              <strong>{t('deleteDataItem5Label')}</strong> {t('deleteDataItem5')}
            </li>
          </ul>
        </section>

        <section className="section fade-in-up delay-3">
          <h2>{t('deleteWhatTitle')}</h2>
          <p>{t('deleteWhatIntro')}</p>
          <ul>
            <li>{t('deleteWhatItem1')}</li>
            <li>{t('deleteWhatItem2')}</li>
            <li>{t('deleteWhatItem3')}</li>
            <li>{t('deleteWhatItem4')}</li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>{t('deleteRetainTitle')}</h2>
          <p>{t('deleteRetainIntro')}</p>
          <ul>
            <li>
              <strong>{t('deleteRetainItem1Label')}</strong> {t('deleteRetainItem1')}
            </li>
            <li>
              <strong>{t('deleteRetainItem2Label')}</strong> {t('deleteRetainItem2')}
            </li>
          </ul>
        </section>

        <section className="section fade-in-up">
          <h2>{t('deleteHowTitle')}</h2>
          <p>{t('deleteHowIntro')}</p>
          <ol className="numbered-list">
            <li>{t('deleteHowStep1')}</li>
            <li>{t('deleteHowStep2')}</li>
            <li>{t('deleteHowStep3')}</li>
          </ol>
          <p>{t('deleteHowNote')}</p>
        </section>

        <section className="section fade-in-up">
          <h2>{t('deleteContactTitle')}</h2>
          <p>{t('deleteContactIntro')}</p>
          <div className="contact-card">
            <p>
              <strong>Duncan Webb</strong>
              <br />
              Nova School of Business and Economics
              <br />
              <a href="mailto:duncan.webb@novasbe.pt">duncan.webb@novasbe.pt</a>
            </p>
          </div>
          <p style={{ marginTop: 'var(--space-sm)' }}>
            {t('deleteContactSubject')} <strong>{t('deleteContactSubjectText')}</strong>
          </p>
        </section>

        <section className="section fade-in-up">
          <h2>{t('deleteAfterTitle')}</h2>
          <p>{t('deleteAfterText')}</p>
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

export default DataDeletion
