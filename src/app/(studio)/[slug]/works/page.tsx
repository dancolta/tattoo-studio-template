import { notFound } from "next/navigation";
import { loadStudioConfig } from "@/lib/studio-config";
import WorksGallery from "@/components/works/WorksGallery";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { params: Promise<{ slug: string }> };

export default async function StudioWorksPage({ params }: Props) {
  const { slug } = await params;
  const config = await loadStudioConfig(slug);
  if (!config) notFound();

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {config.portfolio.heading}
            </h1>
            <p className="text-text-muted text-lg md:text-xl mt-4 max-w-lg mx-auto">
              {config.portfolio.subheading}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {config.portfolio.items.length > 0 ? (
            <WorksGallery config={config} />
          ) : (
            <div className="text-center">
              <p className="text-text-muted text-lg">
                Portfolio coming soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
