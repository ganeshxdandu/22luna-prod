'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

interface StoryItem {
  id: string;
  category: string;
  rating: number;
  quote: string;
  author: string;
}

const STORIES: StoryItem[] = [
  {
    id: '1',
    category: 'Exceptional Care',
    rating: 5,
    quote: 'Dr. Niharika’s expertise and her professional team made me feel completely comfortable and reassured throughout the entire duration of my treatment.',
    author: 'Kriti Sharma',
  },
  {
    id: '2',
    category: 'Personalized Treatments',
    rating: 5,
    quote: 'The consultation never felt rushed. Every recommendation was thoughtfully explained, and I truly appreciated the honest, personalized approach instead of unnecessary treatments.',
    author: 'Ankita Kohli',
  },
  {
    id: '3',
    category: 'Exceptional Care',
    rating: 5,
    quote: 'The doctors are genuinely caring, and the staff is amazing. Special thanks to Shirley and Nancy for their constant support throughout my treatment.',
    author: 'Rekhansh Karamchandani',
  },
  {
    id: '4',
    category: 'Patient-First Approach',
    rating: 5,
    quote: 'Every session has been highly professional. The team genuinely understands your concerns and makes you feel comfortable from start to finish of the treatment.',
    author: 'Gayathri Seenivasan',
  },
  {
    id: '5',
    category: 'Excellent Results',
    rating: 5,
    quote: 'I noticed visible differences in my skin texture within just three sessions. The follow-up care and guidance they provide is unmatched.',
    author: 'Rohan Mehra',
  },
];

// Double the stories list to create a seamless infinite scroll loop (using keyframe -50% translateX)
const marqueeStories = [...STORIES, ...STORIES];

export interface PatientStoriesProps {
  className?: string;
}

export function PatientStories({ className }: PatientStoriesProps) {
  return (
    <section
      className={cn(
        "bg-moon-ivory py-16 md:py-24 lg:py-28 w-full relative overflow-hidden select-none",
        className
      )}
    >
      {/* ── Left and Right Edge Fade Gradients for Luxury Look ── */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-moon-ivory to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-moon-ivory to-transparent z-10 pointer-events-none" />

      {/* ── Centered Header Area (Constrained to 1440px grid) ── */}
      <div className="max-w-site mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col mb-12 md:mb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[650px] flex flex-col items-center text-center"
          >
            <span className="text-[0.75rem] tracking-[0.2em] text-stone-gray uppercase block mb-3 font-sans font-medium">
              Testimonials
            </span>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter text-charcoal mb-4">
              <span className="font-light">PATIENT </span>
              <span className="text-botanical font-medium">STORIES</span>
            </h2>
            <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide">
              Real experiences from people who trusted us with their skin, hair, and overall well-being.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Cards Infinite Marquee Track (Full Viewport Width - No grid borders) ── */}
      <div className="flex overflow-hidden w-full relative">
        <div className="flex gap-8 shrink-0 min-w-full justify-around items-stretch animate-marquee-slow hover:[animation-play-state:paused] py-4 cursor-pointer">
          {marqueeStories.map((story, idx) => (
            <div
              key={`${story.id}-${idx}`}
              className="w-[85vw] sm:w-[350px] md:w-[420px] shrink-0 bg-[#F2EEE8] rounded-[4px] p-8 flex flex-col justify-between min-h-[340px] md:min-h-[380px] border border-charcoal/[0.03] shadow-[0_4px_24px_rgba(0,0,0,0.01)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-charcoal/[0.06] group"
            >
              {/* Card Header: Category & Stars */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-[12px] font-sans tracking-wide text-stone-gray font-light">
                  {story.category}
                </span>
                
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#B69766] text-[#B69766]"
                    />
                  ))}
                </div>
              </div>

              {/* Card Body: Quote Text */}
              <div className="flex-1 flex flex-col justify-center my-4">
                <p className="font-display text-[18px] text-charcoal leading-[1.6] tracking-tight group-hover:text-charcoal/90 transition-colors duration-300">
                  “{story.quote}”
                </p>
              </div>

              {/* Card Footer: Author (Name is font-light) */}
              <div className="mt-6 pt-4 border-t border-charcoal/[0.05] flex items-center justify-between">
                <span className="font-sans font-light text-[16px] text-botanical transition-colors duration-300 group-hover:text-charcoal">
                  {story.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
