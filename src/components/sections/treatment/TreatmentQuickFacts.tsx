'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentQuickFactsProps {
  treatment: TreatmentData;
  className?: string;
}

const QUICK_FACT_ROWS: Array<{ key: keyof TreatmentData['quickFacts']; label: string }> = [
  { key: 'duration', label: 'Duration' },
  { key: 'comfort', label: 'Comfort' },
  { key: 'anaesthesia', label: 'Anaesthesia' },
  { key: 'downtime', label: 'Downtime' },
  { key: 'visibleResults', label: 'Visible Results' },
  { key: 'returnToRoutine', label: 'Return to Routine' },
  { key: 'sessionsNeeded', label: 'Sessions Needed' },
  { key: 'bestFor', label: 'Best For' },
  { key: 'suitableSkinTypes', label: 'Suitable Skin Types' },
];

export function TreatmentQuickFacts({ treatment, className }: TreatmentQuickFactsProps) {
  return (
    <section
      id="treatment-quick-facts"
      className={cn('relative w-full bg-soft-ivory border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

        {/* ── LEFT: Heading (sticky on desktop) ── */}
        <div className="w-full lg:w-[32%] shrink-0">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="lg:sticky lg:top-[120px]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-5">
              At a Glance
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
              Quick Facts.
            </h2>
            <p className="font-sans text-stone-gray text-[0.8rem] leading-[1.8] font-light mt-4 max-w-[260px]">
              A clear summary of the most frequently asked practical questions.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: Facts Table ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={{ delay: 0.2 }}
          className="w-full lg:w-[62%] border-t border-charcoal/10"
        >
          {QUICK_FACT_ROWS.map(({ key, label }, i) => (
            <div
              key={key}
              className={cn(
                'flex items-baseline justify-between gap-8 py-5 border-b border-charcoal/8',
                i === 0 ? '' : ''
              )}
            >
              {/* Label */}
              <span className="font-sans text-[0.72rem] tracking-[0.1em] uppercase text-stone-gray/70 font-medium shrink-0 min-w-[130px]">
                {label}
              </span>

              {/* Value */}
              <span className="font-sans text-charcoal text-[0.85rem] leading-snug font-light text-right">
                {treatment.quickFacts[key]}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
