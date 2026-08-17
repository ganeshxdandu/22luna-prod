'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { buildCloudinaryUrl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  isPlaceholder?: boolean;
}

// Local custom Instagram icon component since the active lucide-react package version excludes brand icons
function InstagramIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/22lunaclinic/';

// Curated fallback posts using the clinic's real Cloudinary assets
const STATIC_FEED: InstagramPost[] = [
  {
    id: 'static_1',
    mediaUrl: buildCloudinaryUrl('wellness_mit4vq', { width: 400, height: 400, crop: 'fill' }),
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Follow our journey of wellness & longevity.',
  },
  {
    id: 'static_space_one',
    mediaUrl: 'https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607603/space-one_sze6zc.png',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Inside our calm Bengaluru sanctuary designed to help you slow down.',
  },
  {
    id: 'static_2',
    mediaUrl: buildCloudinaryUrl('hair_v9hkrz', { width: 400, height: 400, crop: 'fill' }),
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Keravive Scalp Treatment - Hydrafacial for your hair health.',
  },
  {
    id: 'static_space_three',
    mediaUrl: 'https://res.cloudinary.com/doycsx0hd/image/upload/q_auto/f_auto/v1776607577/space-three_ugvc0n.png',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Quiet, intentional spaces for mindful aesthetic care.',
  },
  {
    id: 'static_3',
    mediaUrl: buildCloudinaryUrl('hero_s6fbu6', { width: 400, height: 400, crop: 'fill' }),
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Your crown is your signature - medical hair restoration.',
  },
  {
    id: 'static_4',
    mediaUrl: buildCloudinaryUrl('dental_fpthem', { width: 400, height: 400, crop: 'fill' }),
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Smile designs custom crafted by our cosmetic dentistry team.',
  },
  {
    id: 'static_5',
    mediaUrl: buildCloudinaryUrl('skin_qo9vhn', { width: 400, height: 400, crop: 'fill' }),
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Beautiful skin starts with clinical diagnostics.',
  },
];

const padPosts = (postsArray: InstagramPost[], minCount: number = 8): InstagramPost[] => {
  if (postsArray.length === 0) return [];
  let result = [...postsArray];
  while (result.length < minCount) {
    result = [...result, ...postsArray];
  }
  return result;
};

export interface InstagramFeedProps {
  className?: string;
}

export function InstagramFeed({ className }: InstagramFeedProps) {
  const [posts, setPosts] = React.useState<InstagramPost[]>(STATIC_FEED);

  React.useEffect(() => {
    fetch('/api/instagram')
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson && resJson.data && resJson.data.length > 0) {
          setPosts(resJson.data);
        }
      })
      .catch((err) => console.warn('Instagram local API fetch failed, falling back to static feed:', err));
  }, []);

  const row1 = React.useMemo(() => {
    const half = Math.ceil(posts.length / 2);
    const r1 = posts.slice(0, half);
    return padPosts(r1, 8);
  }, [posts]);

  const row2 = React.useMemo(() => {
    const half = Math.ceil(posts.length / 2);
    const r2 = posts.slice(half);
    return padPosts(r2, 8);
  }, [posts]);

  return (
    <section
      className={cn(
        "bg-moon-ivory py-16 md:py-24 lg:py-32 w-full relative overflow-hidden select-none",
        className
      )}
    >
      {/* ── Heading Block (Constrained grid) ── */}
      <div className="max-w-site mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[550px]"
        >
          <span className="text-[0.75rem] tracking-[0.2em] text-stone-gray uppercase block mb-3 font-sans font-medium">
            Socials
          </span>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.05] tracking-tighter text-charcoal mb-4">
            <span className="font-light">FOLLOW OUR </span>
            <span className="text-botanical font-medium">JOURNEY</span>
          </h2>
          <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide">
            Stories, treatments, and everyday moments from our clinic.
          </p>
        </motion.div>

        {/* pill button to follow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="shrink-0"
        >
          <Link
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-botanical hover:bg-charcoal text-white font-sans text-xs md:text-[13px] font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-sm"
          >
            <InstagramIcon size={15} />
            Follow 22 Luna
          </Link>
        </motion.div>
      </div>

      {/* ── Two-Row Staggered Marquee Display ── */}
      <div className="flex flex-col gap-6 relative z-10 w-full overflow-hidden">
        {/* Left and Right Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-moon-ivory via-moon-ivory/50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-moon-ivory via-moon-ivory/50 to-transparent z-20 pointer-events-none" />

        {/* ROW 1 (Moves left) */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 shrink-0 min-w-full justify-start animate-marquee hover:[animation-play-state:paused] py-1 cursor-pointer">
            {[...row1, ...row1].map((post, idx) => {
              if (post.isPlaceholder) {
                return (
                  <div
                    key={`r1-placeholder-${idx}`}
                    className="w-[240px] md:w-[280px] aspect-square rounded-[4px] bg-charcoal/[0.04] border border-charcoal/[0.03] shrink-0"
                  />
                );
              }
              return (
                <Link
                  key={`r1-post-${post.id}-${idx}`}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[240px] md:w-[280px] aspect-square rounded-[4px] overflow-hidden relative shrink-0 group border border-charcoal/[0.03] shadow-sm bg-charcoal/5"
                >
                  <CloudinaryImage
                    src={post.mediaUrl}
                    alt={post.caption || 'Instagram post'}
                    fill
                    sizes="280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <InstagramIcon className="text-white" size={24} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ROW 2 (Moves right - reverse direction) */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 shrink-0 min-w-full justify-start animate-marquee hover:[animation-play-state:paused] py-1 cursor-pointer [animation-direction:reverse]">
            {[...row2, ...row2].map((post, idx) => (
              <Link
                key={`r2-post-${post.id}-${idx}`}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[240px] md:w-[280px] aspect-square rounded-[4px] overflow-hidden relative shrink-0 group border border-charcoal/[0.03] shadow-sm bg-charcoal/5"
              >
                <CloudinaryImage
                  src={post.mediaUrl}
                  alt={post.caption || 'Instagram post'}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="text-white" size={24} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
