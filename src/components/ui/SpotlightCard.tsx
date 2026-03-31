"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let cachedRect = card.getBoundingClientRect();

    const handleMove = (e: PointerEvent) => {
      pendingRef.current = {
        x: e.clientX - cachedRect.left,
        y: e.clientY - cachedRect.top,
      };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          if (pendingRef.current && card) {
            card.style.setProperty("--x", `${pendingRef.current.x}px`);
            card.style.setProperty("--y", `${pendingRef.current.y}px`);
            card.style.setProperty("--opacity", "1");
          }
          rafRef.current = null;
        });
      }
    };

    const handleLeave = () => {
      card.style.setProperty("--opacity", "0");
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const handleResize = () => {
      cachedRect = card.getBoundingClientRect();
    };

    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerleave", handleLeave);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn("spotlight-card relative rounded-2xl cursor-pointer", className)}
    >
      {children}
    </div>
  );
}
