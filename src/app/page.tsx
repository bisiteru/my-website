import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Landmark, Stethoscope, Briefcase, Hotel, PartyPopper, Home as HomeIcon, HardHat } from "lucide-react";
import { CollageHero } from "@/components/ui/Heroes";
import { ServiceCard, SectorTile, ProcessSteps } from "@/components/ui/Cards";
import { StatRow } from "@/components/ui/StatCounter";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { CtaBand, SectionHeader } from "@/components/ui/Blocks";
import Reveal from "@/components/ui/Reveal";
import { photoSrc, PHOTOS } from "@/lib/photos";
import { SERVICES, TESTIMONIALS, WHY_US, AFFILIATIONS, COMPANY } from "@/lib/constants";
import galleryData from "../../content/gallery.json";

export const metadata: Metadata = pageSeo({
  path: "/",
  title: "Professional Cleaning, Pest Control & Cleaner Training in Abuja and Lagos",
  description:
    "Dust & Wipes Limited — professional cleaning, pest control, facility support and cleaner training in Abuja and Lagos since 2017. 650+ clients, 5.0 on Google. Get a free quote.",
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
];

const PROCESS = [
  { title: "Contact us", detail: "Website form, WhatsApp or a phone call — whichever suits you." },
  { title: "Get a quote", detail: "We assess the work and come back within two hours." },
  { title: "We show up", detail: "A uniformed, trained team, on time and fully equipped." },
  { title: "Inspect the result", detail: "Not satisfied? We return and put it right, free." },
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
          <StatRow
            stats={[
              { value: 650, suffix: "+", label: "Clients served" },
              { value: 5, suffix: "★", decimals: 1, label: "Google rating" },
              { value: 10, suffix: "", label: "Five-star reviews" },
              { value: 2017, suffix: "", label: "Serving Abuja since", animate: false },
            ]}
          />
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
                  <span className="block text-[0.6875rem] text-[var(--c-ink-2)]">{a.full}</span>
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.id} delay={i * 70}>
                <ServiceCard
                  title={s.title}
                  benefit={s.shortDesc}
                  href={s.href}
                  photo={s.image.replace("/photos/", "").replace(".jpg", "") as Parameters<typeof photoSrc>[0]}
                  alt={`${s.title} — a Dust and Wipes team member at work`}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
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
              lede="We train in-house cleaning teams for embassies, international organisations, hotels and corporates — housekeeping, hygiene and safety, chemicals and PPE, supervision and quality."
            />
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
                office in Gwarinpa you can visit.
              </p>
              <Link href="/abuja" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[var(--c-green-700)] hover:gap-2.5 transition-all">
                Abuja services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="card p-8">
              <h3 className="h3-card">Lagos</h3>
              <p className="mt-3 text-[var(--c-ink-2)]">
                A training-led start, working with organisations that employ their own cleaners.
                Lagos address · site assessments by appointment.
              </p>
              <Link href="/lagos" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[var(--c-green-700)] hover:gap-2.5 transition-all">
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
          <SectionHeader eyebrow="Why choose us" title="The Dust &amp; Wipes difference." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal key={w.number} delay={i * 60}>
                <div className="card h-full p-7">
                  <span className="text-[var(--c-orange-700)] font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                    {w.number}
                  </span>
                  <h3 className="h3-card mt-3 !text-[1.125rem]">{w.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] text-[var(--c-ink-2)]">{w.description}</p>
                </div>
              </Reveal>
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
            lede="Ten five-star Google reviews and counting — and the referrals that come with them."
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
      <CtaBand />
    </>
  );
}
