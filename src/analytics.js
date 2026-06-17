// Lightweight wrappers around the Meta (Facebook) Pixel.
// The pixel itself is initialised in index.html (fbq('init', ...)).
// These helpers guard against fbq being undefined (e.g. blocked by an
// ad blocker or not yet loaded) so they never throw.

// Fire a standard PageView. Used on client-side route changes, since the
// base snippet in index.html only fires once on the initial page load.
export function trackPageView() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
}

// Fire a standard Lead event. This is our conversion: a visitor clicking a
// WhatsApp CTA to contact a program advisor (the registration action).
export function trackLead() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead')
  }
}
