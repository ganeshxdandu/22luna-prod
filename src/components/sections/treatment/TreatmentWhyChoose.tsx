'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentWhyChooseProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentWhyChoose({ treatment, className }: TreatmentWhyChooseProps) {
  return (
    <section
      id="treatment-why-choose"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8">

        {/* Section Label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-10 md:mb-14"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            Why Choose This Treatment
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-normal max-w-[480px]">
            Outcomes worth understanding.
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-charcoal/10">
          {treatment.whyChooseItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={{ delay: 0.1 + i * 0.08 }}
              className={cn(
                'py-8 md:py-10 pr-8 flex flex-col gap-4 border-b border-charcoal/10',
                // Vertical dividers between columns
                i < treatment.whyChooseItems.length - 1 ? 'lg:border-r lg:border-charcoal/10' : ''
              )}
            >
              {/* Number */}
              <span className="font-display text-charcoal/10 text-[2.5rem] leading-none font-light select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="font-sans text-charcoal text-[0.82rem] font-medium leading-snug tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-stone-gray text-[0.8rem] leading-[1.75] font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
