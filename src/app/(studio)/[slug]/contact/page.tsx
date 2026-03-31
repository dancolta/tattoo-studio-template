import { notFound } from "next/navigation";
import { loadStudioConfig } from "@/lib/studio-config";
import ContactForm from "@/components/contact/ContactForm";
import InfoCards from "@/components/contact/InfoCards";
import MapSection from "@/components/contact/MapSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { params: Promise<{ slug: string }> };

export default async function StudioContactPage({ params }: Props) {
  const { slug } = await params;
  const config = await loadStudioConfig(slug);
  if (!config) notFound();

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {config.contact.heading}
            </h1>
            <p className="text-text-muted text-lg md:text-xl mt-4 max-w-lg mx-auto">
              {config.contact.subheading}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 md:gap-16 items-start">
            <ScrollReveal>
              <ContactForm config={config} />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <InfoCards config={config} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <MapSection config={config} />
    </>
  );
}
