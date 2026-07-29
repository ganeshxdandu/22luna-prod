'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface StoriesAndEthicsProps {
  className?: string;
}

export function StoriesAndEthics({ className }: StoriesAndEthicsProps) {
  return (
    <div className={cn('relative w-full bg-limestone flex flex-col', className)}>
      
      {/* ── SECTION 1: Proven Success Stories (Feature 04) ── */}
      <section
        id="proven-stories"
        className="w-full border-b border-charcoal/10 bg-limestone"
      >
        <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0">
          
          {/* Left Column: Real Image (50% container width, 1:1 aspect ratio) */}
          <div className="w-full lg:w-1/2 aspect-square shrink-0 relative overflow-hidden rounded-[2px] shadow-sm bg-charcoal/5">
            <Image
              src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785291650/01_r2amun.png"
              alt="22luna clinical consultation and therapy suite"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>

          {/* Right Column: Text block (50% container width, flush-left on mobile, centered on desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-center justify-center py-0 lg:py-12 px-0 lg:px-16">
            <div className="w-full lg:max-w-[420px] text-left">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.1 }}
                className="flex flex-col items-start w-full"
              >
                <span className="font-sans text-sm tracking-tight font-extralight uppercase text-botanical mb-4">
                  Feature <span className='font-normal'>04</span>
                </span>
                
                <h2 
                  className="font-display uppercase leading-[1.05] tracking-[-0.03em] mb-6 text-[28px] sm:text-[34px] lg:text-[40px]"
                >
                  <span className="text-charcoal block">Proven Success</span>
                  <span className="text-botanical block font-normal">Stories</span>
                </h2>

                <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.005em] font-light">
                  Wondering who trusts 22Luna? From professional athletes to everyday patients, our clinic has become a destination for those seeking ethical care, personalized treatments, and natural results. Every patient receives the same discretion, transparency, and commitment to excellence.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: Patient Centric (Feature 05) ── */}
      <section
        id="patient-centric"
        className="w-full border-b border-charcoal/10 bg-limestone"
      >
        <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-0">
          
          {/* Right Column: Real Image (50% container width, 1:1 aspect ratio) */}
          <div className="w-full lg:w-1/2 aspect-square shrink-0 relative overflow-hidden rounded-[2px] shadow-sm bg-charcoal/5">
            <Image
              src="https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607707/arch-two_tutte1.png"
              alt="Serene curved arches at 22luna"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>

          {/* Left Column: Text block (50% container width, flush-left on mobile, centered on desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-center justify-center py-0 lg:py-12 px-0 lg:px-16">
            <div className="w-full lg:max-w-[420px] text-left">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.1 }}
                className="flex flex-col items-start w-full"
              >
                <span className="font-sans text-sm tracking-tight font-extralight uppercase text-botanical mb-4">
                  Feature <span className='font-normal'>05</span>
                </span>
                
                <h2 
                  className="font-display uppercase leading-[1.05] tracking-[-0.03em] mb-2 text-[28px] sm:text-[34px] lg:text-[40px]"
                >
                  <span className="text-charcoal block">Patient Centric &</span>
                  <span className="block">
                    <span className="text-charcoal font-light">Ethically </span>
                    <span className="text-botanical font-normal">Transparent</span>
                  </span>
                </h2>

                <h3 className="font-display text-[0.95rem] tracking-tight text-botanical font-normal mb-6 uppercase">
                  Your Goals First.
                </h3>

                <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] tracking-tight font-light">
                  Custom treatments built around your needs – transparent pricing upfront, no hidden fees or pressure. Private consultations in confidence, ethical care tailored exclusively for you. Trust earned quietly, luxury delivered with integrity.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: Trust Listening (No Judgement) ── */}
      <section
        id="trust-listening"
        className="w-full"
      >
        <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col items-center justify-center text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="w-full max-w-[960px] flex flex-col items-center"
          >
            <h2 
              className="font-display uppercase tracking-[-0.03em] leading-[1.1] mb-8 text-[28px] sm:text-[34px] lg:text-[40px]"
            >
              <span className="text-charcoal block md:inline">We Listen. </span>
              <span className="text-botanical block md:inline font-normal">No Judgement. </span>
              <span className="text-charcoal block md:inline">No Hidden Agenda.</span>
            </h2>

            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.01em] font-light max-w-[620px] mx-auto">
              Private consultations honor complete confidentiality – no forced sales, no pressure toward unnecessary spend. Transparent pricing from the start, ethical protocols built solely around your stated needs and goals. Your trust guides us, your transformation follows.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
