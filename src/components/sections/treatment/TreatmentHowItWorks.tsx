'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentHowItWorksProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentHowItWorks({ treatment, className }: TreatmentHowItWorksProps) {
  const steps = treatment.howItWorksSteps;

  return (
    <section
      id="treatment-how-it-works"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8">

        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            The Process
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-normal max-w-[420px]">
            How it works.
          </h2>
        </motion.div>

        {/* Steps — horizontal on lg, vertical stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={{ delay: 0.15 + i * 0.1 }}
              className={cn(
                'flex flex-col gap-4 py-8 lg:py-0 lg:pr-10',
                // Bottom border on all but last on mobile; right border between columns on desktop
                i < steps.length - 1
                  ? 'border-b border-charcoal/10 lg:border-b-0 lg:border-r lg:border-charcoal/10'
                  : '',
                // Indent all except first column on desktop
                i > 0 ? 'lg:pl-10' : ''
              )}
            >
              {/* Step number — large ghost typography */}
              <span className="font-display text-charcoal/[0.08] text-[4rem] leading-none font-light select-none">
                {step.number}
              </span>

              {/* Step label */}
              <h3 className="font-display text-charcoal text-[1rem] sm:text-[1.1rem] uppercase tracking-tight leading-tight">
                {step.label}
              </h3>

              {/* Connector line — desktop only, visible between label and number */}
              <div className="hidden lg:block w-8 h-px bg-charcoal/20" />

              {/* Step description */}
              <p className="font-sans text-stone-gray text-[0.8rem] leading-[1.8] font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
