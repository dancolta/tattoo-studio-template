import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MapSection() {
  const { mapEmbedUrl } = siteConfig.location;

  if (!mapEmbedUrl) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl h-64 flex items-center justify-center">
            <p className="text-text-muted text-sm">
              Map embed — set mapEmbedUrl in site config
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border border-white/[0.06] h-80" style={{ filter: "grayscale(1) invert(1) contrast(0.9) brightness(0.4)" }}>
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio location"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
