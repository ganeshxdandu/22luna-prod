'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { HAIR_TREATMENTS } from '@/lib/treatments-catalogue';
import { TreatmentCard } from './TreatmentCard';

export interface HairCategorySectionProps {
  className?: string;
}

export function HairCategorySection({ className }: HairCategorySectionProps) {
  return (
    <section
      id="hair-category"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Editorial Section Header */}
        <div className="pt-8 pb-16 md:pb-20">
          {/* Category ID Label */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3"
          >
            Category 02
          </motion.span>

          {/* Large Editorial Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-charcoal uppercase leading-[0.95] tracking-[-0.04em] text-[2.75rem] sm:text-[4rem] lg:text-[5rem] font-light mb-12"
          >
            Hair &amp; Scalp
          </motion.h2>

          {/* Editorial Details Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            {/* Stats Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-4 flex flex-row lg:flex-col gap-6 lg:gap-4 border-l border-charcoal/10 pl-6 py-1"
            >
              <div>
                <span className="font-display text-charcoal text-2xl font-light leading-none block">06</span>
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-gray font-medium">Targeted Therapies</span>
              </div>
              <div className="lg:border-t lg:border-charcoal/5 lg:pt-4">
                <span className="font-display text-charcoal text-2xl font-light leading-none block">01</span>
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-gray font-medium">Focused Portfolio</span>
              </div>
            </motion.div>

            {/* Description Narrative Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="lg:col-span-8 lg:max-w-[620px]"
            >
              <p className="font-sans text-stone-gray text-[14px] sm:text-[15.5px] leading-[1.8] font-light">
                Hair restoration and scalp health require biological precision. Our protocols focus on cellular stimulation, follicle revival, and long-term scalp ecology using medical-grade growth factors and PRP therapies.
              </p>
            </motion.div>
          </div>

          {/* Thin Elegant Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full h-px bg-charcoal/10 mt-16 md:mt-20 origin-left"
          />
        </div>

        {/* Cards Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HAIR_TREATMENTS.map((treatment, idx) => (
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
