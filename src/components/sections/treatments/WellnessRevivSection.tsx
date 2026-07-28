'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface WellnessRevivSectionProps {
  className?: string;
}

export function WellnessRevivSection({ className }: WellnessRevivSectionProps) {
  return (
    <section
      id="wellness-category"
      className={cn(
        'relative w-full bg-botanical text-moon-ivory overflow-hidden py-20 md:py-32',
        className
      )}
    >
      {/* Subtle background ambient pattern / glow */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23ffffff' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-8 relative z-10">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">

          {/* Partner Tagline Label */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-moon-ivory/20 bg-moon-ivory/5 mb-8"
          >
            <Sparkles size={13} className="text-gold" />
            <span className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-moon-ivory/80 font-medium">
              Global Wellness Partner Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-display uppercase leading-[1.08] tracking-[-0.03em] text-[2.2rem] sm:text-[3rem] lg:text-[3.75rem] font-normal mb-8 text-moon-ivory"
          >
            Wellness & IV Therapies
          </motion.h2>

          {/* Partner Narrative Paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.3 }}
            className="font-sans text-moon-ivory/80 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light mb-10 max-w-[680px]"
          >
            To deliver medical-grade intravenous hydration, nutrient therapies, and longevity infusions at the highest international standard, 22Luna has partnered exclusively with <strong className="font-normal text-moon-ivory">REVIV</strong> — a globally recognized leader in preventive IV wellness. Every infusion is administered in our private suites under strict medical supervision, ensuring safety, efficacy, and complete serenity.
          </motion.p>

          {/* Key Partner Highlights (reassuring list) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full py-8 border-y border-moon-ivory/15 mb-10 text-left sm:text-center"
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-gold font-medium">
                Global Protocols
              </span>
              <span className="font-sans text-[0.85rem] text-moon-ivory/70 font-light">
                Formulated by REVIV physicians
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-gold font-medium">
                Physician Supervised
              </span>
              <span className="font-sans text-[0.85rem] text-moon-ivory/70 font-light">
                Administered by certified specialists
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-gold font-medium">
                Private Suites
              </span>
              <span className="font-sans text-[0.85rem] text-moon-ivory/70 font-light">
                Tranquil luxury sanctuary setting
              </span>
            </div>
          </motion.div>

          {/* Transition CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.5 }}
          >
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2.5 rounded-full bg-moon-ivory text-botanical font-sans text-[0.75rem] uppercase font-medium px-8 py-4 tracking-tight transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-sm group"
            >
              <span>Continue to REVIV</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
