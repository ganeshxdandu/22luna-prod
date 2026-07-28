'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, scaleIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface OneDestinationProps {
  className?: string;
}

export function OneDestination({ className }: OneDestinationProps) {
  return (
    <section
      id="one-destination"
      className={cn('relative w-full bg-moon-ivory overflow-hidden', className)}
    >
      {/* ── Main Content Container: 24px padding on mobile, 32px on desktop (p-6 md:p-8), centered composition ── */}
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-20">
        
        {/* Left Column: Title Block */}
        <div className="w-full lg:w-[360px] shrink-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={{ delay: 0.1, duration: 1.0 }}
            className="flex flex-col gap-1"
          >
            <h2
              className="font-display uppercase leading-[1.05] tracking-[-0.03em] text-[28px] sm:text-[34px] lg:text-[40px]"
            >
              <span className="text-charcoal font-light block">Everything.</span>
              <span className="text-botanical font-normal block">One Destination.</span>
            </h2>
          </motion.div>
        </div>

        {/* Center Column: Arched Sanctuary Image */}
        <div className="w-full lg:w-auto shrink-0 flex justify-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={{ delay: 0.15, duration: 1.2 }}
            className="relative w-full max-w-[360px] lg:max-w-none aspect-[10/15] lg:aspect-none lg:h-[90vh] lg:w-[60vh] overflow-hidden rounded-t-full shadow-sm bg-soft-ivory"
          >
            <Image
              src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110060/SAN_8603_wbggty.jpg"
              alt="22Luna Sanctuary Interior Stairs and Chandelier"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Right Column: Paragraph Description Block */}
        <div className="w-full lg:w-[360px] shrink-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={{ delay: 0.25, duration: 0.9 }}
            className="w-full"
          >
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.005em] font-light">
              Skin + Hair + Dental + IV therapies under serene greenery, no referrals, no clinic hopping. From Hydrafacial to Invisalign to Choukroun PRF, 22Luna delivers complete transformation without leaving our sanctuary. World-class results, singular experience.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
