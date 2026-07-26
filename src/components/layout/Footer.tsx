'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Local SVG brand icon definitions to avoid undefined exports in the customized lucide-react build
function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsappIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("w-full bg-botanical text-moon-ivory/70 select-none", className)}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[84px] pt-12 pb-14 md:pt-16 md:pb-16">

        {/* ── TOP SECTION GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 md:gap-y-14">

          {/* COLUMN 1: BRAND LOGO & BIO */}
          <div className="flex flex-col gap-6 lg:justify-between">
            <div>
              {/* White inverted clinic logo */}
              <div className="relative h-10 w-32 mb-4">
                <Image
                  src="/logo.svg"
                  alt="22 LUNA"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>

              <p className="text-xs md:text-sm font-sans font-light leading-[1.7] max-w-[260px] tracking-wide">
                Skin, hair & dental care designed around you — guided by experience and a genuine love for what we do.
              </p>
            </div>

            {/* Social channels (white borders, soft fade states) */}
            <div className="flex gap-3">
              {[
                { name: 'instagram', icon: <InstagramIcon size={16} /> },
                { name: 'facebook', icon: <FacebookIcon size={16} /> },
                { name: 'whatsapp', icon: <WhatsappIcon size={16} /> },
                { name: 'youtube', icon: <YoutubeIcon size={16} /> }
              ].map((social) => (
                <Link
                  key={social.name}
                  href="https://www.instagram.com/22lunaclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-moon-ivory/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2: TREATMENTS LINKS */}
          <div>
            <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.14em] text-moon-ivory mb-4">
              Treatments
            </h4>
            <ul className="flex flex-col gap-3 text-[13px] md:text-[14px] font-sans font-light">
              {[
                "Skin Care",
                "Hair Care",
                "Dental Care",
                "Men’s Treatments",
                "Laser Services",
                "Injectables",
              ].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-gold transition-colors duration-300">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: COMPANY LINKS */}
          <div>
            <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.14em] text-moon-ivory mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-[13px] md:text-[14px] font-sans font-light">
              {[
                "About Dr. Niharika",
                "Our Programs",
                "Before & After",
                "Patient Stories",
                "Blog",
                "Careers",
              ].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-gold transition-colors duration-300">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: EMBEDDED MAP LOCATION */}
          <div>
            <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.14em] text-moon-ivory mb-4">
              Location
            </h4>
            <div className="rounded-[10px] overflow-hidden border border-white/10 shadow-sm relative h-[180px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9562469569173!2d77.6041185!3d12.9746503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172a127754b9%3A0xfb75683bb0e65b33!2s22%20Luna%20Clinic!5e0!3m2!1sen!2sin!4v1776600153449!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                title="Google Maps Location"
                className="border-0 absolute inset-0"
              />
            </div>
          </div>

          {/* COLUMN 5: CLINIC HOURS */}
          <div className="min-h-[140px]">
            <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.14em] text-moon-ivory mb-4">
              Clinic Hours
            </h4>
            <div className="text-[13px] md:text-[14px] font-sans font-light space-y-3">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-moon-ivory font-normal">10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-moon-ivory font-normal">10:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between opacity-50">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* COLUMN 6: CONTACT DETAILS */}
          <div className="min-h-[140px] md:col-span-2 lg:col-span-1">
            <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.14em] text-moon-ivory mb-4">
              Contact
            </h4>
            <div className="text-[13px] md:text-[14px] font-sans font-light space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-gold shrink-0 mt-[2px]" />
                <span className="text-moon-ivory">+91 89717 25522</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-gold shrink-0 mt-[2px]" />
                <span className="text-moon-ivory">hello@lunaclinic.in</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold shrink-0 mt-[2px]" />
                <span className="leading-[1.6]">
                  5, Rest House, Kasturba Cross Rd, Shanthala Nagar, Ashok Nagar, Bengaluru
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 7: CERTIFICATIONS */}
          <div className="min-h-[140px]">
            <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.14em] text-moon-ivory mb-4">
              Certifications
            </h4>
            <ul className="text-[13px] md:text-[14px] font-sans font-light space-y-3">
              {[
                "American Academy of Aesthetic Medicine",
                "Canadian Board of Aesthetic Medicine",
                "Indian Prosthodontic Society",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-gold shrink-0 mt-[2px]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM CREDITS BAR ── */}
        <div className="border-t border-white/10 mt-12 md:mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans font-light">
          <p>© 2026 Luna Clinic, Bangalore. All rights reserved.</p>

          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((l) => (
              <Link key={l} href="#" className="hover:text-gold transition-colors duration-300">
                {l}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gold font-normal">
            <User size={13} />
            <span>Doctor-led. Always.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
