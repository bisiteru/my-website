"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, motion, animate } from "framer-motion";
import { STATS } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Parse numeric part and suffix from value like "500+", "1,200+", "5★", "3+"
  const numericMatch = value.replace(/,/g, "").match(/^(\d+(\.\d+)?)(.*)/);
  const numericTarget = numericMatch ? parseFloat(numericMatch[1]) : null;
  const suffix = numericMatch ? numericMatch[3] : "";
  const hasComma = value.includes(",");

  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => {
    if (numericTarget === null) return value;
    const rounded = Math.round(latest);
    if (hasComma && rounded >= 1000) {
      return rounded.toLocaleString() + suffix;
    }
    return rounded.toString() + suffix;
  });

  useEffect(() => {
    if (isInView && numericTarget !== null) {
      const controls = animate(count, numericTarget, {
        duration: 1.8,
        ease: ease,
        delay: index * 0.1,
      });
      return controls.stop;
    }
  }, [isInView, numericTarget, count, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: ease, delay: index * 0.1 }}
      className="text-center group"
    >
      <div
        className="text-4xl sm:text-5xl font-black gradient-text mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {numericTarget !== null ? <motion.span>{displayValue}</motion.span> : value}
      </div>
      <div className="text-gray-500 text-sm font-medium tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x-0 md:divide-x divide-gray-100">
          {STATS.map((stat, i) => (
            <AnimatedStat key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
