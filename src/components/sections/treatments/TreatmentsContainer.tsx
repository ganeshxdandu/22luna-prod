'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { TreatmentsHero } from './TreatmentsHero';
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
  const [activeSection, setActiveSection] = React.useState('skin-category');

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

  // IntersectionObserver scroll spy to track active section
  React.useEffect(() => {
    const sections = ['skin-category', 'hair-category', 'dental-category', 'wellness-category'];
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navItems = React.useMemo(() => [
    { id: 'skin-category', label: 'Skin' },
    { id: 'hair-category', label: 'Hair' },
    { id: 'dental-category', label: 'Dental' },
    { id: 'wellness-category', label: 'Wellness & IV' },
  ], []);

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
          "sticky z-40 bg-moon-ivory/95 backdrop-blur-md border-b border-charcoal/10 transition-all duration-500 w-full shadow-sm px-6 md:px-8 py-3 md:py-2.5",
          headerVisible ? "top-16 md:top-[72px]" : "top-0"
        )}
      >
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8 overflow-x-auto scrollbar-none whitespace-nowrap py-1 relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative py-2 font-sans text-xs md:text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 font-medium cursor-pointer flex items-baseline gap-1 select-none",
                    isActive ? "text-botanical" : "text-stone-gray hover:text-charcoal"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-botanical"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Luxury Minimal Search Input */}
          <div className="relative w-full md:w-60 group">
            <div className="absolute inset-0 bg-charcoal/[0.02] group-hover:bg-charcoal/[0.04] transition-colors rounded-full pointer-events-none" />
            <div className="relative flex items-center w-full px-3.5 py-1.5 border border-charcoal/10 rounded-full transition-all duration-300 focus-within:border-botanical/60 focus-within:bg-white focus-within:shadow-sm focus-within:shadow-botanical/5">
              <span className="text-stone-gray/40 mr-2 flex items-center pointer-events-none select-none transition-colors duration-300 group-focus-within:text-botanical">
                <Search size={13} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalogue..."
                className="w-full bg-transparent text-xs md:text-sm text-charcoal placeholder-stone-gray/40 focus:outline-none font-sans font-light tracking-wide"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="flex items-center text-stone-gray/40 hover:text-botanical transition-colors"
                  aria-label="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>
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
          {/* Default Categories Section Lists */}
          <SkinCategorySection />
          <HairCategorySection />
          <DentalCategorySection />
          <WellnessRevivSection />
        </>
      )}
    </div>
  );
}
