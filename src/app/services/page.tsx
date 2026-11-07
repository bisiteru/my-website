import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cleaning, Property Care & Training Services",
  description: "Explore managed workplace cleaning, residential care, pest control and cleaner training from Dust & Wipes in Abuja and Lagos.",
};

const services = [
  { id: "commercial-cleaning", number: "01", title: "Workplace cleaning", body: "Plans for offices, diplomatic workplaces, hospitality spaces and other managed facilities. We discuss your site, routines, access and priorities before defining scope.", items: ["Daily and periodic cleaning", "Restrooms and shared spaces", "Detailed and post-construction cleaning"] },
  { id: "residential-cleaning", number: "02", title: "Residential care", body: "Considered cleaning for homes and managed residences, with attention to the surfaces, routines and access requirements that matter to each household.", items: ["Regular home cleaning", "Deep cleaning", "Carpet and upholstery care"] },
  { id: "pest-control", number: "03", title: "Pest control", body: "Assessment-led pest management for homes and workplaces. Treatment options and precautions are discussed for the site and problem identified.", items: ["Site assessment", "Treatment planning", "Follow-up needs"] },
  { id: "training-consultancy", number: "04", title: "Cleaner training", body: "Practical, customised on-site training for organisations employing cleaners directly, including housekeeping, workplace hygiene, chemical handling and supervision.", items: ["In-house cleaning teams", "Supervisors", "Lagos and Abuja"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#f4f3ee] py-20 text-[#173627] sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="section-eyebrow">Services</p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(3rem,5vw,5.75rem)] font-semibold leading-[1.06] tracking-[-0.04em]">The right care for your space.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#486052]">Cleaning and team development in Abuja and Lagos. We begin by understanding your building, people and operating needs.</p>
            <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#0b8441] px-6 py-3 font-semibold text-white hover:bg-[#076634] active:scale-[0.98]">Discuss your requirements <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-[#d3d9d4]">
            <Image src="/images/green-uniform-office.jpg" alt="Dust & Wipes staff member cleaning a residential kitchen" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24" aria-labelledby="service-list">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl"><p className="section-eyebrow">What we offer</p><h2 id="service-list" className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">A clear scope, built around your needs.</h2></div>
          <div className="mt-12 border-t border-[#dce5dc]">
            {services.map((service) => (
              <article key={service.id} id={service.id} className="grid gap-6 border-b border-[#dce5dc] py-9 lg:grid-cols-[0.15fr_0.85fr_1fr] lg:gap-12 lg:py-12">
                {service.id === "commercial-cleaning" && <span id="post-construction" className="sr-only">Post-construction cleaning</span>}
                {service.id === "residential-cleaning" && <><span id="deep-cleaning" className="sr-only">Deep cleaning</span><span id="carpet-upholstery" className="sr-only">Carpet and upholstery cleaning</span></>}
                <span className="text-sm font-semibold text-[#0b8441]">{service.number}</span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#173627]">{service.title}</h3>
                <div><p className="leading-8 text-[#53645a]">{service.body}</p><ul className="mt-5 flex flex-wrap gap-2">{service.items.map((item) => <li key={item} className="border border-[#cbd8ce] px-3 py-1.5 text-xs font-medium text-[#345543]">{item}</li>)}</ul>{service.id === "training-consultancy" && <Link href="/training" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[#0b8441] hover:underline underline-offset-4">Explore training <ArrowUpRight size={17} aria-hidden="true" /></Link>}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#173627] py-20 text-white sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8d0b8]">Next step</p><h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold sm:text-5xl">Let us plan around your space.</h2><p className="mt-5 text-white/75">Tell us your location and what you need. We will discuss suitable scope and availability.</p></div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start rounded-md bg-white px-6 py-3 font-semibold text-[#173627] hover:bg-[#e9f2eb] active:scale-[0.98]">Send an enquiry <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
