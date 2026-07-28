'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ScienceBeforeHypeProps {
  className?: string;
}

export function ScienceBeforeHype({ className }: ScienceBeforeHypeProps) {
  return (
    <section
      id="science-before-hype"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10', className)}
    >
      {/* ── Main Content Container: 24px padding on mobile, 32px on desktop (p-6 md:p-8) ── */}
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
        
        {/* Left Column: Heading and metadata */}
        <div className="w-full lg:w-[40%] flex flex-col items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
          >
            <span className="font-sans text-[14px] uppercase tracking-tight text-botanical font-extralight">
              Chapter <span className="font-normal text-botanical">03</span>
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-display uppercase leading-[1.05] tracking-[-0.03em] text-[28px] sm:text-[34px] lg:text-[40px] mt-4"
          >
            <span className="text-charcoal block">Science Before</span>
            <span className="text-botanical block font-normal">Hype.</span>
          </motion.h2>
        </div>

        {/* Right Column: Paragraphs */}
        <div className="w-full lg:w-[50%] lg:max-w-[480px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.25 }}
            className="flex flex-col gap-6"
          >
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] font-light">
              Every technology at 22Luna earns its place. We don&apos;t invest because something is new or trending. We invest because the science is proven, the outcomes are consistent, and it genuinely improves the experience for our patients.
            </p>
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] font-light">
              Before introducing any treatment, we study the research, evaluate long-term clinical evidence, and ask one simple question: Will this create better outcomes for the people who trust us with their care?
            </p>
          </motion.div>
        </div>

      </div>

      {/* ── Bottom Full-Width Image ── */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-[21/9] overflow-hidden bg-soft-ivory">
        <Image
          src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785206441/ChatGPT_Image_Jul_13_2026_11_33_06_AM_s5uktt.png"
          alt="22Luna modern dental treatment room setting with advanced dental chair and scenic window view of green foliage"
          fill
          unoptimized
          className="object-cover object-center"
        />
        {/* Subtle depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
