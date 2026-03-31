"use client";

import { useEffect, useState } from "react";
import { EtheralShadow } from "@/components/ui/EtheralShadow";

export function PageBackground() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setIsActive(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 opacity-50"
      style={{ backfaceVisibility: "hidden" }}
    >
      <EtheralShadow
        color="rgba(140, 140, 145, 0.8)"
        animation={isActive ? { scale: 60, speed: 40 } : undefined}
        noise={{ opacity: 0.3, scale: 1 }}
        sizing="fill"
      />
    </div>
  );
}
