import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICE_AREAS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = pageSeo({
  path: "/abuja",
  title: "Cleaning & Pest Control in Abuja",
  description:
    "Professional cleaning and pest control across Abuja FCT since 2017 — Gwarinpa, Maitama, Asokoro, Wuse, Jabi and every other district. 650+ clients and a 5.0 Google rating.",
  image: "/photos/team-uba-marketplace.jpg",
  imageAlt: "The Dust and Wipes team at UBA Marketplace in Abuja",
});

export default function AbujaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Abuja", path: "/abuja" },
        ])}
      />
      <PageHero
        eyebrow="Locations · Abuja"
        title="Our home city, since 2017."
        lede="Dust & Wipes began in Abuja and still runs its operations here. Our teams cover every district in the FCT, for homes, offices and facilities alike."
      >
        <Link href="/contact" className="btn btn--on-dark">Get a free quote</Link>
      </PageHero>

      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2 className="h2-section mt-4">Every district in the FCT.</h2>
            <p className="mt-5 text-[var(--c-ink-2)] prose-measure">
              If your area is not listed, it is still worth asking — we cover the surrounding
              satellite towns as well.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] px-3.5 py-1.5 text-[0.875rem] font-medium text-[var(--c-green-800)]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8 h-fit">
            <p className="eyebrow">Abuja office</p>
            <address className="mt-4 not-italic text-[var(--c-ink-2)] leading-relaxed">
              {COMPANY.address}
            </address>
            <dl className="mt-6 space-y-3 text-[0.9375rem]">
              <div>
                <dt className="font-semibold text-[var(--c-green-800)]">Phone</dt>
                <dd className="text-[var(--c-ink-2)]">
                  <a className="hover:text-[var(--c-green-700)]" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
                  {" · "}
                  <a className="hover:text-[var(--c-green-700)]" href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`}>{COMPANY.phone2}</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--c-green-800)]">Hours</dt>
                <dd className="text-[var(--c-ink-2)]">Monday–Saturday, 7am–6pm</dd>
              </div>
            </dl>
            <Link href="/contact" className="btn btn--primary mt-7 w-full">Book a site assessment</Link>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "Eleven services across cleaning and pest control" },
          { href: "/gallery", label: "Our work in Abuja", detail: "Photographs from real jobs" },
          { href: "/clients", label: "Who we work with", detail: "Sectors and organisations served" },
          { href: "/lagos", label: "Lagos", detail: "Our other city" },
        ]}
      />
      <CTABanner />
    </>
  );
}
