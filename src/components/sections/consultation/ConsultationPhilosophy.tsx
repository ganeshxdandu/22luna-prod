'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ConsultationPhilosophyProps {
  className?: string;
}

export function ConsultationPhilosophy({ className }: ConsultationPhilosophyProps) {
  return (
    <section
      id="why-consultation-matters"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-16 md:py-24 lg:py-28', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

        {/* Left Column: Heading & Label */}
        <div className="w-full lg:w-[44%] shrink-0">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium">
              Why Consultation Matters
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal"
          >
            Not every treatment is right for every patient.
          </motion.h2>
        </div>

        {/* Right Column: Narrative Storytelling */}
        <div className="w-full lg:w-[52%] lg:max-w-[540px] flex flex-col gap-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.25 }}
            className="font-sans text-stone-gray text-[15px] sm:text-[16px] leading-[1.85] font-light"
          >
            In modern aesthetics, it is easy to be led by trends, active marketing, or standard treatment menus. But skin biological responses, facial architecture, and personal lifestyle vary completely from person to person.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.35 }}
            className="font-sans text-stone-gray text-[15px] sm:text-[16px] leading-[1.85] font-light"
          >
            Our goal is never to recommend the most complex or expensive procedure. Our goal is to understand the human being sitting across from us first. We look at your skin barrier health, medical history, budget, and comfort level before outlining options.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.45 }}
            className="font-sans text-stone-gray text-[15px] sm:text-[16px] leading-[1.85] font-light"
          >
            Sometimes, the most honest recommendation after a consultation is to simplify your home routine or wait before starting a procedure. That transparency is why our patients trust us.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
