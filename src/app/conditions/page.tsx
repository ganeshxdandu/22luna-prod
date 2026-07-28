import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// ── Section Imports ──────────────────────────────────────────────────────────
import { ConditionsHero } from '@/components/sections/conditions/ConditionsHero';
import { ConditionCategoriesOverview } from '@/components/sections/conditions/ConditionCategoriesOverview';
import { SkinConditionsSection } from '@/components/sections/conditions/SkinConditionsSection';
import { HairConditionsSection } from '@/components/sections/conditions/HairConditionsSection';
import { DentalConditionsSection } from '@/components/sections/conditions/DentalConditionsSection';
import { ConditionsCTA } from '@/components/sections/conditions/ConditionsCTA';

export const metadata: Metadata = {
  title: 'Skin, Hair & Dental Concerns',
  description:
    'Explore concerns across skin, hair, and dental care. Start with what you observe, and let our doctors guide you toward the right clinical approach.',
};

export default function ConditionsPage() {
  return (
    <main className="flex flex-col">
      {/* Light Header — consistent across sister landing pages */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <ConditionsHero />

      {/* ── SECTION 2: Category Overview Cards ── */}
      <ConditionCategoriesOverview />

      {/* ── SECTION 3: Skin Concerns Listing ── */}
      <SkinConditionsSection />

      {/* ── SECTION 4: Hair Concerns Listing ── */}
      <HairConditionsSection />

      {/* ── SECTION 5: Dental Concerns Listing ── */}
      <DentalConditionsSection />

      {/* ── SECTION 6: Consultation Guidance CTA ── */}
      <ConditionsCTA />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
