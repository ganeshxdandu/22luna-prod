/**
 * Treatment Data Schema
 * Single source of truth for all treatment detail pages.
 * Every field maps 1:1 to a section component.
 */

import {
  SKIN_GROUPS,
  HAIR_TREATMENTS,
  DENTAL_TREATMENTS,
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
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLICIT TREATMENT DATA REPOSITORY FOR ALL 32 TREATMENTS
// ─────────────────────────────────────────────────────────────────────────────

export const TREATMENT_DATA: Record<string, TreatmentData> = {
  // 1. HydraFacial
  hydrafacial: {
    slug: 'hydrafacial',
    name: 'HydraFacial',
    tagline: 'A medical-grade facial that cleanses, extracts and nourishes in a single session.',
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
      'HydraFacial is not a standard facial. It is a medical-grade, multi-step skin treatment that combines cleansing, exfoliation, chemical peeling, painless extractions, and deep hydration in one continuous sequence.',
      'Unlike treatments that correct or restore, HydraFacial primarily maintains. It is a treatment you return to regularly — not because something is wrong, but because consistent skin health is built over time, not in a single visit.',
      'The technology uses a vortex suction tip to simultaneously remove congestion and infuse active serums, leaving the skin immediately clearer, smoother and more luminous with zero recovery time required.',
    ],
    whyChooseItems: [
      {
        title: 'Immediate, visible improvement.',
        description: 'Skin appears visibly clearer, more even-toned and hydrated within hours of treatment — without redness or downtime.',
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
        description: 'Regular HydraFacial sessions prepare the skin to receive clinical treatments more effectively by clearing clogged channels.',
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
      'While HydraFacial is widely available, at 22Luna the difference lies in diagnosis and custom serum formulation.',
      'We never run a default setting; every booster is selected based on a real-time assessment of your skin moisture barrier and daily stressors.',
    ],
    results: {
      format: 'quote',
      quote: 'My skin felt instantly cleaner and hydrated without a hint of redness. It has become my monthly ritual.',
      attribution: 'Patient, Skin Maintenance Program',
    },
    faqs: [
      {
        question: 'Is HydraFacial painful?',
        answer: 'Not at all. Most patients describe it as a light cool paintbrush gliding over the skin.',
      },
      {
        question: 'How often should I get a HydraFacial?',
        answer: 'Once every 4 weeks is optimal to match your skin\'s natural cellular turnover cycle.',
      },
    ],
    ctaTitle: 'Ready to Experience HydraFacial?',
    ctaSubtitle: 'Book a session or speak with our clinical aesthetician to tailor your boosters.',
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
  },
};

// ─────────────────────────────────────────────────────────────────────────────
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

  const name = item ? item.name : slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const description = item ? item.description : 'A medical-grade clinical treatment designed with precision and care.';

  const isHair = slug.includes('hair') || slug.includes('scalp') || slug.includes('exosome');
  const isDental = slug.includes('dental') || slug.includes('teeth') || slug.includes('aligners') || slug.includes('crown') || slug.includes('bonding') || slug.includes('root') || slug.includes('veneers');
  const category = isHair ? 'Hair' : isDental ? 'Dental' : 'Skin';

  return {
    slug,
    name,
    tagline: description,
    category,
    snapshot: {
      duration: isDental ? '45 – 90 minutes' : isHair ? '60 minutes' : '45 – 60 minutes',
      comfortLevel: 'Comfortable & painless',
      downtime: 'None to minimal',
      visibleResults: 'Progressive improvement',
      suitableFor: 'Suitable for most candidates',
      sessions: 'Customized protocol',
    },
    introLabel: 'What This Is',
    introHeading: `${name}.\nDelivered With Precision.`,
    introParagraphs: [
      `${name} at 22Luna is structured around your specific biological needs and goals, using evidence-based protocols and medical-grade technology.`,
      `Every treatment begins with a thorough clinical assessment to confirm suitability and personalize every step of the procedure for optimal outcome.`,
    ],
    whyChooseItems: [
      { title: 'Evidence-Based Protocol', description: 'Grounded in clinical research and proven medical outcomes.' },
      { title: 'Personalized Application', description: 'Tailored specifically to your current concerns and baseline state.' },
      { title: 'Comfort-First Environment', description: 'Delivered in private, serene suites designed to keep you relaxed.' },
      { title: 'Doctor-Led Care', description: 'Planned and administered by qualified medical specialists.' },
    ],
    suitability: {
      idealFor: [
        `Patients seeking targeted improvement with ${name.toLowerCase()}`,
        'Those looking for ethical, physician-led clinical care',
        'Candidates preferring natural, harmonious results',
      ],
      advisedAgainst: [
        'Active infections or inflammation in target area',
        'Pregnancy or nursing (for specific pharmaceutical protocols)',
        'Unrealistic expectations without baseline assessment',
      ],
    },
    howItWorksSteps: [
      { number: '01', label: 'Assessment', description: 'In-depth consultation and clinical evaluation.' },
      { number: '02', label: 'Preparation', description: 'Gentle cleansing, prepping, or local numbing as required.' },
      { number: '03', label: 'Treatment Delivery', description: 'Precise medical protocol execution.' },
      { number: '04', label: 'Aftercare & Plan', description: 'Soothing application and clear post-treatment guidance.' },
    ],
    journey: [
      { id: 'before', label: 'Before Your Session', points: ['Follow pre-treatment instructions', 'Arrive relaxed in our sanctuary'] },
      { id: 'during', label: 'During Your Session', points: ['Private suite care', 'Relax while our specialists perform the treatment'] },
      { id: 'after', label: 'After Your Session', points: ['Immediate aftercare applied', 'Resume daily routine seamlessly'] },
      { id: 'recovery', label: 'Recovery & Maintenance', points: ['Minimal to no downtime', 'Follow-up planned according to your schedule'] },
    ],
    quickFacts: {
      duration: isDental ? '45 – 90 mins' : '45 – 60 mins',
      comfort: 'High comfort',
      anaesthesia: 'Topical or none required',
      downtime: 'Minimal to none',
      visibleResults: 'Within days to weeks',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Based on consultation',
      bestFor: description,
      suitableSkinTypes: 'All candidates',
    },
    benefits: [
      { title: 'Targeted Outcome', description: `Designed to resolve ${name.toLowerCase()} concerns effectively.` },
      { title: 'Clinical Safety', description: 'Performed under strict medical-grade sterilization standards.' },
      { title: 'Restorative Experience', description: 'Delivered in a calm, non-clinical boutique atmosphere.' },
      { title: 'Tailored Planning', description: 'Integrated into your broader health and aesthetics roadmap.' },
    ],
    approachHeading: 'Science Before Hype.',
    approachParagraphs: [
      `At 22Luna, ${name} is performed with a commitment to transparency, safety, and long-term health rather than quick cosmetic trends.`,
    ],
    results: {
      format: 'quote',
      quote: `The care and precision during my ${name} session made all the difference. I felt informed and reassured throughout.`,
      attribution: 'Patient, 22Luna Care Program',
    },
    faqs: [
      { question: `Is ${name} safe?`, answer: 'Yes. All procedures follow strict medical protocols using approved clinical technologies.' },
      { question: 'How many sessions will I need?', answer: 'The number of sessions depends on your baseline condition and goals, outlined during consultation.' },
    ],
    ctaTitle: `Explore ${name}`,
    ctaSubtitle: 'Schedule a consultation to discuss your goals and receive an individualized recommendation.',
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
