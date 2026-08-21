'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, ArrowUpRight, ChevronDown, ChevronRight, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TREATMENT_CATEGORIES } from '@/lib/treatments-catalogue';
import { CONCERN_CATEGORIES } from '@/lib/concerns-catalogue';
import { useLenis } from 'lenis/react';
import { TreatmentsMegaMenu } from './TreatmentsMegaMenu';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // { label: 'Consultation', href: '/consultation' },
  { label: 'Concerns', href: '/concerns' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Clinical Facials', href: '/clinical-facials' },
  // { label: 'Medical Tourism', href: '/medical-tourism' }, // moved to footer
  // { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
  { label: 'LUNA+', href: '/luna-plus' },
  { label: 'Shop', href: '/shop' },
];

export type HeaderVariant = 'dark' | 'light';

export interface HeaderProps {
  className?: string;
  /** 'dark'  → transparent → charcoal (default, for pages with dark hero)
   *  'light' → ivory bg, charcoal text, botanical CTA (for pages with light bg) */
  variant?: HeaderVariant;
}

export function Header({ className, variant = 'dark' }: HeaderProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cartHovered, setCartHovered] = React.useState(false);
  const pathname = usePathname();

  const lenis = useLenis();

  // Mega Menu states
  const [megaMenuType, setMegaMenuType] = React.useState<'treatments' | 'concerns' | null>(null);
  const [activeConcernCategoryIdx, setActiveConcernCategoryIdx] = React.useState(0);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = React.useState(false);
  const [mobileActiveTreatmentCategory, setMobileActiveTreatmentCategory] = React.useState<string | null>('skin');
  const [mobileConcernsOpen, setMobileConcernsOpen] = React.useState(false);
  const [mobileActiveConcernCategory, setMobileActiveConcernCategory] = React.useState<string | null>('skin-concerns');

  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const cancelCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const startCloseTimeout = () => {
    cancelCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuType(null);
    }, 150);
  };

  const handleTreatmentsMouseEnter = () => {
    cancelCloseTimeout();
    setMegaMenuType('treatments');
  };

  const handleTreatmentsMouseLeave = () => {
    startCloseTimeout();
  };

  const handleConcernsMouseEnter = () => {
    cancelCloseTimeout();
    setMegaMenuType('concerns');
  };

  const handleConcernsMouseLeave = () => {
    startCloseTimeout();
  };

  const handleMenuMouseEnter = () => {
    cancelCloseTimeout();
  };

  const handleMenuMouseLeave = () => {
    startCloseTimeout();
  };

  const closeMegaMenu = () => {
    cancelCloseTimeout();
    setMegaMenuType(null);
  };

  React.useEffect(() => {
    setMobileTreatmentsOpen(false);
    setMobileConcernsOpen(false);
  }, [mobileOpen]);

  // Escape key closes the mega menu
  React.useEffect(() => {
    if (megaMenuType === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cancelCloseTimeout();
        setMegaMenuType(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [megaMenuType]);

  // Lock body scroll and stop Lenis when mega menu or mobile drawer is open
  React.useEffect(() => {
    if (megaMenuType !== null || mobileOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [megaMenuType, mobileOpen, lenis]);

  const activeConcernCat = CONCERN_CATEGORIES[activeConcernCategoryIdx];

  const isLight = variant === 'light';

  React.useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (currentY < 40) {
        setVisible(true);
      } else {
        const diff = currentY - lastY;
        if (diff > 5) {
          setVisible(false);
        } else if (diff < -5) {
          setVisible(true);
        }
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightMode = isLight || scrolled;

  const headerClass = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform border-b',
    scrolled
      ? 'bg-moon-ivory/95 backdrop-blur-md shadow-sm border-charcoal/10'
      : isLight
        ? 'bg-moon-ivory border-charcoal/10'
        : 'bg-transparent border-white/5',
    visible ? 'translate-y-0' : '-translate-y-full pointer-events-none',
    className
  );

  return (
    <>
      {/* Backdrop Overlay to dim the page beneath the header */}
      <AnimatePresence>
        {megaMenuType !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMegaMenu}
            className="fixed inset-0 top-16 md:top-[72px] bg-charcoal/40 z-30 pointer-events-auto"
          />
        )}
      </AnimatePresence>

      <header className={headerClass}>
        <div className="max-w-site mx-auto w-full flex items-center justify-between px-4 sm:px-6 md:px-8 h-16 md:h-[72px]">

          {/* Logo */}
          <div className="md:flex-1 flex justify-start">
            <Link href="/" className="relative h-9 md:h-12 w-28 md:w-36 select-none group">
              <Image
                src={isLightMode ? '/logo-dark.svg' : '/logo.svg'}
                alt="22LUNA"
                fill
                className={cn(
                  'object-contain object-left',
                  isLightMode ? '' : 'brightness-0 invert'
                )}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isShop = link.label === 'Shop';
              const isTreatments = link.label === 'Treatments';
              const isConcerns = link.label === 'Concerns';

              return (
                <React.Fragment key={link.href}>
                  {isShop && (
                    <span 
                      className={cn(
                        'w-px h-3.5 block shrink-0 -mx-1.5', 
                        isLightMode ? 'bg-charcoal/15' : 'bg-white/15'
                      )} 
                      aria-hidden="true" 
                    />
                  )}
                  {isTreatments ? (
                    <div
                      onMouseEnter={handleTreatmentsMouseEnter}
                      onMouseLeave={handleTreatmentsMouseLeave}
                      className="py-4 cursor-pointer"
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'font-sans transition-colors duration-300 relative text-sm tracking-tight flex items-center gap-1',
                          isLightMode
                            ? isActive || megaMenuType === 'treatments' ? 'font-medium' : 'font-light'
                            : isActive || megaMenuType === 'treatments' ? 'font-semibold' : 'font-light',
                          isLightMode
                            ? isActive || megaMenuType === 'treatments'
                              ? 'text-botanical'
                              : 'text-stone-gray hover:text-botanical'
                            : isActive || megaMenuType === 'treatments'
                              ? 'text-white'
                              : 'text-moon-ivory/80 hover:text-white'
                        )}
                      >
                        {link.label}
                        <ChevronDown 
                          size={13} 
                          strokeWidth={1.5}
                          className={cn(
                            "transition-transform duration-300",
                            megaMenuType === 'treatments' && "rotate-180"
                          )}
                        />
                      </Link>
                    </div>
                  ) : isConcerns ? ( 
                    <div
                      onMouseEnter={handleConcernsMouseEnter}
                      onMouseLeave={handleConcernsMouseLeave}
                      className="py-4 cursor-pointer"
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'font-sans transition-colors duration-300 relative text-sm tracking-tight flex items-center gap-1',
                          isLightMode
                            ? isActive || megaMenuType === 'concerns' ? 'font-medium' : 'font-light'
                            : isActive || megaMenuType === 'concerns' ? 'font-semibold' : 'font-light',
                          isLightMode
                            ? isActive || megaMenuType === 'concerns'
                              ? 'text-botanical'
                              : 'text-stone-gray hover:text-botanical'
                            : isActive || megaMenuType === 'concerns'
                              ? 'text-white'
                              : 'text-moon-ivory/80 hover:text-white'
                        )}
                      >
                        {link.label}
                        <ChevronDown 
                          size={13} 
                          strokeWidth={1.5}
                          className={cn(
                            "transition-transform duration-300",
                            megaMenuType === 'concerns' && "rotate-180"
                          )}
                        />
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'font-sans transition-colors duration-300 relative text-sm tracking-tight flex items-center gap-[5px]',
                        isLightMode
                          ? isActive ? 'font-medium' : 'font-light'
                          : isActive ? 'font-semibold' : 'font-light',
                        isLightMode
                          ? isActive
                            ? 'text-botanical font-medium'
                            : 'text-stone-gray hover:text-botanical'
                          : isActive
                            ? 'text-white'
                            : 'text-moon-ivory/80 hover:text-white'
                      )}
                    >
                      {link.label === 'LUNA+' && (
                        <Crown 
                          size={14} 
                          strokeWidth={1.5} 
                          className="text-botanical shrink-0" 
                          aria-hidden="true" 
                        />
                      )}
                      <span>{link.label}</span>
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="md:flex-1 flex justify-end items-center gap-2 md:gap-4">
            {/* Cart with Custom Tooltip */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setCartHovered(true)}
              onMouseLeave={() => setCartHovered(false)}
            >
              <Link
                href="/shop"
                aria-label="Shop Collection"
                className={cn(
                  'transition-colors duration-300 p-1.5 flex items-center justify-center',
                  isLightMode
                    ? 'text-charcoal/70 hover:text-botanical'
                    : 'text-moon-ivory/80 hover:text-botanical'
                )}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
              </Link>

              {/* Floating Custom Tooltip */}
              <AnimatePresence>
                {cartHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 top-full mt-2.5 w-60 rounded-[8px] bg-moon-ivory border border-charcoal/10 p-4 shadow-lg z-50 text-left pointer-events-none luna-soft-shadow"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-botanical shrink-0" />
                      <span className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-botanical font-medium">
                        Shop Coming Soon
                      </span>
                    </div>
                    <p className="font-sans text-stone-gray text-[0.78rem] leading-[1.5] font-light">
                      Thoughtfully curated. Worth the wait.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Consultation CTA (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center tracking-tight gap-1.5 rounded-full font-sans text-[0.75rem] uppercase px-5 py-2.5 transition-all duration-300',
                  isLightMode
                    ? 'bg-botanical text-moon-ivory hover:bg-botanical/90 border border-botanical'
                    : 'border border-moon-ivory/40 text-moon-ivory/90 hover:border-moon-ivory hover:text-moon-ivory hover:bg-moon-ivory/10'
                )}
              >
                Book Consultation
                <ArrowUpRight size={13} strokeWidth={1.8} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className={cn(
                'md:hidden p-2',
                isLightMode ? 'text-charcoal' : 'text-moon-ivory'
              )}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-[5px]">
                <span className={cn('block w-5 h-px transition-all duration-300', isLightMode ? 'bg-charcoal' : 'bg-moon-ivory', mobileOpen && 'rotate-45 translate-y-[7px]')} />
                <span className={cn('block w-5 h-px transition-all duration-300', isLightMode ? 'bg-charcoal' : 'bg-moon-ivory', mobileOpen && 'opacity-0')} />
                <span className={cn('block w-5 h-px transition-all duration-300', isLightMode ? 'bg-charcoal' : 'bg-moon-ivory', mobileOpen && '-rotate-45 -translate-y-[7px]')} />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menus */}
        <AnimatePresence>
          {megaMenuType === 'treatments' && (
            <TreatmentsMegaMenu
              isOpen={megaMenuType === 'treatments'}
              onClose={closeMegaMenu}
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              onFocus={cancelCloseTimeout}
              onBlur={startCloseTimeout}
            />
          )}

          {megaMenuType === 'concerns' && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              role="dialog"
              aria-label="Concerns navigation"
              className="absolute left-0 right-0 top-full z-40 bg-moon-ivory border-b border-charcoal/15 shadow-2xl shadow-charcoal/10"
            >
              {/* ── TOP CATEGORY SELECTOR ──────────────────────────────── */}
              <div className="border-b border-charcoal/10 bg-moon-ivory/95 backdrop-blur-md">
                <div className="max-w-[1520px] mx-auto w-full px-6 sm:px-8 md:px-12">
                  <div className="flex items-center gap-6 md:gap-10" role="tablist" aria-label="Concern categories">
                    {CONCERN_CATEGORIES.map((cat, idx) => (
                      <button
                        key={cat.id}
                        role="tab"
                        aria-selected={activeConcernCategoryIdx === idx}
                        onClick={() => setActiveConcernCategoryIdx(idx)}
                        onFocus={cancelCloseTimeout}
                        onBlur={startCloseTimeout}
                        className={cn(
                          'relative py-4 px-1 font-sans text-xs tracking-[0.12em] uppercase transition-colors duration-200 focus:outline-none cursor-pointer group',
                          activeConcernCategoryIdx === idx
                            ? 'text-botanical font-semibold'
                            : 'text-stone-gray hover:text-charcoal font-medium'
                        )}
                      >
                        <span className="relative z-10">{cat.name}</span>
                        {activeConcernCategoryIdx === idx && (
                          <motion.span
                            layoutId="concernCatUnderline"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-botanical"
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── ACTIVE CATEGORY INTRO BAR ──────────────────────────── */}
              <div className="border-b border-charcoal/10 bg-moon-ivory">
                <div className="max-w-[1520px] mx-auto w-full px-6 sm:px-8 md:px-12 py-4 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl md:text-3xl font-normal text-charcoal tracking-tight">
                      {activeConcernCat.name}
                    </span>
                    <span className="font-sans font-light text-[13.5px] text-stone-gray hidden sm:inline-block border-l border-charcoal/20 pl-4">
                      Explore clinical concerns and tailored aesthetic care paths.
                    </span>
                  </div>

                  <Link
                    href={`/concerns#${activeConcernCat.id}`}
                    onClick={closeMegaMenu}
                    onFocus={cancelCloseTimeout}
                    onBlur={startCloseTimeout}
                    className="font-sans text-[11px] tracking-[0.12em] uppercase font-semibold text-botanical hover:text-charcoal transition-colors duration-150 inline-flex items-center gap-1.5 group/all shrink-0"
                  >
                    <span>View All {activeConcernCat.name}</span>
                    <span className="inline-block transition-transform duration-150 group-hover/all:translate-x-0.5">→</span>
                  </Link>
                </div>
              </div>

              {/* ── MAIN EDITORIAL GRID ────────────────────────────────── */}
              <div className="max-w-[1520px] mx-auto w-full px-6 sm:px-8 md:px-12 py-7 md:py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeConcernCat.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="grid grid-cols-1 md:grid-cols-5 gap-7 lg:gap-8 xl:gap-10 items-start"
                  >
                    {/* Left 4 columns for concerns */}
                    <div className="md:col-span-4 min-w-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                        {(() => {
                          const list = activeConcernCat.concerns || [];
                          const perCol = Math.max(4, Math.ceil(list.length / 4));
                          const cols = Array.from(
                            { length: Math.ceil(list.length / perCol) },
                            (_, i) => list.slice(i * perCol, (i + 1) * perCol)
                          );
                          return cols.map((col, ci) => (
                            <div key={ci} className="flex flex-col">
                              <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal/70 font-semibold pb-2 border-b border-charcoal/15 mb-3">
                                {ci === 0 ? 'Primary Concerns' : ci === 1 ? 'Structural & Texture' : ci === 2 ? 'Specialized Focus' : 'Targeted Care'}
                              </p>
                              <ul className="space-y-2">
                                {col.map((c) => (
                                  <li key={c.slug}>
                                    <Link
                                      href={`/concerns/${c.slug}`}
                                      onClick={closeMegaMenu}
                                      onFocus={cancelCloseTimeout}
                                      onBlur={startCloseTimeout}
                                      className="group/link font-sans font-light text-[13.5px] text-charcoal/80 hover:text-botanical transition-colors duration-150 flex items-baseline justify-between py-0.5"
                                    >
                                      <span className="leading-snug transition-transform duration-150 group-hover/link:translate-x-0.5">{c.name}</span>
                                      <span className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 text-botanical shrink-0 ml-1.5">
                                        <ArrowUpRight size={12} strokeWidth={1.5} />
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ));
                        })()}
                      </div>
                    </div>

                    {/* Column 5: CTA Panel */}
                    <div className="md:col-span-1 h-full">
                      <div className="bg-botanical text-moon-ivory p-6 rounded-[4px] flex flex-col justify-between shadow-sm h-full min-h-[300px]">
                        <div>
                          <span className="font-sans text-[9.5px] tracking-[0.18em] uppercase text-moon-ivory/60 font-semibold block mb-3">
                            Guided Discovery
                          </span>
                          <p className="font-display text-xl leading-snug text-moon-ivory font-normal tracking-tight mb-3">
                            Identify your primary concern
                          </p>
                          <div className="w-8 h-px bg-moon-ivory/25 mb-3" />
                          <p className="font-sans font-light text-[12.5px] leading-relaxed text-moon-ivory/80">
                            Take our short interactive quiz to uncover personalized physician-curated treatment paths.
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-moon-ivory/20">
                          <Link
                            href="/find-your-starting-point"
                            onClick={closeMegaMenu}
                            onFocus={cancelCloseTimeout}
                            onBlur={startCloseTimeout}
                            className="group/quiz inline-flex items-center justify-between w-full bg-moon-ivory hover:bg-white text-botanical font-sans text-[10.5px] tracking-[0.12em] uppercase font-semibold px-4.5 py-3 rounded-full shadow-sm transition-all duration-200"
                          >
                            <span>Take the Luna Quiz</span>
                            <ArrowUpRight size={12} strokeWidth={2} className="transition-transform duration-200 group-hover/quiz:translate-x-0.5 group-hover/quiz:-translate-y-0.5" />
                          </Link>

                          <a
                            href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMegaMenu}
                            className="font-sans text-[11px] text-moon-ivory/65 hover:text-moon-ivory block text-center mt-2.5 transition-colors"
                          >
                            Or speak with an advisor →
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-md flex flex-col pt-20 px-8 md:hidden overflow-y-auto overscroll-contain touch-pan-y h-full"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <nav className="flex flex-col gap-6 mt-6 pb-16">
            {navLinks.map((link) => {
              const isShop = link.label === 'Shop';
              const isTreatments = link.label === 'Treatments';
              const isConcerns = link.label === 'Concerns';

              if (isShop) {
                return (
                  <React.Fragment key={link.href}>
                    <div className="w-full h-px bg-white/10 my-1" aria-hidden="true" />
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-moon-ivory/80 font-display text-2xl tracking-wide hover:text-moon-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </React.Fragment>
                );
              }

              if (isTreatments) {
                return (
                  <React.Fragment key={link.href}>
                    <button
                      onClick={() => setMobileTreatmentsOpen((o) => !o)}
                      className="text-moon-ivory/80 font-display text-2xl tracking-wide hover:text-moon-ivory transition-colors flex items-center justify-between text-left w-full cursor-pointer focus:outline-none"
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        strokeWidth={1.5}
                        className={cn(
                          "transition-transform duration-300 text-moon-ivory/60",
                          mobileTreatmentsOpen && "rotate-180 text-botanical"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileTreatmentsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-3 flex flex-col gap-3 mt-3 border-l border-white/15"
                        >
                          {/* Category Accordion (One open at a time) */}
                          <div className="flex flex-col divide-y divide-white/10">
                            {TREATMENT_CATEGORIES.map((category) => {
                              const isCatOpen = mobileActiveTreatmentCategory === category.id;
                              return (
                                <div key={category.id} className="py-2.5">
                                  <button
                                    onClick={() =>
                                      setMobileActiveTreatmentCategory((prev) =>
                                        prev === category.id ? null : category.id
                                      )
                                    }
                                    className="flex items-center justify-between w-full text-left py-1 text-moon-ivory hover:text-white font-sans text-xs tracking-[0.2em] uppercase font-medium focus:outline-none"
                                  >
                                    <span className={cn(isCatOpen ? "text-botanical font-semibold" : "text-moon-ivory/90")}>
                                      {category.name}
                                    </span>
                                    <ChevronDown
                                      size={14}
                                      strokeWidth={1.5}
                                      className={cn(
                                        "transition-transform duration-300 text-moon-ivory/60",
                                        isCatOpen && "rotate-180 text-botanical"
                                      )}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {isCatOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        className="overflow-hidden pt-2.5 pb-1.5 pl-2"
                                      >
                                        {category.id === 'skin' ? (
                                          <div className="flex flex-col gap-4">
                                            {category.treatmentGroups?.map((group) => (
                                              <div key={group.groupName} className="flex flex-col">
                                                <span className="font-sans text-[9px] tracking-[0.2em] text-stone-gray uppercase font-semibold block mb-1.5 pb-1 border-b border-white/5">
                                                  {group.groupName}
                                                </span>
                                                <div className="flex flex-col gap-1 pl-1">
                                                  {group.treatments.map((t) => (
                                                    <Link
                                                      key={t.slug}
                                                      href={`/treatments/${t.slug}`}
                                                      onClick={() => {
                                                        setMobileOpen(false);
                                                        setMobileTreatmentsOpen(false);
                                                      }}
                                                      className="text-moon-ivory/85 hover:text-white font-sans text-[14px] py-1.5 block transition-colors"
                                                    >
                                                      {t.name}
                                                    </Link>
                                                  ))}
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        ) : category.id === 'wellness' ? (
                                          <div className="flex flex-col gap-3 py-1">
                                            <p className="font-sans font-light text-[13px] text-moon-ivory/75 leading-relaxed">
                                              Intravenous Hydration &amp; Longevity protocols delivered through our global partnership with REVIV.
                                            </p>
                                            <a
                                              href="https://revivindia.com/iv-therapies"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              onClick={() => {
                                                setMobileOpen(false);
                                                setMobileTreatmentsOpen(false);
                                              }}
                                              className="inline-flex items-center gap-1.5 text-botanical hover:text-white font-sans text-xs uppercase tracking-wider py-1 font-medium"
                                            >
                                              <span>Continue to REVIV</span>
                                              <ArrowUpRight size={12} strokeWidth={1.8} />
                                            </a>
                                          </div>
                                        ) : (
                                          <div className="flex flex-col gap-1 pl-1">
                                            {category.treatments?.map((t) => (
                                              <Link
                                                key={t.slug}
                                                href={`/treatments/${t.slug}`}
                                                onClick={() => {
                                                  setMobileOpen(false);
                                                  setMobileTreatmentsOpen(false);
                                                }}
                                                className="text-moon-ivory/85 hover:text-white font-sans text-[14px] py-1.5 block transition-colors"
                                              >
                                                {t.name}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>

                          {/* Mobile Editorial CTA Card */}
                          <div className="mt-4 p-4 rounded bg-white/5 border border-white/10 flex flex-col gap-2">
                            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-stone-gray font-medium">
                              Find Your Treatment
                            </span>
                            <p className="font-display text-base text-moon-ivory font-normal leading-snug">
                              Not sure where to begin?
                            </p>
                            <Link
                              href="/find-your-starting-point"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileTreatmentsOpen(false);
                              }}
                              className="inline-flex items-center justify-between text-botanical hover:text-white font-sans text-xs uppercase tracking-wider font-medium mt-1 group"
                            >
                              <span>Take the Luna Quiz</span>
                              <ArrowUpRight size={13} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>

                          <Link
                            href="/treatments"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileTreatmentsOpen(false);
                            }}
                            className="text-stone-gray hover:text-white font-sans text-xs uppercase tracking-wider mt-1 inline-flex items-center gap-1 font-medium"
                          >
                            <span>View All Treatments</span>
                            <ChevronRight size={13} strokeWidth={1.5} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              }

              if (isConcerns) {
                return (
                  <React.Fragment key={link.href}>
                    <button
                      onClick={() => setMobileConcernsOpen((o) => !o)}
                      className="text-moon-ivory/80 font-display text-2xl tracking-wide hover:text-moon-ivory transition-colors flex items-center justify-between text-left w-full cursor-pointer focus:outline-none"
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        strokeWidth={1.5}
                        className={cn(
                          "transition-transform duration-300 text-moon-ivory/60",
                          mobileConcernsOpen && "rotate-180 text-botanical"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileConcernsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-3 flex flex-col gap-3 mt-3 border-l border-white/15"
                        >
                          {/* Category Accordion (One open at a time) */}
                          <div className="flex flex-col divide-y divide-white/10">
                            {CONCERN_CATEGORIES.map((category) => {
                              const isCatOpen = mobileActiveConcernCategory === category.id;
                              return (
                                <div key={category.id} className="py-2.5">
                                  <button
                                    onClick={() =>
                                      setMobileActiveConcernCategory((prev) =>
                                        prev === category.id ? null : category.id
                                      )
                                    }
                                    className="flex items-center justify-between w-full text-left py-1 text-moon-ivory hover:text-white font-sans text-xs tracking-[0.2em] uppercase font-medium focus:outline-none"
                                  >
                                    <span className={cn(isCatOpen ? "text-botanical font-semibold" : "text-moon-ivory/90")}>
                                      {category.name}
                                    </span>
                                    <ChevronDown
                                      size={14}
                                      strokeWidth={1.5}
                                      className={cn(
                                        "transition-transform duration-300 text-moon-ivory/60",
                                        isCatOpen && "rotate-180 text-botanical"
                                      )}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {isCatOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        className="overflow-hidden pt-2.5 pb-1.5 pl-2"
                                      >
                                        <div className="flex flex-col gap-1 pl-1">
                                          {category.concerns?.map((c) => (
                                            <Link
                                              key={c.slug}
                                              href={`/concerns/${c.slug}`}
                                              onClick={() => {
                                                setMobileOpen(false);
                                                setMobileConcernsOpen(false);
                                              }}
                                              className="text-moon-ivory/85 hover:text-white font-sans text-[14px] py-1.5 block transition-colors"
                                            >
                                              {c.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>

                          <Link
                            href="/concerns"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileConcernsOpen(false);
                            }}
                            className="text-stone-gray hover:text-white font-sans text-xs uppercase tracking-wider mt-1 inline-flex items-center gap-1 font-medium"
                          >
                            <span>View All Concerns</span>
                            <ChevronRight size={13} strokeWidth={1.5} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-moon-ivory/80 font-display text-2xl tracking-wide hover:text-moon-ivory transition-colors flex items-center gap-2"
                >
                  {link.label === 'LUNA+' && (
                    <Crown 
                      size={20} 
                      strokeWidth={1.5} 
                      className="text-botanical shrink-0" 
                      aria-hidden="true" 
                    />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-4">
            <Link
              href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-moon-ivory/40 text-moon-ivory/90 font-sans text-xs tracking-tight uppercase px-6 py-3"
            >
              Book Consultation <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
