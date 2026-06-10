"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import LogoImg from "@/components/ui/LogoImg";

const words = ["Spotless", "Hygienic", "Pest-Free", "Refreshed"];
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease } },
};

const ORBITAL_SERVICES = [
  { id: 1, label: "Residential Cleaning", color: "#0b8441" },
  { id: 2, label: "Office Cleaning", color: "#22c55e" },
  { id: 3, label: "Deep Cleaning", color: "#38bdf8" },
  { id: 4, label: "Pest Control", color: "#dd4c2f" },
  { id: 5, label: "Training & Consultancy", color: "#a855f7" },
  { id: 6, label: "Facility Management", color: "#0ea5e9" },
];

const ORBIT_RADIUS = 165;

function OrbitalServices() {
  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setRotation((r) => (r + 0.35) % 360);
    }, 50);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: 500, height: 490 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Outer decorative ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: ORBIT_RADIUS * 2 + 52,
          height: ORBIT_RADIUS * 2 + 52,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />

      {/* Dashed orbit ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: ORBIT_RADIUS * 2,
          height: ORBIT_RADIUS * 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px dashed rgba(255,255,255,0.14)",
        }}
      />

      {/* Spinning conic gradient ring */}
      <div
        className="absolute rounded-full animate-spin-slow pointer-events-none"
        style={{
          width: ORBIT_RADIUS * 2,
          height: ORBIT_RADIUS * 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(11,132,65,0.45) 28%, rgba(221,76,47,0.2) 58%, transparent 100%)",
          maskImage: `radial-gradient(transparent ${ORBIT_RADIUS - 6}px, black ${ORBIT_RADIUS - 1}px)`,
          WebkitMaskImage: `radial-gradient(transparent ${ORBIT_RADIUS - 6}px, black ${ORBIT_RADIUS - 1}px)`,
        }}
      />

      {/* Center logo orb */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: ease, delay: 0.3 }}
        className="absolute z-[15] flex flex-col items-center"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        {/* Glow rings */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ inset: -20, border: "1px solid rgba(11,132,65,0.2)", borderRadius: "50%" }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ inset: -8, border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%" }}
        />

        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(11,132,65,0.28) 0%, rgba(3,26,12,0.92) 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 0 48px rgba(11,132,65,0.22), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <LogoImg size={70} className="rounded-xl" />
        </div>
        <div className="mt-2.5 text-center">
          <div className="text-white/80 text-[11px] font-bold tracking-widest uppercase">
            Dust & Wipes
          </div>
          <div className="text-white/35 text-[9px] tracking-widest uppercase">Limited</div>
        </div>
      </motion.div>

      {/* Service nodes */}
      {ORBITAL_SERVICES.map((service, index) => {
        const nodeAngle = ((index / ORBITAL_SERVICES.length) * 360 + rotation) % 360;
        const rad = (nodeAngle * Math.PI) / 180;
        const x = ORBIT_RADIUS * Math.cos(rad);
        const y = ORBIT_RADIUS * Math.sin(rad);
        const depth = Math.sin(rad); // -1 = back/top, +1 = front/bottom
        const opacity = 0.42 + 0.58 * ((1 + depth) / 2);
        const scale = 0.8 + 0.2 * ((1 + depth) / 2);
        const zIndex = Math.round(10 + 12 * ((1 + depth) / 2));

        return (
          <div
            key={service.id}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              opacity,
              zIndex,
              transition: "opacity 0.12s",
            }}
          >
            <div
              className="whitespace-nowrap flex items-center gap-1.5 rounded-full text-[11px] font-semibold"
              style={{
                padding: "5px 12px 5px 9px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.92)",
                transform: `scale(${scale})`,
                transformOrigin: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: service.color,
                  boxShadow: `0 0 6px ${service.color}80`,
                }}
              />
              {service.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const waUrl = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent("Hello! I'd like to get a quote for your services.")}`;

  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-screen flex items-center">

      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-corridor-cleaning.jpg')" }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, rgba(3,26,12,0.92) 0%, rgba(5,32,16,0.88) 35%, rgba(8,51,24,0.82) 65%, rgba(11,92,46,0.75) 100%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[80px]"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[80px]"
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
                {[1, 2, 3, 4, 5].map((i) => (
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
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Professional Cleaning &amp; Pest Control{" "}
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
                    in Abuja
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              We create spotless, safe spaces for homes and businesses — delivered with care, precision, and a guarantee of your satisfaction.
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.525 5.856L.057 23.876a.5.5 0 0 0 .609.61l6.207-1.63C8.41 23.578 10.17 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.782 0-3.487-.47-4.97-1.362l-.356-.21-3.688.969.984-3.596-.232-.37A9.935 9.935 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
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
                {
                  icon: (
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  ),
                  text: "5.0 on Google",
                },
                { icon: null, text: "650+ Happy Clients" },
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

          {/* ── Right: Orbital showcase (desktop) ── */}
          <div className="hidden lg:flex justify-center items-center relative h-[480px]">
            <OrbitalServices />
          </div>

          {/* ── Mobile services grid ── */}
          <div className="lg:hidden grid grid-cols-2 gap-2.5 mt-2">
            {ORBITAL_SERVICES.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold text-white/85"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                {s.label}
              </div>
            ))}
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
