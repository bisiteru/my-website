"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials?: string;
}

/** Testimonial carousel — §4.7/§4.8. Keyboard-operable, swipeable, pauses on
 *  interaction, and does not auto-advance under prefers-reduced-motion. */
export default function TestimonialCarousel({
  items,
  autoAdvanceMs = 7000,
}: {
  items: Testimonial[];
  autoAdvanceMs?: number;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setI((n) => (n + dir + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), autoAdvanceMs);
    return () => clearInterval(t);
  }, [paused, go, autoAdvanceMs, items.length]);

  if (items.length === 0) return null;
  const t = items[i];

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <figure className="card relative p-8 sm:p-10">
        <Quote size={40} className="text-[var(--c-green-100)]" aria-hidden="true" />
        <div className="mt-2 flex gap-0.5" role="img" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, n) => (
            <Star key={n} size={16} className="fill-[var(--c-orange-500)] text-[var(--c-orange-500)]" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-5 text-[1.0625rem] leading-relaxed text-[var(--c-ink)] prose-measure">
          {t.text}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--c-green-700)] text-[0.875rem] font-bold text-white">
            {t.initials ?? t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
          </span>
          <span>
            <span className="block font-semibold text-[var(--c-green-800)]">{t.name}</span>
            <span className="block text-[0.8125rem] text-[var(--c-ink-2)]">{t.role}</span>
          </span>
        </figcaption>
      </figure>

      {items.length > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
            {items.map((item, n) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={n === i}
                aria-label={`Testimonial ${n + 1} of ${items.length}`}
                onClick={() => setI(n)}
                className="grid h-6 place-items-center px-1"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    n === i ? "w-7 bg-[var(--c-green-700)]" : "w-2 bg-[var(--c-border)] hover:bg-[var(--c-green-500)]"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--c-border)] text-[var(--c-green-800)] transition-colors hover:bg-[var(--c-green-50)]"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--c-border)] text-[var(--c-green-800)] transition-colors hover:bg-[var(--c-green-50)]"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
