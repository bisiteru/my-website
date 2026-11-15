import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs, absolute } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Check, AlertTriangle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Accordion from "@/components/ui/Accordion";
import PestSafetyProtocol from "@/components/sections/PestSafetyProtocol";
import { EnquirySection } from "@/components/ui/Blocks";
import { PHOTOS, photoSrc } from "@/lib/photos";
import { PEST_FAQS } from "@/lib/constants";

/**
 * Pest control — its own page, added alongside the existing
 * /services#pest-control anchor rather than replacing it (§3.1: no URL moves,
 * no anchors dropped). The anchor on /services still resolves; this page is
 * where the detail that will not fit in a services card now lives.
 *
 * Structure follows what a prospective client actually needs to decide:
 * process, what they must do to prepare, what we do to keep it safe, and the
 * questions they would otherwise have to ring up to ask.
 *
 * The preparation list and the process steps describe Dust & Wipes' own
 * operating procedure, confirmed with the company. Nothing here states a
 * re-entry time, a price or a guarantee period, because those are set per job
 * at the assessment and inventing a figure would make the page a liability.
 */
export const metadata: Metadata = pageSeo({
  path: "/pest-control",
  title: "Pest Control & Fumigation in Abuja & Lagos",
  description:
    "Licensed pest control and fumigation for homes, offices, clinics and commercial premises in Abuja and Lagos. Termites, cockroaches, rodents, bedbugs and mosquitoes — carried out under EHCON and PECAN licensing with an AMAC Operational Permit, and a written safety protocol.",
  image: "/photos/pest-control-spraying-driveway.jpg",
  imageAlt: "A Dust and Wipes technician applying a pest treatment to a driveway",
});

const PESTS = [
  { name: "Termites", detail: "Structural and subterranean. Usually the most expensive problem to ignore." },
  { name: "Cockroaches", detail: "Kitchens, drainage voids and service ducts, where they breed out of sight." },
  { name: "Rodents", detail: "Rats and mice — treated alongside the entry points that let them in." },
  { name: "Bedbugs", detail: "Mattresses, frames and skirting. Nearly always needs a follow-up." },
  { name: "Mosquitoes", detail: "Fogging and larval source reduction, not just adult knock-down." },
  { name: "Ants & flies", detail: "Common in food premises and after the rains." },
];

const PROCESS = [
  {
    n: "01",
    title: "Inspection, before any quote",
    detail:
      "We come and look. Which pest, how far it has spread, what is drawing it in, and what in the building is working against you. A quote given over the phone for a pest you have described but we have not seen is a guess.",
  },
  {
    n: "02",
    title: "A written treatment plan",
    detail:
      "The pest, the method, the products, the areas to be treated, whether one visit or a programme, and the cost. In writing, before you commit to anything.",
  },
  {
    n: "03",
    title: "Your preparation list",
    detail:
      "Issued in writing ahead of the visit and tailored to your premises: what to put away, what to cover, who must leave and for how long. See the list below for what it typically contains.",
  },
  {
    n: "04",
    title: "Treatment",
    detail:
      "Carried out by our technicians in full PPE, applied strictly to the product label at measured dilution. We record what was applied, where, and at what rate.",
  },
  {
    n: "05",
    title: "Re-entry, in writing",
    detail:
      "You are told before we start exactly when it is safe to return and what to do first — ventilate, wipe down food-contact surfaces, replace coverings. Never a vague 'a few hours'.",
  },
  {
    n: "06",
    title: "Follow-up inspection",
    detail:
      "We come back to confirm the treatment worked, and we tell you honestly if the cause is structural and no amount of re-treatment will fix it.",
  },
];

const PREPARATION = [
  "Put away all food, utensils, crockery and anything that touches food. Cover what cannot be moved.",
  "Remove or cover pet bowls and bedding. Cover fish tanks completely and switch off the air pump.",
  "Clear access to skirting boards, cupboard interiors, under sinks and behind appliances — these are where the work happens.",
  "Arrange for everyone, including pets, to be out of the premises for the period we have given you in writing.",
  "Close windows and doors as instructed; some treatments need the space sealed, others need it ventilated.",
  "Tell us in advance about anyone pregnant, elderly, asthmatic or otherwise vulnerable, and about any aquarium, beehive or livestock on the property.",
];

const REENTRY = [
  "Do not return before the time stated on your treatment plan, even if the smell has gone — odour is not a safety indicator.",
  "Ventilate thoroughly on return: open windows and doors before anyone settles back in.",
  "Wipe down all food-preparation surfaces, sinks and anything that touches food before using them.",
  "Leave treated skirting, cracks and void areas alone — washing them removes the residual barrier you paid for.",
  "Keep pets off treated surfaces until they are fully dry.",
  "Expect to see dead and dying insects for several days. That is the treatment working, not failing.",
];

export default function PestControlPage() {
  const hero = PHOTOS["pest-control-spraying-driveway"];

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Pest control", path: "/pest-control" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${absolute("/pest-control")}#faq`,
            mainEntity: PEST_FAQS.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <PageHero
        eyebrow="Pest control · Abuja &amp; Lagos"
        title="Pest control, done to a written standard."
        lede="Licensed by EHCON and PECAN, with an Operational Permit from the Abuja Municipal Area Council. We inspect before we quote, we tell you what we are applying, and we put the re-entry instructions in writing."
      >
        <Link href="/contact?service=pest-control" className="btn btn--on-dark">
          Book an inspection
        </Link>
      </PageHero>

      {/* What we treat */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">What we treat</p>
            <h2 className="h2-section mt-4 max-w-[16ch]">Different pests, different work.</h2>
            <p className="lede mt-5">
              A termite problem and a cockroach problem look nothing alike in method, cost or
              disruption. That is why the inspection comes first.
            </p>
            <figure className="m-0 mt-10">
              <div className="photo-zoom overflow-hidden rounded-2xl">
                <Image
                  src={photoSrc("pest-control-spraying-driveway")}
                  alt="A Dust and Wipes technician applying a pest treatment along a driveway"
                  width={hero.width}
                  height={hero.height}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-auto photo-grade"
                />
              </div>
              <figcaption className="mt-2.5 text-[0.875rem] text-[var(--c-ink-2)] italic">
                A perimeter treatment in progress in Abuja.
              </figcaption>
            </figure>
          </div>
          {/* auto-rows-min + self-start: without them the rows stretch to match
              the photo column and every card grows a tall empty footer. */}
          <ul className="grid auto-rows-min gap-4 self-start sm:grid-cols-2 lg:pt-[2.4rem]">
            {PESTS.map((p) => (
              <li key={p.name} className="card p-6">
                <h3 className="h3-card !text-[1.125rem]">{p.name}</h3>
                <p className="mt-2 text-[0.9375rem] text-[var(--c-ink-2)]">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section section--band scroll-mt-28">
        <div className="container-dw">
          <p className="eyebrow">How a job runs</p>
          <h2 className="h2-section mt-4 max-w-[22ch]">From your call to the follow-up inspection.</h2>
          <p className="lede mt-5">
            Six steps. You are not committed to anything until the second one is in your hands.
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((s) => (
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

      {/* Preparation + re-entry */}
      <section id="preparation" className="section scroll-mt-28">
        <div className="container-dw">
          <p className="eyebrow">Your part</p>
          <h2 className="h2-section mt-4 max-w-[24ch]">Preparing the premises, and coming back to them.</h2>
          <p className="lede mt-5">
            A treatment is only as good as the preparation around it. You receive this as a written
            list, tailored to your premises, before the day — but here is what it normally covers.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="card p-8">
              <h3 className="h3-card">Before we arrive</h3>
              <ul className="mt-6 space-y-3.5">
                {PREPARATION.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.9375rem] text-[var(--c-ink-2)]">
                    <Check size={17} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="h3-card">When you return</h3>
              <ul className="mt-6 space-y-3.5">
                {REENTRY.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.9375rem] text-[var(--c-ink-2)]">
                    <Check size={17} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[var(--c-orange-500)]/30 bg-[var(--c-orange-500)]/[0.06] p-6">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[var(--c-orange-700)]" aria-hidden="true" />
            <p className="text-[0.9375rem] text-[var(--c-ink-2)]">
              <strong className="text-[var(--c-green-800)]">The re-entry time is specific to your job.</strong>{" "}
              It depends on the product, the method and how the space ventilates, so we will not
              quote a figure here. You get it in writing on your treatment plan before we start. If
              it does not suit your household or your operation, tell us at the inspection — there
              is often another product or method that does.
            </p>
          </div>
        </div>
      </section>

      {/* The safety protocol — the same section that runs on /services */}
      <PestSafetyProtocol />

      {/* FAQs */}
      <section id="faqs" className="section section--band scroll-mt-28">
        <div className="container-dw max-w-3xl">
          <p className="eyebrow">Pest control questions</p>
          <h2 className="h2-section mt-4">The things people ring up to ask.</h2>
          <div className="mt-10">
            <Accordion items={PEST_FAQS} headingLevel={3} />
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "Cleaning and facility support alongside pest control" },
          { href: "/abuja", label: "Pest control in Abuja", detail: "All FCT districts, under our AMAC permit" },
          { href: "/lagos", label: "Lagos", detail: "Janitorial retainers and team training" },
          { href: "/faqs", label: "General FAQs", detail: "Booking, pricing, staffing and coverage" },
        ]}
      />

      <EnquirySection
        eyebrow="Pest control enquiries"
        title="Start with an inspection, not a price."
        lede="Tell us what you are seeing and where. We will come and look, then put the pest, the method, the products and the cost in writing before you commit to anything."
        action={{ href: "/contact?service=pest-control", label: "Book an inspection" }}
        points={[
          "Inspection first — we do not quote a pest we have not seen.",
          "Licensed by EHCON and PECAN, with an AMAC Operational Permit for certification in the municipality.",
          "Written treatment plan, written preparation list, written re-entry instructions.",
        ]}
      />
    </>
  );
}
