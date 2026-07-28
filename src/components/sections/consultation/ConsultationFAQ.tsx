'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const CONSULTATION_FAQS: FAQItem[] = [
  {
    question: 'How long is a consultation?',
    answer: 'Consultations typically last between 30 to 45 minutes. We reserve ample time so you never feel rushed, allowing us to discuss your concerns, review your history, and explain options thoroughly.',
  },
  {
    question: 'Do I need to start treatment immediately?',
    answer: 'Never. There is zero obligation to receive or book a treatment on the same day. Many patients take their personalized plan home, reflect on the recommendations, and return when they feel completely comfortable.',
  },
  {
    question: 'Can I come only for advice?',
    answer: 'Absolutely. Many of our consultations are purely advisory — whether you want a second medical opinion on a current skin concern, advice on your home skincare routine, or clarity on a procedure you have been researching.',
  },
  {
    question: 'Will I receive a written treatment plan?',
    answer: 'Yes. Following your consultation, Dr. Niharika provides a clear, tailored recommendation outlining proposed steps, estimated session timelines, home-care guidance, and transparent pricing.',
  },
  {
    question: 'Is consultation suitable if I am completely unsure of what I need?',
    answer: 'Yes — in fact, that is precisely who consultation is designed for. You do not need any prior knowledge of aesthetic procedures. You only need to describe how your skin or hair feels to you.',
  },
];

export interface ConsultationFAQProps {
  className?: string;
}

export function ConsultationFAQ({ className }: ConsultationFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="consultation-faq"
      className={cn(
        'bg-soft-ivory border-b border-charcoal/10 py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 w-full select-none',
        className
      )}
    >
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* ── Left Content: Heading & Subtitle ── */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:sticky lg:top-[120px]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3 font-sans">
              Clarity First
            </span>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-tighter text-charcoal mb-4">
              Consultation <span className="text-botanical font-medium block md:inline lg:block">Questions</span>
            </h2>
            <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide max-w-[340px]">
              Honest answers to common questions about your first visit to 22luna.
            </p>
          </motion.div>
        </div>

        {/* ── Right Content: Accordion List ── */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {CONSULTATION_FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-charcoal/10 py-6 md:py-7 cursor-pointer transition-colors duration-300"
                onClick={() => toggleItem(idx)}
              >
                {/* Accordion Trigger Header */}
                <div className="flex items-center justify-between gap-6">
                  <h3
                    className={cn(
                      'font-display text-lg md:text-[20px] tracking-tight leading-snug transition-colors duration-300 text-charcoal',
                      isOpen ? 'text-charcoal' : 'hover:text-charcoal/80'
                    )}
                  >
                    {item.question}
                  </h3>

                  {/* Toggle icon block */}
                  <span className="text-charcoal/60 shrink-0">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.5} className="transition-transform duration-300" />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} className="transition-transform duration-300" />
                    )}
                  </span>
                </div>

                {/* Accordion Answer content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-stone-gray font-sans font-light text-xs md:text-sm leading-[1.75] tracking-wide pt-4 max-w-[620px]">
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
