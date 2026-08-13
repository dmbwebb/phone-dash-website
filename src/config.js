// Centralized site configuration.
// Program WhatsApp number — digits only, with country code, no '+' or spaces.
// Display number: +57 310 722 4553
export const WHATSAPP_NUMBER = '573107224553'

// Pre-filled message that opens when a user taps any WhatsApp CTA on the site.
export const WHATSAPP_MESSAGES = {
  es: 'Hola, quiero saber más sobre el programa Mi Ritmo Digital!',
  en: 'Hi! I want to learn more about the Mi Ritmo Digital program!',
}

export function buildWhatsappLink(language = 'es') {
  const message = WHATSAPP_MESSAGES[language] || WHATSAPP_MESSAGES.es
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// SurveyCTO web form for family registration + eligibility screening.
// The trailing `caseid=` is required by SurveyCTO's web-collect URL format.
//
// `appearance=min` is SurveyCTO's official embed parameter. Besides trimming
// the form's chrome, it suppresses the "you have disabled cookie support"
// warning modal — which fires for ordinary users, not just odd setups: the
// iframe is cross-origin (kilongajfl.surveycto.com inside miritmodigital.com),
// so Safari/iOS blocks its cookies as third-party by default. Without this, a
// parent on an iPhone meets an English warning dialog on a Spanish form.
// Docs: docs.surveycto.com/03-collecting-data/02-web-data-collection/05.embedding-web-forms.html
const REGISTRO_FORM_BASE =
  'https://kilongajfl.surveycto.com/collect/mrd_registro?caseid='

// Embedded in an iframe (desktop) — needs the embed-optimized appearance.
export const REGISTRO_FORM_URL = `${REGISTRO_FORM_BASE}&appearance=min`

// Opened full-screen in its own tab (mobile CTA + "it didn't load" fallback).
// Deliberately WITHOUT appearance=min: full-screen the form is first-party, so
// cookies work and the standard, roomier layout is the better experience.
export const REGISTRO_FORM_URL_FULLSCREEN = REGISTRO_FORM_BASE
