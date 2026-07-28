'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

const TECH_CARDS = [
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/02_ambk1m.png',
    title: 'Lumenis M22',
    subtitle: 'Multi Platform Laser',
    alt: 'Lumenis M22 Multi Platform Laser at 22Luna',
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785122942/03_rsn5jj.png',
    title: 'Hydrafacial Syndeo',
    subtitle: 'Next-generation Facial',
    alt: 'Hydrafacial Syndeo Next-generation Facial cart at 22Luna',
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/01_ipr4rw.png',
    title: 'iTero',
    subtitle: 'Digital Scanner',
    alt: 'iTero Digital Dental Scanner display at 22Luna',
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785109998/04_fyr6z0.png',
    title: 'Derma Pen 4',
    subtitle: 'Microneedling',
    alt: 'Derma Pen 4 Microneedling hand-held device at 22Luna',
  },
];

export interface SanctuaryFeaturesProps {
  className?: string;
}

export function SanctuaryFeatures({ className }: SanctuaryFeaturesProps) {
  return (
    <section
      id="sanctuary-features"
      className={cn('relative w-full bg-limestone', className)}
    >
      {/* ── Main Content Container: 24px padding on mobile, 32px on desktop (p-6 md:p-8) ── */}
      <div className="max-w-site mx-auto w-full p-6 md:p-8 flex flex-col gap-12">
        
        {/* Section Heading: SANCTUARY FEATURES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="w-full border-b border-charcoal/10 pb-8"
        >
          <div className="w-full">
            <img
              src="/SANCTUARY FEATURES.svg"
              alt="Sanctuary Features"
              className="w-full h-auto select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Two Column Layout: Left (2x2 Grid of Cards), Right (Labels + Tech Info) */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16 w-full">
          
          {/* Left Column (7/12 width on desktop): 2x2 Grid of Tech Cards */}
          <div className="w-full lg:w-[58%] shrink-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {TECH_CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={{ delay: i * 0.1, duration: 0.9 }}
                  className="bg-soft-ivory border border-charcoal/[0.06] rounded-[4px] p-6 md:p-8 flex flex-col justify-between items-center min-h-[320px] sm:min-h-[360px] md:min-h-[400px] text-center group hover:border-charcoal/[0.12] transition-colors duration-500"
                >
                  {/* Image wrapper */}
                  <div className="relative w-full flex-1 flex items-center justify-center min-h-[200px]">
                    <div className="relative w-44 h-44 md:w-52 md:h-52 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="mt-6">
                    <p className="font-sans text-[0.82rem] leading-snug tracking-tight">
                      <span className="text-charcoal font-medium">{card.title} </span>
                      <span className="text-stone-gray font-light">{card.subtitle}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (5/12 width on desktop): Spans top-to-bottom of the left cards height */}
          <div className="flex flex-col justify-between lg:w-[38%] shrink-0 py-2 min-h-[300px] lg:min-h-0">
            
            {/* TOP: Feature Label */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={{ delay: 0.1, duration: 0.9 }}
            >
              <p className="font-sans text-[14px] tracking-tight font-extralight uppercase text-botanical">
                Feature <span className="font-normal">01</span>
              </p>
            </motion.div>
 
            {/* BOTTOM: Technology Info */}
            <div className="flex flex-col gap-6 mt-12 lg:mt-0">
              {/* Heading */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={{ delay: 0.2, duration: 1.1 }}
              >
                <h3 className="font-display uppercase leading-[1.05] tracking-[-0.02em] text-[28px] sm:text-[34px] lg:text-[40px]">
                  <span className="text-charcoal font-light">Advanced </span>
                  <br className="hidden sm:inline" />
                  <span className="text-botanical font-normal">Technology</span>
                </h3>
              </motion.div>
 
              {/* Paragraph Description */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.3, duration: 0.9 }}
              >
                <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.005em] font-light">
                  <span className="text-charcoal font-medium">22Luna understood the assignment.</span>{' '}
                  Unmatched technology under one roof, from next-generation Hydrafacials and inventor-grade Choukroun PRF machines to high-end iTero dental scanners and OPG. Devices patients once chased across borders, now seamlessly integrated in serene greenery. World-class precision. Zero travel required.
                </p>
              </motion.div>
            </div>
 
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
