import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsSection from "@/components/sections/StatsSection";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { BLOG_POSTS, COMPANY, AFFILIATIONS, SERVICE_AREAS, LOGO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Professional Cleaning & Pest Control in Abuja | Dust and Wipes Ltd.",
  description:
    "Abuja's most trusted cleaning and pest control company since 2017. Residential, commercial & specialist cleaning in Gwarinpa, Maitama, Wuse & across FCT. 1,250+ happy clients. Get a free quote today.",
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
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title mt-2">Our Services</h2>
            <div className="accent-line mt-3 mx-auto" />
            <p className="text-gray-500 mt-5 max-w-md mx-auto text-base leading-relaxed">
              Comprehensive cleaning and facility management solutions tailored for Abuja homes and businesses.
            </p>
          </div>

          <ServicesGrid limit={6} />

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0b8441] font-semibold text-[0.9375rem] hover:gap-3 transition-all"
            >
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Affiliations Bar ── */}
      <div className="bg-[#f0faf4] border-y border-green-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest shrink-0">
              Certified &amp; Affiliated With
            </span>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {AFFILIATIONS.map((a) => (
                <span
                  key={a.short}
                  title={a.full}
                  className="inline-flex items-center gap-1.5 border border-green-200 text-[#0b8441] font-bold text-sm px-4 py-1.5 rounded-full bg-white"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b8441] inline-block" />
                  {a.short}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── About Teaser ── */}
      <section className="py-24 bg-[#f8f9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image
                src="/images/team-uba-marketplace.jpg"
                alt="The Dust and Wipes professional cleaning team at UBA Marketplace Abuja"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="section-eyebrow">About Dust &amp; Wipes</span>
              <h2 className="section-title mt-2">
                Transforming Spaces <span style={{ color: "#0b8441" }}>with Care</span>
              </h2>
              <div className="accent-line mt-3" />
              <p className="text-gray-600 mt-6 leading-relaxed">
                At Dust and Wipes Ltd., we&apos;re driven by one thing — your satisfaction. We go beyond the basics, crafting personalised cleaning solutions that fit your unique needs, delivered with expertise and a genuine touch of care.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our mission is to turn spotless spaces into lasting impressions, making your comfort our priority every single time. Trusted by over 1,250 clients across Abuja FCT since {COMPANY.foundedYear}.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <Image src={LOGO_URL} alt="Dust & Wipes Logo" width={40} height={40} className="rounded-xl" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">Dust & Wipes Limited</div>
                  <div className="text-xs text-[#0b8441] font-medium">{COMPANY.tagline}</div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 bg-[#0b8441] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#076634] transition-all hover:-translate-y-0.5 shadow-md"
              >
                Learn More About Us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />

      {/* ── Service Areas ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow">Where We Operate</span>
            <h2 className="section-title mt-2">Service Areas in Abuja</h2>
            <div className="accent-line mt-3 mx-auto" />
            <p className="text-gray-500 mt-5 max-w-md mx-auto text-base leading-relaxed">
              We serve all major districts across the FCT. Not sure if we cover your area?{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-[#0b8441] font-semibold hover:underline">
                Call us
              </a>{" "}
              and we&apos;ll confirm.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-5">Areas We Serve</h4>
              <div className="flex flex-wrap gap-2.5">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="text-sm font-medium text-[#0b8441] border border-green-200 bg-[#f0faf4] px-3.5 py-1.5 rounded-full hover:bg-[#0b8441] hover:text-white hover:border-[#0b8441] transition-all cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent("Hello, I'd like to confirm if you cover my area and get a quote")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 mt-6 bg-[#25d366] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-[#1ebe5e] transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp to Confirm Your Area
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252491.08736694988!2d7.298248749999999!3d9.0578755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1715000000000!5m2!1sen!2sng"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dust and Wipes service area map Abuja Nigeria"
              />
            </div>
          </div>
        </div>
      </section>

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
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, #f8f9f6 100%)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
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
