import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { EnquirySection, SectionHeader } from "@/components/ui/Blocks";
import { CaseStudyCard } from "@/components/ui/Cards";
import { PHOTOS, photoSrc } from "@/lib/photos";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = pageSeo({
  path: "/lagos",
  title: "Janitorial Retainers in Lagos",
  description:
    "Monthly janitorial contracts for offices, clinics and commercial premises across Lagos, plus training for in-house cleaning teams. Assessments by appointment.",
  image: "/photos/lagos-team-uniform.jpg",
  imageAlt: "The Dust and Wipes Lagos team in branded uniform",
});

const AUDIENCE = [
  { title: "Offices & corporate premises", detail: "Daily or scheduled janitorial cover on a fixed monthly scope, with a named supervisor." },
  { title: "Clinics & healthcare", detail: "Clinical and general zones kept separate, on equipment that never crosses between them." },
  { title: "Hotels & hospitality", detail: "Housekeeping support, or training for the housekeeping team you already employ." },
  { title: "Embassies & international organisations", detail: "Where standards are audited and the cleaning has to survive the audit." },
];

const RETAINER = [
  "A written scope of work — every task, every area, every frequency, agreed before we start.",
  "A fixed monthly figure, so the cost is predictable and budgetable.",
  "Our own staff, uniformed, background-checked and trained to a written standard.",
  "Our own equipment and consumables, included unless you ask us to use yours.",
  "A named supervisor who answers for the standard, and a reporting routine you can check against.",
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
        crumbs={[{ label: "Locations", href: "/abuja" }, { label: "Lagos" }]}
        photo="lagos-team-uniform"
        alt="The Dust and Wipes Lagos team in branded uniform"
        title="Janitorial retainers and cleaner training in Lagos."
        lede="We take on monthly janitorial contracts for offices, clinics and commercial premises across Lagos — and where an organisation would rather keep its own cleaners, we train them instead."
      >
        <Link href="/contact?service=janitorial" className="btn btn--primary">Request a proposal</Link>
      </PageHero>

      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="How we work in Lagos"
              title="Two ways in, depending on who cleans."
            />
            <div className="mt-5 space-y-4 text-[var(--c-ink-2)] prose-measure">
              <p>
                Most Lagos enquiries come down to one question: do you want to employ the
                cleaners, or would you rather not? If you would rather not, we take the premises on
                a monthly janitorial retainer — a fixed scope of work, a fixed monthly figure, our
                own staff and equipment, and a named supervisor who answers for the standard. This
                is the work we are actively pursuing in Lagos.
              </p>
              <p>
                If the cleaners are already on your payroll, replacing them is usually the wrong
                answer. We train them instead — housekeeping routines, hygiene and safety, correct
                use of chemicals and equipment, and the supervision that holds a standard in place.
              </p>
              <p>
                Our Lagos track record to date is the work we delivered for Skin 101 Clinics
                Limited across 2024 and 2025. We hold a Lagos address on Admiralty Road in Lekki
                Phase 1 and are taking on new contracts across the state.
              </p>
            </div>

            <h3 className="h3-card mt-10 !text-[1.25rem]">Where we work in Lagos</h3>
            <p className="mt-3 text-[var(--c-ink-2)] prose-measure">
              We take work across Lagos. Our concentration is the{" "}
              <strong className="text-[var(--c-green-800)]">Ikoyi, Victoria Island and Lekki axis</strong>,
              where most of our enquiries come from — but if you are elsewhere in Lagos, ask.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["Ikoyi", "Victoria Island", "Lekki", "Lekki Phase 1", "Ikeja", "All Lagos — ask"].map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] px-3.5 py-1.5 text-[0.875rem] font-medium text-[var(--c-green-800)]"
                >
                  {a}
                </li>
              ))}
            </ul>

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

      {/* What a janitorial retainer covers — the Lagos push */}
      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Janitorial retainers</p>
            <h2 className="h2-section mt-4 max-w-[18ch]">What a monthly contract covers.</h2>
            <p className="lede mt-5">
              A retainer is not an open-ended arrangement with a cleaner who turns up when they
              can. It is a written scope at a fixed monthly cost, and somebody whose job it is to
              answer when the standard slips.
            </p>
            <Link href="/contact?service=janitorial" className="btn btn--primary mt-8">
              Request a Lagos proposal
            </Link>
          </div>
          <ul className="space-y-3 lg:pt-[2.4rem]">
            {RETAINER.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-5 py-4 text-[0.9375rem] text-[var(--c-ink-2)]"
              >
                <Check size={17} className="mt-0.5 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
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
          { href: "/training", label: "Cleaner training", detail: "For teams already on your payroll" },
          { href: "/services", label: "All services", detail: "Eleven services across cleaning and pest control" },
          { href: "/clients", label: "Who we work with", detail: "Sectors and organisations served" },
          { href: "/abuja", label: "Abuja", detail: "Our home city since 2017" },
        ]}
      />
      <EnquirySection
        eyebrow="Lagos enquiries"
        title="Janitorial retainers across Lagos."
        lede="Send us the premises, the hours it needs covered and whether you have cleaners of your own. We will come back with a scope, a monthly figure and the name of the supervisor who would run it."
        action={{ href: "/contact?service=janitorial", label: "Request a Lagos proposal" }}
        points={[
          "Monthly janitorial retainer — fixed scope, fixed cost, a named supervisor and a reporting routine.",
          "Site assessment at your Lagos premises by appointment, before any figure is quoted.",
          "If you would rather keep your own cleaners, we train them to the same standard instead.",
        ]}
      />
    </>
  );
}
