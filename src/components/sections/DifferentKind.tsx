'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, scaleIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface DifferentKindProps {
  className?: string;
}

export function DifferentKind({ className }: DifferentKindProps) {
  return (
    <section
      id="different-kind"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10', className)}
    >
      {/* ── Main Content Container: 24px padding on mobile, 32px on desktop (p-6 md:p-8) ── */}
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16">
        
        {/* Left Column: Narrative description & navigation (flush-left) */}
        <div className="w-full lg:w-[38%] lg:max-w-[420px] flex flex-col justify-between py-2 shrink-0">
          
          {/* TOP: Section Metadata (Chapter 02) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="mb-8 lg:mb-0"
          >
            <span className="font-sans text-[14px] uppercase tracking-tight text-botanical font-extralight">
              Chapter <span className="font-normal text-botanical">02</span>
            </span>
          </motion.div>

          {/* BOTTOM: Grouped Heading + Narrative Paragraphs aligned to bottom */}
          <div className="flex flex-col mt-auto pt-8 lg:pt-12">
            {/* Heading (Aligned with design language across chapters) */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.15 }}
              className="font-display uppercase leading-[1.05] tracking-[-0.03em] text-[28px] sm:text-[34px] lg:text-[40px] mb-6"
            >
              <span className="text-charcoal block font-light">A Different Kind</span>
              <span className="text-botanical block font-medium">Of Clinic.</span>
            </motion.h2>

            {/* Narrative Paragraphs stacked with spacing */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.25 }}
              className="flex flex-col gap-5"
            >
              <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] font-light">
                When I began shaping 22Luna, my vision extended beyond clinical excellence. I wanted every patient to feel a sense of calm from the moment they arrived.
              </p>
              <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] font-light">
                The architecture, interiors, lighting, and every interaction were thoughtfully considered to replace anxiety with reassurance.
              </p>
              <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] font-light">
                Luxury, to us, is not about appearances. It is about creating an experience where patients feel genuinely welcomed, respected, and cared for at every step.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Right Column: Clean Landscape Sanctuary Image Block */}
        <div className="w-full lg:w-[58%] flex-1 shrink-0 flex items-center justify-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.15, duration: 1.1 }}
            className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] shadow-sm bg-soft-ivory flex items-center justify-center group"
          >
            <CloudinaryImage
              src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785160928/SAN_8471_m8zyuz.jpg"
              alt="22Luna Sanctuary Interior Lounge and Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
            />
            {/* Subtle soft gradient overlay */}
            <div className="absolute inset-0 bg-charcoal/5 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
