"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (dir: "prev" | "next") => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) =>
          dir === "next"
            ? (c + 1) % TESTIMONIALS.length
            : (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        );
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  useEffect(() => {
    const t = setInterval(() => go("next"), 5000);
    return () => clearInterval(t);
  }, [go]);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#dd4c2f] font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="section-title mt-2">What Our Clients Say</h2>
          <div className="accent-line mt-3 mx-auto" />
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">5.0 average from 50+ Google reviews</span>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div
            className={`testimonial-card relative transition-all duration-300 ${
              animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <Quote
              size={48}
              className="text-[#0b8441] opacity-10 absolute top-6 right-6"
            />
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b8441] to-[#076634] flex items-center justify-center text-white font-bold text-lg">
                {t.name[0]}
              </div>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
              <div className="ml-auto text-xs text-gray-400">{t.date}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go("prev")}
              className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[#0b8441] hover:text-[#0b8441] flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (!animating) setCurrent(i); }}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "w-6 h-2.5 bg-[#0b8441]"
                      : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go("next")}
              className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[#0b8441] hover:text-[#0b8441] flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Grid previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.slice(0, 3).map((test, i) => (
            <button
              key={i}
              onClick={() => { if (!animating) setCurrent(i); }}
              className={`testimonial-card text-left transition-all ${
                current === i ? "ring-2 ring-[#0b8441]" : ""
              }`}
            >
              <div className="flex mb-3">
                {Array.from({ length: test.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">&ldquo;{test.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#0b8441] flex items-center justify-center text-white text-xs font-bold">
                  {test.name[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{test.name}</div>
                  <div className="text-[10px] text-gray-400">{test.role}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
