'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface LunarPhaseProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

// Signature Lunar Phase SVG symbols: New Moon ○, Waxing Crescent ◔, First Quarter ◑, Waxing Gibbous ◕, Full Moon ●
const LUNAR_PHASE_SYMBOLS = ['○', '◔', '◑', '◕', '●'];

export function LunarPhaseProgress({
  currentStep,
  totalSteps,
  className,
}: LunarPhaseProgressProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 select-none',
        className
      )}
      aria-label={`Step ${currentStep + 1} of ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }).map((_, idx) => {
        const isCurrent = idx === currentStep;
        const isCompleted = idx < currentStep;
        const phaseSymbol = LUNAR_PHASE_SYMBOLS[idx % LUNAR_PHASE_SYMBOLS.length];

        return (
          <div
            key={idx}
            className="relative flex items-center justify-center transition-all duration-300"
          >
            {isCurrent ? (
              <motion.span
                layoutId="lunar-phase-active"
                className="w-7 h-7 rounded-full border border-botanical bg-botanical/15 flex items-center justify-center text-botanical font-display text-[0.85rem] font-medium shadow-sm"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {phaseSymbol}
              </motion.span>
            ) : isCompleted ? (
              <span className="w-6 h-6 rounded-full border border-botanical/40 bg-botanical/20 flex items-center justify-center text-botanical font-display text-[0.75rem]">
                ●
              </span>
            ) : (
              <span className="w-6 h-6 rounded-full border border-charcoal/15 flex items-center justify-center text-stone-gray/50 font-display text-[0.75rem]">
                ○
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
