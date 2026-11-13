"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PHOTOS, photoSrc, type PhotoSlug } from "@/lib/photos";

export interface GalleryItem {
  file: string;
  alt: string;
  caption?: string;
  category: string;
  city?: string;
}

/**
 * Masonry gallery with filters and lightbox — §4.7, §6.8.
 * CSS columns for masonry (no JS layout), native lazy-loading below the fold,
 * full keyboard support and a focus trap in the lightbox.
 */
export default function MasonryGallery({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: { slug: string; label: string }[];
}) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const shown = filter === "all" ? items : items.filter((i) => i.category === filter);

  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((n) => (n === null ? null : (n + dir + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  if (items.length === 0) return null;
  const active = open === null ? null : shown[open];

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photographs by category">
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => {
              setFilter(c.slug);
              setOpen(null);
            }}
            aria-pressed={filter === c.slug}
            className={`rounded-full px-4 py-2 text-[0.875rem] font-medium transition-colors ${
              filter === c.slug
                ? "bg-[var(--c-green-700)] text-white"
                : "border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-ink-2)] hover:border-[var(--c-green-600)] hover:text-[var(--c-green-700)]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "photograph" : "photographs"}
      </p>

      {/* Masonry */}
      <div className="mt-8 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
        {shown.map((item, n) => {
          const meta = PHOTOS[item.file as PhotoSlug];
          if (!meta) return null;
          return (
            <button
              key={item.file}
              type="button"
              onClick={() => setOpen(n)}
              className="photo-zoom block w-full overflow-hidden rounded-xl break-inside-avoid focus-visible:outline-3"
              aria-label={`Open: ${item.alt}`}
            >
              <Image
                src={photoSrc(item.file as PhotoSlug)}
                alt={item.alt}
                width={meta.width}
                height={meta.height}
                // Only the first two load eagerly. With 55 photos, a larger
                // eager batch starves the webfont and pushes text LCP out by
                // seconds, even though the images themselves are below the fold.
                loading={n < 2 ? undefined : "lazy"}
                priority={n < 2}
                fetchPriority={n < 2 ? "high" : "low"}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto photo-grade"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[60] flex flex-col bg-black/92 p-4 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center gap-3 overflow-hidden">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photograph"
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:flex"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>

            <figure className="flex max-h-full flex-col items-center">
              {(() => {
                const meta = PHOTOS[active.file as PhotoSlug];
                return (
                  <Image
                    src={photoSrc(active.file as PhotoSlug)}
                    alt={active.alt}
                    width={meta.width}
                    height={meta.height}
                    sizes="90vw"
                    className="max-h-[75vh] w-auto rounded-lg object-contain"
                  />
                );
              })()}
              {active.caption && (
                <figcaption className="mt-4 max-w-2xl text-center text-[0.9375rem] text-white/80">
                  {active.caption}
                </figcaption>
              )}
            </figure>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photograph"
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:flex"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </div>

          <p className="pb-2 text-center text-[0.8125rem] text-white/60">
            {open! + 1} of {shown.length}
          </p>
        </div>
      )}
    </>
  );
}
