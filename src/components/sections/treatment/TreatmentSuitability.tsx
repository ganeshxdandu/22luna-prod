'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentSuitabilityProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentSuitability({ treatment, className }: TreatmentSuitabilityProps) {
  return (
    <section
      id="treatment-suitability"
      className={cn('relative w-full bg-soft-ivory border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8">

        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-10 md:mb-14"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            Patient Suitability
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-normal max-w-[520px]">
            Is this treatment right for you?
          </h2>
        </motion.div>

        {/* Two Column Suitability Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-charcoal/10">

          {/* IDEAL FOR */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={{ delay: 0.2 }}
            className="py-10 pr-0 lg:pr-16 lg:border-r border-charcoal/10"
          >
            <h3 className="font-sans text-charcoal text-[0.65rem] tracking-[0.2em] uppercase font-medium mb-6">
              Ideal For
            </h3>
            <ul className="flex flex-col gap-0 divide-y divide-charcoal/8">
              {treatment.suitability.idealFor.map((item, i) => (
                <li
                  key={i}
                  className="py-4 flex items-start gap-4"
                >
                  {/* Subtle indicator */}
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full bg-botanical shrink-0"
                    aria-hidden
                  />
                  <span className="font-sans text-charcoal text-[0.82rem] leading-[1.65] font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ADVISED AGAINST */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={{ delay: 0.3 }}
            className="py-10 pl-0 lg:pl-16"
          >
            <h3 className="font-sans text-charcoal text-[0.65rem] tracking-[0.2em] uppercase font-medium mb-6">
              When We May Advise Against It
            </h3>
            <ul className="flex flex-col gap-0 divide-y divide-charcoal/8">
              {treatment.suitability.advisedAgainst.map((item, i) => (
                <li
                  key={i}
                  className="py-4 flex items-start gap-4"
                >
                  {/* Subtle indicator */}
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full bg-stone-gray/50 shrink-0"
                    aria-hidden
                  />
                  <span className="font-sans text-stone-gray text-[0.82rem] leading-[1.65] font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Disclaimer note */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.4 }}
          className="mt-8 font-sans text-[0.72rem] text-stone-gray/70 font-light leading-relaxed max-w-[520px]"
        >
          This is a guide, not a definitive list. Your suitability will always be assessed individually during a consultation before any treatment is recommended.
        </motion.p>

      </div>
    </section>
  );
}
