'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Shop', href: '/shop' },
  { label: 'Medical Tourism', href: '/medical-tourism' },
  { label: 'Contact', href: '/contact' },
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
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-sans transition-colors duration-300 relative text-sm tracking-tight',
                    isActive ? 'font-medium' : 'font-light',
                    isLightMode
                      ? isActive
                        ? 'text-botanical'
                        : 'text-stone-gray hover:text-botanical'
                      : isActive
                        ? 'text-botanical'
                        : 'text-moon-ivory/80 hover:text-botanical'
                  )}
                >
                  {link.label}
                </Link>
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
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-md flex flex-col pt-20 px-8 md:hidden">
          <nav className="flex flex-col gap-7 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-moon-ivory/80 font-display text-2xl tracking-wide hover:text-moon-ivory transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
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
