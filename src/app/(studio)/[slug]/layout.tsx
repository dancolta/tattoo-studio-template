import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadStudioConfig } from "@/lib/studio-config";
import { generateLocalBusinessJsonLd } from "@/lib/structured-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VibrantBackground } from "@/components/ui/VibrantBackground";

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
    <div
      className={themeClass}
      style={config.colors ? {
        ...(config.colors.accent && { '--color-accent': config.colors.accent }),
        ...(config.colors.accentHover && { '--color-accent-hover': config.colors.accentHover }),
        ...(config.colors.heading && { '--color-heading': config.colors.heading }),
        ...(config.colors.border && { '--color-border': config.colors.border }),
        ...(config.colors.btnPrimary && { '--btn-primary-override': config.colors.btnPrimary }),
        ...(config.colors.btnSecondary && { '--btn-secondary-override': config.colors.btnSecondary }),
        ...(config.colors.rimPrimary && { '--rim-primary-override': config.colors.rimPrimary }),
        ...(config.colors.rimPrimaryAlt && { '--rim-primary-alt-override': config.colors.rimPrimaryAlt }),
        ...(config.colors.rimSecondary && { '--rim-secondary-override': config.colors.rimSecondary }),
        ...(config.colors.rimSecondaryAlt && { '--rim-secondary-alt-override': config.colors.rimSecondaryAlt }),
        ...(config.colors.glowDark && { '--glow-dark-override': config.colors.glowDark }),
        ...(config.colors.glowMid && { '--glow-mid-override': config.colors.glowMid }),
        ...(config.colors.glowLight && { '--glow-light-override': config.colors.glowLight }),
        ...(config.colors.glowBright && { '--glow-bright-override': config.colors.glowBright }),
        ...(config.colors.spotlight && { '--spotlight-override': config.colors.spotlight }),
      } as React.CSSProperties : undefined}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessJsonLd(config)),
        }}
      />
      {template === "vibrant" && <VibrantBackground />}
      <Navbar config={config} studioSlug={slug} />
      <main className="flex-1 animate-page-in">{children}</main>
      <Footer config={config} />
    </div>
  );
}
