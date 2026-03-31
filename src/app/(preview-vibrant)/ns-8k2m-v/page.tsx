import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PortfolioGrid from "@/components/home/PortfolioGrid";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function VibrantPreviewPage() {
  return (
    <>
      <Hero etherealColor="rgba(244, 63, 94, 0.7)" />
      <StatsBar />
      <PortfolioGrid />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
