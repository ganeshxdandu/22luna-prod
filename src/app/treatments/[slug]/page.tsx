import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getTreatmentBySlug } from '@/lib/treatment-data';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

// ── Section imports ──────────────────────────────────────────────────────────
import { TreatmentHero } from '@/components/sections/treatment/TreatmentHero';
import { TreatmentIntroduction } from '@/components/sections/treatment/TreatmentIntroduction';
import { TreatmentSuitability } from '@/components/sections/treatment/TreatmentSuitability';
import { TreatmentHowItWorks } from '@/components/sections/treatment/TreatmentHowItWorks';
import { TreatmentJourney } from '@/components/sections/treatment/TreatmentJourney';
import { TreatmentBenefits } from '@/components/sections/treatment/TreatmentBenefits';
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
    title: `${treatment.name} | Treatments | 22Luna`,
    description: treatment.tagline,
    alternates: {
      canonical: `https://22luna.in/treatments/${slug}`,
    },
    openGraph: {
      title: `${treatment.name} | Treatments | 22Luna`,
      description: treatment.tagline,
      url: `https://22luna.in/treatments/${slug}`,
      images: [
        {
          url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/instruments_cstpp8.png',
          width: 1200,
          height: 630,
          alt: treatment.name,
        },
      ],
    },
  };
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Treatments', item: '/treatments' },
    { name: treatment.name, item: `/treatments/${slug}` },
  ];

  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Light header — matches About page variant */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <TreatmentHero treatment={treatment} />

      {/* ── SECTION 2: Introduction & Spotlight ── */}
      <TreatmentIntroduction treatment={treatment} />

      {/* ── SECTION 3: Patient Suitability ── */}
      <TreatmentSuitability treatment={treatment} />

      {/* ── SECTION 4: How It Works ── */}
      <TreatmentHowItWorks treatment={treatment} />

      {/* ── SECTION 5: Your Treatment Journey ── */}
      <TreatmentJourney treatment={treatment} />

      {/* ── SECTION 6: Benefits ── */}
      <TreatmentBenefits treatment={treatment} />

      {/* ── SECTION 7: FAQs ── */}
      <TreatmentFAQ treatment={treatment} />

      {/* ── SECTION 8: Consultation CTA ── */}
      <TreatmentCTA treatment={treatment} />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
