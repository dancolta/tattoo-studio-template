import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import { ImageAutoSlider } from "@/components/ui/ImageAutoSlider";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PortfolioGrid({ config }: { config?: SiteConfig }) {
  const { portfolio } = config || defaultConfig;

  const sliderImages = portfolio.items.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));

  const mid = Math.ceil(sliderImages.length / 2);
  const row1 = sliderImages.slice(0, mid);
  const row2 = sliderImages.slice(mid);

  return (
    <section id="portfolio" className="py-12 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            {portfolio.heading}
          </h2>
          <p className="text-text-muted mt-3 max-w-md mx-auto">
            {portfolio.subheading}
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={200}>
        <ImageAutoSlider images={row1} speed={50} />
      </ScrollReveal>

      {/* Second row, reverse direction */}
      <div className="mt-6">
        <ScrollReveal delay={300}>
          <ImageAutoSlider images={row2} speed={45} reverse />
        </ScrollReveal>
      </div>
    </section>
  );
}
