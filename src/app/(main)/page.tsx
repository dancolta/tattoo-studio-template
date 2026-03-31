import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PortfolioGrid from "@/components/home/PortfolioGrid";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PortfolioGrid />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
