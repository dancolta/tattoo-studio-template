import { siteConfig } from "@/config/site";
import { generateLocalBusinessJsonLd } from "@/lib/structured-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessJsonLd(siteConfig)),
        }}
      />
      <Navbar heroPage basePath="/ns-8k2m" />
      <main className="flex-1 animate-page-in">{children}</main>
      <Footer />
    </>
  );
}
