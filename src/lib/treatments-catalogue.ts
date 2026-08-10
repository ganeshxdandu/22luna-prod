/**
 * Treatments Catalogue Data
 * Single source of truth for the /treatments landing page.
 * Add, remove or re-order treatments here without touching any component.
 */

// ─── Treatment Catalogue Item ─────────────────────────────────────────────────
export interface CatalogueItem {
  name: string;
  slug: string; // → /treatments/[slug]
  description: string;
}

// ─── Treatment Group (used for grouped Skin section) ─────────────────────────
export interface TreatmentGroup {
  groupName: string;
  treatments: CatalogueItem[];
}

// ─── Category Card ────────────────────────────────────────────────────────────
export interface TreatmentCategory {
  id: string;
  name: string;
  description: string;
  cloudinaryPublicId: string;
  /** For grouped categories (Skin), use treatmentGroups */
  treatmentGroups?: TreatmentGroup[];
  /** For flat categories (Hair, Dental), use treatments */
  treatments?: CatalogueItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// SKIN
// ─────────────────────────────────────────────────────────────────────────────
export const SKIN_GROUPS: TreatmentGroup[] = [
  {
    groupName: 'Essential Facials',
    treatments: [
      {
        name: 'Enzyme Radiance Ritual — Foaming Enzyme',
        slug: 'enzyme-radiance-ritual',
        description: 'A foaming enzyme treatment to renew radiance and exfoliate the skin.',
      },
      {
        name: 'Hydrafacial Deluxe',
        slug: 'hydrafacial-deluxe',
        description: 'Deluxe medical-grade cleansing, extraction, and hydration facial.',
      },
      {
        name: 'Clear Balance Acne Facial — Dermalogica',
        slug: 'clear-balance-acne-facial',
        description: 'Targeted Dermalogica treatment for acne-prone skin to clarify and balance.',
      },
      {
        name: 'Mandeluxe Glow Facial',
        slug: 'mandeluxe-glow-facial',
        description: 'Mandelic acid exfoliating facial designed to restore deep radiance and glow.',
      },
      {
        name: 'Two for Glow — Fire & Ice + Vitaglow IV',
        slug: 'two-for-glow',
        description: 'A signature treatment combining Fire & Ice protocol with Vitaglow IV infusion.',
      },
      {
        name: 'Chemical Peel',
        slug: 'chemical-peel',
        description: 'Controlled exfoliation to renew texture and clarity.',
      },
      {
        name: 'Dermaplaning',
        slug: 'dermaplaning',
        description: 'Precision manual exfoliation for immediately smoother skin.',
      },
      {
        name: 'LED Therapy',
        slug: 'led-therapy',
        description: 'Targeted light wavelengths that calm, repair and stimulate collagen.',
      },
    ],
  },
  {
    groupName: 'Therapeutic Facials',
    treatments: [
      {
        name: 'HydraFacial Platinum',
        slug: 'hydrafacial-platinum',
        description: 'Advanced HydraFacial with custom booster, lymphatic drainage, and LED light.',
      },
      {
        name: 'O₂ Derm Oxy Facial — Oxygen Vitality Facial',
        slug: 'o2-derm-oxy-facial',
        description: 'Oxygenating facial to revive, purify, and deeply hydrate fatigued skin.',
      },
      {
        name: 'Dual Element Fire & Ice Cryo Facial',
        slug: 'dual-element-fire-ice-cryo-facial',
        description: 'Clinical facial using thermal action and cold cryotherapy to lift and clarify.',
      },
      {
        name: 'ZO Obagi Hydraboost Therapy Facial',
        slug: 'zo-obagi-hydraboost-therapy',
        description: 'Clinical barrier-restoration and hydration treatment using ZO Obagi protocol.',
      },
      {
        name: 'Forma RF Tech Touch Therapy Facial',
        slug: 'forma-rf-tech-touch-therapy',
        description: 'Radiofrequency skin tightening combined with hands-on touch therapy.',
      },
      {
        name: 'Elixir PRF Restore Therapy Facial',
        slug: 'elixir-prf-restore-therapy',
        description: 'Regenerative platelet-rich fibrin facial utilizing autologous growth factors.',
      },
      {
        name: 'Anti-Aging Facial',
        slug: 'anti-aging-facial',
        description: 'Peptide and collagen-stimulating therapy for mature skin.',
      },
      {
        name: 'Sensitive Skin Facial',
        slug: 'sensitive-skin-facial',
        description: 'Gentle, barrier-restoring treatment for reactive skin types.',
      },
    ],
  },
  {
    groupName: 'Precision Treatments',
    treatments: [
      {
        name: 'Microneedling',
        slug: 'microneedling',
        description: 'Controlled micro-channels that trigger deep collagen remodelling.',
      },
      {
        name: 'PRP Skin',
        slug: 'prp-skin',
        description: 'Your own growth factors delivered to heal, repair and rejuvenate.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy-skin',
        description: 'Customised cocktails of vitamins and actives infused beneath the surface.',
      },
      {
        name: 'Polynucleotides',
        slug: 'polynucleotides',
        description: 'Advanced biostimulator for deep skin regeneration and lasting hydration.',
      },
    ],
  },
  {
    groupName: 'Signature Programs',
    treatments: [
      {
        name: 'Luminosity Program',
        slug: 'luminosity-program',
        description: 'A multi-session brightening plan for persistent dullness and pigmentation.',
      },
      {
        name: 'Acne Control Program',
        slug: 'acne-control-program',
        description: 'A structured course addressing active acne, scarring and long-term prevention.',
      },
      {
        name: 'Anti-Aging Protocol',
        slug: 'anti-aging-protocol',
        description: 'A comprehensive programme targeting lines, volume and skin quality together.',
      },
    ],
  },
  {
    groupName: 'Special Categories',
    treatments: [
      {
        name: "Men's Skin",
        slug: 'mens-skin',
        description: 'Treatments adapted for thicker skin, daily shaving and specific male concerns.',
      },
      {
        name: 'Bridal Skin',
        slug: 'bridal-skin',
        description: 'A tailored programme timed to deliver peak radiance on your wedding day.',
      },
      {
        name: 'Teen Skin',
        slug: 'teen-skin',
        description: 'Gentle, age-appropriate treatments for younger skin concerns.',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HAIR
// ─────────────────────────────────────────────────────────────────────────────
export const HAIR_TREATMENTS: CatalogueItem[] = [
  {
    name: 'PRP Hair Treatment',
    slug: 'prp-hair',
    description: 'Platelet-rich plasma injected at the scalp to stimulate dormant follicles.',
  },
  {
    name: 'GFC Treatment',
    slug: 'gfc-hair',
    description: 'Growth factor concentrate - a refined evolution of PRP for hair density.',
  },
  {
    name: 'Hair Mesotherapy',
    slug: 'hair-mesotherapy',
    description: 'Direct delivery of vitamins and actives to nourish the scalp environment.',
  },
  {
    name: 'Scalp Treatment',
    slug: 'scalp-treatment',
    description: 'Targeted care for dryness, dandruff, sensitivity and scalp health.',
  },
  {
    name: 'Exosome Therapy',
    slug: 'exosome-hair',
    description: 'Next-generation regenerative treatment to support hair regrowth.',
  },
  {
    name: 'PRF Hair',
    slug: 'prf-hair',
    description: 'Platelet-rich fibrin - a natural, additive-free alternative to PRP.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// WELLNESS & IV
// ─────────────────────────────────────────────────────────────────────────────
export const WELLNESS_TREATMENTS: CatalogueItem[] = [
  {
    name: 'REVIV IV Hydration',
    slug: 'reviv-iv-hydration',
    description: 'Medical-grade intravenous hydration and replenishment formulated by REVIV.',
  },
  {
    name: 'Vitaglow Infusion',
    slug: 'vitaglow-infusion',
    description: 'Advanced vitamin and antioxidant cocktail for cellular rejuvenation and skin radiance.',
  },
  {
    name: 'Royal Flush Longevity',
    slug: 'royal-flush-longevity',
    description: 'Premium hydration and detoxification infusion to optimize wellness and recovery.',
  },
  {
    name: 'Megaboost Infusion',
    slug: 'megaboost-infusion',
    description: 'Targeted wellness infusion designed to boost immune health and physical resilience.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DENTAL
// ─────────────────────────────────────────────────────────────────────────────
export const DENTAL_TREATMENTS: CatalogueItem[] = [
  {
    name: 'Smile Design',
    slug: 'smile-design',
    description: 'A comprehensive makeover planned digitally and executed with precision.',
  },
  {
    name: 'Teeth Whitening',
    slug: 'teeth-whitening',
    description: 'Professional-grade whitening for a brighter, more confident smile.',
  },
  {
    name: 'Dental Veneers',
    slug: 'dental-veneers',
    description: 'Ultra-thin porcelain shells that reshape, colour and align the smile.',
  },
  {
    name: 'Clear Aligners',
    slug: 'clear-aligners',
    description: 'Discreet orthodontic alignment without fixed brackets or wires.',
  },
  {
    name: 'Dental Implants',
    slug: 'dental-implants',
    description: 'A permanent, natural-feeling solution for missing teeth.',
  },
  {
    name: 'Crown & Bridge',
    slug: 'crown-bridge',
    description: 'Restorative coverage that protects and reconstructs damaged teeth.',
  },
  {
    name: 'Cosmetic Bonding',
    slug: 'cosmetic-bonding',
    description: 'Subtle correction of chips, gaps and minor imperfections in a single session.',
  },
  {
    name: 'Root Canal Treatment',
    slug: 'root-canal',
    description: 'Precise, comfortable treatment to save and restore an infected tooth.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY CARDS (used in the overview grid)
// ─────────────────────────────────────────────────────────────────────────────
export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: 'skin',
    name: 'Skin',
    description: 'Facials, lasers, injectables and regenerative treatments for every skin type and concern.',
    cloudinaryPublicId: 'skin_qo9vhn',
    treatmentGroups: SKIN_GROUPS,
  },
  {
    id: 'hair',
    name: 'Hair',
    description: 'Medical hair restoration and scalp care that addresses loss at its source.',
    cloudinaryPublicId: 'hair_v9hkrz',
    treatments: HAIR_TREATMENTS,
  },
  {
    id: 'dental',
    name: 'Dental',
    description: 'Cosmetic and restorative dentistry from smile design to precision implants.',
    cloudinaryPublicId: 'dental_fpthem',
    treatments: DENTAL_TREATMENTS,
  },
  {
    id: 'wellness',
    name: 'Wellness & IV',
    description: 'IV therapy and longevity programmes delivered through our REVIV partnership.',
    cloudinaryPublicId: 'ivdrip_yhlvex',
    treatments: WELLNESS_TREATMENTS,
  },
];
