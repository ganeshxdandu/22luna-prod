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

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Skin, Hair & Dental Concerns | 22Luna',
  description:
    'Explore concerns across skin, hair, and dental care. Start with what you observe, and let our doctors guide you toward the right clinical approach.',
  alternates: {
    canonical: 'https://22luna.in/conditions',
  },
  openGraph: {
    title: 'Skin, Hair & Dental Concerns | 22Luna',
    description: 'Explore concerns across skin, hair, and dental care. Start with what you observe, and let our doctors guide you toward the right clinical approach.',
    url: 'https://22luna.in/conditions',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/bedding_qudetj.png',
        width: 1200,
        height: 630,
        alt: 'Concerns at 22Luna Sanctuary',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Conditions', item: '/conditions' },
];

export default function ConditionsPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
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
