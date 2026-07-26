'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Shop', href: '/shop' },
  { label: 'Medical Tourism', href: '/medical-tourism' },
  { label: 'Contact', href: '/contact' },
];

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
          setVisible(false); // Scroll down -> Hide
        } else if (diff < -5) {
          setVisible(true); // Scroll up -> Show
        }
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform border-b',
          scrolled
            ? 'bg-charcoal/80 backdrop-blur-md shadow-sm border-border/10'
            : 'bg-transparent border-white/5',
          visible ? 'translate-y-0' : '-translate-y-full pointer-events-none',
          className
        )}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-[72px]">

          {/* Logo Container */}
          <div className="md:flex-1 flex justify-start">
            <Link href="/" className="relative h-9 md:h-12 w-28 md:w-36 select-none group">
              <Image
                src="/logo.svg"
                alt="22LUNA"
                fill
                className="object-contain object-left brightness-0 invert"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-moon-ivory/80 font-sans font-light transition-colors duration-300 hover:text-moon-ivory relative group',
                  'text-sm tracking-[0.04em]'
                )}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-moon-ivory/60 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Actions & Mobile Toggle Container */}
          <div className="md:flex-1 flex justify-end items-center gap-2 md:gap-4">
            {/* Cart / Bag (Always Visible) */}
            <button
              aria-label="Shopping bag"
              className="text-moon-ivory/80 hover:text-moon-ivory transition-colors duration-300 p-1.5"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
            </button>

            {/* Book Consultation CTA (Desktop Only) */}
            <div className="hidden md:flex items-center">
              <Link
                href="/book-consultation"
                className="inline-flex items-center tracking-tight gap-1.5 rounded-full border border-moon-ivory/40 text-moon-ivory/90 font-sans text-[0.75rem] uppercase px-5 py-2.5 transition-all duration-300 hover:border-moon-ivory hover:text-moon-ivory hover:bg-moon-ivory/10"
              >
                Book Consultation
                <ArrowUpRight size={13} strokeWidth={1.8} />
              </Link>
            </div>

            {/* Mobile Menu Toggle (Mobile) */}
            <button
              className="md:hidden text-moon-ivory p-2"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-[5px]">
                <span className={cn('block w-5 h-px bg-moon-ivory transition-all duration-300', mobileOpen && 'rotate-45 translate-y-[7px]')} />
                <span className={cn('block w-5 h-px bg-moon-ivory transition-all duration-300', mobileOpen && 'opacity-0')} />
                <span className={cn('block w-5 h-px bg-moon-ivory transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-[7px]')} />
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
