import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsSection from "@/components/sections/StatsSection";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dust & Wipes Limited | Professional Cleaning & Pest Control in Abuja",
  description:
    "Abuja's trusted professional cleaning and pest control company. Residential cleaning, office cleaning, deep cleaning, termite control, rodent control and more. Serving all FCT districts.",
};

const blogCategoryColors: Record<string, { bg: string; text: string }> = {
  "Pest Control": { bg: "#fff7f5", text: "#dd4c2f" },
  "Office Cleaning": { bg: "#f0faf4", text: "#0b8441" },
  "Cleaning Tips": { bg: "#f0faf4", text: "#0b8441" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />

      {/* ── Services ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Our Services</span>
            <h2 className="section-title mt-2">Everything Your Space Needs</h2>
            <div className="accent-line mt-3 mx-auto" />
            <p className="text-gray-500 mt-5 max-w-md mx-auto text-base leading-relaxed">
              From thorough residential cleans to industrial-strength pest control — we have you covered across all of Abuja FCT.
            </p>
          </div>

          <ServicesGrid limit={6} />

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0b8441] font-semibold text-[0.9375rem] hover:gap-3 transition-all"
            >
              View all 10 services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />

      {/* ── Blog Preview ── */}
      <section className="py-24 bg-[#f8f9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <span className="section-eyebrow">Blog & Tips</span>
              <h2 className="section-title mt-1.5">Expert Cleaning Advice</h2>
              <div className="accent-line mt-3" />
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-[#0b8441] font-semibold text-sm hover:gap-3 transition-all shrink-0"
            >
              All articles <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, i) => {
              const colors = blogCategoryColors[post.category] ?? { bg: "#f0faf4", text: "#0b8441" };
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image placeholder */}
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, #f8f9f6 100%)` }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500"
                    >
                      {post.category === "Pest Control" ? "🐛" : post.category === "Office Cleaning" ? "🏢" : "🧹"}
                    </div>
                    <div
                      className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-gray-400 mb-2.5 font-medium">{post.readTime}</div>
                    <h3
                      className="font-bold text-gray-900 mb-2.5 line-clamp-2 text-[1.0625rem] leading-snug group-hover:text-[#0b8441] transition-colors"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-[#0b8441] text-sm font-semibold">
                      Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#0b8441] font-semibold text-sm">
              View all articles <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
