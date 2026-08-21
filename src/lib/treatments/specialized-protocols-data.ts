import type { TreatmentData } from '../treatment-data';

export const SPECIALIZED_PROTOCOLS_DATA: Record<string, TreatmentData> = {
  'sclerotherapy': {
    slug: 'sclerotherapy',
    name: 'Sclerotherapy',
    tagline: 'Micro-injection of medical sclerosant solutions to collapse and permanently eliminate spider veins and small broken vessels.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Mild pinch (hair-thin micro-needles)',
      downtime: 'Zero (compression stockings worn for 3–5 days)',
      visibleResults: 'Veins fade progressively over 3 to 6 weeks',
      suitableFor: 'Spider veins, reticular veins, telangiectasias on legs or face',
      sessions: '2 to 4 sessions spaced 4 weeks apart',
    },
    introHeading: 'Micro-Vascular Clearance.\nRestored Leg Elegance.',
    introLabel: 'SPIDER VEIN SCLEROTHERAPY',
    introParagraphs: [
      'Sclerotherapy at 22Luna is the gold-standard medical treatment for eliminating unsightly spider veins (telangiectasias) and blue reticular veins on the legs and body.',
      'Using ultra-fine micro-needles, a specialized biocompatible sclerosant agent (Polidocanol / Sodium Tetradecyl Sulfate) is injected directly into diseased vessels, irritating the endothelial lining to seal the vein closed. Over the following weeks, the body naturally reabsorbs the collapsed vessel.'
    ],
    whyChooseItems: [
      { title: 'Gold-Standard Sclerosant Agents', description: 'Pharmaceutical-grade polidocanol eliminates vessels with zero burning sensation.' },
      { title: 'Polarized Light Illumination', description: 'Specialized transillumination lights locate underlying feeder veins for permanent clearance.' },
      { title: 'Zero Surgical Incisions', description: 'Delivered through micro-injections smaller than an acupuncture needle.' }
    ],
    suitability: {
      idealFor: [
        'Visible red, purple, or blue spider veins on thighs, calves, and ankles',
        'Small superficial reticular veins',
        'Facial or nasal broken capillaries'
      ],
      advisedAgainst: [
        'Active deep vein thrombosis (DVT) or history of blood clots',
        'Pregnancy or breastfeeding',
        'Inability to walk immediately post-procedure'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Vascular Transillumination', description: 'Polarized light maps feeder veins and superficial spider webs.' },
      { number: '02', label: 'Micro-Lumen Cannulation', description: 'An ultra-fine 30G needle enters the vessel lumen under optical magnification.' },
      { number: '03', label: 'Sclerosant Infusion', description: 'Liquid or foam sclerosant is injected, displacing blood and causing vessel wall adhesion.' },
      { number: '04', label: 'Compression Application', description: 'Graduated compression pads and stockings are fitted to keep vessel walls sealed.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Bring your compression stockings to the clinic', 'Avoid shaving legs or applying lotion on the day'] },
      { id: 'during', label: 'Procedure', points: ['Takes 30 minutes; feels like tiny insect bites', 'Veins visibly blanch and disappear immediately during injection'] },
      { id: 'after', label: 'Initial Week', points: ['Wear compression stockings during the day for 3–5 days', 'Walk for 20 minutes immediately following the session'] },
      { id: 'recovery', label: 'Clearance', points: ['Veins appear temporarily darker or bruised before fading away over 4–6 weeks', 'Smooth, clear skin remains'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'High (ultra-fine needles)',
      anaesthesia: 'None needed',
      downtime: 'Zero (wear compression stockings for 3–5 days)',
      visibleResults: 'Progressive clearance in 3 to 6 weeks',
      returnToRoutine: 'Immediate (walking encouraged; avoid heavy weights for 48h)',
      sessionsNeeded: '2 to 4 sessions',
      bestFor: 'Spider veins, leg capillaries',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Permanent Vessel Collapse', description: 'Once a spider vein is sclerosed and absorbed, it does not reopen.' },
      { title: 'Relieves Leg Heaviness', description: 'Eliminates aching and fatigue caused by sluggish micro-venous pooling.' },
      { title: 'Flawless Bare Legs', description: 'Restores even skin tone, allowing you to wear shorts and dresses with confidence.' }
    ],
    approachHeading: 'Feeder-Vein Elimination.',
    approachParagraphs: [
      'Treating surface spider veins without addressing the underlying feeder veins leads to rapid recurrence. Our physicians trace and seal the feeder branches first for long-lasting vascular clearance.'
    ],
    results: {
      format: 'quote',
      quote: 'I hid my legs for years due to purple spider veins around my knees and ankles. After three sclerotherapy sessions at 22Luna, my legs are completely clear and vein-free!',
      attribution: 'Patient, 22Luna Vascular Program'
    },
    faqs: [
      { question: 'Will spider veins come back after treatment?', answer: 'Treated veins that close and reabsorb do not come back. However, new spider veins can develop over time due to genetics or standing, which can be managed with occasional touch-ups.' },
      { question: 'Why do I need to wear compression stockings?', answer: 'Compression keeps the treated vessel walls pressed flat against each other, ensuring they heal shut permanently rather than refilling with blood.' }
    ],
    actives: ['Polidocanol Solution', 'Sodium Tetradecyl Sulfate'],
    technology: 'Transillumination-Guided Micro-Sclerotherapy'
  },

  'bridal-groom-treatments': {
    slug: 'bridal-groom-treatments',
    name: 'Bride/Groom To Be Treatments',
    tagline: 'Curated clinical aesthetic timelines designed around your wedding date for porcelain radiance, sculpted contours, and calm confidence.',
    category: 'Skin',
    snapshot: {
      duration: 'Bespoke multi-month program (3 to 6 months)',
      comfortLevel: 'Luxurious, relaxing & physician-managed',
      downtime: 'Zero near the event date',
      visibleResults: 'Cumulative flawless radiance, refined texture, and glowing confidence',
      suitableFor: 'Brides, grooms, and wedding parties seeking camera-ready skin and smile harmony',
      sessions: 'Structured timeline of 4 to 8 curated sessions',
    },
    introHeading: 'Camera-Ready Precision.\nBespoke Wedding Timelines.',
    introLabel: 'CURATED BRIDAL & GROOM AESTHETICS',
    introParagraphs: [
      'Bridal & Groom Treatments at 22Luna are built on a reverse-engineered clinical timeline calibrated to your wedding date. Rather than last-minute risky procedures, we structure a multi-phase aesthetic plan.',
      'Covering skin texture clearing, pigment erasure, facial de-puffing, teeth whitening, and non-surgical profile sculpting, every session is timed to peak perfectly on your big day with zero redness, peeling, or downtime.'
    ],
    whyChooseItems: [
      { title: 'Reverse-Engineered Date Planning', description: 'Corrective lasers done months ahead; pure glow and hydration delivered 48h before the wedding.' },
      { title: 'Full-Spectrum Care (Skin + Dental + Wellness)', description: 'Skin glass-glow, smile brightening, and Reviv IV stress recovery in one sanctuary.' },
      { title: 'Groom-Specific Programs', description: 'Discreet beard line shaping, pore refining, and stress de-puffing tailored for grooms.' }
    ],
    suitability: {
      idealFor: [
        'Brides and grooms planning 1 to 6 months ahead of their wedding',
        'Acne, texture, and pigmentation needing clearing before HD photography',
        'Teeth brightening for radiant wedding smile portraits',
        'Pre-wedding stress recovery and holistic glow'
      ],
      advisedAgainst: [
        'Aggressive deep chemical peels or new experimental treatments within 14 days of the wedding'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Timeline Architecture Consultation', description: 'We map your event dates (engagement, sangeet, wedding, reception) against healing windows.' },
      { number: '02', label: 'Phase 1: Corrective Clearance', description: 'Month 3–6: Targeted peels, Q-switched lasers, or RF microneedling clear underlying concerns.' },
      { number: '03', label: 'Phase 2: Refinement & Smile Design', description: 'Month 1–2: In-office laser teeth whitening, baby botox, and structural hydration.' },
      { number: '04', label: 'Phase 3: The Sanctuary Glow', description: 'Week of Wedding: Deluxe HydraFacial, Reviv IV glow infusion, and cryo-lymphatic drainage.' }
    ],
    journey: [
      { id: 'before', label: '6 Months Out', points: ['Initial diagnostic skin scan and smile assessment', 'Begin deep texture and pigmentation clearance'] },
      { id: 'during', label: '2 Months Out', points: ['Teeth whitening session', 'Soft contour refinement and skin boosters'] },
      { id: 'after', label: '2 Weeks Out', points: ['Gentle polish and calming medi-facials', 'Zero aggressive procedures'] },
      { id: 'recovery', label: '48 Hours Out', points: ['Fire & Ice radiance facial + Vitaglow IV drip', 'Immaculate, photo-ready porcelain finish'] }
    ],
    quickFacts: {
      duration: '3 to 6 month programs',
      comfort: 'Sanctuary comfort',
      anaesthesia: 'None required for final glow phases',
      downtime: 'Zero near wedding date',
      visibleResults: 'Peak glass skin on your wedding day',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Customized 4 to 8 visit packages',
      bestFor: 'Brides, grooms, pre-wedding glow',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Flawless High-Definition Complexion', description: 'Ensures makeup sits seamlessly on porcelain, poreless skin with zero cakey texture.' },
      { title: 'Brilliant Wedding Smile', description: 'Brightens enamel by 4–8 shades for radiant, confident wedding photography.' },
      { title: 'Calm Nervous System Recovery', description: 'Infusion IV wellness reduces pre-wedding cortisol, fatigue, and stress breakouts.' }
    ],
    approachHeading: 'Stress-Free Bridal Excellence.',
    approachParagraphs: [
      'Your wedding preparations should be a sanctuary of joy, not stress. We ensure every treatment is safe, predictable, and timed with absolute precision so you look and feel extraordinary.'
    ],
    results: {
      format: 'quote',
      quote: '22Luna handled my bridal timeline from 4 months out. My skin on my wedding day was literally glowing from within, my makeup looked airbrushed, and my teeth were gleaming white!',
      attribution: 'Patient, 22Luna Bridal Program'
    },
    faqs: [
      { question: 'When should I start my bridal/groom treatment program?', answer: 'Ideally 3 to 6 months before your wedding date. This allows time for deep corrective treatments (acne scars, pigmentation). However, even a 4-week express glow package delivers dramatic radiance.' },
      { question: 'Will I have any redness or marks on my wedding day?', answer: 'Never. Our strict protocol stops all downtime procedures 3 weeks before your wedding date. The final week features only gentle, ultra-hydrating, zero-downtime glow rituals.' }
    ],
    actives: ['Glutathione', 'Hyaluronic Acid', 'Peptides', 'Vitamin C', 'Hydrogen Peroxide Whitening'],
    technology: 'Multi-Modality Skin, Laser, Dental & Wellness Package'
  },

  'warts-skin-tags-removal': {
    slug: 'warts-skin-tags-removal',
    name: 'Removal of Warts / Skin Tags',
    tagline: 'High-frequency radiofrequency ablation and electro-cautery to remove warts, skin tags, and benign lesions safely with zero scarring.',
    category: 'Skin',
    snapshot: {
      duration: '15 – 30 minutes',
      comfortLevel: 'Completely painless (local numbing injected)',
      downtime: '3 to 5 days (tiny dry crust that falls off naturally)',
      visibleResults: 'Instant removal; smooth healed skin in 7 days',
      suitableFor: 'Skin tags on neck/eyelids/underarms, viral warts, seborrheic keratoses, milia',
      sessions: 'Single session per lesion',
    },
    introHeading: 'Radiofrequency Ablation.\nScarless Lesion Clearance.',
    introLabel: 'RADIOFREQUENCY CAUTERY',
    introParagraphs: [
      'Wart & Skin Tag Removal at 22Luna utilizes advanced high-frequency radiofrequency micro-cautery to vaporize benign skin growths at the cellular level with microscopic accuracy.',
      'Unlike traditional surgical excision that requires stitches, or liquid nitrogen freezing that can leave white hypopigmented scars on Indian skin, radiofrequency ablation seals micro-capillaries instantly, allowing the skin to heal flush, smooth, and scar-free.'
    ],
    whyChooseItems: [
      { title: 'Sub-Millimeter Tissue Precision', description: 'Vaporizes only the lesion without burning or scarring surrounding healthy skin.' },
      { title: 'Simultaneous Hemostasis', description: 'Coagulates blood vessels instantly for a clean, bloodless, sterile procedure.' },
      { title: 'Complete Local Anesthesia', description: 'You feel zero pain or burning during the ablation sequence.' }
    ],
    suitability: {
      idealFor: [
        'Skin tags (acrochordons) on the neck, eyelids, armpits, and groin',
        'Common viral warts and plantar verrucas',
        'Seborrheic keratoses and DPNs (Dermatosis Papulosa Nigra)',
        'Milia, cherry angiomas, and benign mole clearance'
      ],
      advisedAgainst: [
        'Suspicious, irregular, changing pigmented moles (requires biopsy evaluation)',
        'Active keloid-forming tendency in the local area'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Dermatological Dermoscopy Scan', description: 'The physician inspects the lesion with a high-magnification dermatoscope to confirm benign nature.' },
      { number: '02', label: 'Local Anesthetic Numbing', description: 'A tiny droplet of local lidocaine numbs the lesion base in seconds.' },
      { number: '03', label: 'Micro-Electrode RF Ablation', description: 'A micro-loop electrode vaporizes the lesion cleanly at the epidermal-dermal junction.' },
      { number: '04', label: 'Antibiotic Seal & Dressing', description: 'An antibacterial healing ointment is applied over the tiny dry base.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['Doctor confirms lesion is safe to remove', 'Cleanse and disinfect skin'] },
      { id: 'during', label: 'Procedure', points: ['Takes 5–15 minutes', '100% painless with local numbing'] },
      { id: 'after', label: 'Initial Days', points: ['Small pinpoint scab forms within 24h', 'Keep dry and apply antibiotic cream'] },
      { id: 'recovery', label: 'Healing', points: ['Scab falls off naturally in 4–7 days', 'Leaves smooth, normal skin with zero scar'] }
    ],
    quickFacts: {
      duration: '20 minutes',
      comfort: 'Painless (local anesthetic used)',
      anaesthesia: 'Topical cream / Local Lidocaine',
      downtime: '3 to 5 days tiny scab',
      visibleResults: 'Instant removal on the day',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 single session per lesion',
      bestFor: 'Skin tags, warts, DPN, milia',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Permanent Lesion Removal', description: 'Physically vaporizes the stalk and root of the growth.' },
      { title: 'Zero Stitching or Scarring', description: 'Leaves a microscopic epidermal mark that heals flat and imperceptible.' },
      { title: 'Rapid Recovery', description: 'Treated area dries into a tiny crust that drops off in a few days.' }
    ],
    approachHeading: 'Diagnostic Safety First.',
    approachParagraphs: [
      'Every lesion is thoroughly examined under high-power dermoscopy before removal to guarantee absolute clinical safety and distinguish benign tags from dysplastic growths.'
    ],
    results: {
      format: 'quote',
      quote: 'I had over 20 small skin tags on my neck that caught on my necklaces. Dr. Niharika removed all of them in 15 minutes with zero pain. My neck is completely smooth now!',
      attribution: 'Patient, 22Luna Minor Surgery'
    },
    faqs: [
      { question: 'Will the skin tag grow back?', answer: 'Once a skin tag or wart is ablated completely at its base, that specific lesion cannot regrow. However, individuals prone to tags may develop new ones over time in other areas due to friction.' },
      { question: 'Does radiofrequency removal leave a scar?', answer: 'Because RF energy vaporizes tissue with micro-millimeter precision and minimal lateral heat spread, it heals flat with normal skin pigmentation, leaving no noticeable scar.' }
    ],
    actives: ['Topical Mupirocin', 'Centella Asiatica', 'Zinc Healing Balm'],
    technology: 'High-Frequency Radiofrequency Ablation (Ellman / Cautery Platform)'
  },

  'facial-muscle-restoration': {
    slug: 'facial-muscle-restoration',
    name: 'Facial Muscle Restoration / Deep Dermal Remodelling',
    tagline: 'High-intensity electromagnetic and synchronized radiofrequency energy to restore facial elevator muscle tone and rebuild dermal scaffolding.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Painless muscular contraction pulses',
      downtime: 'Zero downtime',
      visibleResults: 'Elevated cheek projection, lifted brows, and sharpened jawline in 4–6 weeks',
      suitableFor: 'Structural facial sagging, descending cheek fat pads, loss of elevator muscle tone',
      sessions: '4 sessions spaced 1 week apart',
    },
    introHeading: 'Electromagnetic Muscle Toning.\nStructural Scaffolding Lift.',
    introLabel: 'HIGH-INTENSITY FACIAL MUSCLE STIMULATION',
    introParagraphs: [
      'Facial Muscle Restoration at 22Luna is a groundbreaking non-invasive lifting technology that treats facial aging at its deepest anatomical root: the facial elevator muscles.',
      'By synchronizing High-Intensity Focused Electromagnetic (HIFES) energy with thermal radiofrequency, this therapy triggers thousands of supra-maximal contractions in the zygomaticus major, minor, and frontalis muscles while remodeling dermal collagen, reversing facial sagging from within.'
    ],
    whyChooseItems: [
      { title: 'Treats the Muscle Layer Non-Invasively', description: 'The only non-needle aesthetic device that strengthens facial elevator muscles directly.' },
      { title: 'Simultaneous Collagen & Muscle Action', description: 'HIFES contracts muscles while RF heats the dermis for a synchronized 2-in-1 lift.' },
      { title: 'Zero Needles, Bruises, or Recovery', description: 'Hands-free applicator pads deliver deep anatomical restoration in 20 minutes.' }
    ],
    suitability: {
      idealFor: [
        'Loss of natural cheek projection and flattened midface contours',
        'Drooping brows and heavy hooded upper eyelids',
        'Lower face sagging and softening jawline angles',
        'Patients wanting non-invasive structural lifting without fillers'
      ],
      advisedAgainst: [
        'Metallic implants or plates in the head/face region',
        'Active pacemakers or electronic cardiac devices'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Applicator Placement', description: 'Adhesive applicator pads are positioned over the forehead and zygomaticus cheek muscle vectors.' },
      { number: '02', label: 'RF Thermal Pre-Heating', description: 'Radiofrequency energy gently warms the dermis to 41°C, prepping collagen fibers.' },
      { number: '03', label: 'HIFES Supra-Maximal Contractions', description: 'Electromagnetic pulses induce thousands of involuntary muscle contractions, building muscle tone.' },
      { number: '04', label: 'Cool-Down & Refresh', description: 'Applicator pads are removed and an energizing hydration mist is applied.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['Clean skin with no makeup or metal jewelry', 'Rest comfortably in reclined sanctuary chair'] },
      { id: 'during', label: 'Session', points: ['Rhythmic pulling and contracting sensation', 'Feels like a workout for your face; completely painless'] },
      { id: 'after', label: 'Immediate', points: ['Immediate refreshed muscle tone and warmth', 'Resume all activities immediately'] },
      { id: 'recovery', label: 'Results', points: ['Cheeks elevate and forehead smooths over 4 weekly sessions', 'Peak lift at 6–8 weeks'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Very comfortable (muscle contraction pulses)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Visible cheek lift and brow elevation in 4 weeks',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '4 sessions spaced 1 week apart',
      bestFor: 'Cheek lifting, brow elevation, muscle tone',
      suitableSkinTypes: 'All candidates'
    },
    benefits: [
      { title: 'Elevates Midface Cheek Pads', description: 'Tones the zygomaticus elevator muscles, restoring youthful cheek apex projection.' },
      { title: 'Lifts Drooping Brows', description: 'Strengthens the frontalis muscle to open tired, hooded eyes.' },
      { title: 'Rebuilds Deep Dermal Matrix', description: 'Increases structural collagen density by 26% and elastin by 129%.' }
    ],
    approachHeading: 'True Anatomical Anti-Aging.',
    approachParagraphs: [
      'Skin sagging is not just about loose skin—it happens because the muscles holding our face up lose tone. By rebuilding muscle density, we restore youthful architectural support naturally.'
    ],
    results: {
      format: 'quote',
      quote: 'After 4 sessions of facial muscle restoration at 22Luna, my cheeks look naturally lifted and my brows are higher. It gave me a facelift effect without a single needle!',
      attribution: 'Patient, 22Luna Structural Program'
    },
    faqs: [
      { question: 'What does the treatment feel like?', answer: 'You will feel intense but comfortable involuntary muscle contractions on your forehead and cheeks, accompanied by a pleasant warm sensation from the radiofrequency.' },
      { question: 'Can I do this if I already have Botox or fillers?', answer: 'Yes! Facial muscle restoration works beautifully in tandem with injectables. We simply recommend waiting 2 weeks after getting fillers or Botox before starting your muscle sessions.' }
    ],
    actives: ['Hyaluronic Acid', 'DMAE Muscle Firming Complex', 'Bio-Peptides'],
    technology: 'Synchronized High-Intensity Focused Electromagnetic (HIFES) & RF'
  },

  'blefaroplasma': {
    slug: 'blefaroplasma',
    name: 'Blefaroplasma',
    tagline: 'Non-surgical plasma sublimation to tighten heavy eyelids, eliminate excess hooding, and smooth periorbital crow’s feet.',
    category: 'Skin',
    snapshot: {
      duration: '45 – 60 minutes (includes numbing)',
      comfortLevel: 'Comfortable with medical-grade numbing cream',
      downtime: '4 to 6 days (tiny micro-carbon crusts that shed naturally)',
      visibleResults: 'Immediate skin contraction; permanent tissue tightening in 2–4 weeks',
      suitableFor: 'Upper eyelid hooding, crepey lower eyelid skin, peri-oral smoker lines',
      sessions: '1 to 2 sessions spaced 8 weeks apart',
    },
    introHeading: 'Plasma Arc Sublimation.\nNon-Surgical Eyelid Lift.',
    introLabel: 'NON-SURGICAL BLEPHAROPLASTY',
    introParagraphs: [
      'Blefaroplasma at 22Luna is a cutting-edge non-surgical alternative to cosmetic eyelid surgery (blepharoplasty) that treats loose, hooded, and excess eyelid skin.',
      'Using an ionized medical plasma arc that sublimates (converts solid tissue directly into gas) micro-points of superficial epidermal cells without cutting or bleeding, this procedure instantly contracts excess skin laxity around the delicate eye area.'
    ],
    whyChooseItems: [
      { title: 'Zero Scalpels or Sutures', description: 'Tightens loose eyelid skin without surgical incisions, general anesthesia, or scarring.' },
      { title: 'Micro-Plasma Arc Precision', description: 'Creates tiny 0.1mm sublimation dots, leaving surrounding ocular tissues completely untouched.' },
      { title: 'Long-Lasting Tissue Retraction', description: 'Results are permanent until natural aging continues over subsequent years.' }
    ],
    suitability: {
      idealFor: [
        'Drooping, heavy, or hooded upper eyelids',
        'Crepey, loose, paper-thin skin on the lower eyelids',
        'Deep crow’s feet and periorbital smile crinkles',
        'Upper lip barcode smoker lines'
      ],
      advisedAgainst: [
        'Severe deep orbital fat pad herniation (requires surgical fat transposition)',
        'Active eye infections or blepharitis',
        'Dark skin types prone to keloid scarring or post-inflammatory hyperpigmentation'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Eyelid Numbing Protocol', description: 'Prescription anesthetic cream is applied over the eyelids for 30 minutes.' },
      { number: '02', label: 'Vector Mapping', description: 'Lines of excess eyelid skin fold tension are charted while the patient looks forward.' },
      { number: '03', label: 'Plasma Arc Sublimation', description: 'The micro-probe generates plasma arcs, instantly vaporizing micro-dots of excess skin.' },
      { number: '04', label: 'Post-Plasma Mineral Shield', description: 'A soothing antibacterial mineral foundation protects the microscopic carbon crusts.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Stop blood thinners 3 days prior', 'Bring dark sunglasses to your visit'] },
      { id: 'during', label: 'In Suite', points: ['Takes 30 minutes; feels like tiny warm prickles', '100% manageable with numbing'] },
      { id: 'after', label: 'Days 1–3', points: ['Mild eyelid swelling (ice packs help)', 'Tiny brown micro-crusts form over dots'] },
      { id: 'recovery', label: 'Day 5–7', points: ['Crusts fall off revealing tight, lifted eyelid skin', 'Apply physical SPF 50+ strictly'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Comfortable with topical numbing',
      anaesthesia: 'Topical anesthetic cream',
      downtime: '4 to 6 days micro-carbon dots',
      visibleResults: 'Immediate skin contraction; full result in 4 weeks',
      returnToRoutine: '4 to 5 days',
      sessionsNeeded: '1 to 2 sessions',
      bestFor: 'Hooded eyelids, under-eye crepiness',
      suitableSkinTypes: 'Fitzpatrick skin types I–III (customized for IV)'
    },
    benefits: [
      { title: 'Opens Hooded Eyes', description: 'Retracts excess upper eyelid skin folds, restoring wide, awake, youthful eyes.' },
      { title: 'Smooths Lower Lid Crepiness', description: 'Tightens paper-thin lower eyelid skin without surgical eyelid retraction risk.' },
      { title: 'Natural Dynamic Result', description: 'Preserves your natural eye shape with zero risk of the startled surgical look.' }
    ],
    approachHeading: 'Sublimation Over Surgery.',
    approachParagraphs: [
      'Many patients have mild-to-moderate eyelid hooding that does not warrant invasive operating room surgery. Plasma sublimation provides the ideal middle ground for natural eyelid tightening.'
    ],
    results: {
      format: 'quote',
      quote: 'My heavy upper eyelids made putting on eyeliner impossible and made me look tired all day. One session of Blefaroplasma at 22Luna lifted my lids completely. My eyes look 10 years younger!',
      attribution: 'Patient, 22Luna Periorbital Program'
    },
    faqs: [
      { question: 'What happens to the tiny brown dots?', answer: 'The tiny carbon crusts are microscopic dry scabs. They fall off naturally on days 4 to 6 when you wash your face gently. Never pick or scratch them.' },
      { question: 'How long do blefaroplasma results last?', answer: 'The skin that is sublimated is permanently removed. Results typically last 3 to 5 years depending on your natural biological aging and skin elasticity.' }
    ],
    actives: ['Zinc Oxide Mineral Barrier', 'Centella Asiatica', 'Arnica Extract'],
    technology: 'Ionized Atmospheric Plasma Arc Sublimation'
  },

  'anti-ageing': {
    slug: 'anti-ageing',
    name: 'Anti Ageing',
    tagline: 'Multi-layer preventative and restorative longevity protocols combining cellular bio-stimulators, laser resurfacing, and peptides.',
    category: 'Skin',
    snapshot: {
      duration: '60 – 75 minutes',
      comfortLevel: 'Comfortable & physician-guided',
      downtime: 'Zero to 24 hours depending on protocol',
      visibleResults: 'Immediate glow; long-term structural firmness and wrinkle softening over 8–12 weeks',
      suitableFor: 'Fine lines, photo-aging, dullness, loss of firmness, preventive skin longevity',
      sessions: 'Customized annual skin longevity program',
    },
    introHeading: 'Cellular Longevity.\nMulti-Layer Biological Reversal.',
    introLabel: 'INTEGRATED ANTI-AGEING PROTOCOLS',
    introParagraphs: [
      'Anti-Ageing at 22Luna is not a one-size-fits-all treatment—it is a comprehensive medical skin longevity program structured across all three anatomical layers: epidermis, dermis, and muscular scaffolding.',
      'By integrating multi-wavelength laser collagen activation, polynucleotide bio-stimulators, peptide infusions, and preventative neuromodulation, we slow cellular senescence and restore youthful cellular elasticity.'
    ],
    whyChooseItems: [
      { title: 'Three-Tier Layer Targeting', description: 'Simultaneously addresses surface texture, dermal collagen loss, and muscle relaxation.' },
      { title: 'Cellular Senescence Reversal', description: 'Supplies essential NAD+ precursors, polynucleotides, and antioxidants directly to skin cells.' },
      { title: 'Customized Age-Defying Plans', description: 'Bespoke programs for your 20s (prevention), 30s (correction), or 40s+ (restoration).' }
    ],
    suitability: {
      idealFor: [
        'Fine lines, dynamic wrinkles, and early expression creases',
        'Loss of dermal density, bounce, and elasticity',
        'Sun damage, solar lentigines, and uneven skin tone',
        'Preventative anti-aging management in your late 20s and 30s'
      ],
      advisedAgainst: [
        'Active skin infections or acute inflammation',
        'Pregnancy (certain active modalities adjusted)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Biological Skin Age Diagnostic', description: 'Digital UV and polarization scans measure deep collagen density and hidden UV damage.' },
      { number: '02', label: 'Layer 1: Resurfacing & Tone', description: 'Gentle laser toning or enzyme exfoliation sweeps away aged surface keratin.' },
      { number: '03', label: 'Layer 2: Bio-Stimulator Infusion', description: 'Polynucleotides and non-crosslinked hyaluronic acid replenish extracellular dermal hydration.' },
      { number: '04', label: 'Layer 3: Photobiomodulation Lock', description: 'Medical LED wavelengths energize mitochondrial ATP for lasting cellular repair.' }
    ],
    journey: [
      { id: 'before', label: 'Consult', points: ['Comprehensive facial longevity mapping', 'Individualized program design'] },
      { id: 'during', label: 'In Clinic', points: ['Comfortable multi-modality session', 'Takes roughly 60 minutes'] },
      { id: 'after', label: 'Immediate', points: ['Skin appears luminous, firm, and dewy', 'Zero heavy downtime'] },
      { id: 'recovery', label: 'Long Term', points: ['Progressive collagen regeneration over 12 weeks', 'Maintains long-term skin health'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'High comfort',
      anaesthesia: 'Topical cream if required',
      downtime: 'Zero to 24h',
      visibleResults: 'Instant radiance; cumulative firmness',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Curated 3 to 4 session program',
      bestFor: 'Longevity, fine lines, cellular glow',
      suitableSkinTypes: 'All adult skin profiles'
    },
    benefits: [
      { title: 'Rebuilds Dermal Scaffolding', description: 'Boosts type I and type III collagen synthesis, restoring youthful bounce.' },
      { title: 'Erases Fine Lines & Crinkles', description: 'Hydrates and plumps periorbital, smile, and forehead creases.' },
      { title: 'Protects Against Future Aging', description: 'High-potency antioxidants neutralize environmental oxidative stress and pollution damage.' }
    ],
    approachHeading: 'Proactive Skin Longevity.',
    approachParagraphs: [
      'We believe the future of aesthetic medicine is longevity. Rather than waiting for deep wrinkles to form and chasing them with heavy fillers, our preventative approach maintains firm, healthy, biologically active skin for decades.'
    ],
    results: {
      format: 'quote',
      quote: 'The anti-aging program at 22Luna gave my skin a noticeable bounce and firmness. People constantly tell me I look like I’m in my mid-20s again!',
      attribution: 'Patient, 22Luna Longevity Program'
    },
    faqs: [
      { question: 'At what age should I start preventative anti-aging treatments?', answer: 'Collagen production drops by approximately 1% per year starting in your mid-20s. Starting preventative collagen-stimulating treatments in your late 20s or early 30s preserves your natural skin density before deep lines form.' },
      { question: 'How often should I do this program?', answer: 'We typically recommend a foundational series of 3 sessions followed by a maintenance session every 3 to 4 months to maintain continuous cellular collagen turnover.' }
    ],
    actives: ['Polynucleotides (PDRN)', 'Hyaluronic Acid', 'Peptides', 'Glutathione', 'Resveratrol'],
    technology: 'Multi-Layer Energy & Bio-Stimulator Matrix'
  },

  'light-therapy': {
    slug: 'light-therapy',
    name: 'Light Therapy',
    tagline: 'Medical-grade multi-wavelength narrow-band LED photobiomodulation to accelerate cellular ATP, kill acne bacteria, and soothe inflammation.',
    category: 'Skin',
    snapshot: {
      duration: '30 minutes',
      comfortLevel: 'Deeply relaxing & warm',
      downtime: 'Zero downtime',
      visibleResults: 'Calmed redness in hours; cleared acne and radiant glow in 2–4 sessions',
      suitableFor: 'Active acne breakouts, rosacea, post-procedure redness, cellular healing',
      sessions: '1 to 2 times weekly or as a boost after any clinical procedure',
    },
    introHeading: 'Photobiomodulation.\nCellular Mitochondrial ATP Activation.',
    introLabel: 'MEDICAL LED PHOTOTHERAPY',
    introParagraphs: [
      'Light Therapy at 22Luna utilizes pure, narrow-band, medical-grade Light Emitting Diodes (LED) emitting calibrated wavelengths across Blue (415nm), Red (633nm), and Near-Infrared (830nm).',
      'By delivering optical energy directly to the cellular chromophore cytochrome c oxidase in mitochondria, phototherapy stimulates massive cellular ATP production, accelerates wound healing by up to 200%, destroys P. acnes bacteria, and dramatically reduces inflammation.'
    ],
    whyChooseItems: [
      { title: 'Tri-Wave Synchronized Output', description: 'Simultaneously treats acne bacteria (blue) while healing the skin barrier (red and infrared).' },
      { title: 'Zero UV Radiation', description: 'Pure therapeutic light waves with zero harmful ultraviolet exposure.' },
      { title: 'Accelerates Post-Laser Recovery', description: 'Cuts post-procedure redness and swelling in half when added after clinical treatments.' }
    ],
    suitability: {
      idealFor: [
        'Active inflammatory acne, papules, and pustules',
        'Post-procedure redness, swelling, and healing acceleration',
        'Rosacea, facial flushing, and compromised skin barrier',
        'Dull, tired, and low-energy skin needing a biological recharge'
      ],
      advisedAgainst: [
        'Active photo-sensitive epilepsy',
        'Taking photo-sensitizing medications (e.g., high-dose doxycycline)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Cleanse & Protect', description: 'Skin is cleansed and protective optical goggles are placed over your eyes.' },
      { number: '02', label: 'Wavelength Calibration', description: 'The physician selects specific wavelengths (Blue for acne, Red for collagen, Infrared for deep healing).' },
      { number: '03', label: 'LED Immersion', description: 'The contoured LED array sits closely over the face for 20 minutes of comfortable exposure.' },
      { number: '04', label: 'Antioxidant Lock', description: 'A soothing hyaluronic and peptide barrier mist is applied to lock in cellular hydration.' }
    ],
    journey: [
      { id: 'before', label: 'Setup', points: ['Arrive clean-faced', 'Relax in our tranquil private suite'] },
      { id: 'during', label: 'Session', points: ['Warm, pleasant light bath', 'Many patients meditate or take a power nap'] },
      { id: 'after', label: 'Immediate', points: ['Skin looks instantly calm, de-puffed, and luminous', 'Zero redness or irritation'] },
      { id: 'recovery', label: 'Benefits', points: ['Inflammation continues to subside over 24 hours', 'Can be done as often as desired'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Extremely relaxing (warm light)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Instant calm; acne clearance in 48 hours',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '2 to 4 sessions or post-treatment booster',
      bestFor: 'Acne, redness, healing, cellular glow',
      suitableSkinTypes: 'All skin types including sensitive/reactive skin'
    },
    benefits: [
      { title: 'Destroys Acne Bacteria (415nm)', description: 'Blue light triggers singlet oxygen production that kills Propionibacterium acnes without antibiotics.' },
      { title: 'Stimulates Cellular Collagen (633nm)', description: 'Red light triggers fibroblast proliferation and speeds up tissue healing.' },
      { title: 'Deep Tissue Anti-Inflammatory (830nm)', description: 'Near-infrared light penetrates deep into the subcutaneous tissue, draining edema and calming pain.' }
    ],
    approachHeading: 'Light as Medicine.',
    approachParagraphs: [
      'Photobiomodulation is proven by NASA and medical research to accelerate cellular repair. We use it both as a standalone therapeutic treatment and as a finishing touch to ensure our patients heal with unmatched speed.'
    ],
    results: {
      format: 'quote',
      quote: 'My red, angry acne flare-ups calmed down by 80% within two sessions of blue and red LED therapy. It’s the gentlest, most relaxing way to clear acne.',
      attribution: 'Patient, 22Luna Acne Program'
    },
    faqs: [
      { question: 'Does LED light therapy emit UV rays?', answer: 'No. Medical LED therapy is 100% free of harmful ultraviolet (UVA/UVB) rays. It does not cause tanning, sunburn, or DNA damage.' },
      { question: 'Can I do light therapy with other treatments?', answer: 'Yes! In fact, adding LED therapy immediately after chemical peels, microneedling, or facials dramatically reduces redness and accelerates your recovery.' }
    ],
    actives: ['Hyaluronic Acid', 'Peptides', 'Centella Asiatica', 'Zinc'],
    technology: 'Narrow-Band Tri-Wave Medical Photobiomodulation (415nm, 633nm, 830nm)'
  }
};
