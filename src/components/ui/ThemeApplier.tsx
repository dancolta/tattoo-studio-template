"use client";

import { useEffect } from "react";

/**
 * Applies a theme class to <body> so CSS variables cascade to all
 * siblings (PageBackground, etc.) — not just template children.
 */
export function ThemeApplier({ theme }: { theme: string }) {
  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  return null;
}
