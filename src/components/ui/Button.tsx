"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-xs",
  md: "px-8 py-4 text-xs",
  lg: "px-10 py-5 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const isSecondary = variant === "secondary";

  const inner = (
    <div
      className={cn(
        "glass-btn group relative flex items-center justify-center font-semibold uppercase tracking-[0.15em] overflow-hidden rounded-2xl hover:rounded-3xl cursor-pointer transition-all duration-700",
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
    >
      <div className="glass-btn-distortion absolute inset-0 z-0 overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-700" />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: isSecondary ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)" }}
      />
      <div className={cn(
        "absolute inset-0 z-20 overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-700",
        isSecondary ? "glass-btn-rim-secondary" : "glass-btn-rim-primary"
      )} />
      <span className="relative z-30 text-white">{children}</span>
    </div>
  );

  if (href) {
    return <Link href={href} className="inline-block">{inner}</Link>;
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className="inline-block cursor-pointer">
      {inner}
    </button>
  );
}
