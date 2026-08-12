import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { buildWhatsappLink } from '../config'
import { trackLead } from '../analytics'

const baseUrl = import.meta.env.BASE_URL

// Inline WhatsApp icon used in both CTAs.
function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  )
}

function Registration() {
  const { language, toggleLanguage, t } = useLanguage()
  const whatsappLink = buildWhatsappLink(language)

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
          <Link to="/delete-data" className="nav-link">
            {t('navDeleteData')}
          </Link>
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <main className="content container">
        {/* Hero — same pattern as /programa */}
        <header className="programa-hero fade-in-up">
          <img
            src={`${baseUrl}logo.png`}
            alt="Mi Ritmo Digital"
            className="programa-hero__icon"
          />
          <h1>{t('registerHeroH1')}</h1>
          <p className="programa-hero__subtitle">{t('registerHeroSubtitle')}</p>
          <Link to="/inscripcion" className="cta-link cta-link--program programa-hero__cta">
            <span>{t('registerOnlineCta')}</span>
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link cta-link--whatsapp"
            onClick={trackLead}
          >
            <WhatsAppIcon />
            <span>{t('registerHeroCta')}</span>
          </a>
        </header>

        {/* Section 1 — Three weeks to find your digital rhythm */}
        <section className="section fade-in-up delay-1">
          <h2>{t('registerIntroH2')}</h2>
          <p>{t('registerIntroP')}</p>
        </section>

        {/* Section 2 — What you'll take away */}
        <section className="section fade-in-up delay-2">
          <h2>{t('registerBenefitsH2')}</h2>
          <ul className="programa-benefits">
            <li>
              <span className="programa-benefits__icon" aria-hidden="true">📞</span>
              <span>{t('registerBenefit1')}</span>
            </li>
            <li>
              <span className="programa-benefits__icon" aria-hidden="true">🧠</span>
              <span>{t('registerBenefit2')}</span>
            </li>
            <li>
              <span className="programa-benefits__icon" aria-hidden="true">🛠</span>
              <span>{t('registerBenefit3')}</span>
            </li>
            <li>
              <span className="programa-benefits__icon" aria-hidden="true">🌿</span>
              <span>{t('registerBenefit4')}</span>
            </li>
          </ul>
        </section>

        {/* Section 3 — Why you can trust this */}
        <section className="section fade-in-up delay-3">
          <h2>{t('registerTrustH2')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('registerTrustText') }} />
          <Link to="/programa" className="register-intro__more">
            {t('registerTrustMoreLink')}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </section>

        {/* Section 4 — Video */}
        <section className="section fade-in-up">
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

        {/* Final CTA — WhatsApp */}
        <section className="programa-final-cta fade-in-up">
          <h2>{t('registerFinalCtaH2')}</h2>
          <p>{t('registerFinalCtaText')}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link cta-link--whatsapp"
            onClick={trackLead}
          >
            <WhatsAppIcon />
            <span>{t('registerFinalCtaBtn')}</span>
          </a>
        </section>

        {/* Secondary — schedule a call */}
        <div className="agendar-next fade-in-up">
          <p className="agendar-next__helper">{t('agendarCtaHelper')}</p>
          <Link to="/agendar" className="cta-link cta-link--agendar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <span>{t('agendarCta')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
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
