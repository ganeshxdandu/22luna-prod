/**
 * Treatment Data Schema
 * Single source of truth for all treatment detail pages.
 * Every field maps 1:1 to a section component.
 */

import {
  SKIN_GROUPS,
  HAIR_TREATMENTS,
  DENTAL_TREATMENTS,
  WELLNESS_TREATMENTS,
  CatalogueItem,
} from './treatments-catalogue';

// ─── Snapshot (Hero sidebar) ─────────────────────────────────────────────────
export interface TreatmentSnapshot {
  duration: string;
  comfortLevel: string;
  downtime: string;
  visibleResults: string;
  suitableFor: string;
  sessions: string;
}

// ─── How It Works ────────────────────────────────────────────────────────────
export interface TreatmentStep {
  number: string;
  label: string;
  description: string;
}

// ─── Journey (Before / During / After / Recovery) ────────────────────────────
export interface TreatmentJourneyStage {
  id: 'before' | 'during' | 'after' | 'recovery';
  label: string;
  points: string[];
}

// ─── Quick Facts ─────────────────────────────────────────────────────────────
export interface TreatmentQuickFacts {
  duration: string;
  comfort: string;
  anaesthesia: string;
  downtime: string;
  visibleResults: string;
  returnToRoutine: string;
  sessionsNeeded: string;
  bestFor: string;
  suitableSkinTypes: string;
}

// ─── Benefits ────────────────────────────────────────────────────────────────
export interface TreatmentBenefit {
  title: string;
  description: string;
}

// ─── Suitability ─────────────────────────────────────────────────────────────
export interface TreatmentSuitability {
  idealFor: string[];
  advisedAgainst: string[];
}

// ─── Results ─────────────────────────────────────────────────────────────────
export type TreatmentResultsFormat = 'quote' | 'before-after';

export interface TreatmentResults {
  format: TreatmentResultsFormat;
  quote?: string;
  attribution?: string;
  beforeImage?: string;
  afterImage?: string;
  caption?: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export interface TreatmentFAQItem {
  question: string;
  answer: string;
}

// ─── Why Choose ──────────────────────────────────────────────────────────────
export interface TreatmentWhyChooseItem {
  title: string;
  description: string;
}

// ─── Approach ────────────────────────────────────────────────────────────────
export interface TreatmentApproachPoint {
  text: string;
}

// ─── Master Treatment Data ────────────────────────────────────────────────────
export interface TreatmentData {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  snapshot: TreatmentSnapshot;
  introHeading: string;
  introLabel: string;
  introParagraphs: string[];
  whyChooseItems: TreatmentWhyChooseItem[];
  suitability: TreatmentSuitability;
  howItWorksSteps: TreatmentStep[];
  journey: TreatmentJourneyStage[];
  quickFacts: TreatmentQuickFacts;
  benefits: TreatmentBenefit[];
  approachHeading: string;
  approachParagraphs: string[];
  results: TreatmentResults;
  faqs: TreatmentFAQItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  actives?: string[];
  technology?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLICIT TREATMENT DATA REPOSITORY FOR ALL 32 TREATMENTS
// ─────────────────────────────────────────────────────────────────────────────

export const TREATMENT_DATA: Record<string, TreatmentData> = {
  // 1. Hydrafacial Deluxe
  'hydrafacial-deluxe': {
    slug: 'hydrafacial-deluxe',
    name: 'Hydrafacial Deluxe',
    tagline: 'A medical-grade facial that cleanses, extracts, and nourishes in a single session.',
    category: 'Skin',
    snapshot: {
      duration: '45 – 60 minutes',
      comfortLevel: 'Comfortable',
      downtime: 'None',
      visibleResults: 'Immediately',
      suitableFor: 'All skin types',
      sessions: '1 session / month',
    },
    introLabel: 'What This Is',
    introHeading: 'A Facial That Works\nAt a Medical Level.',
    introParagraphs: [
      'Hydrafacial Deluxe is not a standard facial. It is a medical-grade, multi-step skin treatment that combines cleansing, exfoliation, chemical peeling, painless extractions, and deep hydration in one continuous sequence.',
      'Unlike treatments that correct or restore, Hydrafacial Deluxe primarily maintains. It is a treatment you return to regularly - not because something is wrong, but because consistent skin health is built over time, not in a single visit.',
      'The technology uses a vortex suction tip to simultaneously remove congestion and infuse active serums, leaving the skin immediately clearer, smoother and more luminous with zero recovery time required.',
    ],
    whyChooseItems: [
      {
        title: 'Immediate, visible improvement.',
        description: 'Skin appears visibly clearer, more even-toned and hydrated within hours of treatment - without redness or downtime.',
      },
      {
        title: 'Suitable for all skin types.',
        description: 'The protocol is adjustable for sensitive, oily, dry, or combination skin. Serum selection is personalised to your skin\'s current needs.',
      },
      {
        title: 'No recovery period.',
        description: 'You can return to your day immediately after the treatment, including applying makeup. There is nothing to conceal.',
      },
      {
        title: 'A foundation for other treatments.',
        description: 'Regular Hydrafacial Deluxe sessions prepare the skin to receive clinical treatments more effectively by clearing clogged channels.',
      },
    ],
    suitability: {
      idealFor: [
        'All skin types, including sensitive skin',
        'Patients looking for consistent skin maintenance',
        'Those with congestion, enlarged pores or uneven texture',
        'Patients seeking visible results with no social downtime',
        'Pre-event or pre-procedure skin preparation',
      ],
      advisedAgainst: [
        'Active rosacea flares or open skin infections',
        'Patients with active sunburn',
        'Known sensitivity to salicylic acid (booster-specific)',
        'Pregnancy (certain active boosters restricted)',
      ],
    },
    howItWorksSteps: [
      {
        number: '01',
        label: 'Cleanse & Peel',
        description: 'A gentle resurfacing tip removes dead skin and softens surface sebum.',
      },
      {
        number: '02',
        label: 'Extract & Hydrate',
        description: 'Vortex suction clears congestion while simultaneously delivering hydrating actives.',
      },
      {
        number: '03',
        label: 'Serum Fusion',
        description: 'Targeted antioxidants, peptides, and hyaluronic acid saturate freshly cleared skin.',
      },
      {
        number: '04',
        label: 'LED Therapy',
        description: 'Medical LED wavelengths calm inflammation and stimulate cellular collagen.',
      },
    ],
    journey: [
      {
        id: 'before',
        label: 'Before Your Session',
        points: [
          'Avoid heavy exfoliating acids for 48 hours prior',
          'Arrive with clean skin if convenient',
          'Inform your practitioner of recent sun exposure or active prescription topicals',
        ],
      },
      {
        id: 'during',
        label: 'During Your Session',
        points: [
          'Unwind in a private treatment suite with soothing ambient lighting',
          'Feel gentle suction and cool liquid infusion across the skin',
          'The session takes approximately 45 to 60 minutes',
        ],
      },
      {
        id: 'after',
        label: 'After Your Session',
        points: [
          'Enjoy an immediate supple glow and refined surface texture',
          'Apply sun protection before stepping outside',
          'Resume your regular schedule immediately without restrictions',
        ],
      },
      {
        id: 'recovery',
        label: 'Recovery & Maintenance',
        points: [
          'Zero downtime or peeling expected',
          'Repeat monthly for continuous pore refinement and barrier health',
        ],
      },
    ],
    quickFacts: {
      duration: '45 – 60 minutes',
      comfort: 'Comfortable, pain-free',
      anaesthesia: 'None needed',
      downtime: 'None',
      visibleResults: 'Immediate glow',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly maintenance',
      bestFor: 'Congestion, dullness, dehydration',
      suitableSkinTypes: 'All skin types',
    },
    benefits: [
      {
        title: 'Deep Pore Cleansing',
        description: 'Painlessly extracts impurities without squeezing or redness.',
      },
      {
        title: 'Hydration Infusion',
        description: 'Drenches the skin in hyaluronic acid and essential peptides.',
      },
      {
        title: 'Smooth Texture',
        description: 'Refines rough patches and minimizes enlarged pore appearance.',
      },
      {
        title: 'Even Skin Tone',
        description: 'Brightens surface dullness and restores healthy skin vitality.',
      },
      {
        title: 'Zero Downtime',
        description: 'Walk out ready for work, events, or social commitments.',
      },
      {
        title: 'Customizable Boosters',
        description: 'Tailored with specific serums addressing your personal concerns.',
      },
    ],
    approachHeading: 'The Same Technology.\nA Higher Standard.',
    approachParagraphs: [
      'While Hydrafacial Deluxe is widely available, at 22Luna the difference lies in diagnosis and custom serum formulation.',
      'We never run a default setting; every booster is selected based on a real-time assessment of your skin moisture barrier and daily stressors.',
    ],
    results: {
      format: 'quote',
      quote: 'My skin felt instantly cleaner and hydrated without a hint of redness. It has become my monthly ritual.',
      attribution: 'Patient, Skin Maintenance Program',
    },
    faqs: [
      {
        question: 'Is Hydrafacial Deluxe painful?',
        answer: 'Not at all. Most patients describe it as a light cool paintbrush gliding over the skin.',
      },
      {
        question: 'How often should I get a Hydrafacial Deluxe?',
        answer: 'Once every 4 weeks is optimal to match your skin\'s natural cellular turnover cycle.',
      },
    ],
    ctaTitle: 'Ready to Experience Hydrafacial Deluxe?',
    ctaSubtitle: 'Book a session or speak with our clinical aesthetician to tailor your boosters.',
    actives: ['Hyaluronic Acid', 'Salicylic Acid', 'Glucosamine HCl', 'Antioxidants', 'Peptides'],
    technology: 'Vortex-Fusion Technology (Edge Systems)',
  },

  // 2. Chemical Peel
  'chemical-peel': {
    slug: 'chemical-peel',
    name: 'Chemical Peel',
    tagline: 'Controlled clinical resurfacing to clarify tone, smooth texture, and stimulate renewal.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Mild tingling',
      downtime: '1 – 3 days light flaking',
      visibleResults: '3 to 7 days post-peel',
      suitableFor: 'Hyperpigmentation & texture',
      sessions: 'Course of 3 – 4 recommended',
    },
    introLabel: 'What This Is',
    introHeading: 'Precision Exfoliation\nFor Radiant Renewal.',
    introParagraphs: [
      'Chemical peels apply medical-grade acids (such as AHA, BHA, or TCA) to accelerate the skin\'s natural shedding process, removing dead surface cells and revealing fresh, luminous skin beneath.',
      'From superficial radiance peels to deeper corrective solutions, every peel at 22Luna is selected according to skin type, target concern, and acceptable downtime.',
    ],
    whyChooseItems: [
      {
        title: 'Targets Stubborn Pigment',
        description: 'Fades sun spots, melasma, and post-acne dark marks over progressive sessions.',
      },
      {
        title: 'Refines Pores & Texture',
        description: 'Dissolves stubborn pore blockages and smooths fine surface roughness.',
      },
      {
        title: 'Stimulates Collagen',
        description: 'Triggers cellular renewal for firmer, more resilient dermal tissue.',
      },
      {
        title: 'Customized Potency',
        description: 'Formulated specifically for your skin sensitivity level.',
      },
    ],
    suitability: {
      idealFor: [
        'Uneven pigmentation and dark spots',
        'Acne-prone skin and persistent blackheads',
        'Dull, sun-damaged skin',
      ],
      advisedAgainst: [
        'Active eczema, dermatitis, or open wounds',
        'Recent heavy sun exposure or tanning',
        'Pregnancy (for specific salicylic or retinoid peels)',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Prep & Degrease', description: 'Skin is cleansed thoroughly to ensure uniform acid absorption.' },
      { number: '02', label: 'Acid Application', description: 'Formulated peel solution is applied in precise timed layers.' },
      { number: '03', label: 'Neutralization', description: 'Peel activity is halted and soothing actives are applied.' },
      { number: '04', label: 'Barrier Protection', description: 'Rich clinical moisturizer and broad-spectrum SPF complete the session.' },
    ],
    journey: [
      { id: 'before', label: 'Before Your Session', points: ['Discontinue retinol 5 days prior', 'Avoid direct sun exposure'] },
      { id: 'during', label: 'During Your Session', points: ['Experience brief warmth or mild tingling', 'Takes approximately 30 minutes'] },
      { id: 'after', label: 'After Your Session', points: ['Wear SPF 50 daily', 'Do not pick or scrub flaking skin'] },
      { id: 'recovery', label: 'Recovery & Maintenance', points: ['Mild flaking peaks at days 2-4', 'Fresh, glowing skin revealed by day 7'] },
    ],
    quickFacts: {
      duration: '30 – 45 minutes',
      comfort: 'Mild warmth/tingling',
      anaesthesia: 'Not required',
      downtime: '1–3 days light flaking',
      visibleResults: '5–7 days',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '3–6 sessions',
      bestFor: 'Pigmentation, dullness, acne scarring',
      suitableSkinTypes: 'Fitzpatrick I – VI',
    },
    benefits: [
      { title: 'Even Tone', description: 'Reduces dark spots and sun damage.' },
      { title: 'Clear Pores', description: 'Unclogs congested pores and reduces breakouts.' },
      { title: 'Smoother Texture', description: 'Buffs away roughness for velvet-smooth skin.' },
      { title: 'Cellular Renewal', description: 'Encourages rapid cell turnover.' },
      { title: 'Improved Absorption', description: 'Allows home skincare to penetrate deeper.' },
      { title: 'Tailored Strengths', description: 'Ranging from lunchtime glow to deep corrective peels.' },
    ],
    approachHeading: 'Safety & Efficacy\nIn Equal Measure.',
    approachParagraphs: [
      'We prioritize barrier safety. Our doctors carefully select acid combinations to deliver maximal clarity with minimal inflammation.',
    ],
    results: {
      format: 'quote',
      quote: 'My post-acne marks faded dramatically after 3 sessions. The clarity is remarkable.',
      attribution: 'Patient, Pigmentation Correction Protocol',
    },
    faqs: [
      { question: 'Will my skin peel off in sheets?', answer: 'No. Modern clinical peels produce light micro-flaking similar to dry skin, rather than drastic peeling.' },
      { question: 'Can darker skin tones safely get peels?', answer: 'Yes, we specialize in safe mandelic and lactic acid formulations specifically formulated for melanin-rich skin.' },
    ],
    ctaTitle: 'Clarify Your Skin Tone',
    ctaSubtitle: 'Consult with our doctors to choose the precise peel formulation for your goals.',
    actives: ['Glycolic Acid', 'Lactic Acid', 'Salicylic Acid', 'TCA (Trichloroacetic Acid)'],
    technology: 'Clinical Grade Acid Resurfacers',
  },

  // 3. Microneedling
  microneedling: {
    slug: 'microneedling',
    name: 'Microneedling',
    tagline: 'Precision micro-channeling to awaken collagen, smooth scars, and firm dermal structure.',
    category: 'Skin',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Comfortable (numbing applied)',
      downtime: '24 – 48 hours mild redness',
      visibleResults: '2 to 4 weeks post-session',
      suitableFor: 'Scars, pores, fine lines',
      sessions: '3 to 5 sessions',
    },
    introLabel: 'What This Is',
    introHeading: 'Natural Collagen Synthesis\nDriven By Medical Precision.',
    introParagraphs: [
      'Microneedling uses ultra-fine medical needles to create controlled micro-injuries in the dermis, stimulating the body\'s natural wound-healing cascade to produce fresh collagen and elastin fibers.',
      'At 22Luna, we utilize the Derma Pen 4 system, allowing exact depth control tailored to delicate areas like the eyes or thicker tissue of the cheeks.',
    ],
    whyChooseItems: [
      { title: 'Targets Deep Scars', description: 'Breaks down fibrous acne scar tissue and promotes smooth skin regrowth.' },
      { title: 'Firms & Tightens', description: 'Re-densifies thinning skin to soften fine lines and enlarged pores.' },
      { title: '100% Natural Response', description: 'Relies on your body\'s inherent regenerative pathways.' },
      { title: 'Enhanced Serum Delivery', description: 'Micro-channels allow sterile hyaluronic acid and peptides to penetrate deeply.' },
    ],
    suitability: {
      idealFor: ['Acne scars and textural irregularities', 'Enlarged pores and loss of elasticity', 'Fine lines around mouth and eyes'],
      advisedAgainst: ['Active inflammatory acne or cold sores', 'Keloid scar tendency', 'History of blood clotting disorders'],
    },
    howItWorksSteps: [
      { number: '01', label: 'Topical Numbing', description: 'A soothing anesthetic cream ensures total comfort throughout.' },
      { number: '02', label: 'Precision Stamping', description: 'Derma Pen 4 creates thousands of clean micro-channels per second.' },
      { number: '03', label: 'Sterile Infusion', description: 'Regenerative serums are pressed into active dermal channels.' },
      { number: '04', label: 'Calming Mask', description: 'A cooling bio-cellulose mask soothes erythema and restores hydration.' },
    ],
    journey: [
      { id: 'before', label: 'Before Your Session', points: ['Stop retinol 5 days prior', 'Arrive 30 mins early for numbing'] },
      { id: 'during', label: 'During Your Session', points: ['Virtually painless with topical numbing', 'Duration is approximately 60 mins'] },
      { id: 'after', label: 'After Your Session', points: ['Skin looks sunburned for 24-48 hrs', 'Use clean towels and gentle cleanser'] },
      { id: 'recovery', label: 'Recovery & Maintenance', points: ['Redness fades by day 2', 'Collagen building continues for 90 days'] },
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Pain-free with numbing',
      anaesthesia: 'Topical numbing cream',
      downtime: '24–48 hours pinkness',
      visibleResults: '2–4 weeks',
      returnToRoutine: 'Next day',
      sessionsNeeded: '3–6 sessions',
      bestFor: 'Acne scarring, fine lines, pore refinement',
      suitableSkinTypes: 'All skin types',
    },
    benefits: [
      { title: 'Reduces Acne Scars', description: 'Softens pitted boxcar and rolling scars.' },
      { title: 'Pore Refinement', description: 'Tightens enlarged pores for refined skin grain.' },
      { title: 'Collagen Boost', description: 'Increases dermal density naturally.' },
      { title: 'Minimal Downtime', description: 'Social pinkness resolves within 24 to 48 hours.' },
      { title: 'Safe for All Tones', description: 'No heat involved, making it safe for deeper skin tones.' },
      { title: 'Long-Lasting Results', description: 'Collagen remodeling continues for months after treatment.' },
    ],
    approachHeading: 'Derma Pen 4 Precision.',
    approachParagraphs: [
      'We use single-use, needle cartridges calibrated with digital precision depth control for consistent safety.',
    ],
    results: {
      format: 'quote',
      quote: 'My acne scars smoothed out significantly after 4 sessions. My foundation sits completely differently now.',
      attribution: 'Patient, Texture & Scarring Program',
    },
    faqs: [
      { question: 'Does microneedling hurt?', answer: 'With our medical-grade numbing cream, most patients feel only mild vibration.' },
      { question: 'When can I wear makeup?', answer: 'We advise waiting 24 hours until micro-channels have completely closed.' },
    ],
    ctaTitle: 'Transform Skin Texture',
    ctaSubtitle: 'Schedule a consultation to assess your skin texture and plan a personalized program.',
    actives: ['Hyaluronic Acid', 'Sterile Growth Factors', 'Peptides'],
    technology: 'Derma Pen 4 (Precise Digital Depth Control)',
  },

  // 4. PRP Hair
  'prp-hair': {
    slug: 'prp-hair',
    name: 'PRP Hair Treatment',
    tagline: 'Autologous platelet-rich plasma to nourish hair follicles and boost scalp density.',
    category: 'Hair',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Mild discomfort (numbing used)',
      downtime: 'None (avoid washing hair for 24h)',
      visibleResults: '8 to 12 weeks',
      suitableFor: 'Thinning hair & early hair loss',
      sessions: '4 to 6 sessions',
    },
    introLabel: 'What This Is',
    introHeading: 'Natural Hair Restoration\nPowered By Your Own Growth Factors.',
    introParagraphs: [
      'Platelet-Rich Plasma (PRP) therapy concentrates healing platelets from your own blood sample and delivers them directly into thinning areas of the scalp.',
      'Rich in PDGF, VEGF, and TGF-beta growth factors, PRP extends the hair follicle growth (anagen) phase, reduces shedding, and increases hair shaft diameter.',
    ],
    whyChooseItems: [
      { title: '100% Autologous', description: 'Uses your body\'s own biological factors, eliminating allergic risk.' },
      { title: 'Extends Growth Phase', description: 'Keeps hair follicles active for longer periods.' },
      { title: 'Increases Thickness', description: 'Improves shaft diameter for noticeably fuller hair volume.' },
      { title: 'Non-Surgical', description: 'Quick clinical procedure with zero surgical downtime.' },
    ],
    suitability: {
      idealFor: ['Androgenetic alopecia (pattern hair loss)', 'Telogen effluvium (stress-related shedding)', 'General thinning along parting'],
      advisedAgainst: ['Complete baldness with inactive follicles', 'Active scalp infections or psoriasis', 'Low platelet count blood conditions'],
    },
    howItWorksSteps: [
      { number: '01', label: 'Blood Draw', description: 'A small sample of blood is drawn into sterile specialized tubes.' },
      { number: '02', label: 'Centrifugation', description: 'High-speed separation isolates concentrated golden PRP.' },
      { number: '03', label: 'Scalp Numbing', description: 'Cooling or local anesthetic ensures scalp comfort.' },
      { number: '04', label: 'Micro-Injections', description: 'PRP is injected into target thinning scalp zones.' },
    ],
    journey: [
      { id: 'before', label: 'Before Your Session', points: ['Drink plenty of water', 'Wash hair thoroughly on treatment morning'] },
      { id: 'during', label: 'During Your Session', points: ['Procedure takes 45-60 mins', 'Mild pressure during injections'] },
      { id: 'after', label: 'After Your Session', points: ['Do not wash hair for 24 hours', 'Avoid strenuous workouts for 24 hours'] },
      { id: 'recovery', label: 'Recovery & Maintenance', points: ['Slight scalp tenderness for 24 hours', 'Shedding reduces in 4-6 weeks'] },
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Tolerable with local numbing',
      anaesthesia: 'Topical/local spray',
      downtime: 'None',
      visibleResults: '8–12 weeks',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4–6 monthly sessions',
      bestFor: 'Hair thinning, hair loss prevention',
      suitableSkinTypes: 'All scalp types',
    },
    benefits: [
      { title: 'Reduces Hair Fall', description: 'Slows excessive daily hair shedding.' },
      { title: 'Thickens Shafts', description: 'Nourishes miniaturized hairs into thicker strands.' },
      { title: 'Improves Density', description: 'Fills sparse areas along crown and hairline.' },
      { title: 'Natural & Safe', description: 'Zero synthetic additives or foreign compounds.' },
      { title: 'Quick Recovery', description: 'Return to work immediately post-session.' },
      { title: 'Scalp Health', description: 'Improves micro-circulation throughout the scalp.' },
    ],
    approachHeading: 'High-Concentration Centrifugation.',
    approachParagraphs: [
      'We use double-spin isolation systems to ensure maximum platelet concentration for optimal follicle stimulation.',
    ],
    results: {
      format: 'quote',
      quote: 'My hair shedding decreased dramatically after the second session, and my hairline feels denser.',
      attribution: 'Patient, Hair Restoration Program',
    },
    faqs: [
      { question: 'How soon will I see results?', answer: 'Hair fall reduction usually occurs within 4-6 weeks, with new growth visible at 12 weeks.' },
      { question: 'Is PRP permanent?', answer: 'Maintenance sessions every 4-6 months are recommended to sustain follicle activity.' },
    ],
    ctaTitle: 'Address Hair Thinning Early',
    ctaSubtitle: 'Schedule a scalp assessment with our doctors to determine if PRP is right for you.',
    actives: ['Autologous Platelet-Rich Plasma (PDGF, VEGF, TGF-beta)'],
    technology: 'Double-Spin Centrifugation & Scalp Micro-Injections',
  },

  // 5. Smile Design
  'smile-design': {
    slug: 'smile-design',
    name: 'Smile Design',
    tagline: 'Comprehensive digital planning and custom cosmetic dentistry for a harmonized smile.',
    category: 'Dental',
    snapshot: {
      duration: '2 to 3 sessions',
      comfortLevel: 'Painless & comfortable',
      downtime: 'None',
      visibleResults: 'Final fit appointment',
      suitableFor: 'Full smile enhancement',
      sessions: 'Customized plan',
    },
    introLabel: 'What This Is',
    introHeading: 'Digital Precision\nMeets Bespoke Smile Aesthetics.',
    introParagraphs: [
      'Digital Smile Design (DSD) is an advanced aesthetic dental discipline that evaluates your facial proportions, lips, and dental dynamics to engineer your ideal smile before any treatment begins.',
      'Utilizing high-resolution iTero digital scanners, 3D modeling, and custom mock-ups, you preview and approve your new smile in your mouth before final restoration.',
    ],
    whyChooseItems: [
      { title: 'Predictable Outcomes', description: 'See and test your smile mock-up in 3D before committing to treatment.' },
      { title: 'Facial Harmony', description: 'Designed in proportion with your lip line, chin, and facial symmetry.' },
      { title: 'Minimal Invasiveness', description: 'Preserves maximum natural tooth structure using modern adhesive techniques.' },
      { title: 'Comprehensive Care', description: 'Combines whitening, bonding, veneers, or aligners seamlessly.' },
    ],
    suitability: {
      idealFor: ['Crooked, chipped, or discolored teeth', 'Uneven gum lines or gaps', 'Comprehensive smile makeovers'],
      advisedAgainst: ['Severe untreated periodontal disease', 'Active dental decay requiring primary restoration'],
    },
    howItWorksSteps: [
      { number: '01', label: 'iTero 3D Scan', description: 'Digital intraoral scanning and facial photo analysis.' },
      { number: '02', label: '3D Smile Simulation', description: 'Digital blueprint created according to facial aesthetics.' },
      { number: '03', label: 'Trial Mock-Up', description: 'Try on a temporary preview smile directly in your mouth.' },
      { number: '04', label: 'Final Delivery', description: 'Precision ceramic veneers or restorations placed permanently.' },
    ],
    journey: [
      { id: 'before', label: 'Before Your Session', points: ['Initial aesthetic consultation and 3D digital scan', 'Discuss personal smile preferences'] },
      { id: 'during', label: 'During Your Session', points: ['Pain-free scanning and digital planning preview', 'Try-in phase for complete satisfaction'] },
      { id: 'after', label: 'After Your Session', points: ['Enjoy immediate confidence in your renewed smile', 'Maintain routine oral hygiene'] },
      { id: 'recovery', label: 'Recovery & Maintenance', points: ['No downtime required', 'Regular 6-month hygiene checkups'] },
    ],
    quickFacts: {
      duration: '2–3 appointments',
      comfort: 'Completely comfortable',
      anaesthesia: 'Local (if needed for prep)',
      downtime: 'None',
      visibleResults: 'Preview on day 1',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '2–3 visits',
      bestFor: 'Smile alignment, color correction, shape improvement',
      suitableSkinTypes: 'All patients',
    },
    benefits: [
      { title: '3D Preview', description: 'Test-drive your smile before any work begins.' },
      { title: 'Tailored Shape & Shade', description: 'Custom engineered to match your natural facial harmony.' },
      { title: 'Conservative Prep', description: 'Maximum preservation of natural enamel structure.' },
      { title: 'Long-Lasting Ceramic', description: 'Stain-resistant porcelain engineered for longevity.' },
      { title: 'Confidence Boost', description: 'Harmonious aesthetics that transform facial expressiveness.' },
      { title: 'Comprehensive Plan', description: 'One unified roadmap for all cosmetic and restorative needs.' },
    ],
    approachHeading: 'Digital Precision & Artistry.',
    approachParagraphs: [
      'With iTero 3D scanners and master ceramists, we blend medical accuracy with bespoke tooth craftsmanship.',
    ],
    results: {
      format: 'quote',
      quote: 'Seeing the 3D mock-up in my mouth before we started gave me complete confidence. The final result exceeded my expectations.',
      attribution: 'Patient, Smile Design Program',
    },
    faqs: [
      { question: 'How long does a Smile Design take?', answer: 'Typically 2 to 3 weeks from initial digital scan to final placement.' },
      { question: 'Are veneers permanent?', answer: 'High-quality porcelain veneers last 15-20+ years with proper care.' },
    ],
    ctaTitle: 'Design Your Custom Smile',
    ctaSubtitle: 'Book a 3D digital consultation with our dental aesthetic specialists.',
    actives: ['Biocompatible Dental Ceramics', 'Composite Adhesive Resins'],
    technology: 'iTero 3D Intraoral Scanner & 3D Cosmetic Mock-Up',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CLINICAL TREATMENT PROFILES FOR EDUCATION AND AUTHORITY
// ─────────────────────────────────────────────────────────────────────────────

export const TREATMENT_PROFILES: Record<string, Partial<TreatmentData>> = {
  'enzyme-radiance-ritual': {
    tagline: 'Gently digest dead skin cells and clear congestion using active papaya and pineapple fruit enzymes.',
    snapshot: {
      duration: '45 minutes',
      comfortLevel: 'Comfortable & soothing',
      downtime: 'None',
      visibleResults: 'Immediate clarity & glow',
      suitableFor: 'Sensitive skin & pregnancy',
      sessions: 'Monthly maintenance',
    },
    introHeading: 'Non-Acidic Resurfacing\nFor Sensitive Skin.',
    introParagraphs: [
      'The Enzyme Radiance Ritual is a botanical-based resurfacing treatment that uses active proteolytic enzymes (bromelain and papain) to gently digest the keratin proteins holding dead skin cells to the surface.',
      'Unlike traditional chemical peels or microdermabrasion which physically scratch or chemically dissolve surface layers, enzyme treatments only target non-viable protein bonds, leaving the underlying skin barrier completely untouched.',
      'This makes it the ideal clinical maintenance facial for individuals with hyper-sensitive skin, active eczema in remission, or those seeking safe skin care during pregnancy.',
    ],
    whyChooseItems: [
      { title: 'Gentle on Skin Barrier', description: 'Zero stinging or irritation. Only dead surface proteins are exfoliated.' },
      { title: 'Pregnancy-Safe Resurfacing', description: 'Free of salicylic acid, retinoids, or harsh chemicals.' },
      { title: 'Pore Congestion Relief', description: 'Liquefies surface impactions to soften blackheads naturally.' },
    ],
    suitability: {
      idealFor: [
        'Sensitive, reactive, or dry skin types',
        'Expectant or nursing mothers seeking exfoliation',
        'Congested pores without active cystic breakouts',
      ],
      advisedAgainst: [
        'Allergic reactions to papaya or pineapple extracts',
        'Active open wounds or sunburns',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Clinical Cleanse', description: 'Deep prep cleanse to remove makeup and surface debris.' },
      { number: '02', label: 'Enzyme Activation', description: 'Warm enzymatic mask is applied to break down protein bonds.' },
      { number: '03', label: 'Soothing Massage', description: 'Manual lymphatic drainage massage to encourage circulation.' },
      { number: '04', label: 'Barrier Seal', description: 'Nourishing botanical lipids and broad-spectrum sun defense.' },
    ],
    quickFacts: {
      duration: '45 mins',
      comfort: 'Very comfortable',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: 'Immediate glow',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly maintenance',
      bestFor: 'Dullness, sensitive skin, congested pores',
      suitableSkinTypes: 'All skin types',
    },
    benefits: [
      { title: 'Smooth Texture', description: 'Buffs away rough dry patches without irritating the skin.' },
      { title: 'Natural Glow', description: 'Reflects light more evenly by clearing surface build-up.' },
      { title: 'Unclog Pores', description: 'Liquefies sebum blockages for easier daily maintenance.' },
    ],
    approachHeading: 'Proteolytic Digestion.',
    approachParagraphs: [
      'We believe in gentle clinical alternatives for sensitive barriers. The Enzyme Radiance Ritual respects the skin\'s natural lipid structure while delivering clear resurfacing results.',
    ],
    results: {
      format: 'quote',
      quote: 'My skin felt incredibly soft and clean, and there was zero redness—highly recommended for sensitive skin.',
      attribution: 'Patient, Sensitive Skin Protocol',
    },
    faqs: [
      { question: 'Will I peel after the treatment?', answer: 'No. The enzymes only dissolve superficial microscopic proteins, so there is no peeling or flaking.' },
      { question: 'Can I do this treatment during pregnancy?', answer: 'Yes, this treatment is completely safe and free of contra-indicated acids or retinoids.' },
    ],
  },
  'clear-balance-acne-facial': {
    tagline: 'High-clarity acne protocol featuring targeted extractions, salicylic acid, and blue LED light therapy.',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Mild discomfort during extractions',
      downtime: 'None (slight redness for 2–4 hours)',
      visibleResults: 'Clearer pores within 24 hours',
      suitableFor: 'Active acne & blackheads',
      sessions: 'Course of 3–5 sessions',
    },
    introHeading: 'Targeted Disinfection\n& Pore Clearing.',
    introParagraphs: [
      'The Clear Balance Acne Facial is a dedicated medical facial engineered to clear congested pores, regulate excess sebum production, and target active acne-causing bacteria.',
      'Combining salicylic acid exfoliation (which penetrates deep into oil glands) with professional extraction techniques and blue LED light therapy, this facial stops active breakouts and prevents new ones.',
      'Every session is delivered with strict clinical hygiene standards to ensure extractions are performed safely without scarring or spreading bacteria.',
    ],
    whyChooseItems: [
      { title: 'Deep Extraction Focus', description: 'Professional manual removal of blackheads, milia, and pustules.' },
      { title: 'Salicylic Exfoliation', description: 'Beta-hydroxy acids dissolve fat-soluble sebum deep inside pores.' },
      { title: 'Anti-Bacterial LED', description: 'Medical-grade blue LED destroys P. acnes bacteria and reduces redness.' },
    ],
    suitability: {
      idealFor: [
        'Oily, acne-prone, or congested skin',
        'Stubborn blackheads and whiteheads',
        'Active breakouts requiring clinical clearing',
      ],
      advisedAgainst: [
        'Patients on oral isotretinoin (Roaccutane) within 6 months',
        'Severe cystic acne requiring direct dermatological prescription',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Purifying Cleanse', description: 'Double cleanse with botanical salicylic wash.' },
      { number: '02', label: 'Sebum Softening', description: 'Mild enzyme steam to open pores and soften impactions.' },
      { number: '03', label: 'Extractions', description: 'Careful, clinical removal of blackheads and congestion.' },
      { number: '04', label: 'Blue LED Disinfection', description: 'Targeted blue wavelengths to calm inflammation and kill bacteria.' },
    ],
    quickFacts: {
      duration: '60 mins',
      comfort: 'Mild extraction pressure',
      anaesthesia: 'None required',
      downtime: '2–4 hours slight pinkness',
      visibleResults: '1–2 days',
      returnToRoutine: 'Next day for makeup',
      sessionsNeeded: '3–6 sessions bi-weekly',
      bestFor: 'Blackheads, active breakouts, oily skin',
      suitableSkinTypes: 'Acne-prone skin',
    },
    benefits: [
      { title: 'Reduces Breakouts', description: 'Dramatically lowers active pustule count.' },
      { title: 'Cleanses Pores', description: 'Removes deep blackheads and plugs.' },
      { title: 'Calms Redness', description: 'Soothes acne-induced inflammation and swelling.' },
    ],
    approachHeading: 'Clinical Decongestion.',
    approachParagraphs: [
      'We treat acne systematically. Clear Balance addresses both the mechanical blockage of the pores and the biological bacterial activity for long-term resolution.',
    ],
    results: {
      format: 'quote',
      quote: 'The extractions were so clean, and my active breakouts flattened by the next morning.',
      attribution: 'Patient, Acne Clearance Protocol',
    },
    faqs: [
      { question: 'Will my skin break out more after the facial?', answer: 'Some mild purging is possible as deep impactions rise, but our anti-bacterial LED steps minimize post-facial flareups.' },
      { question: 'Is it painful?', answer: 'Some areas (like the nose) can feel pinch-like during manual extraction, but our aestheticians work at your comfort level.' },
    ],
  },
  'mandeluxe-glow-facial': {
    tagline: 'Gentle mandelic acid resurfacing peel combined with botanical infusions, ideal for sensitive hyperpigmentation.',
    snapshot: {
      duration: '45 minutes',
      comfortLevel: 'Mild warmth & tingling',
      downtime: 'None',
      visibleResults: 'Within 24–48 hours',
      suitableFor: 'Pigmentation & sensitive skin',
      sessions: 'Course of 4–6 recommended',
    },
    introHeading: 'Gentle Brightening\nWithout Inflammatory Risk.',
    introParagraphs: [
      'The Mandeluxe Glow Facial uses Mandelic Acid—an alpha-hydroxy acid derived from bitter almonds—to gently lift superficial hyperpigmentation and smooth texture.',
      'Because the mandelic molecule has a larger molecular size, it penetrates the skin slowly and evenly, preventing the sudden heat or stinging associated with glycolic peels. This makes it exceptionally safe for sensitive barriers and melanin-rich skin types.',
      'The peel is combined with rich botanical brighteners and calming peptide sheets to deliver an immediate editorial glow with zero post-treatment flaking.',
    ],
    whyChooseItems: [
      { title: 'No Post-Inflammatory Risk', description: 'Gentle molecular penetration prevents hyperpigmentation triggers in deeper skin.' },
      { title: 'Brightens Sun Damage', description: 'Dismantles surface pigment clusters to even out skin tone.' },
      { title: 'Antibacterial Activity', description: 'Mandelic acid has natural clearing properties, helping with mild acne.' },
    ],
    suitability: {
      idealFor: [
        'Melanin-rich skin tones Fitzpatrick IV–VI',
        'Post-acne dark marks (PIH) and sun spots',
        'Sensitive skin prone to redness',
      ],
      advisedAgainst: [
        'Severe nut allergies (contains almond derivatives)',
        'Active sunburn or compromised skin barriers',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Prep Cleanse', description: 'Cleanses skin lipids to allow uniform mandelic absorption.' },
      { number: '02', label: 'Mandeluxe Peel', description: 'Mandelic acid is applied in controlled, brief layers.' },
      { number: '03', label: 'Peptide Infusion', description: 'Cooling gel sheets containing licorice root and green tea extracts.' },
      { number: '04', label: 'Glow Lock', description: 'Brightening vitamin C serum and high-defense sunscreen.' },
    ],
    quickFacts: {
      duration: '45 mins',
      comfort: 'Minimal tingling',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: '1–2 days',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4–6 bi-weekly sessions',
      bestFor: 'Uneven tone, sun spots, sensitive skin',
      suitableSkinTypes: 'Fitzpatrick I–VI',
    },
    benefits: [
      { title: 'Fades Dark Spots', description: 'Reduces the intensity of pigment marks.' },
      { title: 'Smoothes Texture', description: 'Provides soft micro-exfoliation for a satin finish.' },
      { title: 'Radiant Clarity', description: 'Restores natural luminescence without harsh peeling.' },
    ],
    approachHeading: 'Safe Molecular Delivery.',
    approachParagraphs: [
      'We prioritize safety when treating hyperpigmentation. By using slow-absorbing mandelic acid, we prevent the cellular thermal stress that often triggers rebound pigment.',
    ],
    results: {
      format: 'quote',
      quote: 'Finally, a chemical exfoliation that doesn\'t cause redness on my skin. My dark spots are fading beautifully.',
      attribution: 'Patient, hyperpigmentation Protocol',
    },
    faqs: [
      { question: 'Will I flake after Mandeluxe?', answer: 'Rarely. Mandelic acid is highly hydrating and gently sheds dead cells at a microscopic level rather than peeling.' },
      { question: 'Is it safe for nut allergies?', answer: 'Since mandelic acid is derived from almonds, we recommend a patch test first or an alternative lactic acid peel.' },
    ],
  },
  'two-for-glow': {
    tagline: 'Dual clinical protocol combining the warm/cool sensation of the Fire & Ice facial with a Vitaglow IV infusion.',
    snapshot: {
      duration: '75 minutes',
      comfortLevel: 'Active warmth followed by intense cooling',
      downtime: 'None',
      visibleResults: 'Immediate skin tightness & brightness',
      suitableFor: 'Pre-event prep & systemic fatigue',
      sessions: 'Single session or event prep',
    },
    introHeading: 'The Resurfacing Peel\nMeets Intravenous Nutrients.',
    introParagraphs: [
      'Two for Glow is our ultimate clinical event preparation protocol. It works simultaneously from the inside out by pairing a targeted medical facial with an intravenous cocktail of antioxidants.',
      'While the Fire & Ice facial resurfaces your skin using glycolic acid warmth followed by a cooling hyaluronic acid mask, the Vitaglow IV drip delivers clinical doses of Glutathione and Vitamin C directly into the bloodstream.',
      'The result is immediate: smooth skin texture, reduced puffiness, and a systemic energy and hydration boost that shines through your skin.',
    ],
    whyChooseItems: [
      { title: 'Inside-Out Brightening', description: 'Combines systemic antioxidant delivery with localized skin renewal.' },
      { title: 'Rapid Red-Carpet Prep', description: 'Zero downtime resurfacing that leaves skin smooth and ready for makeup.' },
      { title: 'Systemic Hydration Boost', description: 'IV saline base rehydrates cells directly for absolute radiance.' },
    ],
    suitability: {
      idealFor: [
        'Bridal or major event preparation (24–48 hours prior)',
        'Dull, tired-looking skin with physical fatigue',
        'Quick skin rejuvenation without recovery downtime',
      ],
      advisedAgainst: [
        'Patients with active kidney disorders or severe heart conditions (IV-specific)',
        'Active prescription retinoid use or skin irritation',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'IV Cannulation', description: 'A medical professional starts the Vitaglow IV drip.' },
      { number: '02', label: 'Fire Mask', description: 'Clinical glycolic acid mask warms the skin to resurface cells.' },
      { number: '03', label: 'Ice Mask', description: 'Freezing, soothing hyaluronic mask cools inflammation.' },
      { number: '04', label: 'Infusion Finish', description: 'Antioxidants complete delivery as facial aftercare is applied.' },
    ],
    quickFacts: {
      duration: '75 mins',
      comfort: 'Intense warm/cool contrast',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: 'Immediate glow',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Single session or course of 3',
      bestFor: 'Events, weddings, tired skin',
      suitableSkinTypes: 'All candidates',
    },
    benefits: [
      { title: 'Tightens & Lifts', description: 'Immediate contraction of pore appearance.' },
      { title: 'Dermal Hydration', description: 'Saturates skin layers inside and out.' },
      { title: 'Reduces Puffiness', description: 'Cooling steps stimulate lymphatic clearing.' },
    ],
    approachHeading: 'Systemic Skin Health.',
    approachParagraphs: [
      'External creams only address the top epidermis layers. By combining advanced clinical peels with IV therapy, we fuel dermal cells from both directions.',
    ],
    results: {
      format: 'quote',
      quote: 'The ultimate wedding prep. My skin looked flawless under makeup, and I felt completely energized.',
      attribution: 'Patient, Event Glow Program',
    },
    faqs: [
      { question: 'When is the best time to do this before an event?', answer: 'We recommend booking this treatment 24 to 48 hours before your event for maximum visible luminosity.' },
      { question: 'Who administers the IV?', answer: 'All IV infusions are prepared and administered by qualified clinical nurses under physician oversight.' },
    ],
  },
  'hydrafacial-platinum': {
    tagline: 'The ultimate HydraFacial experience. Lymphatic drainage, Deluxe HydraFacial, custom booster, and LED therapy.',
    snapshot: {
      duration: '75 minutes',
      comfortLevel: 'Extremely comfortable & relaxing',
      downtime: 'None',
      visibleResults: 'Immediate facial contours & glow',
      suitableFor: 'Puffiness, dullness, & anti-aging',
      sessions: '1 session / month',
    },
    introHeading: 'Detoxification,\nExtraction, and Fusion.',
    introParagraphs: [
      'HydraFacial Platinum elevates the standard Hydrafacial treatment by incorporating clinical mechanical lymphatic drainage at the start of the session.',
      'By applying gentle, rhythmic suction along the facial lymph nodes, we stimulate fluid drainage to reduce puffiness, clear cellular wastes, and optimize skin healing.',
      'This is followed by the complete Deluxe protocol: chemical exfoliation, extraction, a high-concentration booster targeted to your skin goals, and customized LED wavelengths.',
    ],
    whyChooseItems: [
      { title: 'Lymphatic Drainage', description: 'Sculpts the jawline and reduces swelling around the eyes.' },
      { title: 'Custom Serum Boosters', description: 'Access to high-concentration clinical serum options.' },
      { title: 'Medical LED Therapy', description: 'Calms inflammation and stimulates structural collagen.' },
    ],
    suitability: {
      idealFor: [
        'Patients prone to facial puffiness or fluid retention',
        'Comprehensive monthly skin maintenance',
        'Those seeking skin contouring and deep clearing',
      ],
      advisedAgainst: [
        'Active sinus infections or lymphatic disorders',
        'Sunburned or damaged skin barriers',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Lymphatic Drainage', description: 'Mechanical massage to stimulate lymphatic clearing.' },
      { number: '02', label: 'Vortex Extraction', description: 'Painless clearing of blackheads and debris.' },
      { number: '03', label: 'Booster Fusion', description: 'Application of targeted advanced peptide booster.' },
      { number: '04', label: 'Red/Blue LED', description: 'Wavelength therapy to lock in boosters and calm cells.' },
    ],
    quickFacts: {
      duration: '75 mins',
      comfort: 'Very relaxing',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: 'Immediate contouring',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly maintenance',
      bestFor: 'Puffiness, fine lines, congestion',
      suitableSkinTypes: 'All skin types',
    },
    benefits: [
      { title: 'Contours & Sculpts', description: 'Reduces fluid along the cheeks and jaw.' },
      { title: 'Deep Decongestion', description: 'Pore clearing with vortex suction.' },
      { title: 'Anti-Aging Fusion', description: 'Infuses deep line-plumping peptides.' },
    ],
    approachHeading: 'Stimulating Fluid Dynamics.',
    approachParagraphs: [
      'True skin health requires internal fluid movement. By draining stagnant lymph before infusing active serums, we dramatically improve overall tissue vitality.',
    ],
    results: {
      format: 'quote',
      quote: 'The contouring from the lymphatic drainage was immediately noticeable. My face looks much more defined.',
      attribution: 'Patient, Premium Skin Maintenance',
    },
    faqs: [
      { question: 'What is the difference between Deluxe and Platinum?', answer: 'Platinum includes lymphatic drainage therapy at the start, helping to detoxify and contour the face before the skin clearing steps.' },
      { question: 'Does lymphatic drainage hurt?', answer: 'No, it feels like a gentle, rhythmic suction cups massage across the contours of your face.' },
    ],
  },
  'o2-derm-oxy-facial': {
    tagline: 'Hyperbaric oxygen dome therapy and vital nutrient mist to calm inflammation and revive tired cells.',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Extremely comfortable & cool',
      downtime: 'None',
      visibleResults: 'Immediate plumpness & reduced redness',
      suitableFor: 'Dehydrated skin, jetlag, & recovery',
      sessions: '1 session / month or post-peel',
    },
    introHeading: 'Hyperbaric Oxygen Dome\nFor Cellular Vitality.',
    introParagraphs: [
      'The O₂ Derm Oxy Facial uses a specialized hyperbaric dome and negative ion generator to flood your skin cells with purified oxygen and atmospheric ions.',
      'By creating a micro-environment rich in anions (often called vitamins of the air), this facial accelerates cellular regeneration, neutralizes free radicals, and strengthens the skin\'s natural immune barrier.',
      'Combined with high-pressure oxygen mist containing vitamins and amino acids, it deeply hydrates, immediately reduces skin redness, and leaves skin looking plump and rested.',
    ],
    whyChooseItems: [
      { title: 'Oxygen Dome Inhalation', description: 'Rest under a clear dome delivering 90% purified oxygen and negative ions.' },
      { title: 'Hyperbaric Mist Infusion', description: 'A cool high-velocity spray to press active skin vitamins deep.' },
      { title: 'Barrier Reconstruction', description: 'Accelerates healing for skin compromised by stress, travel, or procedures.' },
    ],
    suitability: {
      idealFor: [
        'Dull, tired, or jetlagged skin requiring restoration',
        'Post-procedure skin (chemical peels or laser) to accelerate healing',
        'Reactive skin prone to redness and heat',
      ],
      advisedAgainst: [
        'Claustrophobia (dome cover can be adjusted if required)',
        'Active bronchial infections',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Oxygen Cleanse', description: 'Foaming oxygenating prep cleanse.' },
      { number: '02', label: 'High-Pressure Mist', description: 'Atomized spray infuses vitamins and peptides.' },
      { number: '03', label: 'Oxy Dome Therapy', description: 'Resting under the dome for 20 minutes of purified breathing.' },
      { number: '04', label: 'Luminescence Lock', description: 'Restorative cream locks in moisture barrier.' },
    ],
    quickFacts: {
      duration: '60 mins',
      comfort: 'Very high comfort',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: 'Immediate glow & plumpness',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly maintenance',
      bestFor: 'Jetlag, redness, dry skin',
      suitableSkinTypes: 'All skin types',
    },
    benefits: [
      { title: 'Revitalizes Dullness', description: 'Improves cellular energy levels.' },
      { title: 'Reduces Redness', description: 'Cools and calms inflamed skin instantly.' },
      { title: 'Systemic Relaxation', description: 'Purified breathing relieves physical stress.' },
    ],
    approachHeading: 'Pure Anion Revitalization.',
    approachParagraphs: [
      'Oxygen is vital for cellular repair. By providing high-purity oxygen externally and systemically, we assist the skin\'s natural recovery processes.',
    ],
    results: {
      format: 'quote',
      quote: 'My skin felt incredibly plump and refreshed after the dome session. The ultimate cure for jetlag.',
      attribution: 'Patient, Jetlag Recovery Program',
    },
    faqs: [
      { question: 'What does the oxygen dome feel like?', answer: 'It is a large clear cover placed over the head. You will hear a soft white noise and feel a gentle, cool breeze of fresh air.' },
      { question: 'Is it safe for sensitive skin?', answer: 'Yes, this is one of our gentlest facials and is excellent for soothing inflamed, reactive skin.' },
    ],
  },
  'dual-element-fire-ice': {
    tagline: 'Resurfacing glycolic peel followed by a freezing cryo-mask to tighten skin and stimulate blood flow.',
    snapshot: {
      duration: '50 minutes',
      comfortLevel: 'Active warmth followed by intense cold',
      downtime: 'None (temporary mild flushing)',
      visibleResults: 'Immediate skin tightening & brightness',
      suitableFor: 'Fine lines, dullness, & pre-event prep',
      sessions: 'Single session or monthly course',
    },
    introHeading: 'Thermal Contrast\nFor Natural Resurfacing.',
    introParagraphs: [
      'The Dual Element Fire & Ice Cryo Facial relies on rapid thermal transition to stimulate circulation and resurface the top skin layers.',
      'The "Fire" element applies a glycolic acid peel and warming botanical active mask to dissolve dead skin cells and clear surface texture.',
      'This is immediately followed by the "Ice" element—a freezing cryo-mask massaged with chilled globes. This contrast constricts capillaries, reduces redness, and provides an immediate skin tightening and smoothing effect.',
    ],
    whyChooseItems: [
      { title: 'Resurfacing Warmth', description: 'Clinical glycolic acid gently peels away rough surface build-up.' },
      { title: 'Cryo globe massage', description: 'Encourages vascular contraction to calm irritation.' },
      { title: 'No Social Downtime', description: 'Excellent pre-event treatment that doesn\'t cause flaking.' },
    ],
    suitability: {
      idealFor: [
        'Fine lines and rough skin texture',
        'Pre-event skin tightening and evening out skin tone',
        'Sluggish skin requiring circulation stimulation',
      ],
      advisedAgainst: [
        'Severe active rosacea or eczema flares',
        'Hypersensitivity to cold (Cryoglobulinemia)',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Fire Application', description: 'Warm glycolic acid mask to dissolve dead skin.' },
      { number: '02', label: 'Neutralization', description: 'Warm peel is cleared and skin pH is balanced.' },
      { number: '03', label: 'Ice Application', description: 'Cooling cryo-mask with chilled globes massage.' },
      { number: '04', label: 'Vitamins Fusion', description: 'Antioxidant serums and sunscreen defense.' },
    ],
    quickFacts: {
      duration: '50 mins',
      comfort: 'Strong warm/cool sensations',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: 'Immediate pore tightening',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly maintenance',
      bestFor: 'Fine lines, dullness, pre-event prep',
      suitableSkinTypes: 'All skin types',
    },
    benefits: [
      { title: 'Refines Skin Grain', description: 'Instantly smooths out dry roughness.' },
      { title: 'Tightens Capillaries', description: 'Vascular contrast reduces facial redness.' },
      { title: 'Immediate Makeup Base', description: 'Leaves skin perfectly prepped for smooth foundation application.' },
    ],
    approachHeading: 'Vascular Stimulation.',
    approachParagraphs: [
      'Thermal contrast exercises the blood vessels. By cycling through warmth and cold, we speed up nutrient delivery to skin cells naturally.',
    ],
    results: {
      format: 'quote',
      quote: 'The combination of warmth and cold felt incredible. My pores looked instantly smaller and my skin felt so tight.',
      attribution: 'Patient, Red-Carpet Event Prep',
    },
    faqs: [
      { question: 'Does the Fire mask burn?', answer: 'You will feel a warm tingling sensation for 2-3 minutes, but it is neutralised before becoming uncomfortable.' },
      { question: 'Will I flake?', answer: 'This is a superficial peel, so no visual flaking or peeling is expected.' },
    ],
  },
  'zo-obagi-hydraboost': {
    tagline: 'ZO Skin Health protocols to reconstruct compromised moisture barriers and restore deep lipid hydration.',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Extremely comfortable & nourishing',
      downtime: 'None',
      visibleResults: 'Immediate skin comfort & hydration',
      suitableFor: 'Dry, dry-dehydrated, & flaky skin',
      sessions: '1 session / month or bi-weekly course',
    },
    introHeading: 'Clinical Barrier Re-lipidization\nBy ZO Skin Health.',
    introParagraphs: [
      'The ZO Obagi Hydraboost Therapy Facial is a medical protocol designed to repair a compromised skin moisture barrier.',
      'Utilizing clinical-grade ZO Skin Health formulations rich in ceramides, squalane, and soothing antioxidants, it relieves dry skin, reduces flaking, and calms redness.',
      'The facial integrates a mild enzymatic peel to remove dry surface flakes followed by a deep lipid-replenishing massage to nourish the deep layers.',
    ],
    whyChooseItems: [
      { title: 'Lipid Replenishment', description: 'Restores essential skin ceramides and fatty acids.' },
      { title: 'ZO Enzymatic Peel', description: 'Gently clears rough texture without compromising the moisture barrier.' },
      { title: 'Soothing Aloe Massage', description: 'Cooling massage to relieve irritation and tightness.' },
    ],
    suitability: {
      idealFor: [
        'Dry, dehydrated, or flaky skin barriers',
        'Skin irritated by retinol over-use or dry climates',
        'Dull skin requiring clinical moisture restoration',
      ],
      advisedAgainst: [
        'Active open skin infections',
        'Known sensitivity to specific ZO product components',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'ZO Prep Cleanse', description: 'Creamy lipid-preserving cleanse.' },
      { number: '02', label: 'Enzymatic Peel', description: 'Gently loosens dead flakes.' },
      { number: '03', label: 'Hydration Infusion', description: 'Lipid massage cream application.' },
      { number: '04', label: 'Barrier Seal Mask', description: 'Triple lipid gel mask to lock in moisture.' },
    ],
    quickFacts: {
      duration: '60 mins',
      comfort: 'Very high comfort',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: 'Immediate moisture relief',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly maintenance',
      bestFor: 'Dryness, barrier repair, skin flaking',
      suitableSkinTypes: 'Dry and sensitive skin',
    },
    benefits: [
      { title: 'Reconstructs Barrier', description: 'Stops moisture loss by repairing lipid layers.' },
      { title: 'Softens Flaking', description: 'Eliminates dry, chalky patches.' },
      { title: 'Soothes Redness', description: 'Relieves tightness and skin heat.' },
    ],
    approachHeading: 'Barrier Defense First.',
    approachParagraphs: [
      'A healthy skin barrier is the foundation of clear skin. We prioritize building up your lipid levels before introducing aggressive corrective steps.',
    ],
    results: {
      format: 'quote',
      quote: 'My skin barrier was compromised from using retinoids. This facial completely restored my skin comfort and hydration.',
      attribution: 'Patient, Barrier Restoration Protocol',
    },
    faqs: [
      { question: 'Will this help my eczema?', answer: 'Yes, if your eczema is in a dry, non-weeping phase, this facial is excellent for restoring moisture.' },
      { question: 'Does this facial contain active retinol?', answer: 'No, this specific Hydraboost protocol focuses purely on soothing, non-irritating hydration.' },
    ],
  },
  'forma-rf-tech': {
    tagline: 'Thermal radiofrequency energy to heat deep layers, stimulating collagen for a visible contour lift.',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Warm, relaxing massage-like feel',
      downtime: 'None (temporary mild flushing)',
      visibleResults: 'Immediate lifting & skin tightness',
      suitableFor: 'Mild skin sagging & jaw definition',
      sessions: 'Course of 6 weekly sessions',
    },
    introHeading: 'Sub-Dermal Heat\nFor Structural Lifting.',
    introParagraphs: [
      'The Forma RF Tech Touch Therapy Facial utilizes radiofrequency energy to deliver targeted heat into the deeper dermal layers of the skin.',
      'By heating the tissues to a sustained, clinical temperature of 41–43°C, Forma causes existing collagen fibers to contract, providing an immediate skin tightening and lifting effect.',
      'The heat also stimulates fibroblasts to synthesize fresh, long-term collagen over the next several weeks. It is often described as a warm stone massage, making it a comfortable anti-aging option.',
    ],
    whyChooseItems: [
      { title: 'Immediate Contouring', description: 'Contracts collagen fibers for a lifted look.' },
      { title: 'Sub-Dermal Temperature Control', description: 'Handpiece sensors monitor temperature to ensure comfort and safety.' },
      { title: 'Lifts Jawline & Cheeks', description: 'Excellent for defining facial contours.' },
    ],
    suitability: {
      idealFor: [
        'Patients with early signs of skin laxity or sagging',
        'Loss of definition along the jawline or under-chin',
        'Pre-event skin tightening ("Red Carpet Lift")',
      ],
      advisedAgainst: [
        'Patients with pacemakers or internal defibrillators',
        'Active dermal fillers in target area within 2 weeks',
        'Pregnancy or lactation (RF contraindicated)',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Gel Application', description: 'Conductive gel is applied to protect skin surface.' },
      { number: '02', label: 'RF Heating', description: 'Forma probe is massaged in upward passes.' },
      { number: '03', label: 'Temperature Hold', description: 'Maintaining 42°C for optimal collagen response.' },
      { number: '04', label: 'Peptide Lift', description: 'Cool down cleanse and peptide serum.' },
    ],
    quickFacts: {
      duration: '60 mins',
      comfort: 'Warm & relaxing',
      anaesthesia: 'None required',
      downtime: 'None',
      visibleResults: 'Immediate skin tightening',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '6 weekly sessions',
      bestFor: 'Sagging, jawline contouring, skin laxity',
      suitableSkinTypes: 'All candidates',
    },
    benefits: [
      { title: 'Jawline Definition', description: 'Sculpts the lower face contours.' },
      { title: 'Plumps Fine Lines', description: 'Fills skin volume from within.' },
      { title: 'Comfortable & Safe', description: 'Non-invasive option with zero healing.' },
    ],
    approachHeading: 'Collagen Contraction.',
    approachParagraphs: [
      'Heat triggers collagen remodeling. By safely heating the deeper skin layers, we trigger the body\'s natural structural repair mechanisms.',
    ],
    results: {
      format: 'quote',
      quote: 'Forma RF feels like a warm massage, but the lifting along my jawline was visible after the first session.',
      attribution: 'Patient, RF Contouring Protocol',
    },
    faqs: [
      { question: 'How many sessions will I need?', answer: 'While you will see an immediate lift, a series of 6 weekly sessions is recommended to build long-term collagen density.' },
      { question: 'Will it melt my fillers?', answer: 'We advise waiting 2 to 4 weeks after cosmetic injectables before performing radiofrequency treatments in the same area.' },
    ],
  },
};

// GENERIC TREATMENT DATA GENERATOR FOR CATALOGUE ITEMS NOT EXPLICITLY IN MAP
// ─────────────────────────────────────────────────────────────────────────────

function createGenericTreatmentData(slug: string): TreatmentData {
  // Search in catalogue items
  let item: CatalogueItem | undefined;

  for (const g of SKIN_GROUPS) {
    const found = g.treatments.find((t) => t.slug === slug);
    if (found) { item = found; break; }
  }
  if (!item) item = HAIR_TREATMENTS.find((t) => t.slug === slug);
  if (!item) item = DENTAL_TREATMENTS.find((t) => t.slug === slug);
  if (!item) item = WELLNESS_TREATMENTS.find((t) => t.slug === slug);

  const name = item ? item.name : slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const description = item ? item.description : 'A medical-grade clinical treatment designed with precision and care.';

  const isHair = slug.includes('hair') || slug.includes('scalp') || slug.includes('exosome');
  const isDental = slug.includes('dental') || slug.includes('teeth') || slug.includes('aligners') || slug.includes('crown') || slug.includes('bonding') || slug.includes('root') || slug.includes('veneers') || slug.includes('rct') || slug.includes('whitening');
  const isWellness = slug.includes('reviv') || slug.includes('infusion') || slug.includes('longevity') || slug.includes('wellness') || slug.includes('boost');
  const category = isHair ? 'Hair' : isDental ? 'Dental' : isWellness ? 'Wellness' : 'Skin';

  // Check if we have a clinical profile for this treatment
  const profile = TREATMENT_PROFILES[slug] || {};

  // Standard defaults based on category
  const defaultSnapshot = isHair
    ? {
        duration: '60 minutes',
        comfortLevel: 'Mild discomfort (numbing used)',
        downtime: 'None (avoid washing for 24h)',
        visibleResults: 'Progressive over 8–12 weeks',
        suitableFor: 'Thinning hair & follicle health',
        sessions: '4 to 6 sessions recommended',
      }
    : isDental
      ? {
          duration: '45 – 90 minutes',
          comfortLevel: 'Comfortable (local numbing if needed)',
          downtime: 'None',
          visibleResults: 'Immediate to 2 weeks',
          suitableFor: 'Aesthetics, restoration, & dental health',
          sessions: '1 to 3 appointments',
        }
      : isWellness
        ? {
            duration: '45 – 60 minutes',
            comfortLevel: 'Painless (IV pinch only)',
            downtime: 'None',
            visibleResults: 'Immediate to 24 hours',
            suitableFor: 'Hydration, energy, & preventative health',
            sessions: 'Single session or monthly course',
          }
        : {
            duration: '45 – 60 minutes',
            comfortLevel: 'Comfortable',
            downtime: 'None',
            visibleResults: 'Immediate glow',
            suitableFor: 'All skin types',
            sessions: 'Monthly maintenance',
          };

  const defaultIntroHeading = isHair
    ? `Follicle Rejuvenation.\nDelivered With Precision.`
    : isDental
      ? `Precision Oral Reconstruction.\nTailored Dental Aesthetics.`
      : isWellness
        ? `Systemic Restoration.\nNutrient Infusions.`
        : `${name}.\nDelivered With Precision.`;

  const defaultIntroParagraphs = isHair
    ? [
        `${name} at 22Luna focuses on restoring scalp micro-circulation and delivering key growth proteins directly to hair follicles.`,
        `By addressing cellular health within the scalp tissue, we help extend the hair growth phase and increase hair density safely without surgical interventions.`,
      ]
    : isDental
      ? [
          `${name} combines clinical excellence with digital smile engineering to restore oral functions and aesthetic balance.`,
          `Using advanced non-invasive materials and digital mapping, we ensure a precise fit that matches your natural bite alignment.`,
        ]
      : isWellness
        ? [
            `Our ${name} infusions bypass the digestive system to deliver therapeutic doses of vitamins and antioxidants directly to your cells.`,
            `This maximizes absorption efficiency, helping rehydrate your body, support immunity, and restore physical energy levels.`,
          ]
        : [
            `${name} at 22Luna is structured around your specific biological needs and goals, using evidence-based protocols and medical-grade technology.`,
            `Every treatment begins with a thorough clinical assessment to confirm suitability and personalize every step of the procedure for optimal outcome.`,
          ];

  const defaultWhyChoose = isHair
    ? [
        { title: 'Follicle Focus', description: 'Delivers essential nutrients directly to root structures.' },
        { title: 'Non-Surgical Path', description: 'Avoids surgery and long recovery times.' },
        { title: 'Doctor-Led Planning', description: 'Every program is customized based on active scalp condition.' },
      ]
    : isDental
      ? [
          { title: 'Biocompatible Materials', description: 'Only highly durable, tooth-colored materials are selected.' },
          { title: 'Digital Mapping', description: 'Leverages modern scanners to ensure exact contours.' },
          { title: 'Conservative Approach', description: 'Preserves the maximum possible natural tooth structures.' },
        ]
      : isWellness
        ? [
            { title: '100% Bioavailability', description: 'Bypasses gut barriers for absolute nutrient absorption.' },
            { title: 'Rapid Action', description: 'Rehydrates and boosts cellular energy within hours.' },
            { title: 'Prescription Grade', description: 'Prepared using high-purity clinical ingredients.' },
          ]
        : [
            { title: 'Evidence-Based Protocol', description: 'Grounded in clinical research and proven medical outcomes.' },
            { title: 'Personalized Application', description: 'Tailored specifically to your current concerns.' },
            { title: 'Comfort-First Environment', description: 'Delivered in private, serene suites designed to keep you relaxed.' },
          ];

  const defaultFaqs = isHair
    ? [
        { question: `Is ${name} safe?`, answer: 'Yes. All scalp protocols are delivered by qualified practitioners using sterilized single-use equipment.' },
        { question: 'When will I see results?', answer: 'Hair growth cycles take time; visible density improvements are typically seen around 8 to 12 weeks.' },
      ]
    : isDental
      ? [
          { question: `Will this require drilling?`, answer: 'We emphasize conservative techniques. Many modern adhesive restorations require minimal to no enamel removal.' },
          { question: 'How long do the restorations last?', answer: 'With proper oral hygiene and regular cleanings, custom ceramic dental works last 10–15+ years.' },
        ]
      : isWellness
        ? [
            { question: `How long does the infusion take?`, answer: 'Most IV infusions take 30 to 45 minutes to complete, during which you can relax in our suites.' },
            { question: 'Is it painful?', answer: 'You will feel a brief tiny pinch during cannulation, after which the infusion itself is completely pain-free.' },
          ]
        : [
            { question: `Is ${name} safe?`, answer: 'Yes. All procedures follow strict medical protocols using approved clinical technologies.' },
            { question: 'How many sessions will I need?', answer: 'The number of sessions depends on your baseline condition and goals, outlined during consultation.' },
          ];

  const defaultActives: Record<string, string[]> = {
    'enzyme-radiance-ritual': ["Bromelain (Pineapple Enzyme)", "Papain (Papaya Enzyme)", "Aloe Lipids", "Green Tea Extracts"],
    'clear-balance-acne-facial': ["2% Salicylic Acid (BHA)", "Tea Tree Extract", "Hyaluronic Acid", "Niacinamide"],
    'mandeluxe-glow-facial': ["Mandelic Acid (AHA)", "Licorice Root Extract", "Green Tea Anions", "Peptides"],
    'two-for-glow': ["Glycolic Acid", "Retinol Booster", "Glutathione", "High-Dose Vitamin C", "Hyaluronic Acid"],
    'hydrafacial-platinum': ["Vortex Peptides", "Red Algae Extract", "Salicylic Acid", "Growth Factors", "Hyaluronic Acid"],
    'o2-derm-oxy-facial': ["Purified Anions", "Hyaluronic Acid", "Amino Acids", "Vitamins A, C & E"],
    'dual-element-fire-ice': ["Glycolic Acid (18%)", "Citric Acid", "Niacinamide", "Retinol", "Hyaluronic Acid"],
    'zo-obagi-hydraboost': ["Squalane", "Ceramides (NP, AP, EOP)", "Colloidal Oatmeal", "Sodium PCA"],
    'forma-rf-tech': ["Conductive Thermal Gel", "Peptides", "Hyaluronic Acid"],
    'elixir-prf-restore': ["Autologous Platelet-Rich Fibrin (PRF)", "Growth Factors", "Hyaluronic Acid"]
  };

  const defaultTech: Record<string, string> = {
    'enzyme-radiance-ritual': "Proteolytic Digestion Protocol",
    'clear-balance-acne-facial': "Professional Extraction & Medical-Grade Blue LED Light (415nm)",
    'mandeluxe-glow-facial': "Controlled Slow-Penetration Exfoliation System",
    'two-for-glow': "Vascular Gymnastics (Fire & Ice) + Intravenous Vitaglow Drip",
    'hydrafacial-platinum': "Mechanical Lymphatic Drainage + Vortex-Fusion System + Medical LED",
    'o2-derm-oxy-facial': "O2 Derm Hyperbaric Oxygen Dome & Anion Mist Generator",
    'dual-element-fire-ice': "iS Clinical Resurfacing Peel + Cryo-Globe Stimulation",
    'zo-obagi-hydraboost': "ZO Skin Health Barrier Re-lipidization Protocol",
    'forma-rf-tech': "Forma RF Skin Tightening System (InMode)",
    'elixir-prf-restore': "PRF Centrifuge Isolation & Dermapen 4 Micro-Channeling"
  };

  return {
    slug,
    name,
    tagline: profile.tagline || description,
    category,
    snapshot: profile.snapshot || defaultSnapshot,
    introLabel: profile.introLabel || 'What This Is',
    introHeading: profile.introHeading || defaultIntroHeading,
    introParagraphs: profile.introParagraphs || defaultIntroParagraphs,
    whyChooseItems: profile.whyChooseItems || defaultWhyChoose,
    suitability: profile.suitability || {
      idealFor: [
        `Patients seeking targeted improvement with ${name.toLowerCase()}`,
        'Those looking for ethical, physician-led clinical care',
        'Candidates preferring natural, harmonious results',
      ],
      advisedAgainst: [
        'Active infections or inflammation in target area',
        'Pregnancy or nursing (for specific active ingredients)',
      ],
    },
    howItWorksSteps: profile.howItWorksSteps || [
      { number: '01', label: 'Consultation', description: 'In-depth evaluation and goal assessment.' },
      { number: '02', label: 'Preparation', description: 'Gentle cleansing or prepping of the area.' },
      { number: '03', label: 'Treatment', description: 'Precise medical protocol execution.' },
      { number: '04', label: 'Integration', description: 'Post-treatment barrier lock and aftercare guidance.' },
    ],
    journey: profile.journey || [
      { id: 'before', label: 'Before Your Session', points: ['Follow pre-treatment instructions', 'Arrive relaxed in our sanctuary'] },
      { id: 'during', label: 'During Your Session', points: ['Relax in our private suite', 'Our specialists perform the treatment'] },
      { id: 'after', label: 'After Your Session', points: ['Immediate aftercare applied', 'Resume daily routine seamlessly'] },
      { id: 'recovery', label: 'Recovery & Maintenance', points: ['Follow post-session guides', 'Schedule follow-up checks as needed'] },
    ],
    quickFacts: profile.quickFacts || {
      duration: isDental ? '45 – 90 mins' : isHair ? '60 mins' : '45 – 60 mins',
      comfort: 'Comfortable',
      anaesthesia: 'None or topical needed',
      downtime: 'None to minimal',
      visibleResults: 'Progressive improvement',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Based on consultation',
      bestFor: description,
      suitableSkinTypes: 'All candidates',
    },
    benefits: profile.benefits || [
      { title: 'Targeted Outcome', description: `Designed to resolve ${name.toLowerCase()} concerns effectively.` },
      { title: 'Clinical Safety', description: 'Performed under strict medical-grade sterilization standards.' },
      { title: 'Restorative Experience', description: 'Delivered in a calm, non-clinical boutique atmosphere.' },
    ],
    approachHeading: profile.approachHeading || 'Science Before Hype.',
    approachParagraphs: profile.approachParagraphs || [
      `At 22Luna, ${name} is performed with a commitment to transparency, safety, and long-term health rather than quick cosmetic trends.`,
    ],
    results: profile.results || {
      format: 'quote',
      quote: `The care and precision during my ${name} session made all the difference. I felt informed and reassured throughout.`,
      attribution: 'Patient, 22Luna Care Program',
    },
    faqs: profile.faqs || defaultFaqs,
    ctaTitle: profile.ctaTitle || `Explore ${name}`,
    ctaSubtitle: profile.ctaSubtitle || 'Schedule a consultation to discuss your goals and receive an individualized recommendation.',
    actives: profile.actives || defaultActives[slug] || (isHair ? ['PRP', 'Growth Factors'] : isDental ? ['Biocompatible materials'] : isWellness ? ['Vitamin C', 'Glutathione'] : ['Hyaluronic Acid']),
    technology: profile.technology || defaultTech[slug] || (isHair ? 'Clinical Centrifuge' : isDental ? 'Intraoral Scanner' : isWellness ? 'Drip Infusion' : 'Medical Skincare Systems'),
  };
}

/**
 * Retrieves treatment data by slug.
 * If explicit data exists in TREATMENT_DATA, returns it.
 * Otherwise, generates structured, realistic data based on the catalogue item.
 */
export function getTreatmentBySlug(slug: string): TreatmentData {
  if (TREATMENT_DATA[slug]) {
    return TREATMENT_DATA[slug];
  }
  return createGenericTreatmentData(slug);
}
