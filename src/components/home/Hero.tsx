"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import Button from "@/components/ui/Button";
import { EtheralShadow } from "@/components/ui/EtheralShadow";

const fadeUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Hero({
  config,
  etherealColor = "rgba(128, 128, 128, 1)",
}: {
  config?: SiteConfig;
  etherealColor?: string;
}) {
  const { hero } = config || defaultConfig;

  return (
    <section className="relative w-full min-h-screen pb-32 flex items-center justify-center">
      {/* Etheral shadow — fills entire hero, faded at bottom to blend with page bg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      >
        <EtheralShadow
          color={etherealColor}
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Faded tattoo photo — CSS mask fades all edges, no overlay divs */}
      <div
        className="absolute top-0 left-0 right-0 -bottom-48 z-[1] pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, black 15%, black 30%, rgba(0,0,0,0.3) 50%, transparent 65%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, black 15%, black 30%, rgba(0,0,0,0.3) 50%, transparent 65%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskComposite: "source-in",
        }}
      >
        <Image
          src={hero.imageSrc}
          alt="Tattoo studio atmosphere"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          className="object-cover object-center opacity-25 mix-blend-luminosity"
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="font-bold text-5xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tight text-accent"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {hero.heading.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </motion.h1>

        <motion.p
          className="text-text-muted text-base md:text-2xl max-w-xl mx-auto mt-5 md:mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-7 md:mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          <Button href={hero.ctaHref} size="lg">
            {hero.ctaText}
          </Button>
          <Button href="/works" variant="secondary" size="lg">
            View Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
