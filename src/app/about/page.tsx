import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Award, Users, Leaf, Clock } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dust & Wipes Limited — Abuja's trusted professional cleaning and pest control company. Our story, values, and commitment to excellence.",
};

const values = [
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standard in every job, big or small." },
  { icon: Users, title: "Integrity", desc: "Honest pricing, transparent communication, and trustworthy staff." },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly products that protect your family and the environment." },
  { icon: Clock, title: "Reliability", desc: "Punctual arrivals, consistent quality, and dependable service every time." },
];

const milestones = [
  { year: "2021", title: "Founded", desc: "Dust & Wipes Limited was established in Abuja with a mission to raise the standard of professional cleaning in the FCT." },
  { year: "2022", title: "Expanded to Pest Control", desc: "We added comprehensive pest control services, becoming a one-stop solution for property hygiene across Abuja." },
  { year: "2023", title: "500+ Clients Served", desc: "Reached a major milestone serving over 500 residential and commercial clients across all FCT districts." },
  { year: "2024", title: "5★ Google Rating", desc: "Recognised with a 5-star Google Business rating, reflecting our clients' consistent satisfaction." },
  { year: "2025", title: "Growing Stronger", desc: "Expanding our team and service range to meet growing demand from homes, offices, and facilities across Abuja." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Cleaning Abuja, One Space at a Time
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re Dust & Wipes Limited — a professional cleaning and pest control company built on a simple belief: every space deserves to be spotless, safe, and healthy.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="section-title mt-2 mb-6">A Company Built on Trust & Quality</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dust & Wipes Limited was founded in Abuja in 2021 with a clear mission: to provide the FCT&apos;s homes, offices, and facilities with world-class cleaning and pest control services at fair, transparent prices.
                </p>
                <p>
                  We saw a gap in the market — too many cleaning companies cutting corners, using cheap products, and treating clients as transactions rather than partners. We decided to do things differently.
                </p>
                <p>
                  Today, we&apos;re proud to serve hundreds of clients across Maitama, Asokoro, Wuse, Garki, Gwarinpa, and every other district in the FCT. Our reputation is built on referrals, five-star reviews, and the simple satisfaction of a job done right.
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

            {/* Right: visual */}
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
                  <div className="text-3xl font-black gradient-text">500+</div>
                  <div className="text-sm text-gray-500 mt-1">Satisfied clients across Abuja FCT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">Our Values</span>
            <h2 className="section-title mt-2">What We Stand For</h2>
            <div className="accent-line mt-3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center border border-gray-100 card-hover">
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
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#dd4c2f] font-semibold text-sm uppercase tracking-widest">Our Journey</span>
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
