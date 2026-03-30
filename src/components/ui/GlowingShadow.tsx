"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingShadowProps {
  children: ReactNode;
  className?: string;
}

export function GlowingShadow({ children, className }: GlowingShadowProps) {
  return (
    <div className={cn("glow-card", className)}>
      {children}
    </div>
  );
}
