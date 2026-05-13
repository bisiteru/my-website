"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const message = encodeURIComponent(
    "Hello! I'd like to get a quote for your cleaning/pest control services."
  );
  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white shadow-xl rounded-2xl p-4 max-w-[200px] border border-green-100 animate-fadeIn">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-gray-800">Chat with us!</span>
            <button onClick={() => setShowTooltip(false)} className="text-gray-400 hover:text-gray-600">
              <X size={12} />
            </button>
          </div>
          <p className="text-xs text-gray-500">We typically reply within minutes on WhatsApp.</p>
        </div>
      )}

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="animate-pulse-wa w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}
