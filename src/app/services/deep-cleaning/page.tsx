import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs, absolute } from "@/lib/seo";
import ServiceDetailPage, { type ServiceDetail } from "@/components/sections/ServiceDetailPage";

/**
 * Deep cleaning — added alongside /services#deep-cleaning, which still
 * resolves and still carries the summary card (section 3.1).
 */
export const metadata: Metadata = pageSeo({
  path: "/services/deep-cleaning",
  title: "Deep Cleaning in Abuja & Lagos",
  description:
    "Room-by-room deep cleaning for homes and offices in Abuja and Lagos: inside appliances, grout, cupboards, blinds and skirting. Quoted after a walk-through.",
  image: "/photos/pantry-bar-stool-detail-cleaning.jpg",
  imageAlt: "A team member detail-cleaning the base of a bar stool in a pantry",
});

const DATA: ServiceDetail = {
  anchor: "deep-cleaning",
  eyebrow: "Deep cleaning",
  title: "Deep cleaning",
  lede:
    "The clean that reaches what a weekly visit never does — inside the appliances, along the grout, behind the furniture and on top of everything you cannot see from standing height.",
  heroPhoto: "pantry-bar-stool-detail-cleaning",
  heroAlt: "A team member detail-cleaning the base of a bar stool in a pantry",
  intro: [
    "A deep clean is not a longer version of a routine clean. It is a different job: the team works room by room to a written checklist, and the areas that a weekly visit skips by necessity — inside the oven, under the beds, the tops of wardrobes, the grout lines, the window tracks — are the whole point of it.",
    "Most clients book one before moving in, after a renovation, ahead of hosting, at the end of a tenancy, or simply once or twice a year to reset a space that a regular clean is quietly losing ground on.",
    "It is usually a full day for an apartment and longer for a house, with a team rather than one cleaner. We will tell you which at the walk-through rather than discovering it on the day.",
  ],
  includes: [
    { title: "Inside the appliances", detail: "Oven, fridge, microwave and extractor, degreased and wiped out rather than wiped over." },
    { title: "Grout and tiling", detail: "Scrubbed along the lines in kitchens and bathrooms, where the discolouration actually lives." },
    { title: "Inside cupboards and wardrobes", detail: "Emptied where you have cleared them, wiped out, and left to air before anything goes back." },
    { title: "Blinds, skirting and vents", detail: "The horizontal surfaces that collect dust unnoticed, including the tops of doors and frames." },
    { title: "Behind and under furniture", detail: "Moved where it is safe to move it, cleaned behind, and put back where it was." },
    { title: "Windows, tracks and sills", detail: "Interior glass, the frames, and the tracks that a vacuum alone never clears." },
  ],
  priceFactors: [
    { label: "Size, and how many rooms", detail: "Floor area matters less than room count: six small rooms take longer than three large ones, because the work is in the corners and the fittings." },
    { label: "How long since the last deep clean", detail: "A space cleaned every six months is a different job from one that has never had it done. Built-up grease and limescale are the single biggest variable." },
    { label: "Whether the space is occupied", detail: "An empty property is faster. Working around furniture, belongings and people adds time, and it is time we would rather quote for than rush." },
    { label: "Kitchens and bathrooms", detail: "These two rooms carry most of the labour. A property with three bathrooms is not the same job as one with one." },
    { label: "Access and water", detail: "Lifts, parking, floor level and whether there is a reliable water supply on site all affect how long the team is there." },
  ],
  process: [
    { n: "01", title: "Walk-through", detail: "We see the space, agree the room list and flag anything that needs specialist attention. For a single apartment this can be done over photographs." },
    { n: "02", title: "Written scope and quote", detail: "Room by room, with what is included in each. You approve it before anything is scheduled." },
    { n: "03", title: "The clean", detail: "A team, with a checklist, working to the agreed room list. We bring our own equipment and consumables." },
    { n: "04", title: "Walk-through with you", detail: "We go round with you at the end. Anything not right is put right there and then, not after a complaint." },
  ],
  faqs: [
    {
      question: "How long does a deep clean take?",
      answer:
        "An apartment is usually a full day with a small team; a house commonly runs longer, and occasionally over two days. We give you the figure after the walk-through rather than before it, because the honest answer depends on how long it has been since the last one.",
    },
    {
      question: "Do I need to be there?",
      answer:
        "Not for the whole job, but we recommend being present at the start and the end — at the start so we can agree what is in scope, and at the end for the walk-through. Many clients hand over access and come back for the second part.",
    },
    {
      question: "Do I need to clear cupboards first?",
      answer:
        "Only the ones you want cleaned inside. Tell us at the walk-through which those are and we will plan the time for it. We do not empty cupboards of personal belongings ourselves.",
    },
    {
      question: "Will you move furniture?",
      answer:
        "Where it is safe for the team and safe for the furniture, yes, and we put it back where it was. We will not move anything heavy enough to risk damaging the piece, the floor or someone's back — we will tell you at the walk-through if something falls into that category.",
    },
    {
      question: "Is this the same as end-of-tenancy cleaning?",
      answer:
        "It is the same work, usually in an empty property, which makes it faster. If a landlord or agent has given you a checklist, send it to us with your enquiry and we will scope against that document rather than our own.",
    },
    {
      question: "What products do you use?",
      answer:
        "Biodegradable products that are safe around children and pets. If anyone in the household is asthmatic or sensitive to fragrance, tell us before the day and we will adjust what we bring.",
    },
  ],
  gallery: [
    { photo: "residential-kitchen-cabinet-cleaning", alt: "A cleaner wiping out kitchen cabinets during a deep clean" },
    { photo: "kitchen-sink-grate-cleaning", alt: "A kitchen sink grate being scrubbed by hand" },
    { photo: "glass-wardrobe-wiping", alt: "A glass wardrobe door being wiped to a streak-free finish" },
  ],
  related: [
    { href: "/services", label: "All services", detail: "Eleven services across cleaning, pest control and training" },
    { href: "/services/post-construction", label: "Post-construction cleaning", detail: "After a build or a refit" },
    { href: "/gallery", label: "Gallery", detail: "Photographs of our own teams at work" },
    { href: "/faqs", label: "General FAQs", detail: "Booking, pricing, staffing and coverage" },
  ],
  enquiry: {
    title: "Book a walk-through.",
    lede:
      "Tell us the property, the number of rooms and roughly when it was last deep cleaned. We will come and look, then quote room by room in writing.",
    action: { href: "/contact?service=deep-cleaning", label: "Request a deep clean quote" },
    points: [
      "A quote itemised by room, not a single lump figure.",
      "Walk-through before the quote, and again with you at the end of the job.",
      "Biodegradable products, safe around children and pets.",
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
            { name: "Deep cleaning", path: "/services/deep-cleaning" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${absolute("/services/deep-cleaning")}#faq`,
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
