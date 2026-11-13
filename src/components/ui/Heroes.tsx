import Image from "next/image";
import type { ReactNode } from "react";
import { PHOTOS, photoSrc, type PhotoSlug } from "@/lib/photos";

/**
 * Split hero — §4.5: most photos are portrait, so a split layout suits them
 * far better than stretching one full-width.
 */
export function SplitHero({
  eyebrow,
  title,
  lede,
  photo,
  alt,
  actions,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  photo: PhotoSlug;
  alt: string;
  actions?: ReactNode;
}) {
  const p = PHOTOS[photo];
  return (
    <section className="hero-bg relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-20">
      <div className="container-dw grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow !text-[var(--c-orange-300)]">{eyebrow}</p>
          <h1 className="h1-display mt-4 max-w-[16ch] font-semibold text-white">{title}</h1>
          {lede && <p className="lede mt-6 !text-white/75">{lede}</p>}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </div>
        <div className="photo-zoom rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={photoSrc(photo)}
            alt={alt}
            width={p.width}
            height={p.height}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full h-auto photo-grade"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Collage hero — §6.1. One lead photo with two supporting portraits, so
 * portrait sources are never stretched.
 */
export function CollageHero({
  eyebrow,
  title,
  lede,
  photos,
  alts,
  actions,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  photos: [PhotoSlug, PhotoSlug, PhotoSlug];
  alts: [string, string, string];
  actions?: ReactNode;
}) {
  const [lead, a, b] = photos;
  const lp = PHOTOS[lead];
  return (
    <section className="hero-bg relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-20">
      <div className="container-dw grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow !text-[var(--c-orange-300)]">{eyebrow}</p>
          <h1 className="h1-display mt-4 max-w-[17ch] font-semibold text-white">{title}</h1>
          {lede && <p className="lede mt-6 !text-white/75">{lede}</p>}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="photo-zoom col-span-2 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={photoSrc(lead)}
              alt={alts[0]}
              width={lp.width}
              height={lp.height}
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="w-full h-[clamp(11rem,22vw,16rem)] object-cover photo-grade"
            />
          </div>
          {[a, b].map((slug, i) => {
            const pp = PHOTOS[slug];
            return (
              <div key={slug} className="photo-zoom rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photoSrc(slug)}
                  alt={alts[i + 1]}
                  width={pp.width}
                  height={pp.height}
                  sizes="(max-width: 1024px) 50vw, 23vw"
                  className="w-full h-[clamp(8rem,16vw,12rem)] object-cover photo-grade"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
