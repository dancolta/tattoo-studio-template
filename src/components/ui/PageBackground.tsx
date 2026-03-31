"use client";

import { useEffect, useState } from "react";
import { EtheralShadow } from "@/components/ui/EtheralShadow";

export function PageBackground() {
  const [isActive, setIsActive] = useState(true);
  const [color, setColor] = useState("rgba(140, 140, 145, 0.8)");

  useEffect(() => {
    const handleVisibility = () => {
      setIsActive(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Read themed color from CSS variable (set by .theme-vibrant on body)
    const val = getComputedStyle(document.body).getPropertyValue("--ethereal-color").trim();
    if (val) setColor(val);

    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div
      data-page-bg
      className="fixed inset-0 -z-10 opacity-50"
      style={{ backfaceVisibility: "hidden" }}
    >
      <EtheralShadow
        color={color}
        animation={isActive ? { scale: 60, speed: 40 } : undefined}
        noise={{ opacity: 0.3, scale: 1 }}
        sizing="fill"
      />
    </div>
  );
}
