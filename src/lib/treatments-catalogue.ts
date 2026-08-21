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
// SKIN GROUPS
// ─────────────────────────────────────────────────────────────────────────────
export const SKIN_GROUPS: TreatmentGroup[] = [
  {
    groupName: 'Clinical Facials & Peels',
    treatments: [
      { name: 'Chemical Peels', slug: 'chemical-peels', description: 'Controlled dermal exfoliation to treat acne, marks, and texture.' },
      { name: 'Medi Facials', slug: 'medi-facials', description: 'Physician-led clinical facials for skin repair and deep hydration.' },
      { name: 'Facials', slug: 'facials', description: 'Custom clinical skin cleansing and rejuvenation protocols.' },
      { name: 'Skin Polishing', slug: 'skin-polishing', description: 'Micro-dermabrasion exfoliation for instant surface smoothing.' },
      { name: 'Lymphatic Drainage', slug: 'lymphatic-drainage', description: 'Mechanical massage to reduce facial puffiness and support detoxification.' }
    ]
  },
  {
    groupName: 'Injectables & Contouring',
    treatments: [
      { name: 'Botox', slug: 'botox', description: 'Precision wrinkle relaxation and dynamic line smoothing.' },
      { name: 'Dermal Fillers', slug: 'dermal-fillers', description: 'Hyaluronic acid restoration of structural volume and contours.' },
      { name: 'Thread Lifts', slug: 'thread-lifts', description: 'Absorbable suspension threads to lift sagging tissues.' },
      { name: 'Mesotherapy', slug: 'mesotherapy', description: 'Micro-infusions of vitamins and skin-boosters for hydration.' },
      { name: 'Lip Rejuvenation / Lip Volume and Contour', slug: 'lip-rejuvenation', description: 'Aesthetic mapping for volume, contour, and vermilion hydration.' },
      { name: 'Liquid Rhinoplasty', slug: 'liquid-rhinoplasty', description: 'Non-surgical nose contouring and symmetry correction using fillers.' },
      { name: 'Non Surgical Facial Contouring', slug: 'non-surgical-facial-contouring', description: 'Comprehensive profile balancing using injectables.' },
      { name: 'Non Surgical Jawline Enhancement', slug: 'non-surgical-jawline-enhancement', description: 'Jawline definition and contour refinement.' }
    ]
  },
  {
    groupName: 'Advanced Energy & Lasers',
    treatments: [
      { name: 'Laser Hair Reduction', slug: 'laser-hair-reduction', description: 'Medical-grade diode hair reduction for smooth skin.' },
      { name: 'Micro-Needling / Advanced Micro Needling with Radiofrequency', slug: 'microneedling-rf', description: 'Microneedling RF to rebuild deep collagen and smooth scars.' },
      { name: 'PRP', slug: 'prp-skin', description: 'Platelet-rich plasma autologous growth factors for dermal repair.' },
      { name: 'Skin Tightening', slug: 'skin-tightening', description: 'Radiofrequency energy to lift lax skin and stimulate elasticity.' },
      { name: 'Skin Resurfacing', slug: 'skin-resurfacing', description: 'Laser peeling to renew texture, pitting, and lines.' },
      { name: 'Q Switched Nd:YAG Laser for Skin Rejuvenation / Tattoo Removal / Treatment of Veins / Carbon Peel Facial', slug: 'q-switched-laser', description: 'Advanced Q-Switched laser for pigment, tattoos, veins, and carbon facials.' }
    ]
  },
  {
    groupName: 'Specialized Protocols',
    treatments: [
      { name: 'Sclerotherapy', slug: 'sclerotherapy', description: 'Micro-injection treatment for spider veins and small vessels.' },
      { name: 'Bride/Groom To Be Treatments', slug: 'bridal-groom-treatments', description: 'Curated aesthetic timelines for pre-wedding radiance.' },
      { name: 'Removal of Warts / Skin Tags', slug: 'warts-skin-tags-removal', description: 'Precise radiofrequency ablation of warts, tags, and lesions.' },
      { name: 'Facial Muscle Restoration / Deep Dermal Remodelling', slug: 'facial-muscle-restoration', description: 'Deep muscle stimulation and tissue rebuilding.' },
      { name: 'Blefaroplasma', slug: 'blefaroplasma', description: 'Non-surgical plasma eyelid lifting and skin contracture.' },
      { name: 'Anti Ageing', slug: 'anti-ageing', description: 'Structured preventative protocols targeting cellular aging.' },
      { name: 'Light Therapy', slug: 'light-therapy', description: 'Narrow-band LED wavelengths for cellular healing and acne.' }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// HAIR TREATMENTS
// ─────────────────────────────────────────────────────────────────────────────
export const HAIR_TREATMENTS: CatalogueItem[] = [
  { name: 'PRP', slug: 'prp-hair', description: 'Autologous platelet therapy to stimulate dormant hair follicles.' },
  { name: 'Scalp Rejuvenation', slug: 'scalp-rejuvenation', description: 'Nourishes the hair growth environment and scalp barrier.' },
  { name: 'Scalp Oxy Therapy', slug: 'scalp-oxy-therapy', description: 'High-pressure oxygen and nutrient mist to refresh follicles.' },
  { name: 'Botox', slug: 'hair-botox', description: 'Deep conditioning treatment to restore hair fiber resilience.' },
  { name: 'Men\'s Laser Hair Removal', slug: 'mens-laser-hair-removal', description: 'Targeted laser hair reduction for neck, chest, and back.' },
  { name: 'Hair Loss', slug: 'hair-loss-treatment', description: 'Physician-led cellular recovery plans for progressive thinning.' },
  { name: 'Beard Shaping', slug: 'beard-shaping', description: 'Precision laser hair reduction to outline clean beard margins.' }
];

// ─────────────────────────────────────────────────────────────────────────────
// DENTAL TREATMENTS
// ─────────────────────────────────────────────────────────────────────────────
export const DENTAL_TREATMENTS: CatalogueItem[] = [
  { name: 'Cleaning and Polishing', slug: 'cleaning-polishing', description: 'Essential scale and polish to maintain gum and enamel health.' },
  { name: 'Filling / Restoration', slug: 'filling-restoration', description: 'Composite bonding restorations for decay and structural flaws.' },
  { name: 'Root Canal Treatment (Microscope Enhanced)', slug: 'root-canal-treatment', description: 'Precision microscope-assisted root canal therapy.' },
  { name: 'Crowns and Bridges', slug: 'crowns-bridges', description: 'Durable custom porcelain crowns to reconstruct teeth.' },
  { name: 'Dental Implants', slug: 'dental-implants', description: 'Permanent, bio-integrated titanium tooth replacements.' },
  { name: 'Dentures', slug: 'dentures', description: 'Custom partial or full mouth prostheses for tooth loss.' },
  { name: 'Extraction', slug: 'extraction', description: 'Safe, comfortable removal of non-restorable or wisdom teeth.' },
  { name: 'Gum Disease', slug: 'gum-disease', description: 'Deep root planing and scaling to treat periodontal inflammation.' },
  { name: 'Treatment for Sensitive Teeth', slug: 'sensitive-teeth-treatment', description: 'Desensitizing sealers and enamel mineral replacement.' },
  { name: 'Porcelain Veneers', slug: 'porcelain-veneers', description: 'Ultra-thin custom porcelain shells for aesthetic reshaping.' },
  { name: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Clinical shade brightening for a radiant, confident smile.' },
  { name: 'Braces', slug: 'braces', description: 'Aesthetic brackets or alignment for structural correction.' },
  { name: 'Tooth Jewellery', slug: 'tooth-jewellery', description: 'Non-invasive cosmetic crystals applied to the enamel.' },
  { name: 'Smile Designing', slug: 'smile-designing', description: 'Digital smile engineering for facial-dental harmony.' },
  { name: 'Correction of Gummy Smile', slug: 'gummy-smile-correction', description: 'Aesthetic alignment of gum margins and upper lip elevation.' },
  { name: 'Full Mouth Rehabilitation', slug: 'full-mouth-rehabilitation', description: 'Total bite correction and reconstruction for multiple teeth.' },
  { name: 'Party Gums', slug: 'party-gums', description: 'Temporary aesthetic gum shaping and smile brightening.' }
];

// ─────────────────────────────────────────────────────────────────────────────
// WELLNESS & IV (DO NOT REMOVE OR REDEFINE THE REDIRECT SYSTEM)
// ─────────────────────────────────────────────────────────────────────────────
export const WELLNESS_TREATMENTS: CatalogueItem[] = [
  {
    name: 'REVIV IV Hydration',
    slug: 'reviv-iv-hydration',
    description: 'Medical-grade intravenous hydration and replenishment formulated by REVIV.',
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// UPCOMING TREATMENTS
// ─────────────────────────────────────────────────────────────────────────────
export const UPCOMING_TREATMENTS: CatalogueItem[] = [
  { name: 'Fat Loss', slug: 'fat-loss', description: 'Advanced non-invasive lipolysis and body shaping technology.' },
  { name: 'Body Sculpting / Body Contouring', slug: 'body-sculpting', description: 'Muscle definition and fat reduction protocols.' },
  { name: 'Double Chin / Fat Loss / Cellulite', slug: 'double-chin-cellulite', description: 'Targeted submental fat reduction and tissue smoothing.' },
  { name: 'Microblading & Permanent Make Up', slug: 'microblading-makeup', description: 'Precision semi-permanent brow and lip pigment mapping.' },
  { name: 'Intimate Body Rejuvenation', slug: 'intimate-rejuvenation', description: 'Non-surgical tissue tightening and wellness rejuvenation.' },
  { name: 'O-Shot / P-Shot', slug: 'o-shot-p-shot', description: 'Autologous growth factor therapies for sexual wellness.' },
  { name: 'Non Surgical Ear Lobe Repair', slug: 'ear-lobe-repair', description: 'Aesthetic restoration of stretched or torn lobes.' },
  { name: 'Cryo Facial', slug: 'cryo-facial', description: 'Sub-zero vapor cryotherapy to stimulate micro-circulation and collagen.' }
];

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY CARDS
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
