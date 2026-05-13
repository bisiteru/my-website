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
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug] || [
    "This article provides expert advice on maintaining a clean, healthy space. Our team of professional cleaners and pest control specialists in Abuja have compiled their top tips and insights.",
    "Regular professional cleaning is one of the best investments you can make in your property and your health. Whether you're a homeowner, business owner, or facility manager, maintaining a clean environment has tangible benefits for productivity, wellbeing, and property value.",
    "Dust & Wipes Limited has been serving clients across Abuja FCT since 2021. Our team of trained professionals uses eco-friendly products and proven techniques to deliver consistently excellent results.",
    "Have questions about our services? Contact us via WhatsApp or our website contact form. We typically respond within 2 hours.",
  ];

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
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
                  href={`https://wa.me/${COMPANY.whatsapp}`}
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
