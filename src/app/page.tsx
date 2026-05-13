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

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />

      {/* Services section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="section-title mt-2">Everything Your Space Needs</h2>
            <div className="accent-line mt-3 mx-auto" />
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              From thorough residential cleans to industrial-strength pest control — we have you covered across all of Abuja FCT.
            </p>
          </div>
          <ServicesGrid limit={6} />
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0b8441] font-semibold hover:gap-3 transition-all"
            >
              View all services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />

      {/* Blog preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">Blog & Tips</span>
              <h2 className="section-title mt-1">Expert Cleaning Advice</h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-[#0b8441] font-semibold text-sm hover:gap-3 transition-all shrink-0"
            >
              View all posts <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover"
              >
                {/* Placeholder image area */}
                <div className="h-44 bg-gradient-to-br from-[#0b8441]/10 to-[#dd4c2f]/10 flex items-center justify-center text-5xl">
                  {post.category === "Pest Control" ? "🐛" : post.category === "Office Cleaning" ? "🏢" : "🧹"}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#0b8441] bg-green-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0b8441] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1 mt-4 text-[#0b8441] text-sm font-medium">
                    Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#0b8441] font-semibold text-sm">
              View all posts <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
