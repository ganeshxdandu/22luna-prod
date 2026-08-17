/**
 * Guided Discovery Data & Scoring Engine
 * Single source of truth for the /meet-luna / /find-your-starting-point experience.
 */

export interface QuestionOption {
  id: string;
  label: string;
  description: string;
  categoryWeights: {
    skin: number;
    hair: number;
    dental: number;
    wellness: number;
  };
  suggestedTreatmentSlugs?: string[];
  suggestedConcernSlugs?: string[];
}

export interface DiscoveryQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: QuestionOption[];
}

export interface DiscoveryResult {
  topCategory: 'Skin' | 'Hair' | 'Dental' | 'Wellness';
  categorySummary: string;
  suggestedConcernNames: string[];
  suggestedTreatments: Array<{
    name: string;
    slug: string;
    description: string;
  }>;
  whySuitable: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONVERSATIONAL QUESTIONS
// ─────────────────────────────────────────────────────────────────────────────

export const DISCOVERY_QUESTIONS: DiscoveryQuestion[] = [
  {
    id: 'focus-area',
    question: 'What brings you to 22luna today?',
    subtitle: 'Select the primary area you observe or wish to discuss.',
    options: [
      {
        id: 'skin',
        label: 'Skin Health & Texture',
        description: 'Radiance, breakouts, fine lines, dark spots, or overall firmness.',
        categoryWeights: { skin: 10, hair: 0, dental: 0, wellness: 2 },
        suggestedConcernSlugs: ['acne', 'acne-scars', 'pigmentation-dullness-melasma'],
      },
      {
        id: 'hair',
        label: 'Hair & Scalp Density',
        description: 'Hair thinning, scalp sensitivity, parting loss, or follicle vitality.',
        categoryWeights: { skin: 0, hair: 10, dental: 0, wellness: 2 },
        suggestedConcernSlugs: ['hair-loss', 'hair-thinning', 'receding-hairline'],
      },
      {
        id: 'dental',
        label: 'Dental & Smile Aesthetics',
        description: 'Teeth brightness, gummy smile proportions, or digital smile design.',
        categoryWeights: { skin: 0, hair: 0, dental: 10, wellness: 1 },
        suggestedConcernSlugs: ['gummy-smile', 'tooth-discolouration', 'crooked-misaligned-teeth'],
      },
      {
        id: 'wellness',
        label: 'Vitality & IV Hydration',
        description: 'Cellular recovery, deep hydration, energy restoration, or anti-aging nutrients.',
        categoryWeights: { skin: 3, hair: 2, dental: 0, wellness: 10 },
        suggestedConcernSlugs: ['pigmentation-dullness-melasma', 'weak-brittle-hair'],
      },
      {
        id: 'unsure',
        label: "I'm Not Entirely Sure",
        description: 'I notice changes but would love doctor guidance on where to start.',
        categoryWeights: { skin: 4, hair: 3, dental: 3, wellness: 3 },
      },
    ],
  },
  {
    id: 'desired-improvement',
    question: 'What would you most like to improve?',
    subtitle: 'Choose the quality that feels most important to you right now.',
    options: [
      {
        id: 'radiance',
        label: 'Radiance & Smooth Texture',
        description: 'Restoring luster, clearing congestion, and evening out rough tone.',
        categoryWeights: { skin: 8, hair: 0, dental: 0, wellness: 3 },
        suggestedTreatmentSlugs: ['medi-facials', 'chemical-peels', 'microneedling-rf'],
      },
      {
        id: 'pigment',
        label: 'Pigmentation & Sun Spots',
        description: 'Lightening melasma, stubborn dark marks, or sun exposure patches.',
        categoryWeights: { skin: 8, hair: 0, dental: 0, wellness: 1 },
        suggestedTreatmentSlugs: ['chemical-peels', 'medi-facials', 'skin-resurfacing'],
      },
      {
        id: 'firmness',
        label: 'Dermal Firmness & Smoothness',
        description: 'Softening early expression lines and supporting natural collagen elasticity.',
        categoryWeights: { skin: 8, hair: 0, dental: 0, wellness: 2 },
        suggestedTreatmentSlugs: ['microneedling-rf', 'prp-skin', 'botox'],
      },
      {
        id: 'density',
        label: 'Hair Density & Scalp Health',
        description: 'Stimulating dormant follicles and nourishing the scalp growth environment.',
        categoryWeights: { skin: 0, hair: 10, dental: 0, wellness: 2 },
        suggestedTreatmentSlugs: ['prp-hair', 'scalp-rejuvenation', 'scalp-oxy-therapy'],
      },
      {
        id: 'smile',
        label: 'Smile Alignment & Shade',
        description: 'Enhancing teeth brightness and balancing gum-to-tooth proportions.',
        categoryWeights: { skin: 0, hair: 0, dental: 10, wellness: 0 },
        suggestedTreatmentSlugs: ['teeth-whitening', 'smile-designing', 'gummy-smile-correction'],
      },
    ],
  },
  {
    id: 'duration',
    question: 'How long has this been on your mind?',
    subtitle: 'Understanding timing helps us gauge whether your concern is recent or progressive.',
    options: [
      {
        id: 'recent',
        label: 'Just Recently',
        description: 'Developed in the past few weeks or following a specific shift.',
        categoryWeights: { skin: 3, hair: 2, dental: 1, wellness: 3 },
      },
      {
        id: 'months',
        label: 'Several Months',
        description: 'Present for a season or gradually becoming more noticeable.',
        categoryWeights: { skin: 4, hair: 4, dental: 3, wellness: 3 },
      },
      {
        id: 'over-year',
        label: 'Over a Year',
        description: 'A long-standing concern seeking a clinical approach.',
        categoryWeights: { skin: 5, hair: 5, dental: 5, wellness: 2 },
      },
      {
        id: 'on-and-off',
        label: 'Fluctuates On & Off',
        description: 'Comes and goes depending on stress, climate, or hormonal cycles.',
        categoryWeights: { skin: 5, hair: 3, dental: 2, wellness: 4 },
      },
    ],
  },
  {
    id: 'prior-treatments',
    question: 'Have you explored professional care before?',
    subtitle: 'This helps us understand your familiarity with clinical environments.',
    options: [
      {
        id: 'never',
        label: 'Never Before',
        description: 'This would be my first time consulting a doctor for aesthetics.',
        categoryWeights: { skin: 3, hair: 3, dental: 3, wellness: 3 },
      },
      {
        id: 'skincare-only',
        label: 'Over-the-Counter Products Only',
        description: 'I use active skincare products at home but haven’t tried procedures.',
        categoryWeights: { skin: 4, hair: 3, dental: 2, wellness: 2 },
      },
      {
        id: 'professional',
        label: 'A Few Professional Sessions',
        description: 'I have experienced facials, peels, or dental cleanings in the past.',
        categoryWeights: { skin: 4, hair: 4, dental: 4, wellness: 3 },
      },
      {
        id: 'regular',
        label: 'Regular Clinical Protocols',
        description: 'I am accustomed to structured treatments and consistent maintenance.',
        categoryWeights: { skin: 5, hair: 5, dental: 5, wellness: 4 },
      },
    ],
  },
  {
    id: 'daily-routine',
    question: 'How would you describe your current routine?',
    subtitle: 'Understanding your daily habits allows us to recommend realistic home support.',
    options: [
      {
        id: 'minimal',
        label: 'Minimal & Unpretentious',
        description: 'Cleanser and moisturizer when needed. Keeping it simple.',
        categoryWeights: { skin: 3, hair: 3, dental: 3, wellness: 3 },
      },
      {
        id: 'essential',
        label: 'Essential 3-Step',
        description: 'Cleanser, sunscreen, and nightly moisturizer every day.',
        categoryWeights: { skin: 4, hair: 3, dental: 3, wellness: 3 },
      },
      {
        id: 'consistent',
        label: 'Consistent & Targeted',
        description: 'Incorporate Vitamin C, targeted serums, and consistent UV protection.',
        categoryWeights: { skin: 5, hair: 4, dental: 4, wellness: 3 },
      },
    ],
  },
  {
    id: 'priority',
    question: 'What matters most to you during care?',
    subtitle: 'We tailor our unhurried approach around your personal comfort and expectations.',
    options: [
      {
        id: 'natural-results',
        label: 'Natural-Looking Subtlety',
        description: 'Refined, healthy enhancements that look completely un-done.',
        categoryWeights: { skin: 5, hair: 4, dental: 4, wellness: 3 },
      },
      {
        id: 'minimal-downtime',
        label: 'Minimal Downtime',
        description: 'Gentle procedures that fit seamlessly into a busy schedule.',
        categoryWeights: { skin: 4, hair: 3, dental: 3, wellness: 4 },
      },
      {
        id: 'long-term',
        label: 'Long-Term Structural Health',
        description: 'Focusing on deep biological repair and sustainable collagen support.',
        categoryWeights: { skin: 5, hair: 5, dental: 5, wellness: 4 },
      },
      {
        id: 'doctor-guidance',
        label: 'Doctor Guidance & Transparency',
        description: 'Unhurried medical explanations with zero pressure or sales pitch.',
        categoryWeights: { skin: 5, hair: 5, dental: 5, wellness: 5 },
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// WEIGHTED SCORING ENGINE
// ─────────────────────────────────────────────────────────────────────────────

export function calculateDiscoveryResults(selectedOptionIds: string[]): DiscoveryResult {
  const totals = { skin: 0, hair: 0, dental: 0, wellness: 0 };
  const suggestedSlugsSet = new Set<string>();

  DISCOVERY_QUESTIONS.forEach((q) => {
    q.options.forEach((opt) => {
      if (selectedOptionIds.includes(opt.id)) {
        totals.skin += opt.categoryWeights.skin;
        totals.hair += opt.categoryWeights.hair;
        totals.dental += opt.categoryWeights.dental;
        totals.wellness += opt.categoryWeights.wellness;

        if (opt.suggestedTreatmentSlugs) {
          opt.suggestedTreatmentSlugs.forEach((s) => suggestedSlugsSet.add(s));
        }
      }
    });
  });

  // Determine top category
  let topCategory: 'Skin' | 'Hair' | 'Dental' | 'Wellness' = 'Skin';
  let maxScore = totals.skin;

  if (totals.hair > maxScore) {
    topCategory = 'Hair';
    maxScore = totals.hair;
  }
  if (totals.dental > maxScore) {
    topCategory = 'Dental';
    maxScore = totals.dental;
  }
  if (totals.wellness > maxScore) {
    topCategory = 'Wellness';
  }

  // Category specific summaries and treatment fallbacks
  if (topCategory === 'Hair') {
    return {
      topCategory: 'Hair',
      categorySummary:
        'Based on what you shared, your primary focus centers around hair density, scalp environment, and follicle growth vitality.',
      suggestedConcernNames: ['Hair Loss', 'Hair Thinning', 'Receding Hairline'],
      suggestedTreatments: [
        { name: 'PRP', slug: 'prp-hair', description: 'Autologous platelet therapy to stimulate dormant hair follicles.' },
        { name: 'Scalp Rejuvenation', slug: 'scalp-rejuvenation', description: 'Nourishes the hair growth environment and scalp barrier.' },
        { name: 'Scalp Oxy Therapy', slug: 'scalp-oxy-therapy', description: 'High-pressure oxygen and nutrient mist to refresh follicles.' },
      ],
      whySuitable:
        'These medical approaches focus on biological growth factors and scalp skin barrier health without relying on temporary surface concealers.',
    };
  }

  if (topCategory === 'Dental') {
    return {
      topCategory: 'Dental',
      categorySummary:
        'Based on what you shared, your focus centers around smile aesthetics, tooth shade brightness, and digital smile proportion planning.',
      suggestedConcernNames: ['Tooth Discolouration', 'Gummy Smile', 'Missing Teeth'],
      suggestedTreatments: [
        { name: 'Smile Designing', slug: 'smile-designing', description: 'Digital smile engineering for facial-dental harmony.' },
        { name: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Clinical shade brightening for a radiant, confident smile.' },
        { name: 'Correction of Gummy Smile', slug: 'gummy-smile-correction', description: 'Aesthetic alignment of gum margins and upper lip elevation.' },
      ],
      whySuitable:
        'Digital smile planning allows us to preview subtle anatomical balance and enamel shade before any clinical work begins.',
    };
  }

  if (topCategory === 'Wellness') {
    return {
      topCategory: 'Wellness',
      categorySummary:
        'Based on what you shared, your focus centers around systemic cellular hydration, inner energy restoration, and anti-aging vitality.',
      suggestedConcernNames: ['Pigmentation / Dullness / Melasma', 'Hair Loss', 'PCOS'],
      suggestedTreatments: [
        { name: 'PRP', slug: 'prp-hair', description: 'Autologous platelet therapy to stimulate follicles affected by hormonal thinning.' },
        { name: 'Medi Facials', slug: 'medi-facials', description: 'Physician-led clinical facials to manage skin congestion.' },
        { name: 'Anti Ageing', slug: 'anti-ageing', description: 'Structured preventative protocols targeting cellular aging.' },
      ],
      whySuitable:
        'Intravenous wellness and clinical skin/hair therapies work synergistically to address internal balance and restore outer vitality.',
    };
  }

  // Default: Skin
  return {
    topCategory: 'Skin',
    categorySummary:
      'Based on what you shared, your focus centers around dermal resilience, texture refinement, tone clarity, and natural collagen support.',
    suggestedConcernNames: ['Acne', 'Acne Scars', 'Pigmentation / Dullness / Melasma'],
    suggestedTreatments: [
      { name: 'Medi Facials', slug: 'medi-facials', description: 'Physician-led clinical facials for skin repair and deep hydration.' },
      { name: 'Chemical Peels', slug: 'chemical-peels', description: 'Controlled dermal exfoliation to treat acne, marks, and texture.' },
      { name: 'Micro-Needling / RF', slug: 'microneedling-rf', description: 'Advanced micro-channeling to rebuild collagen and refine texture.' },
    ],
    whySuitable:
      'These non-invasive, evidence-based procedures work synergistically with your skin biology to improve texture and radiance with minimal downtime.',
  };
}
