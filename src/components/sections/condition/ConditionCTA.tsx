'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConditionDetailData } from '@/lib/condition-detail-data';

export interface ConditionCTAProps {
  condition: ConditionDetailData;
  className?: string;
}

export function ConditionCTA({ condition, className }: ConditionCTAProps) {
  const title = condition.ctaTitle ?? `Discuss ${condition.name} In Consultation`;
  const subtitle =
    condition.ctaSubtitle ??
    "Every concern looks slightly different from person to person. The goal isn't to identify the perfect treatment online — the goal is to understand your skin, hair, or dental health properly before making any decisions.";

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

          {/* Soft ambient glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-white/10 blur-[100px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-[700px] flex flex-col items-center">

            {/* Eyebrow */}
            <span className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-white/60 font-medium mb-5 block">
              Begin With Understanding
            </span>

            <h2 className="font-display text-[1.8rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] text-white leading-tight tracking-tight font-light uppercase mb-5">
              {title}
            </h2>

            <p className="text-white/85 font-sans font-light text-xs md:text-[14px] tracking-wide leading-[1.75] max-w-[560px] mb-8">
              {subtitle}
            </p>

            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#BBA175] font-sans font-medium text-xs md:text-[13px] py-3.5 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              Book Consultation
              <ArrowUpRight size={15} strokeWidth={2.5} className="mt-0.5" />
            </Link>

            {/* Reassurance note */}
            <p className="mt-6 font-sans text-[0.7rem] text-white/50 font-light tracking-wide">
              No pressure. No rigid packages. Just an unhurried, honest assessment.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
