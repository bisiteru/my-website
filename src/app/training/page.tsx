import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { EnquirySection } from "@/components/ui/Blocks";
import { PHOTOS, photoSrc } from "@/lib/photos";

export const metadata: Metadata = pageSeo({
  path: "/training",
  title: "Cleaner Training for Organisations in Abuja & Lagos",
  description:
    "Practical, customised on-site training for in-house cleaners and supervisors — housekeeping, workplace hygiene and safety, chemicals and PPE, supervision and quality. Delivered in Abuja and Lagos.",
  image: "/photos/bisi-teru-leading-training.jpg",
  imageAlt: "Bisi Teru leading a professional training session",
});

const MODULES = [
  { n: "01", title: "Housekeeping practice", detail: "Daily routines, task sequencing, room standards and consistent inspection." },
  { n: "02", title: "Workplace hygiene & safety", detail: "High-touch areas, cross-contamination, safe working practices and site-specific risks." },
  { n: "03", title: "Chemicals, equipment & PPE", detail: "Product labels, dilution, storage, handling, protective equipment and appropriate use." },
  { n: "04", title: "Supervision & quality", detail: "Work plans, handovers, feedback and the checks that keep standards consistent." },
];

const AUDIENCE = [
  "Embassies and diplomatic missions",
  "International organisations",
  "Hotels and hospitality",
  "Restaurants and food service",
  "Corporates with in-house cleaning teams",
];

/**
 * Sample scope, deliverables and proposal path.
 *
 * Deliberately parameterised rather than fixed. The client has said they do not
 * run a day-by-day outline and do not want one advertised, so nothing here
 * states a number of days, a cohort size or a price — those are the things a
 * proposal fills in after the site visit. What is stated is the shape of the
 * engagement, which is true of every one of them.
 *
 * The deliverables list describes what a client receives. It follows ordinary
 * professional practice for on-site training and is flagged for the client's
 * confirmation in the same way the pest protocol was.
 */
const SCOPE = [
  {
    label: "Who attends",
    detail:
      "Cleaners, housekeeping staff and the supervisors who lead them. Numbers and groupings are set with you — supervisors often sit a separate session so they can be taught to inspect, not just to clean.",
  },
  {
    label: "Where and when",
    detail:
      "At your premises, on your equipment, timed around your shift pattern so you do not lose cover while we are there.",
  },
  {
    label: "Which modules",
    detail:
      "Any of the four, or all of them, weighted to your priorities. A clinic weights hygiene and cross-contamination; a hotel weights room standards and sequencing.",
  },
  {
    label: "Built on your site",
    detail:
      "Your chemicals, your equipment, your floor plan and your risk areas — not generic examples. We walk the site before we write the session.",
  },
];

const DELIVERABLES = [
  "A written scope of work, agreed before anything is scheduled.",
  "Delivery on site, in your building, on the products and equipment your team actually uses.",
  "A written summary at the end: what was covered, who attended and what we observed while there.",
  "Practical recommendations — what the team needs next, and anything about the premises or the products that is working against them.",
];

const PROPOSAL_PATH = [
  {
    n: "01",
    title: "Tell us about your team",
    detail:
      "An email or a call is enough to start. How many cleaners, what kind of premises, and what is prompting the enquiry — a failed audit, a new contract, high turnover, or simply that nobody has ever been trained.",
  },
  {
    n: "02",
    title: "We walk the site",
    detail:
      "We visit, see the premises in use, look at the products and equipment on hand and talk to whoever supervises the team. There is no charge for this visit.",
  },
  {
    n: "03",
    title: "You get a written proposal",
    detail:
      "Scope, modules, who attends, where and when, deliverables and cost — in writing, itemised, with no obligation to proceed.",
  },
  {
    n: "04",
    title: "We schedule and deliver",
    detail:
      "Agreed around your shift pattern. You receive the written summary and recommendations afterwards.",
  },
];

const BENEFITS = [
  "Less chemical waste through correct dilution and storage",
  "Safer staff, with fewer avoidable incidents",
  "Better value from directly employed cleaners",
  "Consistent standards that survive staff turnover",
];

export default function TrainingPage() {
  const hero = PHOTOS["bisi-teru-leading-training"];

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Training", path: "/training" },
        ])}
      />
      <PageHero
        eyebrow="Training · Abuja & Lagos"
        title="Better cleaning starts with better equipped people."
        lede="Practical training for organisations that employ their own cleaners. We shape each session around your staff, premises, routines and hygiene priorities."
      >
        <Link href="/contact?service=training" className="btn btn--on-dark">
          Discuss training
        </Link>
      </PageHero>

      {/* Who it is for */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2 className="h2-section mt-4">Strengthen your in-house team.</h2>
          </div>
          <div className="prose-measure">
            <p className="text-[var(--c-ink-2)]">
              Where cleaning is handled by directly employed staff, quality depends on people who
              understand the site and the standard expected of them. We work with cleaners,
              housekeeping teams and the supervisors who lead them.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {AUDIENCE.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-[0.9375rem]">
                  <Check size={17} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section section--band">
        <div className="container-dw">
          <p className="eyebrow">What we cover</p>
          <h2 className="h2-section mt-4 max-w-[20ch]">Four modules, shaped to your site.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {MODULES.map((m) => (
              <div key={m.n} className="card p-7">
                <span className="text-[var(--c-orange-700)] font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  {m.n}
                </span>
                <h3 className="h3-card mt-3">{m.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] text-[var(--c-ink-2)]">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample scope + deliverables */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">A typical scope</p>
            <h2 className="h2-section mt-4 max-w-[20ch]">What an engagement actually looks like.</h2>
            <p className="lede mt-5">
              We do not sell a fixed course off a shelf. Every engagement is built on the same four
              decisions, taken with you before anything is scheduled.
            </p>
            <dl className="mt-10 space-y-6">
              {SCOPE.map((s) => (
                <div key={s.label} className="border-l-2 border-[var(--c-green-600)] pl-5">
                  <dt className="font-semibold text-[var(--c-green-800)]">{s.label}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] text-[var(--c-ink-2)]">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pt-[3.5rem]">
            <div className="card p-8 sm:p-9">
              <p className="eyebrow">What you receive</p>
              <h3 className="h3-card mt-3">Deliverables</h3>
              <ul className="mt-6 space-y-4">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[0.9375rem] text-[var(--c-ink-2)]">
                    <Check size={17} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-[var(--c-border)] pt-5 text-[0.875rem] text-[var(--c-ink-2)]">
                Training is delivered in both Abuja and Lagos. Where a team works across several
                sites, we will say in the proposal whether one session covers them or each site
                needs its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal path */}
      <section className="section section--band">
        <div className="container-dw">
          <p className="eyebrow">How to commission it</p>
          <h2 className="h2-section mt-4 max-w-[22ch]">From first enquiry to a proposal you can sign off.</h2>
          <p className="lede mt-5">
            Four steps, and you are not committed to anything until the third one is in your hands.
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROPOSAL_PATH.map((s) => (
              <li key={s.n} className="card p-7">
                <span
                  className="font-semibold text-[var(--c-orange-700)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.n}
                </span>
                <h3 className="h3-card mt-3 !text-[1.125rem]">{s.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] text-[var(--c-ink-2)]">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder credibility — honest caption per §3.2 */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <figure className="m-0">
            <div className="photo-zoom rounded-2xl overflow-hidden">
              <Image
                src={photoSrc("bisi-teru-leading-training")}
                alt="Bisi Teru standing before a seated group, leading a professional training session"
                width={hero.width}
                height={hero.height}
                className="w-full h-auto photo-grade"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-[0.8125rem] text-[var(--c-ink-2)] italic">
              Bisi Teru leading a professional training session.
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">Why us</p>
            <h2 className="h2-section mt-4">Led by an operator, not a lecturer.</h2>
            <p className="mt-5 text-[var(--c-ink-2)] prose-measure">
              Dust &amp; Wipes was founded in 2017 on the belief that cleaners deserve proper
              training, fair treatment and professional respect. Our founder brings over a decade
              in operations and IT management across government agencies, international NGOs and
              corporate organisations — so sessions are grounded in how workplaces actually run.
            </p>
            <ul className="mt-7 space-y-2.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[0.9375rem]">
                  <Check size={17} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "Cleaning and pest control alongside training" },
          { href: "/lagos", label: "Lagos", detail: "Janitorial retainers and team training" },
          { href: "/abuja", label: "Training in Abuja", detail: "Where we are based" },
          { href: "/clients", label: "Who we work with", detail: "Sectors and organisations served" },
        ]}
      />
      <EnquirySection
        eyebrow="Training enquiries"
        title="Start with a conversation about your team."
        lede="Tell us how many cleaners you employ, what kind of premises they work in and what prompted the enquiry. The site visit and the written proposal that follow cost you nothing."
        action={{ href: "/contact?service=training", label: "Request a training proposal" }}
        points={[
          "A site visit before we write anything — we do not quote training blind.",
          "A written proposal: scope, modules, attendees, deliverables and cost, itemised.",
          "Delivered in Abuja and Lagos, timed around your shift pattern.",
        ]}
      />
    </>
  );
}
