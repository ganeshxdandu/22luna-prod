'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

interface TestimonialItem {
  id: string;
  type: 'testimonial';
  category: string;
  quote: string;
  author: string;
}

interface ImageItem {
  id: string;
  type: 'image';
  src: string;
  caption: string;
  aspect: string;
}

type GridItem = TestimonialItem | ImageItem;

export interface QuietTrustProps {
  className?: string;
}

// Visual Moments & Editorial Testimonial Data
const ITEMS: GridItem[] = [
  {
    id: 't-1',
    type: 'testimonial',
    category: 'Exceptional Care',
    quote: 'Dr. Niharika’s expertise and her professional team made me feel completely comfortable and reassured throughout the entire duration of my treatment.',
    author: 'Kriti Sharma',
  },
  {
    id: 'i-1',
    type: 'image',
    src: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785395361/Jhanvi_l6ah1g.jpg',
    caption: 'A quiet wellness visit.',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 't-2',
    type: 'testimonial',
    category: 'Personalized Care',
    quote: 'The consultation never felt rushed. Every recommendation was thoughtfully explained, and I truly appreciated the honest, personalized approach instead of unnecessary treatments.',
    author: 'Ankita Kohli',
  },
  {
    id: 'i-2',
    type: 'image',
    src: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785395365/tanmay_bqptbe.jpg',
    caption: 'A moment of care.',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 't-3',
    type: 'testimonial',
    category: 'Atmosphere & Vibe',
    quote: 'Absolutely loved the interiors and Vibe.',
    author: 'Hitha Chandrasekhar',
  },
  {
    id: 'i-3',
    type: 'image',
    src: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785395373/hitha_grrk3a.png',
    caption: 'Thoughtful, personalized attention.',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 't-4',
    type: 'testimonial',
    category: 'Exceptional Care',
    quote: 'The doctors are genuinely caring, and the staff is amazing. Special thanks to Shirley and Nancy for their constant support throughout my treatment.',
    author: 'Rekhansh Karamchandani',
  },
  {
    id: 't-5',
    type: 'testimonial',
    category: 'Excellent Results',
    quote: 'I noticed visible differences in my skin texture within just three sessions. The follow-up care and guidance they provide is unmatched.',
    author: 'Rohan Mehra',
  },
  {
    id: 't-6',
    type: 'testimonial',
    category: 'Patient-First Approach',
    quote: 'Every session has been highly professional. The team genuinely understands your concerns and makes you feel comfortable from start to finish of the treatment.',
    author: 'Gayathri Seenivasan',
  },
];

// Helper components for rendering cards
function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="py-12 md:py-14 border-t border-b border-charcoal/[0.06] flex flex-col justify-center my-6">
      <span className="text-[10px] tracking-[0.2em] text-botanical uppercase block mb-4 font-sans font-semibold">
        {item.category}
      </span>
      <p className="font-display text-[20px] md:text-[24px] text-charcoal leading-[1.5] tracking-tight font-light italic">
        “{item.quote}”
      </p>
      <span className="text-[11px] font-sans tracking-[0.15em] text-stone-gray uppercase block mt-6">
        - {item.author}
      </span>
    </div>
  );
}

function ImageCard({ item }: { item: ImageItem }) {
  return (
    <div className="my-6 group flex flex-col">
      <div className={cn("relative overflow-hidden rounded-[8px] bg-charcoal/[0.03] border border-charcoal/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.01)] transition-all duration-700", item.aspect)}>
        <CloudinaryImage
          src={item.src}
          alt={item.caption}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] scale-[1.01] group-hover:scale-105"
        />
        {/* Editorial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 border border-charcoal/[0.03] rounded-[8px] pointer-events-none" />
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] text-stone-gray font-sans mt-3 block pl-1 font-light">
        {item.caption}
      </span>
    </div>
  );
}

function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="break-inside-avoid"
    >
      {children}
    </motion.div>
  );
}

export function QuietTrust({ className }: QuietTrustProps) {
  // Map items to layout columns statically to prevent hydration mismatch while having complete layout control.
  
  // Desktop columns layout
  const desktopColumn1 = [ITEMS[0], ITEMS[1], ITEMS[6]];
  const desktopColumn2 = [ITEMS[3], ITEMS[4], ITEMS[7]];
  const desktopColumn3 = [ITEMS[2], ITEMS[5], ITEMS[8]];

  // Tablet columns layout
  const tabletColumn1 = [ITEMS[0], ITEMS[1], ITEMS[6], ITEMS[7], ITEMS[4]];
  const tabletColumn2 = [ITEMS[3], ITEMS[2], ITEMS[5], ITEMS[8]];

  // Mobile layout
  const mobileList = [ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3], ITEMS[4], ITEMS[5], ITEMS[6], ITEMS[7], ITEMS[8]];

  return (
    <section
      className={cn(
        "bg-moon-ivory py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 w-full relative overflow-hidden select-none border-t border-charcoal/[0.03]",
        className
      )}
    >
      {/* Editorial aesthetic ambient elements */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-10 w-[500px] h-[500px] bg-botanical/2 blur-[120px] pointer-events-none" />

      <div className="max-w-site mx-auto relative z-10 flex flex-col">
        
        {/* ── Centered Header Area ── */}
        <div className="max-w-[750px] flex flex-col items-center text-center mb-8 md:mb-12 mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-[0.75rem] tracking-[0.2em] text-stone-gray uppercase block mb-3 font-sans font-medium">
              Stories of Trust
            </span>
            <h2 className="font-display text-[32px] md:text-[40px] leading-[1.15] tracking-tight text-charcoal mb-6">
              <span className="font-light">Quietly </span>
              <span className="text-botanical font-normal">Trusted</span>
            </h2>
            <p className="text-stone-gray font-sans font-light text-[15px] md:text-[16px] max-w-[580px] leading-relaxed">
              Trust is built through thoughtful care, meaningful conversations, and genuine relationships. We believe in letting these authentic moments and experiences speak for themselves.
            </p>
          </motion.div>
        </div>

        {/* ── Editorial Asymmetrical Layouts ── */}
        
        {/* 1. Desktop Layout (3 Columns - Staggered) */}
        <div className="hidden lg:grid grid-cols-3 gap-12 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {desktopColumn1.map((item) => (
              <AnimatedCard key={item.id}>
                {item.type === 'testimonial' ? (
                  <TestimonialCard item={item} />
                ) : (
                  <ImageCard item={item} />
                )}
              </AnimatedCard>
            ))}
          </div>

          {/* Column 2 (Offset downwards for editorial rhythm) */}
          <div className="flex flex-col gap-6 pt-20">
            {desktopColumn2.map((item) => (
              <AnimatedCard key={item.id}>
                {item.type === 'testimonial' ? (
                  <TestimonialCard item={item} />
                ) : (
                  <ImageCard item={item} />
                )}
              </AnimatedCard>
            ))}
          </div>

          {/* Column 3 (Offset differently for editorial rhythm) */}
          <div className="flex flex-col gap-6 pt-10">
            {desktopColumn3.map((item) => (
              <AnimatedCard key={item.id}>
                {item.type === 'testimonial' ? (
                  <TestimonialCard item={item} />
                ) : (
                  <ImageCard item={item} />
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* 2. Tablet Layout (2 Columns - Staggered) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-10 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {tabletColumn1.map((item) => (
              <AnimatedCard key={item.id}>
                {item.type === 'testimonial' ? (
                  <TestimonialCard item={item} />
                ) : (
                  <ImageCard item={item} />
                )}
              </AnimatedCard>
            ))}
          </div>

          {/* Column 2 (Offset downwards) */}
          <div className="flex flex-col gap-6 pt-14">
            {tabletColumn2.map((item) => (
              <AnimatedCard key={item.id}>
                {item.type === 'testimonial' ? (
                  <TestimonialCard item={item} />
                ) : (
                  <ImageCard item={item} />
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* 3. Mobile Layout (1 Column - Stacked with generous padding) */}
        <div className="flex flex-col gap-8 md:hidden">
          {mobileList.map((item) => (
            <AnimatedCard key={item.id}>
              {item.type === 'testimonial' ? (
                <TestimonialCard item={item} />
              ) : (
                <ImageCard item={item} />
              )}
            </AnimatedCard>
          ))}
        </div>

      </div>
    </section>
  );
}
