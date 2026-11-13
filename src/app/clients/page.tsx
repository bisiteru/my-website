import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import Link from "next/link";
import { Building2, Landmark, Stethoscope, Briefcase, Hotel, PartyPopper, Home as HomeIcon, HardHat, Scale } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { SectorTile, CaseStudyCard, LogoWall } from "@/components/ui/Cards";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { CtaBand, SectionHeader } from "@/components/ui/Blocks";
import { TESTIMONIALS } from "@/lib/constants";
import clientsData from "../../../content/clients.json";

export const metadata: Metadata = pageSeo({
  path: "/clients",
  title: "Clients & Sectors We Serve",
  description:
    "The sectors Dust & Wipes Limited serves across Abuja and Lagos — international organisations, diplomatic missions, healthcare, corporate offices, hospitality, events, premium residences and new builds.",
  image: "/photos/international-organisation-entrance-cleaning.jpg",
  imageAlt: "A cleaner cleaning the entrance of an international organisation",
});

interface ClientRecord {
  name: string;
  sector: string;
  city: string;
  services: string[];
  startYear: number;
  endYear?: number;
  status: "current" | "past";
  consent: boolean;
  logo?: string;
}

const SECTOR_ICONS: Record<string, React.ElementType> = {
  "international-organisations": Landmark,
  "diplomatic-missions": Building2,
  "healthcare-clinics": Stethoscope,
  "corporate-offices": Briefcase,
  "hospitality-salons": Hotel,
  "events-exhibitions": PartyPopper,
  "premium-residences": HomeIcon,
  "real-estate-new-builds": HardHat,
  "government-public": Scale,
};

export default function ClientsPage() {
  const all = clientsData.clients as ClientRecord[];
  // §3.2 / §6.7 — a client is named or shown only with written consent on file.
  const consented = all.filter((c) => c.consent);

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Clients", path: "/clients" },
        ])}
      />
      <PageHero
        eyebrow="Clients"
        title="Organisations we've served."
        lede="From diplomatic offices to clinics, new builds to premium homes — the standard does not change with the postcode."
      >
        <Link href="/contact" className="btn btn--on-dark">Get a free quote</Link>
      </PageHero>

      {/* Sectors */}
      <section className="section">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Sectors we serve"
            title="Built for places where cleanliness is scrutinised."
            lede="An embassy reception and a family home need the same thing: people who know the standard and hold it."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientsData.sectors.map((s) => {
              const Icon = SECTOR_ICONS[s.slug];
              return <SectorTile key={s.slug} label={s.label} icon={Icon ? <Icon size={22} aria-hidden="true" /> : undefined} />;
            })}
          </div>
        </div>
      </section>

      {/* Logo wall — hidden entirely until a client has consent: true */}
      {consented.length > 0 && (
        <section className="section section--band">
          <div className="container-dw">
            <SectionHeader
              eyebrow="Trusted by"
              title="Organisations we've served."
              lede="Shown with each organisation's permission."
              center
            />
            <div className="mt-12">
              <LogoWall logos={consented.filter((c) => c.logo).map((c) => ({ name: c.name, file: c.logo! }))} />
            </div>
          </div>
        </section>
      )}

      {/* Sector story — anonymised, because no client has consented to be named (§6.7) */}
      <section className="section section--band">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Our work"
            title="What the work looks like in practice."
            lede="We name a client only with their permission. Where we don't have it, the story is told by sector instead."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <CaseStudyCard
              sector="Healthcare & clinics"
              city="Lagos · 2024–2025"
              title="Skin 101 Clinics Limited"
              challenge="An aesthetics, dermatology and plastic surgery practice whose treatment rooms and busy reception needed the same standard every day, not just on inspection days."
              action="A trained team on a fixed daily routine, with colour-coded equipment separated by zone to stop cross-contamination between clinical and general areas."
              result="A consistent standard the clinic could plan around, delivered throughout 2024 and 2025."
              photo="clinic-treatment-chair-cleaning"
              alt="A cleaner wiping down a treatment chair at Skin 101 Clinics in Lagos"
            />
            <CaseStudyCard
              sector="Post-construction"
              city="Abuja"
              title="From handover debris to a finished floor"
              challenge="A newly completed interior full of construction dust, paint splatter and debris, needed ready for occupation."
              action="Debris clearance, machine scrubbing of granite floors, paint removal, then glass and final detailing."
              result="Handed over clean and ready to occupy."
              photo="post-construction-granite-floor-scrubbing"
              alt="An operator machine-scrubbing a granite floor after construction work"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeader
            eyebrow="In their words"
            title="Five stars, from every review."
            lede="Ten five-star Google reviews, and the referrals that follow them."
          />
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "Eleven services across cleaning and pest control" },
          { href: "/gallery", label: "See the work", detail: "Photographs from real jobs" },
          { href: "/training", label: "Cleaner training", detail: "For organisations with in-house teams" },
          { href: "/abuja", label: "Abuja", detail: "Every district in the FCT" },
          { href: "/lagos", label: "Lagos", detail: "Training-led relaunch" },
        ]}
      />
      <CtaBand />
    </>
  );
}
