import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// ── Section Imports ──────────────────────────────────────────────────────────
import { ConcernsHero } from '@/components/sections/concerns/ConcernsHero';
import { ConcernCategoriesOverview } from '@/components/sections/concerns/ConcernCategoriesOverview';
import { SkinConcernsSection } from '@/components/sections/concerns/SkinConcernsSection';
import { HairConcernsSection } from '@/components/sections/concerns/HairConcernsSection';
import { DentalConcernsSection } from '@/components/sections/concerns/DentalConcernsSection';
import { SpecialConcernsSection } from '@/components/sections/concerns/SpecialConcernsSection';
import { ConcernsCTA } from '@/components/sections/concerns/ConcernsCTA';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Skin, Hair & Dental Concerns | 22Luna',
  description:
    'Explore concerns across skin, hair, and dental care. Start with what you observe, and let our doctors guide you toward the right clinical approach.',
  alternates: {
    canonical: 'https://22luna.in/concerns',
  },
  openGraph: {
    title: 'Skin, Hair & Dental Concerns | 22Luna',
    description: 'Explore concerns across skin, hair, and dental care. Start with what you observe, and let our doctors guide you toward the right clinical approach.',
    url: 'https://22luna.in/concerns',
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
  { name: 'Concerns', item: '/concerns' },
];

export default function ConcernsPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      {/* Light Header — consistent across sister landing pages */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <ConcernsHero />

      {/* ── SECTION 2: Category Overview Cards ── */}
      <ConcernCategoriesOverview />

      {/* ── SECTION 3: Skin Concerns Listing ── */}
      <SkinConcernsSection />

      {/* ── SECTION 4: Hair Concerns Listing ── */}
      <HairConcernsSection />

      {/* ── SECTION 5: Dental Concerns Listing ── */}
      <DentalConcernsSection />

      {/* ── SECTION 5.5: Special Concerns Listing ── */}
      <SpecialConcernsSection />

      {/* ── SECTION 6: Consultation Guidance CTA ── */}
      <ConcernsCTA />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
