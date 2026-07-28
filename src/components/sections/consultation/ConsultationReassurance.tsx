'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ConsultationReassuranceProps {
  className?: string;
}

export function ConsultationReassurance({ className }: ConsultationReassuranceProps) {
  return (
    <section
      id="consultation-reassurance"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-20 md:py-28', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 flex flex-col items-center justify-center text-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-[820px] flex flex-col items-center"
        >
          {/* Eyebrow */}
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-6">
            A Thoughtful Partnership
          </span>

          {/* Core Philosophy Quote */}
          <h2 className="font-display text-charcoal uppercase leading-[1.12] tracking-[-0.02em] text-[1.8rem] sm:text-[2.4rem] lg:text-[2.85rem] font-normal mb-8">
            Not every treatment is right for every patient, and that is exactly why consultation matters.
          </h2>

          <p className="font-sans text-stone-gray text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light max-w-[660px]">
            The goal is not to push you toward a procedure. The goal is to help you choose well. The right plan should feel informed, comfortable, and aligned with your goals, lifestyle, and timeline.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
