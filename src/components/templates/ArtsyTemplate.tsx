import type { SiteConfig } from "@/types";

/**
 * Artsy Template — editorial layout, asymmetric grids, artistic feel.
 * TODO: Implement this template variant.
 */
export default function ArtsyTemplate({ config }: { config: SiteConfig }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-white/40 text-sm">
        Artsy template coming soon for {config.name}
      </p>
    </div>
  );
}
