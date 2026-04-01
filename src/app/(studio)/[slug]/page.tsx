import { notFound } from "next/navigation";
import { loadStudioConfig } from "@/lib/studio-config";
import type { SiteConfig } from "@/types";

// Template: Bold (current default)
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PortfolioGrid from "@/components/home/PortfolioGrid";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

import MinimalTemplate from "@/components/templates/MinimalTemplate";
import ArtsyTemplate from "@/components/templates/ArtsyTemplate";
import VibrantTemplate from "@/components/templates/VibrantTemplate";

function BoldTemplate({ config, basePath }: { config: SiteConfig; basePath: string }) {
  return (
    <>
      <Hero config={config} basePath={basePath} />
      <StatsBar config={config} />
      <PortfolioGrid config={config} />
      {config.testimonials.items.length > 0 && (
        <Testimonials config={config} />
      )}
      <CtaBanner config={config} />
    </>
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function StudioPage({ params }: Props) {
  const { slug } = await params;
  const config = await loadStudioConfig(slug);

  if (!config) notFound();

  // Switch template based on studio.json _outreach.template field
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const template = (config as any)._outreach?.template || "bold";

  const basePath = `/${slug}`;

  switch (template) {
    case "vibrant":
      return <VibrantTemplate config={config} basePath={basePath} />;
    case "minimal":
      return <MinimalTemplate config={config} />;
    case "artsy":
      return <ArtsyTemplate config={config} />;
    default:
      return <BoldTemplate config={config} basePath={basePath} />;
  }
}
