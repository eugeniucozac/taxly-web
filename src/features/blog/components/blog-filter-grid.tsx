"use client";

import { useState } from "react";
import { BlogPostCard } from "./blog-post-card";
import { categoryThemes } from "../lib/category-theme";
import type { BlogPost } from "../lib/blog";
import type { BlogCategory } from "../data/en";

export interface BlogGridItem {
  post: BlogPost;
  categoryLabel: string;
  readTimeLabel: string;
}

/** Category chips that actually filter the grid — client-side, zero requests. */
export function BlogFilterGrid({
  items,
  locale,
  readMore,
  allLabel,
}: {
  items: BlogGridItem[];
  locale: string;
  readMore: string;
  allLabel: string;
}) {
  const [active, setActive] = useState<BlogCategory | "all">("all");
  const categories = Object.keys(categoryThemes) as BlogCategory[];

  const counts = new Map<BlogCategory, number>();
  for (const item of items) {
    counts.set(item.post.category, (counts.get(item.post.category) ?? 0) + 1);
  }

  const filtered = active === "all" ? items : items.filter((i) => i.post.category === active);

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
            active === "all"
              ? "bg-foreground text-background"
              : "border text-muted-foreground hover:text-foreground"
          }`}
        >
          {allLabel} ({items.length})
        </button>
        {categories.map((category) => {
          const theme = categoryThemes[category];
          const Icon = theme.icon;
          const item = items.find((i) => i.post.category === category);
          const isActive = active === category;
          return (
            <button
              key={category}
              onClick={() => setActive(isActive ? "all" : category)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${theme.chip} ${
                isActive ? "ring-2 ring-foreground/60" : "opacity-80 hover:opacity-100"
              }`}
            >
              <Icon size={14} aria-hidden />
              {item?.categoryLabel ?? category}
              <span className="opacity-70">({counts.get(category) ?? 0})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(({ post, categoryLabel, readTimeLabel }) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            locale={locale}
            readMore={readMore}
            categoryLabel={categoryLabel}
            readTimeLabel={readTimeLabel}
          />
        ))}
      </div>
    </>
  );
}
