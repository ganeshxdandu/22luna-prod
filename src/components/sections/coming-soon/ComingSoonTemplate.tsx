'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ComingSoonTemplateProps {
  categoryLabel: string;
  headline: string;
  copy: string;
  microcopy: string;
  className?: string;
}

export function ComingSoonTemplate({
  categoryLabel,
  headline,
  copy,
  microcopy,
  className,
}: ComingSoonTemplateProps) {
  return (
    <section
      className={cn(
        'relative w-full min-h-[calc(100vh-72px)] bg-moon-ivory flex items-center justify-center overflow-hidden py-24 md:py-32 px-6 md:px-8 border-b border-charcoal/10 select-none',
        className
      )}
    >
      {/* ── Whimsical Detail 1: Oversized Drifting Lunar Halo ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.06, 0.14, 0.06],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[600px] sm:w-[750px] aspect-square rounded-full bg-gradient-to-tr from-[#BBA175]/30 via-botanical/20 to-transparent blur-[120px]"
        />

        {/* Layered Translucent Concentric Rings */}
        <div className="absolute w-[400px] sm:w-[520px] aspect-square rounded-full border border-charcoal/5 pointer-events-none" />
        <div className="absolute w-[280px] sm:w-[360px] aspect-square rounded-full border border-botanical/10 pointer-events-none" />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 max-w-[680px] w-full flex flex-col items-center text-center">

        {/* Whimsical Detail 2: Tiny Lunar Phase Accent + Category Label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.1, duration: 0.8 }}
          className="mb-6 flex items-center gap-3"
        >
          {/* Subtle lunar phase indicator */}
          <div className="flex items-center gap-1 opacity-70">
            <span className="w-2 h-2 rounded-full border border-botanical bg-botanical/20" />
            <span className="w-2.5 h-2.5 rounded-full border border-botanical bg-botanical" />
            <span className="w-2 h-2 rounded-full border border-botanical bg-botanical/20" />
          </div>

          <span className="font-sans text-[0.7rem] tracking-[0.24em] uppercase text-botanical font-medium">
            {categoryLabel}
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.2, duration: 1.1 }}
          className="font-display text-charcoal uppercase leading-[1.04] tracking-[-0.03em] text-[2.5rem] sm:text-[3.25rem] lg:text-[3.8rem] font-normal mb-6"
        >
          {headline}
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.35, duration: 1.0 }}
          className="font-sans text-stone-gray text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light mb-10 max-w-[560px]"
        >
          {copy}
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.5, duration: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[440px] mb-10"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-7 py-3.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
          >
            <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            Return Home
          </Link>

          <Link
            href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-limestone text-charcoal border border-charcoal/10 font-sans text-[0.72rem] uppercase px-7 py-3.5 tracking-tight transition-all duration-300 hover:border-charcoal/30 group"
          >
            Book Consultation
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Whimsical Reassuring Microcopy */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.65, duration: 0.9 }}
          className="pt-6 border-t border-charcoal/10 w-full max-w-[360px]"
        >
          <p className="font-sans text-[0.75rem] text-stone-gray/80 font-light tracking-wide italic">
            &ldquo;{microcopy}&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
