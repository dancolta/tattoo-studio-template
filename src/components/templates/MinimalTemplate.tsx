import type { SiteConfig } from "@/types";

/**
 * Minimal Template — clean, whitespace-heavy, typography-first.
 * TODO: Implement this template variant.
 */
export default function MinimalTemplate({ config }: { config: SiteConfig }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-white/40 text-sm">
        Minimal template coming soon for {config.name}
      </p>
    </div>
  );
}
