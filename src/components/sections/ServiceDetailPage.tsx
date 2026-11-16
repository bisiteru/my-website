import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Accordion from "@/components/ui/Accordion";
import { EnquirySection } from "@/components/ui/Blocks";
import { PHOTOS, photoSrc, type PhotoSlug } from "@/lib/photos";

/**
 * Shared template for the per-service detail pages — SITE_REVIEW 2.5.
 *
 * The review's complaint was that cleaning and pest control shared one
 * /services page as short cards with four bullets each, with no process, no
 * guidance on price and no FAQs, so a buyer comparing suppliers had nothing to
 * read. /pest-control was built first and proved the shape; this is that shape
 * made reusable for deep cleaning, post-construction and commercial cleaning.
 *
 * Every one of these is an ADDITION. The matching /services#anchor still
 * resolves and still carries the service's summary (section 3.1: no URL moves,
 * no anchors dropped).
 *
 * On pricing: the review asks for typical ranges, and the owner has not
 * supplied any. Inventing figures for a page that quotes per job would be
 * worse than omitting them, so each page carries "what affects the price" —
 * the honest version of the same answer, and the thing a buyer actually needs
 * in order to compare two quotes.
 */
export type ServiceDetail = {
  anchor: string;
  eyebrow: string;
  title: string;
  lede: string;
  heroPhoto: PhotoSlug;
  heroAlt: string;
  intro: string[];
  includes: { title: string; detail: string }[];
  priceFactors: { label: string; detail: string }[];
  process: { n: string; title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  gallery?: { photo: PhotoSlug; alt: string }[];
  related: { href: string; label: string; detail: string }[];
  enquiry: { title: string; lede: string; points: string[]; action: { href: string; label: string } };
};

export default function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        crumbs={[{ label: "Services", href: "/services" }, { label: data.title }]}
        photo={data.heroPhoto}
        alt={data.heroAlt}
        title={data.title}
        lede={data.lede}
      >
        <Link href="/contact" className="btn btn--primary">
          Get a quote
        </Link>
      </PageHero>

      {/* What it is, and what is included */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">What this covers</p>
            <h2 className="h2-section mt-4 max-w-[18ch]">What the job actually involves.</h2>
            <div className="mt-5 space-y-4 text-[var(--c-ink-2)] prose-measure">
              {data.intro.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="grid auto-rows-min gap-4 self-start sm:grid-cols-2 lg:pt-[2.4rem]">
            {data.includes.map((i) => (
              <li key={i.title} className="card p-6">
                <h3 className="h3-card !text-[1.0625rem]">{i.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-[var(--c-ink-2)]">{i.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section section--band scroll-mt-28">
        <div className="container-dw">
          <p className="eyebrow">How a job runs</p>
          <h2 className="h2-section mt-4 max-w-[22ch]">From enquiry to the final walk-through.</h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((s) => (
              <li key={s.n} className="card p-7">
                <span
                  className="font-semibold text-[var(--c-orange-700)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.n}
                </span>
                <h3 className="h3-card mt-3 !text-[1.0625rem]">{s.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] text-[var(--c-ink-2)]">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What affects the price */}
      <section id="pricing" className="section scroll-mt-28">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">What it costs</p>
            <h2 className="h2-section mt-4 max-w-[18ch]">What moves the price.</h2>
            <p className="lede mt-5">
              We do not publish a rate card, because a figure that ignores the state of the space
              would be a guess you could not rely on. These are the things that actually change
              the number, so you can see what you are being quoted for — ours or anyone
              else&apos;s.
            </p>
            <Link href="/contact" className="btn btn--primary mt-8">
              Get an itemised quote
            </Link>
          </div>
          <dl className="space-y-5 lg:pt-[2.4rem]">
            {data.priceFactors.map((f) => (
              <div key={f.label} className="border-l-2 border-[var(--c-green-600)] pl-5">
                <dt className="font-semibold text-[var(--c-green-800)]">{f.label}</dt>
                <dd className="mt-1.5 text-[0.9375rem] text-[var(--c-ink-2)]">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Photographs of this work */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="section section--band">
          <div className="container-dw">
            <p className="eyebrow">This work, in our own photographs</p>
            <h2 className="h2-section mt-4 max-w-[20ch]">Jobs we have done.</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.gallery.map((g) => (
                <li key={g.photo} className="photo-zoom overflow-hidden rounded-2xl">
                  <Image
                    src={photoSrc(g.photo)}
                    alt={g.alt}
                    width={PHOTOS[g.photo].width}
                    height={PHOTOS[g.photo].height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-56 w-full object-cover photo-grade"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section id="faqs" className="section scroll-mt-28">
        <div className="container-dw max-w-3xl">
          <p className="eyebrow">Questions</p>
          <h2 className="h2-section mt-4">What people ask before booking.</h2>
          <div className="mt-10">
            <Accordion items={data.faqs} headingLevel={3} />
          </div>
        </div>
      </section>

      <RelatedLinks links={data.related} />

      <EnquirySection
        eyebrow={`${data.title} enquiries`}
        title={data.enquiry.title}
        lede={data.enquiry.lede}
        action={data.enquiry.action}
        points={data.enquiry.points}
      />
    </>
  );
}
