"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Mail, Phone } from "lucide-react";
import { COMPANY, LOCATIONS } from "@/lib/constants";

const serviceOptions = ["Managed workplace cleaning", "Residential cleaning", "Cleaner training", "Pest control", "Other enquiry"];
type ContactContentProps = { initialCity: "" | "Lagos" | "Abuja"; initialService: string };

export default function ContactContent({ initialCity, initialService }: ContactContentProps) {
  const [form, setForm] = useState({
    name: "", organisation: "", email: "", phone: "", city: initialCity,
    area: "", service: initialService, message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mzdyqpka", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "New Dust & Wipes website enquiry" }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = "mt-2 block min-h-12 w-full rounded-md border border-[#b9cbbd] bg-white px-4 py-3 text-[#173627] placeholder:text-[#728477]";

  return (
    <>
      <section className="bg-[#f4f3ee] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="section-eyebrow">Contact Dust &amp; Wipes</p>
          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[1.07] text-[#173627]">Let us understand your space.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#486052]">Tell us about your cleaning or training needs. Our team will contact you to discuss scope and next steps.</p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#173627]">Speak with our team</h2>
            <div className="mt-7 space-y-5 border-t border-[#dce5dc] pt-7">
              <a href={`tel:${COMPANY.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 font-semibold text-[#0b8441] hover:underline"><Phone size={19} aria-hidden="true" />{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 font-semibold text-[#0b8441] hover:underline"><Mail size={19} aria-hidden="true" />{COMPANY.email}</a>
            </div>
            <div className="mt-12 space-y-7">
              <div><h3 className="font-semibold text-[#173627]">Lagos office</h3><p className="mt-1 leading-7 text-[#53645a]">{LOCATIONS.lagos.address}</p><Link href="/lagos" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#0b8441] hover:underline">Lagos details <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
              <div><h3 className="font-semibold text-[#173627]">Abuja office</h3><p className="mt-1 leading-7 text-[#53645a]">{LOCATIONS.abuja.address}</p><Link href="/abuja" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#0b8441] hover:underline">Abuja details <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
            </div>
          </div>
          <div className="border border-[#dce5dc] bg-[#fbfcfa] p-6 sm:p-10">
            {status === "success" ? (
              <div role="status" className="flex min-h-96 flex-col justify-center">
                <CheckCircle size={37} className="text-[#0b8441]" aria-hidden="true" />
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#173627]">Enquiry sent.</h2>
                <p className="mt-3 leading-7 text-[#53645a]">Thank you. Our team will review your details and contact you.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-7 self-start font-semibold text-[#0b8441] underline underline-offset-4">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><p className="section-eyebrow">Enquiry form</p><h2 className="mt-3 text-2xl font-semibold text-[#173627]">Tell us what you need</h2></div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-[#173627]">Full name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={fieldClass} /></label>
                  <label className="block text-sm font-semibold text-[#173627]">Organisation <span className="font-normal text-[#66796a]">(if applicable)</span><input name="organisation" autoComplete="organization" value={form.organisation} onChange={(event) => setForm({ ...form, organisation: event.target.value })} className={fieldClass} /></label>
                  <label className="block text-sm font-semibold text-[#173627]">Email <span aria-hidden="true">*</span><input type="email" name="email" autoComplete="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={fieldClass} /></label>
                  <label className="block text-sm font-semibold text-[#173627]">Phone <span aria-hidden="true">*</span><input type="tel" name="phone" autoComplete="tel" required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={fieldClass} /></label>
                  <label className="block text-sm font-semibold text-[#173627]">City <span aria-hidden="true">*</span><select name="city" required value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value as "" | "Lagos" | "Abuja" })} className={fieldClass}><option value="">Select city</option><option value="Lagos">Lagos</option><option value="Abuja">Abuja</option></select></label>
                  <label className="block text-sm font-semibold text-[#173627]">Area or neighbourhood <span aria-hidden="true">*</span><input name="area" required value={form.area} onChange={(event) => setForm({ ...form, area: event.target.value })} placeholder="Where is your site?" className={fieldClass} /></label>
                </div>
                <label className="block text-sm font-semibold text-[#173627]">Service <span aria-hidden="true">*</span><select name="service" required value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })} className={fieldClass}><option value="">Select service</option>{serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
                <label className="block text-sm font-semibold text-[#173627]">What should we know?<textarea name="message" required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Describe your site, team or training priorities." className={fieldClass} /></label>
                <p className="text-sm leading-6 text-[#53645a]">We will use your details to respond to this enquiry. See our <Link href="/privacy" className="font-semibold text-[#0b8441] underline underline-offset-4">privacy policy</Link>.</p>
                <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#0b8441] px-6 py-3 font-semibold text-white hover:bg-[#076634] active:scale-[0.98] disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Sending…" : "Send enquiry"}{status !== "sending" && <ArrowUpRight size={18} aria-hidden="true" />}</button>
                {status === "error" && <p role="alert" className="border-l-4 border-[#dd4c2f] bg-[#fff5f2] p-4 text-sm text-[#853b2a]">Enquiry could not be sent. Please email {COMPANY.email} or call {COMPANY.phone}.</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
