'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ApproachPillar {
  title: string;
  description: string;
}

const PILLARS: ApproachPillar[] = [
  {
    title: 'Education First',
    description: 'We believe informed patients make the best decisions. We explain the why behind every recommendation so you feel in complete control.',
  },
  {
    title: 'Total Transparency',
    description: 'Clear pricing, honest expected timelines, and upfront discussion of downtime. No hidden add-ons or unexpected costs.',
  },
  {
    title: 'Honest Guidance',
    description: 'If a procedure will not benefit your skin or if a simpler option exists, we tell you directly. We value your trust far above short-term sales.',
  },
  {
    title: 'Long-Term Relationships',
    description: 'Skin health is a lifelong journey. We focus on building lasting care relationships rather than transactional appointments.',
  },
];

export interface ConsultationApproachProps {
  className?: string;
}

export function ConsultationApproach({ className }: ConsultationApproachProps) {
  return (
    <section
      id="our-approach"
      className={cn('relative w-full bg-botanical text-moon-ivory border-b border-charcoal/10 py-20 md:py-32', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20 mb-16 md:mb-24">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="w-full lg:w-[45%]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-moon-ivory/60 font-medium block mb-4">
              Our Principles
            </span>
            <h2 className="font-display text-moon-ivory uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-normal">
              What makes our approach different.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-sans text-moon-ivory/70 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light w-full lg:w-[48%] lg:max-w-[480px]"
          >
            We designed 22luna to be the clinic we wished existed—where medical standard, serene design, and genuine patient respect replace sales quotas and hurried appointments.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-moon-ivory/15 pt-14">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={{ delay: 0.1 * idx }}
              className="flex flex-col gap-4"
            >
              <span className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-gold font-medium">
                Pillar {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-moon-ivory text-[1.2rem] sm:text-[1.35rem] uppercase tracking-tight leading-tight">
                {pillar.title}
              </h3>
              <p className="font-sans text-moon-ivory/70 text-[0.85rem] leading-[1.75] font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
