'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { CatalogueItem } from '@/lib/treatments-catalogue';

export interface TreatmentCardProps {
  treatment: CatalogueItem;
  className?: string;
  delay?: number;
  onClick?: () => void;
  variant?: 'light' | 'dark';
}

export function TreatmentCard({ treatment, className, delay = 0, onClick, variant = 'light' }: TreatmentCardProps) {
  const targetUrl = `/treatments/${treatment.slug}`;
  const isDark = variant === 'dark';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={{ delay }}
      className={cn(
        'group relative rounded-[2px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 luna-soft-shadow arch-niche-glow',
        isDark 
          ? 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20' 
          : 'bg-soft-ivory/60 hover:bg-soft-ivory border border-charcoal/10 hover:border-charcoal/20',
        className
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Treatment Name */}
        <h4 className={cn(
          "font-display text-[1.15rem] sm:text-[1.25rem] leading-tight tracking-tight uppercase transition-colors duration-300",
          isDark 
            ? "text-moon-ivory group-hover:text-gold" 
            : "text-charcoal group-hover:text-botanical"
        )}>
          {treatment.name}
        </h4>

        {/* Short Description */}
        <p className={cn(
          "font-sans text-[0.82rem] leading-[1.7] font-light",
          isDark ? "text-moon-ivory/60" : "text-stone-gray"
        )}>
          {treatment.description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className={cn(
        "mt-6 pt-4 flex items-center justify-between",
        isDark ? "border-t border-white/5" : "border-t border-charcoal/5"
      )}>
        <Link
          href={targetUrl}
          onClick={onClick}
          className={cn(
            "inline-flex items-center gap-1.5 font-sans text-[0.72rem] uppercase tracking-wider font-medium group/link",
            isDark ? "text-gold hover:text-white" : "text-botanical hover:text-charcoal"
          )}
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
