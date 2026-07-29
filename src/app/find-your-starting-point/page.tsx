import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GuidedDiscoveryExperience } from '@/components/sections/discovery/GuidedDiscoveryExperience';

export const metadata: Metadata = {
  title: "Find Your Starting Point | 22luna Guided Discovery",
  description:
    'A calm, unhurried guided conversation to help you explore your skin, hair, and dental concerns without diagnosis or pressure.',
};

export default function FindYourStartingPointPage() {
  return (
    <main className="flex flex-col">
      <Header variant="light" />
      <GuidedDiscoveryExperience />
      <Footer />
    </main>
  );
}
