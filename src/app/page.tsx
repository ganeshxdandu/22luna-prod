import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { SignaturePrograms } from '@/components/sections/SignaturePrograms';
import { MeetDoctor } from '@/components/sections/MeetDoctor';
import { PatientStories } from '@/components/sections/PatientStories';
import { FAQ } from '@/components/sections/FAQ';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { SpaceSection } from '@/components/sections/SpaceSection';
import { UnderstandingCTA } from '@/components/sections/UnderstandingCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
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
      <PatientStories />

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
