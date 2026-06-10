import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Dust & Wipes Limited's full range of cleaning and pest control services in Abuja — residential cleaning, office cleaning, deep cleaning, carpet cleaning, termite control, rodent control, bed bug treatment, training and more.",
  keywords: [
    "cleaning services Abuja",
    "deep cleaning Abuja",
    "office cleaning Abuja FCT",
    "pest control Abuja",
    "carpet cleaning Abuja",
    "post-construction cleaning Abuja",
    "upholstery cleaning Abuja",
    "fumigation Abuja",
    "termite control Abuja",
  ],
};

export default function ServicesPage() {
  const cleaningServices = SERVICES.filter((s) => s.category === "cleaning");
  const pestServices = SERVICES.filter((s) => s.category === "pest-control");
  const trainingServices = SERVICES.filter((s) => s.category === "training");

  const waMessage = encodeURIComponent("Hello! I'd like to book a service with Dust & Wipes Limited.");
  const waUrl = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${waMessage}`;

  const ServiceCard = ({
    service,
    accentColor,
  }: {
    service: (typeof SERVICES)[0];
    accentColor: string;
  }) => (
    <div
      id={service.id}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-sm"
    >
      <div className="h-2" style={{ background: accentColor }} />
      <div className="p-6">
        <div
          className="h-32 -mx-6 -mt-6 mb-5 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85 w-full justify-center"
          style={{ background: accentColor }}
        >
          <MessageCircle size={15} />
          Book This Service
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive cleaning and pest control solutions for homes, offices, and commercial
            facilities across Abuja FCT.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Cleaning Services */}
      <section id="cleaning" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-[#0b8441] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🧹 Cleaning Services
            </div>
            <h2 className="section-title">Professional Cleaning Solutions</h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              From routine home cleans to post-construction deep cleans, our expert team delivers
              consistent, thorough results every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleaningServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accentColor="#0b8441"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pest Control */}
      <section id="pest-control" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#dd4c2f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🐛 Pest Control Services
            </div>
            <h2 className="section-title">Effective Pest Control Solutions</h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              Certified pest control technicians using approved, low-toxicity treatments to
              eliminate infestations and prevent re-entry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pestServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accentColor="#dd4c2f"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Training & Consultancy */}
      <section id="training-consultancy" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎓 Training &amp; Consultancy
            </div>
            <h2 className="section-title">Professional Development &amp; Consulting</h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              We share our operational expertise with organizations that want to raise their cleaning
              standards, train staff, or improve facility management practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accentColor="#7c3aed"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0b8441] font-semibold text-sm uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="section-title mt-2">Simple, Hassle-Free Booking</h2>
            <div className="accent-line mt-3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Reach us via our website form, WhatsApp, or phone call." },
              { step: "02", title: "Get a Quote", desc: "We assess your needs and provide a transparent, no-obligation quote." },
              { step: "03", title: "We Show Up", desc: "Our uniformed team arrives on time, fully equipped, and ready to work." },
              { step: "04", title: "Enjoy the Results", desc: "Inspect the job. If you're not 100% satisfied, we'll fix it free of charge." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-[#0b8441] text-white text-2xl font-black flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
