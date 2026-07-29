import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ComingSoonTemplate } from '@/components/sections/coming-soon/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'Medical Tourism — Coming Soon | 22luna',
  description:
    'We are thoughtfully building an experience that makes travelling for treatment feel seamless, comfortable and deeply personal.',
};

export default function MedicalTourismPage() {
  return (
    <main className="flex flex-col">
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
