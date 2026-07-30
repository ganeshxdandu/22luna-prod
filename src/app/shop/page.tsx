import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ComingSoonTemplate } from '@/components/sections/coming-soon/ComingSoonTemplate';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Curated Shop - Coming Soon | 22Luna',
  description:
    'Our curated collection of skincare and wellness essentials is on its way. Soon you will be able to continue your care beyond the clinic.',
  alternates: {
    canonical: 'https://22luna.in/shop',
  },
  openGraph: {
    title: 'Curated Shop - Coming Soon | 22Luna',
    description: 'Our curated collection of skincare and wellness essentials is on its way. Soon you will be able to continue your care beyond the clinic.',
    url: 'https://22luna.in/shop',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/disposables_bebldt.png',
        width: 1200,
        height: 630,
        alt: 'Shop curated collection at 22Luna',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Shop', item: '/shop' },
];

export default function ShopPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <Header variant="light" />

      <ComingSoonTemplate
        categoryLabel="Curated Collection · Coming Soon"
        headline="Something Beautiful Is Taking Shape"
        copy="Our curated collection of skincare and wellness essentials is on its way. Soon you'll be able to continue your care beyond the clinic with products chosen by our doctors."
        microcopy="Some things are worth waiting for."
      />

      <Footer />
    </main>
  );
}
