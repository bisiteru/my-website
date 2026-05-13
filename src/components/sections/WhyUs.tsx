"use client";

import { useRef, useState, useEffect } from "react";
import { Shield, Clock, Leaf, Users, Star, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured & Certified",
    desc: "All our pest control technicians are licensed and our services are covered by comprehensive insurance for your peace of mind.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Clock,
    title: "Punctual Every Time",
    desc: "We respect your time. Our teams arrive within the agreed window and complete jobs efficiently without cutting corners.",
    color: "bg-green-50 text-[#0b8441]",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use biodegradable, non-toxic cleaning agents and certified pesticides that are safe for your family, pets, and the environment.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Vetted, Trained Staff",
    desc: "Every team member is background-checked, uniformed, and trained to the highest professional standards before they enter your space.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Star,
    title: "Satisfaction Guarantee",
    desc: "Not happy? We'll come back and make it right at no extra cost. Your satisfaction is non-negotiable — that's our promise.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Headphones,
    title: "Responsive Customer Support",
    desc: "Reach us via WhatsApp, call, or email. We respond within 2 hours and are available 7 days a week for your convenience.",
    color: "bg-orange-50 text-[#dd4c2f]",
  },
];

function Card({ icon: Icon, title, desc, color, delay }: typeof reasons[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-gray-100 card-hover transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon size={22} />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="section-title mt-2">The Dust & Wipes Difference</h2>
          <div className="accent-line mt-3 mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            We don&apos;t just clean — we deliver a consistently excellent experience from booking to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Card key={r.title} {...r} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
