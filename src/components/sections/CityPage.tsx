import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

type CityPageProps = {
  city: "Lagos" | "Abuja";
  eyebrow: string;
  title: string;
  intro: string;
  address: string;
  note: string;
};

const audiences = [
  "Diplomatic missions and international organisations",
  "Hotels, restaurants and hospitality teams",
  "Offices and managed workplaces",
  "Premium residences and property managers",
];

export default function CityPage({ city, eyebrow, title, intro, address, note }: CityPageProps) {
  return (
    <>
      <section className="bg-[#f4f3ee] py-20 text-[#173627] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-12">
          <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(3rem,5vw,5.75rem)] font-semibold leading-[1.06] tracking-[-0.04em]">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#486052]">{intro}</p>
            <Link href={`/contact?city=${city}`} className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#0b8441] px-6 py-3 font-semibold text-white hover:bg-[#076634] active:scale-[0.98]">Discuss a {city} requirement <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <aside className="border-t-2 border-[#0b8441] bg-white p-7 sm:p-9" aria-label={`${city} office details`}>
            <MapPin className="text-[#0b8441]" size={25} aria-hidden="true" />
            <h2 className="mt-7 text-xl font-semibold">{city} office</h2>
            <address className="mt-3 not-italic leading-7 text-[#486052]">{address}</address>
            <p className="mt-6 border-t border-[#dce5dc] pt-5 text-sm leading-6 text-[#53645a]">{note}</p>
          </aside>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28" aria-labelledby="city-services">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="section-eyebrow">For your site</p>
            <h2 id="city-services" className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#173627] sm:text-5xl">Care shaped around your operations.</h2>
            <p className="mt-6 max-w-xl leading-8 text-[#53645a]">Cleaning requirements differ by building, occupancy and working hours. Our first conversation establishes scope, access and expectations before we propose an approach.</p>
            <Link href="/services" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-[#0b8441] hover:underline underline-offset-4">Explore cleaning services <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="border-t border-[#dce5dc]">
            {audiences.map((audience) => <p key={audience} className="border-b border-[#dce5dc] py-5 text-lg text-[#173627]">{audience}</p>)}
          </div>
        </div>
      </section>
      <section className="bg-[#173627] py-20 text-white sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8d0b8]">For directly employed staff</p>
            <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold sm:text-5xl">Build capability within your own cleaning team.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/75">Ask about practical, customised on-site training for cleaners and supervisors in {city}.</p>
          </div>
          <Link href={`/training?city=${city}`} className="inline-flex min-h-12 shrink-0 items-center gap-3 border-b border-[#a8d0b8] font-semibold text-white hover:text-[#a8d0b8]">Explore training <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
