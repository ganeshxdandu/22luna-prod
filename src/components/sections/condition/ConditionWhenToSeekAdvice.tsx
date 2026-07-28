'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConditionDetailData } from '@/lib/condition-detail-data';

export interface ConditionWhenToSeekAdviceProps {
  condition: ConditionDetailData;
  className?: string;
}

export function ConditionWhenToSeekAdvice({ condition, className }: ConditionWhenToSeekAdviceProps) {
  return (
    <section
      id="when-to-seek-advice"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

        {/* Left Column: Heading */}
        <div className="w-full lg:w-[44%] shrink-0">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="mb-4"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium">
              Professional Guidance
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.8rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal"
          >
            When should you seek advice?
          </motion.h2>
          <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.75] font-light mt-4 max-w-[400px]">
            Consultation is not about emergency; it is about replacing guesswork with an unhurried medical perspective.
          </p>
        </div>

        {/* Right Column: Reassuring Points List */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={{ delay: 0.25 }}
          className="w-full lg:w-[52%] lg:max-w-[540px] border-t border-charcoal/10 divide-y divide-charcoal/10"
        >
          {condition.adviceGuidance.map((item, idx) => (
            <div key={idx} className="py-5 flex items-start gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-botanical shrink-0 mt-[8px]" aria-hidden />
              <span className="font-sans text-charcoal text-[0.9rem] leading-[1.7] font-light">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
