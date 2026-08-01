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

  return (
    /* Outer container: acts as scroll track on all screens (h-[260vh]) */
    <div 
      ref={containerRef} 
      id="advanced-technology"
      className={cn('relative w-full h-[260vh]', className)}
    >
      {/* Sticky viewport container: pins screens inside viewport on scroll */}
      <div className="w-full sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-4 sm:py-10">
        
        {/* Gallery Title & Header Info */}
        <div className="max-w-site mx-auto w-full px-6 md:px-8 mb-6 lg:mb-8 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-8">
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
            {ENHANCED_TECH_CARDS.map((card, i) => (
              <div
                key={i}
                className="w-[290px] xs:w-[320px] sm:w-[320px] md:w-[380px] lg:w-[330px] xl:w-[380px] shrink-0 bg-soft-ivory border border-charcoal/[0.05] rounded-[4px] p-5 sm:p-8 lg:p-6 xl:p-8 flex flex-col justify-between items-stretch aspect-[3/4] sm:aspect-[4/5] group hover:border-charcoal/[0.12] hover:shadow-[0_16px_40px_rgb(46,44,41,0.03)] transition-all duration-700"
              >
                {/* Product render container with premium soft frame */}
                <div className="relative w-full flex-1 bg-charcoal/[0.012] rounded-[2px] flex items-center justify-center p-4 lg:p-3 xl:p-5 overflow-hidden mb-4 sm:mb-6">
                  <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-44 sm:h-44 lg:w-40 lg:h-40 xl:w-48 xl:h-48 transition-transform duration-1000 ease-editorial group-hover:scale-[1.03]">
                    <CloudinaryImage
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 200px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Info Text Details */}
                <div className="flex flex-col">
                  <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-botanical font-bold mb-1">
                    {card.category}
                  </span>
                  <h5 className="font-display text-[16px] sm:text-[20px] uppercase text-charcoal font-medium leading-snug tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                    {card.title}
                  </h5>
                  <div className="h-0 group-hover:h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block">
                    <p className="font-sans text-[11px] sm:text-[12px] text-stone-gray font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-charcoal/[0.04] flex items-center justify-between text-[10px] sm:text-[11px] font-sans tracking-wide text-charcoal/40">
                    <span>{card.subtitle}</span>
                    <span className="text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      Discover →
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
