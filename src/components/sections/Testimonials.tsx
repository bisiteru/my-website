"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: "prev" | "next") => {
      setDirection(dir === "next" ? 1 : -1);
      setCurrent((c) =>
        dir === "next"
          ? (c + 1) % TESTIMONIALS.length
          : (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
      );
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go("next"), 5500);
    return () => clearInterval(t);
  }, [go, paused]);

  const t = TESTIMONIALS[current];

  const variants = {
    enter: (d: number) => ({ x: d * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -40, opacity: 0 }),
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: ease }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title mt-2">What Our Clients Say</h2>
          <div className="accent-line mt-3 mx-auto" />
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">5.0 average · 50+ Google reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Main carousel - 3/5 */}
          <div className="lg:col-span-3">
            <div
              className="relative overflow-hidden rounded-3xl bg-[#f8f9f6] p-8 sm:p-10 min-h-[280px] flex flex-col justify-between"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Large quote mark */}
              <div
                className="absolute top-6 right-8 font-black leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "8rem",
                  color: "#0b8441",
                  opacity: 0.07,
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={17} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: ease }}
                  className="text-gray-700 text-lg leading-relaxed italic flex-1 mb-8"
                >
                  &ldquo;{t.text}&rdquo;
                </motion.blockquote>
              </AnimatePresence>

              {/* Author */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`author-${current}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: ease }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0b8441] to-[#076634] flex items-center justify-center text-white font-bold text-base shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                  {/* Google G logo */}
                  <div className="ml-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => go("prev")}
                  className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#0b8441] hover:text-[#0b8441] flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                      className={`rounded-full transition-all duration-300 ${
                        i === current ? "w-6 h-2 bg-[#0b8441]" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go("next")}
                  className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#0b8441] hover:text-[#0b8441] flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Preview stack - 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            {TESTIMONIALS.slice(0, 4).map((test, i) => (
              <motion.button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: ease, delay: i * 0.07 }}
                className={`testimonial-card text-left w-full transition-all duration-200 ${
                  current === i
                    ? "border-[#0b8441] shadow-md"
                    : "hover:border-gray-200"
                }`}
                style={{ padding: "1rem 1.25rem" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#0b8441] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {test.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900 truncate">{test.name}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5 shrink-0">
                    {[1,2,3,4,5].map((j) => (
                      <Star key={j} size={10} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{test.text}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
