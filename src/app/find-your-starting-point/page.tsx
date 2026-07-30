import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GuidedDiscoveryExperience } from '@/components/sections/discovery/GuidedDiscoveryExperience';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: "Find Your Starting Point | 22Luna Guided Discovery",
  description:
    'A calm, unhurried guided conversation to help you explore your skin, hair, and dental concerns without diagnosis or pressure.',
  alternates: {
    canonical: 'https://22luna.in/find-your-starting-point',
  },
  openGraph: {
    title: "Find Your Starting Point | 22Luna Guided Discovery",
    description: 'A calm, unhurried guided conversation to help you explore your skin, hair, and dental concerns without diagnosis or pressure.',
    url: 'https://22luna.in/find-your-starting-point',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785396759/79e38ee2-3e06-4612-9e47-9bfd60eb07dd_rsdmbx.png',
        width: 1200,
        height: 630,
        alt: 'Find your starting point quiz',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Find Your Starting Point', item: '/find-your-starting-point' },
];

export default function FindYourStartingPointPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <Header variant="light" />
      <GuidedDiscoveryExperience />
      <Footer />
    </main>
  );
}
