'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConditionDetailData } from '@/lib/condition-detail-data';

export interface ConditionPreventionProps {
  condition: ConditionDetailData;
  className?: string;
}

export function ConditionPrevention({ condition, className }: ConditionPreventionProps) {
  return (
    <section
      id="condition-prevention"
      className={cn('relative w-full bg-soft-ivory border-b border-charcoal/10 py-16 md:py-24', className)}
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
            Daily Habits
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.8rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal">
            Prevention & daily care.
          </h2>
          <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.75] font-light mt-3">
            Simple, effective habits that support barrier resilience and maintain clinical progress.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {condition.preventionTips.map((tip, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={{ delay: 0.08 * idx }}
              className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-6 sm:p-7 flex flex-col gap-3"
            >
              <span className="font-display text-botanical text-[1.3rem] font-light">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="font-sans text-charcoal text-[0.88rem] leading-[1.7] font-light">
                {tip}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
