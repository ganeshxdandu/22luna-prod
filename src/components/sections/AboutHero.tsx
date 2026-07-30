'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, scaleIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

// Hero image: Cloudinary delivers the optimized URL — unoptimized=true skips Next.js re-compression.
const ABOUT_HERO_IMAGE =
  'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785109974/20_pddy2m.png';

export interface AboutHeroProps {
  className?: string;
}

export function AboutHero({ className }: AboutHeroProps) {
  return (
    <section
      id="about-hero"
      className={cn('relative w-full bg-moon-ivory lg:h-screen lg:overflow-hidden', className)}
    >
      {/*
       * Outer padding shell — 24px on mobile (px-6 pb-6), 32px on desktop (px-8 pb-8).
       * On mobile the image stacks below the text.
       * On desktop the flex row sits inside this padded box;
       * the image fills its column but stays contained (hard edges, no overflow).
       */}
      <div className="px-6 pb-6 pt-[96px] md:px-8 md:pb-8 md:pt-[104px] flex flex-col lg:flex-row gap-10 lg:gap-0 min-h-screen lg:h-full">

        {/* ── LEFT: Text Column ── */}
        <div className="relative flex flex-col w-full lg:w-5/12 shrink-0 lg:pr-8">

          {/* Headline + Coordinates — same row, right edge aligns with paragraph */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.1, duration: 1.1 }}
            className="flex items-start justify-between max-w-[360px]"
          >
            <h1
              className="font-display text-charcoal leading-[1.0] tracking-[-0.03em] uppercase text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] font-normal"
            >
              Our Space
            </h1>

            {/* Coordinates — right-aligned, vertically centered with heading cap-height */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.3, duration: 0.9 }}
              className="shrink-0 self-center pl-3"
            >
              <a
                href="https://www.google.com/maps/place/22+Luna+Clinic/@12.9746503,77.6041185,17z/data=!4m6!3m5!1s0x3bae172a127754b9:0xfb75683bb0e65b33!8m2!3d12.9746503!4d77.6041185!16s%2Fg%2F11w6pbdp6h"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-end gap-[3px] hover:text-botanical/70 transition-colors duration-300 group"
                title="View 22 Luna Clinic on Google Maps"
              >
                <span className="font-sans text-xs tracking-tight text-botanical tabular-nums group-hover:underline decoration-botanical/40">
                  12.9747° N
                </span>
                <span className="font-sans text-xs tracking-tight text-botanical tabular-nums group-hover:underline decoration-botanical/40">
                  77.6041° E
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Body copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.25, duration: 1.0 }}
            className="mt-3"
          >
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.8] tracking-[0.005em] max-w-[360px]">
              Our Boutique sanctuary in the heart of Bengaluru City offers a blend of cutting edge tech with tranquil design private suites, ambient lighting and seamless flow from Consultation to Glow
            </p>
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* EXPLORE ↓ — desktop only (bottom of left column) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.55, duration: 0.9 }}
            className="hidden lg:block"
          >
            <a
              href="#about-philosophy"
              className="group inline-flex items-center gap-2 font-sans text-xs tracking-[0.08em] uppercase text-botanical hover:text-botanical/70 transition-colors duration-300"
            >
              Explore
              <span
                className="inline-block transition-transform duration-500 group-hover:translate-y-1"
                aria-hidden
              >
                ↓
              </span>
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Clinic Image — contained with hard edges ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.15, duration: 1.2 }}
          className="relative w-full lg:w-7/12 overflow-hidden aspect-[3/2] sm:aspect-video lg:aspect-auto lg:h-full shrink-0"
          /* Hard edges — no border-radius, no overflow */
        >
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="22Luna Clinic - Our boutique sanctuary in Bengaluru"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center"
          />

          {/* Subtle depth gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/8 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* EXPLORE ↓ — mobile only (after image, at bottom of section) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.55, duration: 0.9 }}
          className="lg:hidden pt-6"
        >
          <a
            href="#about-philosophy"
            className="group inline-flex items-center gap-2 font-sans text-xs tracking-[0.08em] uppercase text-botanical hover:text-botanical/70 transition-colors duration-300"
          >
            Explore
            <span
              className="inline-block transition-transform duration-500 group-hover:translate-y-1"
              aria-hidden
            >
              ↓
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
