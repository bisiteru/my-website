import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs, absolute } from "@/lib/seo";
import ServiceDetailPage, { type ServiceDetail } from "@/components/sections/ServiceDetailPage";

/** Post-construction — added alongside /services#post-construction. */
export const metadata: Metadata = pageSeo({
  path: "/services/post-construction",
  title: "Post-Construction Cleaning in Abuja",
  description:
    "Builders' clean and final handover clean for new builds and refits in Abuja and Lagos: debris clearance, paint and adhesive removal, glass polishing and floor scrubbing.",
  image: "/photos/post-construction-granite-floor-scrubbing.jpg",
  imageAlt: "An operator machine-scrubbing a granite floor in a newly built interior",
});

const DATA: ServiceDetail = {
  anchor: "post-construction",
  eyebrow: "Post-construction cleaning",
  title: "Post-construction cleaning",
  lede:
    "The clean between a finished build and a usable building. Cement dust, paint splatter, adhesive residue and protective film — removed without damaging the finishes you have just paid for.",
  heroPhoto: "post-construction-granite-floor-scrubbing",
  heroAlt: "An operator machine-scrubbing a granite floor in a newly built interior",
  intro: [
    "Construction dust is not ordinary dust. It is fine, abrasive and everywhere — in the window tracks, on top of the door frames, inside the sockets, settled through the air-conditioning. Cleaned the wrong way it scratches the very surfaces the build was for, which is why a general cleaning crew is the wrong crew for this job.",
    "We work in two stages where the programme allows: a rough clean once the trades are out and the debris can be cleared, then a final handover clean once snagging is finished. On a tight programme we do it in one, but the one-stage version always costs more in labour because the dust settles twice.",
    "Most of this work in Abuja comes to us from developers, facility managers and fit-out contractors handing over to a client with a date in the contract.",
  ],
  includes: [
    { title: "Debris and dust clearance", detail: "Offcuts, packaging and swept debris removed, then the fine dust taken off every horizontal surface including the ones above eye level." },
    { title: "Paint and adhesive removal", detail: "Splatter, overspray, tape residue and protective film taken off glass, tiles, sanitaryware and ironmongery." },
    { title: "Floor scrubbing", detail: "Machine-scrubbed where the floor takes it — granite, terrazzo, tile — to lift cement haze rather than smear it." },
    { title: "Glass and frames", detail: "Interior and accessible exterior glass polished, with the tracks, frames and beading cleaned out." },
    { title: "Sanitaryware and kitchens", detail: "Cement residue off basins, WCs, showers and worktops; cupboards wiped out ready for use." },
    { title: "Final handover inspection", detail: "A walk-through with the contractor or facility manager, snag list in hand, before the client ever sees it." },
  ],
  priceFactors: [
    { label: "Floor area, and how many levels", detail: "Area is the starting point, but stairs and multiple levels add handling time that a floor-area figure alone misses." },
    { label: "One stage or two", detail: "A rough clean followed by a final clean costs more in total than a single clean, but each one is faster and the result is better. We will tell you which the programme allows." },
    { label: "How much residue is left", detail: "The biggest variable by far. Overspray on glass and adhesive on tile are hand work, and there is no fast way to do them without damage." },
    { label: "Floor and surface types", detail: "A polished granite floor and a textured tile need different machines, pads and chemistry. Delicate finishes mean hand work." },
    { label: "Programme and access", detail: "Night or weekend work, a tight handover date, a single service lift or no lift at all — each changes the crew size we need to hold the date." },
  ],
  process: [
    { n: "01", title: "Site visit", detail: "We walk the building with you, see what the trades have left, and agree whether it is one stage or two." },
    { n: "02", title: "Scope, programme and quote", detail: "In writing: areas, stages, crew size, dates and cost, with the handover date you are working to stated on it." },
    { n: "03", title: "The clean", detail: "Our own machines, consumables and PPE. We work around remaining trades where we have to, and say so if that is costing you quality." },
    { n: "04", title: "Handover walk-through", detail: "With the contractor or facility manager, against the snag list. Anything flagged is put right before we leave site." },
  ],
  faqs: [
    {
      question: "When should we book you in?",
      answer:
        "As early as you can give us a date, and ideally before the last trades are finished so we can plan the stages around your programme. The clean is always the item compressed when a build runs late, and it is the item the client sees first.",
    },
    {
      question: "Can you work while other trades are still on site?",
      answer:
        "Yes, and often we have to. We will be straight with you about the cost of it: anything cleaned before the trades above it are finished will need cleaning again, so we would rather sequence it than bill you twice.",
    },
    {
      question: "Do you remove construction waste?",
      answer:
        "We clear debris and packaging from the areas we clean and bag it. Skip hire and the disposal of bulk construction waste are the contractor's, unless it is agreed in the scope beforehand.",
    },
    {
      question: "Will you damage the new finishes?",
      answer:
        "That is the main risk in this work, which is why the method is agreed before we start. Machines and pads are matched to the floor, delicate finishes are done by hand, and anything we are unsure about we test in a corner and show you before going further.",
    },
    {
      question: "Do you do the windows outside as well?",
      answer:
        "Interior glass and accessible exterior glass, yes. Anything needing rope access or a powered platform is outside what we do; we will say so at the site visit rather than at handover.",
    },
    {
      question: "Can you work nights or weekends to hold a handover date?",
      answer:
        "Yes. Tell us the date at the enquiry stage and we will quote the crew needed to hold it, rather than quoting a normal crew and missing it.",
    },
  ],
  gallery: [
    { photo: "post-construction-before-debris", alt: "A newly built interior strewn with construction debris before cleaning" },
    { photo: "post-construction-paint-removal", alt: "A team member removing paint residue from a surface in a new build" },
    { photo: "new-build-kitchen-cabinet-cleaning", alt: "Kitchen cabinets being cleaned out in a newly built property" },
  ],
  related: [
    { href: "/services", label: "All services", detail: "Eleven services across cleaning, pest control and training" },
    { href: "/services/deep-cleaning", label: "Deep cleaning", detail: "For spaces already in use" },
    { href: "/services/commercial-cleaning", label: "Commercial cleaning", detail: "Once the building is occupied" },
    { href: "/clients", label: "Who we work with", detail: "Developers, facility managers and fit-out contractors" },
  ],
  enquiry: {
    title: "Give us the handover date.",
    lede:
      "Tell us the building, the floor area and the date you have to hand over. We will walk the site and come back with the stages, the crew and the cost in writing.",
    action: { href: "/contact?service=post-construction", label: "Request a site visit" },
    points: [
      "Site visit before quoting — this is not a job anyone can price from a floor plan.",
      "Stages planned around your programme, so nothing is cleaned twice at your expense.",
      "Handover walk-through against the snag list before we leave site.",
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
            { name: "Post-construction cleaning", path: "/services/post-construction" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${absolute("/services/post-construction")}#faq`,
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
