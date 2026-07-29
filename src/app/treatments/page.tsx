import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UnderstandingCTA } from '@/components/sections/UnderstandingCTA';

// ── Section Imports ──────────────────────────────────────────────────────────
import { TreatmentsHero } from '@/components/sections/treatments/TreatmentsHero';
import { CategoryCardsOverview } from '@/components/sections/treatments/CategoryCardsOverview';
import { SkinCategorySection } from '@/components/sections/treatments/SkinCategorySection';
import { HairCategorySection } from '@/components/sections/treatments/HairCategorySection';
import { DentalCategorySection } from '@/components/sections/treatments/DentalCategorySection';
import { WellnessRevivSection } from '@/components/sections/treatments/WellnessRevivSection';

export const metadata: Metadata = {
  title: 'Our Treatments',
  description:
    'Explore our curated portfolio of skin, hair, dental, and wellness treatments. Grouped by concern and category to help you navigate with confidence.',
};

export default function TreatmentsPage() {
  return (
    <main className="flex flex-col">
      {/* Light Header — consistent with About and Treatment detail pages */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <TreatmentsHero />

      {/* ── SECTION 2: Category Overview Cards ── */}
      <CategoryCardsOverview />

      {/* ── SECTION 3: Skin Category Listing ── */}
      <SkinCategorySection />

      {/* ── SECTION 4: Hair Category Listing ── */}
      <HairCategorySection />

      {/* ── SECTION 5: Dental Category Listing ── */}
      <DentalCategorySection />

      {/* ── SECTION 6: Wellness & IV (REVIV Partner Experience) ── */}
      <WellnessRevivSection />

      {/* ── SECTION 7: Consultation CTA Banner ── */}
      <UnderstandingCTA
        title="Unsure Which Treatment Fits Your Concern?"
        subtitle="You don't need to know the name of a procedure to begin. Every journey starts with an open, unhurried consultation where we listen to your goals and build a thoughtful plan together."
        buttonText="Book Consultation"
        buttonHref="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation."
      />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
