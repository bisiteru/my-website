"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

/**
 * Consent-respecting map — SITE_REVIEW 6.3.
 *
 * See the note on MapBlock in Blocks.tsx for why this exists. In short: the
 * embedded iframe set Google cookies on load, which made the cookie banner's
 * "Decline" meaningless on the Contact page.
 *
 * The placeholder is not a dead grey box — it carries the address, so for most
 * visitors nothing is lost by never pressing the button.
 */
export default function MapBlockClient({
  title,
  query,
  address,
}: {
  title: string;
  query: string;
  address?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const external = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--c-border)]">
      {loaded ? (
        <iframe
          title={`Map showing ${title}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
          width="100%"
          height="340"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex min-h-[340px] flex-col items-center justify-center gap-4 bg-[var(--c-band)] px-6 py-10 text-center">
          <MapPin size={26} className="text-[var(--c-green-700)]" aria-hidden="true" />
          {address && (
            <address className="not-italic text-[0.9375rem] font-medium text-[var(--c-green-800)]">
              {address}
            </address>
          )}
          <p className="max-w-[34ch] text-[0.875rem] text-[var(--c-ink-2)]">
            The map is loaded from Google, which sets its own cookies. We do not load it until
            you ask.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={() => setLoaded(true)} className="btn btn--primary">
              Load map
            </button>
            <a
              href={external}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet inline-flex items-center gap-1.5 text-[0.9375rem]"
            >
              Open in Google Maps
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      {address && loaded && (
        <address className="not-italic bg-[var(--c-surface)] px-6 py-4 text-[0.9375rem] text-[var(--c-ink-2)]">
          {address}
        </address>
      )}
    </div>
  );
}
