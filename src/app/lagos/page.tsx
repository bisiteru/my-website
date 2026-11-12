import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning & Cleaner Training in Lagos",
  description:
    "Dust & Wipes in Lagos — a training-led entry for organisations with in-house cleaning teams, plus commercial cleaning. Lagos address; site assessments by appointment.",
};

export default function LagosPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations · Lagos"
        title="A training-led start in Lagos."
        lede="We are building our Lagos presence around what we do best: equipping in-house cleaning teams to work to a professional standard."
      >
        <Link href="/contact?service=training" className="btn btn--on-dark">Discuss training</Link>
      </PageHero>

      <section className="section">
        <div className="container-dw grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="eyebrow">How we work in Lagos</p>
            <h2 className="h2-section mt-4">Training first, cleaning alongside.</h2>
            <div className="mt-5 space-y-4 text-[var(--c-ink-2)] prose-measure">
              <p>
                Many Lagos organisations already employ their own cleaners. Rather than replace
                them, we train them — housekeeping routines, hygiene and safety, correct use of
                chemicals and equipment, and the supervision that holds a standard in place.
              </p>
              <p>
                We also take on commercial cleaning for organisations that would rather outsource
                it, and we have delivered cleaning for a Lagos healthcare client.
              </p>
            </div>
          </div>
          {/* §3.2 — business address, never a staffed walk-in office */}
          <div className="card p-8 h-fit">
            <p className="eyebrow">Lagos</p>
            <p className="mt-4 font-semibold text-[var(--c-green-800)]">
              Lagos address · Site assessments by appointment
            </p>
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
        </div>
      </section>

      <CTABanner />
    </>
  );
}
