/**
 * Treatment Data Schema & Generator
 * Single source of truth for all treatment detail pages.
 * Maps dynamic parameters cleanly to detail components with rich clinical profiles.
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
// EXPLICIT TREATMENT DATA REPOSITORY (LEAVE EMPTY TO LET GENERIC GENERATOR HANDLE)
// ─────────────────────────────────────────────────────────────────────────────
export const TREATMENT_DATA: Record<string, TreatmentData> = {};

// GENERIC TREATMENT DATA GENERATOR FOR CATALOGUE ITEMS NOT EXPLICITLY IN MAP
// ─────────────────────────────────────────────────────────────────────────────
function createGenericTreatmentData(slug: string): TreatmentData {
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

  const isHair = slug.includes('hair') || slug.includes('scalp') || slug.includes('thinning') || slug.includes('loss') || slug.includes('beard');
  const isDental = slug.includes('dental') || slug.includes('teeth') || slug.includes('tooth') || slug.includes('aligners') || slug.includes('crown') || slug.includes('bonding') || slug.includes('root') || slug.includes('veneers') || slug.includes('rct') || slug.includes('whitening') || slug.includes('extraction') || slug.includes('smile') || slug.includes('gums') || slug.includes('filling') || slug.includes('cleaning') || slug.includes('denture') || slug.includes('braces') || slug.includes('gummy');
  const isWellness = slug.includes('reviv') || slug.includes('infusion') || slug.includes('longevity') || slug.includes('wellness') || slug.includes('boost');
  const category = isHair ? 'Hair' : isDental ? 'Dental' : isWellness ? 'Wellness' : 'Skin';

  // 1. LASER HAIR REDUCTION
  const isLaserHair = slug.includes('laser-hair') || slug.includes('laser-reduction');
  // 2. BOTOX
  const isBotox = slug.includes('botox') || slug.includes('wrinkle-relaxation');
  // 3. FILLERS & CONTOURING
  const isFiller = slug.includes('filler') || slug.includes('rhinoplasty') || slug.includes('contouring') || slug.includes('rejuvenation') || slug.includes('jawline') || slug.includes('thread');
  // 4. PEELS
  const isPeel = slug.includes('peel');
  // 5. MICRONEEDLING
  const isMicroneedling = slug.includes('microneedling') || slug.includes('needling');
  // 6. PRP
  const isPRP = slug.includes('prp') || slug.includes('prf');
  // 7. TEETH WHITENING
  const isWhitening = slug.includes('white') || slug.includes('whitening');
  // 8. SMILE DESIGN / ALIGNERS
  const isSmileDesign = slug.includes('smile') || slug.includes('align') || slug.includes('braces') || slug.includes('jewellery');
  // 9. IMPLANTS
  const isImplant = slug.includes('implant') || slug.includes('denture');
  // 10. ROOT CANAL
  const isRootCanal = slug.includes('root-canal') || slug.includes('rct') || slug.includes('extraction') || slug.includes('decay') || slug.includes('filling') || slug.includes('sensitive');

  // CUSTOM SNAPSHOTS
  let snapshot: TreatmentSnapshot = {
    duration: '45 – 60 minutes',
    comfortLevel: 'Comfortable',
    downtime: 'None',
    visibleResults: 'Immediate glow',
    suitableFor: 'All skin types',
    sessions: 'Monthly maintenance',
  };

  if (isLaserHair) {
    snapshot = {
      duration: '30 – 60 minutes',
      comfortLevel: 'Virtually painless (ice-cool tip technology)',
      downtime: 'Zero (mild redness for 2-4 hours)',
      visibleResults: 'Noticeable hair reduction in 2-3 sessions',
      suitableFor: 'All skin types (Fitzpatrick I-VI)',
      sessions: '6 to 8 sessions for optimal clearance',
    };
  } else if (isBotox) {
    snapshot = {
      duration: '15 – 30 minutes',
      comfortLevel: 'Very mild pinch (micro-needles)',
      downtime: 'Zero (avoid lying down for 4 hours)',
      visibleResults: 'Begins in 3-5 days, peaks at 14 days',
      suitableFor: 'Dynamic facial lines and expression creases',
      sessions: 'Single session, repeated every 3-4 months',
    };
  } else if (isFiller) {
    snapshot = {
      duration: '30 – 45 minutes',
      comfortLevel: 'Comfortable (contains integrated lidocaine)',
      downtime: 'Minimal (mild swelling for 2-3 days)',
      visibleResults: 'Immediate volume and structural correction',
      suitableFor: 'Volume loss, structure depletion, asymmetries',
      sessions: 'Single session, touch-up in 9-18 months',
    };
  } else if (isPeel) {
    snapshot = {
      duration: '30 – 45 minutes',
      comfortLevel: 'Mild tingling or warmth',
      downtime: 'None to 5 days (depending on peel strength)',
      visibleResults: 'Radiance in 7 days, texture refinement',
      suitableFor: 'Acne, pigmentation, dullness, congestion',
      sessions: '3 to 6 sessions spaced 3-4 weeks apart',
    };
  } else if (isMicroneedling) {
    snapshot = {
      duration: '60 minutes (includes numbing)',
      comfortLevel: 'Comfortable (strong topical numbing used)',
      downtime: '1 to 2 days of mild pinkness',
      visibleResults: 'Progressive over 4-6 weeks as collagen builds',
      suitableFor: 'Acne scars, large pores, lines, stretch marks',
      sessions: '4 to 6 sessions recommended',
    };
  } else if (isPRP) {
    snapshot = {
      duration: '60 minutes',
      comfortLevel: 'Mild discomfort during micro-injections',
      downtime: 'Zero (avoid washing for 12 hours)',
      visibleResults: 'Progressive density/regeneration in 6-12 weeks',
      suitableFor: 'Thinning hair, follicle weakness, skin texture',
      sessions: '4 sessions spaced 4 weeks apart',
    };
  } else if (isWhitening) {
    snapshot = {
      duration: '60 – 75 minutes',
      comfortLevel: 'Comfortable (mild transient sensitivity)',
      downtime: 'Zero (white diet for 48 hours)',
      visibleResults: 'Immediate (3 to 8 shades lighter)',
      suitableFor: 'Extrinsic staining, discoloured enamel',
      sessions: 'Single session',
    };
  } else if (isSmileDesign) {
    snapshot = {
      duration: '45 – 60 minutes',
      comfortLevel: 'Painless (non-invasive mapping)',
      downtime: 'Zero',
      visibleResults: 'Instant 3D digital simulation preview',
      suitableFor: 'Misalignments, spacing, gummy smiles, layout harmony',
      sessions: 'Initial planning scanner appointment',
    };
  } else if (isImplant) {
    snapshot = {
      duration: '60 – 90 minutes per implant',
      comfortLevel: 'Painless during (local anaesthesia used)',
      downtime: '3 to 5 days of soft diet, mild tenderness',
      visibleResults: 'Permanent functional replacement post-integration',
      suitableFor: 'Missing teeth, root fractures, tooth loss',
      sessions: '2 to 3 stages over 3-6 months',
    };
  } else if (isRootCanal) {
    snapshot = {
      duration: '60 – 90 minutes (often single visit)',
      comfortLevel: 'Painless (anaesthesia shuts down pain nerve)',
      downtime: 'Zero (avoid chewing on side for 24h)',
      visibleResults: 'Immediate relief from infected nerve pain',
      suitableFor: 'Deep decay, abscesses, pulp inflammation',
      sessions: '1 to 2 appointments',
    };
  } else if (isHair) {
    snapshot = {
      duration: '45 – 60 minutes',
      comfortLevel: 'Highly comfortable',
      downtime: 'Zero',
      visibleResults: 'Progressive improvement over 8-12 weeks',
      suitableFor: 'Thinning hair & scalp dryness',
      sessions: '4 to 6 sessions recommended',
    };
  } else if (isDental) {
    snapshot = {
      duration: '30 – 60 minutes',
      comfortLevel: 'Comfortable',
      downtime: 'Zero',
      visibleResults: 'Immediate cleanliness & polish',
      suitableFor: 'Enamel health, stain removal, hygiene',
      sessions: '6-monthly maintenance recommended',
    };
  }

  // CUSTOM STEPS
  let howItWorksSteps: TreatmentStep[] = [
    { number: '01', label: 'Consultation', description: 'In-depth evaluation and goal assessment.' },
    { number: '02', label: 'Preparation', description: 'Gentle cleansing or prepping of the area.' },
    { number: '03', label: 'Treatment', description: 'Precise medical protocol execution.' },
    { number: '04', label: 'Integration', description: 'Post-treatment barrier lock and aftercare guidance.' },
  ];

  if (isLaserHair) {
    howItWorksSteps = [
      { number: '01', label: 'Cleanse & Grid', description: 'The target area is cleaned and marked into grids for complete laser coverage.' },
      { number: '02', label: 'Cooling Gel', description: 'A chilled conductive gel is applied to protect the skin surface.' },
      { number: '03', label: 'Laser Delivery', description: 'Rapid diode laser pulses pass over the grid, heating and neutralizing active follicles.' },
      { number: '04', label: 'Barrier Relief', description: 'The gel is removed, and a soothing zinc/aloe formula is locked in.' },
    ];
  } else if (isBotox) {
    howItWorksSteps = [
      { number: '01', label: 'Muscle Mapping', description: 'The physician marks target points while assessing dynamic expression movements.' },
      { number: '02', label: 'Ice Prep', description: 'Numbing or ice packs are applied to make the insertion points comfortable.' },
      { number: '03', label: 'Micro-Injections', description: 'An ultra-fine needle delivers precise dosing to targeted muscle junctions.' },
      { number: '04', label: 'Post-Care Seal', description: 'Points are checked, and you receive instructions on post-injection posture.' },
    ];
  } else if (isFiller) {
    howItWorksSteps = [
      { number: '01', label: 'Contour Design', description: 'Facial anatomy is mapped to design symmetry and structural volume.' },
      { number: '02', label: 'Topical Numbing', description: 'A strong anesthetic cream is applied to target sites for 20 minutes.' },
      { number: '03', label: 'Precision Cannula', description: 'Filler is deposited into structural layers using a safe, blunt cannula.' },
      { number: '04', label: 'Sculpting', description: 'The doctor gently shapes the filler to ensure completely natural transitions.' },
    ];
  } else if (isPeel) {
    howItWorksSteps = [
      { number: '01', label: 'Prep Cleansing', description: 'Skin is cleansed and degreased to allow even acid penetration.' },
      { number: '02', label: 'Peel Application', description: 'The selected medical-grade acid solution is applied in even layers.' },
      { number: '03', label: 'Time Monitoring', description: 'The skin is watched closely for signs of frost or clinical endpoints.' },
      { number: '04', label: 'Neutralize & Lock', description: 'The peel is neutralized and a repair barrier plus mineral SPF is applied.' },
    ];
  } else if (isMicroneedling) {
    howItWorksSteps = [
      { number: '01', label: 'Numbing Barrier', description: 'Anesthetic cream is applied to the face to ensure a pain-free session.' },
      { number: '02', label: 'Active Serum', description: 'Medical actives, growth factors, or hyaluronic acid are applied to the skin.' },
      { number: '03', label: 'Micro-Channeling', description: 'A sterile needle cart create thousands of micro-channels in the dermis.' },
      { number: '04', label: 'Peptide Mask', description: 'A cooling peptide mask is locked on to immediately calm the pinkness.' },
    ];
  } else if (isPRP) {
    howItWorksSteps = [
      { number: '01', label: 'Blood Extraction', description: 'A small volume of blood is drawn from your arm into sterile vacuum tubes.' },
      { number: '02', label: 'Centrifugation', description: 'Tubes are spun in a specialized centrifuge to isolate platelet concentration.' },
      { number: '03', label: 'Plasma Extraction', description: 'The pure, growth-factor-dense plasma is isolated into micro-syringes.' },
      { number: '04', label: 'Micro-Injections', description: 'The PRP is delivered into the scalp or dermis using microscopic needles.' },
    ];
  } else if (isWhitening) {
    howItWorksSteps = [
      { number: '01', label: 'Shade Mapping', description: 'Baseline tooth shade is measured using an digital shade scanner.' },
      { number: '02', label: 'Gingival Barrier', description: 'A liquid protective barrier is cured over the gums to isolate teeth.' },
      { number: '03', label: 'Whitening Gel', description: 'Medical-grade hydrogen peroxide bleaching gel is placed on the enamel.' },
      { number: '04', label: 'LED Activation', description: 'A cool blue LED laser activates the gel for three 15-minute cycles.' },
    ];
  } else if (isSmileDesign) {
    howItWorksSteps = [
      { number: '01', label: '3D Scan', description: 'An intraoral camera records your teeth contours in a high-resolution 3D scan.' },
      { number: '02', label: 'Proportion Mapping', description: 'Digital face photos are loaded to map symmetry and gum-to-lip display.' },
      { number: '03', label: 'CAD Simulation', description: 'Software generates a 3D preview of the projected tooth placement changes.' },
      { number: '04', label: 'Fabrication Layout', description: 'Your custom aligner sequences or cosmetic veneers plan are finalized.' },
    ];
  } else if (isImplant) {
    howItWorksSteps = [
      { number: '01', label: '3D Imaging', description: 'CBCT scans determine exact bone density and locate dental nerves.' },
      { number: '02', label: 'Site Preparation', description: 'Under local anesthesia, a small guide is made in the jawbone.' },
      { number: '03', label: 'Fixture Placement', description: 'The titanium implant is placed into the site and covered to heal.' },
      { number: '04', label: 'Prosthetic Crown', description: 'Once fused (3-6 months), a bespoke ceramic crown is attached to the abutment.' },
    ];
  } else if (isRootCanal) {
    howItWorksSteps = [
      { number: '01', label: 'Isolation', description: 'The tooth is numbed and isolated using a sterile rubber dam sheet.' },
      { number: '02', label: 'Micro-Access', description: 'A microscopic access is created to reach the inflamed nerve pulp chamber.' },
      { number: '03', label: 'Cleaning Canals', description: 'Canals are disinfected and shaped using microscope-guided rotary files.' },
      { number: '04', label: 'Fills & Seal', description: 'Canals are sealed with gutta-percha, prepping the tooth for a crown.' },
    ];
  }

  // CUSTOM FAQS
  let faqs: TreatmentFAQItem[] = [
    { question: `Is ${name} safe?`, answer: 'Yes. All procedures follow strict medical protocols using approved clinical technologies.' },
    { question: 'How many sessions will I need?', answer: 'The number of sessions depends on your baseline condition and goals, outlined during consultation.' },
  ];

  if (isLaserHair) {
    faqs = [
      { question: 'Is the hair reduction permanent?', answer: 'Yes, it provides permanent reduction. A complete course typically targets 85-95% of active hair follicles. You may need 1-2 quick touch-ups per year for maintenance.' },
      { question: 'Does the treatment hurt?', answer: 'No. Our advanced laser system uses an integrated Sapphire cooling tip that chills the skin to 4°C during emissions, making it highly comfortable.' },
      { question: 'How do I prepare for my session?', answer: 'You must shave the target area 12-24 hours before your appointment. Do not pluck, wax, or use hair removal creams for 4 weeks prior.' },
    ];
  } else if (isBotox) {
    faqs = [
      { question: 'Will my face look frozen or unnatural?', answer: 'No. Our philosophy centers on natural expression. We use precise micro-dosages (Baby Botox) to relax target muscles without freezing your expressions.' },
      { question: 'How long do the results last?', answer: 'Botox typically lasts between 3 to 5 months. Muscle movement will gradually return, and lines will reappear if not retreated.' },
      { question: 'What is the post-care routine?', answer: 'Avoid lying down, massaging the face, or doing heavy exercise for 4 hours after treatment. This prevents the protein from migrating.' },
    ];
  } else if (isFiller) {
    faqs = [
      { question: 'Are dermal fillers permanent?', answer: 'No, they are made from Hyaluronic Acid, a sugar molecule that slowly breaks down naturally over 9 to 18 months.' },
      { question: 'Are fillers reversible if I do not like them?', answer: 'Yes. HA fillers can be dissolved instantly by injecting Hyaluronidase, an enzyme that safely breaks down the filler.' },
      { question: 'Is the procedure painful?', answer: 'Comfort is high. We use strong topical anesthetics, and the fillers themselves contain Lidocaine (a numbing agent) for a pain-free experience.' },
    ];
  } else if (isPeel) {
    faqs = [
      { question: 'Will my skin peel off in sheets?', answer: 'No. Modern medical peels act at a cellular level. You might experience mild flaking or dry patches for 2-3 days, but not severe peeling.' },
      { question: 'How long must I avoid the sun?', answer: 'You should avoid direct sun exposure and wear a broad-spectrum SPF 30+ daily for at least 7 days post-treatment.' },
    ];
  } else if (isMicroneedling) {
    faqs = [
      { question: 'How long will my skin remain red?', answer: 'Expect a mild pinkness similar to a sunburn for 24-48 hours. Most patients return to their routine the next day.' },
      { question: 'How does RF microneedling differ from standard microneedling?', answer: 'Standard microneedling uses mechanical action to trigger collagen. RF microneedling adds heat (radiofrequency) to the tips of the needles, which tightens skin and targets deep acne scars.' },
    ];
  } else if (isPRP) {
    faqs = [
      { question: 'Is PRP safe?', answer: 'PRP is extremely safe because it uses your own blood. There is zero risk of allergic reaction, rejection, or cross-contamination.' },
      { question: 'When will I see hair density changes?', answer: 'Hair growth cycles take time. You will notice decreased shedding in 4-6 weeks, and density improvements around 12 weeks.' },
    ];
  } else if (isWhitening) {
    faqs = [
      { question: 'Will whitening damage my tooth enamel?', answer: 'No. Professional clinical whitening uses pH-balanced gel that does not strip or weaken the enamel structure.' },
      { question: 'What is the white diet post-treatment?', answer: 'Avoid foods that stain (coffee, red wine, turmeric, dark sodas) for 48 hours to lock in the bright shade.' },
    ];
  } else if (isSmileDesign) {
    faqs = [
      { question: 'What are clear aligners?', answer: 'They are transparent, custom-made BPA-free trays that sit over your teeth and shift them biomechanically.' },
      { question: 'How long do I need to wear aligners each day?', answer: 'You must wear aligners for 20 to 22 hours per day. Only remove them to eat, drink hot liquids, and brush.' },
    ];
  } else if (isImplant) {
    faqs = [
      { question: 'Does placing an implant hurt?', answer: 'The procedure is done under local anesthesia, so you will feel no pain. Some mild tenderness may exist for 3-5 days post-surgery, managed easily with pain relievers.' },
      { question: 'How long does a dental implant last?', answer: 'If maintained with good oral hygiene and regular check-ups, dental implants are designed to last a lifetime.' },
    ];
  } else if (isRootCanal) {
    faqs = [
      { question: 'Is a root canal painful?', answer: 'No. Modern rotary endodontics and anesthetic techniques make RCT as comfortable as getting a standard filling. The treatment actually eliminates the pain of the infection.' },
      { question: 'Why does the tooth need a crown after a root canal?', answer: 'Once the blood supply is removed, the tooth structure becomes brittle over time. A crown provides protection to keep the tooth from fracturing.' },
    ];
  }

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

  // DEFAULT ACTIVES AND TECH MAPS
  const defaultActives = isHair
    ? ['Growth Factors', 'Peptides', 'Scalp Lipids']
    : isDental
      ? ['Biocompatible dental ceramics', 'Fluoride-free whitening complexes']
      : isWellness
        ? ['Vitamin C', 'Glutathione', 'B-Complex']
        : isLaserHair
          ? ['Soothed with Aloe Vera', 'Zinc Oxide', 'Vitamin E']
          : isBotox
            ? ['Purified Neuromodulator Protein']
            : isFiller
              ? ['Hyaluronic Acid', 'Lidocaine']
              : isPeel
                ? ['Glycolic Acid', 'Mandelic Acid', 'Salicylic Acid']
                : isMicroneedling
                  ? ['Peptides', 'Hyaluronic Acid', 'Growth Factors']
                  : isPRP
                    ? ['Autologous Platelets', 'Growth Factors']
                    : ['Hyaluronic Acid', 'Antioxidants'];

  const defaultTech = isHair
    ? 'Scalp Delivery Systems'
    : isDental
      ? '3D Intraoral Scanning & CAD'
      : isWellness
        ? 'Drip Infusion'
        : isLaserHair
          ? 'Diode Laser (Sapphire Cool-Tip)'
          : isBotox
            ? 'Sterile Micro-injectors'
            : isFiller
              ? 'Safety Blunt Cannulas'
              : isPeel
                ? 'Controlled Resurfacing System'
                : isMicroneedling
                  ? 'Sterile Micro-channeling Gold Pins'
                  : isPRP
                    ? 'Clinical Centrifuge Separation'
                    : 'Medical Skincare Systems';

  return {
    slug,
    name,
    tagline: description,
    category,
    snapshot: snapshot,
    introLabel: 'Clinical Overview',
    introHeading: defaultIntroHeading,
    introParagraphs: defaultIntroParagraphs,
    whyChooseItems: defaultWhyChoose,
    suitability: {
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
    howItWorksSteps: howItWorksSteps,
    journey: [
      { id: 'before', label: 'Before Your Session', points: ['Follow pre-treatment instructions', 'Arrive relaxed in our sanctuary'] },
      { id: 'during', label: 'During Your Session', points: ['Relax in our private suite', 'Our specialists perform the treatment'] },
      { id: 'after', label: 'After Your Session', points: ['Immediate aftercare applied', 'Resume daily routine seamlessly'] },
      { id: 'recovery', label: 'Recovery & Maintenance', points: ['Follow post-session guides', 'Schedule follow-up checks as needed'] },
    ],
    quickFacts: {
      duration: snapshot.duration,
      comfort: snapshot.comfortLevel,
      anaesthesia: isDental || isFiller || isMicroneedling ? 'Topical or Local Numbing' : 'None needed',
      downtime: snapshot.downtime,
      visibleResults: snapshot.visibleResults,
      returnToRoutine: 'Immediate',
      sessionsNeeded: snapshot.sessions,
      bestFor: description,
      suitableSkinTypes: 'All candidates',
    },
    benefits: [
      { title: 'Targeted Outcome', description: `Designed to resolve ${name.toLowerCase()} concerns effectively.` },
      { title: 'Clinical Safety', description: 'Performed under strict medical-grade sterilization standards.' },
      { title: 'Restorative Experience', description: 'Delivered in a calm, non-clinical boutique atmosphere.' },
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
    faqs: faqs,
    ctaTitle: `Explore ${name}`,
    ctaSubtitle: 'Schedule a consultation to discuss your goals and receive an individualized recommendation.',
    actives: defaultActives,
    technology: defaultTech,
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
