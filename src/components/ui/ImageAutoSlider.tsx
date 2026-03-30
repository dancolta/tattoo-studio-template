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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pxPerFrame = (reverse ? -1 : 1) * (60 / speed) * 0.5;

    const tick = () => {
      if (!isPaused.current && container) {
        container.scrollLeft += pxPerFrame;
        const half = container.scrollWidth / 2;
        if (!reverse && container.scrollLeft >= half) {
          container.scrollLeft -= half;
        } else if (reverse && container.scrollLeft <= 0) {
          container.scrollLeft += half;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    if (reverse) container.scrollLeft = container.scrollWidth / 2;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
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
                "relative flex-shrink-0 w-36 h-36 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden group cursor-pointer",
                imageClassName
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 pointer-events-none"
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
