"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease } },
};

const CATEGORY_META: Record<string, { label: string; accent: string; bg: string; text: string }> = {
  cleaning:     { label: "Cleaning",    accent: "#0b8441", bg: "#f0faf4", text: "#0b8441" },
  "pest-control": { label: "Pest Control", accent: "#dd4c2f", bg: "#fff7f5", text: "#dd4c2f" },
  training:     { label: "Training",    accent: "#7c3aed", bg: "#f5f3ff", text: "#7c3aed" },
};

interface Props {
  limit?: number;
}

export default function ServicesGrid({ limit }: Props) {
  const displayed = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      {displayed.map((service) => {
        const meta = CATEGORY_META[service.category] ?? CATEGORY_META.cleaning;

        return (
          <motion.div key={service.id} variants={cardVariants} className="flex">
            <Link
              href={service.href}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-lg transition-all duration-300 w-full overflow-hidden"
            >
              {/* Image */}
              <div
                className="h-48 bg-cover bg-center relative overflow-hidden shrink-0"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/20 transition-colors" />
                {/* Top accent bar on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: meta.accent }}
                />
                {/* Category badge */}
                <span
                  className="absolute top-4 left-4 text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.95)", color: meta.text }}
                >
                  {meta.label}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[1.0625rem] font-bold text-gray-900 mb-1.5 leading-snug group-hover:transition-colors"
                  style={{ transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = meta.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: meta.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Learn more */}
                <div className="flex items-center gap-1.5 text-sm font-semibold mt-auto" style={{ color: meta.accent }}>
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
