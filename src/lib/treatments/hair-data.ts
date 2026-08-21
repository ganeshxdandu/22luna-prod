import type { TreatmentData } from '../treatment-data';

export const HAIR_CLINICAL_DATA: Record<string, TreatmentData> = {
  'prp-hair': {
    slug: 'prp-hair',
    name: 'PRP Hair Restoration',
    tagline: 'Autologous platelet growth factor micro-infusion into the follicular dermal papilla to halt shedding and stimulate dormant hair growth.',
    category: 'Hair',
    snapshot: {
      duration: '60 minutes (includes blood processing & scalp numbing)',
      comfortLevel: 'Comfortable with local topical numbing & cooling',
      downtime: 'Zero (avoid washing hair for 12 hours)',
      visibleResults: 'Reduced shedding in 4–6 weeks; new hair density in 12–16 weeks',
      suitableFor: 'Androgenetic alopecia, diffuse thinning, postpartum hair loss, receding temples',
      sessions: '4 sessions spaced 4 weeks apart + maintenance every 6 months',
    },
    introHeading: 'Autologous Follicular Activation.\nCellular Hair Density.',
    introLabel: 'PLATELET-RICH PLASMA FOR HAIR',
    introParagraphs: [
      'PRP Hair Restoration at 22Luna is a biologically advanced regenerative protocol for both men and women experiencing hair thinning, androgenetic miniaturization, or chronic shedding.',
      'By concentrating your own blood platelets to 4x–6x baseline and delivering concentrated growth factors (VEGF, PDGF, FGF, IGF-1) directly around weakened hair follicles, PRP re-establishes capillary blood flow, wakes up dormant follicles in the telogen phase, and prolongs the active anagen growing cycle.'
    ],
    whyChooseItems: [
      { title: 'High-Purity Double-Spin Protocol', description: 'Isolates maximum viable platelet concentration with zero red blood cell contamination.' },
      { title: 'Microneedle Grid Delivery', description: 'Delivers micro-doses at the exact depth of the follicular dermal papilla (2–3mm).' },
      { title: '100% Autologous & Drug-Free', description: 'Uses your body’s own natural growth proteins with zero systemic side effects.' }
    ],
    suitability: {
      idealFor: [
        'Early to moderate male and female pattern hair loss (Androgenetic Alopecia)',
        'Telogen effluvium and postpartum diffuse hair shedding',
        'Thinning crown, widening part-line, and receding hairline margins',
        'Post-hair transplant graft density enhancement'
      ],
      advisedAgainst: [
        'Complete scarring alopecia with absent hair follicles',
        'Severe thrombocytopenia or blood clotting disorders',
        'Active scalp infections or severe psoriasis flare-up'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Trichoscopy Scalp Scan', description: 'Digital high-magnification trichoscopy analyzes follicle diameter, density, and miniaturization.' },
      { number: '02', label: 'Blood Draw & Separation', description: 'A small 15ml blood sample is spun in a specialized centrifuge to isolate pure platelet-rich plasma.' },
      { number: '03', label: 'Scalp Desensitization', description: 'Topical anesthetic and localized cooling ensure completely comfortable injection points.' },
      { number: '04', label: 'Micro-Follicular Infusion', description: 'PRP is delivered across the thinning scalp grid using ultra-fine 32G micro-syringes.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Wash hair thoroughly before appointment', 'Drink plenty of water; avoid aspirin 48h prior'] },
      { id: 'during', label: 'Procedure', points: ['Takes roughly 45 minutes', 'Feels like light scalp pinpricks; very comfortable'] },
      { id: 'after', label: 'Immediate', points: ['Slight scalp tightness for 2–4 hours', 'Do not wash scalp or wear tight hats for 12 hours'] },
      { id: 'recovery', label: 'Growth Cycle', points: ['Shedding halts by week 4–6', 'Noticeable thicker hair shafts and new baby hairs at month 3'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Comfortable (local cooling and numbing)',
      anaesthesia: 'Topical & ice-cooling',
      downtime: 'Zero (resume normal work immediately)',
      visibleResults: 'Reduced shedding in 4 weeks; density in 12 weeks',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4 sessions spaced 4 weeks apart',
      bestFor: 'Hair thinning, hair loss, receding hairline',
      suitableSkinTypes: 'All candidates with active hair follicles'
    },
    benefits: [
      { title: 'Reverses Follicle Miniaturization', description: 'Thickens thin, fine vellus hairs into thick, pigmented terminal hair shafts.' },
      { title: 'Halts Excessive Daily Shedding', description: 'Shifts hair follicles out of the resting (telogen) phase back into the growth (anagen) phase.' },
      { title: 'Boosts Micro-Vascular Supply', description: 'VEGF growth factors stimulate new micro-capillary networks nourishing the hair root.' }
    ],
    approachHeading: 'Evidence-Based Trichology.',
    approachParagraphs: [
      'We combine PRP with digital trichoscopy tracking so you can visually see your hair shaft thickness and follicular unit density improve with photographic clinical proof at every session.'
    ],
    results: {
      format: 'quote',
      quote: 'My widening hair parting was making me so insecure. After 4 sessions of PRP at 22Luna, my shedding completely stopped and my hair feels significantly thicker and fuller.',
      attribution: 'Patient, 22Luna Hair Restoration'
    },
    faqs: [
      { question: 'Does PRP hurt on the scalp?', answer: 'We use localized cold air and topical numbing along with ultra-fine 32G needles, making the treatment very comfortable and well-tolerated.' },
      { question: 'When will I see new hair growth?', answer: 'Hair grows at approximately 1cm per month. You will first notice a significant reduction in hair fall at 4–6 weeks, followed by visible new hair density and shaft thickening around month 3 to 4.' },
      { question: 'How long do PRP hair results last?', answer: 'Results last 12 to 18 months. We recommend a single maintenance session every 6 months to maintain peak follicular vitality against genetic thinning.' }
    ],
    actives: ['Autologous Platelet Growth Factors (VEGF, PDGF, FGF, IGF-1)'],
    technology: 'Medical Double-Spin Platelet-Rich Plasma Centrifugation'
  },

  'scalp-rejuvenation': {
    slug: 'scalp-rejuvenation',
    name: 'Scalp Rejuvenation',
    tagline: 'Deep scalp microbiome detoxification, follicular micro-peeling, and peptide infusion to create the optimal environment for hair growth.',
    category: 'Hair',
    snapshot: {
      duration: '45 – 60 minutes',
      comfortLevel: 'Deeply relaxing & soothing',
      downtime: 'Zero downtime',
      visibleResults: 'Instant relief from itching, flaking, and oiliness; refreshed scalp vitality',
      suitableFor: 'Dandruff, oily scalp buildup, product accumulation, sluggish circulation',
      sessions: 'Monthly maintenance or as an adjunct before PRP therapy',
    },
    introHeading: 'Microbiome Balancing.\nFollicular Detoxification.',
    introLabel: 'SCALP PURIFICATION & NOURISHMENT',
    introParagraphs: [
      'Scalp Rejuvenation at 22Luna is a physician-grade scalp health protocol that treats the scalp like the delicate skin it is. Clogged follicular ostia and sebum buildup choke hair roots and restrict healthy growth.',
      'Using salicylic micro-exfoliation, high-frequency ozone therapy, and customized peptide infusions, this treatment eliminates dandruff flakes, balances the scalp microbiome, and stimulates micro-capillary circulation.'
    ],
    whyChooseItems: [
      { title: 'Deep Follicular Unclogging', description: 'Dissolves hardened sebum plugs and dead keratin build-up around hair root collars.' },
      { title: 'Antimicrobial Ozone High-Frequency', description: 'Eliminates Malassezia yeast and bacteria causing chronic scalp flaking and itch.' },
      { title: 'Peptide Root Infusion', description: 'Drenches the scalp in biotin, copper peptides, and saw palmetto botanical DHT blockers.' }
    ],
    suitability: {
      idealFor: [
        'Persistent dandruff, dry flaking, and scalp itching',
        'Excess sebum production and oily roots',
        'Product buildup from styling sprays, dry shampoos, and silicones',
        'Preparing the scalp prior to starting PRP or hair loss protocols'
      ],
      advisedAgainst: [
        'Open scalp wounds or severe bleeding psoriasis patches',
        'Recent chemical hair coloring within past 48 hours'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Trichoscopy Scalp Analysis', description: 'Digital magnification scans determine sebum level, flaking, and follicular plugging.' },
      { number: '02', label: 'Salicylic Scalp Exfoliation', description: 'A gentle clinical BHA solution breaks down dead flakes and clarifies the scalp barrier.' },
      { number: '03', label: 'Ozone High-Frequency Disinfection', description: 'High-frequency glass electrodes generate antibacterial ozone to calm micro-inflammation.' },
      { number: '04', label: 'Nutrient Peptide Steam Infusion', description: 'A nutrient-rich botanical peptide serum is infused with micro-steam hydration.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['No special prep needed', 'Relax in our tranquil hair care suite'] },
      { id: 'during', label: 'Session', points: ['Cooling scalp massage and soothing ozone sensations', 'Extremely relaxing'] },
      { id: 'after', label: 'Immediate', points: ['Scalp feels exceptionally clean, light, and refreshed', 'Hair feels soft with zero residue'] },
      { id: 'recovery', label: 'Long Term', points: ['Itch and flaking cleared', 'Optimal scalp foundation for hair growth'] }
    ],
    quickFacts: {
      duration: '50 minutes',
      comfort: 'Extremely relaxing',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Immediate clean scalp and flake reduction',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly or bi-weekly for active flaking',
      bestFor: 'Dandruff, scalp buildup, itchy scalp, hair prep',
      suitableSkinTypes: 'All scalp types'
    },
    benefits: [
      { title: 'Unclogs Follicular Openings', description: 'Clears suffocating sebum plugs allowing hair shafts to grow freely.' },
      { title: 'Eliminates Dandruff & Itch', description: 'Restores healthy pH and controls yeast overgrowth without harsh stripping.' },
      { title: 'Enhances Treatment Absorption', description: 'Prepares the scalp for 3x better absorption of topical serums and PRP growth factors.' }
    ],
    approachHeading: 'Healthy Scalp, Healthy Hair.',
    approachParagraphs: [
      'You cannot grow a healthy plant in congested soil. Our trichology approach prioritizes scalp microbiome health as the vital foundation for thick, dense hair growth.'
    ],
    results: {
      format: 'quote',
      quote: 'My chronic dandruff and itchy scalp vanished after two scalp rejuvenation sessions. My scalp feels breathable and my hair fall reduced noticeably!',
      attribution: 'Patient, 22Luna Scalp Care'
    },
    faqs: [
      { question: 'How often should I get a scalp rejuvenation treatment?', answer: 'For active dandruff or oily buildup, we recommend sessions every 2 to 3 weeks until balanced. For general hair health and maintenance, once a month is ideal.' },
      { question: 'Will this affect my hair color or keratin treatment?', answer: 'We recommend waiting 48 hours after coloring or keratin before having a scalp treatment to ensure your color is fully set.' }
    ],
    actives: ['Salicylic Acid', 'Copper Peptides', 'Saw Palmetto', 'Tea Tree Extract', 'Niacinamide'],
    technology: 'High-Frequency Ozone Phototherapy & Micro-Mist Infusion'
  },

  'scalp-oxy-therapy': {
    slug: 'scalp-oxy-therapy',
    name: 'Scalp Oxy Therapy',
    tagline: 'High-pressure hyperbaric oxygen and micronized nutrient mist infusion to energize dormant hair follicles and oxygenate the scalp.',
    category: 'Hair',
    snapshot: {
      duration: '45 minutes',
      comfortLevel: 'Pleasant & cooling sensation',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate scalp hydration, micro-circulation boost, and hair root revitalization',
      suitableFor: 'Stressed hair roots, sluggish scalp circulation, early thinning, dry scalp',
      sessions: '4 to 6 sessions spaced weekly',
    },
    introHeading: 'Hyperbaric Oxygenation.\nMicronized Nutrient Jet.',
    introLabel: 'HIGH-PRESSURE SCALP OXYGENATION',
    introParagraphs: [
      'Scalp Oxy Therapy at 22Luna uses medical-grade 98% pure pressurized hyperbaric oxygen to blast a supersonic mist of sterile saline, vitamins, and hair-stimulating peptides directly into the scalp pores.',
      'This non-needle jet-pressure technology delivers deep transdermal follicular infusion, accelerates cellular metabolic activity in dormant follicles, flushes toxins, and dramatically boosts scalp micro-circulation.'
    ],
    whyChooseItems: [
      { title: 'Non-Invasive Jet-Pressure Infusion', description: 'Supersonic jet stream delivers actives deep into hair roots with zero needles.' },
      { title: '98% Pure Hyperbaric Oxygen', description: 'Re-energizes hypoxic follicular cells and triggers micro-capillary oxygenation.' },
      { title: 'Instant Scalp Revitalization', description: 'Leaves the scalp invigorated, cool, and deeply nourished.' }
    ],
    suitability: {
      idealFor: [
        'Early hair thinning and sluggish follicular growth',
        'Dry, irritated, or dehydrated scalp conditions',
        'Stressed hair due to pollution, styling, and tight hairstyles',
        'Patients wanting needle-free hair restoration'
      ],
      advisedAgainst: [
        'Open scalp sores or acute weeping eczema'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Scalp Jet Cleansing', description: 'Pressurized oxygen and saline mist sweeps away dead debris and opens pores.' },
      { number: '02', label: 'Hyperbaric Oxygen Flow', description: 'Pure oxygen stream is applied in sections, flooding tissue with cellular energy.' },
      { number: '03', label: 'Micronized Peptide Jetting', description: 'Targeted hair peptides, zinc, and amino acids are blasted deep into follicular collars.' },
      { number: '04', label: 'Scalp Acupressure', description: 'A relaxing botanical massage stimulates scalp micro-lymphatics.' }
    ],
    journey: [
      { id: 'before', label: 'Setup', points: ['Come as you are', 'No special preparation needed'] },
      { id: 'during', label: 'Experience', points: ['Cool, refreshing breeze across the scalp', 'Deeply invigorating and comfortable'] },
      { id: 'after', label: 'Immediate', points: ['Scalp feels light, tingly, and energized', 'Hair is clean and voluminous at roots'] },
      { id: 'recovery', label: 'Benefits', points: ['Boosts daily follicular metabolism', 'Safe for weekly sessions'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Very high (cooling sensation)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Instant scalp refreshment and root lift',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4 to 6 weekly sessions',
      bestFor: 'Needle-free hair care, sluggish scalp circulation',
      suitableSkinTypes: 'All scalp types'
    },
    benefits: [
      { title: 'Transdermal Oxygenation', description: 'Supplies high-concentration oxygen directly to cellular mitochondria in hair bulbs.' },
      { title: 'Non-Needle Serum Penetration', description: 'Uses jet velocity to bypass the stratum corneum without piercing the skin.' },
      { title: 'Reduces Follicular Inflammation', description: 'Cools the scalp and soothes micro-vascular congestion.' }
    ],
    approachHeading: 'Pure Needle-Free Cellular Oxygenation.',
    approachParagraphs: [
      'Oxygen is essential for cellular division and hair synthesis. By delivering pure oxygen under calibrated pressure, we awaken sluggish follicles and restore vibrant scalp vitality without needles.'
    ],
    results: {
      format: 'quote',
      quote: 'The oxygen therapy feels incredible—like a cool blast of energy for your scalp. My hair feels much thicker at the roots and has so much natural volume now.',
      attribution: 'Patient, 22Luna Hair Program'
    },
    faqs: [
      { question: 'Does scalp oxygen therapy use needles?', answer: 'No! It is 100% needle-free. The actives and oxygen are delivered using a high-velocity pressurized jet stream.' },
      { question: 'Can I do this alongside PRP?', answer: 'Yes! Alternating Scalp Oxy Therapy with PRP provides the ultimate combination of biological growth factors and cellular oxygenation.' }
    ],
    actives: ['Pure Oxygen (98%)', 'Biotinoyl Tripeptide-1', 'Caffeine', 'Zinc PCA', 'Panthenol'],
    technology: 'Hyperbaric Transdermal Oxygen Jet Propulsion'
  },

  'hair-botox': {
    slug: 'hair-botox',
    name: 'Hair Botox',
    tagline: 'Deep reconstructive hair fiber conditioning and keratin amino-acid filler to repair damaged cuticles, eliminate frizz, and restore mirror shine.',
    category: 'Hair',
    snapshot: {
      duration: '75 – 90 minutes',
      comfortLevel: 'Deeply relaxing salon-sanctuary experience',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate mirror-like shine, frizz elimination, and silky strength',
      suitableFor: 'Frizzy, damaged, bleached, chemically treated, or heat-damaged hair',
      sessions: 'Single treatment, lasts 2 to 4 months',
    },
    introHeading: 'Fiber Reconstruction.\nMirror-Shine Smoothness.',
    introLabel: 'HAIR FIBER RECONSTRUCTION',
    introParagraphs: [
      'Hair Botox at 22Luna is an intensive, non-chemical deep conditioning reconstructor (containing no actual neurotoxins) that acts as a structural filler for damaged hair fibers.',
      'Formulated with low-molecular-weight keratin, amino acids, hyaluronic acid, argan oil, and collagen proteins, it penetrates deep into the hair cortex to fill in broken gaps, seal frayed cuticles, and eliminate frizz with zero formaldehyde.'
    ],
    whyChooseItems: [
      { title: '100% Formaldehyde-Free Safety', description: 'Zero toxic fumes, harsh chemical straighteners, or eye-burning aldehydes.' },
      { title: 'Preserves Natural Hair Texture', description: 'Smooths frizz and restores silky shine without flattening your natural curls or waves.' },
      { title: 'Deep Cortical Repair', description: 'Reconstructs structural disulfide and hydrogen bonds damaged by bleach and heat.' }
    ],
    suitability: {
      idealFor: [
        'Frizzy, unmanageable hair reacting to humidity and weather',
        'Bleached, colored, or heat-damaged porous hair shafts',
        'Dull, brittle hair with split ends lacking natural shine',
        'Curly or wavy hair needing frizz control without losing curl pattern'
      ],
      advisedAgainst: [
        'Extremely fragile hair undergoing active chemical bleaching on the same day'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Clarifying Cleansing', description: 'Hair is washed with an alkaline clarifying shampoo to open the cuticle scales.' },
      { number: '02', label: 'Botox Filler Infusion', description: 'The rich protein, amino acid, and hyaluronic formula is brushed evenly onto hair sections.' },
      { number: '03', label: 'Thermal Penetration Cap', description: 'Gentle warmth allows the micro-proteins to penetrate deep into the hair cortex for 30 minutes.' },
      { number: '04', label: 'Sealing Blowout & Polish', description: 'Hair is blown dry and sealed with calibrated low-temperature ceramic plates.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['No need to wash hair prior', 'Relax in our luxury sanctuary suite'] },
      { id: 'during', label: 'In Suite', points: ['Pleasant fragrance with zero burning fumes', 'Takes roughly 75–90 minutes'] },
      { id: 'after', label: 'Immediate', points: ['Hair is instantly transformed into silky, glass-like strands', 'Zero weight or greasy feeling'] },
      { id: 'recovery', label: 'Longevity', points: ['Use sulfate-free shampoo to maintain', 'Smoothness lasts 2 to 4 months'] }
    ],
    quickFacts: {
      duration: '90 minutes',
      comfort: 'Luxurious and pleasant',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Immediate mirror shine and frizz elimination',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 session every 3 to 4 months',
      bestFor: 'Frizzy, damaged, bleached hair, shine',
      suitableSkinTypes: 'All hair textures (straight, wavy, curly)'
    },
    benefits: [
      { title: 'Eliminates 90% of Frizz', description: 'Seals the porous outer cuticle so humidity cannot enter and puff up hair strands.' },
      { title: 'Restores Elasticity & Strength', description: 'Reinforces the internal cortex, drastically reducing breakage and split ends.' },
      { title: 'Luminous Mirror Reflection', description: 'Smooth, sealed cuticle layers reflect light for an immaculate glossy shine.' }
    ],
    approachHeading: 'Health Over Harsh Chemicals.',
    approachParagraphs: [
      'Traditional smoothening treatments use toxic formaldehyde that burns the eyes and permanently destroys your natural hair bonds. Our Hair Botox reconstructs the hair fiber purely through restorative proteins.'
    ],
    results: {
      format: 'quote',
      quote: 'My bleached, frizzy hair was dry as straw. After Hair Botox at 22Luna, it feels like liquid silk and I can let my hair air-dry without it blowing up into a frizzy cloud!',
      attribution: 'Patient, 22Luna Hair Program'
    },
    faqs: [
      { question: 'Is Hair Botox the same as Keratin treatment?', answer: 'No. Traditional keratin treatments often contain formaldehyde to chemically straighten hair, making it pin-straight. Hair Botox is 100% formaldehyde-free; it fills in damage and eliminates frizz while keeping your hair’s natural bounce and movement.' },
      { question: 'How long does Hair Botox last?', answer: 'With sulfate-free shampoo and proper care, the smoothing and shine benefits last between 2 to 4 months.' }
    ],
    actives: ['Hydrolyzed Keratin', 'Hyaluronic Acid', 'Argan Oil', 'Collagen Amino Acids', 'Vitamin B5'],
    technology: 'Thermal Amino-Protein Fiber Infusion'
  },

  'mens-laser-hair-removal': {
    slug: 'mens-laser-hair-removal',
    name: "Men's Laser Hair Removal",
    tagline: 'Targeted medical diode laser reduction designed specifically for coarse male hair on the back, chest, shoulders, and neck.',
    category: 'Hair',
    snapshot: {
      duration: '20 – 45 minutes',
      comfortLevel: 'Comfortable with contact sapphire cooling',
      downtime: 'Zero (slight pinkness for 1–2 hours)',
      visibleResults: 'Significant reduction after 2–3 sessions; 85–90% permanent clearance in 6–8 sessions',
      suitableFor: 'Chest, back, shoulders, neck beard lines, underarms, full body',
      sessions: '6 to 8 sessions spaced 4 to 6 weeks apart',
    },
    introHeading: 'Permanent Male Hair Reduction.\nClean Groomed Margins.',
    introLabel: 'MALE LASER HAIR REDUCTION',
    introParagraphs: [
      "Men's Laser Hair Removal at 22Luna is calibrated for the deeper follicular roots and thicker dermis characteristic of male hair growth.",
      'Utilizing high-power medical diode laser technology with continuous contact cooling, we safely neutralize dense hair on the chest, back, shoulders, and neck, eliminating painful ingrowns and folliculitis with permanent results.'
    ],
    whyChooseItems: [
      { title: 'High-Power Density for Coarse Roots', description: 'Deep penetration reaches deep-seated male hair bulbs without surface burns.' },
      { title: 'Sub-Zero Contact Tip', description: '4°C contact cooling makes treating dense chest and back hair comfortable.' },
      { title: 'Customized Density Goals', description: 'Full clearance or natural thinning/thinning out based on personal preference.' }
    ],
    suitability: {
      idealFor: [
        'Dense, coarse hair on back, shoulders, chest, and stomach',
        'Chronic neck folliculitis, razor bumps, and collar irritation',
        'Athletes, bodybuilders, and professionals wanting clean body grooming',
        'Excessive underarm sweating associated with dense hair'
      ],
      advisedAgainst: [
        'White or light grey hair (laser requires pigment chromophore)',
        'Active sunburn or intense UV tanning within 2 weeks'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Grid Marking', description: 'Treatment areas (chest/back) are measured and gridded for complete, uniform coverage.' },
      { number: '02', label: 'Cooling Gel Application', description: 'Chilled optical gel protects the skin surface and facilitates rapid gliding.' },
      { number: '03', label: 'Diode In-Motion Laser', description: 'High-repetition laser pulses heat and destroy active follicular germ centers.' },
      { number: '04', label: 'Cooling Barrier Relief', description: 'Gel is cleansed and an anti-inflammatory zinc and aloe cream is applied.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Shave treatment area 12–24h prior', 'Do not wax or pluck before visits'] },
      { id: 'during', label: 'Session', points: ['Fast 20–30 minute session for full back', 'Feels like mild rubber band snaps with cooling'] },
      { id: 'after', label: 'Immediate', points: ['Slight follicular redness fades in a few hours', 'Avoid hot showers/gym for 24h'] },
      { id: 'recovery', label: 'Shedding', points: ['Treated hairs fall out over 10–14 days', 'Regrowth becomes significantly thinner and sparser'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'High (chilled sapphire tip)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Noticeable reduction in 2–3 sessions',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '6 to 8 sessions',
      bestFor: 'Back, chest, shoulders, neck razor bumps',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Permanent Reduction of Dense Hair', description: 'Eliminates 85% to 90% of thick back, chest, and shoulder hair.' },
      { title: 'Stops Collar Razor Bumps', description: 'Permanently clears painful ingrown hair bumps on the lower neck collar zone.' },
      { title: 'Cooler, More Hygienic Grooming', description: 'Reduces trapped sweat, body odor, and post-workout skin irritation.' }
    ],
    approachHeading: 'Tailored for Men.',
    approachParagraphs: [
      'Whether you want complete hair-free clearance or simply to thin down excessive chest density for a natural, well-groomed look, we calibrate laser energy to your exact aesthetic goal.'
    ],
    results: {
      format: 'quote',
      quote: 'I hated having hair on my back and shoulders, and shaving gave me terrible bumps. The laser sessions at 22Luna were quick, comfortable, and my back is completely smooth now.',
      attribution: 'Patient, 22Luna Men’s Grooming'
    },
    faqs: [
      { question: 'Do I have to shave my back before coming?', answer: 'Yes, the area should be shaved 12 to 24 hours before your session so the laser energy focuses on the root beneath the skin rather than burning surface hair.' },
      { question: 'Can I just thin out my chest hair without being completely bald?', answer: 'Absolutely! We can perform 3 to 4 sessions to reduce density by 50–60%, leaving you with natural, lighter, well-groomed hair.' }
    ],
    actives: ['Zinc Oxide', 'Aloe Vera', 'Centella Asiatica'],
    technology: 'High-Power Medical Diode Laser with Sapphire Cooling'
  },

  'hair-loss-treatment': {
    slug: 'hair-loss-treatment',
    name: 'Hair Loss (Physician-Led Recovery)',
    tagline: 'Comprehensive physician-directed hair recovery protocols combining medical diagnostics, PRP, peptide mesotherapy, and botanical DHT blockers.',
    category: 'Hair',
    snapshot: {
      duration: '60 minutes per clinical protocol visit',
      comfortLevel: 'Comfortable and physician-monitored',
      downtime: 'Zero downtime',
      visibleResults: 'Halt in shedding in 30 days; measurable follicle thickening in 90 days',
      suitableFor: 'Genetic male/female pattern baldness, telogen effluvium, stress-induced thinning',
      sessions: 'Comprehensive 3 to 6 month clinical program',
    },
    introHeading: 'Physician-Led Hair Restoration.\nMulti-Pathway Cellular Protocol.',
    introLabel: 'CLINICAL HAIR LOSS PROGRAM',
    introParagraphs: [
      'Hair Loss Treatment at 22Luna is a holistic medical program directed by aesthetic physicians and trichology experts. Rather than guessing with random shampoos, we diagnose the exact biological drivers of your hair thinning.',
      'By addressing 5-alpha reductase DHT sensitivity, micro-vascular constriction, nutritional deficiencies, and follicular miniaturization simultaneously with PRP, peptide micro-infusions, and medical therapies, we rescue vulnerable follicles and restore lasting hair density.'
    ],
    whyChooseItems: [
      { title: 'Digital Trichoscopy Diagnostics', description: 'Precise baseline mapping of follicular density and miniaturization percentage.' },
      { title: 'Multi-Targeted Therapeutic Protocol', description: 'Combines biological growth factors, botanical DHT blockers, and micro-needling.' },
      { title: 'Personalized Oral & Topical Regimens', description: 'Prescription-strength evidence-based home therapies integrated into your plan.' }
    ],
    suitability: {
      idealFor: [
        'Progressive male pattern hair loss (Stages 1 to 5 Norwood)',
        'Female pattern diffuse thinning and widening center part (Ludwig scale)',
        'Chronic telogen effluvium following illness, stress, or weight loss',
        'Receding temples and thinning crown'
      ],
      advisedAgainst: [
        'Complete baldness with scarred, inactive follicles (better suited for hair transplant surgery)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Trichoscopy & Bloodwork Assessment', description: 'Digital magnification evaluates follicle health while checking ferritin, thyroid, and hormones.' },
      { number: '02', label: 'Biological Growth Factor Delivery', description: 'PRP and concentrated peptide factors are delivered directly into the dermal papilla.' },
      { number: '03', label: 'Laser Photobiomodulation', description: 'Low-level laser light energizes cellular ATP in weakened follicles.' },
      { number: '04', label: 'Home Protocol Calibration', description: 'Bespoke topical peptides, scalp serums, and nutritional support are prescribed.' }
    ],
    journey: [
      { id: 'before', label: 'Diagnosis', points: ['Comprehensive scalp scan and clinical history', 'Establish objective photographic baseline'] },
      { id: 'during', label: 'Month 1–2', points: ['Bi-weekly clinical stimulation visits', 'Excessive hair shedding stops'] },
      { id: 'after', label: 'Month 3–4', points: ['New vellus baby hairs emerge', 'Hair shafts noticeably thicken in diameter'] },
      { id: 'recovery', label: 'Month 6', points: ['Significant visual density and scalp coverage', 'Transition to maintenance phase'] }
    ],
    quickFacts: {
      duration: '60 minutes per session',
      comfort: 'Comfortable',
      anaesthesia: 'Topical numbing & cooling',
      downtime: 'Zero',
      visibleResults: 'Shedding stops in 1 month; density in 3–4 months',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '3 to 6 month comprehensive program',
      bestFor: 'Male & female pattern hair loss, diffuse thinning',
      suitableSkinTypes: 'All candidates with active hair roots'
    },
    benefits: [
      { title: 'Blocks Follicular Miniaturization', description: 'Protects vulnerable hair roots from DHT-induced follicle shrinking.' },
      { title: 'Restores Active Hair Growth Phase', description: 'Shifts dormant resting follicles back into the active anagen growing cycle.' },
      { title: 'Increases Hair Shaft Diameter', description: 'Transforms weak, wispy strands into thick, resilient, pigmented hair.' }
    ],
    approachHeading: 'Science Over Gimmicks.',
    approachParagraphs: [
      'Hair loss is a progressive medical condition that requires scientific intervention. We rely exclusively on clinically proven modalities to preserve and regenerate your natural hair.'
    ],
    results: {
      format: 'quote',
      quote: 'I was losing hair rapidly on my crown and temples. The structured hair program at 22Luna completely stopped my hair fall within a month, and by month 4 my crown had filled in with thick, healthy hair.',
      attribution: 'Patient, 22Luna Trichology Program'
    },
    faqs: [
      { question: 'Can hair loss be completely reversed?', answer: 'If your hair follicles are still active and miniaturized, our medical treatments can successfully thicken and revive them. If follicles have been completely absent for many years (smooth, shiny bald skin), a hair transplant is required.' },
      { question: 'Will I have to take medications forever?', answer: 'Our goal is to stabilize your hair naturally with in-clinic regenerative protocols and supportive topical therapies, minimizing the need for heavy long-term oral medications.' }
    ],
    actives: ['Polynucleotides', 'Saw Palmetto', 'Biotinoyl Tripeptide-1', 'Caffeine', 'Minoxidil (as indicated)'],
    technology: 'Multi-Modality PRP, Low-Level Laser Therapy (LLLT) & Trichoscopy'
  },

  'beard-shaping': {
    slug: 'beard-shaping',
    name: 'Beard Shaping',
    tagline: 'Precision laser hair reduction to outline crisp, permanent cheek and neck beard margins while eliminating painful shaving folliculitis.',
    category: 'Hair',
    snapshot: {
      duration: '15 – 20 minutes',
      comfortLevel: 'Comfortable with contact sapphire cooling',
      downtime: 'Zero (slight pinkness for 1 hour)',
      visibleResults: 'Crisp beard outlines in 3–5 sessions; zero razor bumps',
      suitableFor: 'Upper cheek stray hairs, lower neck collar area, throat beard lines',
      sessions: '5 to 6 sessions spaced 4 weeks apart',
    },
    introHeading: 'Architectural Facial Grooming.\nPermanently Crisp Beard Outlines.',
    introLabel: 'PRECISION LASER BEARD MAPPING',
    introParagraphs: [
      'Beard Shaping at 22Luna uses ultra-precise diode laser beam collimation to permanently define clean, sharp beard lines along the upper cheeks and lower neck.',
      'By removing scattered stray hairs above the cheekline and on the lower throat, this treatment eliminates the daily struggle of razor alignment, razor burns, and painful ingrown hair bumps forever.'
    ],
    whyChooseItems: [
      { title: 'Micro-Millimeter Margin Alignment', description: 'Laser is aligned to your natural cheekbone curvature or sharp angular preference.' },
      { title: 'Cures Neck Razor Bumps (Folliculitis)', description: 'Permanently destroys curved hair roots that cause painful ingrowns on the throat.' },
      { title: '5-Minute Express Sessions', description: 'Quick, virtually painless sessions that fit seamlessly into your lunch break.' }
    ],
    suitability: {
      idealFor: [
        'Stray hairs creeping high up on the cheekbones towards the eyes',
        'Irregular neck beard growth extending down the throat and collar line',
        'Chronic razor bumps, folliculitis, and dark marks from daily shaving',
        'Men wanting a permanently sharp, well-groomed beard outline'
      ],
      advisedAgainst: [
        'Light blonde, grey, or white beard hair (requires dark melanin pigment)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Beard Architecture Line Mapping', description: 'The physician or aesthetician marks your desired cheek and neck borders with a surgical pencil.' },
      { number: '02', label: 'Protective Barrier Shield', description: 'A protective guide ensures laser light touches only the stray hairs outside the border.' },
      { number: '03', label: 'Precision Laser Pulses', description: 'Targeted diode laser pulses neutralize stray follicles in under 5 minutes.' },
      { number: '04', label: 'Cooling Aftercare', description: 'A soothing zinc and aloe gel is applied to leave the skin calm and refreshed.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Shave the stray hair areas 12h prior along your desired line', 'Do not pluck hairs'] },
      { id: 'during', label: 'Procedure', points: ['Takes just 10–15 minutes', 'Sapphire tip keeps skin cold and comfortable'] },
      { id: 'after', label: 'Immediate', points: ['Slight pinkness fades in 30 minutes', 'Resume work immediately'] },
      { id: 'recovery', label: 'Results', points: ['Stray hairs shed over 10 days', 'After 5 sessions, you never have to shave your neck again'] }
    ],
    quickFacts: {
      duration: '15 minutes',
      comfort: 'High (contact cooling)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Sharp, clean lines after 3 sessions',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '5 to 6 sessions',
      bestFor: 'Clean beard cheek lines, neck razor bumps',
      suitableSkinTypes: 'All skin tones'
    },
    benefits: [
      { title: 'Permanently Sharp Beard Lines', description: 'Your beard looks freshly groomed 24/7 without daily trimming.' },
      { title: 'Zero In-Grown Hairs on Neck', description: 'Permanently eliminates the painful red bumps caused by collar friction and shaving.' },
      { title: 'Saves Daily Morning Time', description: 'Eliminates the tedious daily task of aligning razors on delicate cheek and throat skin.' }
    ],
    approachHeading: 'Custom Facial Geometry.',
    approachParagraphs: [
      'Every man’s facial bone structure is unique. We map beard lines that complement your jawline and cheekbone contours, ensuring a natural, sharp, masculine aesthetic.'
    ],
    results: {
      format: 'quote',
      quote: 'Shaving my neck gave me painful ingrown bumps every single week. After laser beard shaping at 22Luna, my neck is completely clear and my beard line is razor sharp every day.',
      attribution: 'Patient, 22Luna Men’s Care'
    },
    faqs: [
      { question: 'Will this damage the rest of my beard?', answer: 'Never. We use precise protective shielding and pencil mapping to ensure the laser only pulses on the unwanted stray hairs above or below your desired beard line.' },
      { question: 'How many sessions until it is permanent?', answer: 'Most men achieve clean, permanent borders within 5 to 6 sessions spaced 4 weeks apart.' }
    ],
    actives: ['Zinc Oxide', 'Aloe Vera', 'Centella Asiatica'],
    technology: 'Precision-Collimated Diode Laser with Sub-Zero Tip Cooling'
  }
};
