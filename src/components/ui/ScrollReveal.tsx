"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn(
        !reducedMotion && "scroll-reveal",
        (!reducedMotion && isIntersecting) && "revealed",
        className
      )}
      style={!reducedMotion && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
