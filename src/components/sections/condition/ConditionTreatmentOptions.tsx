'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConditionDetailData } from '@/lib/condition-detail-data';
import { TreatmentCard } from '@/components/sections/treatments/TreatmentCard';

export interface ConditionTreatmentOptionsProps {
  condition: ConditionDetailData;
  className?: string;
}

export function ConditionTreatmentOptions({ condition, className }: ConditionTreatmentOptionsProps) {
  return (
    <section
      id="condition-treatments"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 pb-12 md:pb-16 border-b border-charcoal/10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="w-full lg:w-[46%]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Solution Pathways
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal">
              Possible treatment options.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="w-full lg:w-[50%] lg:max-w-[500px]"
          >
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light">
              These procedures represent clinical pathways often recommended for this concern. During your consultation, we evaluate which single option or combined protocol is most appropriate for your skin biology.
            </p>
          </motion.div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {condition.suitableTreatments.map((treatment, idx) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              delay={0.08 * idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
