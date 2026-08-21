'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FacialsHeroProps {
  className?: string;
}

export function FacialsHero({ className }: FacialsHeroProps) {
  return (
    <section
      id="facials-hero"
      className={cn(
        'relative w-full bg-moon-ivory overflow-hidden',
        className,
      )}
    >
      {/* Subtle ambient top wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,253,248,0.6) 0%, transparent 40%)',
        }}
      />
      {/* Gold ambient glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 w-[60%] h-[70%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(185,152,91,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12">
        {/* Push below fixed header */}
        <div className="pt-32 md:pt-40 pb-20 md:pb-28">

          {/* Eyebrow row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center gap-5 mb-10"
          >
            <div className="w-12 h-px bg-charcoal/15" />
            <span className="font-sans text-xs tracking-tight uppercase text-stone-gray/70">
              Clinical Facials
            </span>
            <div className="flex-1 h-px bg-charcoal/[0.06]" />
            <span className="font-sans text-xs tracking-tight uppercase text-stone-gray/40 hidden sm:block">
              22Luna Sanctuary
            </span>
          </motion.div>

          {/* Main headline — full-width editorial display */}
          <div className="relative">
            {/* Ghost "SKIN" watermark behind headline */}
            <span
              aria-hidden="true"
              className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-light text-charcoal/[0.025] leading-none select-none pointer-events-none hidden lg:block"
              style={{ fontSize: 'clamp(10rem, 28vw, 26rem)' }}
            >
              SKIN
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display font-light text-charcoal leading-[0.92] tracking-tight uppercase relative z-10"
              style={{ fontSize: 'clamp(3.8rem, 10vw, 10rem)' }}
            >
              The Art Of
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative z-10"
            >
              <span
                className="font-display italic font-light text-botanical leading-[0.92] tracking-tight uppercase block"
                style={{ fontSize: 'clamp(3.8rem, 10vw, 10rem)' }}
              >
                Better Skin.
              </span>
            </motion.div>
          </div>

          {/* Bottom row: copy left, CTA right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="mt-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            {/* Supporting copy — 16px desktop, 15px mobile, min 14px */}
            <p className="font-sans font-light text-stone-gray leading-[1.85] text-[15px] sm:text-base max-w-[500px]">
              From foundational skin maintenance to advanced, result-driven
              facial experiences, our clinical facials are designed to meet
              your skin where it is — and take it further.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <a
                href="#facial-tiers"
                className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-xs uppercase tracking-tight px-7 py-3.5 transition-all duration-300 hover:bg-botanical/90 group"
              >
                Explore Facials
                <ArrowUpRight size={14} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20facial%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 text-charcoal/70 font-sans text-xs uppercase tracking-tight px-7 py-3.5 transition-all duration-300 hover:border-botanical hover:text-botanical group"
              >
                Book Consultation
                <ArrowUpRight size={14} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bottom thin rule + scroll label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 flex items-center gap-5"
          >
            <div className="h-px flex-1 bg-charcoal/[0.07]" />
            <span className="font-sans text-xs tracking-tight uppercase text-charcoal/40 shrink-0">
              Five levels of facial care
            </span>
            <div className="h-px w-8 bg-charcoal/[0.07]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
