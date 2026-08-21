'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck, 
  Microscope, 
  FileCheck2, 
  Building2, 
  BadgeCheck 
} from 'lucide-react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import type { DoctorProfile } from '@/lib/doctorData';
import { cn } from '@/lib/utils';

export interface DoctorProfileOverlayProps {
  doctor: DoctorProfile | null;
  doctors: DoctorProfile[];
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctor: (doctor: DoctorProfile) => void;
}

export function DoctorProfileOverlay({
  doctor,
  doctors,
  isOpen,
  onClose,
  onSelectDoctor,
}: DoctorProfileOverlayProps) {
  const [mounted, setMounted] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Current index for previous/next navigation
  const currentIndex = doctor ? doctors.findIndex((d) => d.id === doctor.id) : -1;
  const prevDoctor = currentIndex > 0 ? doctors[currentIndex - 1] : doctors[doctors.length - 1];
  const nextDoctor = currentIndex < doctors.length - 1 ? doctors[currentIndex + 1] : doctors[0];

  // Prevent background scrolling when overlay is open & handle Escape / Arrow keys
  React.useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const originalBodyStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    // Lock body scroll completely
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // Focus trap
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && prevDoctor) {
        onSelectDoctor(prevDoctor);
      } else if (e.key === 'ArrowRight' && nextDoctor) {
        onSelectDoctor(nextDoctor);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyStyle.overflow;
      document.body.style.position = originalBodyStyle.position;
      document.body.style.top = originalBodyStyle.top;
      document.body.style.width = originalBodyStyle.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, prevDoctor, nextDoctor, onSelectDoctor]);

  // Reset scroll position when switching doctors
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [doctor?.id]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && doctor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${doctor.name} - Clinical Profile`}
          className="fixed inset-0 z-[99999] flex items-center justify-center lg:justify-end overflow-hidden p-0 lg:p-6"
        >
          {/* Solid Backdrop without blur/glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            aria-hidden="true"
            className="absolute inset-0 bg-charcoal/75 cursor-pointer"
          />

          {/* Editorial Clinical Panel (Flat, Clean, Zero Shadows) */}
          <motion.div
            initial={{ x: '100%', opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'relative z-10 h-full max-h-screen lg:max-h-[94vh] bg-moon-ivory flex flex-col',
              'w-full lg:w-[84%] xl:w-[80%] max-w-[1280px]',
              'lg:rounded-[2px] border-l border-charcoal/15 overflow-hidden'
            )}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* ── Top Clinical Header Bar (Sticky) ── */}
            <div className="sticky top-0 flex items-center justify-between px-6 sm:px-10 py-4 border-b border-charcoal/[0.08] bg-moon-ivory shrink-0 z-30">
              {/* Doctor navigation & Medical Registry badge */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectDoctor(prevDoctor)}
                    className="group flex items-center gap-1.5 text-charcoal/60 hover:text-botanical transition-colors font-sans text-xs tracking-tight uppercase"
                    aria-label={`View previous doctor: ${prevDoctor.name}`}
                  >
                    <ChevronLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>
                  <div className="w-px h-3.5 bg-charcoal/15 mx-1" />
                  <button
                    type="button"
                    onClick={() => onSelectDoctor(nextDoctor)}
                    className="group flex items-center gap-1.5 text-charcoal/60 hover:text-botanical transition-colors font-sans text-xs tracking-tight uppercase"
                    aria-label={`View next doctor: ${nextDoctor.name}`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="hidden md:flex items-center gap-2 pl-4 border-l border-charcoal/10">
                  <span className="w-2 h-2 rounded-full bg-botanical" />
                  <span className="font-sans text-xs tracking-tight uppercase text-charcoal/70 font-medium">
                    22Luna Medical Collective · Specialist Dossier
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="group flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-charcoal/15 bg-white hover:bg-charcoal hover:text-moon-ivory text-charcoal transition-all"
                aria-label="Close doctor profile"
              >
                <span className="font-sans text-xs tracking-tight uppercase text-stone-gray group-hover:text-moon-ivory font-medium">Close</span>
                <X size={15} className="transition-transform group-hover:rotate-90 duration-300" />
              </button>
            </div>

            {/* ── Scrollable Clinical Dossier Area ── */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-scroll overscroll-contain relative"
              style={{
                WebkitOverflowScrolling: 'touch',
                maxHeight: 'calc(100% - 65px)',
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Giant Editorial Calligraphic Signature Watermark Across Background */}
              {/* <div 
                aria-hidden="true"
                className="absolute top-0 right-0 lg:right-6 pointer-events-none select-none font-signature text-botanical/[0.045] leading-none overflow-hidden whitespace-nowrap z-0 capitalize rotate-[-3deg] origin-top-right"
                style={{ fontSize: 'clamp(7rem, 20vw, 17rem)' }}
              >
                {doctor.name}
              </div> */}

              <div className="p-6 sm:p-10 lg:p-14 max-w-5xl mx-auto space-y-12 pb-24 relative z-10">

                {/* ── SECTION 1: Physician Dossier Card with Calligraphic Signature Touch ── */}
                <div className="bg-soft-ivory border border-charcoal/[0.12] rounded-[2px] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                  
                  {/* Editorial Top Rule */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-botanical" />

                  {/* Subtle Calligraphic Signature in Dossier Top Corner */}
                  {/* <div 
                    aria-hidden="true"
                    className="absolute -top-4 right-4 pointer-events-none select-none font-signature text-charcoal/[0.04] text-7xl sm:text-8xl hidden sm:block rotate-[-2deg]"
                  >
                    {doctor.name}
                  </div> */}

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
                    
                    {/* Left: Framed Portrait Card */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start">
                      <div className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[4/5] rounded-[2px] overflow-hidden bg-[#2E4A40] border border-charcoal/20 group">
                        {doctor.image ? (
                          <CloudinaryImage
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            priority
                            sizes="(max-width: 768px) 260px, 280px"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#2E4A40] flex flex-col items-center justify-center p-6 text-center border border-white/10">
                            <span className="font-display text-4xl text-moon-ivory font-light mb-1">
                              {doctor.name.replace('Dr. ', '')}
                            </span>
                            <span className="font-sans text-xs uppercase tracking-tight text-gold font-medium">
                              {doctor.specialty}
                            </span>
                          </div>
                        )}
                        
                        {/* High-End Seal on Photo */}
                        <div className="absolute top-3 left-3 bg-[#2E4A40] border border-gold/50 px-2.5 py-1 rounded-[2px] flex items-center gap-1.5 text-moon-ivory">
                          <BadgeCheck size={14} className="text-gold" />
                          <span className="font-sans text-[10px] uppercase tracking-tight text-gold font-medium">Verified Specialist</span>
                        </div>

                        {/* Clinic Badge on Photo Bottom */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-charcoal px-3 py-1.5 rounded-[2px] border border-white/10 flex items-center justify-between text-moon-ivory text-xs tracking-tight uppercase">
                          <span className="font-medium text-gold text-[11px]">22Luna Clinic</span>
                          <span className="opacity-70 font-light text-[10px]">Bengaluru</span>
                        </div>
                      </div>

                      {/* Official Registration Line */}
                      <div className="mt-4 flex items-center gap-2 text-stone-gray text-xs font-sans tracking-tight">
                        <Building2 size={13} className="text-botanical shrink-0" />
                        <span>22Luna Aesthetic & Dental Sanctuary</span>
                      </div>
                    </div>

                    {/* Right: Specialty + Large Doctor Name + Medical Badges */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-start">
                      
                      {/* Top Badges Row */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] bg-[#2E4A40] text-moon-ivory font-sans text-xs uppercase tracking-tight font-medium">
                          <Stethoscope size={13} className="text-gold" />
                          <span>{doctor.specialty}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] bg-white border border-charcoal/20 text-charcoal font-sans text-xs uppercase tracking-tight font-medium">
                          <ShieldCheck size={13} className="text-botanical" />
                          <span>Board Certified Care</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] bg-white border border-charcoal/20 text-charcoal font-sans text-xs uppercase tracking-tight font-medium">
                          <FileCheck2 size={13} className="text-botanical" />
                          <span>Evidence-Based</span>
                        </span>
                      </div>

                      {/* Doctor Name Heading with Subtitle */}
                      <h1
                        className="font-display font-light text-charcoal uppercase leading-[0.92] tracking-tight mb-6"
                        style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
                      >
                        {doctor.name}
                      </h1>

                      {/* Clinical Assurance Matrix */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-charcoal/[0.1] mt-auto">
                        <div className="bg-white border border-charcoal/[0.1] p-3.5 rounded-[2px]">
                          <span className="block font-sans text-[10.5px] uppercase tracking-tight text-stone-gray font-medium">
                            Clinical Division
                          </span>
                          <span className="font-sans text-[13px] font-medium text-charcoal truncate block mt-0.5">
                            {doctor.specialty}
                          </span>
                        </div>

                        <div className="bg-white border border-charcoal/[0.1] p-3.5 rounded-[2px]">
                          <span className="block font-sans text-[10.5px] uppercase tracking-tight text-stone-gray font-medium">
                            Practice Standard
                          </span>
                          <span className="font-sans text-[13px] font-medium text-botanical truncate block mt-0.5">
                            Doctor-Led Care
                          </span>
                        </div>

                        {doctor.experience ? (
                          <div className="bg-white border border-charcoal/[0.1] p-3.5 rounded-[2px] col-span-2 sm:col-span-1">
                            <span className="block font-sans text-[10.5px] uppercase tracking-tight text-stone-gray font-medium">
                              Experience
                            </span>
                            <span className="font-sans text-[13px] font-medium text-charcoal truncate block mt-0.5">
                              {doctor.experience}
                            </span>
                          </div>
                        ) : (
                          <div className="bg-white border border-charcoal/[0.1] p-3.5 rounded-[2px] col-span-2 sm:col-span-1">
                            <span className="block font-sans text-[10.5px] uppercase tracking-tight text-stone-gray font-medium">
                              Consultation
                            </span>
                            <span className="font-sans text-[13px] font-medium text-charcoal truncate block mt-0.5">
                              1-on-1 Diagnostic
                            </span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>

                {/* ── SECTION 2: Doctor Biography ── */}
                {doctor.biography && doctor.biography.length > 0 && (
                  <div className="space-y-4 bg-white border border-charcoal/[0.1] p-6 sm:p-8 lg:p-9 rounded-[2px]">
                    <div className="flex items-center justify-between pb-3 border-b border-charcoal/[0.08]">
                      <div className="flex items-center gap-2">
                        <Stethoscope size={15} className="text-botanical" />
                        <span className="font-sans text-xs tracking-tight uppercase text-botanical font-semibold">
                          01 / Clinical Biography
                        </span>
                      </div>
                      <span className="font-sans text-xs uppercase tracking-tight text-stone-gray/60 font-medium hidden sm:inline">
                        Practitioner Record
                      </span>
                    </div>

                    <div className="space-y-4 font-sans font-light text-charcoal/80 leading-[1.85] text-[15px] sm:text-base pt-2">
                      {doctor.biography.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── SECTION 3: Areas of Expertise ── */}
                {doctor.areasOfExpertise && doctor.areasOfExpertise.length > 0 && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-charcoal/[0.08]">
                      <div className="flex items-center gap-2">
                        <Microscope size={15} className="text-botanical" />
                        <span className="font-sans text-xs tracking-tight uppercase text-botanical font-semibold">
                          02 / Clinical Focus & Areas of Expertise
                        </span>
                      </div>
                      <span className="font-sans text-xs uppercase tracking-tight text-stone-gray/60 font-medium">
                        {doctor.areasOfExpertise.length} Key Focus Areas
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {doctor.areasOfExpertise.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white border border-charcoal/[0.1] hover:border-botanical/60 p-4 rounded-[2px] flex items-start gap-3 transition-all duration-200 group"
                        >
                          <div className="w-5 h-5 rounded-full bg-botanical/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-botanical group-hover:text-moon-ivory transition-colors">
                            <CheckCircle2 size={13} className="text-botanical group-hover:text-moon-ivory transition-colors" />
                          </div>
                          <span className="font-sans text-[14px] sm:text-[15px] text-charcoal/90 font-light leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── SECTION 4: Education & Credentials ── */}
                {doctor.educationAndCredentials && doctor.educationAndCredentials.length > 0 && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-charcoal/[0.08]">
                      <div className="flex items-center gap-2">
                        <Award size={15} className="text-botanical" />
                        <span className="font-sans text-xs tracking-tight uppercase text-botanical font-semibold">
                          03 / Qualifications & Fellowships
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {doctor.educationAndCredentials.map((edu, i) => (
                        <div
                          key={i}
                          className="bg-white border border-charcoal/[0.1] hover:border-botanical p-4 sm:p-5 rounded-[2px] flex items-center gap-3.5 transition-all duration-200"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#2E4A40]/10 flex items-center justify-center shrink-0 text-botanical">
                            <Award size={16} />
                          </div>
                          <span className="font-sans text-[14.5px] sm:text-[15px] text-charcoal font-medium leading-snug">
                            {edu}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── SECTION 5: High-End Medical Consultation Booking Banner ── */}
                <div className="bg-[#2E4A40] text-moon-ivory p-8 sm:p-10 rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
                  
                  <div className="relative z-10 max-w-xl">
                    <div className="flex items-center gap-2 text-gold text-xs font-sans uppercase tracking-tight font-medium mb-1.5">
                      <ShieldCheck size={14} />
                      <span>Doctor-Led Consultation</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-light text-moon-ivory tracking-tight">
                      Schedule a Consultation with {doctor.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-moon-ivory/70 font-light mt-1.5 leading-relaxed">
                      Consult directly with our specialist at 22Luna Sanctuary, Bengaluru. Complete facial-dental assessment and tailored protocol design.
                    </p>
                  </div>

                  <Link
                    href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation%20with%20The%20Collective%20at%2022Luna."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-moon-ivory hover:bg-gold text-charcoal hover:text-midnight font-sans text-xs uppercase tracking-tight px-8 py-4 transition-all duration-300 font-medium shrink-0 group"
                  >
                    <span>Book A Consultation</span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
