'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Do I need a consultation before starting treatment?',
    answer: 'Yes. Every treatment begins with a detailed consultation where we understand your concerns, lifestyle, and goals before creating a personalized treatment plan.',
  },
  {
    question: 'How do I know which treatment is right for me?',
    answer: 'During your initial consultation, our experienced specialists will analyze your skin or hair concern and recommend the most effective signature program tailored to your needs.',
  },
  {
    question: 'When will I start seeing results?',
    answer: 'Results vary depending on the treatment and individual concerns. Some clients see immediate hydration and radiance after skin treatments, while hair and longevity programs show progressive results over a few weeks.',
  },
  {
    question: 'Are the treatments safe?',
    answer: 'Absolutely. All our procedures are performed using premium, FDA-approved technologies and clinical-grade formulations under strict medical protocols by qualified specialists.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can easily schedule a consultation by clicking our "Book Consultation" button, calling our clinic directly, or filling out the contact form on our website.',
  },
];

export interface FAQProps {
  className?: string;
}

export function FAQ({ className }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0); // Initially open the first item as shown in figma

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={cn(
        "bg-soft-ivory py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 w-full select-none",
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
            viewport={{ once: true, margin: "-100px" }}
            className="lg:sticky lg:top-[120px]"
          >
            <span className="text-[0.75rem] tracking-[0.2em] text-stone-gray uppercase block mb-3 font-sans font-medium">
              Information
            </span>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-tighter text-charcoal mb-4">
              Frequently Asked <span className="text-botanical font-medium block md:inline lg:block">Questions</span>
            </h2>
            <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide max-w-[360px]">
              Find answers to common inquiries about our signature programs and patient journey.
            </p>
          </motion.div>
        </div>

        {/* ── Right Content: Accordion List ── */}
        <div className="lg:col-span-7 flex flex-col w-full">
          {FAQ_ITEMS.map((item, idx) => {
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
                      "font-display text-lg md:text-[20px] tracking-tight leading-snug transition-colors duration-300 text-charcoal",
                      isOpen ? "text-charcoal" : "hover:text-charcoal/80"
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
                      <p className="text-stone-gray font-sans font-light text-xs md:text-sm leading-[1.6] tracking-wide pt-4 max-w-[620px]">
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
