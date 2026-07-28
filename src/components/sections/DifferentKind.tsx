'use client';

import * as React from 'react';
import Image from 'next/image';
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
        <div className="w-full lg:w-[35%] lg:max-w-[380px] flex flex-col justify-between lg:min-h-[420px] py-2 shrink-0">
          
          {/* TOP: Section Metadata (Label 14px split) */}
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

          {/* BOTTOM: Narrative Paragraphs stacked with spacing (Text 16px fluid) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="flex flex-col gap-6 mt-auto"
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

        {/* Right Column: Landscape Image Block with Centered Text (40px title) */}
        <div className="w-full lg:w-[60%] flex-1 shrink-0 flex items-center justify-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.15, duration: 1.1 }}
            className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] shadow-sm bg-soft-ivory flex items-center justify-center group"
          >
            {/* Background Image */}
            <Image
              src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785160928/SAN_8471_m8zyuz.jpg"
              alt="A Different Kind of Clinic - 22Luna Interior Lobby"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
            />

            {/* Dark Overlay for title readability */}
            <div className="absolute inset-0 bg-charcoal/20 z-10 transition-opacity duration-500 group-hover:bg-charcoal/25" />

            {/* Centered Typography Heading */}
            <div className="absolute inset-0 flex items-center justify-center z-20 p-4">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={{ delay: 0.3 }}
                className="font-display text-white uppercase text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] tracking-[0.03em] text-center leading-tight max-w-[80%] drop-shadow-sm select-none"
              >
                A Different Kind of Clinic
              </motion.h3>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
