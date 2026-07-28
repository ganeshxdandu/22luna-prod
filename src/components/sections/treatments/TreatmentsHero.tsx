'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface TreatmentsHeroProps {
  className?: string;
}

export function TreatmentsHero({ className }: TreatmentsHeroProps) {
  return (
    <section
      id="treatments-hero"
      className={cn(
        'relative w-full bg-moon-ivory border-b border-charcoal/10',
        className
      )}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 pt-[96px] md:pt-[112px] pb-16 md:pb-20">

        {/* Section label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.1, duration: 0.8 }}
          className="mb-7"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium">
            Our Treatments
          </span>
        </motion.div>

        {/* Two-column: heading left, intro right */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2, duration: 1.1 }}
            className="font-display text-charcoal uppercase leading-[1.0] tracking-[-0.03em] text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-normal w-full lg:w-[48%] shrink-0"
          >
            Find the right treatment for your concern.
          </motion.h1>

          {/* Intro + CTA */}
          <div className="w-full lg:w-[46%] flex flex-col gap-7">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.3, duration: 1.0 }}
              className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light"
            >
              Treatments at 22Luna are grouped by category so you can navigate by what concerns you, not by what you already know. Whether you are addressing an active issue, maintaining what is working or simply curious about what is possible — begin with the category that feels most relevant.
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.45, duration: 0.9 }}
            >
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-7 py-3.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
              >
                Book a Consultation
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
