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
