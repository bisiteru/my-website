"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const categories = [
  { id: "cleaning", label: "🧹 Cleaning", color: "green" },
  { id: "pest-control", label: "🐛 Pest Control", color: "orange" },
];

interface Props {
  limit?: number;
  showTabs?: boolean;
}

export default function ServicesGrid({ limit, showTabs = false }: Props) {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div>
      {showTabs && (
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 ${
                cat.color === "green"
                  ? "border-[#0b8441] bg-[#0b8441] text-white"
                  : "border-[#dd4c2f] bg-[#dd4c2f] text-white"
              }`}
            >
              {cat.label}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedServices.map((service) => (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            className="group bg-white rounded-2xl p-6 border border-gray-100 card-hover shadow-sm block"
          >
            {/* Category badge */}
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  service.category === "cleaning"
                    ? "bg-green-50 text-[#0b8441]"
                    : "bg-orange-50 text-[#dd4c2f]"
                }`}
              >
                {service.category === "cleaning" ? "🧹 Cleaning" : "🐛 Pest Control"}
              </span>
              <ArrowRight
                size={16}
                className="text-gray-300 group-hover:text-[#0b8441] group-hover:translate-x-1 transition-all"
              />
            </div>

            {/* Icon */}
            <div className="text-4xl mb-4">{service.icon}</div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0b8441] transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{service.shortDesc}</p>

            {/* Features */}
            <ul className="space-y-1.5">
              {service.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b8441] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Bottom accent */}
            <div
              className={`mt-5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                service.category === "cleaning" ? "bg-[#0b8441]" : "bg-[#dd4c2f]"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
