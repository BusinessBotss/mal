"use client";

import { useState } from "react";
import { getGallery, getGalleryCategories, galleryCategoryLabels, type GalleryCategory } from "../../../content/utils";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageIntro } from "@/components/PageIntro";

export default function GalleryPage() {
  const allItems = getGallery();
  const categories = getGalleryCategories();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");

  const filtered = activeCategory === "all" ? allItems : allItems.filter((g) => g.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <PageIntro
        eyebrow="Visual"
        title="Gallery"
        subtitle="Mallorca through our lens. Hidden coves, golden hour and mountain roads."
      />

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`text-xs px-4 py-2 rounded-full border transition-colors ${
            activeCategory === "all"
              ? "border-accent bg-accent/10 text-accent"
              : "border-card-border text-muted hover:border-accent/30"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-4 py-2 rounded-full border transition-colors ${
              activeCategory === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-card-border text-muted hover:border-accent/30"
            }`}
          >
            {galleryCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <GalleryGrid items={filtered} columns={3} />
    </div>
  );
}
