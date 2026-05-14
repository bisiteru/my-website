"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const words = ["Spotless", "Hygienic", "Pest-Free", "Refreshed"];
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const proofCards = [
  {
    title: "Residential Cleaning",
    tag: "Most Booked",
    tagColor: "bg-green-500",
    desc: "Deep cleans & regular maintenance",
    delay: 0.6,
    position: "top-8 -right-4 lg:right-0",
  },
  {
    title: "Pest Control",
    tag: "Certified",
    tagColor: "bg-[#dd4c2f]",
    desc: "Termites, rodents, mosquitoes",
    delay: 0.9,
    position: "bottom-20 -left-4 lg:-left-6",
  },
  {
    title: "Deep Cleaning",
    tag: "Top Rated",
    tagColor: "bg-amber-500",
    desc: "Move-in, move-out & post-reno",
    delay: 1.2,
    position: "bottom-0 right-4 lg:right-8",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease } },
};

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello! I'd like to get a quote for your services.")}`;

  return (
    <section className="hero-bg relative overflow-hidden min-h-screen flex items-center">

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[80px]"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[80px]"
        style={{ background: "radial-gradient(circle, #dd4c2f 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 mb-8">
              <span className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </span>
              <span className="text-white/60 text-sm font-medium tracking-wide">
                Abuja&apos;s #1 Cleaning & Pest Control
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Your Space,{" "}
              <span className="block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20, clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ opacity: 0, y: -20, clipPath: "inset(0% 0% 100% 0%)" }}
                    transition={{ duration: 0.5, ease: ease }}
                    className="gradient-text-light italic inline-block"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Professional cleaning &amp; pest control across all Abuja FCT districts — reliable, thorough, and built around your schedule.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#dd4c2f] text-white px-8 py-4 rounded-full font-bold text-[0.9375rem] hover:bg-[#b83d25] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/8 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-[0.9375rem] hover:bg-white/15 transition-all"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.525 5.856L.057 23.876a.5.5 0 0 0 .609.61l6.207-1.63C8.41 23.578 10.17 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.782 0-3.487-.47-4.97-1.362l-.356-.21-3.688.969.984-3.596-.232-.37A9.935 9.935 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start"
            >
              {[
                { icon: <div className="flex gap-0.5">{[1,2,3,4,5].map(i=><Star key={i} size={12} className="text-amber-400 fill-amber-400"/>)}</div>, text: "5.0 on Google" },
                { icon: null, text: "500+ Happy Clients" },
                { icon: null, text: "All FCT Districts" },
              ].map(({ icon, text }, i) => (
                <div key={text} className="flex items-center gap-2 text-white/50 text-sm">
                  {i > 0 && <span className="w-px h-3.5 bg-white/20" />}
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Visual showcase ── */}
          <div className="hidden lg:flex justify-center items-center relative h-[480px]">

            {/* Central orb */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: ease, delay: 0.3 }}
              className="relative w-72 h-72 rounded-full flex items-center justify-center"
              style={{ background: "radial-gradient(circle at 40% 40%, rgba(11,132,65,0.25) 0%, rgba(11,132,65,0.05) 70%)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* Outer ring, spinning slowly */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(11,132,65,0.35) 30%, rgba(221,76,47,0.2) 60%, transparent 100%)",
                  maskImage: "radial-gradient(transparent 60%, black 65%)",
                  WebkitMaskImage: "radial-gradient(transparent 60%, black 65%)",
                }}
              />

              {/* Centre logo mark */}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#0b8441] flex items-center justify-center text-white font-black text-2xl shadow-2xl mx-auto mb-3"
                  style={{ fontFamily: "var(--font-display)" }}>
                  D<span className="text-[#dd4c2f]">&</span>W
                </div>
                <div className="text-white/80 text-xs font-semibold tracking-widest uppercase">Dust & Wipes</div>
                <div className="text-white/40 text-[10px] tracking-widest uppercase">Limited</div>
              </div>

              {/* Dashed orbit */}
              <div
                className="absolute inset-[-24px] rounded-full"
                style={{ border: "1px dashed rgba(255,255,255,0.12)" }}
              />
            </motion.div>

            {/* Service proof cards */}
            {proofCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: ease, delay: card.delay }}
                className={`absolute ${card.position} bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3.5 min-w-[175px] shadow-xl`}
              >
                <div className="flex items-start gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-white text-sm font-semibold leading-tight">{card.title}</span>
                    </div>
                    <p className="text-white/55 text-[11px] leading-snug">{card.desc}</p>
                  </div>
                </div>
                <span className={`inline-block mt-2 text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${card.tagColor}`}>
                  {card.tag}
                </span>
              </motion.div>
            ))}

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: ease, delay: 1.5 }}
              className="absolute top-1/2 -right-2 -translate-y-1/2 bg-[#0b8441] rounded-2xl px-5 py-4 text-center shadow-2xl"
            >
              <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">Rating</div>
              <div className="text-3xl font-black text-white leading-none" style={{ fontFamily: "var(--font-display)" }}>5.0</div>
              <div className="flex justify-center mt-1.5 gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-amber-300 fill-amber-300" />)}
              </div>
              <div className="text-white/50 text-[9px] mt-1">Google Reviews</div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
