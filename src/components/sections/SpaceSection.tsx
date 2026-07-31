'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

export const SPACE_ASSETS = {
  ARCH_ONE: "https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607734/arch-one_vzwaxr.png",
  ARCH_TWO: "https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607707/arch-two_tutte1.png",
  SPACE_ONE: "https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607603/space-one_sze6zc.png",
  SPACE_TWO: "https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607593/space-two_qvblxy.png",
  SPACE_THREE: "https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607577/space-three_ugvc0n.png",
  SPACE_FOUR: "https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607557/space-four_eidtzs.png",
  NOISE: "https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607744/noise-v2_idnonf.png",
};

export interface SpaceSectionProps {
  className?: string;
}

export function SpaceSection({ className }: SpaceSectionProps) {
  const [active, setActive] = React.useState<number | null>(null);

  const images = [
    SPACE_ASSETS.ARCH_ONE,
    SPACE_ASSETS.SPACE_ONE,
    SPACE_ASSETS.SPACE_TWO,
    SPACE_ASSETS.ARCH_TWO,
    SPACE_ASSETS.SPACE_THREE,
    SPACE_ASSETS.SPACE_FOUR,
  ];

  const getCardClass = (i: number, layout: string = "") => {
    const isDimmed = active !== null && active !== i;

    return cn(
      "relative overflow-hidden rounded-[8px] bg-charcoal/[0.03] border border-charcoal/[0.04] transition-all duration-[800ms] ease-[cubic-bezier(.22,.61,.36,1)] group cursor-pointer",
      isDimmed ? "opacity-40 saturate-[0.7] blur-[1px]" : "opacity-100",
      layout
    );
  };

  return (
    <section
      className={cn(
        "bg-moon-ivory py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 w-full relative overflow-hidden select-none",
        className
      )}
    >
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-10">
        <CloudinaryImage
          src={SPACE_ASSETS.NOISE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Soft Gold Accent Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-site mx-auto relative z-10 flex flex-col">
        
        {/* ── Centered Header Area ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[650px] flex flex-col items-center text-center"
          >
            <span className="text-[0.75rem] tracking-[0.2em] text-stone-gray uppercase block mb-3 font-sans font-medium">
              Aesthetics
            </span>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter text-charcoal mb-4">
              <span className="font-light">THE SPACE WE&apos;VE </span>
              <span className="text-botanical font-medium">DESIGNED</span>
            </h2>
            <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide">
              Quiet. Intentional. Considered.
            </p>
          </motion.div>
        </div>

        {/* ── Staggered Layout Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]">
          {images.map((img, i) => {
            const layoutMap = [
              "lg:col-[1] lg:row-[1/3]",   // Item 0 (Tall left)
              "lg:col-[2/4] lg:row-[1]",   // Item 1 (Wide top-right)
              "lg:col-[2] lg:row-[2]",     // Item 2 (Square middle)
              "lg:col-[3] lg:row-[2/4]",   // Item 3 (Tall right)
              "lg:col-[1] lg:row-[3]",     // Item 4 (Square bottom-left)
              "lg:col-[2] lg:row-[3]",     // Item 5 (Square bottom-middle)
            ];

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={getCardClass(i, layoutMap[i])}
              >
                {/* Image Component */}
                <div className="w-full h-full relative overflow-hidden">
                  <CloudinaryImage
                    src={img}
                    alt="Clinic space design detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] scale-[1.02] group-hover:scale-105"
                  />
                </div>

                {/* Soft depth gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Luxury light sweep sweep */}
                <div
                  className="absolute inset-0 opacity-0 transition duration-[1200ms] pointer-events-none"
                  style={{
                    background: "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                    transform: active === i ? "translateX(0%)" : "translateX(-120%)",
                    opacity: active === i ? 1 : 0,
                  }}
                />

                {/* Interactive dimming overlay */}
                <div
                  className="absolute inset-0 transition duration-700 pointer-events-none"
                  style={{
                    background: active !== null && active !== i ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0)",
                  }}
                />

                {/* Subtle premium border */}
                <div className="absolute inset-0 border border-charcoal/5 rounded-[8px] pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
