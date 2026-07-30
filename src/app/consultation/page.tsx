import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// ── Section Imports ──────────────────────────────────────────────────────────
import { ConsultationHero } from '@/components/sections/consultation/ConsultationHero';
import { ConsultationPhilosophy } from '@/components/sections/consultation/ConsultationPhilosophy';
import { ConsultationProcess } from '@/components/sections/consultation/ConsultationProcess';
import { ConsultationSuitability } from '@/components/sections/consultation/ConsultationSuitability';
import { ConsultationApproach } from '@/components/sections/consultation/ConsultationApproach';
import { ConsultationDoctor } from '@/components/sections/consultation/ConsultationDoctor';
import { ConsultationFAQ } from '@/components/sections/consultation/ConsultationFAQ';
import { ConsultationReassurance } from '@/components/sections/consultation/ConsultationReassurance';
import { ConsultationCTA } from '@/components/sections/consultation/ConsultationCTA';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Consultation & Philosophy of Care | 22Luna',
  description:
    'Discover our philosophy of care. Consultation at 22Luna is a thoughtful, unhurried conversation designed to help you understand your skin and choose with confidence.',
  alternates: {
    canonical: 'https://22luna.in/consultation',
  },
  openGraph: {
    title: 'Consultation & Philosophy of Care | 22Luna',
    description: 'Discover our philosophy of care. Consultation at 22Luna is a thoughtful, unhurried conversation designed to help you understand your skin and choose with confidence.',
    url: 'https://22luna.in/consultation',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785396175/SAN_8574_uxe9hm.jpg',
        width: 1200,
        height: 630,
        alt: 'Philosophy of Care at 22Luna',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Consultation', item: '/consultation' },
];

export default function ConsultationPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      {/* Light Header — consistent with About and Treatments pages */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <ConsultationHero />

      {/* ── SECTION 2: Why Consultation Matters ── */}
      <ConsultationPhilosophy />

      {/* ── SECTION 3: What Happens During Your Consultation ── */}
      <ConsultationProcess />

      {/* ── SECTION 4: Who Should Book a Consultation? ── */}
      <ConsultationSuitability />

      {/* ── SECTION 5: Our Approach ── */}
      <ConsultationApproach />

      {/* ── SECTION 6: Meet Your Doctor ── */}
      <ConsultationDoctor />

      {/* ── SECTION 7: Frequently Asked Questions ── */}
      <ConsultationFAQ />

      {/* ── SECTION 8: Final Reassurance ── */}
      <ConsultationReassurance />

      {/* ── SECTION 9: Consultation CTA ── */}
      <ConsultationCTA />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
