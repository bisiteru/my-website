import Link from "next/link";
import type { ReactNode } from "react";
import { COMPANY } from "@/lib/constants";

/**
 * Enquiry section — §4.7, closes most pages.
 *
 * Replaces the old centred CTA band, which ended every page with the same
 * sentence and two buttons of equal visual weight. Two problems with that: a
 * reader on the pest control page and a reader on the training page were asked
 * for the same undifferentiated "free quote", and the pair of buttons split the
 * decision instead of making one.
 *
 * So: one action, stated in the language of the page it closes. Phone, WhatsApp
 * and email stay available as plain text links, which is what a secondary
 * action should look like — reachable, but not competing. `points` carries the
 * three things that actually reduce hesitation (what you get, how fast, what it
 * costs to ask), since "get a quote" on its own answers none of them.
 */
export function EnquirySection({
  eyebrow = "Enquiries",
  title,
  lede,
  points,
  action = { href: "/contact", label: "Request a quote" },
  note,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  points: string[];
  action?: { href: string; label: string };
  note?: string;
}) {
  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    `Hello! I'd like to ask about ${title.replace(/\.$/, "").toLowerCase()}.`
  )}`;
  return (
    <section className="section section--band border-t border-[var(--c-border)]">
      <div className="container-dw grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2-section mt-4 max-w-[20ch]">{title}</h2>
          <p className="lede mt-5">{lede}</p>
          <div className="mt-8">
            <Link href={action.href} className="btn btn--primary">
              {action.label}
            </Link>
          </div>
          <p className="mt-6 text-[0.9375rem] text-[var(--c-ink-2)]">
            Or reach us directly —{" "}
            <a className="link-quiet" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
              {COMPANY.phone}
            </a>
            ,{" "}
            <a className="link-quiet" href={wa} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            , or{" "}
            <a className="link-quiet" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
            .
          </p>
        </div>

        <div className="lg:pt-[2.4rem]">
          <ul className="space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-5 py-4 text-[0.9375rem] text-[var(--c-ink-2)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c-green-600)]"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {note && <p className="mt-4 text-[0.8125rem] text-[var(--c-ink-2)]">{note}</p>}
        </div>
      </div>
    </section>
  );
}

/**
 * Kept so the handful of pages that have no service-specific ask still render
 * the same section. Prefer passing real copy to EnquirySection.
 */
export function CtaBand(props: Partial<Parameters<typeof EnquirySection>[0]> = {}) {
  return (
    <EnquirySection
      title="Tell us what you need."
      lede="Send us the space, the service and your timing. We reply within two hours during working hours with a clear, itemised quote."
      points={[
        "A written quote, itemised by task — not a single lump figure.",
        "A reply within two working hours, and a site visit if the job needs one.",
        "No charge and no obligation for the quote or the assessment.",
      ]}
      {...props}
    />
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
