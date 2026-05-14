"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle, Send } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const services = [
  "Residential Cleaning",
  "Office / Commercial Cleaning",
  "Deep Cleaning",
  "Post-Construction Cleaning",
  "Carpet & Upholstery Cleaning",
  "General Pest Control",
  "Termite Control",
  "Rodent Control",
  "Mosquito Treatment",
  "Bed Bug Treatment",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
    frequency: "one-off",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const waMessage = encodeURIComponent(
    `Hello Dust & Wipes! I'd like to get a quote for: ${form.service || "your services"}.`
  );
  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${waMessage}`;

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Book a Service or Get a Quote
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Fill in the form and we&apos;ll get back to you within 2 hours with a transparent, no-obligation quote.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Prefer a quick chat? Reach us via WhatsApp for the fastest response.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#0b8441]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone</div>
                    <a href={`tel:${COMPANY.phone}`} className="block font-semibold text-gray-900 hover:text-[#0b8441] transition-colors">{COMPANY.phone}</a>
                    <a href={`tel:${COMPANY.phone2}`} className="block font-semibold text-gray-900 hover:text-[#0b8441] transition-colors">{COMPANY.phone2}</a>
                    <div className="text-xs text-gray-400 mt-0.5">Mon–Sat, 7am–6pm</div>
                  </div>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#25d366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-[#25d366] transition-colors">
                    <MessageCircle size={18} className="text-[#25d366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">WhatsApp</div>
                    <div className="font-semibold text-gray-900">{COMPANY.phone}</div>
                    <div className="text-xs text-gray-400">We reply within minutes</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#0b8441] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-[#0b8441] transition-colors">
                    <Mail size={18} className="text-[#0b8441] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="font-semibold text-gray-900">{COMPANY.email}</div>
                    <div className="text-xs text-gray-400">We respond within 2 hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#0b8441]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Location</div>
                    <div className="font-semibold text-gray-900">{COMPANY.address}</div>
                    <div className="text-xs text-gray-400">Serving all FCT districts</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#0b8441]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Hours</div>
                    <div className="text-sm text-gray-700">Mon–Fri: 7:00am – 6:00pm</div>
                    <div className="text-sm text-gray-700">Saturday: 8:00am – 4:00pm</div>
                    <div className="text-xs text-gray-400">Sunday: By appointment only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#0b8441] flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Received!</h3>
                  <p className="text-gray-600 mb-2">
                    Thank you, <strong>{form.name}</strong>! We&apos;ve received your enquiry and will get back to you within 2 hours.
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    For immediate assistance, WhatsApp us directly.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-all"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-[#dd4c2f]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Amaka Okafor"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-[#dd4c2f]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Service Required <span className="text-[#dd4c2f]">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Service Frequency
                      </label>
                      <select
                        name="frequency"
                        value={form.frequency}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="one-off">One-off</option>
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Location / Area in Abuja <span className="text-[#dd4c2f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Maitama, Wuse 2, Gwarinpa…"
                      className="form-input"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more — property size, number of rooms, specific concerns, preferred date/time…"
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0b8441] text-white py-4 rounded-full font-bold text-base hover:bg-[#076634] transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Quote Request
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting, you agree to be contacted by Dust & Wipes Limited regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
