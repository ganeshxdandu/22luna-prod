'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

export interface UnderstandingCTAProps {
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function UnderstandingCTA({
  className,
  title = "Beautiful Results Begin With Understanding",
  subtitle = "Every consultation is an opportunity to understand your skin, your lifestyle, and your goals before creating a treatment plan that's thoughtfully designed for you.",
  buttonText = "Book Consultation",
  buttonHref = "https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation.",
}: UnderstandingCTAProps) {
  return (
    <section
      className={cn(
        "bg-moon-ivory py-16 md:py-24 lg:py-28 px-6 md:px-8 w-full select-none",
        className
      )}
    >
      <div className="max-w-site mx-auto w-full">
        
        {/* ── Banner Container ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full rounded-[16px] md:rounded-[24px] bg-[#BBA175] py-16 md:py-20 lg:py-24 px-6 md:px-12 text-center overflow-hidden flex flex-col items-center justify-center"
        >
          {/* ── Clean SVG Geometric Diamond Background Pattern ── */}
          <div 
            className="absolute inset-0 opacity-[0.09] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23ffffff' stroke-width='1.2'/%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3Cpath d='M30 20 L40 30 L30 40 L20 30 Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
          />

          {/* ── Soft Breathing Ambient Moonlight Glow ── */}
          <motion.div
            animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-white/15 blur-[100px] pointer-events-none"
          />

          {/* ── Content ── */}
          <div className="relative z-10 max-w-[750px] flex flex-col items-center">
            
            <h2 className="font-display text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[40px] text-white leading-tight tracking-tight font-light uppercase">
              {title}
            </h2>
            
            <p className="text-white/85 font-sans font-light text-xs md:text-sm tracking-wide leading-[1.6] max-w-[620px] mt-4 mb-8">
              {subtitle}
            </p>

            <Link
              href={buttonHref}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#BBA175] font-sans font-medium text-sm md:text-[15px] py-4 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              {buttonText}
              <ArrowUpRight size={15} strokeWidth={2.5} className="mt-0.5" />
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
