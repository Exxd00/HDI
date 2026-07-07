// Google Analytics (gtag.js) helpers.
// The base gtag snippet is loaded in src/app/layout.tsx (G-LB71DB28VR).

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    // The inline snippet defines a global gtag(); we type it loosely here.
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * The three primary conversion events.
 * NOTE: Mark each of these as a "Key event" (Schlüsselereignis) in the
 * GA4 Admin -> Events, so they count as conversions.
 */
export const GA_EVENTS = {
  /** Fires only after the contact form was sent successfully (thank-you state). */
  THANK_YOU: "thank_you",
  /** Fires after the user confirms the "call now" dialog. */
  CALL_CONFIRMED: "call_confirmed",
  /** Fires after the user confirms the "open WhatsApp" dialog. */
  WHATSAPP_CONFIRMED: "whatsapp_confirmed",
} as const;

/** Send a custom event to Google Analytics (no-op if gtag is unavailable). */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
