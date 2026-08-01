'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { TreatmentsHero } from './TreatmentsHero';
import { CategoryCardsOverview } from './CategoryCardsOverview';
import { SkinCategorySection } from './SkinCategorySection';
import { HairCategorySection } from './HairCategorySection';
import { DentalCategorySection } from './DentalCategorySection';
import { WellnessRevivSection } from './WellnessRevivSection';
import { TreatmentCard } from './TreatmentCard';
import {
  SKIN_GROUPS,
  HAIR_TREATMENTS,
  DENTAL_TREATMENTS,
  WELLNESS_TREATMENTS,
} from '@/lib/treatments-catalogue';
import { cn } from '@/lib/utils';

export function TreatmentsContainer() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [headerVisible, setHeaderVisible] = React.useState(true);

  // Sync scroll detection to shift sticky top position in tandem with main Header
  React.useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 40) {
        setHeaderVisible(true);
      } else {
        const diff = currentY - lastY;
        if (diff > 5) {
          setHeaderVisible(false);
        } else if (diff < -5) {
          setHeaderVisible(true);
        }
      }
      lastY = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Consolidate all treatments for search lookup
  const allTreatments = React.useMemo(() => {
    const list: Array<{ name: string; slug: string; description: string; category: string }> = [];

    SKIN_GROUPS.forEach((g) => {
      g.treatments.forEach((t) => {
        list.push({ ...t, category: 'Skin Care' });
      });
    });

    HAIR_TREATMENTS.forEach((t) => {
      list.push({ ...t, category: 'Hair Care' });
    });

    DENTAL_TREATMENTS.forEach((t) => {
      list.push({ ...t, category: 'Dental' });
    });

    WELLNESS_TREATMENTS.forEach((t) => {
      list.push({ ...t, category: 'Wellness & IV' });
    });

    return list;
  }, []);

  // Filter treatments matching query
  const filteredTreatments = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return allTreatments.filter(
      (t) =>
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allTreatments]);

  // Smooth scroll offset matching visible height of main sticky header
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = headerVisible ? 130 : 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full flex flex-col">
      {/* ── Hero Section ── */}
      <TreatmentsHero />

      {/* ── Sticky Sub-navigation Header ── */}
      <div
        className={cn(
          "sticky z-40 bg-moon-ivory/95 backdrop-blur-md border-b border-charcoal/10 transition-all duration-500 w-full shadow-sm px-6 md:px-8 py-3 md:py-4",
          headerVisible ? "top-16 md:top-[72px]" : "top-0"
        )}
      >
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Navigation Links */}
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none whitespace-nowrap py-1">
            <button
              onClick={() => scrollToSection('skin-category')}
              className="font-sans text-xs md:text-[13px] tracking-[0.08em] text-stone-gray hover:text-botanical transition-colors font-medium uppercase"
            >
              Skin
            </button>
            <button
              onClick={() => scrollToSection('hair-category')}
              className="font-sans text-xs md:text-[13px] tracking-[0.08em] text-stone-gray hover:text-botanical transition-colors font-medium uppercase"
            >
              Hair
            </button>
            <button
              onClick={() => scrollToSection('dental-category')}
              className="font-sans text-xs md:text-[13px] tracking-[0.08em] text-stone-gray hover:text-botanical transition-colors font-medium uppercase"
            >
              Dental
            </button>
            <button
              onClick={() => scrollToSection('wellness-category')}
              className="font-sans text-xs md:text-[13px] tracking-[0.08em] text-stone-gray hover:text-botanical transition-colors font-medium uppercase"
            >
              Wellness & IV
            </button>
          </div>

          {/* Luxury Search Input Bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-stone-gray/50">
              <Search size={14} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments..."
              className="w-full pl-9 pr-8 py-2 bg-soft-ivory/70 border border-charcoal/15 rounded-full text-xs md:text-sm text-charcoal placeholder-stone-gray/40 focus:outline-none focus:border-botanical focus:bg-white transition-all duration-300 font-sans font-light tracking-wide shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-3.5 flex items-center text-stone-gray/60 hover:text-botanical transition-colors"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Conditional Content Area ── */}
      {searchQuery.trim() !== '' ? (
        <section className="bg-moon-ivory py-16 md:py-24 px-6 md:px-8 w-full min-h-[60vh] relative z-10">
          <div className="max-w-site mx-auto w-full">
            
            {/* Results Title Header */}
            <div className="pb-8 border-b border-charcoal/10 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-2">
                  Search Results
                </span>
                <h2 className="font-display text-charcoal uppercase text-xl sm:text-2xl lg:text-3xl font-light">
                  Found {filteredTreatments.length} {filteredTreatments.length === 1 ? 'treatment' : 'treatments'} matching &ldquo;{searchQuery}&rdquo;
                </h2>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-stone-gray hover:text-botanical text-xs md:text-[13px] font-sans font-medium uppercase tracking-wider underline underline-offset-4 self-start sm:self-auto transition-colors"
              >
                Clear Search
              </button>
            </div>

            {/* Grid display */}
            {filteredTreatments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTreatments.map((treatment, idx) => (
                  <TreatmentCard
                    key={treatment.slug}
                    treatment={treatment}
                    delay={0.05 * idx}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
                <span className="text-charcoal/20 text-4xl mb-6">🔍</span>
                <h3 className="font-display text-charcoal text-lg uppercase tracking-tight mb-2">
                  No matching treatments found
                </h3>
                <p className="font-sans text-stone-gray text-[13px] leading-[1.6] font-light">
                  We couldn&apos;t find any treatment matches. Check your spelling or try searching for another concern.
                </p>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* Default Categories Overview & Section Lists */}
          <CategoryCardsOverview />
          <SkinCategorySection />
          <HairCategorySection />
          <DentalCategorySection />
          <WellnessRevivSection />
        </>
      )}
    </div>
  );
}
