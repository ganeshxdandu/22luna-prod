'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import {
  TREATMENT_CATEGORIES,
  SKIN_GROUPS,
  HAIR_TREATMENTS,
  DENTAL_TREATMENTS,
} from '@/lib/treatments-catalogue';

interface TreatmentsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

// Category subtitles
const CATEGORY_SUBTITLES: Record<string, string> = {
  skin: "Treatments designed around your skin's needs.",
  hair: 'Medical hair restoration and scalp care that addresses loss at its source.',
  dental: 'Cosmetic and restorative dentistry from smile design to precision implants.',
  wellness: 'IV therapy and longevity programmes delivered through our REVIV partnership.',
};

// Dental columns
const DENTAL_COLUMNS = [
  {
    title: 'Preventative & Restorative',
    treatments: DENTAL_TREATMENTS.slice(0, 6),
  },
  {
    title: 'Periodontal & Orthodontic',
    treatments: DENTAL_TREATMENTS.slice(6, 12),
  },
  {
    title: 'Cosmetic & Aesthetic',
    treatments: DENTAL_TREATMENTS.slice(12),
  },
];

// Hair columns
const HAIR_COLUMNS = [
  {
    title: 'Regenerative & Follicular',
    treatments: HAIR_TREATMENTS.slice(0, 4),
  },
  {
    title: 'Laser & Grooming',
    treatments: HAIR_TREATMENTS.slice(4),
  },
];

export function TreatmentsMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: TreatmentsMegaMenuProps) {
  const [activeCategoryIdx, setActiveCategoryIdx] = React.useState(0);
  const activeCat = TREATMENT_CATEGORIES[activeCategoryIdx] || TREATMENT_CATEGORIES[0];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="dialog"
      aria-label="Treatments navigation"
      className="absolute left-0 right-0 top-full z-40 bg-moon-ivory border-b border-charcoal/15 shadow-2xl shadow-charcoal/10"
    >
      {/* ── TOP CATEGORY SELECTOR ──────────────────────────────────────── */}
      <div className="border-b border-charcoal/10 bg-moon-ivory/95 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto w-full px-6 sm:px-8 md:px-12">
          <div
            className="flex items-center gap-6 md:gap-10"
            role="tablist"
            aria-label="Treatment categories"
          >
            {TREATMENT_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIdx === idx;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategoryIdx(idx)}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  className={cn(
                    'relative py-4 px-1 font-sans text-xs tracking-[0.12em] uppercase transition-colors duration-200 focus:outline-none cursor-pointer group',
                    isActive
                      ? 'text-botanical font-semibold'
                      : 'text-stone-gray hover:text-charcoal font-medium'
                  )}
                >
                  <span className="relative z-10">{cat.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="treatmentTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-botanical"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── ACTIVE CATEGORY INTRO BAR ──────────────────────────────────── */}
      <div className="border-b border-charcoal/10 bg-moon-ivory">
        <div className="max-w-[1520px] mx-auto w-full px-6 sm:px-8 md:px-12 py-4 flex items-baseline justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-2xl md:text-3xl font-normal text-charcoal tracking-tight">
              {activeCat.name}
            </span>
            <span className="font-sans font-light text-[13.5px] text-stone-gray hidden sm:inline-block border-l border-charcoal/20 pl-4">
              {CATEGORY_SUBTITLES[activeCat.id] || activeCat.description}
            </span>
          </div>

          {activeCat.id !== 'wellness' && (
            <Link
              href={`/treatments#${activeCat.id}`}
              onClick={onClose}
              onFocus={onFocus}
              onBlur={onBlur}
              className="font-sans text-[11px] tracking-[0.12em] uppercase font-semibold text-botanical hover:text-charcoal transition-colors duration-150 inline-flex items-center gap-1.5 group/all shrink-0"
            >
              <span>View All {activeCat.name} Treatments</span>
              <span className="inline-block transition-transform duration-150 group-hover/all:translate-x-0.5">
                →
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* ── MAIN EDITORIAL GRID CONTENT ────────────────────────────────── */}
      <div className="max-w-[1520px] mx-auto w-full px-6 sm:px-8 md:px-12 py-7 md:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-5 gap-7 lg:gap-8 xl:gap-10 items-start"
          >
            {/* ── SKIN CATEGORY (4 groups in 4 columns + 1 CTA column) ── */}
            {activeCat.id === 'skin' && (
              <>
                {/* Column 1: Clinical Facials & Peels */}
                <div>
                  <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal/70 font-semibold pb-2 border-b border-charcoal/15 mb-3">
                    {SKIN_GROUPS[0]?.groupName || 'Clinical Facials & Peels'}
                  </p>
                  <ul className="space-y-2">
                    {SKIN_GROUPS[0]?.treatments.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/treatments/${t.slug}`}
                          onClick={onClose}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          className="group/link font-sans font-light text-[13.5px] text-charcoal/80 hover:text-botanical transition-colors duration-150 flex items-baseline justify-between py-0.5"
                        >
                          <span className="leading-snug transition-transform duration-150 group-hover/link:translate-x-0.5">
                            {t.name}
                          </span>
                          <span className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 text-botanical shrink-0 ml-1.5">
                            <ArrowUpRight size={12} strokeWidth={1.5} />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Injectables & Contouring */}
                <div>
                  <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal/70 font-semibold pb-2 border-b border-charcoal/15 mb-3">
                    {SKIN_GROUPS[1]?.groupName || 'Injectables & Contouring'}
                  </p>
                  <ul className="space-y-2">
                    {SKIN_GROUPS[1]?.treatments.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/treatments/${t.slug}`}
                          onClick={onClose}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          className="group/link font-sans font-light text-[13.5px] text-charcoal/80 hover:text-botanical transition-colors duration-150 flex items-baseline justify-between py-0.5"
                        >
                          <span className="leading-snug transition-transform duration-150 group-hover/link:translate-x-0.5">
                            {t.name}
                          </span>
                          <span className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 text-botanical shrink-0 ml-1.5">
                            <ArrowUpRight size={12} strokeWidth={1.5} />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Advanced Energy & Lasers */}
                <div>
                  <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal/70 font-semibold pb-2 border-b border-charcoal/15 mb-3">
                    {SKIN_GROUPS[2]?.groupName || 'Advanced Energy & Lasers'}
                  </p>
                  <ul className="space-y-2">
                    {SKIN_GROUPS[2]?.treatments.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/treatments/${t.slug}`}
                          onClick={onClose}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          className="group/link font-sans font-light text-[13.5px] text-charcoal/80 hover:text-botanical transition-colors duration-150 flex items-baseline justify-between py-0.5"
                        >
                          <span className="leading-snug transition-transform duration-150 group-hover/link:translate-x-0.5">
                            {t.name}
                          </span>
                          <span className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 text-botanical shrink-0 ml-1.5">
                            <ArrowUpRight size={12} strokeWidth={1.5} />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Specialized Protocols */}
                <div>
                  <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal/70 font-semibold pb-2 border-b border-charcoal/15 mb-3">
                    {SKIN_GROUPS[3]?.groupName || 'Specialized Protocols'}
                  </p>
                  <ul className="space-y-2">
                    {SKIN_GROUPS[3]?.treatments.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/treatments/${t.slug}`}
                          onClick={onClose}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          className="group/link font-sans font-light text-[13.5px] text-charcoal/80 hover:text-botanical transition-colors duration-150 flex items-baseline justify-between py-0.5"
                        >
                          <span className="leading-snug transition-transform duration-150 group-hover/link:translate-x-0.5">
                            {t.name}
                          </span>
                          <span className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 text-botanical shrink-0 ml-1.5">
                            <ArrowUpRight size={12} strokeWidth={1.5} />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* ── HAIR CATEGORY ──────────────────────────────────────── */}
            {activeCat.id === 'hair' && (
              <>
                {HAIR_COLUMNS.map((col) => (
                  <div key={col.title}>
                    <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal/70 font-semibold pb-2 border-b border-charcoal/15 mb-3">
                      {col.title}
                    </p>
                    <ul className="space-y-2">
                      {col.treatments.map((t) => (
                        <li key={t.slug}>
                          <Link
                            href={`/treatments/${t.slug}`}
                            onClick={onClose}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            className="group/link font-sans font-light text-[13.5px] text-charcoal/80 hover:text-botanical transition-colors duration-150 flex items-baseline justify-between py-0.5"
                          >
                            <span className="leading-snug transition-transform duration-150 group-hover/link:translate-x-0.5">
                              {t.name}
                            </span>
                            <span className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 text-botanical shrink-0 ml-1.5">
                              <ArrowUpRight size={12} strokeWidth={1.5} />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Hair Clinical Feature Box (Spans 2 columns) */}
                <div className="md:col-span-2 border border-charcoal/15 p-6 rounded-[4px] bg-soft-ivory/60 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone-gray font-semibold block mb-2">
                      Physician-Led Trichology
                    </span>
                    <p className="font-display text-xl text-charcoal font-normal mb-2 leading-snug">
                      Root-Cause Cellular Restoration
                    </p>
                    <p className="font-sans font-light text-[13px] text-stone-gray leading-relaxed">
                      Every hair plan at 22Luna begins with micro-diagnostic scalp assessment to target follicle dormancy and circulation with precision protocols.
                    </p>
                  </div>
                  <Link
                    href="/treatments#hair"
                    onClick={onClose}
                    className="mt-4 inline-flex items-center gap-1.5 font-sans text-[11px] tracking-[0.12em] uppercase font-semibold text-botanical hover:text-charcoal transition-colors"
                  >
                    <span>Explore Comprehensive Hair Plans</span>
                    <span>→</span>
                  </Link>
                </div>
              </>
            )}

            {/* ── DENTAL CATEGORY ────────────────────────────────────── */}
            {activeCat.id === 'dental' && (
              <>
                {DENTAL_COLUMNS.map((col, idx) => (
                  <div key={col.title} className={cn(idx === 2 && 'md:col-span-2')}>
                    <p className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal/70 font-semibold pb-2 border-b border-charcoal/15 mb-3">
                      {col.title}
                    </p>
                    <ul className="space-y-2">
                      {col.treatments.map((t) => (
                        <li key={t.slug}>
                          <Link
                            href={`/treatments/${t.slug}`}
                            onClick={onClose}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            className="group/link font-sans font-light text-[13.5px] text-charcoal/80 hover:text-botanical transition-colors duration-150 flex items-baseline justify-between py-0.5"
                          >
                            <span className="leading-snug transition-transform duration-150 group-hover/link:translate-x-0.5">
                              {t.name}
                            </span>
                            <span className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 text-botanical shrink-0 ml-1.5">
                              <ArrowUpRight size={12} strokeWidth={1.5} />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}

            {/* ── WELLNESS & IV CATEGORY (REVIV) (Spans 4 columns) ───── */}
            {activeCat.id === 'wellness' && (
              <div className="md:col-span-4 flex flex-col md:flex-row gap-8 items-center pr-4">
                <div className="flex-1 max-w-[540px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone-gray font-semibold">
                      LUNA × REVIV PARTNERSHIP
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-botanical shrink-0 animate-pulse" />
                  </div>
                  <p className="font-display text-2xl md:text-3xl leading-snug text-charcoal mb-3">
                    Intravenous Hydration &amp; Longevity
                  </p>
                  <p className="font-sans font-light text-[13.5px] leading-relaxed text-stone-gray mb-6">
                    IV therapies and wellness formulations delivered through our global partnership with REVIV. Administered in our luxury medical sanctuary for optimal cellular absorption, recovery, and inner vitality.
                  </p>

                  <div className="grid grid-cols-2 gap-6 border-y border-charcoal/15 py-4 mb-6">
                    <div>
                      <p className="font-display text-2xl text-botanical font-light">2,000,000+</p>
                      <p className="font-sans text-[9.5px] tracking-wider uppercase text-stone-gray mt-0.5">IV Therapies Globally</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-botanical font-light">100+ Clinics</p>
                      <p className="font-sans text-[9.5px] tracking-wider uppercase text-stone-gray mt-0.5">Global REVIV Network</p>
                    </div>
                  </div>

                  <a
                    href="https://revivindia.com/iv-therapies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory hover:bg-botanical/90 font-sans text-[11px] uppercase tracking-wider font-medium px-6 py-3 transition-all duration-200"
                  >
                    <span>Explore REVIV Therapies</span>
                    <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                </div>

                <div className="hidden md:block w-[260px] h-[280px] relative rounded-[4px] overflow-hidden shadow-sm border border-charcoal/15 shrink-0">
                  <CloudinaryImage
                    src="ivdrip_yhlvex"
                    alt="REVIV Wellness Suite"
                    fill
                    sizes="500px"
                    quality={100}
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* ── COLUMN 5: CTA PANEL ───────────────────────────────── */}
            <div className="md:col-span-1 h-full">
              <div className="bg-botanical text-moon-ivory p-6 rounded-[4px] flex flex-col justify-between shadow-sm h-full min-h-[300px]">
                <div>
                  <span className="font-sans text-[9.5px] tracking-[0.18em] uppercase text-moon-ivory/60 font-semibold block mb-3">
                    Find Your Treatment
                  </span>
                  <p className="font-display text-xl leading-snug text-moon-ivory font-normal tracking-tight mb-3">
                    Not sure where to begin?
                  </p>
                  <div className="w-8 h-px bg-moon-ivory/25 mb-3" />
                  <p className="font-sans font-light text-[12.5px] leading-relaxed text-moon-ivory/80">
                    Every concern is different. Let us help you find the right place to start.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-moon-ivory/20">
                  <Link
                    href="/find-your-starting-point"
                    onClick={onClose}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="group/quiz inline-flex items-center justify-between w-full bg-moon-ivory hover:bg-white text-botanical font-sans text-[10.5px] tracking-[0.12em] uppercase font-semibold px-4.5 py-3 rounded-full shadow-sm transition-all duration-200"
                  >
                    <span>Take the Luna Quiz</span>
                    <ArrowUpRight size={12} strokeWidth={2} className="transition-transform duration-200 group-hover/quiz:translate-x-0.5 group-hover/quiz:-translate-y-0.5" />
                  </Link>

                  <a
                    href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
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
  );
}
