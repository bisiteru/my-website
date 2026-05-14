"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, motion, animate } from "framer-motion";
import { STATS } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AnimatedStat({
  value, suffix, label, isStatic, index,
}: { value: number; suffix: string; label: string; isStatic?: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => {
    if (isStatic) return value.toFixed(1) + suffix;
    const rounded = Math.round(latest);
    return (rounded >= 1000 ? rounded.toLocaleString() : rounded.toString()) + suffix;
  });

  useEffect(() => {
    if (isInView && !isStatic) {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: ease,
        delay: index * 0.1,
      });
      return controls.stop;
    }
  }, [isInView, value, isStatic, count, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: ease, delay: index * 0.1 }}
      className="text-center"
    >
      <div
        className="text-4xl sm:text-5xl font-black gradient-text mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {isStatic
          ? <span>{value.toFixed(1)}{suffix}</span>
          : <motion.span>{displayValue}</motion.span>
        }
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
