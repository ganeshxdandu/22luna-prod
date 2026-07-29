'use client';

import * as React from 'react';
import { X, Compass, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { cn } from '@/lib/utils';
import { GuidedDiscoveryExperience } from '@/components/sections/discovery/GuidedDiscoveryExperience';

// Custom WhatsApp SVG icon matching our design aesthetics
function WhatsAppIcon({ className, size = 19 }: { className?: string; size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export interface GuidedDiscoveryModalProps {
  className?: string;
}

export function GuidedDiscoveryModal({ className }: GuidedDiscoveryModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTriggersVisible, setIsTriggersVisible] = React.useState(true);
  const lenis = useLenis();

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll and pause Lenis transitions when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [isOpen, lenis]);

  // Handle scroll logic to conditionally hide triggers inside homepage Hero fold
  React.useEffect(() => {
    const checkPathAndScroll = () => {
      const isHomePage = window.location.pathname === '/';
      if (!isHomePage) {
        setIsTriggersVisible(true);
        return;
      }

      // Hide inside hero fold (under 500px of scroll) on home page
      if (window.scrollY > 500) {
        setIsTriggersVisible(true);
      } else {
        setIsTriggersVisible(false);
      }
    };

    // Run initially
    checkPathAndScroll();

    window.addEventListener('scroll', checkPathAndScroll);
    return () => window.removeEventListener('scroll', checkPathAndScroll);
  }, []);

  return (
    <>
      {/* ── 1. STICKY SIDEBAR TAB: MEET LUNA ── */}
      <AnimatePresence>
        {isTriggersVisible && (
          <>
            {/* Desktop View */}
            <div className="fixed right-0 top-[40%] -translate-y-1/2 z-40 select-none hidden sm:block">
              <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                whileHover={{ x: -2 }}
                className="flex flex-col items-center gap-3 bg-botanical text-moon-ivory border-y border-l border-[#BBA175]/30 hover:bg-botanical/95 rounded-l-[4px] py-4 px-2.5 shadow-2xl cursor-pointer group transition-colors duration-300"
                aria-label="Meet Luna: Guided Discovery Panel"
              >
                <Moon size={11} className="text-[#BBA175] fill-[#BBA175]/20 transition-transform duration-500 group-hover:rotate-12" />
                <span
                  className="font-sans text-[0.68rem] uppercase tracking-[0.2em] font-medium text-moon-ivory leading-none"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Meet Luna
                </span>
              </motion.button>
            </div>

            {/* Mobile View */}
            <div className="fixed right-0 top-[40%] -translate-y-1/2 z-40 select-none sm:hidden">
              <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col items-center gap-2 bg-botanical text-moon-ivory border-y border-l border-[#BBA175]/30 py-3 px-2 rounded-l-[4px] shadow-xl cursor-pointer"
                aria-label="Meet Luna"
              >
                <Moon size={10} className="text-[#BBA175] fill-[#BBA175]/20" />
                <span
                  className="font-sans text-[0.62rem] uppercase tracking-[0.16em] font-medium text-moon-ivory leading-none"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Meet Luna
                </span>
              </motion.button>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── 2. FLOATING WHATSAPP BUTTON (Bottom Right Corner) ── */}
      <AnimatePresence>
        {isTriggersVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3 }}
            className={cn('fixed bottom-6 right-6 z-40 select-none', className)}
          >
            <a
              href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-full bg-[#1BD741] text-white w-12 h-12 md:w-14 md:h-14 shadow-2xl hover:scale-105 hover:bg-[#15b334] transition-all duration-300 cursor-pointer border border-white/10"
              aria-label="Chat on WhatsApp"
            >
              {/* WhatsApp Icon */}
              <WhatsAppIcon size={22} className="text-white group-hover:scale-105 transition-transform duration-300" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 3. OVERLAY MODAL ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-charcoal/80 backdrop-blur-md">
            
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-transparent cursor-pointer"
            />

            {/* Modal Card Content Container */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[860px] h-[85vh] sm:h-[90vh] bg-moon-ivory rounded-[12px] shadow-2xl border border-charcoal/15 flex flex-col overflow-hidden z-10 my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-charcoal/10 bg-soft-ivory/90 shrink-0">
                <div className="flex items-center gap-2">
                  <Compass size={16} className="text-botanical" />
                  <span className="font-sans text-[0.7rem] uppercase tracking-[0.18em] text-botanical font-medium">
                    22luna · Guided Discovery Overlay
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal/70 hover:text-charcoal hover:border-charcoal/30 hover:bg-charcoal/5 transition-all duration-200 cursor-pointer"
                  aria-label="Close guided discovery overlay"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Guided Discovery Scrollable Body */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-2 sm:p-4">
                <GuidedDiscoveryExperience 
                  className="min-h-0 py-6 sm:py-8 px-2 sm:px-6 border-b-0" 
                  onClose={() => setIsOpen(false)}
                />
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
