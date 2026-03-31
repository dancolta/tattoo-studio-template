import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-surface-elevated/80 border border-white/[0.06] rounded-xl p-5 md:p-10 min-h-[180px] md:min-h-[280px] h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-accent text-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-text/90 text-sm md:text-lg leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <p className="mt-4 md:mt-6 text-xs md:text-sm font-medium text-accent">
        {testimonial.author}
      </p>
    </div>
  );
}
