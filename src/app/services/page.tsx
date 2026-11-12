import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/ui/Cards";
import { CtaBand, SectionHeader } from "@/components/ui/Blocks";
import { SERVICES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Dust & Wipes Limited's full range of cleaning and pest control services in Abuja and Lagos — residential, office, deep cleaning, post-construction, carpet and upholstery, pest control, disinfection, windows, events, facility support and cleaner training.",
};

/** §3.1 — legacy anchor aliases. Older external links used these IDs, so each
 *  is added alongside the current one, never instead of it. */
const ALIAS_ANCHORS: Record<string, string[]> = {
  "commercial-cleaning": ["office-cleaning"],
};

const PROCESS = [
  { title: "Contact us", detail: "Reach us through the website form, WhatsApp or a phone call." },
  { title: "Get a quote", detail: "We assess what the work actually needs and quote transparently." },
  { title: "We show up", detail: "A uniformed, trained team arrives on time, fully equipped." },
  { title: "Inspect the result", detail: "If you are not satisfied, we return and put it right free of charge." },
];

const PLANS = [
  { name: "Weekly", detail: "For busy homes and offices that need a dependable rhythm." },
  { name: "Bi-weekly", detail: "A middle ground that keeps on top of the work without daily disruption." },
  { name: "Monthly", detail: "A reset for spaces that are maintained in between." },
];

function ServiceSection({
  service,
  flip,
}: {
  service: (typeof SERVICES)[number];
  flip: boolean;
}) {
  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    `Hello Dust & Wipes! I'd like to book: ${service.title}.`
  )}`;
  return (
    <article id={service.id} className="scroll-mt-28 py-12 first:pt-0">
      {ALIAS_ANCHORS[service.id]?.map((alias) => (
        <span key={alias} id={alias} className="block scroll-mt-28" aria-hidden="true" />
      ))}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={`photo-zoom overflow-hidden rounded-2xl ${flip ? "lg:order-2" : ""}`}>
          <Image
            src={service.image}
            alt={`${service.title} — a Dust and Wipes team member at work`}
            width={900}
            height={675}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-64 w-full object-cover photo-grade sm:h-80"
          />
        </div>
        <div>
          <h3 className="h3-card !text-[1.5rem]">{service.title}</h3>
          <p className="mt-3 text-[var(--c-ink-2)] prose-measure">{service.description}</p>
          <ul className="mt-6 space-y-2.5">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[0.9375rem]">
                <Check size={17} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn--primary">Get a free quote</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              <MessageCircle size={16} aria-hidden="true" /> Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  const cleaning = SERVICES.filter((s) => s.category === "cleaning");
  const pest = SERVICES.filter((s) => s.category === "pest-control");
  const training = SERVICES.filter((s) => s.category === "training");

  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Our Services"
        lede="Cleaning, pest control, facility support and cleaner training for homes, offices and facilities across Abuja and Lagos."
      >
        <Link href="/contact" className="btn btn--on-dark">Get a free quote</Link>
      </PageHero>

      {/* Cleaning */}
      <section id="cleaning" className="section scroll-mt-28">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Cleaning services"
            title="Professional cleaning solutions."
            lede="From routine home cleans to post-construction handovers, delivered by trained teams working to a written standard."
          />
          <div className="mt-10 divide-y divide-[var(--c-border)]">
            {cleaning.map((s, i) => (
              <ServiceSection key={s.id} service={s} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Pest control & disinfection */}
      <section id="pest-control-section" className="section section--band scroll-mt-28">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Pest control &amp; disinfection"
            title="Treatments that are safe around people."
            lede="Certified technicians using approved, low-toxicity treatments — safe for children and pets, with follow-up inspection."
          />
          <div className="mt-10 divide-y divide-[var(--c-border)]">
            {pest.map((s, i) => (
              <ServiceSection key={s.id} service={s} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training-consultancy" className="section scroll-mt-28">
        <div className="container-dw">
          <SectionHeader
            eyebrow="Training &amp; consultancy"
            title="For organisations with their own cleaners."
            lede="We train in-house teams in housekeeping, hygiene and safety, chemicals and PPE, and supervision."
          />
          <div className="mt-10 divide-y divide-[var(--c-border)]">
            {training.map((s) => (
              <ServiceSection key={s.id} service={s} flip={false} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/training" className="btn btn--secondary">See the full training programme</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--band">
        <div className="container-dw">
          <SectionHeader eyebrow="How it works" title="Simple, hassle-free booking." center />
          <div className="mt-12">
            <ProcessSteps steps={PROCESS} />
          </div>
        </div>
      </section>

      {/* Recurring plans + guarantee */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Recurring plans"
              title="Regular cleaning, at a better rate."
              lede="Recurring plans are discounted against one-off bookings, and the same team returns each time, so they learn your space."
            />
            <ul className="mt-8 space-y-3">
              {PLANS.map((p) => (
                <li key={p.name} className="card flex gap-4 p-5">
                  <span className="shrink-0 font-semibold text-[var(--c-green-700)]" style={{ fontFamily: "var(--font-heading)" }}>
                    {p.name}
                  </span>
                  <span className="text-[0.9375rem] text-[var(--c-ink-2)]">{p.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card h-fit bg-[var(--c-green-50)] p-8">
            <p className="eyebrow">Our guarantee</p>
            <h2 className="h3-card mt-3">If you are not satisfied, we come back.</h2>
            <p className="mt-4 text-[var(--c-ink-2)]">
              Tell us within 24 hours and we will return and put the affected areas right at no
              extra charge. That promise has not changed since 2017.
            </p>
            <Link href="/contact" className="btn btn--primary mt-7 w-full">Get a free quote</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
