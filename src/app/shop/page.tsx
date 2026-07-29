import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ComingSoonTemplate } from '@/components/sections/coming-soon/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'Curated Shop — Coming Soon | 22luna',
  description:
    'Our curated collection of skincare and wellness essentials is on its way. Soon you will be able to continue your care beyond the clinic.',
};

export default function ShopPage() {
  return (
    <main className="flex flex-col">
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
