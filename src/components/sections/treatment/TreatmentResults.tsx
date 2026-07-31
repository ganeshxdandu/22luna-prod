'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, scaleIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentResultsProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentResults({ treatment, className }: TreatmentResultsProps) {
  const { results } = treatment;

  return (
    <section
      id="treatment-results"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8">

        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            Results
          </span>
          <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-normal max-w-[420px]">
            What patients experience.
          </h2>
        </motion.div>

        {/* ── FORMAT A: Patient Quote ── */}
        {results.format === 'quote' && results.quote && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={{ delay: 0.2 }}
            className="flex flex-col items-start gap-8 max-w-[720px]"
          >
            {/* Opening mark — minimal */}
            <span className="font-display text-charcoal/10 text-[5rem] leading-none select-none" aria-hidden>
              &ldquo;
            </span>

            <blockquote className="font-display text-charcoal text-[1.2rem] sm:text-[1.45rem] lg:text-[1.65rem] leading-[1.45] tracking-tight font-light -mt-12">
              {results.quote}
            </blockquote>

            {results.attribution && (
              <p className="font-sans text-stone-gray text-[0.75rem] font-light tracking-wide">
                — {results.attribution}
              </p>
            )}
          </motion.div>
        )}

        {/* ── FORMAT B: Before / After Images ── */}
        {results.format === 'before-after' && (
          <div className="flex flex-col sm:flex-row gap-6 items-stretch">

            {/* Before */}
            {results.beforeImage && (
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.2 }}
                className="flex-1 flex flex-col gap-3"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-soft-ivory">
                  <CloudinaryImage
                    src={results.beforeImage}
                    alt="Before treatment"
                    fill
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-gray/70 font-medium">
                  Before
                </span>
              </motion.div>
            )}

            {/* Divider */}
            <div className="hidden sm:flex items-center">
              <div className="w-px h-full bg-charcoal/10" />
            </div>

            {/* After */}
            {results.afterImage && (
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.3 }}
                className="flex-1 flex flex-col gap-3"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-soft-ivory">
                  <CloudinaryImage
                    src={results.afterImage}
                    alt="After treatment"
                    fill
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-gray/70 font-medium">
                  After
                </span>
              </motion.div>
            )}
          </div>
        )}

        {/* Caption (both formats) */}
        {results.caption && (
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.4 }}
            className="mt-8 font-sans text-[0.72rem] text-stone-gray/70 font-light leading-relaxed max-w-[520px]"
          >
            {results.caption}
          </motion.p>
        )}

      </div>
    </section>
  );
}
