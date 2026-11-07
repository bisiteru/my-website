import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Cleaner Training for Organisations in Lagos & Abuja",
  description: "Practical, customised on-site training for in-house cleaners and supervisors. Housekeeping, workplace hygiene, chemical handling, PPE and safety in Lagos and Abuja.",
};

const topics = [
  { number: "01", title: "Housekeeping practice", detail: "Daily routines, task sequencing, room standards and consistent inspection." },
  { number: "02", title: "Workplace hygiene & safety", detail: "High-touch areas, cross-contamination, safe working practices and site-specific risks." },
  { number: "03", title: "Chemicals, equipment & PPE", detail: "Product labels, dilution, storage, handling, protective equipment and appropriate use." },
  { number: "04", title: "Supervision & quality", detail: "Work plans, handovers, feedback and checks that help teams maintain standards." },
];

export default function TrainingPage() {
  return (
    <>
      <section className="bg-[#173627] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8d0b8]">Training · Lagos &amp; Abuja</p>
          <div className="mt-7 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-[15ch] font-[family-name:var(--font-display)] text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[1.06] tracking-[-0.04em]">Better cleaning starts with better equipped people.</h1>
            <div>
              <p className="max-w-xl text-lg leading-8 text-white/75">Practical training for organisations that employ their own cleaners. We shape sessions around your staff, premises, work routines and hygiene priorities.</p>
              <Link href="/contact?service=training" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-white px-6 py-3 font-semibold text-[#173627] hover:bg-[#e9f2eb] active:scale-[0.98]">Discuss a training programme <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f3ee] py-20 sm:py-28" aria-labelledby="who-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
          <div><p className="section-eyebrow">Who it is for</p><h2 id="who-heading" className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">Strengthen your in-house team.</h2></div>
          <div className="text-lg leading-8 text-[#486052]">
            <p>For embassies, international organisations, major hotels, restaurants and other workplaces, cleaning quality depends on people who understand the site and its standards.</p>
            <p className="mt-5">We can work with direct-employed cleaners, housekeeping teams and supervisors. Training scope follows a conversation about your environment, current routines and improvement goals.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="topics-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="section-eyebrow">Programme areas</p>
          <h2 id="topics-heading" className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">Useful skills for real working conditions.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-[#53645a]">Modules below are starting points. Final content, format and schedule follow your site assessment.</p>
          <div className="mt-12 grid border-t border-[#dce5dc] md:grid-cols-2 md:gap-x-12">
            {topics.map((topic) => (
              <article key={topic.number} className="border-b border-[#dce5dc] py-8">
                <span className="text-sm font-semibold text-[#0b8441]">{topic.number}</span>
                <h3 className="mt-5 text-2xl font-semibold text-[#173627]">{topic.title}</h3>
                <p className="mt-3 max-w-lg leading-7 text-[#53645a]">{topic.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f3ee] py-20 sm:py-28" aria-labelledby="delivery-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div><p className="section-eyebrow">How we work</p><h2 id="delivery-heading" className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">Tailored to your premises and people.</h2></div>
          <ol className="space-y-6">
            {["Discuss your team, site and priorities", "Agree topics, format and timing", "Deliver practical on-site sessions", "Review observations and next steps"].map((step, index) => (
              <li key={step} className="flex gap-5 border-b border-[#d4dfd5] pb-6 text-lg text-[#173627]"><span className="font-semibold text-[#0b8441]">0{index + 1}</span><span>{step}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div><p className="section-eyebrow">Start with your team</p><h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">Tell us where stronger skills would help.</h2><p className="mt-5 flex items-start gap-2 text-[#53645a]"><Check size={18} className="mt-1 shrink-0 text-[#0b8441]" aria-hidden="true" /> Lagos and Abuja enquiries welcome.</p></div>
          <Link href="/contact?service=training" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start rounded-md bg-[#0b8441] px-6 py-3 font-semibold text-white hover:bg-[#076634] active:scale-[0.98]">Request a discussion <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
