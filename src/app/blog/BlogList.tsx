"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

const hasRealImage = (img: string) => img && !img.startsWith("/images/blog-");

const categories = ["All", "Cleaning Tips", "Pest Control", "Office Cleaning", "Training & Safety"];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);


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
                ? "bg-[var(--c-green-700)] text-white shadow-sm"
                : "bg-[var(--c-band)] text-[var(--c-ink-2)] hover:bg-[var(--c-green-50)] hover:text-[var(--c-green-700)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[var(--c-ink-2)] text-center py-16">No articles in this category yet.</p>
      )}

      {/* Featured post */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-white rounded-3xl overflow-hidden border border-[var(--c-border)] shadow-sm card-hover mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {hasRealImage(featured.image) ? (
              <div className="h-64 lg:h-auto relative min-h-[16rem]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center bg-[var(--c-green-50)] px-8 text-center lg:h-auto">
                <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-[var(--c-green-700)]">
                  {featured.category}
                </span>
              </div>
            )}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[var(--c-green-50)] text-[var(--c-green-700)] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag size={11} />
                  {featured.category}
                </span>
                <span className="text-[var(--c-ink-2)] text-xs flex items-center gap-1">
                  <Clock size={11} />
                  {featured.readTime}
                </span>
                <span className="text-[var(--c-ink-2)] text-xs">Featured</span>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--c-green-800)] mb-3 group-hover:text-[var(--c-green-700)] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[var(--c-ink-2)] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-[var(--c-green-700)] font-semibold">
                Read full article
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs text-[var(--c-ink-2)] mt-4">{featured.date}</div>
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
              className="group bg-white rounded-2xl overflow-hidden border border-[var(--c-border)] card-hover shadow-sm"
            >
              {hasRealImage(post.image) ? (
                <div className="h-44 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="flex h-44 items-center justify-center bg-[var(--c-green-50)] px-6 text-center">
                  <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-[var(--c-green-700)]">
                    {post.category}
                  </span>
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[var(--c-green-700)] bg-[var(--c-green-50)] px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--c-ink-2)] flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--c-green-800)] mb-2 group-hover:text-[var(--c-green-700)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--c-ink-2)] line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--c-ink-2)]">{post.date}</span>
                  <span className="text-[var(--c-green-700)] text-sm font-medium flex items-center gap-1">
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
