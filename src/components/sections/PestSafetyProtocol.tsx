import { ClipboardCheck, FlaskConical, ShieldCheck, DoorOpen, FileCheck } from "lucide-react";

/**
 * Pest control safety protocol — §3.2 honesty.
 *
 * The site previously claimed PEST treatments were "safe for children and
 * pets". They are not: pest control chemicals are hazardous by design. This
 * section replaces that claim with what actually protects people — the
 * procedure around the chemical.
 *
 * The distinction matters and is drawn explicitly in the opening copy: the
 * everyday CLEANING products are biodegradable and safe around children and
 * pets (confirmed by the company); only the pest chemicals are hazardous.
 * Do not flatten the two back together.
 *
 * The specifics below (assessment, label compliance, PPE, re-entry
 * instructions, licensing) were reviewed and approved by Dust & Wipes.
 */

const STEPS = [
  {
    Icon: ClipboardCheck,
    title: "1. Site assessment before anything is mixed",
    body: "We inspect the property first and identify the pest, the extent of the infestation, and the conditions feeding it. We note who uses the space — children, elderly residents, pregnant women, pets, patients, food handlers — along with aquariums, air intakes, open food stores and anything else that changes how we treat. The treatment plan follows the assessment; we do not arrive with a fixed answer.",
  },
  {
    Icon: FlaskConical,
    title: "2. Products applied strictly to their label",
    body: "Every product we use carries a legally binding label: approved uses, dilution rate, application method, maximum dose and the hazards involved. We follow it exactly. Dilution is measured, never estimated — under-dosing breeds resistance and over-dosing endangers people without killing more pests. Concentrates stay in their original labelled containers, transported and stored separately from any cleaning equipment.",
  },
  {
    Icon: ShieldCheck,
    title: "3. Full PPE for the technician",
    body: "Our technicians wear coveralls, chemical-resistant gloves, eye protection and respiratory protection appropriate to the product and the space being treated. PPE is checked before each job and replaced when damaged. This is also the clearest signal to a client of what they are dealing with: if the person applying it needs a respirator, the room is not safe to occupy during treatment.",
  },
  {
    Icon: DoorOpen,
    title: "4. Vacating and re-entry instructions, in writing",
    body: "Before we start, we tell you who must leave, what to cover or remove — food, utensils, toothbrushes, pet bowls and bedding, fish tanks and their pumps — and exactly when it is safe to return. The re-entry interval is set by the product label and the ventilation available, and we state it as a time, not a vague 'later'. We ventilate the space and confirm it is clear before handing the property back.",
  },
  {
    Icon: FileCheck,
    title: "5. Licensing, records and follow-up",
    body: "We are licensed by EHCON (Environmental Health Council of Nigeria) and PECAN (Pest Control Association of Nigeria), and hold an Operational Permit from the Abuja Municipal Area Council, which allows us to issue AMAC certification for pest services within the municipality. We record what was applied, where and at what rate, and we return for a follow-up inspection to confirm the treatment worked.",
  },
];

export default function PestSafetyProtocol() {
  return (
    <section id="pest-safety-protocol" className="section scroll-mt-28">
      <div className="container-dw">
        <div className="max-w-[46rem]">
          <p className="eyebrow">Pest control safety protocol</p>
          <h2 className="h2-section mt-4">
            The products that kill pests are not harmless to people.
          </h2>
          <p className="lede mt-5">
            Our everyday cleaning products are biodegradable and safe around children and pets.
            Pest control is different. Plenty of companies advertise treatments as &ldquo;safe
            for children and pets&rdquo; — we will not, because it is not true of any product
            effective enough to clear an infestation. What makes pest control safe is the
            procedure around the chemical, so here is ours, in full.
          </p>
        </div>

        <ol className="mt-12 space-y-4">
          {STEPS.map(({ Icon, title, body }) => (
            <li key={title} className="card flex gap-5 p-6 sm:p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--c-green-50)] text-[var(--c-green-700)]">
                <Icon size={21} aria-hidden="true" />
              </span>
              <div>
                <h3 className="h3-card !text-[1.0625rem]">{title}</h3>
                <p className="mt-2 text-[0.9375rem] text-[var(--c-ink-2)]">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[46rem] text-[0.9375rem] text-[var(--c-ink-2)]">
          If any of this is unclear before a treatment, ask us — the instructions are part of the
          job, not an afterthought. They also form part of our{" "}
          <a href="/terms" className="underline hover:text-[var(--c-green-700)]">
            terms of service
          </a>
          .
        </p>
      </div>
    </section>
  );
}
