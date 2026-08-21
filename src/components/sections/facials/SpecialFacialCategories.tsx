'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const SPECIAL_CATEGORIES = [
  {
    id: 'mens',
    name: "Men's Protocol",
    descriptor: 'Structured clinical care calibrated for thicker dermis, shaving sensitivity, and active sebaceous profiles.',
    focus: 'Texture & Ingrown Prevention',
  },
  {
    id: 'express',
    name: 'Express High-Impact',
    descriptor: 'Compressed 35-minute physician-grade infusion protocols delivering immediate cellular radiance before events.',
    focus: 'Instant Dermal Glow',
  },
  {
    id: 'pregnancy',
    name: 'Pregnancy Glow Safe',
    descriptor: 'Curated 100% pregnancy-safe active botanicals, non-systemic enzyme exfoliation, and deep lymphatic detox.',
    focus: 'Hormonal Harmony & Hydration',
  },
  {
    id: 'teenage',
    name: 'Teenage Skin Genesis',
    descriptor: 'Gentle clarifying extractions, microbiome balancing, and education for barrier preservation in early adulthood.',
    focus: 'Microbiome & Acne Control',
  },
];

export interface SpecialFacialCategoriesProps {
  className?: string;
}

export function SpecialFacialCategories({ className }: SpecialFacialCategoriesProps) {
  return (
    <section
      id="special-facials"
      className={cn(
        'w-full bg-soft-ivory',
        'py-24 md:py-36',
        'border-b border-charcoal/[0.08]',
        className,
      )}
    >
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-charcoal/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-botanical/60" />
              <span className="font-sans text-[0.6rem] tracking-tight uppercase text-botanical font-medium">
                Targeted Life Stages
              </span>
            </div>
            <h2
              className="font-display font-light text-charcoal uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Facials For Every
              <br />
              <span className="italic text-botanical font-light">Skin Journey.</span>
            </h2>
          </div>

          <p className="font-sans font-light text-stone-gray text-[14px] leading-[1.8] max-w-[320px]">
            Dedicated physician protocols engineered for specific physiological milestones, routines, and skin sensitivities.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIAL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className="bg-moon-ivory border border-charcoal/[0.08] p-8 md:p-10 rounded-[2px] flex flex-col justify-between group hover:border-botanical/50 transition-all duration-400"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal/[0.05]">
                  <span className="font-sans text-[0.55rem] tracking-tight uppercase text-stone-gray/50">
                    PROGRAM {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[0.55rem] tracking-tight uppercase text-botanical font-medium">
                    {cat.focus}
                  </span>
                </div>

                <h3 className="font-display text-[1.6rem] sm:text-[1.8rem] font-light text-charcoal mb-3 group-hover:text-botanical transition-colors">
                  {cat.name}
                </h3>

                <p className="font-sans font-light text-stone-gray text-[13.5px] leading-[1.75]">
                  {cat.descriptor}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/[0.04] flex items-center justify-between">
                <span className="font-sans text-[0.6rem] tracking-tight uppercase text-charcoal/40 group-hover:text-botanical transition-colors">
                  Custom Formulation
                </span>
                <ArrowUpRight size={14} className="text-charcoal/30 group-hover:text-botanical group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
