@AGENTS.md

# Tattoo Studio Template

Next.js template for tattoo studio outreach. Each studio gets a personalized site at `/[slug]` powered by a JSON config file.

## URL Structure & Flow

```
/                    → Lock screen ("Private Portfolio") — public-facing, hides the template system
/ns-8k2m             → Bold/classic template preview (Dan only — internal)
/ns-8k2m-v           → Vibrant template preview (Dan only — internal)
/[slug]              → Client sites — clean URLs, no prefix
```

**Templates** (`bold`, `vibrant`) are internal previews at hardcoded routes. Clients never see these.

**Client sites** live at `/<slug>` (e.g. `/valentin-c-tattoos`). The URL is always clean — the template used is determined by `studio.json._outreach.template`, invisible to the client.

### Outreach pipeline (per lead)

1. Scraper (`instagram-scraper`) extracts studio data from IG → outputs `studio.json` + images
2. `studio.json._outreach.template` is set to `bold` or `vibrant` based on studio style
3. Data goes into `public/studios/[slug]/`
4. Deploy via `vercel deploy --prod` (CLI, not git push — studio data is gitignored)
5. Client gets a clean link: `tattoo-studio.nodesparks.com/[slug]`
6. Screenshot of the live site is sent via IG DM as outreach

## Architecture

- **Route groups**: `(main)` = root lock screen, `(studio)/[slug]` = per-studio pages, `(preview)/ns-8k2m` = bold preview, `(preview-vibrant)/ns-8k2m-v` = vibrant preview
- **Studio data**: `public/studios/[slug]/studio.json` + images. Gitignored — deployed via CLI.
- **Templates**: `bold` (classic/default), `vibrant` — selected via `_outreach.template` in studio.json. `minimal` and `artsy` are placeholders.
- **All components** accept optional `config?: SiteConfig` prop, falling back to `defaultConfig` from `src/config/site.ts`.

## Template theming rules

- **Theme visuals (VibrantBackground, theme class) live in the LAYOUT, not in template components.** The studio layout (`(studio)/[slug]/layout.tsx`) conditionally renders `VibrantBackground` and applies `theme-vibrant` class based on `_outreach.template`. This ensures ALL pages (home, about, works, contact) get the same visual treatment.
- **Template components (VibrantTemplate, BoldTemplate) only compose page-level sections** (Hero, StatsBar, PortfolioGrid, etc.) — they do NOT include background effects or theme wrappers.
- **Nav links in `studio.json` must use relative paths** (`/`, `/works`, `/about`, `/contact`) — the Navbar prefixes them with `/{slug}` automatically via `studioSlug`. Never put the slug in nav link hrefs.
- **`nav.logoSrc`** (optional) overrides the default `/images/logo.svg` in the Navbar. Set it to the studio's logo path (e.g., `/studios/jack-art-tattoo/logo.png`).

## Key Files

- `src/lib/studio-config.ts` — loads studio JSON from filesystem
- `src/app/(studio)/[slug]/page.tsx` — template switcher
- `src/config/site.ts` — default template config (Ink & Iron)
- `public/studios/[slug]/` — per-studio assets (gitignored)

## Deployment

- **Vercel project**: `tattoo-studio-template` on `dancoltas-projects`
- **Domain**: `tattoo-studio.nodesparks.com`
- **Deploy command**: `vercel deploy --prod` (must use CLI to include gitignored studio data)
- **GitHub**: `dancolta/tattoo-studio-template` (template code only, no studio data)

## Rules

- **NEVER replace the EtheralShadow SVG animation** (feTurbulence + feDisplacementMap) with CSS. It's a critical visual element.
- **NEVER change visual styles** without explicit approval — optimize performance only via code techniques (rAF, containment, will-change, etc.)
- Root `/` is a lock screen ("Private Portfolio") — leads must not see the template system
- Preview URLs `/ns-8k2m` and `/ns-8k2m-v` are for Dan's eyes only — do not share or reference in any public-facing content
- Client URLs are always clean: `/<slug>` — no numbered prefixes, no template indicators
