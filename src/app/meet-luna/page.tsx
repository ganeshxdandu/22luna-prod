import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GuidedDiscoveryExperience } from '@/components/sections/discovery/GuidedDiscoveryExperience';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: "Meet Luna - Let's Find Your Starting Point | 22Luna",
  description:
    'A calm, unhurried guided conversation to help you explore your skin, hair, and dental concerns without diagnosis or pressure.',
  alternates: {
    canonical: 'https://22luna.in/meet-luna',
  },
  openGraph: {
    title: "Meet Luna - Let's Find Your Starting Point | 22Luna",
    description: 'A calm, unhurried guided conversation to help you explore your skin, hair, and dental concerns without diagnosis or pressure.',
    url: 'https://22luna.in/meet-luna',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785396759/79e38ee2-3e06-4612-9e47-9bfd60eb07dd_rsdmbx.png',
        width: 1200,
        height: 630,
        alt: 'Meet Luna starting point',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Meet Luna', item: '/meet-luna' },
];

export default function MeetLunaPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <Header variant="light" />
      <GuidedDiscoveryExperience />
      <Footer />
    </main>
  );
}
