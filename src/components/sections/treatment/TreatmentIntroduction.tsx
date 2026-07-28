'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentIntroductionProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentIntroduction({ treatment, className }: TreatmentIntroductionProps) {
  // Split heading on newline for multi-line display
  const headingLines = treatment.introHeading.split('\n');

  return (
    <section
      id="treatment-introduction"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">

        {/* ── LEFT: Label + Heading ── */}
        <div className="w-full lg:w-[42%] flex flex-col shrink-0">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-5">
              {treatment.introLabel}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal"
          >
            {headingLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* ── RIGHT: Paragraphs ── */}
        <div className="w-full lg:w-[52%] lg:max-w-[520px] flex flex-col gap-6">
          {treatment.introParagraphs.map((para, i) => (
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
        </div>

      </div>
    </section>
  );
}
