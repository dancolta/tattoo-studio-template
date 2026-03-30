"use client";

import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function StatsBar() {
  const { stats } = siteConfig;

  return (
    <section className="-mt-16 md:-mt-24 py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <SpotlightCard key={i} className="backdrop-blur-xl">
                <div className="relative z-10 py-8 md:py-10 text-center">
                  <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-sm mt-2 uppercase tracking-widest">
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
