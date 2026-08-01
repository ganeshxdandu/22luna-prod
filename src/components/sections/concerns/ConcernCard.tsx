'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { ConcernItem } from '@/lib/concerns-catalogue';

export interface ConcernCardProps {
  concern: ConcernItem;
  className?: string;
  delay?: number;
}

export function ConcernCard({ concern, className, delay = 0 }: ConcernCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={{ delay }}
      className={cn(
        'group relative bg-soft-ivory/60 hover:bg-soft-ivory border border-charcoal/10 rounded-[2px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:border-charcoal/20 luna-soft-shadow arch-niche-glow',
        className
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Concern Name */}
        <h4 className="font-display text-charcoal text-[1.15rem] sm:text-[1.25rem] leading-tight tracking-tight uppercase group-hover:text-botanical transition-colors duration-300">
          {concern.name}
        </h4>

        {/* One Sentence Description */}
        <p className="font-sans text-stone-gray text-[0.82rem] leading-[1.7] font-light">
          {concern.description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="mt-6 pt-4 border-t border-charcoal/5 flex items-center justify-between">
        <Link
          href={`/concerns/${concern.slug}`}
          className="inline-flex items-center gap-1.5 font-sans text-[0.72rem] uppercase tracking-wider text-botanical font-medium group/link"
        >
          <span>Learn More</span>
          <ArrowUpRight
            size={12}
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.div>
  );
}
