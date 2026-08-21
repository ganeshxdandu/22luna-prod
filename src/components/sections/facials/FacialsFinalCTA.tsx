'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface FacialsFinalCTAProps {
  className?: string;
}

export function FacialsFinalCTA({ className }: FacialsFinalCTAProps) {
  return (
    <section
      id="facials-final-cta"
      className={cn(
        'w-full bg-moon-ivory border-t border-charcoal/[0.08] overflow-hidden',
        className
      )}
    >
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-36">
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:gap-20 xl:gap-28">

          {/* ── Left: Headlines ── */}
          <div className="w-full lg:w-[58%] shrink-0">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={{ delay: 0.05, duration: 0.9 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-px bg-botanical/50" />
              <span className="font-sans text-xs tracking-tight uppercase text-botanical font-medium">
                22Luna Clinical Facials
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={{ delay: 0.15, duration: 1.1 }}
              className="font-display font-light text-charcoal uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
            >
              Your Skin,
              <br />
              <span className="italic font-light text-botanical">
                Considered.
              </span>
            </motion.h2>
          </div>

          {/* ── Right: Copy + CTA ── */}
          <div className="w-full lg:w-[42%] mt-10 lg:mt-0 flex flex-col">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={{ delay: 0.2, duration: 0.8 }}
              className="hidden lg:block w-full h-px mb-8 bg-charcoal/[0.08]"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={{ delay: 0.3, duration: 1.0 }}
              className="font-sans font-light text-[15px] sm:text-base leading-[1.85] mb-10 text-stone-gray"
            >
              Thoughtful care, advanced technology and treatments designed
              around you.
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={{ delay: 0.42, duration: 0.9 }}
            >
              <Link
                href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20facial%20consultation%20at%2022Luna."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-xs uppercase tracking-tight px-8 py-4 transition-all duration-300 hover:bg-botanical/90 group shadow-sm font-medium"
              >
                Book a Consultation
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Bottom subtle divider */}
        <div className="mt-20 md:mt-28 flex items-center gap-5">
          <div className="flex-1 h-px bg-charcoal/[0.06]" />
          <span className="font-sans text-xs tracking-tight uppercase shrink-0 text-stone-gray/50">
            22Luna · Sanctuary
          </span>
          <div className="flex-1 h-px bg-charcoal/[0.06]" />
        </div>
      </div>
    </section>
  );
}
