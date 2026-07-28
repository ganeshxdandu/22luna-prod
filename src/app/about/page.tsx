import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/AboutHero';
import { AboutPhilosophy } from '@/components/sections/AboutPhilosophy';
import { SanctuaryFeatures } from '@/components/sections/SanctuaryFeatures';
import { OneDestination } from '@/components/sections/OneDestination';
import { SterilizationSection } from '@/components/sections/SterilizationSection';
import { StoriesAndEthics } from '@/components/sections/StoriesAndEthics';
import { FoundersStory } from '@/components/sections/FoundersStory';
import { DifferentKind } from '@/components/sections/DifferentKind';
import { ScienceBeforeHype } from '@/components/sections/ScienceBeforeHype';
import { TheCollective } from '@/components/sections/TheCollective';
import { UnderstandingCTA } from '@/components/sections/UnderstandingCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Our boutique sanctuary in the heart of Bengaluru City — cutting-edge aesthetics, private suites, ambient lighting, and seamless care from Consultation to Glow.',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Light variant: ivory bg, dark charcoal text, botanical green CTA */}
      <Header variant="light" />

      {/* ── SECTION 1: About Hero ── */}
      <AboutHero />

      {/* ── SECTION 2: Philosophy ── */}
      <AboutPhilosophy />

      {/* ── SECTION 3: Sanctuary Features ── */}
      <SanctuaryFeatures />

      {/* ── SECTION 4: One Destination ── */}
      <OneDestination />

      {/* ── SECTION 5: Sterilization Storytelling ── */}
      <SterilizationSection />

      {/* ── SECTION 6: Stories and Ethics ── */}
      <StoriesAndEthics />

      {/* ── SECTION 7: Founder's Story ── */}
      <FoundersStory />

      {/* ── SECTION 8: A Different Kind of Clinic ── */}
      <DifferentKind />

      {/* ── SECTION 9: Science Before Hype ── */}
      <ScienceBeforeHype />

      {/* ── SECTION 10: The Collective ── */}
      <TheCollective />

      {/* ── SECTION 11: CTA Banner ── */}
      <UnderstandingCTA
        title="Self Care Beyond Gender & Age."
        subtitle="Labels stay at the door. Every consultation begins with listening, understanding your concerns, and creating a plan that's as individual as the person sitting across from us."
      />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
