import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WorksGallery from "@/components/works/WorksGallery";

export const metadata: Metadata = {
  title: "Works",
  description: "Browse our portfolio of custom tattoo designs.",
};

export default function WorksPage() {
  const { portfolio } = siteConfig;

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {portfolio.heading}
            </h1>
            <p className="text-text-muted text-lg md:text-xl mt-4 max-w-lg mx-auto">
              {portfolio.subheading}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <WorksGallery />
        </div>
      </section>
    </>
  );
}
