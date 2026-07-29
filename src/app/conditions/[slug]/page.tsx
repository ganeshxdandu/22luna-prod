import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getConditionBySlug } from '@/lib/condition-detail-data';

// ── Section Imports ──────────────────────────────────────────────────────────
import { ConditionHero } from '@/components/sections/condition/ConditionHero';
import { ConditionUnderstanding } from '@/components/sections/condition/ConditionUnderstanding';
import { ConditionSigns } from '@/components/sections/condition/ConditionSigns';
import { ConditionCauses } from '@/components/sections/condition/ConditionCauses';
import { ConditionWhenToSeekAdvice } from '@/components/sections/condition/ConditionWhenToSeekAdvice';
import { ConditionTreatmentOptions } from '@/components/sections/condition/ConditionTreatmentOptions';
import { ConditionPrevention } from '@/components/sections/condition/ConditionPrevention';
import { ConditionFAQ } from '@/components/sections/condition/ConditionFAQ';
import { ConditionCTA } from '@/components/sections/condition/ConditionCTA';

// ─────────────────────────────────────────────────────────────────────────────

interface ConditionPageProps {
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
  { params }: ConditionPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return { title: 'Condition Not Found' };
  }

  return {
    title: condition.name,
    description: condition.tagline,
  };
}

export default async function ConditionDetailPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      {/* Light Header — consistent with sister pages */}
      <Header variant="light" />

      {/* ── SECTION 1: Hero ── */}
      <ConditionHero condition={condition} />

      {/* ── SECTION 2: Understanding This Concern ── */}
      <ConditionUnderstanding condition={condition} />

      {/* ── SECTION 3: Signs You May Notice ── */}
      <ConditionSigns condition={condition} />

      {/* ── SECTION 4: Possible Causes ── */}
      <ConditionCauses condition={condition} />

      {/* ── SECTION 5: When Should You Seek Advice? ── */}
      <ConditionWhenToSeekAdvice condition={condition} />

      {/* ── SECTION 6: Treatment Options ── */}
      <ConditionTreatmentOptions condition={condition} />

      {/* ── SECTION 7: Prevention & Daily Care ── */}
      <ConditionPrevention condition={condition} />

      {/* ── SECTION 8: FAQs ── */}
      <ConditionFAQ condition={condition} />

      {/* ── SECTION 9: Final Consultation Section ── */}
      <ConditionCTA condition={condition} />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
