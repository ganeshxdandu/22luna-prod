'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FooterProps {
  className?: string;
}

function InstagramIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("w-full bg-botanical text-moon-ivory/65 select-none border-t border-white/5", className)}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-16">
        
        {/* ── TOP SECTION: EDITORIAL 3-COLUMN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 md:gap-x-12 pb-16 md:pb-24">
          
          {/* COLUMN 1: BRAND LOGO & STATEMENT (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6 md:pr-8">
            <Link href="/" className="relative h-9 w-28 shrink-0">
              <Image
                src="/logo.svg"
                alt="22LUNA"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            
            <p className="font-sans font-light text-[0.88rem] leading-[1.8] text-moon-ivory/80 max-w-[340px] tracking-wide">
              Skin, hair and dental care designed around you - guided by clinical experience, precision ethics, and a genuine love for what we do.
            </p>
            
            {/* Social channels (Minimal, text handles or simple icons) */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/22lunaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-moon-ivory/60 hover:text-white transition-colors duration-300 font-sans text-xs tracking-tight"
              >
                <InstagramIcon size={14} />
                <span>@22lunaclinic</span>
              </a>
              
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />

              <a
                href="https://wa.me/918971725522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-moon-ivory/60 hover:text-white transition-colors duration-300 font-sans text-xs tracking-tight"
              >
                <MessageCircle size={14} className="text-gold" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-sans font-medium text-[0.72rem] uppercase tracking-[0.2em] text-white">
              Explore
            </h4>
            <nav className="flex flex-col gap-3 font-sans font-light text-[0.85rem]">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Advanced Technology', href: '/about#advanced-technology' },
                { label: 'Treatments', href: '/treatments' },
                { label: 'Concerns Index', href: '/concerns' },
                { label: 'Consultation Philosophy', href: '/consultation' },
                { label: 'Contact Clinic', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gold transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: CLINIC CONTACT & HOURS (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="font-sans font-medium text-[0.72rem] uppercase tracking-[0.2em] text-white">
              Sanctuary
            </h4>
            
            <div className="flex flex-col gap-4 font-sans font-light text-[0.85rem]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold shrink-0 mt-[3px]" />
                <span className="leading-[1.6] max-w-[280px]">
                  #5, Rest House Crescent Road, off Kasturba Cross Road, Ashok Nagar, Bengaluru 560001
                </span>
              </div>
              
              {/* Phone & Email */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                <a href="tel:+918971725522" className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                  <Phone size={14} className="text-gold shrink-0" />
                  <span>+91 89717 25522</span>
                </a>
                <a href="mailto:hello@22luna.in" className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                  <Mail size={14} className="text-gold shrink-0" />
                  <span>hello@22luna.in</span>
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 pt-2 border-t border-white/5 text-[0.8rem] text-moon-ivory/50">
                <Clock size={14} className="shrink-0 mt-[3px]" />
                <div className="flex flex-col gap-1.5 leading-relaxed">
                  <div className="flex justify-between w-48">
                    <span>Tue – Sun</span>
                    <span>10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between w-48 opacity-60">
                    <span>Monday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── BOTTOM SECTION: CREDITS & LEGAL ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.72rem] font-sans font-light">
          
          <div className="flex items-center gap-2 text-moon-ivory/55">
            <span>© 2026 22luna.</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5 text-gold font-normal">
              <Shield size={11} />
              <span>Doctor-led. Always.</span>
            </div>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-gold transition-colors duration-300">
              Terms of Use
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
