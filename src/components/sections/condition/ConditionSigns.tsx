'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConditionDetailData } from '@/lib/condition-detail-data';

export interface ConditionSignsProps {
  condition: ConditionDetailData;
  className?: string;
}

export function ConditionSigns({ condition, className }: ConditionSignsProps) {
  return (
    <section
      id="condition-signs"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-12 md:mb-16 max-w-[540px]"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            Observation
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.8rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal">
            Signs you may notice.
          </h2>
          <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.75] font-light mt-3">
            What people often experience when navigating this concern.
          </p>
        </motion.div>

        {/* Editorial List */}
        <div className="border-t border-charcoal/10 divide-y divide-charcoal/10">
          {condition.signsNoticed.map((sign, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={{ delay: 0.08 * idx }}
              className="py-6 sm:py-7 flex items-baseline justify-between gap-6 group"
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-display text-charcoal/25 text-[1.2rem] sm:text-[1.4rem] font-light shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-charcoal text-[0.92rem] sm:text-[1.05rem] font-light leading-snug group-hover:text-botanical transition-colors duration-300">
                  {sign}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
