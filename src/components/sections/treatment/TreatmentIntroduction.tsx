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

        {/* ── RIGHT: Paragraphs & Spotlight ── */}
        <div className="w-full lg:w-[52%] lg:max-w-[520px] flex flex-col gap-8">
          <div className="flex flex-col gap-6">
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

          {/* Actives & Tech Spotlight */}
          {(treatment.actives || treatment.technology) && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.4 }}
              className="border-t border-charcoal/10 pt-6 flex flex-col gap-5"
            >
              {treatment.actives && treatment.actives.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-stone-gray font-medium">
                    Active Formulations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {treatment.actives.map((act) => (
                      <span key={act} className="font-sans text-xs font-light px-3 py-1 bg-charcoal/5 text-charcoal border border-charcoal/8 rounded-full">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {treatment.technology && (
                <div className="flex flex-col gap-1.5">
                  <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-stone-gray font-medium">
                    Clinical System / Technology
                  </span>
                  <span className="font-sans text-xs text-charcoal font-light leading-relaxed">
                    {treatment.technology}
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
