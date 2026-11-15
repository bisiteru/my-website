"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { photoSrc, type PhotoSlug } from "@/lib/photos";

/**
 * Two-column service index — SITE_REVIEW 1.3.
 *
 * Replaces six identical "Learn more →" cards in a 3 × 2 grid. Those cards
 * carried one photo and one line each, sat at uneven heights because the
 * benefit lines differ in length, and made the reader scan the same card
 * shape six times to find the service they came for.
 *
 * A list is faster to scan than a grid of cards, and it lets the service names
 * be set large enough to read as a menu. One photograph on the right
 * cross-fades as the reader hovers, focuses or taps through the list — the
 * "photo swap on the service index" item in the Motion direction. The image is
 * decorative here: every photograph is already announced by the link it
 * belongs to, so it carries an empty alt and sits behind aria-hidden.
 *
 * The list works with scripts off and with a keyboard: these are ordinary
 * links, and the photo responds to focus as well as hover. On touch the photo
 * simply stays on the first service, which is why the list and not the image
 * carries the meaning.
 */
export default function ServiceIndex({
  services,
}: {
  services: { id: string; title: string; shortDesc: string; href: string; photo: PhotoSlug }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
      <ul className="-mt-2">
        {services.map((s, i) => (
          <li key={s.id}>
            <Link
              href={s.href}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              className="group flex items-baseline justify-between gap-6 border-b border-[var(--c-border)] py-5 transition-colors hover:border-[var(--c-green-600)]"
            >
              <span>
                <span
                  className="block text-[1.375rem] font-semibold leading-tight text-[var(--c-green-800)] transition-colors group-hover:text-[var(--c-green-700)] sm:text-[1.5rem]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.title}
                </span>
                <span className="mt-1.5 block text-[0.9375rem] text-[var(--c-ink-2)]">
                  {s.shortDesc}
                </span>
              </span>
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="mt-1 shrink-0 text-[var(--c-green-600)] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="relative hidden overflow-hidden rounded-2xl bg-[var(--c-band)] lg:block"
        style={{ aspectRatio: "4 / 5" }}
      >
        {services.map((s, i) => (
          <Image
            key={s.id}
            src={photoSrc(s.photo)}
            alt=""
            fill
            sizes="(max-width: 1024px) 0px, 36vw"
            priority={i === 0}
            className={`object-cover photo-grade transition-opacity duration-300 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
