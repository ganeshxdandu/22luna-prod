'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { buildCloudinaryUrl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';

// ─────────────────────────────────────────────────────────
// 👇 PASTE YOUR LOGO PUBLIC IDs HERE
//    We have pre-filled the first one with your Cloudinary public ID.
//    Please replace the other placeholders with your actual SVG logo names.
// ─────────────────────────────────────────────────────────
const LOGOS = [
  { name: 'Brera', publicId: 'brera_qrh9ba.svg', scale: 0.95 },
  { name: 'Mediderma', publicId: 'mediderma_osyyq0.svg', scale: 0.85 },
  { name: 'iS Clinical', publicId: 'isclinical_qcm56g.svg', scale: 0.75 }, // Emblems render tall, scale down
  { name: 'Sesderma', publicId: 'sesderma_jp4lqr.svg', scale: 0.85 },
  { name: 'Hydrafacial', publicId: 'hydrafacial_c5zmlk.svg', scale: 0.95 },
  { name: 'Reviv', publicId: 'reviv_jd7waj.svg', scale: 0.8 },
  { name: 'Isdin', publicId: 'isdin_a641fp.svg', scale: 0.8 }, // Heavy bold text, scale down
];
// ─────────────────────────────────────────────────────────

// Double the logos list to create a seamless infinite scroll loop
const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

export interface LogoMarqueeProps {
  className?: string;
}

export function LogoMarquee({ className }: LogoMarqueeProps) {
  return (
    <section
      className={cn(
        "bg-moon-ivory border-y border-stone-gray/10 py-8 md:py-10 overflow-hidden relative select-none w-full",
        className
      )}
    >
      {/* ── Left and Right Edge Fade Gradients for Luxury Look ── */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-moon-ivory to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-moon-ivory to-transparent z-10 pointer-events-none" />

      {/* ── Marquee Track ── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex w-full overflow-hidden"
      >
        <div className="flex gap-16 md:gap-28 shrink-0 min-w-full justify-around items-center animate-marquee">
          {marqueeLogos.map((logo, idx) => {
            const logoUrl = buildCloudinaryUrl(logo.publicId);
            return (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center shrink-0 transition-transform duration-300"
                style={{ 
                  width: 'clamp(110px, 12vw, 160px)', 
                  height: '40px',
                  transform: `scale(${logo.scale ?? 1})` 
                }}
              >
                <Image
                  src={logoUrl}
                  alt={`${logo.name} logo`}
                  width={140}
                  height={40}
                  unoptimized
                  className="max-h-full max-w-full object-contain brightness-0 opacity-50 hover:opacity-90 transition-all duration-500 ease-out"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
