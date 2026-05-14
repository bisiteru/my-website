import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog & Cleaning Tips",
  description:
    "Expert cleaning and pest control tips from Dust & Wipes Limited. Learn how to maintain a spotless, pest-free home or office in Abuja.",
};

const categories = ["All", "Cleaning Tips", "Pest Control", "Office Cleaning"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
            Expert Advice
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Cleaning & Pest Control Tips
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Practical advice from our team of cleaning and pest control professionals to help you maintain a healthy, spotless space.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-[#0b8441] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-[#0b8441]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${BLOG_POSTS[0].slug}`}
            className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm card-hover mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-[#0b8441]/15 to-[#dd4c2f]/15 flex items-center justify-center text-8xl">
                🧹
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-50 text-[#0b8441] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag size={11} />
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock size={11} />
                    {BLOG_POSTS[0].readTime}
                  </span>
                  <span className="text-gray-400 text-xs">Featured</span>
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#0b8441] transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{BLOG_POSTS[0].excerpt}</p>
                <div className="flex items-center gap-2 text-[#0b8441] font-semibold">
                  Read full article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-gray-400 mt-4">{BLOG_POSTS[0].date}</div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover shadow-sm"
              >
                <div className="h-44 bg-gradient-to-br from-[#0b8441]/10 to-[#dd4c2f]/10 flex items-center justify-center text-6xl">
                  {post.category === "Pest Control" ? "🐛" : post.category === "Office Cleaning" ? "🏢" : "🧹"}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#0b8441] bg-green-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0b8441] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-[#0b8441] text-sm font-medium flex items-center gap-1">
                      Read <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
