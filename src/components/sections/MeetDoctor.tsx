'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { buildCloudinaryUrl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';
import { fadeIn, fadeUp } from '@/lib/animations';

const DOCTOR_IMAGE_PUBLIC_ID = 'doctor_qlzziq';
const PATTERN_IMAGE_PUBLIC_ID = 'pattern_zva0wm.svg';

export interface MeetDoctorProps {
  className?: string;
}

export function MeetDoctor({ className }: MeetDoctorProps) {
  const doctorImageUrl = buildCloudinaryUrl(DOCTOR_IMAGE_PUBLIC_ID, {
    width: 1000,
    height: 1375,
    crop: 'fill',
    gravity: 'face',
    quality: 100,
  });

  const patternImageUrl = buildCloudinaryUrl(PATTERN_IMAGE_PUBLIC_ID);

  return (
    <section
      className={cn(
        "bg-moon-ivory py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 w-full relative overflow-hidden select-none",
        className
      )}
    >
      {/* ── Floral Pattern Top Right ── */}
      <div className="absolute top-0 right-0 w-[200px] md:w-[350px] aspect-square opacity-[0.12] select-none pointer-events-none z-0">
        <Image
          src={patternImageUrl}
          alt="Flora Pattern Decor"
          fill
          unoptimized
          className="object-contain object-right-top"
        />
      </div>

      <div className="max-w-site mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
        
        {/* ── Left Side: Arched Image Frame ── */}
        <div className="flex justify-center w-full lg:w-[400px] shrink-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="border border-charcoal/10 rounded-t-full p-3 md:p-4 w-full aspect-[8/11] flex items-center justify-center bg-transparent"
          >
            <div className="w-full h-full relative rounded-t-full overflow-hidden bg-charcoal/5">
              <Image
                src={doctorImageUrl}
                alt="Dr. Niharika Mandhyan"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Right Side: Text & Quote ── */}
        <div className="flex flex-col items-center text-center justify-center max-w-[500px] w-full">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center w-full"
          >
            {/* Header Title */}
            <h2 className="font-display text-[2rem] md:text-[2.5rem] tracking-tighter text-charcoal mb-6 leading-tight font-light">
              Meet <span className="text-botanical font-medium">Dr. Niharika</span>
            </h2>

            {/* Top Double Quotes */}
            <span className="text-botanical/60 text-[3rem] leading-none select-none font-display font-light block mb-[-12px]">
              “
            </span>

            {/* Quote Body */}
            <p className="text-stone-gray font-display text-[0.875rem] md:text-[1rem] leading-[1.75] tracking-wide max-w-[500px]">
              Beautiful skin is never the result of a single treatment. It begins with understanding your lifestyle, your concerns, and the story your skin is telling. Only then do we create a treatment plan that’s uniquely yours.
            </p>

            {/* Bottom Double Quotes */}
            <span className="text-botanical/60 text-[3rem] leading-none select-none font-display font-light block mt-6 mb-6">
              ”
            </span>

            {/* Author details */}
            <div className="flex flex-col gap-1 items-center mb-10">
              <span className="font-sans font-medium text-[0.875rem] md:text-[1rem] text-charcoal">
                Dr. Niharika Mandhyan
              </span>
              <span className="font-sans text-[0.75rem] tracking-wider text-stone-gray font-light">
                Founder, 22 Luna
              </span>
            </div>

            {/* CTA Link */}
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-botanical hover:text-charcoal font-sans text-[0.75rem] font-medium uppercase tracking-tight transition-all duration-300 relative group"
            >
              Read Full Story
              <ArrowUpRight size={13} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-botanical/30 group-hover:bg-charcoal/30 transition-colors duration-300" />
            </Link>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
