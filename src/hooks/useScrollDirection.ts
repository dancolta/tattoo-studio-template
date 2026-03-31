"use client";

import { useState, useEffect } from "react";

interface ScrollState {
  direction: "up" | "down";
  scrollY: number;
  isAtTop: boolean;
}

export function useScrollDirection(threshold = 10): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: "up",
    scrollY: 0,
    isAtTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let prevIsAtTop = window.scrollY < 80;
    let prevDirection: "up" | "down" = "up";

    function update() {
      const scrollY = window.scrollY;
      const isAtTop = scrollY < 80;
      const diff = scrollY - lastScrollY;
      const direction: "up" | "down" = Math.abs(diff) >= threshold
        ? (diff > 0 ? "down" : "up")
        : prevDirection;

      // Only trigger re-render when something actually changed
      if (isAtTop !== prevIsAtTop || direction !== prevDirection) {
        prevIsAtTop = isAtTop;
        prevDirection = direction;
        if (Math.abs(diff) >= threshold) lastScrollY = scrollY;
        setState({ direction, scrollY, isAtTop });
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
