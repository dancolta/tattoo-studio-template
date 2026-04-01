"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/ui/Lightbox";

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageAutoSliderProps {
  images: SliderImage[];
  speed?: number;
  imageClassName?: string;
  className?: string;
  reverse?: boolean;
}

export function ImageAutoSlider({
  images,
  speed = 40,
  imageClassName,
  className,
  reverse = false,
}: ImageAutoSliderProps) {
  const duplicated = [...images, ...images];
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const hasMoved = useRef(false);

  const [lightbox, setLightbox] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Fully stop rAF when off-screen, restart on intersection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pxPerFrame = (reverse ? -1 : 1) * (60 / speed) * 0.5;
    // Cache scrollWidth and track position in JS to avoid layout thrash
    // (eliminates read-write-read pattern — single DOM write per frame)
    let cachedHalf = container.scrollWidth / 2;
    let pos = reverse ? cachedHalf : 0;
    container.scrollLeft = pos;

    const tick = () => {
      if (!isPaused.current && container) {
        pos += pxPerFrame;
        if (!reverse && pos >= cachedHalf) pos -= cachedHalf;
        else if (reverse && pos <= 0) pos += cachedHalf;
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

    // Initial scroll position already set above via pos variable

    return () => {
      stopLoop();
      visObs.disconnect();
    };
  }, [speed, reverse]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDragging.current = true;
    hasMoved.current = false;
    isPaused.current = true;
    dragStartX.current = e.clientX;
    scrollStartX.current = container.scrollLeft;
    container.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) > 3) hasMoved.current = true;
    containerRef.current.scrollLeft = scrollStartX.current + delta;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    isDragging.current = false;
    isPaused.current = false;
    containerRef.current.releasePointerCapture(e.pointerId);
  }, []);

  const handleClick = useCallback((src: string) => {
    if (!hasMoved.current) setLightbox(src);
  }, []);

  return (
    <>
      <div
        className={cn(
          "w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]",
          className
        )}
      >
        <div
          ref={containerRef}
          className="flex gap-3 md:gap-6 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {duplicated.map((image, index) => (
            <div
              key={index}
              onClick={() => handleClick(image.src)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              className={cn(
                "relative flex-shrink-0 w-48 h-60 md:w-72 md:h-[22rem] lg:w-80 lg:h-[26rem] rounded-xl overflow-hidden group cursor-pointer",
                imageClassName
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                className="object-cover transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:brightness-110 pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox src={lightbox} onClose={closeLightbox} />
    </>
  );
}
