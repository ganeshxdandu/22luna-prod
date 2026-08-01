/**
 * Concerns Catalogue Data
 * Single source of truth for the /concerns landing page.
 * Sister system to treatments-catalogue.ts.
 */

export interface ConcernItem {
  name: string;
  slug: string;
  description: string;
}

export interface ConcernCategory {
  id: string;
  name: string;
  description: string;
  cloudinaryPublicId: string;
  concerns: ConcernItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// SKIN CONCERNS
// ─────────────────────────────────────────────────────────────────────────────
export const SKIN_CONCERNS: ConcernItem[] = [
  {
    name: 'Acne & Acne Scars',
    slug: 'acne-scars',
    description: 'Active breakouts, inflammation, or lingering textural pitting from past acne.',
  },
  {
    name: 'Hyperpigmentation & Melasma',
    slug: 'hyperpigmentation-melasma',
    description: 'Stubborn sun spots, hormonal patches, or post-inflammatory dark marks.',
  },
  {
    name: 'Fine Lines & Wrinkles',
    slug: 'fine-lines-wrinkles',
    description: 'Early expression lines, crow\'s feet, or loss of smooth dermal resilience.',
  },
  {
    name: 'Uneven Tone & Dullness',
    slug: 'dullness-uneven-tone',
    description: 'Lusterless skin lacking radiance, often caused by dead cell accumulation or fatigue.',
  },
  {
    name: 'Dark Circles & Eye Hollows',
    slug: 'dark-circles-under-eye',
    description: 'Periorbital shadows, thinning under-eye skin, or volume loss in tear troughs.',
  },
  {
    name: 'Enlarged Pores & Congestion',
    slug: 'enlarged-pores-congestion',
    description: 'Blackheads, excess sebum production, and visible pore openings across the T-zone.',
  },
  {
    name: 'Rosacea & Facial Redness',
    slug: 'rosacea-redness',
    description: 'Persistent flushing, visible micro-vessels, or reactive skin barrier sensitivity.',
  },
  {
    name: 'Loss of Firmness & Volume',
    slug: 'volume-loss-laxity',
    description: 'Gradual softening of contour definition along jawline, cheeks, and midface.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HAIR CONCERNS
// ─────────────────────────────────────────────────────────────────────────────
export const HAIR_CONCERNS: ConcernItem[] = [
  {
    name: 'Hair Loss & Thinning',
    slug: 'hair-thinning',
    description: 'Gradual decrease in overall hair volume, density, or scalp coverage.',
  },
  {
    name: 'Pattern Hair Loss',
    slug: 'pattern-hair-loss',
    description: 'Hereditary thinning along the crown, parting line, or temples.',
  },
  {
    name: 'Scalp Sensitivity & Dryness',
    slug: 'scalp-sensitivity',
    description: 'Itchiness, flaking, or compromised scalp skin health affecting follicle growth.',
  },
  {
    name: 'Stress-Related Shedding',
    slug: 'telogen-effluvium',
    description: 'Sudden, noticeable hair loss following illness, stress, or nutritional shifts.',
  },
  {
    name: 'Receding Hairline',
    slug: 'receding-hairline',
    description: 'Shift in temporal hair placement requiring targeted follicle stimulation.',
  },
  {
    name: 'Fragile & Brittle Strands',
    slug: 'fragile-hair-shafts',
    description: 'Weakened hair shafts prone to breakage before reaching natural growth length.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DENTAL CONCERNS
// ─────────────────────────────────────────────────────────────────────────────
export const DENTAL_CONCERNS: ConcernItem[] = [
  {
    name: 'Gummy Smile & Asymmetry',
    slug: 'gummy-smile',
    description: 'Excessive gum display when smiling or uneven gum margins across upper teeth.',
  },
  {
    name: 'Teeth Discoloration & Staining',
    slug: 'teeth-discoloration',
    description: 'Enamel yellowing from coffee, tea, aging, or deep intrinsic staining.',
  },
  {
    name: 'Crooked or Crowded Teeth',
    slug: 'crooked-crowded-teeth',
    description: 'Misaligned teeth or bite irregularities seeking subtle aesthetic correction.',
  },
  {
    name: 'Chipped, Cracked or Worn Teeth',
    slug: 'chipped-worn-teeth',
    description: 'Surface damage, uneven edge wear, or structural flaws in natural enamel.',
  },
  {
    name: 'Gaps Between Teeth',
    slug: 'tooth-gaps',
    description: 'Noticeable spaces (diastema) between central or lateral teeth.',
  },
  {
    name: 'Missing or Damaged Teeth',
    slug: 'missing-damaged-teeth',
    description: 'Gaps requiring functional and aesthetic permanent reconstruction.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONCERN CATEGORIES OVERVIEW
// ─────────────────────────────────────────────────────────────────────────────
export const CONCERN_CATEGORIES: ConcernCategory[] = [
  {
    id: 'skin-concerns',
    name: 'Skin Concerns',
    description: 'Understand concerns from texture and pigmentation to signs of aging and barrier sensitivity.',
    cloudinaryPublicId: 'skin_qo9vhn',
    concerns: SKIN_CONCERNS,
  },
  {
    id: 'hair-concerns',
    name: 'Hair Concerns',
    description: 'Understand hair density loss, scalp environment issues, and follicle miniaturization.',
    cloudinaryPublicId: 'hair_v9hkrz',
    concerns: HAIR_CONCERNS,
  },
  {
    id: 'dental-concerns',
    name: 'Dental Concerns',
    description: 'Understand aesthetic and structural dental concerns from alignment to enamel shade.',
    cloudinaryPublicId: 'dental_fpthem',
    concerns: DENTAL_CONCERNS,
  },
];
