/**
 * Analytics — BUILD_BRIEF §9.11.
 *
 * GA4 is loaded only after the visitor consents (see CookieConsent). Until
 * then no Google script is fetched and no cookie is set, which is what makes
 * the banner meaningful rather than decorative.
 *
 * The event names below are the four conversions the brief asks for.
 */

/** GA4 measurement ID. This is public — it ships in the page source of every
 *  GA4 site — so it is safe in the repo. Override per-environment with
 *  NEXT_PUBLIC_GA_ID if you ever need a separate property (e.g. staging). */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-GXR7K2CX6K";
export const CONSENT_KEY = "dw-analytics-consent";

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?]
  | ["consent", "default" | "update", Record<string, string>];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

export type ConsentState = "granted" | "denied" | null;

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(state: Exclude<ConsentState, null>) {
  try {
    window.localStorage.setItem(CONSENT_KEY, state);
  } catch {
    /* private mode — consent simply won't persist, and we stay denied */
  }
  window.gtag?.("consent", "update", {
    analytics_storage: state === "granted" ? "granted" : "denied",
  });
}

/** Fire a conversion event. No-ops when GA is absent or consent was declined. */
export function track(event: AnalyticsEvent, params?: Record<string, unknown>) {
  if (!GA_ID || typeof window === "undefined") return;
  if (readConsent() !== "granted") return;
  window.gtag?.("event", event, params);
}

export type AnalyticsEvent =
  | "quote_form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "training_enquiry_start";
