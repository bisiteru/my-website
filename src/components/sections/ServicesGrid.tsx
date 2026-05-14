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

interface Props {
  limit?: number;
  showTabs?: boolean;
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
        const isCleaning = service.category === "cleaning";
        const accentColor = isCleaning ? "#0b8441" : "#dd4c2f";
        const badgeBg = isCleaning ? "#f0faf4" : "#fff7f5";
        const badgeText = isCleaning ? "#0b8441" : "#dd4c2f";

        return (
          <motion.div key={service.id} variants={cardVariants}>
            <Link
              href={`/services#${service.id}`}
              className="group block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-gray-200 hover:shadow-md transition-all duration-300 h-full relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                style={{ background: accentColor }}
              />

              {/* Category badge */}
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full mb-5"
                style={{ background: badgeBg, color: badgeText }}
              >
                {service.icon}
                {isCleaning ? "Cleaning" : "Pest Control"}
              </span>

              {/* Content */}
              <h3 className="text-[1.0625rem] font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-[--accent] transition-colors"
                style={{ "--accent": accentColor } as React.CSSProperties}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 font-medium">{service.shortDesc}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-6">
                {service.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-500">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: accentColor }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Learn more */}
              <div
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: accentColor }}
              >
                Learn more
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
