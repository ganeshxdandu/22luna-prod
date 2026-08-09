'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { SKIN_GROUPS } from '@/lib/treatments-catalogue';
import { TreatmentCard } from './TreatmentCard';

export interface SkinCategorySectionProps {
  className?: string;
}

export function SkinCategorySection({ className }: SkinCategorySectionProps) {
  return (
    <section
      id="skin-category"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10 py-16 md:py-24', className)}
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
            Category 01
          </motion.span>

          {/* Large Editorial Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-charcoal uppercase leading-[0.95] tracking-[-0.04em] text-[2.75rem] sm:text-[4rem] lg:text-[5rem] font-light mb-12"
          >
            Skin Care
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
                <span className="font-display text-charcoal text-2xl font-light leading-none block">18</span>
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-gray font-medium">Treatments</span>
              </div>
              <div className="lg:border-t lg:border-charcoal/5 lg:pt-4">
                <span className="font-display text-charcoal text-2xl font-light leading-none block">05</span>
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-gray font-medium">Treatment Groups</span>
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
                Skin health is not achieved through a single solution. Our skin care portfolio spans routine maintenance, active clinical correction, and deep regenerative biostimulation. Our curated collection combines regenerative medicine, advanced energy devices and medical-grade protocols designed for long-term skin health.
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

        {/* Grouped Treatments Listing */}
        <div className="mt-14 md:mt-20 flex flex-col gap-16 md:gap-24">
          {SKIN_GROUPS.map((group, groupIdx) => (
            <div key={group.groupName} className="flex flex-col gap-8">

              {/* Group Title Header */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={{ delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="font-display text-charcoal/30 text-[1.25rem] font-light">
                  {String(groupIdx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-charcoal text-[1.35rem] sm:text-[1.55rem] uppercase tracking-tight">
                  {group.groupName}
                </h3>
                <div className="flex-1 h-px bg-charcoal/10 ml-2" />
              </motion.div>

              {/* Treatment Cards Grid for this group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.treatments.map((treatment, itemIdx) => (
                  <TreatmentCard
                    key={treatment.slug}
                    treatment={treatment}
                    delay={0.05 * itemIdx}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
