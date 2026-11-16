import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Landmark, Stethoscope, Briefcase, Hotel, PartyPopper, Home as HomeIcon, HardHat, Scale } from "lucide-react";
import { CollageHero } from "@/components/ui/Heroes";
import { SectorTile, ProcessSteps } from "@/components/ui/Cards";
import ServiceIndex from "@/components/ui/ServiceIndex";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { EnquirySection, SectionHeader } from "@/components/ui/Blocks";
import { photoSrc, PHOTOS } from "@/lib/photos";
import { SERVICES, TESTIMONIALS, WHY_US, AFFILIATIONS, COMPANY } from "@/lib/constants";
import galleryData from "../../content/gallery.json";

export const metadata: Metadata = pageSeo({
  path: "/",
  title: "Cleaning & Pest Control in Abuja & Lagos",
  description:
    "Cleaning, pest control, facility support and cleaner training in Abuja and Lagos since 2017. Licensed by EHCON and PECAN. 650+ clients, 5.0 on Google.",
  image: "/photos/team-uba-marketplace.jpg",
  imageAlt: "The Dust and Wipes team at UBA Marketplace in Abuja",
});

const SECTORS = [
  { label: "International organisations", Icon: Landmark },
  { label: "Diplomatic missions", Icon: Building2 },
  { label: "Healthcare & clinics", Icon: Stethoscope },
  { label: "Corporate offices", Icon: Briefcase },
  { label: "Hospitality & salons", Icon: Hotel },
  { label: "Events & exhibitions", Icon: PartyPopper },
  { label: "Premium residences", Icon: HomeIcon },
  { label: "Real estate & new builds", Icon: HardHat },
  { label: "Government & public institutions", Icon: Scale },
];

/** Four steps, carried by photographs of each stage (review 1.3). */
const PROCESS = [
  {
    title: "Contact us",
    detail: "Website form, WhatsApp or a phone call — whichever suits you.",
    photo: "office-desk-equipment-wiping" as const,
    alt: "A team member wiping down desk equipment in an office",
  },
  {
    title: "Get a quote",
    detail: "We assess the work and come back within two hours.",
    photo: "dust-and-wipes-branded-van" as const,
    alt: "The branded Dust and Wipes van arriving at a job",
  },
  {
    title: "We show up",
    detail: "A uniformed, trained team, on time and fully equipped.",
    photo: "office-floor-scrubbing-team" as const,
    alt: "A uniformed team scrubbing an office floor together",
  },
  {
    title: "Inspect the result",
    detail: "Not satisfied? We return and put it right, free.",
    photo: "office-lobby-mopping" as const,
    alt: "A finished office lobby after cleaning",
  },
];

const BADGE_FILES: Record<string, string> = {
  ISSA: "issa-logo.png",
  EHCON: "ehcon-logo.png",
  PECAN: "pecan-logo.png",
};

export default function HomePage() {
  const featured = SERVICES.filter((s) =>
    ["residential-cleaning", "commercial-cleaning", "deep-cleaning", "pest-control", "window-glass-cleaning", "training-consultancy"].includes(s.id)
  );
  const galleryPreview = galleryData.items.slice(0, 8);

  return (
    <>
      {/* 1 — Hero (§6.1) */}
      <CollageHero
        eyebrow="Abuja &amp; Lagos · Since 2017"
        title="Professional cleaning, pest control and cleaner training in Abuja and Lagos."
        lede="We create spotless, safe spaces for homes and organisations — and we train the people who keep them that way."
        photos={["team-uba-marketplace", "chandelier-cleaning", "office-floor-scrubbing-machine"]}
        alts={[
          "The Dust and Wipes team at UBA Marketplace in Abuja",
          "A cleaner carefully cleaning a hanging chandelier",
          "An operator running a floor-scrubbing machine through an office",
        ]}
        actions={
          <>
            <Link href="/contact" className="btn btn--on-dark">Get a free quote</Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent("Hello! I'd like to get a quote for your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-dark"
            >
              WhatsApp us
            </a>
          </>
        }
      />

      {/* 2 — Trust strip (§6.1) */}
      <section className="border-b border-[var(--c-border)] bg-[var(--c-surface)] py-12">
        <div className="container-dw">
          {/* The counter row is gone. Four numbers animating from zero read as
              decoration, server-rendered as "0+" and "0.0★" before scripts ran,
              and the review count is no longer published at the owner's
              request. One sentence carries the same facts and is true in the
              HTML from the first byte. */}
          <p className="mx-auto max-w-[46rem] text-center text-[1.0625rem] leading-relaxed text-[var(--c-ink-2)] sm:text-[1.125rem]">
            <strong className="font-semibold text-[var(--c-green-800)]">650+ clients served since 2017</strong>
            {" · "}5.0 on Google{" · "}members of ISSA, and licensed by EHCON and PECAN
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {AFFILIATIONS.map((a) => (
              <li key={a.short} className="flex items-center gap-2.5 rounded-xl border border-[var(--c-border)] bg-white px-4 py-2.5">
                <Image
                  src={`/badges/${BADGE_FILES[a.short]}`}
                  alt={`${a.full} logo`}
                  width={56}
                  height={56}
                  className="h-8 w-auto object-contain grayscale transition hover:grayscale-0"
                />
                <span className="leading-tight">
                  <span className="block text-[0.8125rem] font-semibold text-[var(--c-green-800)]">
                    {a.status} {a.short}
                  </span>
                  <span className="block text-[0.75rem] text-[var(--c-ink-2)]">{a.full}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center text-[0.875rem] text-[var(--c-ink-2)]">
            Our founder serves as Financial Secretary of the PECAN FCT chapter.
          </p>
        </div>
      </section>

      {/* 3 — Services grid (§6.1) */}
      <section className="section">
        <div className="container-dw">
          <SectionHeader
            eyebrow="What we do"
            title="Everything a property needs, from one team."
            lede="Eleven services across cleaning, pest control, facility support and training."
          />
          <div className="mt-12">
            <ServiceIndex
              services={featured.map((s) => ({
                id: s.id,
                title: s.title,
                shortDesc: s.shortDesc,
                href: s.href,
                photo: s.image.replace("/photos/", "").replace(".jpg", "") as Parameters<typeof photoSrc>[0],
              }))}
            />
          </div>
          <div className="mt-10">
            <Link href="/services" className="btn btn--secondary">View all 11 services</Link>
          </div>
        </div>
      </section>

      {/* 4 — Sectors (§6.1 → Clients) */}
      <section className="section section--band">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Who we work with"
            title="Built for places where cleanliness is scrutinised."
            lede="An embassy reception and a family home need the same thing: people who know the standard and hold it."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map(({ label, Icon }) => (
              <SectorTile key={label} label={label} href="/clients" icon={<Icon size={22} aria-hidden="true" />} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Training teaser (§6.1) */}
      <section className="section">
        <div className="container-dw grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="photo-zoom overflow-hidden rounded-2xl">
            <Image
              src={photoSrc("bisi-teru-leading-training")}
              alt="Bisi Teru leading a professional training session for a seated group"
              width={PHOTOS["bisi-teru-leading-training"].width}
              height={PHOTOS["bisi-teru-leading-training"].height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto photo-grade"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Training"
              title="Better cleaning starts with better equipped people."
              lede="We train in-house cleaning teams for embassies, international organisations, hotels and corporates — housekeeping, hygiene and safety, chemicals and PPE, supervision and quality. Delivered on site in both Abuja and Lagos, built around your premises and your products."
            />
            <p className="mt-5 text-[0.9375rem] text-[var(--c-ink-2)] prose-measure">
              We walk the site before we write the session, and the written proposal that follows
              costs you nothing.
            </p>
            <Link href="/training" className="btn btn--primary mt-8">Explore training</Link>
          </div>
        </div>
      </section>

      {/* 6 — Two cities (§6.1, honest Lagos wording §3.2) */}
      <section className="section section--band">
        <div className="container-dw">
          <SectionHeader eyebrow="Where we work" title="Two cities, one standard." center />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <h3 className="h3-card">Abuja</h3>
              <p className="mt-3 text-[var(--c-ink-2)]">
                Our home city since 2017, with teams covering every district in the FCT — and an
                office in Gwarinpa you can visit. Pest control here runs under our EHCON and PECAN
                licensing and our AMAC Operational Permit.
              </p>
              <Link href="/abuja" className="mt-6 inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-[var(--c-green-700)] transition-all hover:gap-2.5">
                Abuja services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="card p-8">
              <h3 className="h3-card">Lagos</h3>
              <p className="mt-3 text-[var(--c-ink-2)]">
                An established Lagos base on Admiralty Road, Lekki Phase 1, taking on monthly
                janitorial retainers across the state — and training for organisations that employ
                their own cleaners. Site assessments by appointment.
              </p>
              <Link href="/lagos" className="mt-6 inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-[var(--c-green-700)] transition-all hover:gap-2.5">
                Lagos services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — How it works (§6.1) */}
      <section className="section">
        <div className="container-dw">
          <SectionHeader eyebrow="How it works" title="Four steps, no surprises." center />
          <div className="mt-12"><ProcessSteps steps={PROCESS} /></div>
        </div>
      </section>

      {/* 8 — Why choose us (§6.1, six points from the old site) */}
      <section className="section section--band">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Why choose us"
            title="What we put in writing."
            lede="Three promises, each with the thing that makes it checkable sitting underneath it."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WHY_US.map((w) => (
              <div key={w.title} className="card flex h-full flex-col p-8">
                <h3 className="h3-card !text-[1.25rem]">{w.title}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] text-[var(--c-ink-2)]">{w.description}</p>
                <p className="mt-6 border-t border-[var(--c-border)] pt-4 text-[0.8125rem] font-semibold text-[var(--c-green-700)]">
                  {w.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Testimonials (§6.1) */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeader
            eyebrow="What clients say"
            title="Five stars, from every review."
            lede="Every rating on our Google profile is a five. The referrals that follow them are how most of our work arrives."
          />
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </section>

      {/* 10 — Gallery preview (§6.1) */}
      <section className="section section--band">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Our work"
            title="Real jobs, real teams, real photographs."
            lede="No stock imagery anywhere on this site."
          />
          <div className="mt-12 columns-2 gap-4 lg:columns-4 [&>*]:mb-4">
            {galleryPreview.map((g) => {
              const meta = PHOTOS[g.file as keyof typeof PHOTOS];
              if (!meta) return null;
              return (
                <Link key={g.file} href="/gallery" className="photo-zoom block overflow-hidden rounded-xl break-inside-avoid">
                  <Image
                    src={photoSrc(g.file as Parameters<typeof photoSrc>[0])}
                    alt={g.alt}
                    width={meta.width}
                    height={meta.height}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="w-full h-auto photo-grade"
                  />
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn btn--secondary">See the full gallery</Link>
          </div>
        </div>
      </section>

      {/* 11 — Final CTA */}
      <EnquirySection
        title="Tell us what the space needs."
        lede="Cleaning, pest control, facility support, or training for the cleaners already on your payroll — send us the space and your timing and we will price it."
        points={[
          "A written quote itemised by task, so you can see what you are paying for.",
          "A reply within two working hours, and a site visit where the job warrants one.",
          "No charge and no obligation for the quote or the assessment.",
        ]}
      />
    </>
  );
}
