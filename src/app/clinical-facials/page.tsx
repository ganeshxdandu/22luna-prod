import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

import { FacialsHero } from '@/components/sections/facials/FacialsHero';
import { FacialsPhilosophy } from '@/components/sections/facials/FacialsPhilosophy';
import { FacialTiers } from '@/components/sections/facials/FacialTiers';
import { SpecialFacialCategories } from '@/components/sections/facials/SpecialFacialCategories';
import { FacialsFindYourFacial } from '@/components/sections/facials/FacialsFindYourFacial';
import { FacialsFinalCTA } from '@/components/sections/facials/FacialsFinalCTA';

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Clinical Facials | 22Luna Sanctuary',
  description:
    'Five tiers of clinical facial care — from foundational hydration to ultra luxe transformation. Discover 22Luna\'s editorial approach to better skin in Bengaluru.',
  alternates: {
    canonical: 'https://22luna.in/clinical-facials',
  },
  openGraph: {
    title: 'Clinical Facials | 22Luna Sanctuary',
    description:
      'Five tiers of clinical facial care — from foundational hydration to ultra luxe transformation. Discover 22Luna\'s editorial approach to better skin.',
    url: 'https://22luna.in/clinical-facials',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/instruments_cstpp8.png',
        width: 1200,
        height: 630,
        alt: 'Clinical Facials at 22Luna Sanctuary',
      },
    ],
  },
};

// ─── Breadcrumbs ─────────────────────────────────────────────────────────────

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Clinical Facials', item: '/clinical-facials' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ClinicalFacialsPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      {/* Light header */}
      <Header variant="light" />

      {/* ── 01: Hero ── */}
      <FacialsHero />

      {/* ── 02: Facial Philosophy ── */}
      <FacialsPhilosophy />

      {/* ── 03: The Five Facial Tiers ── */}
      <FacialTiers />

      {/* ── 04: Special Facial Categories ── */}
      <SpecialFacialCategories />

      {/* ── 05: Find Your Facial ── */}
      <FacialsFindYourFacial />

      {/* ── 06: Final CTA ── */}
      <FacialsFinalCTA />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
