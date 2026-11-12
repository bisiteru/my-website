"use client";

import { useEffect, useRef, useState } from "react";

/** Count-up statistic — §4.8. Starts when scrolled into view; static under
 *  prefers-reduced-motion. */
export function StatCounter({
  value,
  suffix = "",
  decimals = 0,
  label,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const DURATION = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          // ease-out cubic
          setShown(value * (1 - Math.pow(1 - t, 3)));
          if (t < 1) requestAnimationFrame(tick);
          else setShown(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-[clamp(2.25rem,1.6rem+2.4vw,3.25rem)] font-bold leading-none text-[var(--c-green-700)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {shown.toFixed(decimals)}
        <span className="text-[var(--c-orange-600)]">{suffix}</span>
      </div>
      <div className="mt-2.5 text-[0.875rem] font-medium text-[var(--c-ink-2)]">{label}</div>
    </div>
  );
}

export function StatRow({
  stats,
}: {
  stats: { value: number; suffix?: string; decimals?: number; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((s) => (
        <StatCounter key={s.label} {...s} />
      ))}
    </div>
  );
}
