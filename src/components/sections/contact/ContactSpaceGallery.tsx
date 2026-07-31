'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ContactSpaceGalleryProps {
  className?: string;
}

const GALLERY_IMAGES = [
  {
    publicId: '39e8e1b1-2fcd-4b4f-9d72-047c24301a25_vitdbu',
    caption: 'Private Consultation Suite',
    subtitle: 'Unhurried, confidential clinical discussions in serene comfort.',
  },
  {
    publicId: 'SAN_8574_uxe9hm',
    caption: 'REVIV IV Wellness Suite',
    subtitle: 'Tranquil sanctuary environment designed for complete relaxation.',
  },
  {
    publicId: '79e38ee2-3e06-4612-9e47-9bfd60eb07dd_rsdmbx',
    caption: 'Serene Waiting Lounge',
    subtitle: 'A welcoming, hospitality-forward space to rest before your appointment.',
  },
];

export function ContactSpaceGallery({ className }: ContactSpaceGalleryProps) {
  return (
    <section
      id="experience-the-space"
      className={cn('relative w-full bg-moon-ivory border-b border-charcoal/10 py-16 md:py-24 lg:py-28', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mb-14 md:mb-20">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="w-full lg:w-[46%]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Sanctuary Atmosphere
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal">
              Experience the space.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light w-full lg:w-[48%] lg:max-w-[480px]"
          >
            We know that stepping into a clinic for the first time can carry quiet anxiety. We designed 22luna with warm lighting, natural botanical textures, and private suites so you feel welcome from the moment you step inside.
          </motion.p>
        </div>

        {/* Immersive Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((item, idx) => {
            return (
              <motion.div
                key={item.publicId}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={{ delay: 0.1 * idx }}
                className="group flex flex-col gap-4"
              >
                {/* Image frame */}
                <div className="relative w-full aspect-[4/5] rounded-[2px] overflow-hidden bg-charcoal/5 border border-charcoal/10">
                  <CloudinaryImage
                    src={item.publicId}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                {/* Minimal Caption */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-charcoal text-[1.1rem] uppercase tracking-tight font-normal">
                    {item.caption}
                  </h3>
                  <p className="font-sans text-stone-gray text-[0.8rem] leading-[1.6] font-light">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
