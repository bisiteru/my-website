"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

const categories = ["All", "Cleaning Tips", "Pest Control", "Office Cleaning"];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const categoryIcon = (cat: string) =>
    cat === "Pest Control" ? "🐛" : cat === "Office Cleaning" ? "🏢" : "🧹";

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              cat === activeCategory
                ? "bg-[#0b8441] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-[#0b8441]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 text-center py-16">No articles in this category yet.</p>
      )}

      {/* Featured post */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm card-hover mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto bg-gradient-to-br from-[#0b8441]/15 to-[#dd4c2f]/15 flex items-center justify-center text-8xl">
              {categoryIcon(featured.category)}
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-50 text-[#0b8441] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag size={11} />
                  {featured.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Clock size={11} />
                  {featured.readTime}
                </span>
                <span className="text-gray-400 text-xs">Featured</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#0b8441] transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-[#0b8441] font-semibold">
                Read full article
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs text-gray-400 mt-4">{featured.date}</div>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover shadow-sm"
            >
              <div className="h-44 bg-gradient-to-br from-[#0b8441]/10 to-[#dd4c2f]/10 flex items-center justify-center text-6xl">
                {categoryIcon(post.category)}
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
      )}
    </>
  );
}
