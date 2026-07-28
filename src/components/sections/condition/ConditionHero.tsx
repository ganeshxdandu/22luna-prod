'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConditionDetailData } from '@/lib/condition-detail-data';

export interface ConditionHeroProps {
  condition: ConditionDetailData;
  className?: string;
}

export function ConditionHero({ condition, className }: ConditionHeroProps) {
  return (
    <section
      id="condition-hero"
      className={cn(
        'relative w-full bg-moon-ivory border-b border-charcoal/10',
        className
      )}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 pt-[104px] md:pt-[124px] pb-16 md:pb-24 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

        {/* Left Column: Category & Name */}
        <div className="w-full lg:w-[54%] flex flex-col">
          {/* Breadcrumb Navigation */}
          <motion.nav
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.05, duration: 0.8 }}
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 flex-wrap"
          >
            <Link
              href="/"
              className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-stone-gray/60 hover:text-botanical transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-stone-gray/30 text-[0.65rem] select-none">/</span>
            <Link
              href="/conditions"
              className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-stone-gray/60 hover:text-botanical transition-colors duration-300"
            >
              Conditions
            </Link>
            <span className="text-stone-gray/30 text-[0.65rem] select-none">/</span>
            <span className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-stone-gray/70">
              {condition.category}
            </span>
            <span className="text-stone-gray/30 text-[0.65rem] select-none">/</span>
            <span className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-botanical font-medium">
              {condition.name}
            </span>
          </motion.nav>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2, duration: 1.1 }}
            className="font-display text-charcoal uppercase leading-[1.0] tracking-[-0.03em] text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-normal mb-6"
          >
            {condition.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.3, duration: 1.0 }}
            className="font-sans text-stone-gray text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light max-w-[460px] mb-10"
          >
            {condition.tagline}
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.45, duration: 0.9 }}
          >
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-7 py-3.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
            >
              Book Consultation
              <ArrowUpRight
                size={13}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Reassuring Note Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.35, duration: 1.0 }}
          className="w-full lg:w-[42%] lg:max-w-[400px] border border-charcoal/10 rounded-[2px] p-7 md:p-8 bg-soft-ivory flex flex-col gap-4"
        >
          <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
            Clinical Perspective
          </span>
          <p className="font-sans text-charcoal text-[0.88rem] leading-[1.75] font-light">
            Concerns are simply starting points for conversation. This page is designed to inform, not to diagnose. Every individual presentation is unique.
          </p>
          <div className="pt-4 border-t border-charcoal/8 flex items-center justify-between">
            <span className="font-sans text-[0.72rem] text-stone-gray font-light">
              Doctor-Led Assessment Always
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
