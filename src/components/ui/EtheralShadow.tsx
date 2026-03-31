"use client";

import React, { useId, type CSSProperties, type ReactNode } from "react";

interface AnimationConfig {
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

interface EtheralShadowProps {
  sizing?: "fill" | "stretch";
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number
): number {
  if (fromLow === fromHigh) return toLow;
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

export function EtheralShadow({
  sizing = "fill",
  color = "rgba(128, 128, 128, 1)",
  animation,
  noise,
  style,
  className,
  children,
}: EtheralShadowProps) {
  const rawId = useId();
  const id = `etheral-${rawId.replace(/:/g, "")}`;
  const animationEnabled = animation && animation.scale > 0;

  const displacementScale = React.useMemo(
    () => animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0,
    [animation?.scale]
  );
  const smilDuration = React.useMemo(
    () => animation ? mapRange(animation.speed, 1, 100, 1000, 50) / 25 : 1,
    [animation?.speed]
  );

  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
          willChange: animationEnabled ? "filter" : "auto",
        }}
      >
        {animationEnabled && (
          <svg style={{ position: "absolute" }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves={2}
                  baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed={0}
                  type="turbulence"
                />
                <feColorMatrix
                  in="undulation"
                  type="hueRotate"
                  values="0"
                >
                  <animate
                    attributeName="values"
                    from="0"
                    to="360"
                    dur={`${smilDuration}s`}
                    repeatCount="indefinite"
                  />
                </feColorMatrix>
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}
        <div
          style={{
            backgroundColor: color,
            maskImage:
              "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')",
            maskSize: sizing === "stretch" ? "100% 100%" : "cover",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Children rendered on top */}
      {children && (
        <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>
          {children}
        </div>
      )}

      {noise && noise.opacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
            backgroundSize: noise.scale * 200,
            backgroundRepeat: "repeat",
            opacity: noise.opacity / 2,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
