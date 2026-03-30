"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAtTop } = useScrollDirection();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrolled = !(isHome && isAtTop);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-surface/50 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold text-text hover:text-accent transition-colors"
          >
            {siteConfig.nav.logo}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {siteConfig.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium tracking-wide uppercase transition-colors duration-200",
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href={siteConfig.nav.ctaHref} variant="secondary" size="md">
              {siteConfig.nav.ctaText}
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
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-surface/90 backdrop-blur-xl border-l border-accent/10 p-6 flex flex-col animate-slide-in">
            <div className="flex justify-end mb-8">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-text-muted hover:text-text transition-colors cursor-pointer"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-xl font-medium tracking-wide transition-colors",
                    pathname === link.href
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Button
                href={siteConfig.nav.ctaHref}
                variant="secondary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {siteConfig.nav.ctaText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
