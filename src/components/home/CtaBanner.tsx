import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  const { ctaBanner } = siteConfig;

  return (
    <section className="pt-10 pb-24 md:pt-28 md:pb-44">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            {ctaBanner.heading}
          </h2>
          <p className="text-text-muted mt-4 md:mt-6 text-base md:text-xl max-w-lg mx-auto">
            {ctaBanner.subheading}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={ctaBanner.ctaHref} size="lg">
              {ctaBanner.ctaText}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
