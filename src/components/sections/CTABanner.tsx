"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 hero-bg" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(221,76,47,0.25) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(11,132,65,0.3) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: ease }}
        >
          <span className="inline-block bg-white/10 border border-white/15 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-widest uppercase">
            Ready to book?
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Let&apos;s Make Your Space{" "}
            <span className="gradient-text-light italic">Spotless</span>
          </h2>

          <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Get a free, no-obligation quote today. We serve all districts across Abuja FCT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#dd4c2f] text-white px-9 py-4 rounded-full font-bold text-[0.9375rem] hover:bg-[#b83d25] transition-all hover:-translate-y-0.5 shadow-xl hover:shadow-2xl"
            >
              Get a Free Quote
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2.5 bg-white/8 border border-white/20 text-white px-9 py-4 rounded-full font-bold text-[0.9375rem] hover:bg-white/14 transition-all"
            >
              <Phone size={17} />
              {COMPANY.phone}
            </a>
          </div>

          <p className="text-white/35 text-xs mt-8 tracking-wide">
            We typically respond within 2 hours &middot; Mon–Sat, 7am–6pm
          </p>
        </motion.div>
      </div>
    </section>
  );
}
