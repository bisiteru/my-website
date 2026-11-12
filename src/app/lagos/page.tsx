import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { CtaBand, SectionHeader } from "@/components/ui/Blocks";
import { CaseStudyCard } from "@/components/ui/Cards";
import { PHOTOS, photoSrc } from "@/lib/photos";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = pageSeo({
  path: "/lagos",
  title: "Cleaning & Cleaner Training in Lagos",
  description:
    "Dust & Wipes in Lagos — a training-led relaunch for organisations with in-house cleaning teams, plus commercial cleaning. Lagos address; site assessments by appointment.",
  image: "/photos/lagos-team-uniform.jpg",
  imageAlt: "The Dust and Wipes Lagos team in branded uniform",
});

const AUDIENCE = [
  { title: "Embassies & international organisations", detail: "Where cleaning staff are directly employed and standards are audited." },
  { title: "Hotels & hospitality", detail: "Housekeeping teams who need a consistent, inspectable routine." },
  { title: "Clinics & healthcare", detail: "Clinical and general zones that must never share equipment." },
  { title: "Corporates with in-house cleaners", detail: "Teams already on payroll who have never been formally trained." },
];

export default function LagosPage() {
  const team = PHOTOS["lagos-team-uniform"];

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Lagos", path: "/lagos" },
        ])}
      />
      <PageHero
        eyebrow="Locations · Lagos"
        title="A training-led relaunch in Lagos."
        lede="We are rebuilding our Lagos presence around what we do best: equipping in-house cleaning teams to work to a professional standard."
      >
        <Link href="/contact?service=training" className="btn btn--on-dark">Discuss training</Link>
      </PageHero>

      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="How we work in Lagos"
              title="Training first, cleaning alongside."
            />
            <div className="mt-5 space-y-4 text-[var(--c-ink-2)] prose-measure">
              <p>
                Many Lagos organisations already employ their own cleaners. Rather than replace
                them, we train them — housekeeping routines, hygiene and safety, correct use of
                chemicals and equipment, and the supervision that holds a standard in place.
              </p>
              <p>
                We also take on commercial cleaning for organisations that would rather outsource
                it. Our Lagos track record to date is the work we delivered for Skin 101 Clinics
                Limited across 2024 and 2025; we are now relaunching here and taking on new
                clients.
              </p>
            </div>

            <h3 className="h3-card mt-10 !text-[1.25rem]">Who we are speaking to</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {AUDIENCE.map((a) => (
                <li key={a.title} className="card p-5">
                  <span className="block font-semibold text-[var(--c-green-800)]">{a.title}</span>
                  <span className="mt-1.5 block text-[0.9375rem] text-[var(--c-ink-2)]">{a.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* §3.2 — business address, never a staffed walk-in office */}
          <div className="h-fit space-y-6">
            <div className="card p-8">
              <p className="eyebrow">Lagos</p>
              <p className="mt-4 font-semibold text-[var(--c-green-800)]">
                Lagos address · Site assessments by appointment
              </p>
              <address className="mt-2 not-italic text-[0.9375rem] text-[var(--c-ink-2)]">
                {COMPANY.lagosAddress}
              </address>
              <dl className="mt-6 space-y-3 text-[0.9375rem]">
                <div>
                  <dt className="font-semibold text-[var(--c-green-800)]">Phone &amp; WhatsApp</dt>
                  <dd className="text-[var(--c-ink-2)]">
                    <a className="hover:text-[var(--c-green-700)]" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--c-green-800)]">Email</dt>
                  <dd className="text-[var(--c-ink-2)]">
                    <a className="hover:text-[var(--c-green-700)]" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                  </dd>
                </div>
              </dl>
              <Link href="/contact" className="btn btn--primary mt-7 w-full">Book a site assessment</Link>
            </div>

            <figure className="m-0">
              <div className="photo-zoom overflow-hidden rounded-2xl">
                <Image
                  src={photoSrc("lagos-team-uniform")}
                  alt="The Dust and Wipes Lagos team in branded uniform"
                  width={team.width}
                  height={team.height}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-auto photo-grade"
                />
              </div>
              <figcaption className="mt-2.5 text-[0.875rem] text-[var(--c-ink-2)]">
                Our Lagos team.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Lagos track record — named, with consent on file */}
      <section className="section section--band">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Our Lagos track record"
            title="What we delivered here."
            lede="One engagement to date, named with the client's permission."
          />
          <div className="mt-12 max-w-2xl">
            <CaseStudyCard
              sector="Healthcare & clinics"
              city="Lagos · 2024–2025"
              title="Skin 101 Clinics Limited"
              challenge="An aesthetics, dermatology and plastic surgery practice whose treatment rooms and busy reception needed the same standard every day."
              action="A trained team on a fixed daily routine, with colour-coded equipment separated by zone to stop cross-contamination between clinical and general areas."
              result="A consistent standard the clinic could plan around, delivered throughout 2024 and 2025."
              photo="clinic-reception-mopping"
              alt="A cleaner mopping the reception floor at Skin 101 Clinics in Lagos"
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/training", label: "Cleaner training", detail: "The heart of our Lagos offer" },
          { href: "/services", label: "All services", detail: "Eleven services across cleaning and pest control" },
          { href: "/clients", label: "Who we work with", detail: "Sectors and organisations served" },
          { href: "/abuja", label: "Abuja", detail: "Our home city since 2017" },
        ]}
      />
      <CtaBand
        title="Starting with your team in Lagos."
        lede="Tell us about your premises and your cleaning staff, and we'll propose a programme."
        primary={{ href: "/contact?service=training", label: "Discuss training" }}
        secondary={{ href: "/contact", label: "Get a cleaning quote" }}
      />
    </>
  );
}
