import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// ── Section Imports ──────────────────────────────────────────────────────────
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactClinicInfo } from '@/components/sections/contact/ContactClinicInfo';
import { ContactSpaceGallery } from '@/components/sections/contact/ContactSpaceGallery';
import { ContactMap } from '@/components/sections/contact/ContactMap';
import { ContactChannels } from '@/components/sections/contact/ContactChannels';
import { ContactFAQ } from '@/components/sections/contact/ContactFAQ';
import { ContactCTA } from '@/components/sections/contact/ContactCTA';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Visit & Contact Us | 22Luna Skin, Hair & Dental Sanctuary',
  description:
    'Visit 22Luna Skin, Hair & Dental Sanctuary in Ashok Nagar, Bengaluru. Find clinic opening hours, location map, parking details, and direct contact channels.',
  alternates: {
    canonical: 'https://22luna.in/contact',
  },
  openGraph: {
    title: 'Visit & Contact Us | 22Luna Skin, Hair & Dental Sanctuary',
    description: 'Visit 22Luna Skin, Hair & Dental Sanctuary in Ashok Nagar, Bengaluru. Find clinic opening hours, location map, parking details, and direct contact channels.',
    url: 'https://22luna.in/contact',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785396759/79e38ee2-3e06-4612-9e47-9bfd60eb07dd_rsdmbx.png',
        width: 1200,
        height: 630,
        alt: 'Visit 22Luna Sanctuary',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Contact', item: '/contact' },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      {/* Light Header — consistent across site pages */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <ContactHero />

      {/* ── SECTION 2: Visit Our Clinic ── */}
      <ContactClinicInfo />

      {/* ── SECTION 3: Experience the Space ── */}
      <ContactSpaceGallery />

      {/* ── SECTION 4: Find Us (Google Map) ── */}
      <ContactMap />

      {/* ── SECTION 5: Ways to Reach Us ── */}
      <ContactChannels />

      {/* ── SECTION 6: Frequently Asked Questions ── */}
      <ContactFAQ />

      {/* ── SECTION 7: Final CTA ── */}
      <ContactCTA />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
