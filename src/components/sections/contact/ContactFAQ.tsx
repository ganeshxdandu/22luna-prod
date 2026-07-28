'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ContactFAQItem {
  question: string;
  answer: string;
}

const VISIT_FAQS: ContactFAQItem[] = [
  {
    question: 'Do I need an appointment before visiting?',
    answer: 'To protect patient privacy and preserve an unhurried, serene atmosphere in our sanctuary, all consultations and treatments are conducted by prior appointment. You can book easily online or via WhatsApp.',
  },
  {
    question: 'Where should I park when I arrive?',
    answer: 'Complimentary valet parking is provided directly at our clinic entrance. Our valet team will greet you upon arrival and park your vehicle safely.',
  },
  {
    question: 'Can I bring a partner, friend, or family member with me?',
    answer: 'Yes, absolutely. You are welcome to bring a guest. Our reception lounge is designed with comfortable, quiet seating and ambient refreshments for your companion.',
  },
  {
    question: 'How early should I arrive for my consultation?',
    answer: 'We recommend arriving 10 to 15 minutes before your scheduled appointment time to relax, enjoy a herbal beverage, and complete any brief registration forms without feeling rushed.',
  },
  {
    question: 'What payment methods are accepted at the clinic?',
    answer: 'We accept all major credit and debit cards, UPI, digital bank transfers, and flexible payment plans for multi-session signature protocols.',
  },
];

export interface ContactFAQProps {
  className?: string;
}

export function ContactFAQ({ className }: ContactFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="contact-faq"
      className={cn(
        'bg-moon-ivory border-b border-charcoal/10 py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 w-full select-none',
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
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Practical Information
            </span>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-tighter text-charcoal mb-4">
              Visiting <span className="text-botanical font-medium block md:inline lg:block">Questions</span>
            </h2>
            <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide max-w-[340px]">
              Everything you need to know to make your first visit effortless.
            </p>
          </motion.div>
        </div>

        {/* ── Right Content: Accordion List ── */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {VISIT_FAQS.map((item, idx) => {
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
