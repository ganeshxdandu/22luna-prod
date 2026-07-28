'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentBenefitsProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentBenefits({ treatment, className }: TreatmentBenefitsProps) {
  return (
    <section
      id="treatment-benefits"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8">

        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            What This Delivers
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-normal max-w-[400px]">
            Benefits.
          </h2>
        </motion.div>

        {/* Benefits Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-charcoal/10">
          {treatment.benefits.map((benefit, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const totalRows = Math.ceil(treatment.benefits.length / 3);
            const isLastRow = row === totalRows - 1;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.1 + (i % 3) * 0.08 }}
                className={cn(
                  'flex flex-col gap-5 py-10 pr-0 sm:pr-8',
                  // Bottom borders
                  !isLastRow ? 'border-b border-charcoal/10' : '',
                  // Mobile always has border-b
                  i < treatment.benefits.length - 1 ? 'border-b border-charcoal/10 sm:border-b-0' : '',
                  // Re-add bottom border for non-last rows on SM+
                  !isLastRow ? 'sm:border-b sm:border-charcoal/10' : '',
                  // Right column borders on desktop
                  col < 2 ? 'lg:border-r lg:border-charcoal/10 lg:pr-12' : '',
                  // Indent middle and right columns on desktop
                  col > 0 ? 'lg:pl-12' : '',
                )}
              >
                {/* Benefit number ghost */}
                <span className="font-display text-charcoal/[0.07] text-[2rem] leading-none font-light select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Benefit title */}
                <h3 className="font-sans text-charcoal text-[0.85rem] font-medium leading-snug tracking-tight">
                  {benefit.title}
                </h3>

                {/* Benefit description */}
                <p className="font-sans text-stone-gray text-[0.8rem] leading-[1.8] font-light">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
