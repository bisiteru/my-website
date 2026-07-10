import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { BLOG_POSTS, COMPANY } from "@/lib/constants";
import CTABanner from "@/components/sections/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [`${post.category} Abuja`, "cleaning tips", "Dust and Wipes blog"],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://dustandwipes.com/blog/${post.slug}`,
      siteName: "Dust & Wipes Limited",
      publishedTime: new Date(post.date).toISOString(),
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/images/og-image.jpg"],
    },
  };
}

const blogContent: Record<string, string[]> = {
  "how-often-should-you-deep-clean": [
    "Most homeowners clean their homes regularly — sweeping, mopping, wiping down surfaces — but the deep clean is often neglected. Yet it's one of the most important things you can do for your home's hygiene and your family's health.",
    "A deep clean goes far beyond surface-level tidying. It involves cleaning inside appliances, scrubbing grout, washing blinds, vacuuming mattresses, and tackling all the spots your regular clean misses. The question is: how often should you do it?",
    "For most homes in Abuja, we recommend a full deep clean every 3–6 months. However, if you have pets, young children, or allergy sufferers in the household, every 2–3 months is more appropriate. After events, renovations, or extended absences, a one-off deep clean is always a good idea.",
    "Signs it's time for a deep clean include persistent odours that regular cleaning doesn't remove, visible buildup in grout lines or tile corners, dusty air vents, or simply the feeling that your home isn't quite as fresh as it should be.",
    "The good news? You don't have to do it yourself. Dust & Wipes Limited offers professional deep cleaning services across Abuja FCT. Our team handles everything from top to bottom, using eco-friendly products that are safe for your family and effective at removing even stubborn buildup.",
    "Ready to schedule your deep clean? Contact us today for a free quote.",
  ],
  "signs-of-termite-infestation": [
    "Termites are often called 'silent destroyers' — and for good reason. By the time most homeowners realise they have a termite problem, significant structural damage has already been done. Knowing the early warning signs can save you thousands in repairs.",
    "1. Mud tubes: Termites build pencil-sized mud tubes along walls, foundations, and beams. These serve as highways between their colony and their food source. If you spot these, act immediately.",
    "2. Hollow-sounding wood: Termites eat wood from the inside out. Tap on wooden beams, floors, or furniture — a hollow sound suggests termites have been at work.",
    "3. Discarded wings: Reproductive termites (swarmers) shed their wings after finding a new colony location. Finding small, translucent wings near window sills or light sources is a red flag.",
    "4. Tight-fitting doors and windows: As termites eat through wooden frames, they produce moisture that warps the wood, causing doors and windows to stick.",
    "5. Frass (termite droppings): Drywood termites push their droppings out of small holes in wood. Tiny, pellet-shaped droppings near wooden structures are a clear sign.",
    "6. Bubbling or uneven paint: Moisture from termite activity can cause paint to bubble or peel, even without water damage.",
    "7. Visible damage in wood: If you can see channels or tunnels in exposed wood, you almost certainly have a termite infestation.",
    "If you spot any of these signs in your Abuja home or office, don't delay. Dust & Wipes Limited offers professional termite control services with lasting results. Contact us today for a free inspection.",
  ],
  "office-cleaning-productivity": [
    "Walk into a cluttered, dusty office and something happens before anyone says a word: focus drops, morale dips, and clients quietly form a judgement about your business. Research consistently backs this up — studies from Harvard and Princeton have shown that visual clutter competes for attention and reduces cognitive performance, while workplace hygiene surveys report productivity gains of 12–15% in professionally cleaned environments.",
    "There are three main mechanisms at work. First, air quality: dust, allergens, and poor ventilation cause headaches, fatigue, and more frequent sick days. A professionally cleaned office — including vents, carpets, and upholstery — measurably reduces airborne particles.",
    "Second, reduced sick leave. Desks, keyboards, and shared surfaces like door handles and kitchen counters are germ hotspots. Regular professional sanitisation breaks the chain of infection, which matters enormously in open-plan Abuja offices where colds and flu spread fast, especially during seasonal changes.",
    "Third, psychology. Employees interpret a clean, well-maintained workplace as a signal that management cares — about them and about standards. That perception translates directly into pride, discipline, and discretionary effort. The reverse is also true: neglected spaces breed neglected work.",
    "For businesses in Abuja, we recommend a daily or thrice-weekly professional cleaning schedule for high-traffic offices, with a quarterly deep clean covering carpets, upholstery, and air vents. Reception areas and meeting rooms deserve special attention — they shape every client's first impression.",
    "Dust & Wipes Limited provides tailored office cleaning programmes for businesses across the FCT, from small suites in Wuse to full corporate facilities in the Central Business District. Contact us for a free workplace assessment and quote.",
  ],
  "eco-friendly-cleaning-tips": [
    "Going green doesn't mean compromising on cleanliness. With a few simple changes, you can keep your home spotless while protecting your family's health and reducing your environmental footprint. Here are five habits you can start today.",
    "1. Switch to plant-based cleaning products. Many conventional cleaners contain harsh chemicals like ammonia and chlorine bleach that irritate skin and lungs and end up in waterways. Plant-based alternatives clean just as effectively for everyday tasks — look for biodegradable formulations, which are increasingly available in Abuja supermarkets.",
    "2. Use microfibre cloths instead of disposable wipes. A good microfibre cloth traps dust and bacteria with just water, can be washed and reused hundreds of times, and outperforms paper towels on glass and stainless steel. This one change alone dramatically cuts household waste.",
    "3. Make vinegar and baking soda your allies. White vinegar cuts grease, descales kettles, and shines windows; baking soda deodorises fridges, lifts stains, and scrubs sinks without scratching. Together they handle a surprising share of household cleaning safely and cheaply.",
    "4. Ventilate naturally. Instead of masking odours with aerosol fresheners — which add chemicals to your indoor air — open windows during cooler morning hours, use indoor plants, and place bowls of baking soda in problem areas.",
    "5. Dose correctly. More detergent does not mean cleaner clothes or floors — it means residue, wasted money, and more chemicals down the drain. Follow dosage instructions and you'll often find half the recommended amount does the job.",
    "At Dust & Wipes Limited, eco-friendly practice is one of our core values — we use non-toxic, biodegradable products across all our residential and commercial cleaning services in Abuja. If you'd like a professional clean that's safe for children, pets, and the planet, get in touch for a free quote.",
  ],
  "pest-control-abuja-rainy-season": [
    "Every year between April and October, Abuja's rainy season transforms the pest landscape of the FCT. Heavy rains flood burrows, saturate soil, and drive cockroaches, rodents, ants, and termites out of their natural habitats — and straight into homes and offices. If you've noticed more unwanted visitors when the rains arrive, you're not imagining it.",
    "Mosquitoes are the most serious concern. Stagnant water in gutters, flowerpots, buckets, and construction sites becomes a breeding ground within days, and with mosquitoes comes elevated malaria risk. Larviciding treatments and residual sprays around the compound perimeter significantly reduce breeding and biting pressure.",
    "Cockroaches and ants move indoors seeking dry shelter and food. Kitchens, bathrooms, and drainage areas are their first stops. Sealing entry points, fixing leaking pipes, and applying targeted gel baits and residual treatments keeps them out before an infestation establishes.",
    "Termites become especially active in moist soil. The rainy season is when subterranean termites expand their colonies and send out swarmers — those winged insects you see around lights after a downpour. Pre-emptive soil treatment around your foundation is far cheaper than repairing structural damage later.",
    "Rodents also seek higher, drier ground when burrows flood. Store food in sealed containers, clear clutter from stores and garages, and treat at the first sign of droppings — a single pair of rats can produce dozens of offspring in one season.",
    "Our advice to Abuja residents: schedule a comprehensive pest treatment just before the rains begin (March–April), with a follow-up mid-season. Dust & Wipes Limited's certified technicians use family-safe, low-toxicity treatments and provide follow-up inspections. Book your rainy-season treatment today — prevention costs far less than cure.",
  ],
  "move-out-cleaning-checklist": [
    "Moving out of a rented property in Abuja? Your security deposit — often equivalent to months of rent — can hinge on the state you leave the property in. Landlords and agents inspect thoroughly, and 'cleaning costs' are the most common deduction. This room-by-room checklist will help you leave nothing to chance.",
    "Kitchen: Clean inside and behind the cooker, degrease the extractor and wall tiles, empty and wipe all cupboards, defrost and clean the fridge (leave doors open after switching off), descale the sink and taps, and mop the floor including corners and under units. Grease and food residue are the first things inspectors look for.",
    "Bathrooms: Descale the showerhead, taps, and WC; scrub grout lines and tile surfaces; polish mirrors; clear hair from drains; and wipe down cabinets inside and out. Limescale and mould are red flags that suggest neglect.",
    "Bedrooms and living areas: Dust ceiling fans, light fittings, and curtain rails; wipe skirting boards, doors, and door frames; clean inside wardrobes and drawers; remove cobwebs from corners; and clean windows inside and out where accessible, including sills and tracks.",
    "Walls and floors: Spot-clean scuff marks with a damp cloth (test first), vacuum and mop all floors, and steam-clean carpets if the tenancy agreement requires it — many Abuja agreements do. Nail holes and paint damage may need separate attention.",
    "Outside areas: Sweep balconies and verandas, clear any refuse, wash down exterior doors, and ensure gutters around your unit are free of debris you've contributed.",
    "The reality? A thorough move-out clean of a 3-bedroom property takes a full day or more of hard work. Dust & Wipes Limited offers professional move-out cleaning across Abuja FCT, with landlord-inspection-standard results — many of our clients recover their full deposit. Get a fixed quote before you hand back your keys.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug] || [
    "This article provides expert advice on maintaining a clean, healthy space. Our team of professional cleaners and pest control specialists in Abuja have compiled their top tips and insights.",
    "Regular professional cleaning is one of the best investments you can make in your property and your health. Whether you're a homeowner, business owner, or facility manager, maintaining a clean environment has tangible benefits for productivity, wellbeing, and property value.",
    "Dust & Wipes Limited has been serving clients across Abuja FCT since 2017. Our team of trained professionals uses eco-friendly products and proven techniques to deliver consistently excellent results.",
    "Have questions about our services? Contact us via WhatsApp or our website contact form. We typically respond within 2 hours.",
  ];

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Article + Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.excerpt,
              image: "https://dustandwipes.com/images/og-image.jpg",
              datePublished: new Date(post.date).toISOString(),
              author: {
                "@type": "Organization",
                name: "Dust & Wipes Limited",
                url: "https://dustandwipes.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Dust & Wipes Limited",
                logo: {
                  "@type": "ImageObject",
                  url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=192,h=192,fit=crop,f=png/ALpeL1ljNpuX4VBM/dust-wipes-logo41-2-AGB2VD6oX7TQO8Nj.png",
                },
              },
              mainEntityOfPage: `https://dustandwipes.com/blog/${post.slug}`,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://dustandwipes.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://dustandwipes.com/blog" },
                { "@type": "ListItem", position: 3, name: post.title, item: `https://dustandwipes.com/blog/${post.slug}` },
              ],
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={11} />
              {post.category}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1">
              <Calendar size={11} />
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg">{post.excerpt}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Article */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-[#0b8441]/10 to-[#dd4c2f]/10 rounded-3xl flex items-center justify-center text-8xl mb-10">
            {post.category === "Pest Control" ? "🐛" : post.category === "Office Cleaning" ? "🏢" : "🧹"}
          </div>

          {/* Content */}
          <article className="prose prose-gray max-w-none">
            {content.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5 text-base">
                {para}
              </p>
            ))}
          </article>

          {/* Author / CTA box */}
          <div className="mt-12 bg-gradient-to-br from-[#0b8441]/5 to-[#dd4c2f]/5 rounded-3xl p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0b8441] flex items-center justify-center text-white font-black text-lg shrink-0">
                D&W
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">Dust & Wipes Limited</div>
                <p className="text-sm text-gray-500 mb-4">
                  Professional cleaning and pest control services across Abuja FCT. We&apos;re here to help you maintain a spotless, pest-free space.
                </p>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0b8441] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#076634] transition-all"
                >
                  Book a Service Today
                </a>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                    <div className="h-28 bg-gradient-to-br from-[#0b8441]/10 to-[#dd4c2f]/10 rounded-xl flex items-center justify-center text-4xl mb-3">
                      {p.category === "Pest Control" ? "🐛" : "🧹"}
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#0b8441] transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{p.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
