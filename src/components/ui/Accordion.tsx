"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ accordion — §4.7, §6.9.
 * Questions render as real headings so the page has a proper outline
 * (the previous build used spans, leaving /faqs with a single H2).
 */
export default function Accordion({
  items,
  headingLevel = 3,
}: {
  items: { question: string; answer: string }[];
  headingLevel?: 2 | 3 | 4;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();
  const H = `h${headingLevel}` as "h2" | "h3" | "h4";

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const btnId = `${base}-btn-${i}`;
        return (
          <div key={item.question} className="card overflow-hidden">
            <H className="!m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[var(--c-green-50)]"
              >
                <span className="text-[1.0625rem] font-semibold text-[var(--c-green-800)]">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 text-[var(--c-green-600)] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </H>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="border-t border-[var(--c-border)] px-6 pb-6 pt-4 text-[var(--c-ink-2)] leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
