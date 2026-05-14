"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Sparkles, Shield, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const features = [
  "Eco-Friendly Products",
  "Vetted & Trained Staff",
  "Same-Day Bookings",
];

const floatingBadges = [
  { icon: Star, label: "5★ Rated", sublabel: "Google Reviews", color: "from-amber-400 to-orange-400", delay: "0s" },
  { icon: Shield, label: "Certified", sublabel: "Pest Control", color: "from-green-500 to-emerald-600", delay: "1.3s" },
  { icon: Clock, label: "On Time", sublabel: "Guaranteed", color: "from-blue-500 to-indigo-600", delay: "2.6s" },
];

const words = ["Spotless", "Hygienic", "Pest-Free", "Refreshed"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const waMessage = encodeURIComponent("Hello! I'd like to get a quote for your services.");
  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${waMessage}`;

  return (
    <section className="hero-bg relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-green-400 opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#dd4c2f] opacity-10 blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-2xl border border-white/10 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-10 h-10 rounded-full border border-white/10 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 rounded-lg border border-white/10 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles size={14} className="text-yellow-300" />
              Abuja&apos;s #1 Cleaning & Pest Control Company
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Your Space,{" "}
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #86efac, #fde68a)",
                  transition: "opacity 0.4s ease",
                  opacity: visible ? 1 : 0,
                }}
              >
                {words[wordIndex]}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-white/70 font-light mb-8 max-w-lg mx-auto lg:mx-0">
              Professional cleaning &amp; pest control services across Abuja FCT — reliable, thorough, and affordable.
            </h2>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {features.map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-sm"
                >
                  <CheckCircle size={13} className="text-green-300" />
                  {f}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-[#dd4c2f] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#b83d25] transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.525 5.856L.057 23.876a.5.5 0 0 0 .609.61l6.207-1.63C8.41 23.578 10.17 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.782 0-3.487-.47-4.97-1.362l-.356-.21-3.688.969.984-3.596-.232-.37A9.935 9.935 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start flex-wrap">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span>5.0 on Google</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/70 text-sm">500+ Happy Clients</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/70 text-sm">All FCT Districts</span>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Main card */}
            <div className="relative w-80 h-80 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
              {/* Emoji icons grid */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8">
                {["🏠", "🏢", "✨", "🛋️", "🪲", "🦟", "🐀", "🛏️", "🔨"].map((emoji, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center text-3xl bg-white/10 rounded-2xl animate-float"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#0b8441] text-white rounded-2xl px-5 py-3 text-center shadow-2xl">
                  <div className="text-2xl font-black">D&W</div>
                  <div className="text-xs text-green-200 tracking-wider">PROFESSIONAL</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {floatingBadges.map(({ icon: Icon, label, sublabel, color, delay }) => (
              <div
                key={label}
                className="absolute animate-float bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
                style={{
                  animationDelay: delay,
                  ...(label === "5★ Rated" ? { top: "5%", right: "-5%" } : {}),
                  ...(label === "Certified" ? { bottom: "15%", left: "-8%" } : {}),
                  ...(label === "On Time" ? { bottom: "5%", right: "5%" } : {}),
                }}
              >
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <Icon size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{label}</div>
                  <div className="text-[10px] text-gray-500">{sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
