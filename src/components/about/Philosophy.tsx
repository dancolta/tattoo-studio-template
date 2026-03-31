import { Paintbrush, ShieldCheck, Heart, Sparkles, Gem, Zap } from "lucide-react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import Section from "@/components/layout/Section";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Paintbrush,
  ShieldCheck,
  Heart,
  Sparkles,
  Gem,
  Zap,
};

export default function Philosophy({ config }: { config?: SiteConfig }) {
  const cfg = config || defaultConfig;
  const { philosophy } = cfg.about;

  return (
    <Section>
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="w-12 h-px bg-accent/30 mx-auto mb-8" />
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold italic text-accent max-w-3xl mx-auto leading-snug whitespace-pre-line">
            &ldquo;{philosophy.quote}&rdquo;
          </blockquote>
          <p className="text-text-muted mt-6 text-sm uppercase tracking-widest">
            — {cfg.about.artistName}
          </p>
          <div className="w-12 h-px bg-accent/30 mx-auto mt-8" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {philosophy.values.map((value, i) => {
          const Icon = iconMap[value.icon] || Sparkles;
          return (
            <ScrollReveal key={i} delay={i * 100}>
              <SpotlightCard className="backdrop-blur-xl">
                <div className="relative z-10 p-5 md:p-8 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold mb-1.5 md:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
