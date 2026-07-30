'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';

const STEPS = [
  { id: 'intro', label: 'Intro' },
  {
    id: 'instruments',
    label: 'Sterilized Instruments',
    category: 'LATEST DEVICES',
    titleLines: ['STERILIZED', 'INSTRUMENTS'],
    description: 'All clinical instruments undergo medical-grade autoclave sterilization.',
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/instruments_cstpp8.png',
  },
  {
    id: 'bedding',
    label: 'Sanitized Bedding',
    category: 'PATIENT HYGIENE',
    titleLines: ['SANITIZED', 'BEDDING'],
    description: 'Bedding sanitized for every patient.',
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/bedding_qudetj.png',
  },
  {
    id: 'disposables',
    label: 'Single-Use Disposables',
    category: 'SINGLE-USE',
    titleLines: ['SINGLE-USE', 'DISPOSABLES'],
    description: 'All needles, micro-cannulas, and consumables are strictly single-use.',
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/disposables_bebldt.png',
  },
  {
    id: 'uv',
    label: 'UV Sterilization & Fumigation',
    category: 'AMBIENT PROTECTION',
    titleLines: ['UV STERILIZATION', '& FUMIGATION'],
    description: 'Full suite UV sterilization and chemical fumigation between patients.',
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/fumigation_lcty2k.png',
  },
  { id: 'safety', label: 'Safety' },
  { id: 'foundation', label: 'Foundation' },
];

export interface SterilizationSectionProps {
  className?: string;
}

export function SterilizationSection({ className }: SterilizationSectionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = React.useState(0);

  // Hook scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map progress to steps indices
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const stepCount = STEPS.length;
    // Map progress so that it reaches the final step (Foundation) at 85% scroll progress
    if (latest >= 0.85) {
      setActiveStep(6);
      return;
    }
    const scaledProgress = latest / 0.85;
    const index = Math.floor(scaledProgress * (stepCount - 1));
    setActiveStep(Math.min(Math.max(index, 0), stepCount - 2));
  });

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-[600vh]', className)}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky relative top-0 left-0 w-full h-screen overflow-hidden bg-charcoal">
        
        {/* Background Image: Treatment Room */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110031/Treatment_Room_jdlkol.png"
            alt="22Luna Sterile Treatment Room"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
        </div>

        {/* Dynamic Dark Overlay: sits at z-20 to cover image and corner text */}
        <div 
          className="absolute inset-0 bg-charcoal transition-opacity duration-700 ease-out z-20"
          style={{
            opacity: activeStep === 0 ? 0.2 : activeStep >= 5 ? 0.95 : 0.88
          }}
        />

        {/* Corner Branding Details - z-30 initially to stay bright, dims to z-10 behind overlay on scroll */}
        <div className={cn("absolute top-6 left-6 md:top-8 md:left-8 transition-all duration-700", activeStep === 0 ? "z-30" : "z-10")}>
          <h2 className="font-display text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.05] tracking-[-0.02em] uppercase text-moon-ivory">
            Gold Standard
            <br />
            Sterilization
          </h2>
        </div>

        <div className={cn("absolute top-6 right-6 md:top-8 md:right-8 transition-all duration-700", activeStep === 0 ? "z-30" : "z-10")}>
          <span className="font-sans text-[14px] tracking-tight font-extralight uppercase text-moon-ivory">
            Feature <span className="font-normal">03</span>
          </span>
        </div>

        {/* Bottom Right pinned paragraphs */}
        <div className={cn("absolute bottom-6 right-6 md:bottom-8 md:right-8 max-w-[350px] transition-all duration-700", activeStep === 0 ? "z-30" : "z-10")}>
          <p className="font-sans text-moon-ivory/80 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] tracking-tight font-light text-right md:text-left">
            Most clinics never show what happens behind the scenes. At 22Luna, hygiene isn&apos;t an afterthought. It&apos;s built into every step of your experience.
          </p>
        </div>

        {/* Center Indicators / Scrolling prompts */}
        {activeStep < 5 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center hidden sm:flex flex-col items-center gap-2 pointer-events-none">
            <span className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-moon-ivory/50">
              Active Scroll
            </span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="text-moon-ivory/40 text-[0.6rem]"
            >
              ↓
            </motion.span>
          </div>
        )}

        {/* ── STAGE 1: Mid-Scroll Cards (Steps 1 to 4) ── */}
        <div className="absolute inset-0 flex items-center justify-center z-30 p-6">
          <AnimatePresence mode="wait">
            {activeStep >= 1 && activeStep <= 4 && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F6F3ED] border border-charcoal/[0.06] rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 w-full max-w-[600px] flex flex-col gap-6 md:gap-8"
              >
                {/* Card Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-charcoal/[0.08]">
                  <span className="font-sans text-[11px] tracking-[0.18em] text-stone-gray font-light uppercase">
                    22 LUNA
                  </span>
                  <div className="font-sans text-[13px] tracking-tight">
                    <span className="font-medium text-botanical">0{activeStep}</span>
                    <span className="font-light text-stone-gray">/04</span>
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-start gap-8">
                  {/* Left Column (Text) */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-botanical mb-4">
                      {/* Padlock Icon */}
                      <svg className="w-3.5 h-3.5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span className="font-sans text-[11px] tracking-[0.18em] uppercase font-semibold">
                        INTERNAL PROTOCOL 0{activeStep}
                      </span>
                    </div>

                    <h3 className="font-display text-[24px] sm:text-[28px] md:text-[32px] leading-[1.1] uppercase tracking-tight text-charcoal">
                      <span className="block text-charcoal font-light">
                        {STEPS[activeStep].titleLines?.[0]}
                      </span>
                      <span className="block text-botanical font-normal mt-1">
                        {STEPS[activeStep].titleLines?.[1]}
                      </span>
                    </h3>

                    <p className="font-sans text-stone-gray text-[14px] md:text-[15px] leading-[1.6] font-light mt-2 md:mt-3 max-w-[300px]">
                      {STEPS[activeStep].description}
                    </p>
                  </div>

                  {/* Right Column (Image) */}
                  <div className="relative w-[120px] h-[160px] sm:w-[150px] sm:h-[200px] rounded-[12px] overflow-hidden shrink-0 bg-soft-ivory">
                    <Image
                      src={STEPS[activeStep].image || ''}
                      alt={STEPS[activeStep].label || ''}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── STAGE 2: Safety Statement (Step 5) ── */}
            {activeStep === 5 && (
              <motion.div
                key="safety"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl"
              >
                <h3 className="font-display text-[1.8rem] sm:text-[2.6rem] lg:text-[3rem] text-moon-ivory leading-[1.1] tracking-tight uppercase">
                  Your safety is <br className="sm:hidden" /> not a feature.
                </h3>
              </motion.div>
            )}

            {/* ── STAGE 3: Foundation Statement (Step 6) ── */}
            {activeStep === 6 && (
              <motion.div
                key="foundation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center w-full flex flex-col items-center"
              >
                <span className="font-display text-sm tracking-[0.3em] text-moon-ivory/60 uppercase mb-4">
                  It is our
                </span>
                
                {/* Big typography title */}
                <h3 className="font-display text-[4rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] text-moon-ivory leading-none tracking-[-0.03em] uppercase select-none">
                  Foundation
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
