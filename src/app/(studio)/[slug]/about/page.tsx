import { notFound } from "next/navigation";
import { loadStudioConfig } from "@/lib/studio-config";
import ArtistStory from "@/components/about/ArtistStory";
import Philosophy from "@/components/about/Philosophy";
import StudioPhotos from "@/components/about/StudioPhotos";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = { params: Promise<{ slug: string }> };

export default async function StudioAboutPage({ params }: Props) {
  const { slug } = await params;
  const config = await loadStudioConfig(slug);
  if (!config) notFound();

  const hasAboutContent =
    config.about.bio.length > 0 || config.about.studioPhotos.length > 0;

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {config.about.heading || "About"}
            </h1>
            <p className="text-text-muted text-lg md:text-xl mt-4 max-w-lg mx-auto">
              {config.about.subheading || "The story behind the ink"}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {hasAboutContent ? (
        <>
          <ArtistStory config={config} />
          {config.about.philosophy.quote && <Philosophy config={config} />}
          {config.about.studioPhotos.length > 0 && (
            <StudioPhotos config={config} />
          )}
        </>
      ) : (
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-text-muted text-lg">
              More about {config.name} coming soon.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
