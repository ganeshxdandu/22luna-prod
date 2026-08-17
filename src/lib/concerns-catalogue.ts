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
    name: 'Acne',
    slug: 'acne',
    description: 'Active breakouts, comedones, and superficial skin inflammation.',
  },
  {
    name: 'Acne Scars',
    slug: 'acne-scars',
    description: 'Textural pitting, depressions, or post-inflammatory marks left behind by past acne.',
  },
  {
    name: 'Pigmentation / Dullness / Melasma',
    slug: 'pigmentation-dullness-melasma',
    description: 'Hormonal melasma patches, uneven skin tone, and lackluster skin lacking radiance.',
  },
  {
    name: 'Enlarged Pores',
    slug: 'enlarged-pores',
    description: 'Visible pore openings, excess sebum, and texture irregularities around the T-zone.',
  },
  {
    name: 'Freckles / Sunspots / Marks',
    slug: 'freckles-sunspots-marks',
    description: 'Localized solar lentigines, UV-induced freckles, and isolated dark marks.',
  },
  {
    name: 'Dark Lips',
    slug: 'dark-lips',
    description: 'Hyperpigmentation of the lip vermilion caused by genetics, sun, or lifestyle.',
  },
  {
    name: 'Dark Circles',
    slug: 'dark-circles',
    description: 'Under-eye shadows, thin periorbital skin, or volume depletion in tear troughs.',
  },
  {
    name: 'Uneven Skin Tone',
    slug: 'uneven-skin-tone',
    description: 'Mottled redness, dynamic discoloration, and patchy pigmentation.',
  },
  {
    name: 'Tanning / Sun Damage',
    slug: 'tanning-sun-damage',
    description: 'Generalized UV darkening, compromised barrier health, and sun-induced dehydration.',
  },
  {
    name: 'Rosacea & Sensitive Skin',
    slug: 'rosacea-sensitive-skin',
    description: 'Persistent facial flushing, visible capillaries, and hyper-reactive skin barriers.',
  },
  {
    name: 'Stretch Marks',
    slug: 'stretch-marks',
    description: 'Dermal elastin fractures presenting as red or silver textural bands on the body.',
  },
  {
    name: 'Warts and Skin Tags',
    slug: 'warts-skin-tags',
    description: 'Benign epidermal growths, papillomas, and localized skin elevations.',
  },
  {
    name: 'Burns / Scars / Keloids',
    slug: 'burns-scars-keloids',
    description: 'Hypertrophic tissue repair, burn marks, or raised keloidal scar formations.',
  },
  {
    name: 'Hyperhidrosis',
    slug: 'hyperhidrosis',
    description: 'Excessive, uncontrolled sweating of underarms, palms, or soles.',
  },
  {
    name: 'Wrinkles & Ageing',
    slug: 'wrinkles-ageing',
    description: 'Fine lines, expression wrinkles, static creases, and loss of dermal resilience.',
  },
  {
    name: 'Bridal / Event Skin Preparation',
    slug: 'bridal-event-prep',
    description: 'Structured clinical protocols designed to prepare skin for events.',
  },
  {
    name: 'Keratosis Pilaris',
    slug: 'keratosis-pilaris',
    description: 'Small rough bumps around upper arms or thighs caused by keratin buildup.',
  },
  {
    name: 'Spider Veins',
    slug: 'spider-veins',
    description: 'Superficial micro-capillaries showing through the skin surface.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HAIR CONCERNS
// ─────────────────────────────────────────────────────────────────────────────
export const HAIR_CONCERNS: ConcernItem[] = [
  {
    name: 'Hair Loss',
    slug: 'hair-loss',
    description: 'Excessive follicle shedding, thinning crown lines, or receding placement.',
  },
  {
    name: 'Hair Thinning',
    slug: 'hair-thinning',
    description: 'Gradual decrease in individual hair strand caliber and overall density.',
  },
  {
    name: 'Receding Hairline',
    slug: 'receding-hairline',
    description: 'Temporal recession or frontal hairline regression requiring active stimulation.',
  },
  {
    name: 'Dandruff & Flaky Scalp',
    slug: 'dandruff-flaky-scalp',
    description: 'Excessive skin cell shedding, flaking, or yeast-associated scalp irritation.',
  },
  {
    name: 'Dry / Unhealthy Scalp',
    slug: 'dry-unhealthy-scalp',
    description: 'Compromised scalp barrier presenting as itchiness, lack of follicle nutrition, or tightness.',
  },
  {
    name: 'Weak / Brittle Hair',
    slug: 'weak-brittle-hair',
    description: 'Fragile hair shafts prone to premature breakage and lack of tensile strength.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DENTAL CONCERNS
// ─────────────────────────────────────────────────────────────────────────────
export const DENTAL_CONCERNS: ConcernItem[] = [
  {
    name: 'Tooth Decay / Cavities',
    slug: 'tooth-decay-cavities',
    description: 'Enamel demineralization and carious lesions requiring clinical restorations.',
  },
  {
    name: 'Tooth Discolouration',
    slug: 'tooth-discolouration',
    description: 'Intrinsic or extrinsic staining of enamel due to diet, age, or habits.',
  },
  {
    name: 'Missing Teeth',
    slug: 'missing-teeth',
    description: 'Gaps in dentition requiring functional and aesthetic prosthetic reconstruction.',
  },
  {
    name: 'Chipped / Cracked Teeth',
    slug: 'chipped-cracked-teeth',
    description: 'Fractures in dental enamel or dentin structure requiring repairs.',
  },
  {
    name: 'Crooked / Misaligned Teeth',
    slug: 'crooked-misaligned-teeth',
    description: 'Malocclusions, teeth crowding, or rotations seeking alignment.',
  },
  {
    name: 'Gaps Between Teeth',
    slug: 'gaps-between-teeth',
    description: 'Naturally occurring spaces (diastemas) affecting smile symmetry.',
  },
  {
    name: 'Gum Disease / Bleeding Gums',
    slug: 'gum-disease-bleeding-gums',
    description: 'Gingival bleeding, periodontal swelling, and plaque accumulation.',
  },
  {
    name: 'Tooth Sensitivity',
    slug: 'tooth-sensitivity',
    description: 'Sharp dentin response to hot, cold, or sweet thermal changes.',
  },
  {
    name: 'Bad Breath',
    slug: 'bad-breath',
    description: 'Halitosis caused by plaque buildup, bacteria, or periodontal issues.',
  },
  {
    name: 'Worn / Damaged Teeth',
    slug: 'worn-damaged-teeth',
    description: 'Loss of enamel height due to bruxism, grinding, or acid erosion.',
  },
  {
    name: 'Gummy Smile',
    slug: 'gummy-smile',
    description: 'Excessive display of gum tissue above upper teeth when smiling.',
  },
  {
    name: 'Wisdom Teeth / Impacted Teeth',
    slug: 'wisdom-teeth-impacted',
    description: 'Third molar pain, localized pressure, or partial eruption issues.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SPECIAL / CROSS-DISCIPLINARY CONCERNS
// ─────────────────────────────────────────────────────────────────────────────
export const SPECIAL_CONCERNS: ConcernItem[] = [
  {
    name: 'PCOS',
    slug: 'pcos',
    description: 'Hormonal variations that impact dermal clarity (acne) and follicle growth density.',
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
  {
    id: 'special-concerns',
    name: 'Special Concerns',
    description: 'Multi-system hormonal concerns like PCOS that cross clinical disciplines.',
    cloudinaryPublicId: 'ivdrip_yhlvex',
    concerns: SPECIAL_CONCERNS,
  },
];
