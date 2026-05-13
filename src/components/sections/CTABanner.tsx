import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 hero-bg" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-[#dd4c2f] opacity-20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6 font-medium">
          Ready to book?
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          Let&apos;s Make Your Space{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #86efac, #fde68a)" }}>
            Spotless
          </span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Get a free, no-obligation quote today. We serve all districts across Abuja FCT.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#dd4c2f] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#b83d25] transition-all hover:-translate-y-1 shadow-xl inline-flex items-center justify-center gap-2"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>
          <a
            href={`tel:${COMPANY.phone}`}
            className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Call Us Now
          </a>
        </div>

        <p className="text-white/50 text-xs mt-8">
          We typically respond within 2 hours. Mon–Sat, 7am–6pm.
        </p>
      </div>
    </section>
  );
}
