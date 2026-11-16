import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Cross-links between services, cities, gallery, clients and the blog (§9.8). */
export default function RelatedLinks({
  title = "Explore more",
  links,
}: {
  title?: string;
  links: { href: string; label: string; detail: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="section">
      <div className="container-dw">
        <p className="eyebrow">{title}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="card group block h-full p-6">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-[var(--c-green-800)]">{l.label}</span>
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="shrink-0 text-[var(--c-green-600)] transition-transform group-hover:translate-x-1"
                  />
                </span>
                <span className="mt-1.5 block text-[0.9375rem] text-[var(--c-ink-2)]">{l.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
