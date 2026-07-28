import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getTreatmentBySlug } from '@/lib/treatment-data';

// ── Section imports ──────────────────────────────────────────────────────────
import { TreatmentHero } from '@/components/sections/treatment/TreatmentHero';
import { TreatmentIntroduction } from '@/components/sections/treatment/TreatmentIntroduction';
import { TreatmentWhyChoose } from '@/components/sections/treatment/TreatmentWhyChoose';
import { TreatmentSuitability } from '@/components/sections/treatment/TreatmentSuitability';
import { TreatmentHowItWorks } from '@/components/sections/treatment/TreatmentHowItWorks';
import { TreatmentJourney } from '@/components/sections/treatment/TreatmentJourney';
import { TreatmentQuickFacts } from '@/components/sections/treatment/TreatmentQuickFacts';
import { TreatmentBenefits } from '@/components/sections/treatment/TreatmentBenefits';
import { TreatmentApproach } from '@/components/sections/treatment/TreatmentApproach';
import { TreatmentResults } from '@/components/sections/treatment/TreatmentResults';
import { TreatmentFAQ } from '@/components/sections/treatment/TreatmentFAQ';
import { TreatmentCTA } from '@/components/sections/treatment/TreatmentCTA';

// ─────────────────────────────────────────────────────────────────────────────

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: TreatmentPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return { title: 'Treatment Not Found' };
  }

  return {
    title: treatment.name,
    description: treatment.tagline,
  };
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      {/* Light header — matches About page variant */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <TreatmentHero treatment={treatment} />

      {/* ── SECTION 2: Introduction ── */}
      <TreatmentIntroduction treatment={treatment} />

      {/* ── SECTION 3: Why Choose This Treatment ── */}
      <TreatmentWhyChoose treatment={treatment} />

      {/* ── SECTION 4: Patient Suitability ── */}
      <TreatmentSuitability treatment={treatment} />

      {/* ── SECTION 5: How It Works ── */}
      <TreatmentHowItWorks treatment={treatment} />

      {/* ── SECTION 6: Your Treatment Journey ── */}
      <TreatmentJourney treatment={treatment} />

      {/* ── SECTION 7: Quick Facts ── */}
      <TreatmentQuickFacts treatment={treatment} />

      {/* ── SECTION 8: Benefits ── */}
      <TreatmentBenefits treatment={treatment} />

      {/* ── SECTION 9: Our Approach ── */}
      <TreatmentApproach treatment={treatment} />

      {/* ── SECTION 10: Results ── */}
      <TreatmentResults treatment={treatment} />

      {/* ── SECTION 11: FAQs ── */}
      <TreatmentFAQ treatment={treatment} />

      {/* ── SECTION 12: Consultation CTA ── */}
      <TreatmentCTA treatment={treatment} />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
