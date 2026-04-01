"use client";

import { useRef, useCallback, useEffect, memo } from "react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import TestimonialCard from "@/components/home/TestimonialCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials({ config }: { config?: SiteConfig }) {
  const { testimonials } = config || defaultConfig;
  const duplicated = [...testimonials.items, ...testimonials.items];

  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Auto-scroll with rAF — fully stops loop when off-screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pxPerFrame = 0.4;
    // Cache scrollWidth and track position in JS to avoid layout thrash
    let cachedHalf = container.scrollWidth / 2;
    let pos = 0;

    const tick = () => {
      if (!isPaused.current && container) {
        pos += pxPerFrame;
        if (pos >= cachedHalf) pos -= cachedHalf;
        container.scrollLeft = pos;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const stopLoop = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const visObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0, rootMargin: "100px" }
    );
    visObs.observe(container);

    return () => {
      stopLoop();
      visObs.disconnect();
    };
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.clientX;
    scrollStartX.current = container.scrollLeft;
    container.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const delta = dragStartX.current - e.clientX;
    containerRef.current.scrollLeft = scrollStartX.current + delta;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    isDragging.current = false;
    isPaused.current = false;
    containerRef.current.releasePointerCapture(e.pointerId);
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-32 overflow-hidden" style={{ contain: "layout style" }}>
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            {testimonials.heading}
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={100}>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div
            ref={containerRef}
            className="flex gap-3 md:gap-6 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {duplicated.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-[550px] lg:w-[600px]"
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
