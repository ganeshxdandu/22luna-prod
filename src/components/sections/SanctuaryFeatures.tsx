'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ScrollPinnedGallery } from './technology/ScrollPinnedGallery';

export interface SanctuaryFeaturesProps {
  className?: string;
}

export function SanctuaryFeatures({ className }: SanctuaryFeaturesProps) {
  return (
    <section
      id="sanctuary-features"
      className={cn('relative w-full bg-limestone', className)}
    >
      {/* ── Main Content Container ── */}
      <div className="w-full py-6 md:py-8 flex flex-col gap-12 sm:gap-16 relative">
        
        {/* Section Heading: SANCTUARY FEATURES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-site mx-auto w-full px-6 md:px-8 border-b border-charcoal/10 pb-8"
        >
          <div className="w-full">
            <CloudinaryImage
              src="/SANCTUARY FEATURES.svg"
              alt="Sanctuary Features"
              width={1200}
              height={100}
              className="w-full h-auto select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Immersive Scroll-Pinned Gallery Showcase */}
        <div className="w-full">
          <ScrollPinnedGallery />
        </div>
        
      </div>
    </section>
  );
}
