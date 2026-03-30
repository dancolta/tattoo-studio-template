import { siteConfig } from "@/config/site";
import { ImageAutoSlider } from "@/components/ui/ImageAutoSlider";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/layout/Section";

export default function StudioPhotos() {
  const photos = siteConfig.about.studioPhotos;

  const sliderImages = photos.map((src, i) => ({
    src,
    alt: `Studio photo ${i + 1}`,
  }));

  return (
    <Section>
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12">
          The Studio
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ImageAutoSlider images={sliderImages} speed={45} />
      </ScrollReveal>
    </Section>
  );
}
