'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
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

  /* ─── Dark variant styles (existing behaviour) ─── */
  const darkHeader = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform border-b',
    scrolled
      ? 'bg-charcoal/80 backdrop-blur-md shadow-sm border-border/10'
      : 'bg-transparent border-white/5',
    visible ? 'translate-y-0' : '-translate-y-full pointer-events-none',
    className
  );

  /* ─── Light variant styles ─── */
  const lightHeader = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform border-b',
    scrolled
      ? 'bg-moon-ivory/95 backdrop-blur-md shadow-sm border-border/60'
      : 'bg-moon-ivory border-border/40',
    visible ? 'translate-y-0' : '-translate-y-full pointer-events-none',
    className
  );

  return (
    <>
      <header className={isLight ? lightHeader : darkHeader}>
        <div className="max-w-site mx-auto w-full flex items-center justify-between px-4 sm:px-6 md:px-8 h-16 md:h-[72px]">

          {/* Logo */}
          <div className="md:flex-1 flex justify-start">
            <Link href="/" className="relative h-9 md:h-12 w-28 md:w-36 select-none group">
              <Image
                src={isLight ? '/logo-dark.svg' : '/logo.svg'}
                alt="22LUNA"
                fill
                className={cn(
                  'object-contain object-left',
                  isLight ? '' : 'brightness-0 invert'
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
                    isLight
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
            {/* Cart */}
            <button
              aria-label="Shopping bag"
              className={cn(
                'transition-colors duration-300 p-1.5',
                isLight
                  ? 'text-charcoal/60 hover:text-charcoal'
                  : 'text-moon-ivory/80 hover:text-moon-ivory'
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
            </button>

            {/* Book Consultation CTA (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                href="/book-consultation"
                className={cn(
                  'inline-flex items-center tracking-tight gap-1.5 rounded-full font-sans text-[0.75rem] uppercase px-5 py-2.5 transition-all duration-300',
                  isLight
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
                isLight ? 'text-charcoal' : 'text-moon-ivory'
              )}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-[5px]">
                <span className={cn('block w-5 h-px transition-all duration-300', isLight ? 'bg-charcoal' : 'bg-moon-ivory', mobileOpen && 'rotate-45 translate-y-[7px]')} />
                <span className={cn('block w-5 h-px transition-all duration-300', isLight ? 'bg-charcoal' : 'bg-moon-ivory', mobileOpen && 'opacity-0')} />
                <span className={cn('block w-5 h-px transition-all duration-300', isLight ? 'bg-charcoal' : 'bg-moon-ivory', mobileOpen && '-rotate-45 -translate-y-[7px]')} />
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
              href="/book-consultation"
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
