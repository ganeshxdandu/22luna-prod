import type { Metadata } from 'next';
import Link from 'next/link';
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

      {/* ── Contextual Discovery LUNA+ ── */}
      <section className="bg-soft-ivory py-12 border-b border-charcoal/10 px-6 md:px-8 w-full select-none text-center">
        <div className="max-w-[600px] mx-auto flex flex-col items-center">
          <span className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-botanical font-semibold mb-2 block">
            DISCOVER LUNA+
          </span>
          <p className="font-sans text-stone-gray text-xs md:text-sm tracking-wide leading-relaxed mb-4">
            More value for your continued journey. Credits automatically allocated to your profile.
          </p>
          <Link
            href="/luna-plus"
            className="font-sans text-[0.7rem] uppercase font-medium tracking-wider text-botanical hover:text-botanical/80 underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
          >
            Learn More About LUNA+ →
          </Link>
        </div>
      </section>

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
