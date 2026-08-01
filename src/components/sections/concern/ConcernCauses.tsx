'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConcernDetailData } from '@/lib/concern-detail-data';

export interface ConcernCausesProps {
  concern: ConcernDetailData;
  className?: string;
}

export function ConcernCauses({ concern, className }: ConcernCausesProps) {
  return (
    <section
      id="concern-causes"
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
            Contributing Factors
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.8rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal">
            Possible causes.
          </h2>
          <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.75] font-light mt-3">
            Concerns typically stem from a combination of internal and external factors.
          </p>
        </motion.div>

        {/* Causes Grid with balanced padding around vertical borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-charcoal/10">
          {concern.causes.map((cause, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={{ delay: 0.08 * idx }}
              className={cn(
                'py-8 md:py-10 flex flex-col gap-4 border-b border-charcoal/10',
                // Responsive padding so text never touches vertical lines
                idx === 0
                  ? 'lg:pl-0 lg:pr-8'
                  : idx === concern.causes.length - 1
                  ? 'lg:pl-8 lg:pr-0'
                  : 'lg:px-8',
                // Vertical dividers between columns on desktop
                idx < concern.causes.length - 1 ? 'lg:border-r lg:border-charcoal/10' : ''
              )}
            >
              <span className="font-display text-charcoal/15 text-[2.2rem] leading-none font-light select-none">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-sans text-charcoal text-[0.92rem] font-medium leading-snug tracking-tight">
                {cause.factor}
              </h3>
              <p className="font-sans text-stone-gray text-[0.8rem] leading-[1.75] font-light">
                {cause.explanation}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
