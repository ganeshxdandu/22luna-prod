'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentCTAProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentCTA({ treatment, className }: TreatmentCTAProps) {
  const title = treatment.ctaTitle ?? 'Not Sure If This Is Right For You?';
  const subtitle =
    treatment.ctaSubtitle ??
    'Not every treatment is right for every patient — and that is exactly why consultation matters. The goal is not to push you toward a procedure. The goal is to help you make the right decision.';

  return (
    <section
      className={cn(
        'bg-moon-ivory py-16 md:py-24 lg:py-28 px-6 md:px-8 w-full select-none',
        className
      )}
    >
      <div className="max-w-site mx-auto w-full">

        {/* Banner Container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative w-full rounded-[16px] md:rounded-[24px] bg-[#BBA175] py-16 md:py-20 lg:py-24 px-6 md:px-12 text-center overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Subtle diamond background pattern */}
          <div
            className="absolute inset-0 opacity-[0.09] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23ffffff' stroke-width='1.2'/%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3Cpath d='M30 20 L40 30 L30 40 L20 30 Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
          />

          {/* Soft breathing ambient moonlight glow */}
          <motion.div
            animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-white/15 blur-[100px] pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 max-w-[680px] flex flex-col items-center">

            {/* Eyebrow */}
            <span className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-white/60 font-medium mb-6 block">
              Book a Consultation
            </span>

            <h2 className="font-display text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] text-white leading-tight tracking-tight font-light uppercase mb-5">
              {title}
            </h2>

            <p className="text-white/80 font-sans font-light text-xs md:text-[13px] tracking-wide leading-[1.75] max-w-[540px] mb-8">
              {subtitle}
            </p>

            <Link
              href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#BBA175] font-sans font-medium text-sm md:text-[15px] py-4 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              Book Consultation
              <ArrowUpRight size={15} strokeWidth={2.5} className="mt-0.5" />
            </Link>

            {/* Reassurance note */}
            <p className="mt-6 font-sans text-[0.68rem] text-white/50 font-light tracking-wide">
              No commitment. No pressure. Just an honest conversation.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
