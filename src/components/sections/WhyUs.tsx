"use client";

import { Shield, Clock, Leaf, Users, Star, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const reasons = [
  {
    icon: Shield,
    title: "Fully Insured & Certified",
    desc: "All our pest control technicians are licensed and our services are covered by comprehensive insurance for your peace of mind.",
    accent: "#0b8441",
    bg: "#f0faf4",
  },
  {
    icon: Clock,
    title: "Punctual Every Time",
    desc: "We respect your time. Our teams arrive within the agreed window and complete jobs efficiently without cutting corners.",
    accent: "#0b8441",
    bg: "#f0faf4",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use biodegradable, non-toxic cleaning agents and certified pesticides that are safe for your family, pets, and the environment.",
    accent: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: Users,
    title: "Vetted, Trained Staff",
    desc: "Every team member is background-checked, uniformed, and trained to the highest professional standards before they enter your space.",
    accent: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: Star,
    title: "Satisfaction Guarantee",
    desc: "Not happy? We'll come back and make it right at no extra cost. Your satisfaction is non-negotiable — that's our promise.",
    accent: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    desc: "Reach us via WhatsApp, call, or email. We respond within 2 hours and are available 7 days a week for your convenience.",
    accent: "#dd4c2f",
    bg: "#fff7f5",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: ease } },
};

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#f8f9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: ease }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title mt-2">The Dust & Wipes Difference</h2>
          <div className="accent-line mt-3 mx-auto" />
          <p className="text-gray-500 mt-5 max-w-md mx-auto text-base leading-relaxed">
            We don&apos;t just clean — we deliver a consistently excellent experience from booking to completion.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm cursor-default group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: r.bg }}
              >
                <r.icon size={21} style={{ color: r.accent }} />
              </div>

              {/* Number accent */}
              <h3 className="font-bold text-gray-900 text-base mb-2.5 leading-snug">{r.title}</h3>
              <p className="text-[0.875rem] text-gray-500 leading-relaxed">{r.desc}</p>

              {/* Bottom accent line */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-10 rounded-full transition-all duration-300"
                style={{ background: r.accent }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
