"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { PHOTOS, photoSrc, type PhotoSlug } from "@/lib/photos";

/**
 * Before/after slider — §4.7, §6.8.
 * Only ever used on genuine same-job pairs (§6.8). Keyboard operable via the
 * range input, which is also what screen readers announce.
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: PhotoSlug;
  after: PhotoSlug;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const b = PHOTOS[before];
  const a = PHOTOS[after];

  const drag = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={box}
        className="relative select-none overflow-hidden rounded-2xl"
        style={{ aspectRatio: `${b.width} / ${b.height}` }}
        onPointerMove={(e) => e.buttons === 1 && drag(e.clientX)}
        onPointerDown={(e) => drag(e.clientX)}
      >
        <Image
          src={photoSrc(after)}
          alt={afterAlt}
          width={a.width}
          height={a.height}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-cover photo-grade"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <Image
            src={photoSrc(before)}
            alt={beforeAlt}
            width={b.width}
            height={b.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover photo-grade"
            style={{ maxWidth: "none", width: box.current?.offsetWidth ?? "100%" }}
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[0.75rem] font-semibold text-white backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[0.75rem] font-semibold text-white backdrop-blur-sm">
          {afterLabel}
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-green-800)" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 6L3 12l6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>

      <label className="block">
        <span className="sr-only">Reveal before and after — drag to compare</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-[var(--c-green-700)]"
          aria-label={`Comparison slider, showing ${Math.round(pos)}% of the before image`}
        />
      </label>
    </div>
  );
}
