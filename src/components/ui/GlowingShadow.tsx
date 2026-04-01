"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingShadowProps {
  children: ReactNode;
  className?: string;
}

export function GlowingShadow({ children, className }: GlowingShadowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("glow-visible", entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("glow-card", className)}>
      {children}
    </div>
  );
}
