'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ConsultationCTAProps {
  className?: string;
}

export function ConsultationCTA({ className }: ConsultationCTAProps) {
  return (
    <section
      id="consultation-cta"
      className={cn(
        'bg-moon-ivory py-16 md:py-24 lg:py-28 px-6 md:px-8 w-full select-none',
        className
      )}
    >
      <div className="max-w-site mx-auto w-full">

        {/* Banner Container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative w-full rounded-[16px] md:rounded-[24px] bg-[#BBA175] py-16 md:py-20 lg:py-24 px-6 md:px-12 text-center overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Subtle diamond background pattern */}
          <div
            className="absolute inset-0 opacity-[0.09] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23ffffff' stroke-width='1.2'/%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3Cpath d='M30 20 L40 30 L30 40 L20 30 Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
          />

          {/* Soft breathing ambient moonlight glow */}
          <motion.div
            animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-white/15 blur-[100px] pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 max-w-[720px] flex flex-col items-center">

            {/* Eyebrow */}
            <span className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-white/60 font-medium mb-5 block">
              Begin With Conversation
            </span>

            <h2 className="font-display text-[1.8rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] text-white leading-tight tracking-tight font-light uppercase mb-5">
              Ready to start your consultation?
            </h2>

            <p className="text-white/85 font-sans font-light text-xs md:text-[14px] tracking-wide leading-[1.75] max-w-[560px] mb-8">
              We look forward to welcoming you into our boutique sanctuary. Book your appointment online or reach out directly to speak with our concierge.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[480px]">
              {/* Primary CTA */}
              <Link
                href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#BBA175] font-sans font-medium text-xs md:text-[13px] py-3.5 px-7 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                Book Consultation
                <ArrowUpRight size={15} strokeWidth={2.5} className="mt-0.5" />
              </Link>

              {/* Secondary CTA: WhatsApp */}
              <a
                href="https://wa.me/918971725522"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-sans font-medium text-xs md:text-[13px] py-3.5 px-7 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <MessageCircle size={15} strokeWidth={2} />
                Talk to Us on WhatsApp
              </a>
            </div>

            {/* Reassurance note */}
            <p className="mt-6 font-sans text-[0.7rem] text-white/50 font-light tracking-wide">
              Unhurried 45-minute appointments · Complete confidentiality
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
