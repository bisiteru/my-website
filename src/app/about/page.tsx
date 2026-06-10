import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Award, Users, Leaf, Clock, Quote } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dust & Wipes Limited — founded in 2017 by Bisi Teru, Abuja's trusted professional cleaning and pest control company. Our story, values, and commitment to excellence.",
  keywords: [
    "Dust and Wipes Limited story",
    "Bisi Teru cleaning company Abuja",
    "professional cleaning company Abuja founded 2017",
    "about Dust and Wipes Abuja",
  ],
};

const values = [
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standard in every job, big or small." },
  { icon: Users, title: "Integrity", desc: "Honest pricing, transparent communication, and trustworthy staff." },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly products that protect your family and the environment." },
  { icon: Clock, title: "Reliability", desc: "Punctual arrivals, consistent quality, and dependable service every time." },
];

const milestones = [
  { year: "2017", title: "Founded", desc: "Dust & Wipes Limited was established in Abuja by Bisi Teru, with a mission to raise the standard of professional cleaning across the FCT." },
  { year: "2019", title: "Expanded to Pest Control", desc: "We added comprehensive pest control services, becoming a one-stop solution for property hygiene and safety across Abuja." },
  { year: "2022", title: "500+ Clients Served", desc: "Reached a major milestone serving over 500 residential and commercial clients across all FCT districts." },
  { year: "2024", title: "5★ Google Rating", desc: "Recognised with a 5-star Google Business rating, reflecting our clients' consistent satisfaction." },
  { year: "2025", title: "Growing Stronger", desc: "With 650+ clients and a growing team, we continue to expand our services and raise the bar for cleaning excellence in Abuja." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Cleaning Abuja, One Space at a Time
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re Dust &amp; Wipes Limited — a professional cleaning and pest control company
            built on a simple belief: every space deserves to be spotless, safe, and healthy.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Founder's Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title mt-2">Born from a Simple but Powerful Desire</h2>
            <div className="accent-line mt-3 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Story text */}
            <div className="space-y-5 text-gray-600 leading-relaxed text-[1.0625rem]">
              <p>
                Dust and Wipes Limited was born from a simple but powerful desire: to make a
                difference.
              </p>
              <p>
                Before founding the company in 2017, I spent many years working as an Information
                Technology consultant and manager for government agencies, international NGOs, and
                corporate organizations. During that time, I observed a recurring challenge within
                the cleaning industry — many cleaners worked under difficult conditions, received
                little or no professional training, endured delayed payments, and were often
                undervalued despite the important role they played.
              </p>
              <p>
                In 2016, while serving as a full-time IT Manager, I developed close relationships
                with the cleaners in my organization. Listening to their stories, struggles, and
                aspirations opened my eyes even further to the need for change. It became clear to
                me that cleaning was more than a service; it was an opportunity to create meaningful
                impact.
              </p>
              <p>
                <strong className="text-gray-800">
                  That realization inspired the birth of Dust and Wipes Limited.
                </strong>
              </p>
              <p>
                Our vision was straightforward: build a company where clients receive exceptional
                cleaning services delivered by well-trained professionals and where cleaners are
                treated with dignity, respect, and fairness. We set out to bridge the gap between
                poor service quality and professional excellence while also addressing the welfare
                and development of the people behind the work.
              </p>
              <p>
                Today, years later, that vision continues to guide everything we do. At Dust and
                Wipes, I do not see myself as a boss. Rather, I am privileged to lead a family of
                dedicated professionals whom I proudly call my brothers and sisters. Together, we
                are committed to creating cleaner, healthier, and more welcoming environments while
                transforming lives, one space and one person at a time.
              </p>

              {/* Signature */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                {/* Founder photo placeholder */}
                <div
                  className="w-16 h-16 rounded-full bg-[#0b8441]/10 border-2 border-[#0b8441]/20 flex items-center justify-center shrink-0 overflow-hidden"
                  title="Founder photo — replace with actual image"
                >
                  {/* Replace the div below with <Image src="/images/bisi-teru.jpg" ... /> when photo is available */}
                  <span className="text-[#0b8441] text-2xl font-black select-none">BT</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Bisi Teru</div>
                  <div className="text-sm text-[#0b8441] font-medium">
                    Founder &amp; CEO, Dust and Wipes Limited
                  </div>
                </div>
                <Quote size={32} className="text-[#0b8441]/15 ml-auto shrink-0" />
              </div>
            </div>

            {/* Photos column */}
            <div className="flex flex-col gap-5">
              {/* Team photo */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-md">
                <Image
                  src="/images/team-uba-marketplace.webp"
                  alt="The Dust and Wipes team at UBA Marketplace Abuja"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Boss/founder photo placeholder */}
              <div
                className="rounded-2xl overflow-hidden aspect-video relative bg-gradient-to-br from-[#0b8441]/10 to-[#0b8441]/5 border-2 border-dashed border-[#0b8441]/20 flex flex-col items-center justify-center gap-2 text-center px-6"
                title="Add founder/boss photo here"
              >
                {/* Replace this div with <Image src="/images/founder-photo.jpg" ... /> when photo is available */}
                <div className="w-14 h-14 rounded-full bg-[#0b8441]/15 flex items-center justify-center">
                  <span className="text-[#0b8441] text-xl font-black">BT</span>
                </div>
                <p className="text-[#0b8441]/60 text-sm font-medium">
                  Founder photo coming soon
                </p>
                <p className="text-[#0b8441]/40 text-xs">
                  Replace with{" "}
                  <code className="bg-[#0b8441]/10 px-1 rounded">/images/founder-photo.jpg</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Differentiators ── */}
      <section className="py-20 bg-[#f8f9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">
                What Sets Us Apart
              </span>
              <h2 className="section-title mt-2 mb-6">A Company Built on Trust &amp; Quality</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We saw a gap in the market — too many cleaning companies cutting corners, using
                  cheap products, and treating clients as transactions rather than partners. We
                  decided to do things differently.
                </p>
                <p>
                  Today, we&apos;re proud to serve hundreds of clients across Maitama, Asokoro,
                  Wuse, Garki, Gwarinpa, and every other district in the FCT. Our reputation is
                  built on referrals, five-star reviews, and the simple satisfaction of a job done
                  right.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Licensed and insured pest control technicians",
                  "Eco-friendly, non-toxic cleaning products",
                  "Thoroughly vetted and uniformed staff",
                  "Flexible scheduling — 7 days a week",
                  "100% satisfaction guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#0b8441] mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b8441] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#076634] transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  Work With Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0b8441]/10 to-[#dd4c2f]/10 rounded-3xl p-10 text-center">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: "🏠", label: "Homes" },
                    { emoji: "🏢", label: "Offices" },
                    { emoji: "🏗️", label: "Facilities" },
                    { emoji: "🏨", label: "Hotels" },
                  ].map(({ emoji, label }) => (
                    <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm card-hover">
                      <div className="text-4xl mb-2">{emoji}</div>
                      <div className="text-sm font-semibold text-gray-700">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white rounded-2xl p-5 shadow-sm">
                  <div className="text-3xl font-black gradient-text">650+</div>
                  <div className="text-sm text-gray-500 mt-1">Satisfied clients across Abuja FCT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="section-title mt-2">What We Stand For</h2>
            <div className="accent-line mt-3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0b8441]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-[#0b8441]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f8f9f6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#dd4c2f] font-semibold text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="section-title mt-2">From Humble Beginnings</h2>
            <div className="accent-line mt-3 mx-auto" />
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0b8441] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
