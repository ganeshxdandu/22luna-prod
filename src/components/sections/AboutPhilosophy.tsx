'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

const MARQUEE_ITEMS = [
  'Clinical Excellence',
  'Spa Serenity.',
  'Double Restoration',
  'One Destination',
  'World-Class Technology',
  'Holistic Transformation',
];

const PHILOSOPHY_PARAS = [
  'At 22Luna, clinical precision is fused with therapeutic escape, delivering complete physical renewal and mental restoration through one seamless experience.',
  'Our medical spa suites combine physician-grade skincare, expert therapists, and cutting-edge treatments within private, spa-like sanctuaries designed to calm the senses.',
  'Unlike sterile clinics, we believe transformation should feel as restorative as it is effective. Here, advanced lasers meet tranquil relaxation, creating an environment where science and serenity exist in perfect balance.',
];

export interface AboutPhilosophyProps {
  className?: string;
}

export function AboutPhilosophy({ className }: AboutPhilosophyProps) {
  return (
    <section
      id="about-philosophy"
      className={cn('relative w-full bg-botanical overflow-hidden flex flex-col', className)}
    >
      {/* ── Main Content Container: 24px padding on mobile, 32px on desktop (p-6 md:p-8) ── */}
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex-1 flex flex-col justify-center">
        
        {/* Row: Left Column (Label + Heading) stretches to match Right Column (stacked paragraphs) */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-8 w-full">
          
          {/* Left Column: Spans top-to-bottom of the text block height */}
          <div className="flex flex-col justify-between lg:w-[45%] shrink-0 min-h-[220px] lg:min-h-0">
            {/* TOP: Label */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={{ delay: 0.1, duration: 0.9 }}
            >
              <p className="font-sans text-[14px] tracking-[0.22em] uppercase text-moon-ivory font-extralight">
                Our <span className="font-normal">Philosophy</span>
              </p>
            </motion.div>

            {/* BOTTOM: Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={{ delay: 0.2, duration: 1.1 }}
              className="mt-8 lg:mt-0"
            >
              <h2
                className="font-display text-moon-ivory uppercase leading-[1.15] tracking-[-0.02em] text-[28px] sm:text-[34px] lg:text-[40px]"
              >
                Therapeutic Meets Clinical.
                <br />
                Complete Mind-Body Renewal.
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Paragraphs stacked naturally with simple gap */}
          <div className="flex flex-col gap-8 lg:w-[50%] lg:max-w-[420px]">
            {PHILOSOPHY_PARAS.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.15 + i * 0.1, duration: 0.9 }}
                className="font-sans text-moon-ivory/70 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.005em] font-light"
              >
                {para}
              </motion.p>
            ))}
          </div>

        </div>
      </div>

      {/* ── Marquee Ticker: white bg, green text, gold icons ── */}
      <div className="bg-moon-ivory border-t border-border/40 py-4 overflow-hidden">
        <div
          className="flex items-center gap-12 whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <React.Fragment key={i}>
              <span className="font-sans text-base tracking-tight uppercase text-botanical shrink-0">
                {item}
              </span>
              <Sparkle size={12} className="text-gold fill-gold shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
