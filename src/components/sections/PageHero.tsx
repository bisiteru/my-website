import type { ReactNode } from "react";

/**
 * Shared page hero — BUILD_BRIEF §4.1 (calm, spacious, one clear headline,
 * one supporting line, one primary action) and §4.4 spacing.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-bg relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="container-dw relative">
        <p className="eyebrow !text-[var(--c-orange-300)]">{eyebrow}</p>
        <h1 className="h1-display mt-4 max-w-[18ch] font-semibold text-white">{title}</h1>
        {lede && <p className="lede mt-6 !text-white/75">{lede}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
