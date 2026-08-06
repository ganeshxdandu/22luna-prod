import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { SignaturePrograms } from '@/components/sections/SignaturePrograms';
import { MeetDoctor } from '@/components/sections/MeetDoctor';
import { PatientStories } from '@/components/sections/PatientStories';
import { QuietTrust } from '@/components/sections/QuietTrust';
import { PatientVoices } from '@/components/sections/PatientVoices';
import { FAQ } from '@/components/sections/FAQ';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { SpaceSection } from '@/components/sections/SpaceSection';
import { UnderstandingCTA } from '@/components/sections/UnderstandingCTA';
import { Footer } from '@/components/layout/Footer';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = {
  title: '22Luna - Skin, Hair & Dental Sanctuary | Bengaluru',
  description: 'Premium boutique medical aesthetics, skin therapy, hair restoration, and digital smile design in Ashok Nagar, Bengaluru. Experience unhurried, evidence-based care.',
  alternates: {
    canonical: 'https://22luna.in',
  },
  openGraph: {
    title: '22Luna - Skin, Hair & Dental Sanctuary | Bengaluru',
    description: 'Premium boutique medical aesthetics, skin therapy, hair restoration, and digital smile design in Ashok Nagar, Bengaluru. Experience unhurried, evidence-based care.',
    url: 'https://22luna.in',
    images: [
      {
        url: 'https://22luna.in/assets/placeholders/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '22Luna Skin, Hair & Dental Sanctuary',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <LocalBusinessSchema />
      <Header />

      {/* ── SECTION 1: Hero ── */}
      <Hero />

      {/* ── SECTION 2: Logo Marquee ── */}
      <LogoMarquee />

      {/* ── SECTION 3: Signature Programs ── */}
      <SignaturePrograms />

      {/* ── SECTION 4: Meet Dr. Niharika ── */}
      <MeetDoctor />

      {/* ── SECTION 5: Patient Stories ── */}
      {/* <PatientStories /> */}

      {/* ── SECTION 5.5: Patient Voices — Living review wall (100vh bento conveyor) ── */}
      <PatientVoices />

      {/* ── SECTION 5.6: Moments at 22 Luna — Media gallery ── */}
      {/* <QuietTrust /> */}

      {/* ── SECTION 6: FAQ ── */}
      <FAQ />

      {/* ── SECTION 7: Instagram Feed ── */}
      <InstagramFeed />

      {/* ── SECTION 8: Space Section ── */}
      <SpaceSection />

      {/* ── SECTION 9: CTA Banner ── */}
      <UnderstandingCTA />

      {/* ── SECTION 10: Footer ── */}
      <Footer />
    </main>
  );
}
