"use client";

import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function StatsBar({ config }: { config?: SiteConfig }) {
  const { stats } = config || defaultConfig;

  return (
    <section className="-mt-32 md:-mt-24 py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <SpotlightCard key={i}>
                <div className="relative z-10 py-5 md:py-10 text-center">
                  <p className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-[10px] md:text-sm mt-1 md:mt-2 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
