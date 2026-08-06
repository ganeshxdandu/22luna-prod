'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play, X } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────

interface Review {
  id: string;
  quote: string;
  author: string;
}

interface Moment {
  id: string;
  type: 'image' | 'reel';
  src: string;
  caption: string;
  aspect: string;
  reelUrl?: string;
}

// ─────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────

const REVIEWS: Review[] = [
  {
    id: 'r1',
    quote: `Dr. Niharika\u2019s expertise and her professional team made me feel completely comfortable and reassured throughout the entire duration of my treatment.`,
    author: 'Kriti Sharma',
  },
  {
    id: 'r2',
    quote: `The consultation never felt rushed. Every recommendation was thoughtfully explained \u2014 I truly appreciated the honest, personalized approach.`,
    author: 'Ankita Kohli',
  },
  {
    id: 'r3',
    quote: `The doctors are genuinely caring, and the staff is amazing. Special thanks to Shirley and Nancy for their constant support throughout my treatment.`,
    author: 'Rekhansh Karamchandani',
  },
  {
    id: 'r4',
    quote: `I noticed visible differences in my skin texture within just three sessions. The follow-up care and guidance they provide is unmatched.`,
    author: 'Rohan Mehra',
  },
  {
    id: 'r5',
    quote: `Every session has been highly professional. The team genuinely understands your concerns and makes you feel comfortable from start to finish.`,
    author: 'Gayathri Seenivasan',
  },
];

// Column 3 starts mid-way through so the two review columns feel distinct
const REVIEWS_C3: Review[] = [
  ...REVIEWS.slice(2),
  ...REVIEWS.slice(0, 2),
];

// Column 2 — distinct portrait/landscape pair
const MOMENTS_C2: Moment[] = [
  {
    id: 'm1',
    type: 'image',
    src: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785395361/Jhanvi_l6ah1g.jpg',
    caption: 'A wellness visit',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'm2',
    type: 'image',
    src: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785470003/Filmy_Grain_V2_boeijs.png',
    caption: 'The clinic space',
    aspect: 'aspect-[4/3]',
  },
];

// Column 4 — different pair
const MOMENTS_C4: Moment[] = [
  {
    id: 'm3',
    type: 'image',
    src: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785395365/tanmay_bqptbe.jpg',
    caption: 'Behind the scenes',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'm4',
    type: 'image',
    src: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785395373/hitha_grrk3a.png',
    caption: 'A quiet moment',
    aspect: 'aspect-[3/4]',
  },
];

// ─────────────────────────────────────────────────────────────────
// Google icon (inline SVG — no external dep)
// ─────────────────────────────────────────────────────────────────

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// Review Tile — minimal ivory editorial card
// ─────────────────────────────────────────────────────────────────

function ReviewTile({ review }: { review: Review }) {
  return (
    <div className={cn(
      'rounded-[3px] p-6 flex flex-col gap-4',
      'bg-[#F6F2EC] border border-charcoal/[0.04]',
      'cursor-default select-none group',
      'transition-all duration-700',
      'hover:border-charcoal/[0.09] hover:shadow-[0_6px_28px_rgba(46,44,41,0.04)]',
    )}>
      {/* Oversized decorative opening quote */}
      <span
        aria-hidden="true"
        className="block font-display text-[3.2rem] leading-[0.6] text-charcoal/[0.06] select-none -mb-1"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex items-center gap-[2px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-[8px] h-[8px] fill-[#B9985B]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="font-display font-light text-charcoal leading-[1.72] tracking-tight text-[0.88rem] md:text-[0.9rem]">
        {review.quote}
      </p>

      {/* Attribution row */}
      <div className="flex items-center justify-between pt-3 border-t border-charcoal/[0.04] mt-auto">
        <span className="font-sans text-[0.58rem] tracking-[0.18em] uppercase text-charcoal/45">
          {review.author}
        </span>
        <div className="flex items-center gap-[5px] opacity-25 group-hover:opacity-50 transition-opacity duration-500">
          <GoogleIcon className="w-[10px] h-[10px]" />
          <span className="font-sans text-[0.5rem] tracking-[0.14em] uppercase text-stone-gray">
            Google
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Moment Tile — curated editorial media frame
// ─────────────────────────────────────────────────────────────────

function MomentTile({
  moment,
  onOpen,
}: {
  moment: Moment;
  onOpen: (m: Moment) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View: ${moment.caption}`}
      onClick={() => onOpen(moment)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(moment); }}
      className={cn(
        'relative overflow-hidden rounded-[3px] cursor-pointer group select-none',
        'shadow-[0_1px_6px_rgba(46,44,41,0.04)]',
        moment.aspect,
      )}
    >
      <CloudinaryImage
        src={moment.src}
        alt={moment.caption}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.035]"
      />

      {/* Hover darkening — barely perceptible */}
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/[0.05] transition-colors duration-700 pointer-events-none" />

      {/* Reel indicator */}
      {moment.type === 'reel' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-moon-ivory/65 backdrop-blur-[3px] flex items-center justify-center shadow-sm transition-transform duration-400 group-hover:scale-110">
            <Play size={12} className="fill-charcoal text-charcoal ml-0.5" />
          </div>
        </div>
      )}

      {/* Caption on hover — museum-label style */}
      <div className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-charcoal/30 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="font-sans text-[0.5rem] tracking-[0.2em] uppercase text-moon-ivory/75">
          {moment.caption}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Generic Infinite Conveyor column
// Items are duplicated internally to create a seamless loop.
// The keyframe name matches what was added to globals.css.
// ─────────────────────────────────────────────────────────────────

function InfiniteConveyor<T extends { id: string }>({
  items,
  direction,
  duration,
  gap = 12,
  renderItem,
  className,
}: {
  items: T[];
  direction: 'up' | 'down';
  duration: number;
  gap?: number;
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}) {
  const [paused, setPaused] = React.useState(false);

  const animationName = direction === 'up' ? 'conveyorUp' : 'conveyorDown';

  return (
    <div
      className={cn('overflow-hidden relative h-full', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${gap}px`,
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {/* Set A */}
        {items.map((item) => (
          <div key={`a-${item.id}`}>{renderItem(item)}</div>
        ))}
        {/* Set B — exact duplicate for seamless infinite loop */}
        {items.map((item) => (
          <div key={`b-${item.id}`}>{renderItem(item)}</div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Lightbox / Video Modal
// ─────────────────────────────────────────────────────────────────

function Modal({ moment, onClose }: { moment: Moment; onClose: () => void }) {
  React.useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="modal-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-charcoal/80 backdrop-blur-md p-6 md:p-12"
        onClick={onClose}
      >
        <motion.div
          key="modal-panel"
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-lg w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-9 right-0 text-moon-ivory/55 hover:text-moon-ivory transition-colors duration-300"
          >
            <X size={19} strokeWidth={1.3} />
          </button>

          {moment.type === 'reel' && moment.reelUrl ? (
            <div className="aspect-[9/16] max-h-[80vh] w-full rounded-[3px] overflow-hidden bg-charcoal shadow-2xl">
              <iframe
                src={moment.reelUrl}
                title="22 Luna Reel"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="rounded-[3px] overflow-hidden shadow-2xl max-h-[82vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={moment.src}
                alt={moment.caption}
                className="w-full h-full object-contain max-h-[82vh]"
              />
            </div>
          )}

          {moment.caption && (
            <p className="mt-3 text-center font-sans text-[0.58rem] tracking-[0.22em] uppercase text-moon-ivory/35">
              {moment.caption}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────
// Main exported section
// ─────────────────────────────────────────────────────────────────

export interface QuietTrustProps {
  className?: string;
}

export function QuietTrust({ className }: QuietTrustProps) {
  const [active, setActive] = React.useState<Moment | null>(null);

  return (
    <>
      {/* ── Full-screen Bento Conveyor ── */}
      <section
        id="stories-of-trust"
        className={cn(
          'relative w-full bg-moon-ivory overflow-hidden flex flex-col',
          'h-screen',
          className,
        )}
      >
        {/* Top & bottom fade — tiles dissolve gracefully at section edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 inset-x-0 z-10 h-32"
          style={{ background: 'linear-gradient(to bottom, #F7F4EF 0%, #F7F4EFb3 55%, transparent 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 z-10 h-32"
          style={{ background: 'linear-gradient(to top, #F7F4EF 0%, #F7F4EFb3 55%, transparent 100%)' }}
        />

        {/* ── Section header — sits above the conveyor columns ── */}
        <header className="relative z-20 shrink-0 px-5 sm:px-8 md:px-12 pt-10 md:pt-14 pb-5 md:pb-6">
          <div className="max-w-site mx-auto flex items-end justify-between gap-6">

            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <span className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-stone-gray/45 block">
                Stories of Trust
              </span>
              <h2 className="font-display font-light text-charcoal leading-[1.08] tracking-tight text-[1.9rem] md:text-[2.5rem] lg:text-[2.8rem]">
                Quietly{' '}
                <span className="text-botanical font-normal italic">trusted.</span>
              </h2>
            </div>

            {/* Legend — desktop only */}
            <div className="hidden md:flex items-center gap-5 pb-1 shrink-0">
              <div className="flex items-center gap-1.5 text-stone-gray/35">
                <GoogleIcon className="w-[11px] h-[11px]" />
                <span className="font-sans text-[0.52rem] tracking-[0.22em] uppercase">
                  Verified Reviews
                </span>
              </div>
              <div className="w-px h-3.5 bg-charcoal/[0.08]" />
              <span className="font-sans text-[0.52rem] tracking-[0.22em] uppercase text-stone-gray/35">
                Clinic Moments
              </span>
            </div>
          </div>

          {/* Hairline beneath header */}
          <div className="max-w-site mx-auto mt-5 h-px bg-charcoal/[0.05]" />
        </header>

        {/* ── Four conveyor columns ── */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="h-full max-w-site mx-auto px-5 sm:px-8 md:px-12 pt-5 pb-0 flex gap-3 md:gap-4">

            {/* ── Col 1: Google Reviews · upward · 44s ── */}
            <InfiniteConveyor
              items={REVIEWS}
              direction="up"
              duration={44}
              gap={12}
              renderItem={(r) => <ReviewTile review={r} />}
              className="w-1/2 lg:flex-1"
            />

            {/* ── Col 2: Clinic Moments · downward · 58s ── */}
            <InfiniteConveyor
              items={MOMENTS_C2}
              direction="down"
              duration={58}
              gap={12}
              renderItem={(m) => <MomentTile moment={m} onOpen={setActive} />}
              className="w-1/2 lg:flex-1"
            />

            {/* ── Col 3: Google Reviews (offset) · upward · 35s ── */}
            <InfiniteConveyor
              items={REVIEWS_C3}
              direction="up"
              duration={35}
              gap={12}
              renderItem={(r) => <ReviewTile review={r} />}
              className="hidden lg:block lg:flex-1"
            />

            {/* ── Col 4: Clinic Moments · downward · 50s ── */}
            <InfiniteConveyor
              items={MOMENTS_C4}
              direction="down"
              duration={50}
              gap={12}
              renderItem={(m) => <MomentTile moment={m} onOpen={setActive} />}
              className="hidden lg:block lg:flex-1"
            />

          </div>
        </div>
      </section>

      {/* ── Modal (lightbox / reel) ── */}
      {active && <Modal moment={active} onClose={() => setActive(null)} />}
    </>
  );
}
