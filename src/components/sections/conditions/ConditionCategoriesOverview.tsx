'use client';

import * as React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { cn } from '@/lib/utils';
import { CONDITION_CATEGORIES } from '@/lib/conditions-catalogue';

export interface ConditionCategoriesOverviewProps {
  className?: string;
}

export function ConditionCategoriesOverview({ className }: ConditionCategoriesOverviewProps) {
  return (
    <section
      id="condition-categories-overview"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Browse Concerns
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.8rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal">
              Explore By Concern Category
            </h2>
          </div>
          <p className="font-sans text-stone-gray text-[0.85rem] font-light max-w-[340px]">
            Organized across skin, hair, and dental disciplines to help you find your starting point.
          </p>
        </motion.div>

        {/* Categories Grid (3 columns on lg, 1-2 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {CONDITION_CATEGORIES.map((category, idx) => {
            return (
              <motion.div
                key={category.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.1 + idx * 0.1 }}
                className="group relative bg-moon-ivory border border-charcoal/10 rounded-[2px] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-charcoal/20 hover:shadow-md"
              >
                {/* Image Aspect Box */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-charcoal/5">
                  <CloudinaryImage
                    src={category.cloudinaryPublicId}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Category Count Badge */}
                  <div className="absolute top-4 right-4 bg-moon-ivory/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-charcoal/10">
                    <span className="font-sans text-[0.65rem] tracking-wider uppercase text-charcoal font-medium">
                      {category.concerns.length} Concerns
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-7 flex flex-col justify-between flex-1 gap-6">
                  <div>
                    <h3 className="font-display text-charcoal uppercase text-[1.45rem] sm:text-[1.65rem] tracking-tight leading-tight mb-3 group-hover:text-botanical transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.75] font-light">
                      {category.description}
                    </p>
                  </div>

                  {/* Explore Anchor CTA */}
                  <div className="pt-4 border-t border-charcoal/8 flex items-center justify-between">
                    <a
                      href={`#${category.id}`}
                      className="inline-flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-wider text-botanical font-medium group/btn"
                    >
                      <span>Explore {category.name}</span>
                      <ArrowDown
                        size={13}
                        className="transition-transform duration-300 group-hover/btn:translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
