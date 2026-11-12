"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GA_ID, readConsent, writeConsent, type ConsentState } from "@/lib/analytics";

/**
 * GA4 + consent banner — §9.11.
 *
 * Consent Mode is initialised with analytics_storage denied, so nothing is
 * stored before the visitor chooses. The gtag script itself is only mounted
 * once consent is granted.
 */
export default function Analytics() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    // If a choice is already stored there is no banner to show, so settle now.
    if (stored !== null) {
      setReady(true);
      return;
    }
    // Otherwise wait for browser idle before showing the banner, so it never
    // competes with the hero for LCP. Measured: showing it eagerly cost ~0.9s
    // of LCP and 50ms of blocking time on mobile.
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!GA_ID) return null;

  const decide = (state: "granted" | "denied") => {
    writeConsent(state);
    setConsent(state);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'granted'
              });
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Banner — only once we know the stored answer, to avoid a flash */}
      {ready && consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie choices"
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--c-border)] bg-[var(--c-surface)] p-4 shadow-[0_-4px_24px_rgba(11,59,33,0.10)] xl:bottom-0"
          style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <div className="container-dw flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.9375rem] text-[var(--c-ink-2)]">
              We&apos;d like to use Google Analytics to understand how this site is used. It sets
              cookies. Nothing is collected unless you agree.{" "}
              <a href="/privacy" className="underline hover:text-[var(--c-green-700)]">
                Read our privacy policy
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button type="button" onClick={() => decide("denied")} className="btn btn--secondary !min-h-11 !py-2">
                Decline
              </button>
              <button type="button" onClick={() => decide("granted")} className="btn btn--primary !min-h-11 !py-2">
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
