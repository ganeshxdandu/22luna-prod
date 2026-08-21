import type { TreatmentData } from '../treatment-data';

export const ENERGY_LASERS_DATA: Record<string, TreatmentData> = {
  'laser-hair-reduction': {
    slug: 'laser-hair-reduction',
    name: 'Laser Hair Reduction',
    tagline: 'Medical-grade diode and triple-wavelength laser technology with integrated contact cooling for permanent hair clearance.',
    category: 'Skin',
    snapshot: {
      duration: '15 – 60 minutes (depending on area)',
      comfortLevel: 'Virtually painless (integrated ice-cool sapphire tip)',
      downtime: 'Zero (mild erythema for 1–2 hours)',
      visibleResults: 'Significant reduction after 2–3 sessions; 85–95% clearance in 6–8 sessions',
      suitableFor: 'All skin types (Fitzpatrick I–VI), face, underarms, bikini, full body',
      sessions: '6 to 8 sessions spaced 4 to 6 weeks apart',
    },
    introHeading: 'Permanent Follicular Neutralization.\nIce-Cool Comfort.',
    introLabel: 'MEDICAL LASER HAIR REDUCTION',
    introParagraphs: [
      'Laser Hair Reduction at 22Luna utilizes gold-standard medical diode and multi-wavelength laser technology that selectively targets the melanin chromophore within active hair follicles.',
      'Equipped with sub-zero sapphire contact cooling, the laser destroys the follicle’s germinative matrix via selective photothermolysis without damaging surrounding epidermal tissue, ensuring safe, pain-free treatments across all skin tones.'
    ],
    whyChooseItems: [
      { title: 'Sub-Zero Sapphire Cooling', description: 'Continuous chilling at 4°C eliminates stinging and ensures maximum skin comfort.' },
      { title: 'Melanin-Safe for Deep Tones', description: 'Calibrated pulse durations safely treat Fitzpatrick IV–VI skin without hyperpigmentation risk.' },
      { title: 'Fast In-Motion Gliding Delivery', description: 'High repetition rate covers large areas (legs, back, arms) in fraction of the time.' }
    ],
    suitability: {
      idealFor: [
        'Unwanted hair on face, upper lip, chin, underarms, bikini, legs, back, chest',
        'Chronic ingrown hairs, folliculitis, and shaving bumps',
        'Coarse or dense hair needing long-term reduction',
        'Sensitive skin prone to razor burns and waxing irritation'
      ],
      advisedAgainst: [
        'White, grey, or very light blonde hair (lacks melanin chromophore)',
        'Active suntan or recent sunburn within 2 weeks',
        'Pregnancy (due to hormonal unpredictability)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Area Grid Mapping', description: 'The treatment area is cleansed, checked, and marked into precise grids for 100% coverage.' },
      { number: '02', label: 'Chilled Optical Gel', description: 'A hypoallergenic conductive gel is applied to facilitate smooth gliding and cooling.' },
      { number: '03', label: 'Laser Pulses', description: 'The sapphire laser handpiece glides over grids, delivering uniform thermal pulses into follicles.' },
      { number: '04', label: 'Soothing Barrier Seal', description: 'Gel is wiped away and an anti-inflammatory zinc and aloe vera barrier is applied.' }
    ],
    journey: [
      { id: 'before', label: 'Preparation', points: ['Shave the area closely 12–24h prior', 'Do not wax, pluck, or thread for 4 weeks prior'] },
      { id: 'during', label: 'In Clinic', points: ['Cold sensation with mild rubber-band snaps', 'Fast and comfortable session'] },
      { id: 'after', label: 'Immediate', points: ['Slight follicular pinkness resolves in 1–2 hours', 'Avoid hot showers or saunas for 24h'] },
      { id: 'recovery', label: 'Hair Shedding', points: ['Treated hairs shed naturally over 10–14 days', 'Noticeably slower, finer regrowth'] }
    ],
    quickFacts: {
      duration: '15 to 60 minutes',
      comfort: 'High (ice-cooling technology)',
      anaesthesia: 'None needed',
      downtime: 'Zero',
      visibleResults: 'Slower, sparser growth after session 1',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '6 to 8 sessions',
      bestFor: 'Ingrowns, unwanted body/facial hair',
      suitableSkinTypes: 'All Fitzpatrick skin types (I to VI)'
    },
    benefits: [
      { title: 'Permanent Follicular Reduction', description: 'Permanently reduces 85% to 95% of active terminal hair growth.' },
      { title: 'Eliminates Ingrown Hairs', description: 'Destroys the hair bulb, completely curing painful razor bumps and folliculitis.' },
      { title: 'Silky Texture & Zero Shaving', description: 'Eliminates strawberry legs, dark hair shadows, and the need for frequent shaving.' }
    ],
    approachHeading: 'Medical-Grade Efficacy.',
    approachParagraphs: [
      'We use high-power medical laser platforms rather than weak cosmetic IPL devices, ensuring deeper follicular penetration, fewer sessions, and permanent hair clearance.'
    ],
    results: {
      format: 'quote',
      quote: 'I used to suffer from severe ingrown hairs on my legs after every waxing session. After 5 laser sessions at 22Luna, my legs are completely smooth and hair-free!',
      attribution: 'Patient, 22Luna Laser Program'
    },
    faqs: [
      { question: 'Is laser hair reduction permanent?', answer: 'Yes. Once a hair follicle in the active growth (anagen) phase is destroyed, it cannot regrow. Occasional maintenance sessions (1–2 per year) handle new dormant follicles stimulated by hormonal shifts.' },
      { question: 'Why do I need multiple sessions?', answer: 'Hair grows in cycles (anagen, catagen, telogen). Lasers only destroy follicles in the active anagen phase. Spacing sessions 4–6 weeks apart ensures every follicle is caught at its vulnerable stage.' },
      { question: 'Does diode laser hurt?', answer: 'No. Our contact cooling chills the skin surface to 4°C, turning what used to be a painful procedure into a comfortable, cool gliding sensation.' }
    ],
    actives: ['Zinc Oxide', 'Aloe Vera', 'Centella Asiatica'],
    technology: 'Triple-Wavelength Medical Diode Laser with Sub-Zero Cooling'
  },

  'microneedling-rf': {
    slug: 'microneedling-rf',
    name: 'Micro-Needling / Advanced Micro Needling with Radiofrequency',
    tagline: 'Fractional radiofrequency microneedling to remodel deep dermal scars, tighten skin laxity, and rebuild structural collagen.',
    category: 'Skin',
    snapshot: {
      duration: '60 minutes (includes 25 mins topical numbing)',
      comfortLevel: 'Comfortable with medical-grade numbing cream',
      downtime: '24 to 48 hours of mild pinkness (sunburn sensation)',
      visibleResults: 'Immediate skin tightness; deep scar remodelling over 6–12 weeks',
      suitableFor: 'Acne scars (boxcar, rolling, icepick), large pores, skin laxity, stretch marks',
      sessions: '3 to 5 sessions spaced 4 to 6 weeks apart',
    },
    introHeading: 'Deep Dermal Remodelling.\nFractional Collagen Synthesis.',
    introLabel: 'RADIOFREQUENCY MICRONEEDLING',
    introParagraphs: [
      'RF Microneedling at 22Luna combines the mechanical collagen stimulation of insulated gold micro-needles with targeted radiofrequency thermal energy delivered directly into the reticular dermis.',
      'By heating deep dermal layers while sparing the delicate epidermis, this advanced technology breaks up fibrotic acne scar bands, contracts lax collagen fibers, and triggers massive neo-collagenesis.'
    ],
    whyChooseItems: [
      { title: 'Gold-Insulated Precision Needles', description: 'Protects the surface skin from burns while delivering heat only at the tip in deep dermis.' },
      { title: 'Adjustable Depth Technology', description: 'Depth calibrated from 0.5mm to 3.5mm depending on scar thickness and tissue density.' },
      { title: 'Safe for Indian Melanin Profiles', description: 'Zero risk of post-inflammatory hyperpigmentation compared to aggressive ablative lasers.' }
    ],
    suitability: {
      idealFor: [
        'Depressed acne scars (rolling, boxcar, and pick scars)',
        'Enlarged open pores and rough uneven texture',
        'Mild lower-face skin laxity and early jowling',
        'Fine lines around eyes, neck bands, and stretch marks'
      ],
      advisedAgainst: [
        'Active pustular cystic acne breakouts in the area',
        'Pacemakers or implanted electrical devices (due to RF energy)',
        'Recent isotretinoin use within past 3 months'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Compounded Numbing', description: 'Prescription-strength lidocaine/tetracaine cream is applied for 25 minutes.' },
      { number: '02', label: 'Micro-Needle Penetration', description: 'Motorized gold-plated needles enter the dermis at sub-millimeter precision.' },
      { number: '03', label: 'Thermal RF Release', description: 'Fractional radiofrequency pulses heat tissue to 60°C, triggering collagen contraction.' },
      { number: '04', label: 'Stem-Cell Peptide Seal', description: 'Regenerative exosomes or peptide serums are locked onto open micro-channels.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Stop retinoids 3 days before', 'Arrive clean-faced for numbing'] },
      { id: 'during', label: 'In Procedure', points: ['Pressure and warm snapping sensation', 'Completely manageable with numbing'] },
      { id: 'after', label: 'Day 1–2', points: ['Mild pink flushing (like a light sunburn)', 'Apply prescribed healing barrier balm'] },
      { id: 'recovery', label: 'Collagen Peak', points: ['Skin feels tight and smooth in 7 days', 'Scars lift and fill progressively over 3 months'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Comfortable with topical numbing',
      anaesthesia: 'Compounded topical cream',
      downtime: '1 to 2 days mild redness',
      visibleResults: 'Progressive improvement over 4 to 12 weeks',
      returnToRoutine: '24 hours (makeup safe after 24h)',
      sessionsNeeded: '3 to 5 sessions',
      bestFor: 'Acne scars, large pores, skin tightening',
      suitableSkinTypes: 'All skin types and tones'
    },
    benefits: [
      { title: 'Acne Scar Subcision Effect', description: 'Thermal energy releases anchored scar fibrotic bands and fills depressions.' },
      { title: 'Substantial Pore Tightening', description: 'Shrinks dilated pore walls by thickening surrounding collagen scaffolding.' },
      { title: 'Dermal Elasticity Restoration', description: 'Stimulates long-term production of both type I collagen and resilient elastin fibers.' }
    ],
    approachHeading: 'Depth Without Surface Trauma.',
    approachParagraphs: [
      'Unlike traditional ablative lasers that strip the outer skin and require weeks of peeling, RF microneedling works from within, delivering superior scar remodelling with just 24 hours of mild pinkness.'
    ],
    results: {
      format: 'quote',
      quote: 'I had deep rolling acne scars on my cheeks for years. After 3 sessions of RF microneedling at 22Luna, my scar depth reduced by at least 70% and my pores look invisible.',
      attribution: 'Patient, 22Luna Scar Remodelling Program'
    },
    faqs: [
      { question: 'How is RF microneedling different from standard microneedling (Dermapen)?', answer: 'Standard microneedling only creates mechanical punctures. RF microneedling adds radiofrequency heat at the needle tips, which tightens lax tissue, coagulates deep scar tissue, and stimulates 3x more collagen.' },
      { question: 'When will I see the full acne scar improvement?', answer: 'Initial skin glow is visible in 1 week. True scar lifting and collagen remodelling takes 6 to 12 weeks as new collagen fibers mature.' }
    ],
    actives: ['Growth Factor Peptides', 'Copper Tripeptide-1', 'Hyaluronic Acid'],
    technology: 'Fractional Radiofrequency Insulated Microneedling'
  },

  'prp-skin': {
    slug: 'prp-skin',
    name: 'PRP (Platelet-Rich Plasma)',
    tagline: 'Autologous platelet growth factor micro-infusion to accelerate cellular healing, boost collagen, and restore under-eye radiance.',
    category: 'Skin',
    snapshot: {
      duration: '60 minutes (includes blood processing & numbing)',
      comfortLevel: 'Comfortable with topical numbing',
      downtime: '12 to 24 hours of mild pinkness',
      visibleResults: 'Skin glow in 7 days; texture and elasticity in 4–6 weeks',
      suitableFor: 'Under-eye dark circles, crepey skin, fine lines, dullness',
      sessions: '3 to 4 sessions spaced 4 weeks apart',
    },
    introHeading: 'Autologous Growth Factors.\nPure Biological Rejuvenation.',
    introLabel: 'PLATELET-RICH PLASMA (PRP)',
    introParagraphs: [
      'Skin PRP at 22Luna is a 100% natural, autologous regenerative therapy. A small sample of your own blood is processed in a high-speed centrifuge to isolate concentrated platelets rich in active growth factors (PDGF, VEGF, TGF-β).',
      'When micro-injected into the dermis or periorbital area, these growth factors stimulate stem cells, accelerate micro-vascular repair, and prompt fibroblasts to rebuild dense, youthful collagen.'
    ],
    whyChooseItems: [
      { title: '100% Biocompatible & Natural', description: 'Derived entirely from your own blood with zero risk of allergic reaction or synthetic additives.' },
      { title: 'High-Concentration Centrifugation', description: 'Dual-spin protocol isolates 4x to 6x platelet concentration for maximum growth factor delivery.' },
      { title: 'Periorbital Dark Circle Focus', description: 'Exceptional for thickening fragile under-eye skin and reducing dark periorbital circles.' }
    ],
    suitability: {
      idealFor: [
        'Dark, tired under-eye circles and periorbital hollowing',
        'Fine lines, crepey skin texture, and loss of dermal elasticity',
        'Dull, sallow skin in need of biological revitalization',
        'Post-acne textural irregularities and healing support'
      ],
      advisedAgainst: [
        'Blood platelet disorders or active anticoagulant therapy',
        'Active systemic infections or facial skin infections'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Blood Collection', description: 'A small 10ml blood sample is drawn comfortably from your arm into sterile vacuum tubes.' },
      { number: '02', label: 'Double Centrifugation', description: 'Tubes are spun to separate red blood cells and isolate pure platelet-rich plasma.' },
      { number: '03', label: 'Topical Numbing & Prep', description: 'Target skin areas are numbed for 20 minutes with medical-grade lidocaine.' },
      { number: '04', label: 'Targeted Micro-Injections', description: 'PRP is micro-injected into the under-eye and facial dermis using ultra-fine 32G needles.' }
    ],
    journey: [
      { id: 'before', label: 'Hydration', points: ['Drink plenty of water before your appointment', 'Avoid anti-inflammatories for 3 days prior'] },
      { id: 'during', label: 'Procedure', points: ['Blood draw takes 2 mins; processing 15 mins', 'Micro-injections feel like tiny taps'] },
      { id: 'after', label: 'Immediate', points: ['Mild swelling and redness for 12–24h', 'Do not wash face for 6 hours to let growth factors absorb'] },
      { id: 'recovery', label: 'Results', points: ['Skin appears rested in 1 week', 'Cellular thickening continues over 2–3 months'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Comfortable (topical numbing used)',
      anaesthesia: 'Topical lidocaine cream',
      downtime: '12 to 24 hours',
      visibleResults: 'Progressive over 4 to 8 weeks',
      returnToRoutine: 'Next day',
      sessionsNeeded: '3 to 4 sessions',
      bestFor: 'Under-eye circles, fine lines, cellular glow',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Under-Eye Dermal Thickening', description: 'Thickens the paper-thin periorbital skin, hiding dark underlying blood vessels.' },
      { title: 'Endogenous Collagen Stimulation', description: 'Growth factors signal fibroblasts to generate fresh new dermal matrix.' },
      { title: 'Cellular Vitality & Glow', description: 'Improves micro-capillary circulation for a healthy, oxygenated skin tone.' }
    ],
    approachHeading: 'Your Body’s Own Healing Power.',
    approachParagraphs: [
      'PRP harnesses the exact growth factors your body uses to heal cuts and wounds. By concentrating them and delivering them to aging skin, we activate deep biological repair without foreign chemicals.'
    ],
    results: {
      format: 'quote',
      quote: 'My persistent dark circles and crepey under-eye skin had bothered me for years. After 3 PRP sessions, the skin under my eyes looks noticeably thicker, brighter, and rested.',
      attribution: 'Patient, 22Luna PRP Program'
    },
    faqs: [
      { question: 'Is PRP safe?', answer: 'PRP is one of the safest aesthetic treatments because it uses your own blood. There is zero risk of rejection, allergic reaction, or granuloma formation.' },
      { question: 'How is PRP different from dermal fillers for under-eyes?', answer: 'Fillers physically fill volume hollows using synthetic hyaluronic gel. PRP thickens the skin biologically and stimulates new collagen, improving skin quality, darkness, and fine wrinkles.' }
    ],
    actives: ['Autologous Platelet Growth Factors (PDGF, VEGF, EGF, TGF-β)'],
    technology: 'Dual-Spin Biological PRP Centrifugation'
  },

  'skin-tightening': {
    slug: 'skin-tightening',
    name: 'Skin Tightening',
    tagline: 'Non-invasive multi-polar radiofrequency and magnetic pulse energy to lift lax skin, smooth wrinkles, and stimulate elastin.',
    category: 'Skin',
    snapshot: {
      duration: '45 – 60 minutes',
      comfortLevel: 'Pleasant & soothing (feels like a warm stone massage)',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate thermal lift; cumulative firmness over 6–8 weeks',
      suitableFor: 'Mild to moderate skin laxity, jawline softening, neck crepiness',
      sessions: '4 to 6 sessions spaced 2 weeks apart',
    },
    introHeading: 'Thermal Dermal Remodelling.\nNon-Invasive Collagen Contraction.',
    introLabel: 'RADIOFREQUENCY SKIN TIGHTENING',
    introParagraphs: [
      'Skin Tightening at 22Luna utilizes advanced multi-polar radiofrequency technology (Forma / Venus Freeze) to deliver therapeutic thermal energy deep into the dermal collagen matrix.',
      'By heating collagen fibers to precisely 41°C–43°C, the treatment triggers immediate triple-helix collagen contraction while stimulating fibroblasts to synthesize new structural elastin over subsequent weeks.'
    ],
    whyChooseItems: [
      { title: 'Real-Time Temperature Monitoring', description: 'Thermal feedback sensors ensure optimal clinical heating without any risk of surface burns.' },
      { title: 'Completely Pain-Free & Relaxing', description: 'Feels like a soothing hot stone facial massage with zero needles or recovery.' },
      { title: 'Instant Event-Ready Lift', description: 'Immediate collagen contraction makes it a favored pre-red-carpet treatment.' }
    ],
    suitability: {
      idealFor: [
        'Mild to moderate skin laxity around jawline and neck',
        'Nasolabial softness and early cheek sagging',
        'Fine lines around the eyes and mouth',
        'Post-weight loss facial skin tightening'
      ],
      advisedAgainst: [
        'Severe skin redundancy with heavy fat pockets (better suited for surgical lifting)',
        'Implanted electronic devices / metal plates in the facial region'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Conductive Gel Application', description: 'A protective glycerin lotion is applied to allow smooth glide and uniform thermal distribution.' },
      { number: '02', label: 'Thermal Ramp-Up', description: 'Multi-polar RF handpiece glides over facial vectors until target temperature (42°C) is reached.' },
      { number: '03', label: 'Sustained Thermal Window', description: 'Heat is maintained for 10–15 minutes per zone to stimulate optimal collagen contraction.' },
      { number: '04', label: 'Cooling & Moisture Lock', description: 'Gel is cleansed and an antioxidant firming serum is massaged into freshly tightened skin.' }
    ],
    journey: [
      { id: 'before', label: 'Setup', points: ['Arrive clean-faced and hydrated', 'Remove metal jewelry'] },
      { id: 'during', label: 'Experience', points: ['Warm, relaxing sensation across facial contours', 'Zero pain or discomfort'] },
      { id: 'after', label: 'Immediate', points: ['Skin appears flushed and noticeably lifted', 'Resume routine immediately'] },
      { id: 'recovery', label: 'Cumulative', points: ['Collagen builds progressively over 6–8 weeks', 'Maintain with quarterly booster sessions'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Extremely comfortable (warm sensation)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Immediate glow & lift; peak firmness at 6 weeks',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4 to 6 sessions',
      bestFor: 'Mild skin laxity, jawline firmness, neck lines',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Instant Collagen Contraction', description: 'Heat immediately tightens and contracts existing collagen triple-helices.' },
      { title: 'Long-Term Fibroblast Activation', description: 'Triggers long-term cellular synthesis of new collagen and elastin networks.' },
      { title: 'Zero Needles or Recovery', description: 'Achieve noticeable contour firmness with no bruising, cuts, or downtime.' }
    ],
    approachHeading: 'Gentle Thermal Stimulation.',
    approachParagraphs: [
      'We believe preventative tightening keeps skin firm and bouncy without aggressive interventions. Regular thermal remodelling keeps collagen dense and resilient against gravity.'
    ],
    results: {
      format: 'quote',
      quote: 'Skin tightening at 22Luna is my secret before any big event. It lifts my jawline, smooths my neck, and gives an instant sculpted tightness that feels amazing.',
      attribution: 'Patient, 22Luna Tightening Program'
    },
    faqs: [
      { question: 'Does radiofrequency skin tightening hurt?', answer: 'Not at all. It feels like a soothing warm massage. Many of our patients fall asleep during the session.' },
      { question: 'How many sessions do I need for lasting results?', answer: 'A full series of 4 to 6 sessions spaced 2 weeks apart yields optimal collagen remodelling, which typically lasts 12 months with occasional maintenance.' }
    ],
    actives: ['Peptides', 'Hyaluronic Acid', 'Antioxidant Complex'],
    technology: 'Multi-Polar Radiofrequency with Real-Time Thermal Sensing'
  },

  'skin-resurfacing': {
    slug: 'skin-resurfacing',
    name: 'Skin Resurfacing',
    tagline: 'Fractional non-ablative laser resurfacing to replace damaged epidermal tissue, refine deep texture, and erase stubborn sun spots.',
    category: 'Skin',
    snapshot: {
      duration: '45 – 60 minutes',
      comfortLevel: 'Comfortable with topical numbing',
      downtime: '2 to 4 days of mild bronzing / micro-crusting',
      visibleResults: 'Baby-smooth texture and clarity in 7 to 10 days',
      suitableFor: 'Deep textural pitting, stubborn sun damage, fine lines, age spots',
      sessions: '3 to 4 sessions spaced 4 weeks apart',
    },
    introHeading: 'Fractional Optical Resurfacing.\nComplete Epidermal Renewal.',
    introLabel: 'FRACTIONAL LASER RESURFACING',
    introParagraphs: [
      'Skin Resurfacing at 22Luna employs fractional laser technology (1550nm/1927nm Erbium Glass) that creates thousands of microscopic thermal treatment zones (MTZs) deep in the epidermis and upper dermis.',
      'By treating only a fraction of the tissue at a time, surrounding healthy skin accelerates rapid healing, extruding old sun-damaged pigmentation and replacing rough texture with fresh, immaculate skin cells.'
    ],
    whyChooseItems: [
      { title: 'Fractional Micro-Beam Precision', description: 'Treats micro-columns of skin, leaving surrounding tissue intact for rapid 48-hour recovery.' },
      { title: 'Dual-Wavelength Capabilities', description: '1927nm targets superficial pigmentation; 1550nm penetrates deep for textural lines.' },
      { title: 'Minimal Thermal Scatter', description: 'Safe for Indian skin types when calibrated with exact cooling and pulse widths.' }
    ],
    suitability: {
      idealFor: [
        'Persistent sun spots, freckles, and solar lentigines',
        'Rough, weathered, or leathery skin texture',
        'Fine lines around the eyes, perioral area, and cheeks',
        'Superficial acne scarring and enlarged pore architecture'
      ],
      advisedAgainst: [
        'Active melasma flare-up (requires non-thermal laser toning first)',
        'Recent unprotected sun exposure or active tan',
        'History of keloid scarring'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Topical Anesthetic', description: 'Prescription numbing cream is applied for 30 minutes for comfortable delivery.' },
      { number: '02', label: 'Optical Grid Scanning', description: 'Laser handpiece scans across the face, depositing millions of microscopic thermal columns.' },
      { number: '03', label: 'Integrated Cold Air', description: 'Continuous chilled air (Zimmer cooler) cools the skin surface during each pass.' },
      { number: '04', label: 'Barrier Infusion Mask', description: 'Post-laser calming barrier mask is applied to immediately dissipate residual warmth.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Strict sun avoidance 2 weeks prior', 'Stop active acids/retinol 4 days before'] },
      { id: 'during', label: 'Procedure', points: ['Warm prickling sensation cooled by cold air stream', 'Takes 25–30 minutes'] },
      { id: 'after', label: 'Days 1–3', points: ['Skin appears lightly bronzed with microscopic sandpaper texture', 'Do not scrub or exfoliate'] },
      { id: 'recovery', label: 'Day 5–7', points: ['Micro-crusts shed naturally revealing brand new baby-soft skin', 'Wear SPF 50+ daily'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Comfortable with numbing',
      anaesthesia: 'Topical lidocaine cream',
      downtime: '2 to 4 days mild sandpaper texture',
      visibleResults: 'Brand new radiant skin in 7 days',
      returnToRoutine: '2 to 3 days (mineral makeup safe after 48h)',
      sessionsNeeded: '3 to 4 sessions',
      bestFor: 'Texture, sun damage, stubborn age marks',
      suitableSkinTypes: 'Fair to medium skin tones (customized for deeper tones)'
    },
    benefits: [
      { title: 'Replaces Sun-Damaged Cells', description: 'Extrudes old melanocyte clusters, clearing years of accumulated UV damage.' },
      { title: 'Dramatic Texture Refinement', description: 'Smooths out rough patches, shallow scars, and stubborn enlarged pores.' },
      { title: 'Stimulates Deep Collagen', description: 'Thermal injury columns trigger long-term collagen tightening in the papillary dermis.' }
    ],
    approachHeading: 'Modern Fractional Science.',
    approachParagraphs: [
      'Traditional CO2 lasers carried weeks of oozing and raw downtime. Our modern fractional non-ablative approach delivers 80% of the resurfacing benefit with just a couple days of light bronzing.'
    ],
    results: {
      format: 'quote',
      quote: 'My skin had significant sun damage and rough texture from years outdoors. After two resurfacing sessions at 22Luna, my face feels baby-soft and completely even-toned.',
      attribution: 'Patient, 22Luna Laser Program'
    },
    faqs: [
      { question: 'What does the skin feel like after laser resurfacing?', answer: 'For the first 2–4 days, your skin will feel slightly warm like a sunburn and develop a subtle sandpaper-like texture as microscopic treated cells prepare to shed.' },
      { question: 'Can I wear makeup after the procedure?', answer: 'You should avoid makeup for the first 48 hours to allow the micro-channels to close. Mineral sunscreen and makeup are safe starting day 3.' }
    ],
    actives: ['Ceramide Complex', 'Squalane', 'Centella Asiatica', 'Mineral Zinc Oxide'],
    technology: 'Fractional Non-Ablative Erbium Laser with Dynamic Cold Air Cooling'
  },

  'q-switched-laser': {
    slug: 'q-switched-laser',
    name: 'Q Switched Nd:YAG Laser for Skin Rejuvenation / Tattoo Removal / Treatment of Veins / Carbon Peel Facial',
    tagline: 'High-speed nanosecond acoustic photo-acoustic laser to shatter deep pigmentation, clear tattoos, and refine pores with Hollywood Carbon Peels.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Mild tingling or light snap sensation',
      downtime: 'Zero (slight pinkness for 1 hour for toning/carbon; 2–4 days for tattoo removal)',
      visibleResults: 'Instant porcelain glow with carbon peel; progressive pigment clearance over 4–6 sessions',
      suitableFor: 'Melasma, stubborn freckles, tattoo removal, enlarged pores, acne marks',
      sessions: '4 to 6 sessions spaced 2 to 4 weeks apart',
    },
    introHeading: 'Photo-Acoustic Shockwave.\nPigment Fragmentation & Porcelain Clarity.',
    introLabel: 'Q-SWITCHED ND:YAG LASER',
    introParagraphs: [
      'The Q-Switched Nd:YAG Laser at 22Luna utilizes ultra-short nanosecond pulses (1064nm and 532nm) that deliver massive acoustic shockwaves rather than thermal heat.',
      'This photo-acoustic effect shatters deep dermal pigment clusters, ink particles, and melanosomes into microscopic dust without burning the surrounding skin. When combined with liquid carbon lotion (Hollywood Carbon Peel), it purges pore impurities and delivers an instant luminous porcelain glow.'
    ],
    whyChooseItems: [
      { title: 'Acoustic Shockwave Technology', description: 'Destroys pigment mechanically without heat buildup, making it 100% safe for melasma.' },
      { title: 'Hollywood Carbon Peel Protocol', description: 'Liquid carbon captures deep pore sebum before being vaporized by the laser.' },
      { title: 'Multi-Depth Wavelengths', description: '1064nm penetrates deep dermis; 532nm targets superficial freckles and red vascular marks.' }
    ],
    suitability: {
      idealFor: [
        'Hormonal melasma, dermal pigmentation, and stubborn dark marks',
        'Enlarged oily pores and active blackhead congestion (Carbon Peel)',
        'Unwanted professional and amateur decorative tattoos',
        'Superficial facial vascular veins and broken capillaries'
      ],
      advisedAgainst: [
        'Active open skin infection or cold sores',
        'Recent unprotected sun exposure within past 7 days'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Diagnostic Pigment Mapping', description: 'The depth of the pigment (epidermal vs. dermal) is determined using polarized light.' },
      { number: '02', label: 'Carbon Paste Application (Optional)', description: 'For rejuvenation, a medical-grade mineral carbon lotion is massaged into pores.' },
      { number: '03', label: 'Q-Switched Laser Passes', description: 'Rapid nanosecond acoustic pulses vaporize the carbon and fragment deep pigment granules.' },
      { number: '04', label: 'Calming Antioxidant Shield', description: 'A soothing tranexamic acid and zinc shield is locked over the clarified skin.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Avoid sun tanning 1 week prior', 'Arrive without makeup'] },
      { id: 'during', label: 'In Suite', points: ['Audible clicking sound as laser shatters pigment', 'Feels like mild rubber band snaps; no severe pain'] },
      { id: 'after', label: 'Immediate', points: ['Immediate porcelain clarity (Carbon Peel)', 'Zero downtime; apply mineral SPF'] },
      { id: 'recovery', label: 'Pigment Fade', points: ['Macrophage cells flush fragmented pigment over 2–4 weeks', 'Skin progressively brightens'] }
    ],
    quickFacts: {
      duration: '30 to 45 minutes',
      comfort: 'Comfortable (mild snapping sensation)',
      anaesthesia: 'None needed for toning/carbon; topical for tattoos',
      downtime: 'Zero for carbon/toning; 3 days for tattoo clearance',
      visibleResults: 'Instant glow with Carbon Peel; progressive pigment clearance',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4 to 6 sessions',
      bestFor: 'Melasma, carbon glow, tattoo removal, dark spots',
      suitableSkinTypes: 'All Fitzpatrick skin types (I to VI)'
    },
    benefits: [
      { title: 'Shatters Melanin Clusters', description: 'Micro-fragments deep pigment particles so white blood cells can flush them away.' },
      { title: 'Purges Sebaceous Pores', description: 'Carbon laser vaporization eliminates oxidized blackheads and tightens pore diameters.' },
      { title: 'Melasma-Safe Toning', description: 'Non-thermal acoustic energy treats hormonal melasma without triggering rebound pigmentation.' }
    ],
    approachHeading: 'Acoustic Precision Over Heat.',
    approachParagraphs: [
      'Heat is the enemy of melasma. By utilizing photo-acoustic mechanical pulses rather than thermal heat, our Q-Switched laser clears stubborn pigment safely without post-inflammatory darkening.'
    ],
    results: {
      format: 'quote',
      quote: 'The Carbon Peel before my sister’s wedding gave my skin an instant glass glow with zero downtime. My pores looked airbrushed and my dark marks vanished over my sessions.',
      attribution: 'Patient, 22Luna Laser Program'
    },
    faqs: [
      { question: 'What is the Hollywood Carbon Peel?', answer: 'A liquid carbon layer is applied to your skin, absorbing deep into pores. The Q-Switched laser is passed over the face, vaporizing the carbon, removing dead cells, clearing blackheads, and tightening pores instantly.' },
      { question: 'How many sessions are needed for tattoo removal?', answer: 'Amateur tattoos typically clear in 3 to 5 sessions, while dense professional ink requires 6 to 10 sessions spaced 6 weeks apart.' },
      { question: 'Is Q-Switched laser safe for melasma?', answer: 'Yes. In fact, low-fluence Q-Switched laser toning is the gold standard for dermal melasma because it destroys pigment without heat.' }
    ],
    actives: ['Medical Grade Activated Carbon', 'Tranexamic Acid', 'Glutathione', 'Niacinamide'],
    technology: 'Q-Switched Nd:YAG Dual-Wavelength Nanosecond Laser (1064nm / 532nm)'
  }
};
