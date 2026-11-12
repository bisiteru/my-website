"use client";

import { useEffect, useRef, useState } from "react";

/** Count-up statistic — §4.8. Starts when scrolled into view; static under
 *  prefers-reduced-motion. */
export function StatCounter({
  value,
  suffix = "",
  decimals = 0,
  label,
  /** Years and similar fixed figures should not count up from zero —
   *  animating 0 → 2017 reads as a glitch, not an achievement. */
  animate = true,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  animate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(animate ? 0 : value);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!animate || reduce) {
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
  }, [value, animate]);

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
  stats: { value: number; suffix?: string; decimals?: number; label: string; animate?: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((s) => (
        <StatCounter key={s.label} {...s} />
      ))}
    </div>
  );
}
