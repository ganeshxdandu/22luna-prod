import type { TreatmentData } from '../treatment-data';

export const INJECTABLES_DATA: Record<string, TreatmentData> = {
  'botox': {
    slug: 'botox',
    name: 'Botox',
    tagline: 'Precision neuromodulation to smooth dynamic wrinkles and refine facial lines while preserving natural expressions.',
    category: 'Skin',
    snapshot: {
      duration: '15 – 30 minutes',
      comfortLevel: 'Mild pinch (ultra-fine micro-needles)',
      downtime: 'Zero (avoid lying down for 4 hours)',
      visibleResults: 'Begins in 3–5 days, full peak smoothing at 14 days',
      suitableFor: "Forehead lines, frown lines (11s), crow's feet, bunny lines, masseter slimming",
      sessions: 'Single session, repeated every 3 to 5 months',
    },
    introHeading: 'Micro-Targeted Neuromodulation.\nNatural Movement Preserved.',
    introLabel: 'PRECISION WRINKLE RELAXATION',
    introParagraphs: [
      'Botox at 22Luna is administered exclusively by experienced aesthetic physicians who adhere to a philosophy of subtle, undetectable refinement.',
      'By delivering micro-units of purified Botulinum Toxin Type A to precise neuromuscular junctions, we gently relax hyperactive muscles that cause dynamic creasing without freezing your natural facial animation.'
    ],
    whyChooseItems: [
      { title: 'Baby Botox Micro-Dosing', description: 'Micro-droplet mapping to prevent heavy brows or stiff expressions.' },
      { title: 'Physician-Only Injections', description: 'Deep anatomical expertise ensures safe placement and zero asymmetry.' },
      { title: 'Authentic US FDA-Approved Neurotoxins', description: 'We use exclusively original Allergan Botox and Dysport with unbroken cold-chain storage.' }
    ],
    suitability: {
      idealFor: [
        'Dynamic forehead horizontal worry lines',
        'Glabellar lines (the "11" furrow between eyebrows)',
        "Periorbital crow's feet when smiling or squinting",
        'Bruxism / teeth grinding and wide jawline (masseter slimming)',
        'Gummy smile elevation and pebbled chin smoothing'
      ],
      advisedAgainst: [
        'Pregnancy or breastfeeding',
        'Neuromuscular disorders (e.g., Myasthenia Gravis)',
        'Active skin infection at the injection site'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Dynamic Muscle Mapping', description: 'The doctor evaluates your facial expressions during movement to chart individual muscle vectors.' },
      { number: '02', label: 'Topical Ice Desensitization', description: 'Cooling packs or local numbing minimize insertion sensations.' },
      { number: '03', label: 'Micro-Needle Injections', description: 'Ultra-thin 32G needles deliver exact micro-units to selected junction points.' },
      { number: '04', label: 'Post-Care Review', description: 'Injection sites are sanitized and a 2-week complimentary follow-up review is scheduled.' }
    ],
    journey: [
      { id: 'before', label: 'Consultation', points: ['Detailed assessment of muscle strength', 'Avoid aspirin/ibuprofen and alcohol for 24h prior'] },
      { id: 'during', label: 'Procedure', points: ['Quick, 10–15 minute injection sequence', 'Feels like tiny pinpricks; zero major pain'] },
      { id: 'after', label: 'Immediate', points: ['Tiny red bumps (mosquito-bite like) fade in 20 minutes', 'Stay upright for 4 hours; avoid rubbing the area'] },
      { id: 'recovery', label: 'Full Result', points: ['Softening begins day 3; peaks at day 14', 'Review visit at day 14 for fine adjustments if needed'] }
    ],
    quickFacts: {
      duration: '20 minutes',
      comfort: 'Virtually painless (32G micro-needles)',
      anaesthesia: 'Topical ice or numbing',
      downtime: 'Zero',
      visibleResults: 'Full effect in 10 to 14 days',
      returnToRoutine: 'Immediate (no strenuous workout for 24h)',
      sessionsNeeded: 'Every 3 to 5 months',
      bestFor: "Expression lines, crow's feet, masseter jawline",
      suitableSkinTypes: 'All candidates with dynamic wrinkles'
    },
    benefits: [
      { title: 'Expression Line Erasure', description: 'Prevents dynamic lines from setting into deep permanent static wrinkles.' },
      { title: 'Refined Facial Harmony', description: 'Opens up tired eyes, lifts brow arches, and softens tension-heavy expressions.' },
      { title: 'Therapeutic Relief', description: 'Relieves chronic jaw clenching, tension headaches, and teeth grinding.' }
    ],
    approachHeading: 'Subtlety is the Highest Art.',
    approachParagraphs: [
      'The best aesthetic work is the work no one can identify. Our goal is never to freeze you, but to leave you looking rested, refreshed, and effortlessly yourself.'
    ],
    results: {
      format: 'quote',
      quote: 'I was terrified of looking frozen. Dr. Niharika used micro-doses that softened my deep forehead lines while letting me smile and raise my brows completely naturally.',
      attribution: 'Patient, 22Luna Aesthetic Program'
    },
    faqs: [
      { question: 'Will my face look fake or frozen?', answer: 'No. Our conservative dosing philosophy ensures full natural facial movement while removing the harsh crinkling of the skin.' },
      { question: 'What happens if I stop getting Botox?', answer: 'Your muscles will gradually return to their baseline strength over 4 to 6 months. Your wrinkles will not become worse; they simply resume their normal aging rate.' },
      { question: 'What are the post-treatment rules?', answer: 'Do not lie flat for 4 hours, avoid touching or rubbing your face, and skip intense workouts or saunas for 24 hours.' }
    ],
    actives: ['Purified Botulinum Toxin Type A (Allergan / Dysport)'],
    technology: 'Precision Neuromodulation Injections'
  },

  'dermal-fillers': {
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    tagline: 'Hyaluronic acid structural volume restoration and artistic contouring for cheeks, lips, temples, and jawline.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Comfortable (contains integrated lidocaine)',
      downtime: 'Minimal (mild swelling for 2–3 days)',
      visibleResults: 'Immediate structural restoration & volume lift',
      suitableFor: 'Cheek volume loss, nasolabial folds, chin definition, tear troughs',
      sessions: 'Single session, maintained every 9 to 18 months',
    },
    introHeading: 'Architectural Restoration.\nBiocompatible Volume.',
    introLabel: 'HYALURONIC ACID DERMAL FILLERS',
    introParagraphs: [
      'Dermal Fillers at 22Luna are crafted around full-face golden ratio architecture. As we age, deep fat pads descend and bone resorption reduces midface support, causing skin sagging and hollowing.',
      'Using premier cross-linked Hyaluronic Acid gels (Juvederm, Restylane, Teosyal) delivered with atraumatic micro-cannulas, our physicians rebuild natural anatomical support and facial balance.'
    ],
    whyChooseItems: [
      { title: 'Blunt Cannula Safety Protocol', description: 'Significantly reduces bruising and ensures vascular safety during injection passes.' },
      { title: 'Reversible & Biocompatible', description: 'Pure Hyaluronic Acid that integrates smoothly with tissue and can be dissolved if desired.' },
      { title: 'Multi-Density Layering', description: 'Structural firm gels on bone; softer flexible gels for animated areas like lips and cheeks.' }
    ],
    suitability: {
      idealFor: [
        'Hollow cheeks and midface structural volume depletion',
        'Deep nasolabial smile lines and marionette shadows',
        'Receding chin and undefined jawline margins',
        'Sunken temples and under-eye tear trough hollowing',
        'Thinning, dehydrated, or asymmetric lips'
      ],
      advisedAgainst: [
        'Pregnancy or nursing',
        'Severe active acne or skin infections near injection sites',
        'Known allergy to lidocaine or hyaluronic acid products'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Anatomical Architecture Mapping', description: 'Facial bone structure, symmetry, and fat compartments are mapped digitally.' },
      { number: '02', label: 'Topical Numbing', description: 'Clinical-strength lidocaine cream is applied for 20 minutes for total comfort.' },
      { number: '03', label: 'Micro-Cannula Layering', description: 'Filler is deposited precisely along periosteal bone or deep subcutaneous planes.' },
      { number: '04', label: 'Gentle Sculpting', description: 'The physician sculpts and checks dynamic animation to ensure soft, natural transitions.' }
    ],
    journey: [
      { id: 'before', label: 'Planning', points: ['Detailed 3D face structure consultation', 'Avoid blood thinners/supplements for 48h'] },
      { id: 'during', label: 'Procedure', points: ['Minimal sensation due to integrated lidocaine', 'Takes approximately 30 minutes'] },
      { id: 'after', label: 'Initial Days', points: ['Immediate volume visible', 'Mild tenderness or small swelling for 48 hours'] },
      { id: 'recovery', label: 'Settling', points: ['Gel fully integrates with skin water molecules in 14 days', 'Final smooth result lasts 12–18 months'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'High (integrated lidocaine anaesthetic)',
      anaesthesia: 'Topical cream & local block',
      downtime: '1 to 3 days mild swelling',
      visibleResults: 'Immediate structural change',
      returnToRoutine: 'Same day (avoid intense workouts for 48h)',
      sessionsNeeded: '1 session every 9–18 months',
      bestFor: 'Volume loss, contouring, jawline, lips',
      suitableSkinTypes: 'All adult skin profiles'
    },
    benefits: [
      { title: 'Immediate Structural Lift', description: 'Restores youth-defining cheek apex and sharpens jawline borders.' },
      { title: 'Deep Tissue Hydration', description: 'Hyaluronic acid binds 1,000x its weight in water, enhancing skin quality.' },
      { title: 'Natural Facial Animation', description: 'Modern cohesive gels flex seamlessly with dynamic smile and speech movements.' }
    ],
    approachHeading: 'Enhance, Never Alter.',
    approachParagraphs: [
      'We believe facial fillers should restore what time has diminished, not create artificial new features. Our work respects your unique ethnic bone structure and natural facial identity.'
    ],
    results: {
      format: 'quote',
      quote: 'My under-eye hollows and smile folds made me look permanently exhausted. The subtle filler placement gave me back the fresh, rested look I had ten years ago.',
      attribution: 'Patient, 22Luna Contouring Program'
    },
    faqs: [
      { question: 'What if I am unhappy with the result?', answer: 'Hyaluronic acid fillers are 100% reversible. We can dissolve the product safely and quickly using an enzyme called Hyaluronidase.' },
      { question: 'Will people be able to tell I got filler?', answer: 'No. When placed in the correct deep tissue layers by experienced physicians, fillers look completely natural and feel soft to the touch.' },
      { question: 'How long do dermal fillers last?', answer: 'Depending on the area treated and product density, results last between 9 to 18 months.' }
    ],
    actives: ['Cross-Linked Hyaluronic Acid (Juvederm, Restylane, Teosyal)'],
    technology: 'Atraumatic Micro-Cannula Injection'
  },

  'thread-lifts': {
    slug: 'thread-lifts',
    name: 'Thread Lifts',
    tagline: 'Absorbable surgical polydioxanone (PDO/PCL) suspension threads to reposition sagging tissues and stimulate collagen.',
    category: 'Skin',
    snapshot: {
      duration: '45 – 60 minutes',
      comfortLevel: 'Painless with local anaesthesia',
      downtime: '3 to 5 days (mild swelling and tightness)',
      visibleResults: 'Immediate mechanical lift; peak neo-collagenesis at 3 months',
      suitableFor: 'Midface sagging, jowls, drooping brows, jawline laxity',
      sessions: 'Single procedure, results last 12 to 24 months',
    },
    introHeading: 'Non-Surgical Tissue Suspension.\nCollagen Neo-Genesis.',
    introLabel: 'ABSORBABLE SUSPENSION THREADS',
    introParagraphs: [
      'Thread Lifting at 22Luna is a minimally invasive non-surgical lifting procedure designed to lift descending facial tissues and restore the youthful V-shaped facial contour.',
      'Using biocompatible, fully absorbable PDO/PCL threads with microscopic bi-directional barbs, our surgeons elevate skin laxity and anchor soft tissue to firm temporal fascia while triggering prolonged collagen production.'
    ],
    whyChooseItems: [
      { title: 'Fully Biodegradable Threads', description: 'PDO and PCL sutures dissolve safely via hydrolysis over 6 to 9 months.' },
      { title: 'Dual-Action Rejuvenation', description: 'Immediate mechanical traction combined with long-term collagen neo-genesis.' },
      { title: 'Zero Surgical Scars', description: 'Inserted through tiny micro-entry points hidden along the hairline.' }
    ],
    suitability: {
      idealFor: [
        'Mild to moderate skin laxity and jowling',
        'Loss of jawline definition and midface cheek sagging',
        'Drooping eyebrow arches and heavy marionette folds',
        'Patients seeking surgical facelift results without general anesthesia'
      ],
      advisedAgainst: [
        'Excessive heavy, thick skin with severe skin laxity (better suited for surgery)',
        'Active systemic autoimmune conditions or blood clotting disorders'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Vector Mapping', description: 'Vectors of lift are calculated and drawn while the patient is seated upright.' },
      { number: '02', label: 'Local Anesthetic Block', description: 'Target entry points and vector pathways are completely numbed with local lidocaine.' },
      { number: '03', label: 'Thread Placement', description: 'Threads are guided through safe subcutaneous planes using blunt micro-cannulas.' },
      { number: '04', label: 'Tension & Trimming', description: 'Barbs engage with deep tissue; the doctor applies calibrated tension and trims the ends.' }
    ],
    journey: [
      { id: 'before', label: 'Consult', points: ['Anatomical assessment of tissue mobility', 'Stop anti-inflammatories 5 days prior'] },
      { id: 'during', label: 'Procedure', points: ['Takes 45–60 minutes; completely numb', 'Slight sensation of tugging or pressure'] },
      { id: 'after', label: 'First 48 Hours', points: ['Mild swelling and puckering near entry points', 'Wear supportive sleep posture'] },
      { id: 'recovery', label: 'Settling', points: ['Tightness eases in 7–10 days', 'Collagen matrix continues firming for 6 months'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Painless (local anaesthesia block)',
      anaesthesia: 'Local Lidocaine injection',
      downtime: '3 to 5 days mild swelling',
      visibleResults: 'Immediate lift; improves over 3 months',
      returnToRoutine: '2 to 3 days (avoid dental work/saunas for 2 weeks)',
      sessionsNeeded: '1 procedure every 18 to 24 months',
      bestFor: 'Jowls, jawline contour, cheek sag',
      suitableSkinTypes: 'Mild to moderate tissue laxity'
    },
    benefits: [
      { title: 'Immediate Jawline Repositioning', description: 'Physically elevates descending jowls and sharpens jawline angles.' },
      { title: 'Continuous Collagen Remodelling', description: 'Dissolving thread matrix stimulates dense type I and type III collagen synthesis.' },
      { title: 'Natural Vector Alignment', description: 'Follows natural facial ligaments without creating a wind-blown surgical look.' }
    ],
    approachHeading: 'Anatomical Precision.',
    approachParagraphs: [
      'Successful thread lifting depends entirely on precise subcutaneous plane navigation. Our doctors place threads in the superficial musculoaponeurotic system (SMAS) layer to ensure sturdy anchoring and completely natural tissue movement.'
    ],
    results: {
      format: 'quote',
      quote: 'My jawline and jowls were starting to make me look older than I felt. The thread lift snatched my jawline right back in a single 45-minute session.',
      attribution: 'Patient, 22Luna Lifting Program'
    },
    faqs: [
      { question: 'Can you feel the threads under your skin?', answer: 'No. When placed in the correct deep plane, threads cannot be seen or felt once initial swelling subsides.' },
      { question: 'What is the recovery protocol?', answer: 'Avoid wide mouth opening (e.g. dental appointments), sleeping on your side, and intense exercise for 2 weeks post-procedure.' }
    ],
    actives: ['Polydioxanone (PDO) & Polycaprolactone (PCL) Barbed Threads'],
    technology: 'Absorbable Subcutaneous Suspension Vectors'
  },

  'mesotherapy': {
    slug: 'mesotherapy',
    name: 'Mesotherapy',
    tagline: 'Micro-injections of custom skin-boosters, polynucleotides, hyaluronic acid, and vitamins into the middle dermis.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Comfortable with topical numbing',
      downtime: '12 to 24 hours (tiny papules settle rapidly)',
      visibleResults: 'Glass skin hydration in 3 to 7 days',
      suitableFor: 'Dehydration, dullness, fine crepey lines, under-eye darkening',
      sessions: '3 sessions spaced 3 weeks apart',
    },
    introHeading: 'Direct Dermal Nutrition.\nIntense Cellular Plumping.',
    introLabel: 'SKIN-BOOSTERS & MESOTHERAPY',
    introParagraphs: [
      'Mesotherapy at 22Luna bypasses the epidermal barrier to inject pharmaceutical-grade vitamins, non-crosslinked hyaluronic acid, amino acids, and polynucleotides directly into the mesoderm.',
      'This direct micro-infusion stimulates cellular metabolism, supercharges fibroblast activity, and restores intense luminous hydration from the inside out.'
    ],
    whyChooseItems: [
      { title: '100% Bio-Availability', description: 'Zero loss of active potency compared to topical skincare serums.' },
      { title: 'Custom Cocktail Formulation', description: 'Blended for your specific needs: pigmentation, glow, or barrier restoration.' },
      { title: 'Ultra-Fine Multi-Needle Injector', description: 'Precise automated micro-dosing ensures uniform depth and minimal discomfort.' }
    ],
    suitability: {
      idealFor: [
        'Dull, lackluster, dehydrated skin lacking bounce',
        'Superficial crepey lines on cheeks, neck, and hands',
        'Tired, dark, or crepey under-eye periorbital skin',
        'Post-sun or post-travel skin fatigue'
      ],
      advisedAgainst: [
        'Active skin dermatitis or viral lesions',
        'Blood thinning medications (increases transient bruising)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Topical Desensitization', description: 'A potent numbing cream is applied for 20 minutes.' },
      { number: '02', label: 'Custom Cocktail Prep', description: 'Vitamins, hyaluronic acid, and peptides are freshly combined.' },
      { number: '03', label: 'Micro-Droplet Delivery', description: 'Microscopic doses are placed 1–2mm deep across the entire facial grid.' },
      { number: '04', label: 'Calming Recovery Seal', description: 'A cryogenic peptide mask is applied to rapidly soothe insertion sites.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Arrive clean-faced', 'Avoid alcohol and aspirin 24h prior'] },
      { id: 'during', label: 'In Clinic', points: ['Feels like tiny, rapid light taps', 'Comfortable throughout'] },
      { id: 'after', label: 'Immediate', points: ['Small mosquito-bite papules across skin', 'Papules dissolve into tissues within 12–24h'] },
      { id: 'recovery', label: 'Glow Reveal', points: ['Intense glass skin radiance appears on days 3–5', 'Hydration lasts for months'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'High (strong topical numbing)',
      anaesthesia: 'Topical cream',
      downtime: '12 to 24 hours of micro-papules',
      visibleResults: 'Visible radiance within 3 to 5 days',
      returnToRoutine: 'Next day',
      sessionsNeeded: '3 sessions for full dermal saturation',
      bestFor: 'Glass skin, dehydration, crepey fine lines',
      suitableSkinTypes: 'All skin types'
    },
    benefits: [
      { title: 'Dermal Moisture Saturation', description: 'Deeply hydrates the extracellular matrix with non-crosslinked HA.' },
      { title: 'Collagen Stimulating Actives', description: 'Supplies essential amino acids and polynucleotide building blocks.' },
      { title: 'Pore Refinement & Radiance', description: 'Tightens skin texture and restores a luminous dewy finish.' }
    ],
    approachHeading: 'Direct Dermal Nutrition.',
    approachParagraphs: [
      'Topical creams can only penetrate so far. Mesotherapy places the most potent bio-stimulators directly where collagen and elastin are manufactured.'
    ],
    results: {
      format: 'quote',
      quote: 'My skin was dry and constantly looked dull no matter how much moisturizer I used. After the skin booster course, my face has an effortless glass-skin glow.',
      attribution: 'Patient, 22Luna Glow Program'
    },
    faqs: [
      { question: 'How long do the little bumps last?', answer: 'The tiny micro-papules typically disappear within 12 to 24 hours as the hyaluronic acid absorbs into the deeper dermis.' },
      { question: 'Is mesotherapy the same as fillers?', answer: 'No. Fillers use thick crosslinked gels to add shape and volume. Mesotherapy uses fluid, free hyaluronic acid and vitamins to hydrate and condition the skin without changing your facial shape.' }
    ],
    actives: ['Non-Crosslinked Hyaluronic Acid', 'Polynucleotides', 'Glutathione', 'Vitamin B Complex', 'Amino Acids'],
    technology: 'Automated Micro-Dermal Injection'
  },

  'lip-rejuvenation': {
    slug: 'lip-rejuvenation',
    name: 'Lip Rejuvenation / Lip Volume and Contour',
    tagline: 'Artistic lip mapping to restore vermilion hydration, define the cupid’s bow, and balance lip symmetry.',
    category: 'Skin',
    snapshot: {
      duration: '30 minutes',
      comfortLevel: 'Very comfortable (dental block or topical lidocaine)',
      downtime: '2 to 3 days (mild swelling and bruising)',
      visibleResults: 'Immediate definition and pillowy hydration',
      suitableFor: 'Thin lips, vertical smoker lines, volume loss, asymmetry',
      sessions: '1 session, maintained every 9 to 12 months',
    },
    introHeading: 'Artistic Vermilion Mapping.\nSupple, Defined Hydration.',
    introLabel: 'LIP CONTOURING & RESTORATION',
    introParagraphs: [
      'Lip Rejuvenation at 22Luna is grounded in anatomical proportion and subtle enhancement. We reject overfilled, unnatural duck-lips in favor of crisp border definition, soft pillowy volume, and corrected symmetry.',
      'Using ultra-flexible hyaluronic acid formulations (such as Restylane Kysse or Juvederm Volbella), our physicians define the vermilion border, hydrate perioral lines, and restore natural lip bounce.'
    ],
    whyChooseItems: [
      { title: 'Proportion-Led Mapping', description: 'Follows natural 1:1.6 golden ratio between upper and lower lip.' },
      { title: 'Zero Overfilling Philosophy', description: 'We focus on border definition and hydration rather than bulky projection.' },
      { title: 'Dynamic Tissue Integration', description: 'Ultra-pliable gels that move and feel completely soft during speech and smiling.' }
    ],
    suitability: {
      idealFor: [
        'Naturally thin or volume-depleted lips',
        'Loss of crisp cupid’s bow and border definition',
        'Vertical perioral smoker / barcode lines around the mouth',
        'Lip asymmetry or uneven top-to-bottom balance'
      ],
      advisedAgainst: [
        'Active cold sores or herpes simplex lesions',
        'Pregnancy or breastfeeding'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Proportion Mapping', description: 'Lip height, philtral columns, and oral commissures are mapped.' },
      { number: '02', label: 'Complete Anesthetic Prep', description: 'Strong topical cream or an optional gentle dental nerve block ensures complete numbness.' },
      { number: '03', label: 'Micro-Droplet Placement', description: 'Filler is placed along the border and body using ultra-fine micro-needles.' },
      { number: '04', label: 'Lip Hydration Seal', description: 'A soothing arnica and peptide lip balm is locked in to minimize swelling.' }
    ],
    journey: [
      { id: 'before', label: 'Prep', points: ['Stop aspirin/alcohol 24h before', 'Take arnica if prone to bruising'] },
      { id: 'during', label: 'Session', points: ['Completely numb and comfortable', 'Takes roughly 20 minutes'] },
      { id: 'after', label: 'Days 1–3', points: ['Mild initial swelling (peaks at 24h)', 'Ice gently and keep lips hydrated'] },
      { id: 'recovery', label: 'Settled Result', points: ['Softens into natural pillowy texture in 7–10 days', 'Lasts 9 to 12 months'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Painless (dental block or numbing)',
      anaesthesia: 'Topical cream / Local block',
      downtime: '2 to 3 days mild swelling',
      visibleResults: 'Immediate',
      returnToRoutine: 'Same day (avoid hot drinks/exercise for 24h)',
      sessionsNeeded: '1 session per year',
      bestFor: 'Lip volume, border definition, hydration',
      suitableSkinTypes: 'All candidates'
    },
    benefits: [
      { title: 'Enhanced Lip Definition', description: 'Sharpens the cupid’s bow and smooths the vermilion border.' },
      { title: 'Pillowy Moisture Lock', description: 'Eliminates dry, chapped perioral lines through deep HA binding.' },
      { title: 'Restored Symmetry', description: 'Corrects uneven volume distribution between left and right sides.' }
    ],
    approachHeading: 'Elegance in Every Detail.',
    approachParagraphs: [
      'Our lip artistry focuses on crisp structural borders and soft hydration. When done correctly, your lips will look lush, youthful, and completely natural.'
    ],
    results: {
      format: 'quote',
      quote: 'I wanted my lips to look hydrated and defined, not obviously filled. Dr. Niharika gave me the most elegant, subtle result. Nobody guessed I had filler done!',
      attribution: 'Patient, 22Luna Aesthetics'
    },
    faqs: [
      { question: 'Will my lips feel hard or lumpy?', answer: 'No. We use soft, flexible cross-linked hyaluronic acid designed specifically for mobile lip tissue. Once settled, they feel completely soft and natural.' },
      { question: 'How much swelling should I expect?', answer: 'Swelling is normal and peaks within the first 24 to 48 hours. By day 4, the swelling resolves into your true, natural result.' }
    ],
    actives: ['Flexible Hyaluronic Acid (Restylane Kysse / Juvederm Volbella)'],
    technology: 'Precision Vermilion Micro-Injections'
  },

  'liquid-rhinoplasty': {
    slug: 'liquid-rhinoplasty',
    name: 'Liquid Rhinoplasty',
    tagline: 'Non-surgical nose contouring and symmetry refinement using precise hyaluronic acid filler micro-aliquots.',
    category: 'Skin',
    snapshot: {
      duration: '20 – 30 minutes',
      comfortLevel: 'Mild pressure only (fully numbed)',
      downtime: 'Zero (minimal redness for 24 hours)',
      visibleResults: 'Instant dorsal straightening and tip elevation',
      suitableFor: 'Dorsal humps, nasal bridge dips, drooping tip, asymmetry',
      sessions: 'Single 20-minute procedure, lasts 12 to 18 months',
    },
    introHeading: 'Profile Balancing.\nNon-Surgical Precision.',
    introLabel: 'NON-SURGICAL NOSE REFINEMENT',
    introParagraphs: [
      'Liquid Rhinoplasty at 22Luna is an advanced non-surgical procedure that reshapes the nasal profile in under 30 minutes without general anesthesia, bone breaking, or prolonged surgical downtime.',
      'By placing micro-droplets of high-G-prime dermal filler along strategic points of the nasal bridge and columella, our physicians camouflage dorsal humps, lift drooping nasal tips, and straighten profile curves.'
    ],
    whyChooseItems: [
      { title: 'Vascular Safety First', description: 'Performed strictly by senior physicians using micro-cannulas and aspiration checks.' },
      { title: 'Instant 15-Minute Profile Transformation', description: 'Walk out with an immediately straightened, balanced nasal silhouette.' },
      { title: 'Completely Reversible', description: 'Can be dissolved safely at any time using hyaluronidase.' }
    ],
    suitability: {
      idealFor: [
        'Dorsal bridge humps or bumps on the nasal profile',
        'Flat or low nasal bridge needing definition and height',
        'Drooping nasal tip during smiling',
        'Post-surgical irregularities or mild asymmetries'
      ],
      advisedAgainst: [
        'Patients seeking reduction of large nostrils or significant narrowing',
        'Previous multiple complex surgical rhinoplasties with compromised vascular anatomy'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Profile Silhouette Assessment', description: 'Nasofrontal and nasolabial angles are measured with digital calipers.' },
      { number: '02', label: 'Targeted Numbing', description: 'Local anesthetic cream and ice desensitize the nasal dorsum.' },
      { number: '03', label: 'Micro-Aliquots Injections', description: 'Tiny micro-droplets of firm structural filler are placed along the midline bone.' },
      { number: '04', label: 'Columella Support', description: 'Optional micro-droplet placed at the columella base to elevate the nasal tip.' }
    ],
    journey: [
      { id: 'before', label: 'Assessment', points: ['Detailed profile photo mapping', 'Avoid sunglasses for 48 hours after'] },
      { id: 'during', label: 'Procedure', points: ['Quick, 15–20 minutes', 'You hold a mirror to view instant progress'] },
      { id: 'after', label: 'Immediate', points: ['Instant straight bridge visible', 'Mild tenderness for 24 hours'] },
      { id: 'recovery', label: 'Care', points: ['Do not press glasses on the bridge for 1 week', 'Lasts 12–18 months'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Comfortable',
      anaesthesia: 'Topical & local',
      downtime: 'Zero (no glasses on bridge for 7 days)',
      visibleResults: 'Instant',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 session every 12–18 months',
      bestFor: 'Dorsal hump correction, straight nasal bridge',
      suitableSkinTypes: 'Adult candidates with structural bridge concerns'
    },
    benefits: [
      { title: 'Straightens Nasal Profile', description: 'Camouflages dorsal humps by filling the depression above and below the bump.' },
      { title: 'Elevates Drooping Tip', description: 'Creates the visual illusion of a smaller, more refined nose without surgery.' },
      { title: 'Instant Confidence', description: 'No surgical splints, black eyes, or weeks of bandaging required.' }
    ],
    approachHeading: 'Micro-Millimeter Precision.',
    approachParagraphs: [
      'Nasal anatomy is vascularly delicate. We use conservative micro-aliquots and safe delivery techniques to achieve crisp profile symmetry safely.'
    ],
    results: {
      format: 'quote',
      quote: 'I hated my side profile because of a small bump on my bridge. In 15 minutes, Dr. Niharika completely smoothed my profile without surgery. Life-changing!',
      attribution: 'Patient, 22Luna Profile Program'
    },
    faqs: [
      { question: 'Will adding filler make my nose look bigger?', answer: 'Counterintuitively, no. By creating a straight, harmonious line, the nose blends seamlessly into your face and actually appears smaller and more balanced.' },
      { question: 'Can I wear glasses after the procedure?', answer: 'You should avoid resting heavy glasses or sunglasses directly on the injected bridge area for 7 to 10 days while the filler integrates.' }
    ],
    actives: ['High-G-Prime Hyaluronic Acid (Juvederm Voluma / Restylane Lyft)'],
    technology: 'Micro-Aliquot Profile Precision Injections'
  },

  'non-surgical-facial-contouring': {
    slug: 'non-surgical-facial-contouring',
    name: 'Non Surgical Facial Contouring',
    tagline: 'Full-face 3D profile balancing combining structural fillers, neuromodulators, and bio-stimulators.',
    category: 'Skin',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Comfortable with local anesthesia and cannulas',
      downtime: '1 to 3 days mild swelling',
      visibleResults: 'Immediate structural refinement; full harmony in 14 days',
      suitableFor: 'Asymmetries, chin recession, weak jawline, midface flattening',
      sessions: 'Single master session, touch-up in 12–18 months',
    },
    introHeading: 'Full-Face Architectural Harmony.\nSculpted Proportion.',
    introLabel: '3D PROFILE BALANCING',
    introParagraphs: [
      'Non-Surgical Facial Contouring at 22Luna is a holistic approach to facial aesthetics that considers the relationship between the forehead, cheeks, nose, chin, and jawline.',
      'Rather than treating a single isolated crease, our physicians assess your full profile dynamics to restore bone support, correct facial asymmetries, and sculpt crisp, youthful angles.'
    ],
    whyChooseItems: [
      { title: 'Global Facial Assessment', description: 'We balance forehead-to-chin proportions for cohesive beauty from all angles.' },
      { title: 'Multi-Modality Approach', description: 'Combines structural fillers, jawline relaxers, and bio-stimulators in one session.' },
      { title: 'Customized to Your Identity', description: 'Preserves your natural ethnicity and facial character while refining contours.' }
    ],
    suitability: {
      idealFor: [
        'Weak or recessed chin causing profile imbalance',
        'Flattened cheekbones and descending midface fat pads',
        'Undefined jaw-to-neck transition',
        'Facial asymmetries and structural volume depletion'
      ],
      advisedAgainst: [
        'Pregnancy or breastfeeding',
        'Patients seeking radical surgical bone reduction'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: '3D Photographic Angle Scan', description: 'Profile, oblique, and frontal angles are analyzed for golden ratio harmony.' },
      { number: '02', label: 'Multi-Point Anesthetic Prep', description: 'Entry points are numbed with lidocaine for total comfort.' },
      { number: '03', label: 'Structural Vector Placement', description: 'High-density fillers rebuild cheek apexes, chin projection, and jaw angles.' },
      { number: '04', label: 'Dynamic Expression Test', description: 'You are evaluated in smile, speech, and neutral states to guarantee natural movement.' }
    ],
    journey: [
      { id: 'before', label: 'Planning', points: ['Comprehensive facial architecture consult', 'Detailed vector plan designed'] },
      { id: 'during', label: 'In Suite', points: ['Approx. 45–60 minutes', 'Cannula delivery minimizes bruising'] },
      { id: 'after', label: 'Immediate', points: ['Immediate sculpted profile visible', 'Mild tenderness for 48 hours'] },
      { id: 'recovery', label: 'Final Result', points: ['Full integration at 2 weeks', 'Long-lasting structural support (12–18 months)'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'High comfort (cannula technique)',
      anaesthesia: 'Topical and local blocks',
      downtime: '2 to 3 days mild swelling',
      visibleResults: 'Immediate; optimal at 14 days',
      returnToRoutine: 'Next day',
      sessionsNeeded: '1 comprehensive session',
      bestFor: 'Profile balancing, chin projection, cheek definition',
      suitableSkinTypes: 'All facial profiles'
    },
    benefits: [
      { title: 'Holistic Profile Balancing', description: 'Aligns the forehead, nose, and chin into harmonious alignment.' },
      { title: 'Midface Elevation', description: 'Lifts sagging tissues by reinforcing the zygomatic arch bone support.' },
      { title: 'Sharper Jaw Definition', description: 'Creates a clean distinction between the jawline and the neck.' }
    ],
    approachHeading: 'Balance Over Volume.',
    approachParagraphs: [
      'True beauty is about proportion, not puffy volume. Our contouring protocols focus on millimeter-level structural changes that create dramatic elegance without looking artificial.'
    ],
    results: {
      format: 'quote',
      quote: 'Balancing my chin and cheeks completely transformed how my face photographs. My jawline is sharp and my profile looks balanced from every single angle.',
      attribution: 'Patient, 22Luna Master Contouring'
    },
    faqs: [
      { question: 'How is this different from getting basic cheek fillers?', answer: 'Basic fillers treat one spot. Full-face contouring evaluates how your chin balances your nose, and how your cheeks lift your smile lines, creating cohesive harmony.' },
      { question: 'How long do the results last?', answer: 'Structural contouring products typically last between 12 to 18 months, with gradual natural absorption.' }
    ],
    actives: ['High-Elasticity Hyaluronic Acid', 'Calcium Hydroxylapatite (Radiesse)'],
    technology: 'Full-Face Vector Cannula Layering'
  },

  'non-surgical-jawline-enhancement': {
    slug: 'non-surgical-jawline-enhancement',
    name: 'Non Surgical Jawline Enhancement',
    tagline: 'High-density structural filler and masseter neuromodulation to sharpen the mandibular border and neck transition.',
    category: 'Skin',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Comfortable with local anesthesia',
      downtime: '1 to 2 days mild tenderness',
      visibleResults: 'Immediate sharp mandibular definition',
      suitableFor: 'Soft jawline, mild jowling, weak mandibular angle, double chin appearance',
      sessions: 'Single session, maintained every 12 to 18 months',
    },
    introHeading: 'Defined Mandibular Angles.\nClean Profile Separation.',
    introLabel: 'JAWLINE CONTOURING & DEFINITION',
    introParagraphs: [
      'Non-Surgical Jawline Enhancement at 22Luna creates a crisp, well-defined mandibular line that separates the lower face from the neck, enhancing both masculine sharpness and feminine elegance.',
      'By placing firm, structural hyaluronic acid or calcium hydroxylapatite along the mandibular bone and angle of the jaw, our physicians tighten mild jowl laxity and sharpen the jaw silhouette.'
    ],
    whyChooseItems: [
      { title: 'Bone-Mimicking Density Gels', description: 'Ultra-firm structural fillers that sit firmly on bone without softening or spreading.' },
      { title: 'Cannula-Guided Contouring', description: 'Single entry point covers the entire jawline with minimal bruising.' },
      { title: 'Gender-Tailored Architecture', description: 'Straight, strong angles for men; softly curved, tapered definition for women.' }
    ],
    suitability: {
      idealFor: [
        'Soft, undefined jawline lacking bone projection',
        'Early jowl formation and loss of lower-face firmness',
        'Weak mandibular angles creating an illusion of double chin',
        'Facial slimming when combined with masseter Botox'
      ],
      advisedAgainst: [
        'Excessive submental fat (better combined with fat reduction protocols)',
        'Active infections or pregnancy'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Mandibular Vector Marking', description: 'The gonial angle, jaw body, and chin apex lines are precisely mapped.' },
      { number: '02', label: 'Anesthetic Entry Point', description: 'A tiny droplet of local lidocaine numbs the cannula entry at the jaw angle.' },
      { number: '03', label: 'Linear Periosteal Deposition', description: 'Structural gel is deposited directly over the mandibular bone.' },
      { number: '04', label: 'Angle Refinement', description: 'The gonial angle is sharpened to anchor the lower face structure.' }
    ],
    journey: [
      { id: 'before', label: 'Planning', points: ['Anatomical assessment of bone and soft tissue', 'Avoid alcohol 24h prior'] },
      { id: 'during', label: 'Procedure', points: ['Approx. 30 minutes', 'Virtually painless with cannula technique'] },
      { id: 'after', label: 'Immediate', points: ['Crisp jawline visible instantly in mirror', 'Mild soreness while chewing for 24–48 hours'] },
      { id: 'recovery', label: 'Settling', points: ['Firm and sharp result lasts 12–18 months', 'Zero long-term restrictions'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Comfortable',
      anaesthesia: 'Topical and local lidocaine',
      downtime: '1 to 2 days mild tenderness',
      visibleResults: 'Immediate',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 session every 12 to 18 months',
      bestFor: 'Jawline definition, jowl reduction, sharp chin',
      suitableSkinTypes: 'All candidates seeking lower-face definition'
    },
    benefits: [
      { title: 'Sharpened Mandibular Border', description: 'Creates clear visual separation between the lower jaw and the neck.' },
      { title: 'Camouflages Early Jowls', description: 'Lifts pre-jowl sulcus depressions to smooth out the straight jawline.' },
      { title: 'Slimming Visual Effect', description: 'Elongates the neck and slims the lower facial third.' }
    ],
    approachHeading: 'Structural Precision on Bone.',
    approachParagraphs: [
      'We deposit jawline fillers strictly along the periosteal bone plane to mimic natural bone projection, preventing the filler from migrating into mobile soft tissue.'
    ],
    results: {
      format: 'quote',
      quote: 'My jawline was soft and undefined. The enhancement gave me a clean, sharp jawline that completely elevated my side profile.',
      attribution: 'Patient, 22Luna Care Program'
    },
    faqs: [
      { question: 'Will this make my face look too masculine?', answer: 'No. For women, we create a soft, tapered, elegant jawline. For men, we emphasize wider, stronger square angles. Every plan is bespoke.' },
      { question: 'How long does jawline filler last?', answer: 'Because the jawline has minimal muscle movement compared to the lips, structural fillers placed here last 12 to 18 months.' }
    ],
    actives: ['Structural Hyaluronic Acid (Juvederm Volux / Restylane Defyne)'],
    technology: 'Sub-Periosteal Mandibular Cannula Injections'
  }
};
