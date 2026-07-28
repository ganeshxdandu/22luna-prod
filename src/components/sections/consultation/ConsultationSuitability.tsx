'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SuitabilityPersona {
  number: string;
  title: string;
  description: string;
}

const PERSONAS: SuitabilityPersona[] = [
  {
    number: '01',
    title: 'You are unsure which treatment is right.',
    description: 'You have read about facials, lasers, or injectables online, but do not know what matches your specific skin biology.',
  },
  {
    number: '02',
    title: 'You have multiple overlapping concerns.',
    description: 'You want to address dullness, fine lines, or acne scarring together, and need a cohesive, structured care sequence.',
  },
  {
    number: '03',
    title: 'You are considering aesthetic treatments for the first time.',
    description: 'You feel hesitant or overwhelmed by aesthetic choices and want a medical environment that prioritizes safety, comfort, and natural results.',
  },
  {
    number: '04',
    title: 'You want a personalised long-term roadmap.',
    description: 'You are looking for ongoing maintenance and proactive skin health rather than one-off impulse procedures.',
  },
];

export interface ConsultationSuitabilityProps {
  className?: string;
}

export function ConsultationSuitability({ className }: ConsultationSuitabilityProps) {
  return (
    <section
      id="who-should-book"
      className={cn('relative w-full bg-soft-ivory border-b border-charcoal/10 py-16 md:py-24 lg:py-28', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mb-14 md:mb-18">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="w-full lg:w-[46%]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Self Identification
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal">
              Who is a consultation for?
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light w-full lg:w-[48%] lg:max-w-[480px]"
          >
            If any of these sound familiar, you are in the right place. Consultation exists precisely to replace uncertainty with medical clarity and peace of mind.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-charcoal/10 pt-12 md:pt-16">
          {PERSONAS.map((item, idx) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={{ delay: 0.1 * idx }}
              className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-8 md:p-10 flex flex-col justify-between gap-6 transition-all duration-500 hover:border-charcoal/20"
            >
              <div className="flex flex-col gap-4">
                <span className="font-display text-botanical text-[1.5rem] font-light">
                  {item.number}
                </span>
                <h3 className="font-display text-charcoal text-[1.2rem] sm:text-[1.35rem] leading-tight tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="font-sans text-stone-gray text-[0.88rem] leading-[1.75] font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
