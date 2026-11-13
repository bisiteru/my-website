import Link from "next/link";
import type { ReactNode } from "react";
import { COMPANY } from "@/lib/constants";

/** CTA band — §4.7, closes most pages. */
export function CtaBand({
  title = "Let's make your space spotless.",
  lede = "Tell us what you need and we'll come back within two hours with a clear, no-obligation quote.",
  primary = { href: "/contact", label: "Get a free quote" },
  secondary,
}: {
  title?: string;
  lede?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    "Hello! I'd like to get a quote for your services."
  )}`;
  return (
    <section className="bg-[var(--c-green-900)] py-[var(--section-y)]">
      <div className="container-dw text-center">
        <h2 className="h2-section !text-white mx-auto max-w-[18ch]">{title}</h2>
        <p className="lede mx-auto mt-5 !text-white/70">{lede}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href={primary.href} className="btn btn--on-dark">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn btn--outline-dark">
              {secondary.label}
            </Link>
          ) : (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn--outline-dark">
              WhatsApp us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/** Map block — §4.7, §6.10. */
export function MapBlock({
  title = "Find us",
  query = "Irama Plaza Gwarinpa Abuja",
  address,
}: {
  title?: string;
  query?: string;
  address?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--c-border)]">
      <iframe
        title={`Map showing ${title}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        width="100%"
        height="340"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {address && (
        <address className="not-italic bg-[var(--c-surface)] px-6 py-4 text-[0.9375rem] text-[var(--c-ink-2)]">
          {address}
        </address>
      )}
    </div>
  );
}

/** Section header — the eyebrow + heading + optional lede pattern from §4.3. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  center = false,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`h2-section mt-4 ${center ? "mx-auto" : ""} max-w-[22ch]`}>{title}</h2>
      {lede && <p className={`lede mt-5 ${center ? "mx-auto" : ""}`}>{lede}</p>}
      {children}
    </div>
  );
}
