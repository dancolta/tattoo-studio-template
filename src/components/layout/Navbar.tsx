"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Button from "@/components/ui/Button";

export default function Navbar({
  config,
  studioSlug,
  basePath = "",
  heroPage = false,
}: {
  config?: SiteConfig;
  studioSlug?: string;
  basePath?: string;
  heroPage?: boolean;
}) {
  const cfg = config || defaultConfig;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAtTop } = useScrollDirection();
  const pathname = usePathname();
  const prefix = studioSlug ? `/${studioSlug}` : basePath;
  const isStudio = !!studioSlug;
  const isHome = heroPage || (isStudio ? pathname === `/${studioSlug}` : pathname === "/");

  const scrolled = !(isHome && isAtTop);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glass layer — always mounted, only opacity animates (no backdrop-filter toggle = no jank) */}
        <div
          className={cn(
            "absolute inset-0 bg-surface/30 backdrop-blur-xl shadow-lg shadow-black/20 transition-opacity duration-500 ease-out",
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={prefix || "/"}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <Image src="/images/logo.svg" alt={cfg.name} width={36} height={36} className="md:w-10 md:h-10" />
            {/* Hide studio name on desktop — only show in mobile drawer */}
            <span className={cn(
              "font-heading text-lg md:text-2xl font-bold text-text",
              isStudio && "md:hidden"
            )}>
              {cfg.nav.logo}
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {cfg.nav.links.map((link) => {
              const href = link.href === "/" ? (prefix || "/") : `${prefix}${link.href}`;
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={cn(
                    "text-base font-medium tracking-wide uppercase transition-colors duration-200",
                    pathname === href
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA — right */}
          <div className="hidden md:block">
            <Button href={cfg.nav.ctaHref} variant="secondary" size="md">
              {cfg.nav.ctaText}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="md:hidden text-text-muted hover:text-text transition-colors cursor-pointer"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-surface/30 backdrop-blur-2xl border-l border-white/[0.08] p-6 flex flex-col animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Image src="/images/logo.svg" alt={cfg.name} width={28} height={28} />
                <span className="font-heading text-lg font-bold text-text">
                  {cfg.nav.logo}
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-text-muted hover:text-text transition-colors cursor-pointer"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {cfg.nav.links.map((link) => {
                const href = link.href === "/" ? (prefix || "/") : `${prefix}${link.href}`;
                return (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-lg font-medium tracking-wide transition-colors",
                      pathname === href
                        ? "text-accent"
                        : "text-text-muted hover:text-text"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto">
              <Button
                href={cfg.nav.ctaHref}
                variant="secondary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {cfg.nav.ctaText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
