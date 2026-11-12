"use client";

import { useState } from "react";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { track } from "@/lib/analytics";

const SERVICES = [
  "Residential cleaning",
  "Commercial & office cleaning",
  "Deep cleaning",
  "Post-construction cleaning",
  "Carpet & upholstery cleaning",
  "Pest control & fumigation",
  "Disinfection & sanitisation",
  "Window & glass cleaning",
  "Event & exhibition cleaning",
  "Facility management support",
  "Training & consultancy",
  "Other",
];

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/mzdyqpka";

/** Quote form — §4.7, §6.10. Labelled fields, inline error, WhatsApp fallback. */
export default function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    city: "Abuja",
    area: "",
    service: defaultService,
    frequency: "one-off",
    message: "",
  });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    `Hello Dust & Wipes! I'd like a quote for: ${form.service || "your services"}.`
  )}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "New quote request from dustandwipes.com" }),
      });
      if (res.ok) {
        track("quote_form_submit", { service: form.service, city: form.city });
        setState("sent");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="card p-10 text-center">
        <CheckCircle size={44} className="mx-auto text-[var(--c-green-600)]" aria-hidden="true" />
        <h3 className="h3-card mt-5">Request received</h3>
        <p className="mt-3 text-[var(--c-ink-2)]">
          Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We&apos;ll come back to you
          within two hours during working hours.
        </p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { from: "quote_form_success" })}
          className="btn btn--secondary mt-7"
        >
          <MessageCircle size={16} aria-hidden="true" /> Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-7 sm:p-8" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required>
          <input required className="form-input" value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
        </Field>
        <Field label="Organisation" hint="Optional">
          <input className="form-input" value={form.organisation} onChange={(e) => set("organisation", e.target.value)} autoComplete="organization" />
        </Field>
        <Field label="Phone" required>
          <input required type="tel" className="form-input" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
        </Field>
        <Field label="Email" hint="Optional">
          <input type="email" className="form-input" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
        </Field>
        <Field label="City" required>
          <select required className="form-input" value={form.city} onChange={(e) => set("city", e.target.value)}>
            <option>Abuja</option>
            <option>Lagos</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Area / district" required>
          <input required className="form-input" value={form.area} onChange={(e) => set("area", e.target.value)} placeholder="e.g. Gwarinpa, Lekki" />
        </Field>
        <Field label="Service required" required>
          <select required className="form-input" value={form.service} onChange={(e) => set("service", e.target.value)}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="How often">
          <select className="form-input" value={form.frequency} onChange={(e) => set("frequency", e.target.value)}>
            <option value="one-off">One-off</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Anything else we should know" hint="Optional">
          <textarea
            rows={4}
            className="form-input resize-none"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Property size, number of rooms, preferred dates…"
          />
        </Field>
      </div>

      <button type="submit" disabled={state === "sending"} className="btn btn--primary mt-6 w-full disabled:opacity-70">
        {state === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={17} aria-hidden="true" /> Send request
          </>
        )}
      </button>

      {state === "error" && (
        <p role="alert" className="mt-4 text-center text-[0.875rem] font-medium text-[var(--c-orange-700)]">
          Something went wrong sending that. Please try again, or reach us on{" "}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="underline">WhatsApp</a>{" "}
          or {COMPANY.phone}.
        </p>
      )}

      <p className="mt-4 text-center text-[0.75rem] text-[var(--c-ink-2)]">
        We use your details only to respond to this enquiry. See our{" "}
        <a href="/privacy" className="underline hover:text-[var(--c-green-700)]">privacy policy</a>.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.875rem] font-medium text-[var(--c-green-800)]">
        {label}
        {required && <span className="text-[var(--c-orange-700)]" aria-hidden="true"> *</span>}
        {hint && <span className="ml-1.5 font-normal text-[var(--c-ink-2)]">({hint})</span>}
      </span>
      {children}
    </label>
  );
}
