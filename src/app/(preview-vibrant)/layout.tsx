import { siteConfig } from "@/config/site";
import { generateLocalBusinessJsonLd } from "@/lib/structured-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VibrantBackground } from "@/components/ui/VibrantBackground";

export default function VibrantPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-vibrant">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessJsonLd(siteConfig)),
        }}
      />
      <VibrantBackground />
      <Navbar heroPage basePath="/ns-8k2m-v" />
      <main className="flex-1 animate-page-in">{children}</main>
      <Footer />
    </div>
  );
}
