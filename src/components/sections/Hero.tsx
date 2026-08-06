'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
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

      {/* ── Left Vertical Label (Pure CSS Animation) ── */}
      <div
        className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 css-fade-in-delayed-1"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
      >
        <span className="text-moon-ivory/60 font-sans tracking-tight uppercase"
          style={{ fontSize: '12px', letterSpacing: '0.07em' }}
        >
          Skin · Hair · Dental · IV
        </span>
      </div>

      {/* ── Right Vertical Label: SCROLL DOWN (Pure CSS Animation) ── */}
      <div
        className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center css-fade-in-delayed-2"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
      >
        <span
          className="text-moon-ivory/60 font-sans tracking-[0.07em] uppercase"
          style={{ fontSize: '12px' }}
        >
          Scroll Down →
        </span>
      </div>

      {/* ── Bottom Content Area ── */}
      <div className="absolute bottom-0 left-0 right-0 py-8">
        <div className="max-w-site mx-auto w-full px-6 md:px-8 flex flex-col sm:flex-row sm:items-end justify-between items-start gap-6 sm:gap-0">
          
          {/* Headline (Pure CSS Animation) */}
          <div className="max-w-[90%] sm:max-w-[65%] md:max-w-[55%] lg:max-w-[50%] css-fade-up-headline">
            <h1
              className="text-moon-ivory font-display leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4.444vw, 4rem)', fontWeight: 400 }}
            >
              Elevated Aesthetics.{' '}
              <br />
              Precision Medical Care.
            </h1>
          </div>

          {/* Explore Treatments CTA (Pure CSS Animation) */}
          <div className="mb-1 css-fade-up-cta">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 tracking-normal rounded-full bg-moon-ivory/15 backdrop-blur-sm border border-moon-ivory/30 text-moon-ivory font-sans text-[0.75rem] uppercase px-6 py-3.5 transition-all duration-500 hover:bg-moon-ivory hover:text-charcoal hover:border-moon-ivory group"
            >
              Explore Treatments
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
