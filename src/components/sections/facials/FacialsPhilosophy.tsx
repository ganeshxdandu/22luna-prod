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
        'w-full bg-soft-ivory border-y border-charcoal/[0.07]',
        'py-20 md:py-28',
        className,
      )}
    >
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12">

        {/* Three-column grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Col 1-2: eyebrow + thin gold rule */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-gold/50" />
                <span className="font-sans text-[0.55rem] tracking-tight uppercase text-stone-gray/50">
                  Philosophy
                </span>
              </div>
              {/* Vertical rule — desktop only */}
              <div className="hidden lg:block w-px h-24 bg-charcoal/[0.07] mt-6" />
            </div>
          </div>

          {/* Col 3-8: Main headline */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-charcoal leading-[1.0] tracking-tight uppercase"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)' }}
            >
              From Everyday
              <br />
              Radiance To
              <br />
              <span className="italic text-botanical">Clinical</span>
              <br />
              Transformation.
            </motion.h2>
          </div>

          {/* Col 9-12: Copy */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className="w-full h-px bg-charcoal/[0.08] mb-8" />
              <p className="font-sans font-light text-stone-gray leading-[1.85] text-[14px] mb-5">
                Every skin has different needs, and every stage of your skin
                journey deserves a different level of care.
              </p>
              <p className="font-sans font-light text-stone-gray leading-[1.85] text-[14px]">
                At 22Luna, our facial menu moves from gentle maintenance to
                highly targeted, advanced treatments — allowing you to choose
                an experience that matches your skin, your concerns and your goals.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
