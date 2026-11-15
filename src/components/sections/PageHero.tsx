import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PHOTOS, photoSrc, type PhotoSlug } from "@/lib/photos";

/**
 * Inner-page header — rebuilt per SITE_REVIEW 1.3.
 *
 * It used to be the same dark green gradient as the home hero, on all
 * fourteen pages. Repeating a hero treatment that often is what made the site
 * read as a template: by the third page the gradient carries no information,
 * and it pushed the actual content of every page below the fold.
 *
 * This is a light header instead — a breadcrumb, the heading, one relevant
 * photograph. The dark photo hero now belongs to the home page alone, which is
 * the only place it earns its height.
 *
 * The photograph is `priority` because on an inner page it is almost always
 * the LCP element; the heading sits in the first grid column so it still
 * renders first in source order for a screen reader.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  crumbs = [],
  photo,
  alt,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Trail after "Home"; the last entry is the current page and is not linked. */
  crumbs?: { label: string; href?: string }[];
  photo?: PhotoSlug;
  alt?: string;
  children?: ReactNode;
}) {
  const p = photo ? PHOTOS[photo] : null;

  return (
    <section className="border-b border-[var(--c-border)] bg-[var(--c-bg)] pt-28 pb-14 sm:pt-32 sm:pb-16">
      <div
        className={`container-dw ${
          p ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16" : ""
        }`}
      >
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-[var(--c-ink-2)]">
              <li>
                <Link href="/" className="hover:text-[var(--c-green-700)]">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-[var(--c-border)]">
                    /
                  </span>
                  {c.href && i < crumbs.length - 1 ? (
                    <Link href={c.href} className="hover:text-[var(--c-green-700)]">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-medium text-[var(--c-green-800)]">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="eyebrow mt-7">{eyebrow}</p>
          <h1 className="h1-display mt-3 max-w-[19ch]">{title}</h1>
          {lede && <p className="lede mt-5">{lede}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>

        {p && photo && (
          <div className="photo-zoom overflow-hidden rounded-2xl">
            <Image
              src={photoSrc(photo)}
              alt={alt ?? ""}
              width={p.width}
              height={p.height}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-56 w-full object-cover photo-grade sm:h-72 lg:h-[22rem]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
