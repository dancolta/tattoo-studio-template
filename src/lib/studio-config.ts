import { readFile } from "fs/promises";
import { join } from "path";
import type { SiteConfig } from "@/types";

/**
 * Load a studio's config from public/studios/[slug]/studio.json.
 * Returns null if the studio doesn't exist.
 */
export async function loadStudioConfig(
  slug: string
): Promise<SiteConfig | null> {
  try {
    const filePath = join(
      process.cwd(),
      "public",
      "studios",
      slug,
      "studio.json"
    );
    const raw = await readFile(filePath, "utf-8");
    return JSON.parse(raw) as SiteConfig;
  } catch {
    return null;
  }
}

/**
 * List all available studio slugs (for generateStaticParams if needed).
 */
export async function listStudioSlugs(): Promise<string[]> {
  try {
    const { readdir } = await import("fs/promises");
    const studiosDir = join(process.cwd(), "public", "studios");
    const entries = await readdir(studiosDir, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory() && e.name !== ".gitkeep")
      .map((e) => e.name);
  } catch {
    return [];
  }
}
