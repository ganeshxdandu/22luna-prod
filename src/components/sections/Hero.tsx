'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp } from '@/lib/animations';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { cn } from '@/lib/utils';

const HERO_IMAGE_PUBLIC_ID = 'hero_s6fbu6';


export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn("relative w-full h-screen min-h-[600px] overflow-hidden", className)}
    >
      {/* ── Background Image ── */}
      <CloudinaryImage
        src={HERO_IMAGE_PUBLIC_ID}
        alt="22luna – Elevated Aesthetics, Precision Medical Care"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ── 20% Black Overlay for contrast ── */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ── Subtle dark gradient overlay for text legibility ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-transparent" />

      {/* ── Soft Breathing Moonlight Glow Layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.04, 0.09, 0.04], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 left-1/4 w-[600px] h-[600px] rounded-full bg-[#BBA175]/25 blur-[140px]"
        />
      </div>

      {/* ── Left Vertical Label ── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={{ delay: 0.6, duration: 1 }}
        className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
      >
        <span className="text-moon-ivory/60 font-sans tracking-tight uppercase"
          style={{ fontSize: '0.625rem', letterSpacing: '0.07em' }}
        >
          Skin · Hair · Dental · IV
        </span>
      </motion.div>

      {/* ── Right Vertical Label: SCROLL DOWN ── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={{ delay: 0.8, duration: 1 }}
        className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
      >
        <span
          className="text-moon-ivory/60 font-sans tracking-[0.07em] uppercase"
          style={{ fontSize: '0.625rem' }}
        >
          Scroll Down →
        </span>
      </motion.div>

      {/* ── Bottom Content Area ── */}
      <div className="absolute bottom-0 left-0 right-0 px-8 py-8 flex flex-col sm:flex-row sm:items-end justify-between items-start gap-6 sm:gap-0">

        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.2, duration: 1.1 }}
          className="max-w-[90%] sm:max-w-[65%] md:max-w-[55%] lg:max-w-[50%]"
        >
          <h1
            className="text-moon-ivory font-display leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 4.444vw, 4rem)', fontWeight: 400 }}
          >
            Elevated Aesthetics.{' '}
            <br />
            Precision Medical Care.
          </h1>
        </motion.div>

        {/* Book Consultation CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.5, duration: 1 }}
          className="mb-1"
        >
          <Link
            href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tracking-normal rounded-full bg-moon-ivory/15 backdrop-blur-sm border border-moon-ivory/30 text-moon-ivory font-sans text-[0.75rem] uppercase px-6 py-3.5 transition-all duration-500 hover:bg-moon-ivory hover:text-charcoal hover:border-moon-ivory group"
          >
            Book Consultation
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
