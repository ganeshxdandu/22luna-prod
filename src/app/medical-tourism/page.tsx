import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ComingSoonTemplate } from '@/components/sections/coming-soon/ComingSoonTemplate';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Medical Tourism - Coming Soon | 22Luna',
  description:
    'We are thoughtfully building an experience that makes travelling for treatment feel seamless, comfortable and deeply personal.',
  alternates: {
    canonical: 'https://22luna.in/medical-tourism',
  },
  openGraph: {
    title: 'Medical Tourism - Coming Soon | 22Luna',
    description: 'We are thoughtfully building an experience that makes travelling for treatment feel seamless, comfortable and deeply personal.',
    url: 'https://22luna.in/medical-tourism',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397805/fumigation_lcty2k.png',
        width: 1200,
        height: 630,
        alt: 'Medical Tourism at 22Luna',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Medical Tourism', item: '/medical-tourism' },
];

export default function MedicalTourismPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <Header variant="light" />

      <ComingSoonTemplate
        categoryLabel="Medical Tourism · Coming Soon"
        headline="Preparing Something Worth Waiting For"
        copy="We're thoughtfully building an experience that makes travelling for treatment feel seamless, comfortable and deeply personal. From planning your visit to your recovery, every detail is being designed with care."
        microcopy="We're taking our time so your experience feels effortless."
      />

      <Footer />
    </main>
  );
}
