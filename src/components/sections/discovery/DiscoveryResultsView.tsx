'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { DiscoveryResult } from '@/lib/guided-discovery-data';
import { TreatmentCard } from '@/components/sections/treatments/TreatmentCard';

export interface DiscoveryResultsViewProps {
  result: DiscoveryResult;
  onReset: () => void;
  onClose?: () => void;
  className?: string;
}

export function DiscoveryResultsView({
  result,
  onReset,
  onClose,
  className,
}: DiscoveryResultsViewProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={cn('w-full max-w-[900px] flex flex-col items-center text-center', className)}
    >
      {/* Eyebrow */}
      <span className="font-sans text-[0.7rem] tracking-[0.24em] uppercase text-botanical font-medium block mb-4">
        Your Personal Starting Point
      </span>

      {/* Main Headline */}
      <h2 className="font-display text-charcoal uppercase leading-[1.04] tracking-[-0.03em] text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-normal mb-6">
        Based on everything you&apos;ve shared...
      </h2>

      {/* Summary Box */}
      <div className="w-full bg-soft-ivory border border-charcoal/10 rounded-[4px] p-7 sm:p-9 text-left mb-12 luna-soft-shadow flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
          <span className="font-sans text-[0.68rem] tracking-[0.2em] uppercase text-botanical font-medium">
            Primary Focus Area · {result.topCategory}
          </span>
          <span className="font-sans text-[0.72rem] text-stone-gray font-light">
            Guided Assessment
          </span>
        </div>

        <p className="font-sans text-charcoal text-[0.98rem] sm:text-[1.05rem] leading-[1.8] font-light">
          {result.categorySummary}
        </p>

        {/* Suggested Concerns Badges */}
        <div className="pt-2 flex items-center gap-2 flex-wrap">
          <span className="font-sans text-[0.7rem] uppercase text-stone-gray font-medium mr-2">
            Relevant Concerns:
          </span>
          {result.suggestedConcernNames.map((concern, idx) => (
            <span
              key={idx}
              className="bg-moon-ivory border border-charcoal/10 px-3 py-1 rounded-full font-sans text-[0.75rem] text-charcoal font-light"
            >
              {concern}
            </span>
          ))}
        </div>
      </div>

      {/* Suggested Treatment Pathways */}
      <div className="w-full text-left mb-12">
        <h3 className="font-display text-charcoal uppercase text-[1.4rem] tracking-tight mb-2">
          Where We&apos;d Likely Begin Exploring
        </h3>
        <p className="font-sans text-stone-gray text-[0.85rem] font-light mb-8">
          {result.whySuitable}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {result.suggestedTreatments.map((t, idx) => (
            <TreatmentCard
              key={t.slug}
              treatment={t}
              delay={0.1 * idx}
              onClick={onClose}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[480px] mb-10">
        <Link
          href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.75rem] uppercase px-8 py-4 tracking-tight transition-all duration-300 hover:bg-botanical/90 group shadow-md"
        >
          Book Consultation
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-moon-ivory text-stone-gray border border-charcoal/15 font-sans text-[0.72rem] uppercase px-6 py-3.5 tracking-tight transition-all duration-300 hover:border-charcoal/30 hover:text-charcoal"
        >
          <RotateCcw size={13} />
          Start Over
        </button>
      </div>

      {/* Medical Reassurance Disclaimer */}
      <div className="pt-6 border-t border-charcoal/10 w-full max-w-[620px]">
        <p className="font-sans text-[0.78rem] text-stone-gray/80 font-light leading-[1.75] italic">
          &ldquo;This isn&apos;t a diagnosis. Every person&apos;s skin, hair, and biological concerns are unique. Your consultation helps us understand your needs properly before recommending any treatment.&rdquo;
        </p>
      </div>
    </motion.div>
  );
}
