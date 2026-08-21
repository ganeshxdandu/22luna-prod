'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FacialsPhilosophyProps {
  className?: string;
}

export function FacialsPhilosophy({ className }: FacialsPhilosophyProps) {
  return (
    <section
      id="facials-philosophy"
      className={cn(
        'w-full bg-soft-ivory border-y border-charcoal/[0.08]',
        'py-20 md:py-28',
        className,
      )}
    >
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Eyebrow + Big Headline */}
          <div className="lg:col-span-7 flex flex-col pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-botanical/60" />
              <span className="font-sans text-[0.6rem] tracking-tight uppercase text-botanical font-medium">
                Our Facial Philosophy
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-charcoal uppercase leading-[0.98] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
            >
              From Everyday
              <br />
              Radiance To{' '}
              <span className="italic text-botanical font-light">Clinical</span>
              <br />
              Transformation.
            </motion.h2>
          </div>

          {/* Right Column: Clean Editorial Copy with Left Border on Desktop */}
          <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-charcoal/[0.1] pt-8 lg:pt-0 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="space-y-4"
            >
              <p className="font-sans font-light text-stone-gray leading-[1.85] text-[15px]">
                Every skin has different needs, and every stage of your skin journey deserves a different level of care.
              </p>
              <p className="font-sans font-light text-stone-gray leading-[1.85] text-[15px]">
                At 22Luna, our facial menu moves from gentle maintenance to highly targeted, advanced treatments — allowing you to choose an experience that matches your skin, your concerns, and your goals.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
