'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, ArrowUpRight, ChevronDown, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TREATMENT_CATEGORIES } from '@/lib/treatments-catalogue';
import { CONCERN_CATEGORIES } from '@/lib/concerns-catalogue';
import { useLenis } from 'lenis/react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';

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
  const [activeTreatmentCategoryIdx, setActiveTreatmentCategoryIdx] = React.useState(0);
  const [activeConcernCategoryIdx, setActiveConcernCategoryIdx] = React.useState(0);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = React.useState(false);
  const [mobileConcernsOpen, setMobileConcernsOpen] = React.useState(false);

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

  const activeCat = TREATMENT_CATEGORIES[activeTreatmentCategoryIdx];
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

        {/* Desktop Mega Menu — 3-area layout */}
        <AnimatePresence>
          {megaMenuType === 'treatments' && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              role="dialog"
              aria-label="Treatments navigation"
              className="absolute left-0 right-0 top-full z-40 bg-moon-ivory border-b border-charcoal/10 shadow-xl shadow-charcoal/5"
            >
              {/* ── AREA 1: Horizontal category tabs ──────────────────── */}
              <div className="border-b border-charcoal/10">
                <div className="max-w-site mx-auto w-full px-4 sm:px-6 md:px-10">
                  <div className="flex items-end gap-0" role="tablist" aria-label="Treatment categories">
                    {TREATMENT_CATEGORIES.map((cat, idx) => (
                      <button
                        key={cat.id}
                        role="tab"
                        aria-selected={activeTreatmentCategoryIdx === idx}
                        onClick={() => setActiveTreatmentCategoryIdx(idx)}
                        onFocus={cancelCloseTimeout}
                        onBlur={startCloseTimeout}
                        className={cn(
                          'relative px-8 py-5 font-sans text-[12px] tracking-tight uppercase transition-colors duration-200 focus:outline-none shrink-0 cursor-pointer',
                          activeTreatmentCategoryIdx === idx
                            ? 'text-botanical font-medium'
                            : 'text-stone-gray hover:text-charcoal font-light'
                        )}
                      >
                        {cat.name}
                        {activeTreatmentCategoryIdx === idx && (
                          <motion.span
                            layoutId="catUnderline"
                            className="absolute bottom-0 left-8 right-8 h-[2px] bg-botanical"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── AREA 2 + 3: Treatment columns + CTA panel ─────────── */}
              <div className="max-w-site mx-auto w-full px-4 sm:px-6 md:px-10 flex gap-0 h-[70vh]">

                {/* Treatment content — left */}
                <div 
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="flex-1 min-w-0 min-h-0 h-full py-10 pr-12 border-r border-charcoal/10 overflow-y-auto overscroll-y-contain"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCat.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      {activeCat.id === 'wellness' ? (
                        /* Custom Wellness/REVIV block */
                        <div className="flex gap-10 h-full items-center">
                          {/* Text Side */}
                          <div className="flex-1 max-w-[480px]">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-gray font-semibold">
                                LUNA × REVIV
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-botanical shrink-0 animate-pulse" />
                            </div>
                            <h4 className="font-display text-[1.8rem] leading-[1.25] text-charcoal mb-4">
                              Intravenous Hydration &amp; Longevity
                            </h4>
                            <p className="font-sans font-light text-[13.5px] leading-relaxed text-stone-gray mb-6">
                              IV therapies and wellness formulations delivered through our global partnership with REVIV. Administered in our luxury medical sanctuary for optimal cellular absorption, recovery, and inner vitality.
                            </p>
                            
                            {/* Small Stats Grid */}
                            <div className="grid grid-cols-2 gap-6 border-y border-charcoal/10 py-5 mb-8">
                              <div>
                                <p className="font-display text-[1.3rem] text-botanical font-light">2,000,000+</p>
                                <p className="font-sans text-[9px] tracking-wider uppercase text-stone-gray">IV Therapies Globally</p>
                              </div>
                              <div>
                                <p className="font-display text-[1.3rem] text-botanical font-light">100+ Clinics</p>
                                <p className="font-sans text-[9px] tracking-wider uppercase text-stone-gray">Global REVIV Network</p>
                              </div>
                            </div>

                            <a
                              href="https://revivindia.com/iv-therapies"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory hover:bg-botanical/90 font-sans text-[11px] uppercase tracking-wider px-6 py-3 transition-all duration-300"
                            >
                              <span>Continue to REVIV</span>
                              <ArrowUpRight size={13} strokeWidth={1.8} />
                            </a>
                          </div>

                          {/* Image Side */}
                          <div className="hidden lg:block w-[280px] h-[360px] relative rounded-[8px] overflow-hidden shadow-sm">
                            <CloudinaryImage
                              src="ivdrip_yhlvex"
                              alt="REVIV Wellness Suite"
                              fill
                              sizes="600px"
                              quality={100}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : activeCat.treatmentGroups ? (
                        /* Categories with groups (Skin) */
                        <div className="flex flex-wrap gap-x-16 gap-y-10">
                          {activeCat.treatmentGroups.map((group) => (
                            <div key={group.groupName} className="flex flex-col min-w-[190px] max-w-[250px] flex-shrink-0">
                              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-gray font-semibold mb-3">
                                {group.groupName}
                              </p>
                              <div className="h-px bg-charcoal/10 mb-4" />
                              <ul className="flex flex-col gap-3">
                                {group.treatments.map((t) => (
                                  <li key={t.slug}>
                                    <Link
                                      href={`/treatments/${t.slug}`}
                                      onClick={closeMegaMenu}
                                      onFocus={cancelCloseTimeout}
                                      onBlur={startCloseTimeout}
                                      className="group/link font-sans font-light text-[13.5px] text-charcoal/75 hover:text-botanical transition-colors duration-150 flex items-baseline gap-2"
                                    >
                                      <span className="flex-1 leading-relaxed">{t.name}</span>
                                      <span className="opacity-0 group-hover/link:opacity-100 transition-all duration-150 group-hover/link:translate-x-0.5 text-botanical shrink-0">
                                        <ArrowUpRight size={12} strokeWidth={1.5} />
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Flat list categories (Hair, Dental) */
                        <div className="flex flex-wrap gap-x-16 gap-y-10">
                          {(() => {
                            const list = activeCat.treatments || [];
                            const perCol = Math.max(4, Math.ceil(list.length / 3));
                            const cols = Array.from(
                              { length: Math.ceil(list.length / perCol) },
                              (_, i) => list.slice(i * perCol, (i + 1) * perCol)
                            );
                            return cols.map((col, ci) => (
                              <div key={ci} className="flex flex-col min-w-[190px] max-w-[250px] flex-shrink-0">
                                <ul className="flex flex-col gap-3">
                                  {col.map((t) => (
                                    <li key={t.slug}>
                                      <Link
                                        href={`/treatments/${t.slug}`}
                                        onClick={closeMegaMenu}
                                        onFocus={cancelCloseTimeout}
                                        onBlur={startCloseTimeout}
                                        className="group/link font-sans font-light text-[13.5px] text-charcoal/75 hover:text-botanical transition-colors duration-150 flex items-baseline gap-2"
                                      >
                                        <span className="flex-1 leading-relaxed">{t.name}</span>
                                        <span className="opacity-0 group-hover/link:opacity-100 transition-all duration-150 group-hover/link:translate-x-0.5 text-botanical shrink-0">
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
                      )}

                      {/* View All footer */}
                      {activeCat.id !== 'wellness' && (
                        <div className="mt-10 pt-5 border-t border-charcoal/10">
                          <Link
                            href={`/treatments#${activeCat.id}`}
                            onClick={closeMegaMenu}
                            onFocus={cancelCloseTimeout}
                            onBlur={startCloseTimeout}
                            className="group/all font-sans text-[11px] tracking-tight uppercase font-medium text-botanical hover:text-charcoal transition-colors duration-200 flex items-center gap-2"
                          >
                            View All {activeCat.name} Treatments
                            <span className="inline-block transition-transform duration-200 group-hover/all:translate-x-1">→</span>
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CTA Panel — right */}
                <div className="w-[320px] shrink-0 bg-botanical flex flex-col justify-between px-10 py-10">
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-moon-ivory/45 mb-5 font-medium">
                      Need help choosing?
                    </p>
                    <h3 className="font-display text-[1.6rem] leading-snug tracking-tight text-moon-ivory mb-5">
                      Not sure which treatment is right for you?
                    </h3>
                    <div className="w-10 h-px bg-moon-ivory/25 mb-5" />
                    <p className="font-sans text-[12px] font-light text-moon-ivory/60 leading-relaxed">
                      Every concern is unique. Let our experts guide you toward the right treatment for your goals.
                    </p>
                  </div>
                  <Link
                    href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMegaMenu}
                    onFocus={cancelCloseTimeout}
                    onBlur={startCloseTimeout}
                    className="group/cta mt-10 inline-flex items-center justify-between w-full border border-moon-ivory/20 hover:border-moon-ivory/50 px-5 py-4 rounded-full transition-colors duration-200"
                  >
                    <span className="font-sans text-[11px] tracking-[0.18em] uppercase font-medium text-moon-ivory">
                      Book a Consultation
                    </span>
                    <span className="text-moon-ivory/60 group-hover/cta:text-moon-ivory group-hover/cta:translate-x-0.5 transition-all duration-200 text-sm">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {megaMenuType === 'concerns' && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              role="dialog"
              aria-label="Concerns navigation"
              className="absolute left-0 right-0 top-full z-40 bg-moon-ivory border-b border-charcoal/10 shadow-xl shadow-charcoal/5"
            >
              {/* ── AREA 1: Horizontal category tabs ──────────────────── */}
              <div className="border-b border-charcoal/10">
                <div className="max-w-site mx-auto w-full px-4 sm:px-6 md:px-10">
                  <div className="flex items-end gap-0" role="tablist" aria-label="Concern categories">
                    {CONCERN_CATEGORIES.map((cat, idx) => (
                      <button
                        key={cat.id}
                        role="tab"
                        aria-selected={activeConcernCategoryIdx === idx}
                        onClick={() => setActiveConcernCategoryIdx(idx)}
                        onFocus={cancelCloseTimeout}
                        onBlur={startCloseTimeout}
                        className={cn(
                          'relative px-8 py-5 font-sans text-[12px] tracking-tight uppercase transition-colors duration-200 focus:outline-none shrink-0 cursor-pointer',
                          activeConcernCategoryIdx === idx
                            ? 'text-botanical font-medium'
                            : 'text-stone-gray hover:text-charcoal font-light'
                        )}
                      >
                        {cat.name}
                        {activeConcernCategoryIdx === idx && (
                          <motion.span
                            layoutId="concernCatUnderline"
                            className="absolute bottom-0 left-8 right-8 h-[2px] bg-botanical"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── AREA 2 + 3: Concern columns + CTA panel ─────────── */}
              <div className="max-w-site mx-auto w-full px-4 sm:px-6 md:px-10 flex gap-0 h-[70vh]">

                {/* Concern content — left */}
                <div 
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="flex-1 min-w-0 min-h-0 h-full py-10 pr-12 border-r border-charcoal/10 overflow-y-auto overscroll-y-contain"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeConcernCat.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      <div className="flex flex-wrap gap-x-16 gap-y-10">
                        {(() => {
                          const list = activeConcernCat.concerns || [];
                          const perCol = Math.max(4, Math.ceil(list.length / 3));
                          const cols = Array.from(
                            { length: Math.ceil(list.length / perCol) },
                            (_, i) => list.slice(i * perCol, (i + 1) * perCol)
                          );
                          return cols.map((col, ci) => (
                            <div key={ci} className="flex flex-col min-w-[190px] max-w-[250px] flex-shrink-0">
                              <ul className="flex flex-col gap-3">
                                {col.map((c) => (
                                  <li key={c.slug}>
                                    <Link
                                      href={`/concerns/${c.slug}`}
                                      onClick={closeMegaMenu}
                                      onFocus={cancelCloseTimeout}
                                      onBlur={startCloseTimeout}
                                      className="group/link font-sans font-light text-[13.5px] text-charcoal/75 hover:text-botanical transition-colors duration-150 flex items-baseline gap-2"
                                    >
                                      <span className="flex-1 leading-relaxed">{c.name}</span>
                                      <span className="opacity-0 group-hover/link:opacity-100 transition-all duration-150 group-hover/link:translate-x-0.5 text-botanical shrink-0">
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

                      {/* View All footer */}
                      <div className="mt-10 pt-5 border-t border-charcoal/10">
                        <Link
                          href={`/concerns#${activeConcernCat.id}`}
                          onClick={closeMegaMenu}
                          onFocus={cancelCloseTimeout}
                          onBlur={startCloseTimeout}
                          className="group/all font-sans text-[11px] tracking-tight uppercase font-medium text-botanical hover:text-charcoal transition-colors duration-200 flex items-center gap-2"
                        >
                          View All {activeConcernCat.name}
                          <span className="inline-block transition-transform duration-200 group-hover/all:translate-x-1">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CTA Panel — right */}
                <div className="w-[320px] shrink-0 bg-botanical flex flex-col justify-between px-10 py-10">
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-moon-ivory/45 mb-5 font-medium">
                      Need help choosing?
                    </p>
                    <h3 className="font-display text-[1.6rem] leading-snug tracking-tight text-moon-ivory mb-5">
                      Not sure which treatment is right for you?
                    </h3>
                    <div className="w-10 h-px bg-moon-ivory/25 mb-5" />
                    <p className="font-sans text-[12px] font-light text-moon-ivory/60 leading-relaxed">
                      Every concern is unique. Let our experts guide you toward the right treatment for your goals.
                    </p>
                  </div>
                  <Link
                    href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMegaMenu}
                    onFocus={cancelCloseTimeout}
                    onBlur={startCloseTimeout}
                    className="group/cta mt-10 inline-flex items-center justify-between w-full border border-moon-ivory/20 hover:border-moon-ivory/50 px-5 py-4 rounded-full transition-colors duration-200"
                  >
                    <span className="font-sans text-[11px] tracking-[0.18em] uppercase font-medium text-moon-ivory">
                      Book a Consultation
                    </span>
                    <span className="text-moon-ivory/60 group-hover/cta:text-moon-ivory group-hover/cta:translate-x-0.5 transition-all duration-200 text-sm">
                      →
                    </span>
                  </Link>
                </div>
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
                      <span className={cn("text-lg font-light transition-transform duration-300", mobileTreatmentsOpen ? "rotate-90" : "")}>
                        →
                      </span>
                    </button>
                    <AnimatePresence>
                      {mobileTreatmentsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-4 mt-2 border-l border-white/10"
                        >
                          {TREATMENT_CATEGORIES.map((category) => (
                            <div key={category.id} className="flex flex-col gap-1.5 mt-2">
                              <span className="font-sans text-[9px] tracking-[0.15em] text-stone-gray uppercase block font-semibold">
                                {category.name}
                              </span>
                              <div className="flex flex-col gap-1 pl-2">
                                {category.treatmentGroups ? (
                                  category.treatmentGroups.map((group) => (
                                    <div key={group.groupName} className="mb-2">
                                      <span className="font-sans text-[8px] text-white/40 uppercase tracking-wider block mb-1">
                                        {group.groupName}
                                      </span>
                                      <div className="flex flex-col gap-1 pl-2 border-l border-white/5">
                                        {group.treatments.map((t) => (
                                          <Link
                                            key={t.slug}
                                            href={`/treatments/${t.slug}`}
                                            onClick={() => {
                                              setMobileOpen(false);
                                              setMobileTreatmentsOpen(false);
                                            }}
                                            className="text-moon-ivory/60 hover:text-white font-sans text-xs py-0.5 block"
                                          >
                                            {t.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))
                                ) : category.id === 'wellness' ? (
                                  <a
                                    href="https://revivindia.com/iv-therapies"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileTreatmentsOpen(false);
                                    }}
                                    className="text-moon-ivory/60 hover:text-white font-sans text-xs py-1.5 block flex items-center gap-1.5"
                                  >
                                    <span>Continue to REVIV</span>
                                    <ArrowUpRight size={12} className="text-botanical shrink-0" />
                                  </a>
                                ) : (
                                  category.treatments?.map((t) => (
                                    <Link
                                      key={t.slug}
                                      href={`/treatments/${t.slug}`}
                                      onClick={() => {
                                        setMobileOpen(false);
                                        setMobileTreatmentsOpen(false);
                                      }}
                                      className="text-moon-ivory/60 hover:text-white font-sans text-xs py-0.5 block"
                                    >
                                      {t.name}
                                    </Link>
                                  ))
                                )}
                              </div>
                            </div>
                          ))}
                          <Link
                            href="/treatments"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileTreatmentsOpen(false);
                            }}
                            className="text-botanical hover:text-white font-sans text-xs uppercase tracking-tight mt-2 font-medium"
                          >
                            View All Treatments →
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
                      <span className={cn("text-lg font-light transition-transform duration-300", mobileConcernsOpen ? "rotate-90" : "")}>
                        →
                      </span>
                    </button>
                    <AnimatePresence>
                      {mobileConcernsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-4 mt-2 border-l border-white/10"
                        >
                          {CONCERN_CATEGORIES.map((category) => (
                            <div key={category.id} className="flex flex-col gap-1.5 mt-2">
                              <span className="font-sans text-[9px] tracking-[0.15em] text-stone-gray uppercase block font-semibold">
                                {category.name}
                              </span>
                              <div className="flex flex-col gap-1 pl-2">
                                {category.concerns?.map((c) => (
                                  <Link
                                    key={c.slug}
                                    href={`/concerns/${c.slug}`}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileConcernsOpen(false);
                                    }}
                                    className="text-moon-ivory/60 hover:text-white font-sans text-xs py-0.5 block"
                                  >
                                    {c.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <Link
                            href="/concerns"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileConcernsOpen(false);
                            }}
                            className="text-botanical hover:text-white font-sans text-xs uppercase tracking-wider mt-2 font-medium"
                          >
                            View All Concerns →
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
