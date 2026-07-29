'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ConsultationHeroProps {
  className?: string;
}

export function ConsultationHero({ className }: ConsultationHeroProps) {
  return (
    <section
      id="consultation-hero"
      className={cn(
        'relative w-full bg-moon-ivory border-b border-charcoal/10 arch-light-wash-top',
        className
      )}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 pt-[104px] md:pt-[128px] pb-20 md:pb-28 flex flex-col items-start">

        {/* Section Tag */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.1, duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium">
            Philosophy of Care
          </span>
        </motion.div>

        {/* Two-Column Editorial Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 w-full">

          {/* Left: Large Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2, duration: 1.1 }}
            className="font-display text-charcoal uppercase leading-[1.02] tracking-[-0.03em] text-[2.6rem] sm:text-[3.25rem] lg:text-[4rem] font-normal w-full lg:w-[54%] shrink-0"
          >
            Consultation is the beginning — not the final step.
          </motion.h1>

          {/* Right: Paragraph + CTA */}
          <div className="w-full lg:w-[42%] flex flex-col gap-8">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.3, duration: 1.0 }}
              className="font-sans text-stone-gray text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light"
            >
              You do not need to know the right treatment before you arrive. You do not need to have made a decision. Every journey begins with listening, understanding your lifestyle, and discovering what your skin, hair, or teeth actually require — without sales pressure or pre-set menus.
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.45, duration: 0.9 }}
            >
              <Link
                href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.75rem] uppercase px-8 py-4 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
              >
                Book Your Consultation
                <ArrowUpRight
                  size={14}
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
