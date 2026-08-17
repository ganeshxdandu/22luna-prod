/**
 * Concern Detail Data Schema & Generator
 * Single source of truth for all individual concern detail pages (/concerns/[slug]).
 */

import {
  SKIN_CONCERNS,
  HAIR_CONCERNS,
  DENTAL_CONCERNS,
  SPECIAL_CONCERNS,
  ConcernItem,
} from './concerns-catalogue';

export interface ConcernCause {
  factor: string;
  explanation: string;
}

export interface SuitableTreatmentRef {
  name: string;
  slug: string;
  description: string;
}

export interface ConcernFAQItem {
  question: string;
  answer: string;
}

export interface ConcernDetailData {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  
  // Section 2: Understanding
  understandingHeading: string;
  understandingParagraphs: string[];
  howCommon: string;

  // Section 3: Signs
  signsNoticed: string[];

  // Section 4: Causes
  causes: ConcernCause[];

  // Section 5: When to seek advice
  adviceGuidance: string[];

  // Section 6: Treatment Options (links to treatments)
  suitableTreatments: SuitableTreatmentRef[];

  // Section 7: Prevention & Daily Care
  preventionTips: string[];

  // Section 8: FAQs
  faqs: ConcernFAQItem[];

  // Section 9: CTA
  ctaTitle?: string;
  ctaSubtitle?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLICIT CONCERN DETAIL REPOSITORY
// ─────────────────────────────────────────────────────────────────────────────
export const CONCERN_DETAIL_DATA: Record<string, ConcernDetailData> = {};

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC GENERATOR FOR ALL CONCERNS
// ─────────────────────────────────────────────────────────────────────────────
function createGenericConcernData(slug: string): ConcernDetailData {
  let item: ConcernItem | undefined;

  for (const c of SKIN_CONCERNS) { if (c.slug === slug) { item = c; break; } }
  if (!item) { for (const c of HAIR_CONCERNS) { if (c.slug === slug) { item = c; break; } } }
  if (!item) { for (const c of DENTAL_CONCERNS) { if (c.slug === slug) { item = c; break; } } }
  if (!item) { for (const c of SPECIAL_CONCERNS) { if (c.slug === slug) { item = c; break; } } }

  const name = item ? item.name : slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const description = item ? item.description : 'Understanding this concern and exploring evidence-based care options.';

  const isHair = slug.includes('hair') || slug.includes('scalp') || slug.includes('thinning') || slug.includes('loss');
  const isDental = slug.includes('smile') || slug.includes('teeth') || slug.includes('tooth') || slug.includes('gummy') || slug.includes('dent') || slug.includes('decay') || slug.includes('cavity') || slug.includes('breath') || slug.includes('gum') || slug.includes('filling') || slug.includes('polish');
  const isSpecial = slug === 'pcos';
  const category = isHair ? 'Hair & Scalp' : isDental ? 'Dental & Smile' : isSpecial ? 'Special / Cross-Disciplinary' : 'Skin';

  const defaultSuitableTreatments = isHair
    ? [
        { name: 'PRP', slug: 'prp-hair', description: 'Autologous platelet therapy to stimulate dormant hair follicles.' },
        { name: 'Scalp Rejuvenation', slug: 'scalp-rejuvenation', description: 'Nourishes the hair growth environment and scalp barrier.' },
        { name: 'Scalp Oxy Therapy', slug: 'scalp-oxy-therapy', description: 'High-pressure oxygen and nutrient mist to refresh follicles.' },
      ]
    : isDental
      ? [
          { name: 'Smile Designing', slug: 'smile-designing', description: 'Digital smile engineering for facial-dental harmony.' },
          { name: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Clinical shade brightening for a radiant, confident smile.' },
          { name: 'Cleaning and Polishing', slug: 'cleaning-polishing', description: 'Essential scale and polish to maintain gum and enamel health.' },
        ]
      : isSpecial
        ? [
            { name: 'Medi Facials', slug: 'medi-facials', description: 'Physician-led clinical facials to manage skin congestion and hormonal breakouts.' },
            { name: 'PRP', slug: 'prp-hair', description: 'Autologous platelet therapy to stimulate follicles affected by hormonal thinning.' },
            { name: 'Chemical Peels', slug: 'chemical-peels', description: 'Targeted skin peeling to address persistent breakouts.' },
          ]
        : [
            { name: 'Medi Facials', slug: 'medi-facials', description: 'Physician-led clinical facials for skin repair and deep hydration.' },
            { name: 'Chemical Peels', slug: 'chemical-peels', description: 'Controlled dermal exfoliation to treat acne, marks, and texture.' },
            { name: 'Micro-Needling / RF', slug: 'microneedling-rf', description: 'Advanced micro-channeling to rebuild collagen and refine texture.' },
          ];

  return {
    slug,
    name,
    tagline: description,
    category,

    understandingHeading: `Understanding ${name}.`,
    understandingParagraphs: [
      `${name} is a common concern that can develop due to biological, environmental, or lifestyle factors.`,
      `Understanding why this concern develops is the first step toward choosing a safe, effective, and tailored approach. During a consultation, we evaluate your individual presentation rather than relying on generic assumptions.`,
    ],
    howCommon: `Frequently observed across many age groups and biological profiles.`,

    signsNoticed: [
      `Noticeable changes in appearance, texture, or symmetry related to ${name.toLowerCase()}`,
      'Gradual shifts over time that become more noticeable under bright light',
      'Mild discomfort, self-consciousness, or difficulty managing daily routine',
      'Inconsistency when using standard over-the-counter products',
    ],

    causes: [
      { factor: 'Biological & Genetic Factors', explanation: 'Inherent predispositions and natural biological variations.' },
      { factor: 'Environmental Factors', explanation: 'Sun exposure, climate shifts, and daily atmospheric stressors.' },
      { factor: 'Lifestyle & Stress', explanation: 'Sleep, nutrition, daily care habits, and hormonal shifts.' },
    ],

    adviceGuidance: [
      `When ${name.toLowerCase()} causes ongoing self-consciousness`,
      'When over-the-counter products do not produce noticeable clarity',
      'Before trying invasive or unverified treatments without a diagnosis',
      'When you want an honest, medical perspective on what is achievable',
    ],

    suitableTreatments: defaultSuitableTreatments,

    preventionTips: [
      'Maintain a consistent, gentle daily care routine',
      'Protect from environmental stressors and UV exposure',
      'Avoid aggressive picking, scrubbing, or unverified treatments',
      'Schedule regular professional check-ups to monitor changes',
    ],

    faqs: [
      { question: `Is ${name} permanent?`, answer: 'Most concerns can be significantly improved, managed, or restored through proper clinical guidance and supportive home care.' },
      { question: 'Will I need multiple sessions?', answer: 'Treatment plans are personalized. Some concerns respond after 1-2 sessions, while others benefit from progressive maintenance.' },
    ],
  };
}

export function getConcernBySlug(slug: string): ConcernDetailData {
  if (CONCERN_DETAIL_DATA[slug]) {
    return CONCERN_DETAIL_DATA[slug];
  }
  return createGenericConcernData(slug);
}
