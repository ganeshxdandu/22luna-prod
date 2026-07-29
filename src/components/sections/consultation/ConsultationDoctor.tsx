'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { buildCloudinaryUrl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

export interface ConsultationDoctorProps {
  className?: string;
}

export function ConsultationDoctor({ className }: ConsultationDoctorProps) {
  const doctorImageUrl = 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785290554/doc_cxeext.png';

  return (
    <section
      id="meet-your-doctor"
      className={cn(
        'bg-moon-ivory border-b border-charcoal/10 py-20 md:py-28 px-4 sm:px-6 md:px-8 w-full relative overflow-hidden select-none',
        className
      )}
    >
      <div className="max-w-site mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

        {/* ── Left Side: Arched Image Frame ── */}
        <div className="flex justify-center w-full lg:w-[420px] shrink-0 relative">
          {/* Subtle soft ambient moonlight halo */}
          <div className="absolute -inset-4 rounded-t-full bg-[#BBA175]/10 blur-[50px] pointer-events-none" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative border border-charcoal/10 rounded-t-full p-3 md:p-4 w-full aspect-[8/11] flex items-center justify-center bg-transparent luna-soft-shadow"
          >
            <div className="w-full h-full relative rounded-t-full overflow-hidden bg-charcoal/5">
              <Image
                src={doctorImageUrl}
                alt="Dr. Niharika Mandhyan — 22Luna Founder"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Right Side: Doctor Narrative & Quote ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center max-w-[540px] w-full">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-center lg:items-start w-full"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
              Your Practitioner
            </span>

            <h2 className="font-display text-[2rem] sm:text-[2.5rem] tracking-tighter text-charcoal mb-6 leading-tight font-light uppercase">
              Meet <span className="text-botanical font-medium">Dr. Niharika</span>
            </h2>

            <p className="font-sans text-stone-gray text-[15px] sm:text-[16px] leading-[1.85] font-light mb-6">
              &ldquo;When a patient walks into my room, my primary responsibility is not to sell a procedure. It is to listen, observe, and protect their health. Good aesthetic care should leave you feeling confident, informed, and completely like yourself — never altered or pressured.&rdquo;
            </p>

            <div className="flex flex-col gap-1 items-center lg:items-start mb-8 border-t border-charcoal/10 pt-4 w-full">
              <span className="font-sans font-medium text-[0.92rem] text-charcoal">
                Dr. Niharika Mandhyan
              </span>
              <span className="font-sans text-[0.75rem] tracking-wider text-stone-gray font-light">
                Founder & Medical Director, 22Luna
              </span>
            </div>

            <Link
              href="/about#founders-story"
              className="inline-flex items-center gap-1.5 text-botanical hover:text-charcoal font-sans text-[0.75rem] font-medium uppercase tracking-tight transition-all duration-300 relative group"
            >
              Read Our Full Story
              <ArrowUpRight size={13} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-botanical/30 group-hover:bg-charcoal/30 transition-colors duration-300" />
            </Link>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
