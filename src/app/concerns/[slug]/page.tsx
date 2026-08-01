import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getConcernBySlug } from '@/lib/concern-detail-data';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

// ── Section Imports ──────────────────────────────────────────────────────────
import { ConcernHero } from '@/components/sections/concern/ConcernHero';
import { ConcernUnderstanding } from '@/components/sections/concern/ConcernUnderstanding';
import { ConcernSigns } from '@/components/sections/concern/ConcernSigns';
import { ConcernCauses } from '@/components/sections/concern/ConcernCauses';
import { ConcernWhenToSeekAdvice } from '@/components/sections/concern/ConcernWhenToSeekAdvice';
import { ConcernTreatmentOptions } from '@/components/sections/concern/ConcernTreatmentOptions';
import { ConcernPrevention } from '@/components/sections/concern/ConcernPrevention';
import { ConcernFAQ } from '@/components/sections/concern/ConcernFAQ';
import { ConcernCTA } from '@/components/sections/concern/ConcernCTA';

// ─────────────────────────────────────────────────────────────────────────────

interface ConcernPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'acne-scars' },
    { slug: 'hyperpigmentation-melasma' },
    { slug: 'fine-lines-wrinkles' },
    { slug: 'hair-thinning' },
    { slug: 'gummy-smile' },
    { slug: 'rosacea-redness' },
  ];
}

export async function generateMetadata(
  { params }: ConcernPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    return { title: 'concern Not Found' };
  }

  return {
    title: `${concern.name} | concerns | 22Luna`,
    description: concern.tagline,
    alternates: {
      canonical: `https://22luna.in/concerns/${slug}`,
    },
    openGraph: {
      title: `${concern.name} | concerns | 22Luna`,
      description: concern.tagline,
      url: `https://22luna.in/concerns/${slug}`,
      images: [
        {
          url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/bedding_qudetj.png',
          width: 1200,
          height: 630,
          alt: concern.name,
        },
      ],
    },
  };
}

export default async function ConcernDetailPage({ params }: ConcernPageProps) {
  const { slug } = await params;
  const concern = getConcernBySlug(slug);

  if (!concern) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'concerns', item: '/concerns' },
    { name: concern.name, item: `/concerns/${slug}` },
  ];

  return (
    <main className="flex flex-col">
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Light Header — consistent with sister pages */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <ConcernHero concern={concern} />

      {/* ── SECTION 2: Understanding This Concern ── */}
      <ConcernUnderstanding concern={concern} />

      {/* ── SECTION 3: Signs You May Notice ── */}
      <ConcernSigns concern={concern} />

      {/* ── SECTION 4: Possible Causes ── */}
      <ConcernCauses concern={concern} />

      {/* ── SECTION 5: When Should You Seek Advice? ── */}
      <ConcernWhenToSeekAdvice concern={concern} />

      {/* ── SECTION 6: Treatment Options ── */}
      <ConcernTreatmentOptions concern={concern} />

      {/* ── SECTION 7: Prevention & Daily Care ── */}
      <ConcernPrevention concern={concern} />

      {/* ── SECTION 8: FAQs ── */}
      <ConcernFAQ concern={concern} />

      {/* ── SECTION 9: Final Consultation Section ── */}
      <ConcernCTA concern={concern} />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
