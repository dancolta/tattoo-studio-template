import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadStudioConfig } from "@/lib/studio-config";
import { generateLocalBusinessJsonLd } from "@/lib/structured-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const config = await loadStudioConfig(slug);

  if (!config) return {};

  return {
    title: config.name,
    description: config.description,
    openGraph: {
      title: config.name,
      description: config.description,
      url: config.url,
      siteName: config.name,
      images: config.ogImage ? [{ url: config.ogImage }] : [],
      type: "website",
    },
  };
}

export default async function StudioLayout({ children, params }: Props) {
  const { slug } = await params;
  const config = await loadStudioConfig(slug);

  if (!config) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const template = (config as any)._outreach?.template || "bold";
  const themeClass = template === "vibrant" ? "theme-vibrant" : "";

  return (
    <div className={themeClass}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessJsonLd(config)),
        }}
      />
      <Navbar config={config} studioSlug={slug} />
      <main className="flex-1 animate-page-in">{children}</main>
      <Footer config={config} />
    </div>
  );
}
