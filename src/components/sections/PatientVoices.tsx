'use client';

/**
 * PatientVoices — Premium 100vh living review wall.
 *
 * Four independent vertical marquee columns (1 & 3 up, 2 & 4 down) at
 * slightly different speeds, driven by all 59 real Google Business Profile
 * reviews sourced from /testimonials.json at the project root.
 *
 * Clicking any card opens a clean modal with the full review.
 * Hovering a column pauses only that column.
 *
 * Design: editorial luxury, warm ivory, minimal, no glassmorphism.
 * Inspired by Apple, COS, Aesop, Aman Hotels.
 */

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/lib/testimonialsData';

export type Review = Testimonial;

/**
 * Distribute curated testimonials across 4 columns using round-robin.
 * Spreads short, medium, and long testimonials across all 4 columns
 * creating an organic bento rhythm with natural height variation.
 */
const COLUMNS: Testimonial[][] = Array.from({ length: 4 }, (_, col) =>
  TESTIMONIALS.filter((_, i) => i % 4 === col),
);

// ─────────────────────────────────────────────────────────────────
// Google Icon (inline SVG — no external dependency)
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
// Star Rating
// ─────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn('w-[8px] h-[8px]', i < rating ? 'fill-[#B9985B]' : 'fill-charcoal/12')}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Review Card
// • Natural height from text content (no fixed heights)
// • Long reviews clamped to 4 lines with "Read more" affordance
// • Hover: subtle y-lift + shadow
// • Click: opens full review modal
// ─────────────────────────────────────────────────────────────────

/** Characters before a review is considered "long" and gets clamped. */
const CLAMP_THRESHOLD = 180;

function ReviewCard({
  review,
  onClick,
}: {
  review: Review;
  onClick: () => void;
}) {
  const isLong = (review.content?.length ?? 0) > CLAMP_THRESHOLD;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Read full review by ${review.name}`}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      className={cn(
        // Base
        'rounded-[14px] border border-charcoal/[0.055]',
        'bg-[#F6F2EC]',
        'p-5 flex flex-col gap-3',
        'cursor-pointer select-none',
        // Hover — pure CSS for zero conflict with parent CSS animation
        'transition-all duration-400 ease-out',
        'hover:-translate-y-[3px]',
        'hover:shadow-[0_8px_28px_rgba(46,44,41,0.06)]',
        'hover:border-charcoal/[0.10]',
      )}
    >
      {/* Large editorial opening quote mark */}
      <span
        aria-hidden="true"
        className="block font-display text-[3rem] leading-[0.62] text-charcoal/[0.065] select-none -mb-1"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <Stars rating={review.rating} />

      {/* Reviewer name */}
      <p className="font-sans text-[0.62rem] font-medium tracking-[0.16em] uppercase text-charcoal/45 leading-none">
        {review.name}
        {review.isLocalGuide && (
          <span className="ml-1.5 font-normal text-[0.5rem] tracking-[0.1em] text-botanical/55">
            · Local Guide
          </span>
        )}
      </p>

      {/* Review body */}
      <div className="flex flex-col gap-1.5">
        <p
          className={cn(
            'font-display font-light text-charcoal leading-[1.72] tracking-tight',
            'text-[0.875rem]',
            isLong && 'line-clamp-4',
          )}
        >
          {review.content}
        </p>
        {isLong && (
          <span className="font-sans text-[0.56rem] tracking-[0.14em] uppercase text-botanical/55">
            Read more
          </span>
        )}
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between pt-3 border-t border-charcoal/[0.04] mt-auto">
        <div className="flex items-center gap-1 opacity-30">
          <GoogleIcon className="w-[10px] h-[10px]" />
          <span className="font-sans text-[0.5rem] tracking-[0.14em] uppercase text-stone-gray">
            Google
          </span>
        </div>
        {review.reviewedAt && (
          <span className="font-sans text-[0.52rem] tracking-[0.08em] text-stone-gray/35">
            {review.reviewedAt}
          </span>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Infinite Conveyor Column
// Uses conveyorUp / conveyorDown keyframes defined in globals.css.
// Items are rendered twice (set A + set B) so the translateY(-50%)
// animation creates a perfectly seamless loop.
// ─────────────────────────────────────────────────────────────────

function InfiniteConveyor({
  reviews,
  direction,
  duration,
  onCardClick,
  className,
}: {
  reviews: Review[];
  direction: 'up' | 'down';
  duration: number;
  onCardClick: (r: Review) => void;
  className?: string;
}) {
  const [paused, setPaused] = React.useState(false);

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
          gap: '12px',
          animation: `${direction === 'up' ? 'conveyorUp' : 'conveyorDown'} ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {/* Set A */}
        {reviews.map((r) => (
          <ReviewCard key={`a-${r.id}`} review={r} onClick={() => onCardClick(r)} />
        ))}
        {/* Set B — exact duplicate for seamless infinite loop */}
        {reviews.map((r) => (
          <ReviewCard key={`b-${r.id}`} review={r} onClick={() => onCardClick(r)} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Review Modal — full review in a clean centered panel
// ─────────────────────────────────────────────────────────────────

function ReviewModal({
  review,
  onClose,
}: {
  review: Review;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="rv-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-charcoal/70 backdrop-blur-[8px] p-5 md:p-10"
        onClick={onClose}
      >
        <motion.div
          key="rv-panel"
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'relative w-full max-w-md',
            'bg-[#F6F2EC] rounded-[16px]',
            'border border-charcoal/[0.07]',
            'p-7 md:p-8',
            'shadow-[0_24px_64px_rgba(46,44,41,0.14)]',
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close review"
            className="absolute top-4 right-4 text-charcoal/25 hover:text-charcoal/55 transition-colors duration-200"
          >
            <X size={16} strokeWidth={1.4} />
          </button>

          {/* Large quote */}
          <span
            aria-hidden="true"
            className="block font-display text-[3rem] leading-[0.65] text-charcoal/[0.07] -mb-1"
          >
            &ldquo;
          </span>

          {/* Stars */}
          <Stars rating={review.rating} />

          {/* Full review text */}
          <p className="mt-4 font-display font-light text-charcoal text-[0.95rem] md:text-[1rem] leading-[1.75] tracking-tight">
            {review.content || 'Verified Google Review'}
          </p>

          {/* Attribution */}
          <div className="mt-6 pt-5 border-t border-charcoal/[0.05] flex items-end justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="font-sans text-[0.65rem] font-medium tracking-[0.18em] uppercase text-charcoal/50">
                {review.name}
              </span>
              {review.isLocalGuide && (
                <span className="font-sans text-[0.52rem] tracking-[0.12em] uppercase text-botanical/50">
                  Google Local Guide
                </span>
              )}
              {review.reviewedAt && (
                <span className="font-sans text-[0.55rem] tracking-[0.08em] text-stone-gray/38 mt-0.5">
                  {review.reviewedAt}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 opacity-35 shrink-0">
              <GoogleIcon className="w-3 h-3" />
              <span className="font-sans text-[0.52rem] tracking-[0.14em] uppercase text-stone-gray">
                Google Review
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────
// Trust Metric pill
// ─────────────────────────────────────────────────────────────────

function TrustMetric({
  value,
  label,
  gold,
}: {
  value?: string;
  label: string;
  gold?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[3px]">
      {value && (
        <span className={cn(
          'font-display font-light leading-none tracking-tight',
          gold
            ? 'text-[1.5rem] md:text-[1.6rem] text-charcoal'
            : 'text-[1.15rem] md:text-[1.25rem] text-charcoal',
        )}>
          {gold && (
            <span className="text-[#B9985B] mr-0.5" aria-hidden="true">★</span>
          )}
          {value}
        </span>
      )}
      <span className="font-sans text-[0.58rem] tracking-[0.2em] uppercase text-stone-gray/50 font-light">
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Main exported component
// ─────────────────────────────────────────────────────────────────

export interface PatientVoicesProps {
  className?: string;
}

export function PatientVoices({ className }: PatientVoicesProps) {
  const [activeReview, setActiveReview] = React.useState<Review | null>(null);

  return (
    <>
      <section
        id="patient-voices"
        aria-label="Patient Reviews"
        className={cn(
          'relative w-full bg-moon-ivory overflow-hidden flex flex-col h-screen',
          className,
        )}
      >
        {/* ── Edge fade overlays — tiles dissolve in/out cleanly ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 inset-x-0 z-10 h-32"
          style={{
            background:
              'linear-gradient(to bottom, #F7F4EF 0%, rgba(247,244,239,0.7) 50%, transparent 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 z-10 h-32"
          style={{
            background:
              'linear-gradient(to top, #F7F4EF 0%, rgba(247,244,239,0.7) 50%, transparent 100%)',
          }}
        />

        {/* ── Trust Summary Header ── */}
        <header className="relative z-20 shrink-0 px-5 sm:px-8 md:px-12 pt-10 md:pt-14 pb-0">
          <div className="max-w-site mx-auto">

            {/* Section label */}
            <span className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-stone-gray/45 block mb-2">
              Patient Voices
            </span>

            {/* Heading + metrics in a responsive flex row */}
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">

              {/* Heading + sub-copy */}
              <div>
                <h2 className="font-display font-light text-charcoal leading-[1.08] tracking-tight text-[1.85rem] md:text-[2.4rem] lg:text-[2.75rem]">
                  What our patients{' '}
                  <span className="text-botanical font-normal italic">say.</span>
                </h2>
                <p className="mt-2.5 font-sans text-sm md:text-[16px] text-stone-gray/55 font-light leading-relaxed max-w-[440px]">
                  Every word below is sourced directly and unedited from our Google Business Profile.
                </p>
              </div>

              {/* Trust metrics —  inline display */}
              <div className="flex items-center gap-6 md:gap-8 shrink-0 pb-0.5">
                <TrustMetric value="4.8" label="Google Rating" gold />

                <div className="w-px h-9 bg-charcoal/[0.07]" aria-hidden="true" />

                <TrustMetric value="500+" label="Verified Reviews" />

                <div className="w-px h-9 bg-charcoal/[0.07] hidden sm:block" aria-hidden="true" />

                <TrustMetric label="Trusted in Bangalore" />
              </div>
            </div>

            {/* Hairline divider */}
            <div className="mt-5 h-px bg-charcoal/[0.05]" />
          </div>
        </header>

        {/* ── Living Review Wall — 4 independent marquee columns ── */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="h-full max-w-site mx-auto px-5 sm:px-8 md:px-12 pt-4 flex gap-3 md:gap-4">

            {/*
              Column widths are set with flex-1 (equal) on desktop.
              On mobile only 2 columns show (cols 3 & 4 are hidden).
              Speed pattern: 48 / 65 / 38 / 56 — ascending then descending
              creates the subtle parallax feel without any column feeling
              identical to another.
            */}

            {/* Col 1 — upward · 48s (Always visible — 1 column on mobile) */}
            <InfiniteConveyor
              reviews={COLUMNS[0]}
              direction="up"
              duration={48}
              onCardClick={setActiveReview}
              className="flex-1"
            />

            {/* Col 2 — downward · 65s (Visible on sm+ / tablet & desktop) */}
            <InfiniteConveyor
              reviews={COLUMNS[1]}
              direction="down"
              duration={65}
              onCardClick={setActiveReview}
              className="flex-1 hidden sm:block"
            />

            {/* Col 3 — upward · 38s (Visible on lg+ / desktop) */}
            <InfiniteConveyor
              reviews={COLUMNS[2]}
              direction="up"
              duration={38}
              onCardClick={setActiveReview}
              className="flex-1 hidden lg:block"
            />

            {/* Col 4 — downward · 56s (Visible on lg+ / desktop) */}
            <InfiniteConveyor
              reviews={COLUMNS[3]}
              direction="down"
              duration={56}
              onCardClick={setActiveReview}
              className="flex-1 hidden lg:block"
            />

          </div>
        </div>
      </section>

      {/* ── Full Review Modal ── */}
      {activeReview && (
        <ReviewModal review={activeReview} onClose={() => setActiveReview(null)} />
      )}
    </>
  );
}
