import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs, absolute } from "@/lib/seo";
import ServiceDetailPage, { type ServiceDetail } from "@/components/sections/ServiceDetailPage";

/**
 * Commercial cleaning — added alongside /services#commercial-cleaning, which
 * still resolves, as does its #office-cleaning alias.
 */
export const metadata: Metadata = pageSeo({
  path: "/services/commercial-cleaning",
  title: "Office & Commercial Cleaning, Abuja",
  description:
    "Daily and scheduled office cleaning in Abuja and Lagos on a fixed monthly scope, with a named supervisor, background-checked staff and a reporting routine you can audit.",
  image: "/photos/office-floor-scrubbing-machine.jpg",
  imageAlt: "An operator running a floor-scrubbing machine through an open-plan office",
});

const DATA: ServiceDetail = {
  anchor: "commercial-cleaning",
  eyebrow: "Commercial & office cleaning",
  title: "Commercial & office cleaning",
  lede:
    "Daily or scheduled cleaning for offices, clinics and commercial premises — a written scope, a fixed monthly cost, and a named supervisor who answers when the standard slips.",
  heroPhoto: "office-floor-scrubbing-machine",
  heroAlt: "An operator running a floor-scrubbing machine through an open-plan office",
  intro: [
    "Most commercial cleaning fails in the same way. It is excellent for a month, nobody is named as responsible, standards drift, and by month six you are managing cleaners you did not hire. The fix is not working harder; it is writing down what good looks like and putting somebody's name against it.",
    "So every contract starts with a scope of work: each area, each task, each frequency. Your staff know what to expect, our staff know what they are accountable for, and when something is missed there is a document to point at rather than an argument about what was agreed.",
    "We work in occupied buildings — before hours, after hours, or through the day where a reception or a clinic needs continuous cover. Embassies, clinics, asset managers and government complexes are a large part of this work, and several of them audit us.",
  ],
  includes: [
    { title: "A written scope of work", detail: "Every area, task and frequency agreed before we start, and reviewed with you as the building changes." },
    { title: "A named supervisor", detail: "One person accountable for the standard, who you can call by name, and who inspects rather than just attends." },
    { title: "Daily or scheduled cover", detail: "Before hours, after hours, or continuous day cover for receptions, clinics and client-facing floors." },
    { title: "Washroom and consumables", detail: "Servicing through the day where traffic needs it, with stock levels checked rather than reported empty by your staff." },
    { title: "Periodic deep work", detail: "Floor machine-scrubbing, carpet extraction and high-level dusting built into the schedule, not sold as an emergency." },
    { title: "Reporting you can check", detail: "Attendance, completed tasks and issues raised, in a form you can audit against the scope." },
  ],
  priceFactors: [
    { label: "Area, and how it is used", detail: "A 500 m² open-plan floor and a 500 m² clinic are not the same job. Traffic and use drive the labour, not floor area alone." },
    { label: "Frequency and hours", detail: "Daily, three times a week, or continuous day cover. Out-of-hours and weekend work carries a premium, as it does for your own staff." },
    { label: "Washrooms and kitchens", detail: "The two areas your people judge the whole contract on, and the two that carry the most labour per square metre." },
    { label: "Consumables", detail: "Whether we supply soap, tissue and liners or you do. Including them makes the monthly figure higher and your administration lighter." },
    { label: "Floor types and periodic work", detail: "Carpet, vinyl, granite and timber each need different periodic treatment, which we build into the schedule and the price rather than billing ad hoc." },
    { label: "Compliance requirements", detail: "Clinical zoning, colour-coded equipment, audit documentation or security clearance for staff all add cost — and are the reason some clients come to us." },
  ],
  process: [
    { n: "01", title: "Site assessment", detail: "We walk the premises in working hours, see the traffic and the problem areas, and talk to whoever currently manages the cleaning." },
    { n: "02", title: "Scope and proposal", detail: "A written scope of work and a fixed monthly figure, with the supervisor named and the reporting routine set out." },
    { n: "03", title: "Mobilisation", detail: "Staff vetted, inducted on your site and trained to your scope before the first shift, not during it." },
    { n: "04", title: "Run and review", detail: "Supervised daily, reported routinely, and reviewed with you — the scope changes as the building does." },
  ],
  faqs: [
    {
      question: "Can you work outside office hours?",
      answer:
        "Yes, and for most offices that is the arrangement: a team in before staff arrive or after they leave, with a day porter where a reception or a clinic needs continuous cover. Out-of-hours work carries a premium, which will be itemised in the proposal rather than buried in it.",
    },
    {
      question: "Who supervises the cleaners?",
      answer:
        "A named supervisor on every contract, whose job is to inspect against the scope rather than simply to attend. You get their name and their number. If the standard slips, you call them, not a general line.",
    },
    {
      question: "Are your staff vetted?",
      answer:
        "Every team member is background-checked, uniformed and trained to a written standard before they set foot on a client site. Where a client requires additional clearance — which embassies and government premises often do — we work to their process.",
    },
    {
      question: "What happens when a cleaner is absent?",
      answer:
        "Cover is our problem, not yours. That is a large part of what a contract buys over employing cleaners directly: absence, holiday and turnover are absorbed by us, and the scope still has to be delivered.",
    },
    {
      question: "Do you handle clinical or food premises?",
      answer:
        "Yes. Clinical and general zones are kept separate with colour-coded equipment that never crosses between them, and the cleaning is sequenced so that it does not undo itself. Tell us at the assessment which standard or audit you are held to and we will scope against that document.",
    },
    {
      question: "Can we start with a trial?",
      answer:
        "We would rather start with a written scope and a review date than an informal trial. A trial with no agreed standard tends to end in a disagreement about what was promised, which helps neither of us.",
    },
    {
      question: "Do you supply equipment and consumables?",
      answer:
        "Our own equipment on every contract. Consumables — soap, tissue, liners — can be included or left with you; we will price both so you can see the difference rather than guess at it.",
    },
  ],
  gallery: [
    { photo: "office-corridor-mopping", alt: "A cleaner mopping an office corridor" },
    { photo: "boardroom-tv-unit-dusting", alt: "A team member dusting a boardroom media unit" },
    { photo: "office-lobby-mopping-equipment", alt: "A cleaner mopping an office lobby beside cleaning equipment" },
  ],
  related: [
    { href: "/services", label: "All services", detail: "Eleven services across cleaning, pest control and training" },
    { href: "/lagos", label: "Janitorial retainers in Lagos", detail: "The same contract, in Lagos" },
    { href: "/training", label: "Cleaner training", detail: "If you would rather keep your own team" },
    { href: "/clients", label: "Who we work with", detail: "Embassies, clinics, asset managers and government" },
  ],
  enquiry: {
    title: "Start with a site assessment.",
    lede:
      "Tell us the premises, the hours it needs covered and whether you employ cleaners already. We will walk the building and come back with a scope, a monthly figure and the supervisor who would run it.",
    action: { href: "/contact?service=commercial-cleaning", label: "Request a proposal" },
    points: [
      "A written scope of work — every area, task and frequency — before anything is agreed.",
      "A fixed monthly figure, so the cost is predictable and budgetable.",
      "A named supervisor, vetted staff, and reporting you can audit against the scope.",
    ],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Commercial cleaning", path: "/services/commercial-cleaning" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${absolute("/services/commercial-cleaning")}#faq`,
            mainEntity: DATA.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ]}
      />
      <ServiceDetailPage data={DATA} />
    </>
  );
}
