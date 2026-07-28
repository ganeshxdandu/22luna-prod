'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { DENTAL_TREATMENTS } from '@/lib/treatments-catalogue';
import { TreatmentCard } from './TreatmentCard';

export interface DentalCategorySectionProps {
  className?: string;
}

export function DentalCategorySection({ className }: DentalCategorySectionProps) {
  return (
    <section
      id="dental-category"
      className={cn('relative w-full bg-soft-ivory border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 pb-12 md:pb-16 border-b border-charcoal/10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="w-full lg:w-[45%]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Category 03
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal">
              Dental Care
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="w-full lg:w-[50%] lg:max-w-[520px]"
          >
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light">
              Cosmetic and restorative dentistry delivered in private, tranquil suites. From digital smile design to precision implantology, every procedure combines artistic harmony with advanced clinical technology.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DENTAL_TREATMENTS.map((treatment, idx) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              delay={0.05 * idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
