/**
 * Concern Detail Data Schema
 * Single source of truth for all individual concern detail pages (/concerns/[slug]).
 */

import { SKIN_CONCERNS, HAIR_CONCERNS, DENTAL_CONCERNS, ConcernItem } from './concerns-catalogue';

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

export const CONCERN_DETAIL_DATA: Record<string, ConcernDetailData> = {
  'acne-scars': {
    slug: 'acne-scars',
    name: 'Acne & Acne Scars',
    tagline: 'Understanding active breakouts, lingering inflammation, and textural skin changes.',
    category: 'Skin',

    understandingHeading: 'Understanding Acne & Textural Scars.',
    understandingParagraphs: [
      'Acne occurs when hair follicles become clogged with excess sebum, dead skin cells, and acne-causing bacteria. When deep inflammation damages the underlying dermal tissue, the skin repairs itself by producing either too little or too much collagen, resulting in textural scarring.',
      'Scars can present as pitted depressions (ice pick, boxcar, or rolling scars) or raised tissue. Understanding whether your primary concern is active inflammation or past scarring dictates the clinical approach.',
    ],
    howCommon: 'Acne affects up to 85% of people at some point in their lives, with over 40% experiencing some degree of lingering scar texture.',

    signsNoticed: [
      'Active papules, pustules, or deep painful nodules beneath the surface',
      'Small pitted depressions or indentations across cheeks and temples',
      'Uneven texture when light reflects across the skin',
      'Persistent post-inflammatory redness or dark spots after breakouts heal',
      'Flushing or tenderness in areas prone to congestion',
    ],

    causes: [
      { factor: 'Hormonal Fluctuations', explanation: 'Androgen spikes stimulate sebaceous glands to produce excess sebum.' },
      { factor: 'Follicular Hyperkeratinization', explanation: 'Abnormal shedding of dead skin cells traps oil inside pores.' },
      { factor: 'Bacterial Overgrowth', explanation: 'C. acnes bacteria proliferate in oxygen-deprived congested pores.' },
      { factor: 'Inflammatory Healing Response', explanation: 'Deep dermal tissue disruption during severe breakouts alters collagen repair.' },
    ],

    adviceGuidance: [
      'When home skincare products no longer prevent recurring cystic breakouts',
      'When past breakouts leave permanent indentations or pitted marks',
      'If acne causes emotional distress or self-consciousness in social settings',
      'Before attempting harsh physical exfoliants that may worsen inflammation',
    ],

    suitableTreatments: [
      { name: 'Microneedling', slug: 'microneedling', description: 'Precision micro-channels that break down scar tissue and trigger collagen.' },
      { name: 'HydraFacial', slug: 'hydrafacial', description: 'Painlessly extracts pore congestion and restores deep hydration.' },
      { name: 'Chemical Peel', slug: 'chemical-peel', description: 'Accelerates surface exfoliation to smooth texture and lighten marks.' },
      { name: 'PRP Skin', slug: 'prp-skin', description: 'Uses autologous growth factors to accelerate dermal repair.' },
    ],

    preventionTips: [
      'Use gentle, non-comedogenic cleansers twice daily',
      'Avoid picking, squeezing, or popping active lesions',
      'Incorporate salicylic or lactic acid gradually into your routine',
      'Apply non-greasy SPF daily to prevent post-inflammatory dark marks',
    ],

    faqs: [
      { question: 'Can old acne scars be completely removed?', answer: 'While complete erasure is rarely realistic, clinical treatments can significantly smooth depth, soften edges, and improve texture by 60% to 80%.' },
      { question: 'Should I treat active acne or scars first?', answer: 'We always prioritize calming active inflammation and preventing new breakouts before aggressively resurfacing old scars.' },
    ],
  },

  'hyperpigmentation-melasma': {
    slug: 'hyperpigmentation-melasma',
    name: 'Hyperpigmentation & Melasma',
    tagline: 'Understanding dark spots, sun damage, and hormonal skin discoloration.',
    category: 'Skin',

    understandingHeading: 'Understanding Pigment Formation.',
    understandingParagraphs: [
      'Hyperpigmentation occurs when melanocytes (pigment-producing cells) produce excess melanin in response to sun exposure, hormonal changes, or inflammation. Melasma specifically presents as symmetrical, brownish patches on the forehead, cheeks, or upper lip.',
      'Because pigment can lie in superficial epidermal layers or deeper dermal layers, understanding your specific depth is essential before attempting light or chemical therapies.',
    ],
    howCommon: 'Very common, affecting up to 50% of women during reproductive years and over 80% of individuals exposed to frequent UV radiation.',

    signsNoticed: [
      'Symmetrical brown or grayish patches on cheeks, forehead, or upper lip',
      'Isolated dark spots or sun freckles following summer months',
      'Dark marks lingering long after acne or mosquito bites have healed',
      'Uneven skin tone that requires concealer to balance',
    ],

    causes: [
      { factor: 'UV Radiation', explanation: 'Sunlight triggers melanocytes to produce protective pigment.' },
      { factor: 'Hormonal Changes', explanation: 'Estrogen and progesterone shifts during pregnancy or oral contraceptives trigger melasma.' },
      { factor: 'Post-Inflammatory Response', explanation: 'Injury, acne, or harsh scrubs stimulate localized melanin surge.' },
      { factor: 'Heat Exposure', explanation: 'Thermal energy from saunas or hot environments can worsen melasma patches.' },
    ],

    adviceGuidance: [
      'When OTC brightening creams fail to lighten stubborn patches after 8 weeks',
      'If pigmentation darkens rapidly following sun exposure despite sunblock',
      'When patches cover larger facial areas and affect your confidence',
      'Before trying aggressive DIY remedies or unverified chemical soaps',
    ],

    suitableTreatments: [
      { name: 'Chemical Peel', slug: 'chemical-peel', description: 'Targeted acid exfoliants that safely shed pigmented surface layers.' },
      { name: 'HydraFacial', slug: 'hydrafacial', description: 'Infuses brightening antioxidants and vitamin C deep into pores.' },
      { name: 'Luminosity Program', slug: 'luminosity-program', description: 'A multi-session structured protocol targeting deep pigment layers.' },
    ],

    preventionTips: [
      'Apply broad-spectrum SPF 50+ every morning, rain or shine',
      'Wear wide-brimmed hats when spending extended time outdoors',
      'Avoid harsh physical scrubbers that inflame melanocytes',
      'Incorporate tyrosinase inhibitors like Vitamin C, Niacinamide, or Azelaic acid',
    ],

    faqs: [
      { question: 'Is melasma permanent?', answer: 'Melasma can be managed effectively into remission, though maintenance and strict sun protection are required to prevent recurrence.' },
      { question: 'Why do my spots get darker in the sun even with sunscreen?', answer: 'Standard sunscreen blocks UV rays, but visible blue light and heat can also trigger pigment in sensitive skin. Mineral sunscreens with iron oxides offer broader protection.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC GENERATOR FOR ALL OTHER CONCERNS
// ─────────────────────────────────────────────────────────────────────────────

function createGenericConcernData(slug: string): ConcernDetailData {
  let item: ConcernItem | undefined;

  for (const c of SKIN_CONCERNS) { if (c.slug === slug) { item = c; break; } }
  if (!item) { for (const c of HAIR_CONCERNS) { if (c.slug === slug) { item = c; break; } } }
  if (!item) { for (const c of DENTAL_CONCERNS) { if (c.slug === slug) { item = c; break; } } }

  const name = item ? item.name : slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const description = item ? item.description : 'Understanding this concern and exploring evidence-based care options.';

  const isHair = slug.includes('hair') || slug.includes('scalp') || slug.includes('thinning');
  const isDental = slug.includes('smile') || slug.includes('teeth') || slug.includes('tooth') || slug.includes('gummy') || slug.includes('dent');
  const category = isHair ? 'Hair & Scalp' : isDental ? 'Dental & Smile' : 'Skin';

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
    howCommon: `Frequently observed across many age groups and skin or biological profiles.`,

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

    suitableTreatments: isHair ? [
      { name: 'PRP Hair Treatment', slug: 'prp-hair', description: 'Autologous platelet therapy to stimulate dormant hair follicles.' },
      { name: 'GFC Treatment', slug: 'gfc-hair', description: 'Concentrated growth factors for enhanced scalp density.' },
      { name: 'Scalp Treatment', slug: 'scalp-treatment', description: 'Restores scalp skin barrier health and reduces inflammation.' },
    ] : isDental ? [
      { name: 'Smile Design', slug: 'smile-design', description: '3D digital planning for comprehensive aesthetic smile alignment.' },
      { name: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Medical-grade shade lightening for natural enamel brightness.' },
      { name: 'Cosmetic Bonding', slug: 'cosmetic-bonding', description: 'Subtle correction of shape, gaps, and chips.' },
    ] : [
      { name: 'HydraFacial', slug: 'hydrafacial', description: 'Cleanses, extracts, and deeply hydrates in a single unhurried session.' },
      { name: 'Chemical Peel', slug: 'chemical-peel', description: 'Controlled resurfacing to improve tone and texture.' },
      { name: 'Microneedling', slug: 'microneedling', description: 'Stimulates collagen production to refine dermal structure.' },
    ],

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
