'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData, TreatmentJourneyStage } from '@/lib/treatment-data';

export interface TreatmentJourneyProps {
  treatment: TreatmentData;
  className?: string;
}

const STAGE_LABELS: Record<TreatmentJourneyStage['id'], string> = {
  before: 'Before',
  during: 'During',
  after: 'After',
  recovery: 'Recovery',
};

export function TreatmentJourney({ treatment, className }: TreatmentJourneyProps) {
  const [activeId, setActiveId] = React.useState<TreatmentJourneyStage['id']>(
    treatment.journey[0]?.id ?? 'before'
  );

  const activeStage = treatment.journey.find((s) => s.id === activeId);

  return (
    <section
      id="treatment-journey"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10', className)}
    >
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row items-start gap-14 lg:gap-20">

        {/* ── LEFT: Label, Heading, Tab Navigation ── */}
        <div className="w-full lg:w-[38%] flex flex-col shrink-0">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="mb-8"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-5">
              Your Experience
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
              Your treatment journey.
            </h2>
          </motion.div>

          {/* Stage Tabs */}
          <motion.nav
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            aria-label="Treatment journey stages"
          >
            <div className="flex flex-row lg:flex-col gap-0 border-t border-charcoal/10">
              {treatment.journey.map((stage) => {
                const isActive = stage.id === activeId;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveId(stage.id)}
                    className={cn(
                      'text-left py-4 pr-6 border-b border-charcoal/10 flex items-center justify-between gap-4 transition-colors duration-300 group w-full',
                      isActive
                        ? 'text-charcoal'
                        : 'text-stone-gray hover:text-charcoal'
                    )}
                  >
                    <span
                      className={cn(
                        'font-display text-[0.95rem] sm:text-[1.05rem] uppercase tracking-tight leading-tight transition-colors duration-300',
                        isActive ? 'text-charcoal' : 'text-stone-gray group-hover:text-charcoal'
                      )}
                    >
                      {STAGE_LABELS[stage.id]}
                    </span>

                    {/* Active indicator */}
                    <span
                      className={cn(
                        'w-1 h-1 rounded-full shrink-0 transition-all duration-300',
                        isActive ? 'bg-botanical scale-100' : 'bg-transparent scale-0'
                      )}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </motion.nav>
        </div>

        {/* ── RIGHT: Active Stage Content ── */}
        <div className="w-full lg:w-[56%] lg:pt-[72px]">
          <AnimatePresence mode="wait">
            {activeStage && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-charcoal text-[1.1rem] uppercase tracking-tight mb-8">
                  {activeStage.label}
                </h3>
                <ul className="flex flex-col gap-0 divide-y divide-charcoal/8">
                  {activeStage.points.map((point, i) => (
                    <li key={i} className="py-4 flex items-start gap-5">
                      <span className="font-sans text-[0.65rem] text-stone-gray/50 tabular-nums mt-[3px] shrink-0 font-medium">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans text-charcoal text-[0.82rem] leading-[1.75] font-light">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
