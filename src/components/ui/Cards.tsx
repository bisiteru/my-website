import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { PHOTOS, photoSrc, type PhotoSlug } from "@/lib/photos";

/** Service card — §4.7 / §6.1 (photo, one-line benefit, link to anchor). */
export function ServiceCard({
  title,
  benefit,
  href,
  photo,
  alt,
}: {
  title: string;
  benefit: string;
  href: string;
  photo: PhotoSlug;
  alt: string;
}) {
  const p = PHOTOS[photo];
  return (
    <Link href={href} className="card photo-zoom group flex flex-col overflow-hidden">
      <Image
        src={photoSrc(photo)}
        alt={alt}
        width={p.width}
        height={p.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="h-44 w-full object-cover photo-grade"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="h3-card !text-[1.125rem]">{title}</h3>
        <p className="mt-2 flex-1 text-[0.9375rem] text-[var(--c-ink-2)]">{benefit}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[var(--c-green-700)] transition-all group-hover:gap-2.5">
          Learn more <ArrowRight size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/** Sector tile — §6.7. Text-only, so it never needs a photo it doesn't have. */
export function SectorTile({
  label,
  href,
  icon,
}: {
  label: string;
  href?: string;
  icon?: ReactNode;
}) {
  const inner = (
    <>
      {icon && <span className="mb-3 block text-[var(--c-green-600)]">{icon}</span>}
      <span className="block text-[1.0625rem] font-semibold text-[var(--c-green-800)]">{label}</span>
    </>
  );
  return href ? (
    <Link href={href} className="card block p-6 transition-colors hover:border-[var(--c-green-600)]">
      {inner}
    </Link>
  ) : (
    <div className="card p-6">{inner}</div>
  );
}

/** Case-study card — §6.7 (challenge → what we did → result). */
export function CaseStudyCard({
  sector,
  city,
  title,
  challenge,
  action,
  result,
  photo,
  alt,
}: {
  sector: string;
  city: string;
  title: string;
  challenge: string;
  action: string;
  result: string;
  photo?: PhotoSlug;
  alt?: string;
}) {
  const p = photo ? PHOTOS[photo] : null;
  return (
    <article className="card overflow-hidden">
      {p && photo && (
        <div className="photo-zoom">
          <Image
            src={photoSrc(photo)}
            alt={alt ?? ""}
            width={p.width}
            height={p.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-52 w-full object-cover photo-grade"
          />
        </div>
      )}
      <div className="p-7">
        <p className="eyebrow">
          {sector} · {city}
        </p>
        <h3 className="h3-card mt-3">{title}</h3>
        <dl className="mt-5 space-y-3.5 text-[0.9375rem]">
          {[
            ["Challenge", challenge],
            ["What we did", action],
            ["Result", result],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-semibold text-[var(--c-green-800)]">{k}</dt>
              <dd className="mt-0.5 text-[var(--c-ink-2)]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

/** Logo wall — §6.7. Renders nothing at all when no consented logo exists.
 *
 *  Client logos arrive in wildly different shapes: some wide wordmarks, some
 *  square marks, several with baked-in white or dark backgrounds. Rendering
 *  them inline makes a ragged wall. Each therefore sits in a fixed white tile
 *  with `object-contain`, so every organisation gets equal visual weight and
 *  opaque backgrounds blend into the tile instead of showing as boxes.
 *  Monochrome at rest, full colour on hover, per the brief. */
export function LogoWall({
  logos,
}: {
  logos: { name: string; file: string }[];
}) {
  if (logos.length === 0) return null;
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {logos.map((l) => (
        <li key={l.name}>
          <div className="flex h-28 items-center justify-center rounded-xl border border-[var(--c-border)] bg-white px-5 py-4">
            <Image
              src={`/client-logos/${l.file}`}
              alt={l.name}
              width={220}
              height={110}
              className="max-h-full w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
          <p className="mt-2 text-center text-[0.8125rem] text-[var(--c-ink-2)]">{l.name}</p>
        </li>
      ))}
    </ul>
  );
}

/** Process steps — §6.1 / §6.2 "How it works". */
/**
 * Process timeline — SITE_REVIEW 1.3.
 *
 * Was four numbered cards, the same "01-04 in a circle" pattern the review
 * found on three separate pages. It is now a horizontal timeline carried by
 * real photographs of each stage, so the steps are shown rather than counted.
 * The rule runs behind the row on wide screens and down the left on narrow
 * ones, which is what makes it read as a sequence without the numerals doing
 * the work.
 */
export function ProcessSteps({
  steps,
}: {
  steps: { title: string; detail: string; photo?: PhotoSlug; alt?: string }[];
}) {
  return (
    <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {/* The connecting rule. Decorative, so it is hidden from assistive tech;
          the ordered list already conveys the sequence. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-[5.5rem] hidden h-px bg-[var(--c-border)] lg:block"
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          {s.photo ? (
            <div className="photo-zoom overflow-hidden rounded-2xl">
              <Image
                src={photoSrc(s.photo)}
                alt={s.alt ?? ""}
                width={600}
                height={450}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-40 w-full object-cover photo-grade"
              />
            </div>
          ) : (
            <div className="h-40 rounded-2xl bg-[var(--c-band)]" />
          )}
          <span
            className="relative z-10 mt-5 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] text-[0.8125rem] font-semibold text-[var(--c-green-700)]"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <h3 className="h3-card mt-4 !text-[1.0625rem]">{s.title}</h3>
          <p className="mt-2 text-[0.9375rem] text-[var(--c-ink-2)]">{s.detail}</p>
        </li>
      ))}
    </ol>
  );
}
