"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
          <h2 className="section-title mt-2">
            The Dust &amp; Wipes <span style={{ color: "#0b8441" }}>Difference</span>
          </h2>
          <div className="accent-line mt-3 mx-auto" />
          <p className="text-gray-500 mt-5 max-w-md mx-auto text-base leading-relaxed">
            We know you&apos;ve dealt with inconsistent quality and unreliable cleaners. Here&apos;s why we&apos;re different.
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
          {WHY_US.map((item) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm cursor-default group relative overflow-hidden"
            >
              {/* Large number watermark */}
              <div
                className="absolute -top-3 -right-2 font-black leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "5rem",
                  color: "#0b8441",
                  opacity: 0.05,
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>

              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#f0faf4] text-[#0b8441] font-black text-sm mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                {item.number}
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-2.5 leading-snug">{item.title}</h3>
              <p className="text-[0.875rem] text-gray-500 leading-relaxed">{item.description}</p>

              {/* Bottom accent line */}
              <div className="mt-5 h-0.5 w-0 group-hover:w-10 rounded-full transition-all duration-300 bg-[#0b8441]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
