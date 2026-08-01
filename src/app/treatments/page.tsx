import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UnderstandingCTA } from '@/components/sections/UnderstandingCTA';
import { TreatmentsContainer } from '@/components/sections/treatments/TreatmentsContainer';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Our Treatments | 22Luna Sanctuary',
  description:
    'Explore our curated portfolio of skin, hair, dental, and wellness treatments. Grouped by concern and category to help you navigate with confidence.',
  alternates: {
    canonical: 'https://22luna.in/treatments',
  },
  openGraph: {
    title: 'Our Treatments | 22Luna Sanctuary',
    description: 'Explore our curated portfolio of skin, hair, dental, and wellness treatments. Grouped by concern and category to help you navigate with confidence.',
    url: 'https://22luna.in/treatments',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/instruments_cstpp8.png',
        width: 1200,
        height: 630,
        alt: 'Treatments at 22Luna Sanctuary',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Treatments', item: '/treatments' },
];

export default function TreatmentsPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      {/* Light Header — consistent with About and Treatment detail pages */}
      <Header variant="light" />

      {/* ── Interactive Container with Hero, Sticky Sub-nav, Search, and Category listings ── */}
      <TreatmentsContainer />

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
