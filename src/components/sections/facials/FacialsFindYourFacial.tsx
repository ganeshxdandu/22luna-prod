'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FacialsFindYourFacialProps {
  className?: string;
}

export function FacialsFindYourFacial({ className }: FacialsFindYourFacialProps) {
  return (
    <section
      id="find-your-facial"
      className={cn(
        'w-full bg-moon-ivory',
        'py-24 md:py-36',
        'border-b border-charcoal/[0.08]',
        className,
      )}
    >
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12">
        <div className="bg-soft-ivory border border-charcoal/[0.08] p-10 md:p-16 lg:p-20 rounded-[2px] relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(185,152,91,0.08) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-botanical/60" />
                <span className="font-sans text-[0.6rem] tracking-tight uppercase text-botanical font-medium">
                  Diagnostic Discovery
                </span>
              </div>

              <h2
                className="font-display font-light text-charcoal uppercase leading-[0.95] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)' }}
              >
                Not Sure
                <br />
                Where To{' '}
                <span className="italic text-botanical font-light">Begin?</span>
              </h2>

              <p className="font-sans font-light text-stone-gray text-[15px] sm:text-[16px] leading-[1.85] max-w-[500px]">
                Your skin doesn't need a one-size-fits-all solution. Our clinical team and diagnostic tools help you match the exact facial tier and treatment matrix best suited to your current skin tolerances, concerns, and long-term vitality.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 sm:flex-row lg:flex-col justify-center">
              <Link
                href="/meet-luna"
                className="inline-flex items-center justify-between rounded-full bg-botanical text-moon-ivory font-sans text-[0.75rem] uppercase tracking-tight px-8 py-4 transition-all duration-300 hover:bg-botanical/90 group shadow-sm"
              >
                <span>Take The Luna Skin Quiz</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="https://wa.me/918971725522?text=I%20would%20like%20guidance%20on%20choosing%20the%20right%20facial%20at%2022Luna."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-full border border-charcoal/20 text-charcoal font-sans text-[0.75rem] uppercase tracking-tight px-8 py-4 transition-all duration-300 hover:border-botanical hover:text-botanical group"
              >
                <span>Consult Our Doctors On WhatsApp</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
