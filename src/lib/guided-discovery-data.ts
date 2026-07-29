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
        suggestedConcernSlugs: ['acne-scars', 'hyperpigmentation-melasma', 'fine-lines-wrinkles'],
      },
      {
        id: 'hair',
        label: 'Hair & Scalp Density',
        description: 'Hair thinning, scalp sensitivity, parting loss, or follicle vitality.',
        categoryWeights: { skin: 0, hair: 10, dental: 0, wellness: 2 },
        suggestedConcernSlugs: ['hair-thinning', 'pattern-hair-loss', 'scalp-sensitivity'],
      },
      {
        id: 'dental',
        label: 'Dental & Smile Aesthetics',
        description: 'Teeth brightness, gummy smile proportions, or digital smile design.',
        categoryWeights: { skin: 0, hair: 0, dental: 10, wellness: 1 },
        suggestedConcernSlugs: ['gummy-smile', 'teeth-discoloration', 'crooked-crowded-teeth'],
      },
      {
        id: 'wellness',
        label: 'Vitality & IV Hydration',
        description: 'Cellular recovery, deep hydration, energy restoration, or anti-aging nutrients.',
        categoryWeights: { skin: 3, hair: 2, dental: 0, wellness: 10 },
        suggestedConcernSlugs: ['dullness-uneven-tone', 'fragile-hair-shafts'],
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
        suggestedTreatmentSlugs: ['hydrafacial', 'chemical-peel', 'microneedling'],
      },
      {
        id: 'pigment',
        label: 'Pigmentation & Sun Spots',
        description: 'Lightening melasma, stubborn dark marks, or sun exposure patches.',
        categoryWeights: { skin: 8, hair: 0, dental: 0, wellness: 1 },
        suggestedTreatmentSlugs: ['chemical-peel', 'luminosity-program', 'hydrafacial'],
      },
      {
        id: 'firmness',
        label: 'Dermal Firmness & Smoothness',
        description: 'Softening early expression lines and supporting natural collagen elasticity.',
        categoryWeights: { skin: 8, hair: 0, dental: 0, wellness: 2 },
        suggestedTreatmentSlugs: ['microneedling', 'prp-skin', 'botox'],
      },
      {
        id: 'density',
        label: 'Hair Density & Scalp Health',
        description: 'Stimulating dormant follicles and nourishing the scalp growth environment.',
        categoryWeights: { skin: 0, hair: 10, dental: 0, wellness: 2 },
        suggestedTreatmentSlugs: ['prp-hair', 'gfc-hair', 'scalp-treatment'],
      },
      {
        id: 'smile',
        label: 'Smile Alignment & Shade',
        description: 'Enhancing teeth brightness and balancing gum-to-tooth proportions.',
        categoryWeights: { skin: 0, hair: 0, dental: 10, wellness: 0 },
        suggestedTreatmentSlugs: ['teeth-whitening', 'smile-design', 'gummy-smile-botox'],
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
      suggestedConcernNames: ['Diffuse Hair Thinning', 'Scalp Sensitivity & Dryness', 'Follicle Health'],
      suggestedTreatments: [
        { name: 'PRP Hair Treatment', slug: 'prp-hair', description: 'Autologous platelet therapy to stimulate dormant hair follicles.' },
        { name: 'GFC Hair Treatment', slug: 'gfc-hair', description: 'Concentrated growth factor complex for enhanced strand density.' },
        { name: 'Scalp Health Protocol', slug: 'scalp-treatment', description: 'Restores scalp skin barrier integrity and reduces micro-inflammation.' },
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
      suggestedConcernNames: ['Teeth Discoloration & Staining', 'Gummy Smile Proportions', 'Aesthetic Alignment'],
      suggestedTreatments: [
        { name: '3D Digital Smile Design', slug: 'smile-design', description: 'Interactive 3D digital planning for precise aesthetic facial harmony.' },
        { name: 'Medical Teeth Whitening', slug: 'teeth-whitening', description: 'Enamel-safe professional shade brightening.' },
        { name: 'Gummy Smile Correction', slug: 'gummy-smile-botox', description: 'Subtle neuromodulator balancing of upper lip elevation.' },
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
      suggestedConcernNames: ['Cellular Hydration Depletion', 'Dullness & Exhaustion', 'Oxidative Stress'],
      suggestedTreatments: [
        { name: 'REVIV IV Therapy', slug: 'reviv-iv', description: 'Targeted intravenous micronutrients for instant absorption and cellular recovery.' },
        { name: 'HydraFacial Syndeo', slug: 'hydrafacial', description: 'Deep cleansing and antioxidant infusion for surface skin glow.' },
        { name: 'Luminosity Protocol', slug: 'luminosity-program', description: 'Combined internal wellness and dermal brightening.' },
      ],
      whySuitable:
        'Intravenous wellness delivers essential vitamins and antioxidants directly into circulation to complement your outer skin care.',
    };
  }

  // Default: Skin
  return {
    topCategory: 'Skin',
    categorySummary:
      'Based on what you shared, your focus centers around dermal resilience, texture refinement, tone clarity, and natural collagen support.',
    suggestedConcernNames: ['Skin Texture & Pores', 'Hyperpigmentation & Dullness', 'Fine Lines & Elasticity'],
    suggestedTreatments: [
      { name: 'HydraFacial Syndeo', slug: 'hydrafacial', description: 'Painless vortex extractions and deep antioxidant hydration.' },
      { name: 'Chemical Peel', slug: 'chemical-peel', description: 'Controlled exfoliation that shed dull cells and lightens marks.' },
      { name: 'Microneedling', slug: 'microneedling', description: 'Precision micro-channels that trigger natural dermal collagen.' },
    ],
    whySuitable:
      'These non-invasive, evidence-based procedures work synergistically with your skin biology to improve texture and radiance with minimal downtime.',
  };
}
