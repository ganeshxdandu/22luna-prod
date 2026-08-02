'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ENHANCED_TECH_CARDS } from './tech-data';

export interface ScrollPinnedGalleryProps {
  className?: string;
}

export function ScrollPinnedGallery({ className }: ScrollPinnedGalleryProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  
  const [xTranslation, setXTranslation] = React.useState(0);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  // 1. Measure translation distance dynamically using a ResizeObserver on the track
  React.useEffect(() => {
    const calculateTranslation = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // The track translates by total width minus current viewport size
        const maxTranslate = Math.max(0, trackWidth - viewportWidth);
        setXTranslation(maxTranslate);
      }
    };

    calculateTranslation();
    
    // Add small delay to ensure rendering is complete
    const timer = setTimeout(calculateTranslation, 100);

    const resizeObserver = new ResizeObserver(() => {
      calculateTranslation();
    });
    
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
    };
  }, []);

  // 2. Set up vertical scroll tracking for the desktop horizontal translate
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Transform vertical scroll progress directly to horizontal X position
  const x = useTransform(scrollYProgress, [0, 1], [0, -xTranslation]);

  // 3. Update the progress bar based on scroll position
  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest * 100);
    });
  }, [scrollYProgress]);

  // Compute active card index dynamically based on scroll progress for mobile scroll-triggering
  const activeCardIndex = Math.min(
    ENHANCED_TECH_CARDS.length - 1,
    Math.max(0, Math.round((scrollProgress / 100) * (ENHANCED_TECH_CARDS.length - 1)))
  );

  return (
    /* Outer container: acts as scroll track on all screens (h-[260vh]) */
    <div 
      ref={containerRef} 
      id="advanced-technology"
      className={cn('relative w-full h-[260vh]', className)}
    >
      {/* Sticky viewport container: pins screens inside viewport on scroll */}
      <div className="w-full sticky top-0 h-screen overflow-hidden flex flex-col justify-between pt-4 pb-12 md:pt-6 md:pb-16">
        
        {/* Gallery Title & Header Info */}
        <div className="max-w-site mx-auto w-full px-6 md:px-8 mb-4 lg:mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-8">
          <div className="max-w-sm shrink-0">
            <span className="font-sans text-[13px] tracking-tight font-extralight uppercase text-botanical block mb-1">
              Feature <span className="font-normal">01</span>
            </span>
            <h3 className="font-display uppercase leading-[1.05] tracking-[-0.02em] text-[24px] sm:text-[30px] lg:text-[36px]">
              <span className="text-charcoal font-light">Advanced </span>
              <br className="hidden lg:inline" />
              <span className="text-botanical font-normal">Technology</span>
            </h3>
          </div>
          <div className="max-w-xl">
            <p className="font-sans text-stone-gray text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.7] tracking-[0.005em] font-light">
              <span className="text-charcoal font-medium">22Luna understood the assignment.</span>{' '}
              Unmatched technology under one roof, from next-generation Hydrafacials and inventor-grade Choukroun PRF machines to high-end iTero dental scanners and OPG. Devices patients once chased across borders, now seamlessly integrated in serene greenery. World-class precision. Zero travel required.
            </p>
          </div>
        </div>

        {/* Scrollable Gallery Track */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-8 select-none overflow-visible pl-6 pr-6 md:pl-8 md:pr-8 lg:pl-[calc((100vw-1440px)/2+32px)] lg:pr-[calc((100vw-1440px)/2+32px)]"
          >
            {ENHANCED_TECH_CARDS.map((card, i) => {
              const isActive = activeCardIndex === i;
              return (
                <div
                  key={i}
                  className={cn(
                    "relative w-[290px] xs:w-[320px] sm:w-[320px] md:w-[380px] lg:w-[330px] xl:w-[380px] shrink-0 border rounded-[4px] p-5 sm:p-6 flex flex-col justify-between items-stretch aspect-[4/5] sm:aspect-[4/4.6] group overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] select-none",
                    isActive 
                      ? "bg-[#F2EDE2] border-charcoal/[0.08]" 
                      : "bg-soft-ivory border-charcoal/[0.03]",
                    "lg:hover:bg-[#F2EDE2] lg:hover:border-charcoal/[0.08]"
                  )}
                >
                  {/* Diagonal editorial light sweep reflection */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent -translate-x-full lg:group-hover:translate-x-full transition-transform duration-[1400ms] ease-out pointer-events-none z-10" />

                  {/* Minimal top-right exhibition arrow indicator */}
                  <div className={cn(
                    "absolute top-5 right-5 z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive 
                      ? "opacity-30 translate-x-0 lg:opacity-0 lg:-translate-x-1.5" 
                      : "opacity-0 -translate-x-1.5",
                    "lg:group-hover:opacity-40 lg:group-hover:translate-x-0"
                  )}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-charcoal">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Pedestal Shadow Element (moves with image) */}
                  <div className={cn(
                    "absolute top-[52%] sm:top-[48%] left-1/2 -translate-x-1/2 w-20 h-[4px] bg-charcoal/[0.05] rounded-full blur-[3.5px] z-0 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive 
                      ? "scale-x-[0.72] opacity-30 blur-[5px] lg:scale-x-100 lg:opacity-60 lg:blur-[3.5px]" 
                      : "scale-x-100 opacity-60 blur-[3.5px]",
                    "lg:group-hover:scale-x-[0.72] lg:group-hover:opacity-30 lg:group-hover:blur-[5px]"
                  )} />

                  {/* Spotlight background behind the product */}
                  <div className="absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_65%)] pointer-events-none z-0" />

                  {/* Product render container */}
                  <div className="relative w-full flex-1 flex items-center justify-center overflow-visible mb-3 z-10">
                    <div className={cn(
                      "relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 lg:w-28 lg:h-28 xl:w-36 xl:h-36 transform-gpu transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isActive 
                        ? "-translate-y-2.5 scale-[1.04] lg:translate-y-0 lg:scale-100" 
                        : "translate-y-0 scale-100",
                      "lg:group-hover:-translate-y-2.5 lg:group-hover:scale-[1.04]"
                    )}>
                      <CloudinaryImage
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 144px"
                        className="object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.02)]"
                      />
                    </div>
                  </div>

                  {/* Info Text Details */}
                  <div className="flex flex-col z-10 mt-auto">
                    <span className="font-sans text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.22em] text-stone-gray/70 font-semibold mb-1">
                      {card.category}
                    </span>
                    <h5 className={cn(
                      "font-display text-[17px] sm:text-[21px] uppercase text-charcoal font-normal leading-snug tracking-tight mb-1.5 transition-colors duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isActive ? "text-botanical lg:text-charcoal" : "text-charcoal",
                      "lg:group-hover:text-botanical"
                    )}>
                      {card.title}
                    </h5>

                    {/* Expandable Editorial Drawer (shows metadata & description on hover/scroll-active) */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isActive 
                        ? "h-28 opacity-100 lg:h-0 lg:opacity-0" 
                        : "h-0 opacity-0",
                      "lg:group-hover:h-28 lg:group-hover:opacity-100"
                    )}>
                      {/* Refined Metadata Details Row */}
                      <div className="flex items-center gap-2.5 text-[8.5px] sm:text-[9px] font-sans tracking-widest text-stone-gray/50 uppercase pb-2.5 mb-2.5 border-b border-charcoal/[0.04] w-full">
                        <span>{card.origin}</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-charcoal/[0.08]" />
                        <span>{card.spec}</span>
                        {card.fdaApproved && (
                          <>
                            <span className="w-[3px] h-[3px] rounded-full bg-charcoal/[0.08]" />
                            <span className="text-botanical/60 font-semibold">FDA</span>
                          </>
                        )}
                      </div>

                      {/* Description copy */}
                      <p className="font-sans text-[11px] sm:text-[12px] text-stone-gray font-light leading-normal pr-4 w-full">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Hairline interactive hover line */}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-[1.5px] bg-botanical transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "w-full lg:w-0" : "w-0",
                    "lg:group-hover:w-full"
                  )} />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Progress feedback bar */}
        <div className="max-w-site mx-auto w-full px-6 md:px-8 mt-6 lg:mt-8 flex items-center justify-between gap-4 md:gap-6">
          {/* Progress bar track (restored to original) */}
          <div className="h-[2px] bg-charcoal/5 flex-1 rounded-full relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 bottom-0 bg-botanical rounded-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          
          {/* Dynamic Moon Phase Artifact */}
          <div className="shrink-0 flex items-center justify-center w-5 h-5 text-gold" title={`Moon Phase: ${Math.round(scrollProgress)}% illuminated`}>
            <MoonPhase progress={scrollProgress} />
          </div>

          <div className="text-[10px] font-sans text-stone-gray/60 uppercase tracking-widest tabular-nums select-none shrink-0">
            Scroll to explore &bull; {Math.round(scrollProgress)}%
          </div>
        </div>

      </div>
    </div>
  );
}

function MoonPhase({ progress }: { progress: number }) {
  // Clamp progress between 0 and 100
  const p = Math.max(0, Math.min(100, progress));
  
  let rx = 10;
  let sweep = 0;
  
  if (p < 50) {
    // 0% (New Moon) -> 50% (Half Moon): Right crescent shrinks inward to center line
    rx = 10 - (p / 50) * 10;
    sweep = 0; // Curve right (crescent)
  } else {
    // 50% (Half Moon) -> 100% (Full Moon): Left bulge expands outward from center line
    rx = ((p - 50) / 50) * 10;
    sweep = 1; // Curve left (gibbous)
  }
  
  // Guard against zero-radius to avoid console rendering errors in SVG paths
  const safeRx = Math.max(0.01, rx);
  
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      className="text-current rotate-[135deg]"
    >
      {/* Background outline representing the dark/unlit side of the moon */}
      <circle cx="12" cy="12" r="10" />
      
      {/* Dynamic path representing the illuminated portion (moving from right to left) */}
      <path 
        d={`M 12 2 A 10 10 0 0 1 12 22 A ${safeRx} 10 0 0 ${sweep} 12 2 Z`} 
        fill="currentColor" 
      />
    </svg>
  );
}
