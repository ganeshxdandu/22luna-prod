'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface LunaDividerProps {
  className?: string;
}

export function LunaDivider({ className }: LunaDividerProps) {
  return (
    <div className={cn('w-full max-w-site mx-auto px-6 md:px-8 py-8 flex items-center justify-center relative select-none', className)}>
      {/* Horizontal hairline */}
      <div className="w-full h-[1px] bg-charcoal/10" />

      {/* Centered Lunar Ring Accent */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bg-moon-ivory px-3 flex items-center justify-center"
      >
        <div className="w-2.5 h-2.5 rounded-full border border-botanical/50 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-botanical/80" />
        </div>
      </motion.div>
    </div>
  );
}
