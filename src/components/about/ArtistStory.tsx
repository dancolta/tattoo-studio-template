import Image from "next/image";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/layout/Section";

export default function ArtistStory({ config }: { config?: SiteConfig }) {
  const { about } = config || defaultConfig;

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <ScrollReveal>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src={about.portraitSrc}
              alt={`Portrait of ${about.artistName}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Meet {about.artistName}
            </h2>
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
