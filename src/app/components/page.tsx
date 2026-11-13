import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Home, Sparkles, Bug } from "lucide-react";
import { SplitHero, CollageHero } from "@/components/ui/Heroes";
import { ServiceCard, SectorTile, CaseStudyCard, LogoWall, ProcessSteps } from "@/components/ui/Cards";
import { StatRow } from "@/components/ui/StatCounter";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import MasonryGallery from "@/components/ui/MasonryGallery";
import Accordion from "@/components/ui/Accordion";
import QuoteForm from "@/components/ui/QuoteForm";
import { CtaBand, MapBlock, SectionHeader } from "@/components/ui/Blocks";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS, FAQS, COMPANY } from "@/lib/constants";

/** Component showcase — PROMPTS.md Phase 2.
 *  Not linked in navigation and never indexed. */
export const metadata: Metadata = {
  title: "Component library",
  robots: { index: false, follow: false, nocache: true },
};

function Spec({ id, name, brief, children }: { id: string; name: string; brief: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-[var(--c-border)] py-14">
      <div className="mb-8">
        <h2 className="h3-card !text-[1.25rem]">{name}</h2>
        <p className="mt-1 text-[0.8125rem] text-[var(--c-ink-2)]">{brief}</p>
      </div>
      {children}
    </section>
  );
}

const DEMO_GALLERY = [
  { file: "luxury-living-room-floor-cleaning", alt: "Cleaner mopping a living-room floor", caption: "Residential deep clean, Abuja", category: "residential" },
  { file: "office-floor-scrubbing-machine", alt: "Operator running a floor-scrubbing machine in an office", caption: "Office floor care", category: "office-commercial" },
  { file: "chandelier-cleaning", alt: "Cleaner detailing a chandelier", caption: "Detail work at height", category: "deep-cleaning" },
  { file: "clinic-reception-mopping", alt: "Cleaner mopping a clinic reception", caption: "Healthcare environment", category: "healthcare" },
  { file: "exhibition-stand-cleaning", alt: "Team cleaning an exhibition stand", caption: "Events", category: "events" },
  { file: "lagos-team-uniform", alt: "The Lagos team in uniform", caption: "Our Lagos team", category: "our-team" },
];

const DEMO_CATS = [
  { slug: "all", label: "All" },
  { slug: "residential", label: "Residential" },
  { slug: "office-commercial", label: "Office & commercial" },
  { slug: "deep-cleaning", label: "Deep cleaning" },
  { slug: "healthcare", label: "Healthcare" },
  { slug: "events", label: "Events" },
  { slug: "our-team", label: "Our team" },
];

export default function ComponentsPage() {
  return (
    <>
      <div className="bg-[var(--c-green-900)] pt-28 pb-10">
        <div className="container-dw">
          <p className="eyebrow !text-[var(--c-orange-300)]">Internal · not indexed</p>
          <h1 className="h1-display mt-3 !text-[2.5rem] font-semibold text-white">Component library</h1>
          <p className="mt-3 text-white/70">
            Every component in BUILD_BRIEF §4.7, built on the §4.2–4.4 tokens with the §4.8 motion rules.
          </p>
        </div>
      </div>

      <div className="container-dw">
        <Spec id="buttons" name="Buttons" brief="primary · secondary · ghost · on-dark · outline-dark">
          <div className="flex flex-wrap items-center gap-3">
            <span className="btn btn--primary">Get a free quote</span>
            <span className="btn btn--secondary">Book a site assessment</span>
            <span className="btn btn--ghost">Discuss training</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl bg-[var(--c-green-900)] p-5">
            <span className="btn btn--on-dark">On dark</span>
            <span className="btn btn--outline-dark">Outline dark</span>
          </div>
        </Spec>

        <Spec id="stats" name="Stat counter row" brief="§4.8 count-up on scroll; static under reduced motion">
          <StatRow
            stats={[
              { value: 650, suffix: "+", label: "Clients served" },
              { value: 5, suffix: "★", decimals: 1, label: "Google rating" },
              { value: 10, suffix: "", label: "Five-star reviews" },
              { value: 2017, suffix: "", label: "Serving Abuja since", animate: false },
            ]}
          />
        </Spec>

        <Spec id="service-card" name="Service card" brief="photo · one-line benefit · link to anchor">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Residential cleaning" benefit="Thorough, eco-friendly cleaning for your home." href="/services#residential-cleaning" photo="luxury-living-room-floor-cleaning" alt="Cleaner mopping a living-room floor" />
            <ServiceCard title="Commercial & office" benefit="Keeps your workplace professional and hygienic." href="/services#commercial-cleaning" photo="office-floor-scrubbing-machine" alt="Operator running a floor-scrubbing machine" />
            <ServiceCard title="Pest control" benefit="Licensed technicians, safe for children and pets." href="/services#pest-control" photo="pest-control-spraying-driveway" alt="Technician spraying a driveway" />
          </div>
        </Spec>

        <Spec id="sector-tile" name="Sector tile" brief="§6.7 — text-only, so it never waits on a photo">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SectorTile label="Diplomatic missions" icon={<Building2 size={22} />} />
            <SectorTile label="Premium residences" icon={<Home size={22} />} />
            <SectorTile label="Healthcare & clinics" icon={<Sparkles size={22} />} />
            <SectorTile label="Events & exhibitions" icon={<Bug size={22} />} />
          </div>
        </Spec>

        <Spec id="process" name="Process steps" brief="§6.2 How it works">
          <ProcessSteps
            steps={[
              { title: "Contact us", detail: "Website form, WhatsApp or a phone call." },
              { title: "Get a quote", detail: "We assess the work and quote transparently." },
              { title: "We show up", detail: "Uniformed, equipped and on time." },
              { title: "Inspect the result", detail: "Not satisfied? We return and fix it free." },
            ]}
          />
        </Spec>

        <Spec id="testimonials" name="Testimonial carousel" brief="keyboard, swipe, pauses on hover/focus, no autoplay under reduced motion">
          <div className="max-w-2xl">
            <TestimonialCarousel items={TESTIMONIALS.slice(0, 4)} />
          </div>
        </Spec>

        <Spec id="case-study" name="Case-study card" brief="§6.7 challenge → what we did → result">
          <div className="grid gap-6 lg:grid-cols-2">
            <CaseStudyCard
              sector="Healthcare & clinics"
              city="Lagos"
              title="A Lagos clinic, cleaned to a healthcare standard"
              challenge="Treatment rooms and a busy reception needing a consistent daily standard."
              action="A trained team on a fixed routine, with colour-coded equipment per zone."
              result="A reliable standard the clinic could plan around."
              photo="clinic-treatment-chair-cleaning"
              alt="Cleaner wiping down a clinic treatment chair"
            />
            <div className="card p-7">
              <p className="eyebrow">Logo wall</p>
              <p className="mt-3 text-[0.9375rem] text-[var(--c-ink-2)]">
                Renders only clients with <code className="rounded bg-[var(--c-band)] px-1">consent: true</code>.
                With none consented it returns <strong>nothing at all</strong> — the §3.2 honesty rule in code.
              </p>
              <div className="mt-6 rounded-xl border border-dashed border-[var(--c-border)] p-6 text-center text-[0.8125rem] text-[var(--c-ink-2)]">
                <LogoWall logos={[]} />
                Currently empty — no written consent on file yet.
              </div>
            </div>
          </div>
        </Spec>

        <Spec id="before-after" name="Before / after slider" brief="§6.8 — drag, or use the range input for keyboard and screen readers">
          <div className="max-w-xl">
            <BeforeAfterSlider
              before="post-construction-before-debris"
              beforeAlt="A newly built room covered in construction debris"
              after="post-construction-granite-floor-scrubbing"
              afterAlt="The same type of floor being machine-scrubbed clean"
              afterLabel="During"
            />
            <p className="mt-3 text-[0.8125rem] text-[var(--c-ink-2)]">
              Labelled <em>Before / During</em>, not Before/After — the brief allows only genuine
              same-job pairs, and no matching &ldquo;after&rdquo; exists yet.
            </p>
          </div>
        </Spec>

        <Spec id="gallery" name="Masonry gallery" brief="CSS columns, filters, lightbox with keyboard and swipe">
          <MasonryGallery items={DEMO_GALLERY} categories={DEMO_CATS} />
        </Spec>

        <Spec id="accordion" name="FAQ accordion" brief="§6.9 — questions are real headings, so the page gets a proper outline">
          <div className="max-w-2xl">
            <Accordion items={FAQS.slice(0, 4)} />
          </div>
        </Spec>

        <Spec id="form" name="Quote form" brief="§6.10 — organisation, city, area, full service list, privacy note">
          <div className="max-w-2xl">
            <QuoteForm />
          </div>
        </Spec>

        <Spec id="map" name="Map block" brief="§4.7, lazy-loaded">
          <div className="max-w-2xl">
            <MapBlock address={COMPANY.address} />
          </div>
        </Spec>

        <Spec id="heroes" name="Split & collage hero" brief="§4.5 — portrait sources are never stretched full-width">
          <div className="space-y-8 -mx-4 sm:-mx-8">
            <SplitHero
              eyebrow="Split hero"
              title="Professional cleaning, done properly."
              lede="A single portrait photo beside the message."
              photo="corridor-team-mopping"
              alt="Two cleaners mopping an office corridor"
              actions={<span className="btn btn--on-dark">Get a free quote</span>}
            />
            <CollageHero
              eyebrow="Collage hero"
              title="Cleaning, pest control and cleaner training."
              lede="One lead photo with two supporting portraits."
              photos={["team-uba-marketplace", "chandelier-cleaning", "office-floor-scrubbing-machine"]}
              alts={["The team at UBA Marketplace", "Cleaner detailing a chandelier", "Operator running a floor scrubber"]}
              actions={<span className="btn btn--on-dark">Get a free quote</span>}
            />
          </div>
        </Spec>

        <Spec id="reveal" name="Scroll reveal" brief="§4.8 IntersectionObserver + CSS transition; no animation library">
          <div className="grid gap-4 sm:grid-cols-3">
            {[0, 120, 240].map((d) => (
              <Reveal key={d} delay={d}>
                <div className="card p-6 text-[0.9375rem] text-[var(--c-ink-2)]">Reveals at {d}ms</div>
              </Reveal>
            ))}
          </div>
        </Spec>

        <Spec id="section-header" name="Section header" brief="eyebrow · heading · lede (§4.3)">
          <SectionHeader eyebrow="Our services" title="Everything a property needs, from one team." lede="Short supporting line that sits under the heading." />
        </Spec>
      </div>

      <CtaBand />

      <div className="container-dw py-10">
        <Link href="/" className="text-[0.875rem] font-semibold text-[var(--c-green-700)] hover:underline">
          ← Back to site
        </Link>
      </div>
    </>
  );
}
