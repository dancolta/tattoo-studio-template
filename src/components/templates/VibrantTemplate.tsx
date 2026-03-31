import type { SiteConfig } from "@/types";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PortfolioGrid from "@/components/home/PortfolioGrid";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import { VibrantBackground } from "@/components/ui/VibrantBackground";

/**
 * Vibrant Template — same bold layout with electric rose/crimson accent.
 * Designed for studios with colorful styles (watercolor, neo-traditional, color realism).
 */
export default function VibrantTemplate({ config }: { config: SiteConfig }) {
  return (
    <>
      <VibrantBackground />
      <Hero config={config} etherealColor="rgba(244, 63, 94, 0.7)" />
      <StatsBar config={config} />
      <PortfolioGrid config={config} />
      {config.testimonials.items.length > 0 && (
        <Testimonials config={config} />
      )}
      <CtaBanner config={config} />
    </>
  );
}
