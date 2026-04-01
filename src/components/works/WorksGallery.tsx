"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";

export default function WorksGallery({ config }: { config?: SiteConfig }) {
  const { portfolio } = config || defaultConfig;
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const filtered =
    activeCategory === "All"
      ? portfolio.items
      : portfolio.items.filter((item) => item.category === activeCategory);

  return (
    <>
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {portfolio.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-white/20 text-white border border-white/20"
                  : "text-text-muted border border-white/[0.06] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4" style={{ contain: "layout style" }}>
        {filtered.map((item, i) => (
          <div
            key={item.src}
            className="relative break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer"
            onClick={() => setLightbox(item.src)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={800}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="w-full h-auto object-cover transition-[transform,filter] duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-300">
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox src={lightbox} onClose={closeLightbox} />
    </>
  );
}
