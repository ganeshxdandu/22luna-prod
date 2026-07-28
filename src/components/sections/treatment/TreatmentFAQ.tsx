'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TreatmentData } from '@/lib/treatment-data';

export interface TreatmentFAQProps {
  treatment: TreatmentData;
  className?: string;
}

export function TreatmentFAQ({ treatment, className }: TreatmentFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="treatment-faq"
      className={cn(
        'bg-soft-ivory border-b border-charcoal/10 py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 w-full select-none',
        className
      )}
    >
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* ── Left: Heading (sticky) ── */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:sticky lg:top-[120px]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-5">
              Questions
            </span>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-tighter text-charcoal mb-4">
              Frequently Asked{' '}
              <span className="text-botanical font-medium block md:inline lg:block">
                Questions
              </span>
            </h2>
            <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide max-w-[320px]">
              The most common questions about this treatment, answered plainly.
            </p>
          </motion.div>
        </div>

        {/* ── Right: Accordion ── */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {treatment.faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-charcoal/10 py-6 md:py-7 cursor-pointer transition-colors duration-300"
                onClick={() => toggleItem(idx)}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between gap-6">
                  <h3
                    className={cn(
                      'font-display text-lg md:text-[20px] tracking-tight leading-snug transition-colors duration-300 text-charcoal',
                      isOpen ? 'text-charcoal' : 'hover:text-charcoal/80'
                    )}
                  >
                    {item.question}
                  </h3>

                  {/* Toggle icon */}
                  <span className="text-charcoal/60 shrink-0">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.5} />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-stone-gray font-sans font-light text-xs md:text-sm leading-[1.7] tracking-wide pt-4 max-w-[600px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
