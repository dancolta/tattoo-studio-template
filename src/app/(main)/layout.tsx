import { siteConfig } from "@/config/site";
import { generateLocalBusinessJsonLd } from "@/lib/structured-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
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
      <Navbar />
      <main className="flex-1 animate-page-in">{children}</main>
      <Footer />
    </>
  );
}
