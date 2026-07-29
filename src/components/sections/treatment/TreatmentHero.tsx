'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentHeroProps {
  treatment: TreatmentData;
  className?: string;
}

const snapshotKeys: Array<{ key: keyof TreatmentData['snapshot']; label: string }> = [
  { key: 'duration', label: 'Duration' },
  { key: 'comfortLevel', label: 'Comfort Level' },
  { key: 'downtime', label: 'Downtime' },
  { key: 'visibleResults', label: 'Visible Results' },
  { key: 'suitableFor', label: 'Suitable For' },
  { key: 'sessions', label: 'Sessions' },
];

export function TreatmentHero({ treatment, className }: TreatmentHeroProps) {
  return (
    <section
      id="treatment-hero"
      className={cn(
        'relative w-full bg-moon-ivory border-b border-charcoal/10 arch-light-wash-top',
        className
      )}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 pt-[96px] md:pt-[112px] pb-16 md:pb-20 flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

        {/* ── LEFT: Text Column ── */}
        <div className="w-full lg:w-[55%] flex flex-col">

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
            <span className="w-1.5 h-1.5 rounded-full border border-botanical/40 bg-botanical/15 shrink-0 inline-block" />
            <Link
              href="/treatments"
              className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-stone-gray/60 hover:text-botanical transition-colors duration-300"
            >
              Treatments
            </Link>
            <span className="w-1.5 h-1.5 rounded-full border border-botanical/40 bg-botanical/15 shrink-0 inline-block" />
            <span className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-stone-gray/70">
              {treatment.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full border border-botanical/40 bg-botanical/15 shrink-0 inline-block" />
            <span className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-botanical font-medium">
              {treatment.name}
            </span>
          </motion.nav>

          {/* Treatment Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2, duration: 1.1 }}
            className="font-display text-charcoal uppercase leading-[1.0] tracking-[-0.03em] text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-normal mb-6"
          >
            {treatment.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.3, duration: 1.0 }}
            className="font-sans text-stone-gray text-[15px] sm:text-[16px] leading-[1.8] font-light max-w-[440px] mb-10"
          >
            {treatment.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.45, duration: 0.9 }}
          >
            <Link
              href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
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

        {/* ── RIGHT: Treatment Snapshot Panel ── */}
        <div className="relative w-full lg:w-[45%] lg:max-w-[420px]">
          {/* Soft ambient moonlight halo */}
          <div className="absolute -inset-4 rounded-full bg-[#BBA175]/10 blur-[40px] pointer-events-none" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.35, duration: 1.0 }}
            className="relative w-full border border-charcoal/10 rounded-[2px] overflow-hidden bg-soft-ivory luna-soft-shadow"
          >
          {/* Panel Header */}
          <div className="px-6 py-4 border-b border-charcoal/10">
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-stone-gray font-medium">
              Treatment Snapshot
            </span>
          </div>

          {/* Snapshot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-charcoal/8">
            {snapshotKeys.map(({ key, label }, idx) => (
              <div
                key={key}
                className={cn(
                  'px-6 py-5 flex flex-col gap-1 border-charcoal/8',
                  // Draw right border on odd columns, bottom border on all except last two rows
                  idx % 2 === 0 ? 'sm:border-r' : '',
                  idx < snapshotKeys.length - 2 ? 'sm:border-b' : ''
                )}
              >
                <span className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-stone-gray/70 font-medium">
                  {label}
                </span>
                <span className="font-sans text-[0.85rem] text-charcoal font-light leading-snug">
                  {treatment.snapshot[key]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      </div>
    </section>
  );
}
