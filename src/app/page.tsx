import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Managed Cleaning & Cleaner Training in Abuja and Lagos",
  description: "Dust & Wipes provides managed cleaning for homes and organisations, plus practical training for in-house cleaning teams in Abuja and Lagos.",
};

const pathways = [
  { number: "01", title: "For organisations", body: "Cleaning plans for offices, diplomatic workplaces, hotels, restaurants and other managed facilities.", href: "/services", cta: "View cleaning services" },
  { number: "02", title: "For your own team", body: "Practical training for direct-employed cleaners and supervisors, shaped around your workplace.", href: "/training", cta: "Explore training" },
  { number: "03", title: "For residences", body: "Considered cleaning and property care for homes where consistency and discretion matter.", href: "/services#residential-cleaning", cta: "Explore home care" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-white py-20 sm:py-28" aria-labelledby="pathways-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="section-eyebrow">How we can help</p>
              <h2 id="pathways-heading" className="mt-4 max-w-md font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[#173627] sm:text-5xl">One standard. Different spaces.</h2>
            </div>
            <p className="max-w-2xl self-end text-lg leading-8 text-[#53645a]">Every site has its own routines, people and risks. Tell us what needs care. We will discuss a suitable cleaning or training plan before proposing scope.</p>
          </div>
          <div className="mt-14 grid gap-px border-y border-[#d9e0d8] bg-[#d9e0d8] lg:grid-cols-3">
            {pathways.map((item) => (
              <article key={item.number} className="flex flex-col bg-white px-3 py-9 lg:px-8 lg:py-12">
                <span className="text-sm font-semibold text-[#0b8441]">{item.number}</span>
                <h3 className="mt-9 text-2xl font-semibold text-[#173627]">{item.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#53645a]">{item.body}</p>
                <Link href={item.href} className="mt-8 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-[#0b8441] hover:underline underline-offset-4">
                  {item.cta} <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173627] py-20 text-white sm:py-28" aria-labelledby="training-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#345342]">
            <Image src="/images/team-meeting.jpg" alt="Dust & Wipes staff in a workplace discussion" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8d0b8]">Training &amp; capability</p>
            <h2 id="training-heading" className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl">Equip people who care for your space every day.</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">For organisations employing cleaners directly, we offer practical training shaped around actual work areas, routines and equipment.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Housekeeping routines", "Workplace hygiene", "Chemical handling & PPE", "Supervisory practice"].map((topic) => (
                <li key={topic} className="flex items-center gap-3 text-sm text-white/90"><Check size={18} className="shrink-0 text-[#a8d0b8]" aria-hidden="true" />{topic}</li>
              ))}
            </ul>
            <Link href="/training" className="mt-9 inline-flex min-h-12 items-center gap-3 border-b border-[#a8d0b8] font-semibold text-white hover:text-[#a8d0b8]">View training approach <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f3ee] py-20 sm:py-28" aria-labelledby="cities-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Where we work</p>
            <h2 id="cities-heading" className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">Local teams. Shared standards.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[{ city: "Abuja", detail: "Established operations across the FCT", href: "/abuja" }, { city: "Lagos", detail: "Visit our Lekki office or enquire about a site assessment", href: "/lagos" }].map(({ city, detail, href }) => (
              <Link key={city} href={href} className="group flex min-h-56 flex-col justify-between border border-[#cbd8ce] bg-white p-7 transition-colors hover:border-[#0b8441] sm:p-9">
                <span className="text-sm text-[#53645a]">{detail}</span>
                <span className="flex items-end justify-between font-[family-name:var(--font-display)] text-4xl text-[#173627]">{city}<ArrowUpRight size={27} className="text-[#0b8441] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="enquiry-heading">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div><p className="section-eyebrow">Start a conversation</p><h2 id="enquiry-heading" className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">Tell us what your space needs.</h2></div>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-md bg-[#0b8441] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#076634] active:scale-[0.98]">Send an enquiry <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
