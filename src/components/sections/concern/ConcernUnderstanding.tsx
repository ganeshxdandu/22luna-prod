'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConcernDetailData } from '@/lib/concern-detail-data';

export interface ConcernUnderstandingProps {
  concern: ConcernDetailData;
  className?: string;
}

export function ConcernUnderstanding({ concern, className }: ConcernUnderstandingProps) {
  return (
    <section
      id="concern-understanding"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">

        {/* Left Column: Heading */}
        <div className="w-full lg:w-[44%] flex flex-col shrink-0">
          <motion.div
            variants={ fadeIn }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-5">
              Understanding
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.8rem] sm:text-[2.3rem] lg:text-[2.75rem] font-normal"
          >
            {concern.understandingHeading}
          </motion.h2>
        </div>

        {/* Right Column: Paragraphs + Prevalence note */}
        <div className="w-full lg:w-[50%] lg:max-w-[520px] flex flex-col gap-6">
          {concern.understandingParagraphs.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.2 + i * 0.1 }}
              className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light"
            >
              {para}
            </motion.p>
          ))}

          {/* How Common Box */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.4 }}
            className="mt-4 pt-6 border-t border-charcoal/10 flex flex-col gap-2"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
              Prevalence & Context
            </span>
            <p className="font-sans text-charcoal text-[0.85rem] leading-[1.7] font-light">
              {concern.howCommon}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
