"use client";

import { EtheralShadow } from "@/components/ui/EtheralShadow";

export function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <EtheralShadow
        color="rgba(140, 140, 145, 0.8)"
        animation={{ scale: 60, speed: 40 }}
        noise={{ opacity: 0.3, scale: 1 }}
        sizing="fill"
      />
    </div>
  );
}
