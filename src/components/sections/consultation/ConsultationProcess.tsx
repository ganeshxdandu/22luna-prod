'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const CONSULTATION_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Listen to Your Concerns',
    description: 'We begin by giving you unhurried space to share what brought you in, what you feel about your skin or hair, and what you hope to achieve.',
  },
  {
    number: '02',
    title: 'Understand Your Goals & Lifestyle',
    description: 'We discuss your daily routine, sun exposure, sleep patterns, past procedures, and what downtime or budget fits comfortably into your life.',
  },
  {
    number: '03',
    title: 'Clinical Condition Assessment',
    description: 'Dr. Niharika conducts a thorough visual and diagnostic assessment of your skin barrier, scalp density, or dental alignment.',
  },
  {
    number: '04',
    title: 'Discuss Suitable Options',
    description: 'We walk you through suitable treatment options, explaining the science behind each, expected outcomes, and necessary session frequency.',
  },
  {
    number: '05',
    title: 'Create a Personalised Plan',
    description: 'Together, we craft a phased roadmap tailored to your timeline. No pressure, no rigid packages—just clear, thoughtful sequencing.',
  },
  {
    number: '06',
    title: 'Answer Every Question Honestly',
    description: 'We discuss risks, investment, and realistic expectations. You leave with full clarity and complete freedom to decide when you are ready.',
  },
];

export interface ConsultationProcessProps {
  className?: string;
}

export function ConsultationProcess({ className }: ConsultationProcessProps) {
  return (
    <section
      id="consultation-process"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10 py-16 md:py-24 lg:py-28', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-14 md:mb-20 max-w-[560px]"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            The Consultation Journey
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal">
            What happens during your visit.
          </h2>
        </motion.div>

        {/* Progressive Timeline Grid (2 columns on lg with generous space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 md:gap-y-16 border-t border-charcoal/10 pt-12 md:pt-16">
          {CONSULTATION_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={{ delay: 0.08 * idx }}
              className="flex items-start gap-6 group"
            >
              {/* Ghost Step Number */}
              <span className="font-display text-charcoal/20 text-[2.2rem] sm:text-[2.6rem] leading-none font-light shrink-0 select-none group-hover:text-botanical/40 transition-colors duration-300">
                {step.number}
              </span>

              {/* Text content */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-charcoal text-[1.15rem] sm:text-[1.3rem] uppercase tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.75] font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
