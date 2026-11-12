import Link from "next/link";
import Image from "next/image";
import { PHOTOS, photoSrc } from "@/lib/photos";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/services", label: "Our services" },
  { href: "/training", label: "Cleaner training" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  const p = PHOTOS["corridor-team-mopping"];
  return (
    <section className="hero-bg min-h-[80vh] flex items-center pt-28 pb-20">
      <div className="container-dw grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow !text-[var(--c-orange-300)]">Error 404</p>
          <h1 className="h1-display mt-4 font-semibold text-white">
            This page has been cleared away.
          </h1>
          <p className="lede mt-6 !text-white/75">
            The page you were looking for doesn&apos;t exist, or it has moved. Here is the way back.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="btn btn--on-dark">Back to home</Link>
            <Link
              href="/contact"
              className="btn btn--outline-dark"
            >
              Get a free quote
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[0.9375rem] text-white/70 underline underline-offset-4 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block rounded-2xl overflow-hidden">
          <Image
            src={photoSrc("corridor-team-mopping")}
            alt="A Dust and Wipes team mopping an office corridor"
            width={p.width}
            height={p.height}
            className="w-full h-auto photo-grade"
            sizes="(max-width: 1024px) 0px, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
