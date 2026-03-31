"use client";

import { useEffect, useState } from "react";
import { EtheralShadow } from "@/components/ui/EtheralShadow";

export function VibrantBackground() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setIsActive(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Hide default gray PageBackground — only one animation at a time
    const defaultBg = document.querySelector("[data-page-bg]") as HTMLElement;
    if (defaultBg) defaultBg.style.display = "none";

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (defaultBg) defaultBg.style.display = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 opacity-50 pointer-events-none"
      style={{ backfaceVisibility: "hidden" }}
    >
      <EtheralShadow
        color="rgba(244, 63, 94, 0.6)"
        animation={isActive ? { scale: 60, speed: 40 } : undefined}
        noise={{ opacity: 0.3, scale: 1 }}
        sizing="fill"
      />
    </div>
  );
}
