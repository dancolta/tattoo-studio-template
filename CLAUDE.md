@AGENTS.md

# Tattoo Studio Template

Next.js template for tattoo studio outreach. Each studio gets a personalized site at `/[slug]` powered by a JSON config file.

## Architecture

- **Route groups**: `(main)` = root lock screen, `(studio)/[slug]` = per-studio pages, `(preview)/ns-8k2m` = default template preview (private)
- **Studio data**: `public/studios/[slug]/studio.json` + images. Gitignored — deployed via `vercel deploy --prod` (CLI), not git push.
- **Templates**: `bold` (default), `minimal`, `artsy` — selected via `_outreach.template` in studio.json. Only bold exists currently.
- **All components** accept optional `config?: SiteConfig` prop, falling back to `defaultConfig` from `src/config/site.ts`.

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
- Preview URL `/ns-8k2m` is for Dan's eyes only — do not share or reference in any public-facing content
