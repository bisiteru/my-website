import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { PHOTOS, photoSrc } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Cleaner Training for Organisations in Abuja & Lagos",
  description:
    "Practical, customised on-site training for in-house cleaners and supervisors — housekeeping, workplace hygiene and safety, chemicals and PPE, supervision and quality. Delivered in Abuja and Lagos.",
};

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

      <CTABanner />
    </>
  );
}
