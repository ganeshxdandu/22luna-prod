'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
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
              Category 01
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal">
              Skin Care
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
              Skin health is not achieved through a single solution. Our skin care portfolio spans routine maintenance, active clinical correction, and deep regenerative biostimulation. Organized below into five targeted groups to help you find the precise level of care required.
            </p>
          </motion.div>
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
