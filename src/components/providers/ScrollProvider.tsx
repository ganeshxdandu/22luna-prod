'use client';

import * as React from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

function ScrollHandler() {
  const lenis = useLenis();

  React.useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          if (href === '#') return; // Skip empty fallback hashes
          
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement, {
              offset: 0,
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easeOut
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);

  return null;
}

export interface ScrollProviderProps {
  children: React.ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, syncTouch: false }}>
      <ScrollHandler />
      {children}
    </ReactLenis>
  );
}
