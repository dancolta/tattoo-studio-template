import ArtistStory from "@/components/about/ArtistStory";
import Philosophy from "@/components/about/Philosophy";
import StudioPhotos from "@/components/about/StudioPhotos";

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            About
          </h1>
          <p className="text-text-muted text-lg md:text-xl mt-4 max-w-lg mx-auto">
            The story behind the ink
          </p>
        </div>
      </section>
      <ArtistStory />
      <Philosophy />
      <StudioPhotos />
    </>
  );
}
