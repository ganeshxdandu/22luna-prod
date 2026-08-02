'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { fadeUp, scaleIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface FoundersStoryProps {
  className?: string;
}

export function FoundersStory({ className }: FoundersStoryProps) {
  return (
    <section
      id="founders-story"
      className={cn(
        'relative w-full bg-midnight min-h-screen lg:h-screen flex flex-col justify-between px-6 pt-6 pb-0 md:p-8 overflow-hidden select-none',
        className
      )}
    >
      {/* ── Background Giant Watermark SVG (Inverted for white/light color on dark bg) ── */}
      <div className="absolute top-8 left-0 w-full z-0 px-6 md:px-8 select-none pointer-events-none">
        <CloudinaryImage
          src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785160109/THE_FOUNDER_acqvrj.svg"
          alt="The Founder"
          width={1200}
          height={200}
          sizes="100vw"
          className="w-full h-auto opacity-50"
        />
      </div>

      {/* ── Radial Glow Spotlight for Depth of Field (Desktop & Mobile) ── */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70vh] h-[50vh] rounded-full bg-botanical/20 blur-[120px] select-none pointer-events-none z-0 hidden lg:block" />
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[280px] h-[200px] rounded-full bg-botanical/20 blur-[70px] select-none pointer-events-none z-0 lg:hidden" />

      {/* ── Centered Content Wrapper (Constrained by max-w-site for ultra-wide screen alignment) ── */}
      <div className="relative lg:absolute lg:inset-0 w-full h-auto lg:h-full max-w-site mx-auto px-4 sm:px-6 md:px-8 pointer-events-none z-20 flex flex-col justify-start">
        
        {/* Top Row: Section Metadata */}
        <div className="flex items-center justify-between w-full pt-6 md:pt-8 pointer-events-auto">
          <span className="font-sans text-[14px] uppercase tracking-tight text-white font-extralight">
            Founder&apos;s <span className="font-normal">Story</span>
          </span>
          <span className="font-sans text-[14px] uppercase tracking-tight text-white font-extralight">
            Chapter <span className="font-normal">01</span>
          </span>
        </div>

        {/* Left Column: Quote block */}
        <div className="w-full lg:w-[32%] lg:max-w-[420px] lg:absolute lg:left-8 lg:top-[30%] pointer-events-auto shrink-0 mt-14 lg:mt-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <p className="font-display italic text-[18px] lg:text-[20px] leading-[1.45] text-moon-ivory font-light mb-6">
              &ldquo;I wanted to create more than just a medical practice. I wanted to redefine what a visit to a clinic could feel like.&rdquo;
            </p>
            <div className="flex flex-col">
              <span className="font-display text-sm tracking-wide text-moon-ivory">
                Dr. Niharika
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-moon-ivory/50 mt-1 font-light">
                Founder & Medical Director
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative description & navigation */}
        <div className="w-full lg:w-[34%] lg:max-w-[380px] lg:absolute lg:right-8 lg:bottom-24 pointer-events-auto shrink-0 flex flex-col items-start text-left mt-16 lg:mt-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.3 }}
            className="flex flex-col items-start gap-6"
          >
            <p className="font-sans text-moon-ivory/80 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] font-light text-left">
              22Luna began with a simple belief that exceptional medical care should feel as reassuring as it is effective. Guided by science, compassion, and thoughtful design, Dr. Niharika has built a clinic where every decision is made with one goal in mind: creating a better experience for every patient.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Center Column: Portrait (Absolute Bottom on Desktop, h-[85vh] to prevent head clipping) ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 lg:h-[85vh] lg:w-[85vh] overflow-visible select-none pointer-events-none hidden lg:block">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1, duration: 1.3 }}
          className="relative w-full h-full"
        >
          <CloudinaryImage
            src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785141712/doctor_h1oeb7.png"
            alt="Dr. Niharika Mandhyan - Founder of 22Luna"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 85vh"
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>

      {/* ── Mobile Layout Bottom Portrait (Fills the end of the section on mobile) ── */}
      <div className="lg:hidden flex flex-col items-center justify-center pt-8 z-10 w-full mt-auto">
        <div className="relative w-[320px] sm:w-[380px] aspect-[9/10] overflow-visible">
          <CloudinaryImage
            src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785141712/doctor_h1oeb7.png"
            alt="Dr. Niharika Mandhyan - Founder of 22Luna"
            fill
            sizes="(max-width: 768px) 320px, 380px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Independent floating Chapter 02 link at the bottom-right corner of the section */}
      <div className="absolute bottom-6 right-4 sm:right-6 md:right-8 pointer-events-auto z-25">
        <a
          href="#different-kind"
          className="font-sans text-[14px] uppercase tracking-tight text-moon-ivory/60 hover:text-moon-ivory transition-colors cursor-pointer font-extralight"
        >
          Chapter <span className="font-normal">02 ↓</span>
        </a>
      </div>

    </section>
  );
}
