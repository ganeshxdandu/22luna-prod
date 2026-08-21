import type { TreatmentData } from '../treatment-data';

export const SKIN_FACIALS_DATA: Record<string, TreatmentData> = {
  'chemical-peels': {
    slug: 'chemical-peels',
    name: 'Chemical Peels',
    tagline: 'Precision medical peeling agents to resurface texture, clear acne impactions, and balance dermal pigmentation.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Mild warmth & transient tingling',
      downtime: 'Mild flaking (2 to 5 days)',
      visibleResults: 'Radiance in 5–7 days; cellular refinement in 2–3 weeks',
      suitableFor: 'Active acne, post-inflammatory marks, melasma, and irregular texture',
      sessions: '3 to 6 sessions spaced 3–4 weeks apart',
    },
    introHeading: 'Controlled Dermal Renewal.\nEngineered for Deep Clarity.',
    introLabel: 'CLINICAL DERMAL PEELING',
    introParagraphs: [
      'Chemical Peeling at 22Luna is a customized acid resurfacing protocol calibrated according to your Fitzpatrick skin type and active dermal barrier strength.',
      'By applying multi-acid formulations (AHA, BHA, TCA, or Mandelic blends), we dissolve intercellular lipid adhesives, sloughing off congested keratinized layers to accelerate fresh cellular turnover.'
    ],
    whyChooseItems: [
      { title: 'Physician Acid Calibration', description: 'Acids selected strictly based on baseline pH and stratum corneum thickness.' },
      { title: 'Melanin-Safe Formulations', description: 'Zero risk of post-inflammatory hyperpigmentation through buffered neutralizing layers.' },
      { title: 'Targeted Multi-Depth Options', description: 'From superficial lunchtime glow peels to medium-depth corrective protocols.' }
    ],
    suitability: {
      idealFor: [
        'Persistent active acne and micro-comedones',
        'Post-acne dark spots and uneven tone',
        'Sun damage and superficial fine lines',
        'Dull, congested, or keratinized skin texture'
      ],
      advisedAgainst: [
        'Active open wounds or eczema flare-ups',
        'Recent isotretinoin use within past 6 months',
        'Recent unprotected sun exposure or sunburn'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Degrease & Prep', description: 'Skin is cleansed and thoroughly stripped of surface oils to ensure uniform acid absorption.' },
      { number: '02', label: 'Layered Acid Application', description: 'Formulation is applied in timed passes while monitoring erythema and clinical frosting endpoints.' },
      { number: '03', label: 'Bio-Neutralization', description: 'An alkaline neutralizing wash arrests the acid activity precisely when therapeutic goals are achieved.' },
      { number: '04', label: 'Barrier Lock & SPF', description: 'A restorative ceramide complex and broad-spectrum physical mineral filter are infused.' }
    ],
    journey: [
      { id: 'before', label: 'Preparation', points: ['Stop retinoids and AHAs 3 days prior', 'Arrive with clean, non-irritated skin'] },
      { id: 'during', label: 'In the Suite', points: ['Mild tingling sensation for 3–5 minutes', 'Cool fan comfort throughout application'] },
      { id: 'after', label: 'Post-Care', points: ['Skin may feel tight and appear lightly bronzed', 'Apply soothing barrier balm twice daily'] },
      { id: 'recovery', label: 'Recovery', points: ['Do not pick or peel shedding skin', 'Avoid direct sun, hot saunas, and intense workouts for 48h'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Mild tingling / Warm sensation',
      anaesthesia: 'None needed',
      downtime: '2 – 4 days of subtle flaking',
      visibleResults: 'Instant luminosity; clarity within 7 days',
      returnToRoutine: 'Immediate (with sun protection)',
      sessionsNeeded: '3 to 6 sessions',
      bestFor: 'Acne, pigmentation, textural irregularities',
      suitableSkinTypes: 'All skin types (custom acid selection)'
    },
    benefits: [
      { title: 'Accelerated Keratinolysis', description: 'Clears blocked follicular ducts and removes dead keratin plugs.' },
      { title: 'Melanosome Dispersal', description: 'Breaks down localized melanin clusters for uniform dermal radiance.' },
      { title: 'Collagen Remodelling', description: 'Triggers dermal fibroblasts to synthesize new structural elastin.' }
    ],
    approachHeading: 'Precision Over Aggression.',
    approachParagraphs: [
      'We believe clinical peels should never compromise your barrier. Our approach focuses on progressive refinement rather than traumatic, sheet-like peeling, ensuring your skin remains healthy, resilient, and luminous.'
    ],
    results: {
      format: 'quote',
      quote: 'Within 5 days of my bespoke peel, the stubborn pigmentation around my cheeks and post-acne marks had visibly lightened without any harsh downtime.',
      attribution: 'Patient, 22Luna Care Program'
    },
    faqs: [
      { question: 'Will my skin peel off in big sheets?', answer: 'No. Modern medical-grade peels are designed to work microscopically. You will experience soft dusting or light flaking rather than dramatic peeling.' },
      { question: 'How frequently can I get a chemical peel?', answer: 'Superficial peels can be done every 3 to 4 weeks, while medium-depth corrective peels are spaced 6 to 8 weeks apart.' },
      { question: 'Is it safe for deeper skin tones?', answer: 'Yes. We formulate with specific acids like mandelic, lactic, and low-concentration salicylic that are completely safe for Fitzpatrick IV-VI skin types.' }
    ],
    actives: ['Glycolic Acid', 'Salicylic Acid', 'Mandelic Acid', 'Lactic Acid', 'Tranexamic Acid'],
    technology: 'Medical Dermal Acid Peeling'
  },

  'medi-facials': {
    slug: 'medi-facials',
    name: 'Medi Facials',
    tagline: 'Physician-curated medical facial protocols merging ultrasonic deep cleansing, active nutrient infusions, and LED therapy.',
    category: 'Skin',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Deeply relaxing & soothing',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate hydration, bounce, and clarified glow',
      suitableFor: 'Dullness, dehydration, congested pores, and maintenance',
      sessions: 'Every 3 to 4 weeks for continuous vitality',
    },
    introHeading: 'Clinical Efficacy.\nSanctuary Comfort.',
    introLabel: 'PHYSICIAN-LED MEDI-FACIAL',
    introParagraphs: [
      'Medi Facials at 22Luna bridge the gap between traditional spa facials and aggressive clinical procedures. Every protocol is customized on the day based on computer-assisted diagnostic skin mapping.',
      'Utilizing ultrasound cavitation, medical-grade active serum iontophoresis, and cold-laser phototherapy, we deliver deep dermal replenishment without downtime or skin trauma.'
    ],
    whyChooseItems: [
      { title: 'Prescription-Grade Actives', description: 'Medical actives with high bioavailability rather than superficial cosmetic creams.' },
      { title: 'Device-Assisted Penetration', description: 'Sonophoresis and galvanic currents drive nutrients past the stratum corneum.' },
      { title: 'Tailored on the Day', description: 'Hydration, clarifying, anti-aging, or calming protocols selected dynamically.' }
    ],
    suitability: {
      idealFor: [
        'Dull, tired, or environmentally stressed skin',
        'Dehydrated skin with compromised barrier health',
        'Pre-event radiance and immediate plumping',
        'Routine monthly clinical maintenance'
      ],
      advisedAgainst: [
        'Severe acute cystic acne breakouts (requires specific acne protocol)',
        'Active viral or bacterial facial infections'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Ultrasonic Extraction', description: 'High-frequency sound waves liquefy sebum and painlessly extract congested pores.' },
      { number: '02', label: 'Enzyme Polish', description: 'Gentle fruit enzymes dissolve dull surface keratin without physical abrasion.' },
      { number: '03', label: 'Active Dermal Infusion', description: 'Customized peptides, antioxidants, and hyaluronic acid are driven deep via sonophoresis.' },
      { number: '04', label: 'LED Bio-Phototherapy', description: 'Narrow-band LED wavelengths stimulate ATP production and lock in cellular glow.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['Consultation skin scan review', 'Comfortable setup in private sanctuary suite'] },
      { id: 'during', label: 'During Session', points: ['Gentle cooling sensations and relaxing facial massage strokes', 'Zero discomfort or stinging'] },
      { id: 'after', label: 'Immediate Finish', points: ['Skin appears luminous, calm, and deeply hydrated', 'Sunscreen applied'] },
      { id: 'recovery', label: 'Next Days', points: ['Zero downtime; apply makeup after 2 hours if needed', 'Glow peaks over the next 48–72 hours'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Extremely comfortable',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Instant post-treatment radiance',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly maintenance',
      bestFor: 'Dehydration, dullness, pre-event glow',
      suitableSkinTypes: 'All skin types, including sensitive skin'
    },
    benefits: [
      { title: 'Intense Cellular Hydration', description: 'Replenishes intercellular lipids and water-binding hyaluronic matrices.' },
      { title: 'Unclogged Pore Architecture', description: 'Cavitation sound waves clear blackheads and oxidized sebum plugs.' },
      { title: 'Calmed Micro-Inflammation', description: 'LED photobiomodulation reduces erythema and stimulates micro-circulation.' }
    ],
    approachHeading: 'Bespoke Care for Real Skin.',
    approachParagraphs: [
      'No two skins are the same. Our medi-facials are formulated with the flexibility to adapt to your skin’s changing hormonal cycles, seasonal weather shifts, and daily lifestyle stress.'
    ],
    results: {
      format: 'quote',
      quote: 'The medi-facial at 22Luna is my monthly sanctuary ritual. My skin always walks out completely plump, glass-like, and calm.',
      attribution: 'Patient, 22Luna Skin Club'
    },
    faqs: [
      { question: 'How is a medi-facial different from a salon facial?', answer: 'Medi-facials use clinical-grade active ingredients, ultrasound/LED medical devices, and are supervised by doctors to ensure physiological benefits rather than temporary surface slip.' },
      { question: 'Can I do this right before an event?', answer: 'Yes! There is zero redness or peeling. It is the ideal treatment 24 to 48 hours before weddings, parties, or photoshoots.' }
    ],
    actives: ['Hyaluronic Acid', 'Peptides', 'Niacinamide', 'Vitamin C', 'Ceramides'],
    technology: 'Ultrasound Cavitation & Medical LED'
  },

  'skin-polishing': {
    slug: 'skin-polishing',
    name: 'Skin Polishing',
    tagline: 'Micro-dermabrasion diamond exfoliation to buff away dead stratum corneum and reveal silky, refined skin.',
    category: 'Skin',
    snapshot: {
      duration: '45 minutes',
      comfortLevel: 'Gentle vacuum suction sensation',
      downtime: 'None (slight pinkness for 30 mins)',
      visibleResults: 'Instant velvety smooth texture',
      suitableFor: 'Rough texture, mild superficial scarring, blackheads',
      sessions: '4 to 6 sessions recommended',
    },
    introHeading: 'Diamond Resurfacing.\nImmediate Texture Smoothing.',
    introLabel: 'MICRO-DERMABRASION',
    introParagraphs: [
      'Skin Polishing at 22Luna employs medical-grade diamond-tipped micro-dermabrasion paired with gentle vacuum suction to physically remove rough, sun-damaged, and congested outer skin cells.',
      'By removing the dead stratum corneum barrier, this treatment stimulates micro-capillary circulation and dramatically enhances the absorption rate of post-procedure serums.'
    ],
    whyChooseItems: [
      { title: 'Fine Diamond Precision', description: 'Laser-cut diamond tips ensure uniform abrasion without crystal debris.' },
      { title: 'Simultaneous Lymphatic Vacuum', description: 'Suction removes cellular debris while de-puffing facial tissues.' },
      { title: 'Immediate Tactile Smoothing', description: 'Skin feels noticeably baby-soft immediately upon leaving the treatment chair.' }
    ],
    suitability: {
      idealFor: [
        'Rough, uneven, or flaky skin surface',
        'Superficial fine lines and sun-induced roughness',
        'Clogged pores, blackheads, and milia'
      ],
      advisedAgainst: [
        'Active inflamed cystic acne or rosacea',
        'Extremely fragile, broken capillaries (telangiectasias)',
        'Recent chemical peel or laser within 2 weeks'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Dermal Cleansing', description: 'Face is prepared with a gentle clarifying cleanse and dried thoroughly.' },
      { number: '02', label: 'Diamond Pass Resurfacing', description: 'The diamond wand passes methodically across facial vectors with calibrated suction.' },
      { number: '03', label: 'T-Zone Focus', description: 'Higher vacuum intensity is applied to nose and chin for stubborn blackhead clearance.' },
      { number: '04', label: 'Soothing Infusion', description: 'A calming aloe-peptide cooling gel is sealed over freshly buffed skin.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Avoid physical scrubs 48 hours prior', 'Arrive without heavy makeup'] },
      { id: 'during', label: 'Treatment', points: ['Gentle scratching and suction feeling', 'Completely painless'] },
      { id: 'after', label: 'Immediate', points: ['Mild flushing that resolves within an hour', 'Ultra-smooth skin texture'] },
      { id: 'recovery', label: 'Aftercare', points: ['Apply mineral sunscreen generously', 'Avoid harsh actives (retinol/AHA) for 48 hours'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Comfortable',
      anaesthesia: 'None needed',
      downtime: 'Zero',
      visibleResults: 'Immediate tactile softness',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4 to 6 sessions spaced 3 weeks apart',
      bestFor: 'Rough texture, blackheads, superficial dullness',
      suitableSkinTypes: 'Normal, oily, and combination skin'
    },
    benefits: [
      { title: 'Surface Smoothing', description: 'Polishes away dead cellular build-up and dry skin patches.' },
      { title: 'Enhanced Serum Delivery', description: 'Increases topical product penetration by up to 50%.' },
      { title: 'Follicular Decongestion', description: 'Vacuum clearing extracts trapped sebum and micro-comedones.' }
    ],
    approachHeading: 'Gentle Mechanical Refinement.',
    approachParagraphs: [
      'We use diamond abrasive wands calibrated precisely to your skin’s tolerance, avoiding excessive friction to protect the delicate lipid barrier while achieving unmatched surface smoothness.'
    ],
    results: {
      format: 'quote',
      quote: 'My makeup glides on like silk now. The rough bumpy texture on my forehead completely smoothed out after just two sessions.',
      attribution: 'Patient, 22Luna Care Program'
    },
    faqs: [
      { question: 'Does skin polishing hurt?', answer: 'Not at all. It feels like a slightly gritty massage with gentle suction.' },
      { question: 'Can I do skin polishing if I have active acne?', answer: 'If you have inflamed, red pustules, we recommend chemical peels or medi-facials instead to avoid irritating active lesions.' }
    ],
    actives: ['Hyaluronic Acid', 'Aloe Vera', 'Centella Asiatica', 'Zinc Oxide'],
    technology: 'Diamond-Tipped Microdermabrasion'
  },

  'lymphatic-drainage': {
    slug: 'lymphatic-drainage',
    name: 'Lymphatic Drainage',
    tagline: 'Targeted rhythmic mechanical and manual drainage to eliminate facial edema, detoxify tissues, and sculpt contours.',
    category: 'Skin',
    snapshot: {
      duration: '45 minutes',
      comfortLevel: 'Deeply relaxing & soothing',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate de-puffing and defined jawline contour',
      suitableFor: 'Facial water retention, post-procedure edema, sinus congestion',
      sessions: 'Weekly or as a prep ritual before important events',
    },
    introHeading: 'Cellular Detoxification.\nSculpted Fluid Dynamics.',
    introLabel: 'FACIAL LYMPHATIC DRAINAGE',
    introParagraphs: [
      'Lymphatic Drainage at 22Luna utilizes gentle, specialized suction cups and physician-mapped manual strokes along the primary cervical and facial lymphatic channels.',
      'By stimulating lymph flow toward the clavicular nodes, this protocol flushes metabolic toxins, reduces fluid accumulation, sculpts cheekbones, and boosts natural dermal oxygenation.'
    ],
    whyChooseItems: [
      { title: 'Anatomical Lymph Mapping', description: 'Follows exact anatomical drainage routes for rapid fluid clearance.' },
      { title: 'Synergistic Cold Therapy', description: 'Integrates cryo-globes to constrict leaky capillaries and tone tissues.' },
      { title: 'Post-Procedural Recovery', description: 'Accelerates healing and reduces swelling after injectables or laser treatments.' }
    ],
    suitability: {
      idealFor: [
        'Morning facial puffiness and under-eye fluid bags',
        'Sluggish lymphatic circulation and dull, congested skin',
        'Pre-event contouring and jawline sharpening',
        'Post-inflammatory fluid retention'
      ],
      advisedAgainst: [
        'Acute swollen lymph nodes or systemic infections',
        'Active dental abscesses or facial thrombosis'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Supraclavicular Opening', description: 'Gentle pressure pumps the main lymphatic terminal terminus at the collarbone.' },
      { number: '02', label: 'Cervical Vector Drainage', description: 'Downward rhythmic glides drain lymph from the neck and under the jawline.' },
      { number: '03', label: 'Midface & Periorbital Sweep', description: 'Featherlight vacuum pulses move stagnant fluid from tear troughs toward preauricular nodes.' },
      { number: '04', label: 'Cryo-Sculpt Sealing', description: 'Chilled sculpting globes lock in contour and soothe circulation.' }
    ],
    journey: [
      { id: 'before', label: 'Setup', points: ['Hydrate well before your session', 'Rest in our ambient soundscape suite'] },
      { id: 'during', label: 'Experience', points: ['Gentle wave-like rhythmic pressure', 'Deeply calming sensation'] },
      { id: 'after', label: 'Immediate', points: ['Visible facial slimming and eye opening', 'Drink plenty of water to assist elimination'] },
      { id: 'recovery', label: 'Long Term', points: ['Zero downtime; optimal results visible immediately', 'Repeat as desired'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Extremely relaxing',
      anaesthesia: 'None needed',
      downtime: 'Zero',
      visibleResults: 'Immediate de-puffing and sculpting',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Weekly or pre-event',
      bestFor: 'Puffiness, fluid retention, contour definition',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Rapid Edema Reduction', description: 'Clears trapped extracellular fluid from the periorbital and jaw areas.' },
      { title: 'Cellular Detoxification', description: 'Carries cellular metabolic waste away from dermal matrices.' },
      { title: 'Enhanced Micro-Circulation', description: 'Brings fresh oxygen and nutrient-rich blood to the upper dermis.' }
    ],
    approachHeading: 'Gentle Biological Restoration.',
    approachParagraphs: [
      'Unlike deep tissue massages that can stretch delicate facial ligaments, our lymphatic therapy uses feather-light pressure calibrated precisely to the thin-walled lymphatic vessels just beneath the skin.'
    ],
    results: {
      format: 'quote',
      quote: 'I had heavy under-eye puffiness and a sluggish look after travelling. The lymphatic drainage treatment sculpted my jawline and completely awakened my face.',
      attribution: 'Patient, 22Luna Care Program'
    },
    faqs: [
      { question: 'Why does lymphatic drainage require light pressure?', answer: 'Lymphatic vessels are located directly below the skin surface. Heavy pressure collapses them, whereas light rhythmic strokes gently propel the fluid forward.' },
      { question: 'How long do the de-puffing results last?', answer: 'Results are immediately visible and typically last 3 to 5 days, longer with regular sessions and good hydration.' }
    ],
    actives: ['Squalane Oil', 'Green Tea Extract', 'Arnica Montana', 'Caffeine'],
    technology: 'Mechanical Vacuum & Cryo Drainage'
  }
};
