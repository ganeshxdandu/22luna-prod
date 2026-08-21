import type { TreatmentData } from '../treatment-data';

export const DENTAL_CLINICAL_DATA: Record<string, TreatmentData> = {
  'cleaning-polishing': {
    slug: 'cleaning-polishing',
    name: 'Cleaning and Polishing (Scaling)',
    tagline: 'Ultrasonic piezo scaling and airflow polish to eliminate stubborn tartar calculus, stains, and periodontal bacteria.',
    category: 'Dental',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Comfortable & gentle (ultrasonic water-cooled tip)',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate squeaky-clean smoothness and brightened enamel',
      suitableFor: 'Tartar calculus, tea/coffee stains, bleeding gums, bad breath (halitosis)',
      sessions: 'Every 6 months for optimal oral health',
    },
    introHeading: 'Ultrasonic Piezo Scaling.\nEnamel Airflow Polishing.',
    introLabel: 'PREVENTATIVE PERIODONTAL CARE',
    introParagraphs: [
      'Cleaning and Polishing at 22Luna is a gentle, thorough periodontal prophylaxis procedure performed using gentle ultrasonic micro-vibrations and fine airflow polishing.',
      'Unlike abrasive scraping, our high-frequency piezo scaler safely shatters calcified calculus (tartar) and bacterial plaque from above and below the gumline while a glycine air-polishing mist removes deep tea, coffee, and tobacco stains without scratching your tooth enamel.'
    ],
    whyChooseItems: [
      { title: 'Gentle Piezo Ultrasonic Technology', description: 'Vibrates calculus off the tooth using sound waves and water cavitation without scraping enamel.' },
      { title: 'Non-Abrasive Glycine Airflow Polishing', description: 'Removes stubborn microscopic extrinsic stains from tight interdental spaces.' },
      { title: 'Doctor-Led Periodontal Health Audit', description: 'Full gum pocket depth and enamel demineralization evaluation included.' }
    ],
    suitability: {
      idealFor: [
        'Hardened yellow/brown tartar buildup behind front teeth',
        'Gums that bleed when brushing or flossing (early gingivitis)',
        'Tea, coffee, red wine, and tobacco surface staining',
        'Routine bi-annual oral hygiene maintenance'
      ],
      advisedAgainst: [
        'Acute severe periodontal abscesses (requires specialized deep root debridement)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Intraoral Digital Examination', description: 'The dentist checks plaque index, gum pocket depth, and enamel integrity.' },
      { number: '02', label: 'Ultrasonic Piezo Debridement', description: 'Micro-sound waves shatter calculus deposits while a water spray keeps teeth cool.' },
      { number: '03', label: 'Airflow Glycine Polishing', description: 'A pressurized air, water, and ultra-fine glycine powder mist blasts away stains.' },
      { number: '04', label: 'Fluoride Remineralization Shield', description: 'A protective enamel-strengthening fluoride varnish is applied.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['No special prep required', 'Rest in our comfortable, calming dental suite'] },
      { id: 'during', label: 'In Chair', points: ['Water spray and mild vibrations; completely comfortable', 'Takes 30–40 minutes'] },
      { id: 'after', label: 'Immediate', points: ['Teeth feel ultra-smooth and tongue slides effortlessly', 'Gums feel refreshed'] },
      { id: 'recovery', label: 'Maintenance', points: ['Eat and drink normally after 30 minutes', 'Repeat every 6 months'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Comfortable & gentle',
      anaesthesia: 'None needed (topical gel if gums are sensitive)',
      downtime: 'Zero',
      visibleResults: 'Immediate clean, bright enamel',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Every 6 months',
      bestFor: 'Plaque, tartar, bleeding gums, stains',
      suitableSkinTypes: 'All adults and children'
    },
    benefits: [
      { title: 'Stops Bleeding Gums (Gingivitis)', description: 'Removes bacterial toxins that cause gum inflammation and bone loss.' },
      { title: 'Erases Stubborn Food Stains', description: 'Lifts years of tea, coffee, and tobacco discoloration from enamel surfaces.' },
      { title: 'Freshens Breath Permanently', description: 'Eliminates anaerobic bacteria hiding beneath the gumline causing halitosis.' }
    ],
    approachHeading: 'Gentle, Enamel-Safe Hygiene.',
    approachParagraphs: [
      'Many people avoid dental cleanings out of fear of pain or scraping. Our modern ultrasonic and airflow technology makes dental hygiene a relaxing, spa-like experience that protects your enamel.'
    ],
    results: {
      format: 'quote',
      quote: 'I used to hate dental cleanings because of the scraping sound. At 22Luna, the ultrasonic cleaning was completely painless and my teeth have never felt this clean and smooth!',
      attribution: 'Patient, 22Luna Dental Care'
    },
    faqs: [
      { question: 'Does scaling weaken or thin my teeth?', answer: 'No! This is a common myth. Ultrasonic scaling only removes foreign calculus and bacteria; it cannot damage or thin healthy tooth enamel.' },
      { question: 'Will my teeth be sensitive after cleaning?', answer: 'If you had heavy tartar covering your tooth roots, you might feel slight mild temperature sensitivity for 24–48 hours as gums adapt. Our fluoride varnish eliminates this rapidly.' }
    ],
    actives: ['Glycine Polishing Powder', 'Sodium Fluoride Enamel Varnish', 'Chlorhexidine Rinse'],
    technology: 'Ultrasonic Piezoelectric Scaling & Subgingival Airflow Polishing'
  },

  'filling-restoration': {
    slug: 'filling-restoration',
    name: 'Filling / Restoration (Composite Bonding)',
    tagline: 'Tooth-colored biocompatible nano-hybrid composite restorations to repair decay, fix chipped edges, and close gaps seamlessly.',
    category: 'Dental',
    snapshot: {
      duration: '30 – 45 minutes per tooth',
      comfortLevel: 'Completely painless (local numbing as needed)',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate tooth restoration matching exact natural enamel shade',
      suitableFor: 'Cavities, chipped teeth, worn enamel edges, silver amalgam replacement',
      sessions: 'Single appointment',
    },
    introHeading: 'Nano-Hybrid Composites.\nInvisible Enamel Bonding.',
    introLabel: 'AESTHETIC COMPOSITE RESTORATIONS',
    introParagraphs: [
      'Composite Fillings & Restorations at 22Luna use multi-shaded, nano-ceramic hybrid composite resins that blend invisibly with your natural tooth enamel and dentin layers.',
      'Unlike old silver mercury amalgams that require cutting healthy tooth structure, our minimally invasive adhesive bonding technique bonds directly to tooth minerals, preserving maximum natural tooth structure while restoring full chewing strength.'
    ],
    whyChooseItems: [
      { title: '100% Mercury-Free & Biocompatible', description: 'High-strength ceramic-infused composite resins with zero heavy metals.' },
      { title: 'Layered Polychromatic Shading', description: 'Recreates natural enamel translucency and anatomical chewing grooves.' },
      { title: 'Minimally Invasive Conservation', description: 'Removes only decayed tissue, leaving 100% of healthy enamel intact.' }
    ],
    suitability: {
      idealFor: [
        'Active dental cavities and tooth decay',
        'Chipped, fractured, or worn enamel edges',
        'Replacing old, ugly dark silver amalgam fillings',
        'Small cosmetic gap closures (diastema closure)'
      ],
      advisedAgainst: [
        'Extensive decay destroying more than 60% of tooth crown (requires porcelain onlay or crown)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Shade Mapping & Isolation', description: 'Exact multi-layered tooth shade is selected using clinical shade guides and a rubber dam is placed.' },
      { number: '02', label: 'Micro-Removal of Decay', description: 'The cavity is cleaned conservatively under high optical loupe magnification.' },
      { number: '03', label: 'Adhesive Primer & Layering', description: 'A microscopic bonding agent is applied, followed by layered composite sculpting.' },
      { number: '04', label: 'LED Light Curing & Polish', description: 'High-intensity blue LED cures the composite rock-hard in 20 seconds, followed by diamond polishing.' }
    ],
    journey: [
      { id: 'before', label: 'Assessment', points: ['Digital X-ray confirms cavity depth', 'Local anesthetic makes tooth numb'] },
      { id: 'during', label: 'In Chair', points: ['Takes 30–45 minutes', '100% comfortable throughout'] },
      { id: 'after', label: 'Immediate', points: ['Restoration is fully cured and hardened immediately', 'Bite is checked and adjusted'] },
      { id: 'recovery', label: 'Long Term', points: ['Chew normally once local numbness wears off', 'Blends invisibly for years'] }
    ],
    quickFacts: {
      duration: '45 minutes',
      comfort: 'Painless (local anesthetic used)',
      anaesthesia: 'Local Lidocaine',
      downtime: 'Zero',
      visibleResults: 'Immediate tooth restoration',
      returnToRoutine: 'Immediate (wait for numbness to wear off before eating)',
      sessionsNeeded: '1 single appointment',
      bestFor: 'Cavities, chipped teeth, replacing silver fillings',
      suitableSkinTypes: 'All candidates'
    },
    benefits: [
      { title: 'Completely Invisible Match', description: 'Matches your tooth’s natural translucency and white shade perfectly.' },
      { title: 'Reinforces Weakened Tooth Structure', description: 'Adhesive chemical bonding strengthens remaining tooth walls against cracking.' },
      { title: 'Immediate Chewing Function', description: 'LED light curing hardens composite immediately so you can eat the same day.' }
    ],
    approachHeading: 'Biomimetic Tooth Restoration.',
    approachParagraphs: [
      'We practice biomimetic dentistry—designing restorations that mimic the mechanical flexibility and optical beauty of natural enamel and dentin.'
    ],
    results: {
      format: 'quote',
      quote: 'I had an old dark metal filling on my premolar that showed every time I laughed. 22Luna replaced it with an invisible tooth-colored restoration in 30 minutes. You can’t even tell it was filled!',
      attribution: 'Patient, 22Luna Dental Care'
    },
    faqs: [
      { question: 'How long do composite tooth fillings last?', answer: 'Modern nano-hybrid composite fillings last between 7 to 12 years or longer with good oral hygiene and regular dental cleanings.' },
      { question: 'Should I replace my old silver amalgam fillings?', answer: 'If your old silver fillings are leaking, showing cracks, causing dark tooth staining, or harboring recurrent decay underneath, replacing them with tooth-colored composite is highly recommended.' }
    ],
    actives: ['Nano-Hybrid Ceramic Composite', 'Phosphoric Acid Etchant', 'Universal Adhesive Bonding Agent'],
    technology: 'Magnification-Guided Adhesive Composite Layering'
  },

  'root-canal-treatment': {
    slug: 'root-canal-treatment',
    name: 'Root Canal Treatment (Microscope Enhanced)',
    tagline: 'Precision surgical operating microscope root canal therapy to eliminate tooth infection, relieve severe pain, and save your natural tooth.',
    category: 'Dental',
    snapshot: {
      duration: '60 – 90 minutes (often completed in a single comfortable visit)',
      comfortLevel: 'Completely painless (profound modern local anaesthesia)',
      downtime: 'Zero (mild chewing sensitivity for 24–48 hours)',
      visibleResults: 'Immediate permanent relief from throbbing infection pain; natural tooth saved',
      suitableFor: 'Deep dental decay, severe toothache, nerve pulpitis, dental abscesses, trauma',
      sessions: '1 to 2 visits depending on infection severity',
    },
    introHeading: 'Microscope-Enhanced Endodontics.\nPainless Natural Tooth Preservation.',
    introLabel: 'PRECISION ROOT CANAL THERAPY',
    introParagraphs: [
      'Root Canal Treatment at 22Luna is performed using high-powered surgical operating microscopes, rotary titanium endodontic files, and 3D digital imaging to eliminate infected dental pulp while saving your natural tooth.',
      'Under profound local anesthesia, our endodontists disinfect microscopic root canals that are invisible to the naked eye, flushing bacteria with warm ultrasonic irrigation and sealing the root hermetically with biocompatible gutta-percha.'
    ],
    whyChooseItems: [
      { title: 'High-Power Operating Microscope', description: '25x optical magnification reveals hidden micro-canals and anatomical canal branches.' },
      { title: '100% Painless Guarantee', description: 'Advanced computerized local anesthesia completely numbs the tooth nerve before we begin.' },
      { title: 'Single-Visit Endodontic Protocol', description: 'Most root canals are completed in one streamlined, comfortable 60-minute visit.' }
    ],
    suitability: {
      idealFor: [
        'Severe throbbing toothache waking you up at night',
        'Extreme lingering sensitivity to hot and cold liquids',
        'Swelling or pimple (fistula) on the gum near a damaged tooth',
        'Deep cavities penetrating into the dental pulp nerve'
      ],
      advisedAgainst: [
        'Teeth with vertical root fractures through the base (requires extraction and implant)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Profound Local Anesthesia & Dam Isolation', description: 'The tooth is completely numbed and isolated with a sterile rubber dam barrier.' },
      { number: '02', label: 'Microscopic Access', description: 'Under the dental microscope, a tiny access point is created to visualize root canal entrances.' },
      { number: '03', label: 'Rotary Cleaning & Ultrasonic Flush', description: 'Flexible nickel-titanium files and warm ultrasonic disinfectants sterilize all canal branches.' },
      { number: '04', label: 'Hermetic 3D Gutta-Percha Seal', description: 'Canals are sealed three-dimensionally to permanently block bacterial re-entry.' }
    ],
    journey: [
      { id: 'before', label: 'Consult', points: ['Digital X-ray / 3D CBCT scan', 'Painful nerve is completely numbed in minutes'] },
      { id: 'during', label: 'Procedure', points: ['Takes 60–75 minutes; zero pain felt', 'Many patients comfortably nap during treatment'] },
      { id: 'after', label: 'Immediate', points: ['Severe infection pain is gone immediately', 'Avoid chewing hard food on that side for 24h'] },
      { id: 'recovery', label: 'Crown Placement', points: ['A custom ceramic crown is placed within 1–2 weeks to protect tooth for a lifetime'] }
    ],
    quickFacts: {
      duration: '60 to 90 minutes',
      comfort: 'Painless (complete local anesthesia)',
      anaesthesia: 'Profound local block',
      downtime: 'Zero (mild soreness for 24 hours)',
      visibleResults: 'Immediate relief from tooth pain',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 or 2 visits',
      bestFor: 'Toothaches, infected nerves, saving natural teeth',
      suitableSkinTypes: 'All candidates with restorable teeth'
    },
    benefits: [
      { title: 'Saves Your Natural Tooth', description: 'Prevents tooth extraction, preserving your natural chewing power and jawbone volume.' },
      { title: 'Immediate Pain Elimination', description: 'Removes the inflamed, throbbing nerve tissue responsible for severe toothache.' },
      { title: 'Hermetic Bacterial Disinfection', description: 'Clears bone abscesses and prevents infection from spreading into the jaw.' }
    ],
    approachHeading: 'Modern Endodontics is Painless.',
    approachParagraphs: [
      'Root canals have an outdated reputation for being painful. In reality, modern microscope endodontics does not cause pain—it cures the pain of infection safely and comfortably.'
    ],
    results: {
      format: 'quote',
      quote: 'I had unbearable tooth pain for three days. Dr. at 22Luna did a single-visit root canal under the microscope. I felt zero pain during the entire procedure and slept peacefully that night!',
      attribution: 'Patient, 22Luna Dental Care'
    },
    faqs: [
      { question: 'Is a root canal painful?', answer: 'No! With modern anesthetics and microscope precision, getting a root canal feels no different than getting a routine filling. The procedure actually eliminates the excruciating pain of the infected nerve.' },
      { question: 'Why do I need a crown after a root canal?', answer: 'After a root canal, the tooth loses its internal blood supply and becomes brittle over time. A custom ceramic crown encases the tooth, preventing it from cracking under heavy chewing forces.' }
    ],
    actives: ['Sodium Hypochlorite Ultrasonic Flush', 'EDTA Chelating Gel', 'Bioceramic Gutta-Percha Sealer'],
    technology: 'Dental Operating Microscope & Rotary Nickel-Titanium Endodontics'
  },

  'crowns-bridges': {
    slug: 'crowns-bridges',
    name: 'Crowns and Bridges',
    tagline: 'Custom CAD/CAM zirconia and E-max porcelain crowns to reconstruct fractured teeth, protect root canals, and replace missing teeth.',
    category: 'Dental',
    snapshot: {
      duration: '45 minutes (scan & prep) + fit visit',
      comfortLevel: 'Completely comfortable (local numbing during prep)',
      downtime: 'Zero downtime',
      visibleResults: 'Indistinguishable natural enamel aesthetics and 100% chewing strength',
      suitableFor: 'Broken teeth, post-root-canal protection, missing tooth replacement, heavy wear',
      sessions: '2 visits (Prep & 3D Scan → Final Crown Delivery)',
    },
    introHeading: 'CAD/CAM Monolithic Zirconia.\nFlawless Anatomical Strength.',
    introLabel: 'CERAMIC CROWNS & BRIDGES',
    introParagraphs: [
      'Crowns and Bridges at 22Luna are engineered using state-of-the-art 3D intraoral digital scanners and precision CAD/CAM milling in monolithic zirconia and lithium disilicate (E-Max) porcelain.',
      'Whether encasing a weakened post-root-canal tooth, restoring a fractured molar, or replacing a missing tooth with a multi-unit bridge, our custom ceramics match your natural enamel shading, translucency, and exact bite occlusion.'
    ],
    whyChooseItems: [
      { title: '100% Metal-Free Ceramic Aesthetics', description: 'Zero dark metal lines at the gumline; completely translucent and natural.' },
      { title: 'Digital 3D Intraoral Scanning', description: 'Say goodbye to messy gagging impression pastes with our 3D digital camera.' },
      { title: 'Monolithic Fracture-Proof Zirconia', description: 'Withstands up to 1,200 MPa of chewing force for decades of durability.' }
    ],
    suitability: {
      idealFor: [
        'Teeth that have undergone root canal treatment',
        'Severely fractured, cracked, or heavily filled teeth',
        'Replacing 1 or 2 missing teeth without surgery (Dental Bridge)',
        'Cosmetic improvement of severely discolored or misshapen teeth'
      ],
      advisedAgainst: [
        'Severely damaged teeth with root fractures below the bone level'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Micro-Preparation & 3D Digital Scan', description: 'The tooth is conservatively shaped and scanned with an intraoral 3D camera.' },
      { number: '02', label: 'Shade & Translucency Customization', description: 'High-definition digital photographs record your natural enamel gradients.' },
      { number: '03', label: 'CAD/CAM Ceramic Milling', description: 'The crown is milled from a solid block of zirconia or E-max porcelain.' },
      { number: '04', label: 'Adhesive Cementation', description: 'The crown is tried in, checked for bite precision, and bonded permanently.' }
    ],
    journey: [
      { id: 'before', label: 'Visit 1: Prep', points: ['Tooth is numbed and shaped', 'Fast 3D digital scan taken; temporary crown placed'] },
      { id: 'during', label: 'Laboratory', points: ['CAD/CAM milling of your bespoke ceramic crown in 3–5 days', 'Hand-glazed for realism'] },
      { id: 'after', label: 'Visit 2: Delivery', points: ['Temporary removed; permanent crown checked and cemented', 'Immediate full chewing function'] },
      { id: 'recovery', label: 'Long Term', points: ['Brush and floss normally', 'Lasts 15+ years with proper oral care'] }
    ],
    quickFacts: {
      duration: '2 appointments (45 mins each)',
      comfort: 'Painless (local anesthetic used during prep)',
      anaesthesia: 'Local Lidocaine',
      downtime: 'Zero',
      visibleResults: 'Immediate natural aesthetic restoration',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '2 visits',
      bestFor: 'Broken teeth, root-canal protection, bridges',
      suitableSkinTypes: 'All adult candidates'
    },
    benefits: [
      { title: 'Prevents Tooth Fractures', description: 'Distributes chewing forces evenly, preventing brittle teeth from splitting.' },
      { title: 'Indistinguishable from Enamel', description: 'Matches the exact shade, surface luster, and translucency of neighboring teeth.' },
      { title: 'Restores Complete Chewing Function', description: 'Enables you to chew hard foods, nuts, and meats with complete confidence.' }
    ],
    approachHeading: 'Digital Accuracy for Lifetime Fit.',
    approachParagraphs: [
      'A crown that fits poorly collects bacteria and causes gum inflammation. Our intraoral 3D scanning guarantees a sub-20-micron margin fit that seals the tooth permanently.'
    ],
    results: {
      format: 'quote',
      quote: 'I cracked my molar on an olive pit. 22Luna scanned it digitally and fitted a custom zirconia crown that feels and looks exactly like my real tooth. You can’t tell which tooth is the crown!',
      attribution: 'Patient, 22Luna Restorative Dentistry'
    },
    faqs: [
      { question: 'Will my crown show a black line near the gum?', answer: 'Never! Old crowns had a metal base that showed an ugly dark grey line over time. We use 100% metal-free zirconia and E-max porcelain that remains pure white and translucent forever.' },
      { question: 'How long do zirconia crowns last?', answer: 'With good daily brushing, flossing, and bi-annual cleanings, CAD/CAM zirconia crowns typically last 15 to 20+ years.' }
    ],
    actives: ['Monolithic Zirconia', 'Lithium Disilicate (E-Max)', 'Resin Adhesive Cement'],
    technology: '3D Intraoral Digital Scanning & CAD/CAM Precision Milling'
  },

  'dental-implants': {
    slug: 'dental-implants',
    name: 'Dental Implants',
    tagline: 'Permanent bio-integrated medical titanium root replacements with custom porcelain crowns to replace missing teeth for a lifetime.',
    category: 'Dental',
    snapshot: {
      duration: '45 – 60 minutes per implant placement',
      comfortLevel: 'Completely painless during surgery (profound local anaesthesia)',
      downtime: '2 to 3 days of soft food diet & mild tenderness',
      visibleResults: 'Permanent tooth replacement indistinguishable from natural teeth',
      suitableFor: 'Single missing tooth, multiple missing teeth, failing bridge, loose dentures',
      sessions: '2 phases: Surgical Placement → Osseointegration (3 months) → Permanent Crown',
    },
    introHeading: 'Bio-Integrated Titanium Roots.\nPermanent Lifetime Tooth Replacement.',
    introLabel: 'PRECISION DENTAL IMPLANTS',
    introParagraphs: [
      'Dental Implants at 22Luna are the gold-standard permanent replacement for missing teeth. An implant consists of a medical-grade titanium fixture placed into the jawbone, where it permanently fuses with bone tissue through a biological process called osseointegration.',
      'Guided by 3D Cone Beam CT (CBCT) imaging and surgical planning guides, our implantologists place implants with sub-millimeter precision, restoring 100% natural biting power and preventing the jawbone loss that follows tooth extraction.'
    ],
    whyChooseItems: [
      { title: '3D CBCT Surgical Guide Planning', description: 'Virtual 3D computer simulation identifies bone density and exact nerve positions before surgery.' },
      { title: 'Premium Global Implant Systems', description: 'We use exclusively world-leading Swiss and German implants (Straumann, Nobel Biocare).' },
      { title: 'Preserves Surrounding Teeth', description: 'Unlike bridges, implants replace missing teeth without shaving down adjacent healthy teeth.' }
    ],
    suitability: {
      idealFor: [
        'Single or multiple missing teeth',
        'Teeth that cannot be saved due to severe fractures or decay',
        'Loose, unstable partial or full dentures needing secure snap-on anchoring',
        'Preventing facial bone collapse and sunken cheeks after tooth loss'
      ],
      advisedAgainst: [
        'Uncontrolled diabetes or active bisphosphonate IV cancer therapy',
        'Severe untreated periodontal disease (must be treated prior)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: '3D CBCT Bone Diagnostic', description: 'High-resolution 3D scan evaluates bone width, height, and density in millimeters.' },
      { number: '02', label: 'Guided Surgical Placement', description: 'Under local anesthesia, the titanium implant is placed comfortably into the bone socket.' },
      { number: '03', label: 'Osseointegration Phase', description: 'Bone cells fuse tightly to the titanium surface over a 3-month healing window.' },
      { number: '04', label: 'Custom Ceramic Crown Delivery', description: 'A custom CAD/CAM screw-retained zirconia crown is secured to the implant abutment.' }
    ],
    journey: [
      { id: 'before', label: 'Planning', points: ['3D CBCT scan and digital smile simulation', 'Painless local anesthetic injection'] },
      { id: 'during', label: 'Placement', points: ['Takes 45 minutes; feels like mild pressure only', 'Temporary tooth placed if in the smile zone'] },
      { id: 'after', label: 'First 3 Days', points: ['Mild soreness easily managed with ibuprofen', 'Soft diet for 3–5 days'] },
      { id: 'recovery', label: 'Permanent Crown', points: ['After 3 months of bone fusion, final porcelain tooth is fitted', 'Chew, bite, and smile for life'] }
    ],
    quickFacts: {
      duration: '45 to 60 minutes',
      comfort: 'Painless during surgery (local anesthetic)',
      anaesthesia: 'Local Lidocaine block',
      downtime: '2 to 3 days mild soreness',
      visibleResults: 'Permanent natural tooth restoration',
      returnToRoutine: 'Next day (soft food for 3 days)',
      sessionsNeeded: '2 phases across 3 to 4 months',
      bestFor: 'Missing teeth, permanent chewing function',
      suitableSkinTypes: 'Adult candidates with adequate bone'
    },
    benefits: [
      { title: 'Prevents Facial Bone Loss', description: 'Stimulates jawbone density, stopping the premature aging and sunken face of missing teeth.' },
      { title: '100% Natural Chewing Force', description: 'Bite apples, nuts, and meats with the exact same power as natural tooth roots.' },
      { title: 'Permanent Lifetime Durability', description: 'Implant fixtures boast a 98%+ clinical success rate and are designed to last a lifetime.' }
    ],
    approachHeading: 'Guided Precision Implantology.',
    approachParagraphs: [
      'We use 3D guided computer surgery to ensure every implant is placed at the exact mechanical angle for long-term bone stability and flawless crown aesthetics.'
    ],
    results: {
      format: 'quote',
      quote: 'Losing my front tooth was devastating. The 22Luna implant team placed an implant and custom porcelain crown that matches my other teeth so perfectly even my family can’t tell which one it is!',
      attribution: 'Patient, 22Luna Implant Program'
    },
    faqs: [
      { question: 'Does dental implant surgery hurt?', answer: 'No! The jawbone has very few sensory nerve endings. With profound local anesthesia, patients typically report that getting an implant is more comfortable than having a tooth extracted.' },
      { question: 'What if I don’t have enough bone for an implant?', answer: 'We perform simple bone grafting or sinus lift procedures during the same visit to rebuild bone volume, allowing almost anyone to successfully receive an implant.' }
    ],
    actives: ['Medical Grade Grade-4 Pure Titanium', 'CAD/CAM Monolithic Zirconia', 'Bio-Oss Bone Grafting Minerals'],
    technology: '3D CBCT Guided Implantology & Digital CAD/CAM Abutment Milling'
  },

  'dentures': {
    slug: 'dentures',
    name: 'Dentures (Custom Precision Prosthetics)',
    tagline: 'Custom flexible and implant-supported partial or full mouth prostheses engineered for comfortable chewing, natural aesthetics, and secure retention.',
    category: 'Dental',
    snapshot: {
      duration: '3 to 4 fitting appointments',
      comfortLevel: 'Comfortable & non-invasive',
      downtime: 'Zero downtime',
      visibleResults: 'Full restoration of smile aesthetics, lip support, and chewing capability',
      suitableFor: 'Multiple missing teeth, complete edentulism, loose existing dentures',
      sessions: 'Custom fabrication sequence',
    },
    introHeading: 'High-Impact Flexible Prosthetics.\nRestored Smile Architecture.',
    introLabel: 'CUSTOM PROSTHETIC DENTISTRY',
    introParagraphs: [
      'Dentures at 22Luna are modern, comfortable, and custom-crafted prosthetics that bear no resemblance to bulky, fake-looking traditional dentures.',
      'Using lightweight biocompatible flexible resins (Valplast), high-impact acrylics, and implant-retained snap-on overdentures, we restore youthful lip support, natural tooth shading, and stable chewing function tailored to your jaw anatomy.'
    ],
    whyChooseItems: [
      { title: 'Flexible Lightweight Materials', description: 'Metal-free flexible partials with gum-colored clasps that blend invisibly.' },
      { title: 'Anatomical Lip & Facial Support', description: 'Rebuilds vertical facial height to eliminate premature sunken wrinkles around the mouth.' },
      { title: 'Implant-Retained Snap-On Options', description: 'Anchor dentures to 2–4 implants to eliminate messy adhesives and loose slipping.' }
    ],
    suitability: {
      idealFor: [
        'Multiple missing teeth in the upper or lower arch',
        'Complete tooth loss seeking functional reconstruction',
        'Patients wanting non-surgical, cost-effective tooth replacement',
        'Replacing uncomfortable, loose, or worn-down existing dentures'
      ],
      advisedAgainst: [
        'Patients seeking fixed, non-removable teeth (better suited for Implants or All-on-4)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Anatomical Impression & Bite Registration', description: 'High-precision molds and bite vertical dimensions are recorded.' },
      { number: '02', label: 'Custom Wax Try-In', description: 'You preview the teeth in wax in your mouth to approve shape, color, and smile aesthetics.' },
      { number: '03', label: 'Prosthetic Laboratory Processing', description: 'The approved design is processed in high-impact hypoallergenic resin.' },
      { number: '04', label: 'Final Delivery & Occlusal Balancing', description: 'Dentures are fitted, bite pressure points relieved, and care instructions provided.' }
    ],
    journey: [
      { id: 'before', label: 'Consult', points: ['Evaluate remaining teeth and gum ridges', 'Select tooth shade and shape'] },
      { id: 'during', label: 'Try-In', points: ['Review your smile in the mirror before final acrylic processing', 'Adjust bite alignment'] },
      { id: 'after', label: 'Delivery', points: ['Fit new dentures and test chewing', 'Minor adjustments made for complete comfort'] },
      { id: 'recovery', label: 'Adaptation', points: ['Speech and chewing adapt in 7–10 days', 'Enjoy smiling and eating comfortably'] }
    ],
    quickFacts: {
      duration: '3 to 4 short visits',
      comfort: 'Non-invasive & comfortable',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Full restoration of smile and facial profile',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Fabrication sequence',
      bestFor: 'Multiple missing teeth, full mouth restoration',
      suitableSkinTypes: 'All candidates with tooth loss'
    },
    benefits: [
      { title: 'Restores Chewing & Nutrition', description: 'Enables proper chewing of balanced, healthy foods.' },
      { title: 'Youthful Facial Support', description: 'Plumps up sunken cheeks and lips caused by collapsed tooth height.' },
      { title: 'Natural Tooth Characterization', description: 'Individualized tooth positioning for a completely natural smile.' }
    ],
    approachHeading: 'Custom Fit for Daily Comfort.',
    approachParagraphs: [
      'Dentures must be comfortable to be wearable. We take extra care with micro-adjustments to ensure your dentures sit securely without painful pressure sores.'
    ],
    results: {
      format: 'quote',
      quote: 'My mother had loose, painful dentures for years. The team at 22Luna made her custom flexible dentures that fit snugly without glue. She smiles with so much confidence now!',
      attribution: 'Patient Family, 22Luna Care'
    },
    faqs: [
      { question: 'Will my dentures slip or fall out when talking?', answer: 'Our precision border-molding ensures strong natural suction. If extra security is desired, 2 small implants can be placed to snap the denture rock-solid in place.' },
      { question: 'How do I care for flexible dentures?', answer: 'Remove and rinse them after meals, clean them with a soft brush and denture tablet cleanser, and store them in water overnight.' }
    ],
    actives: ['Biocompatible Flexible Polyamide (Valplast)', 'High-Impact Lucitone Acrylic'],
    technology: 'Precision Border-Molded Prosthetics & Overdenture Attachment Systems'
  },

  'extraction': {
    slug: 'extraction',
    name: 'Extraction (Surgical & Wisdom Teeth)',
    tagline: 'Atraumatic surgical tooth removal and wisdom tooth extractions performed with gentle piezo-surgery and profound local anesthesia.',
    category: 'Dental',
    snapshot: {
      duration: '20 – 45 minutes',
      comfortLevel: 'Completely painless during extraction (pressure sensation only)',
      downtime: '2 to 3 days of soft diet & gentle recovery',
      visibleResults: 'Immediate relief from impaction pain, overcrowding, or non-restorable decay',
      suitableFor: 'Impacted wisdom teeth, non-restorable decay, severe fractures, orthodontic spacing',
      sessions: 'Single surgical appointment',
    },
    introHeading: 'Atraumatic Surgical Extraction.\nPainless Wisdom Tooth Clearance.',
    introLabel: 'ATRAUMATIC EXODONTIA & ORAL SURGERY',
    introParagraphs: [
      'Tooth Extraction at 22Luna is performed with an atraumatic philosophy designed to preserve the surrounding alveolar bone and minimize post-operative swelling.',
      'Whether removing an impacted third molar (wisdom tooth) causing recurrent pericoronitis infections or a non-restorable fractured tooth, our oral surgeons use gentle luxators, piezo-bone surgery, and profound local anesthesia to ensure a swift, painless procedure.'
    ],
    whyChooseItems: [
      { title: 'Atraumatic Socket Preservation', description: 'Gentle tooth sectioning preserves surrounding jawbone for future implant placement.' },
      { title: 'Piezo-Surgical Precision', description: 'Ultrasonic bone cutting avoids nerve trauma and soft-tissue laceration during wisdom tooth removal.' },
      { title: 'Advanced Platelet Fibrin (PRF) Socket Plugs', description: 'Optional autologous PRF plugs placed in sockets accelerate healing and eliminate dry sockets.' }
    ],
    suitability: {
      idealFor: [
        'Painful, impacted, or sideways growing wisdom teeth',
        'Severe tooth decay extending deep under the bone',
        'Vertical root fractures that cannot be saved with root canal therapy',
        'Orthodontic extractions to relieve severe crowding'
      ],
      advisedAgainst: [
        'Uncontrolled bleeding disorders or acute systemic cardiac conditions (requires medical clearance)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: '3D CBCT Nerve Mapping', description: 'Digital X-rays evaluate root curvature and proximity to the inferior alveolar nerve.' },
      { number: '02', label: 'Profound Local Nerve Block', description: 'Computer-assisted local anesthesia completely numbs the tooth and surrounding gums.' },
      { number: '03', label: 'Atraumatic Tooth Sectioning', description: 'The tooth is sectioned into small pieces to lift it out gently without heavy pulling.' },
      { number: '04', label: 'Socket Cleanse & Dissolvable Suture', description: 'The socket is disinfected, PRF placed if desired, and sealed with a dissolvable stitch.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['Have a light meal before your visit', 'Take prescribed pre-op medications if indicated'] },
      { id: 'during', label: 'Procedure', points: ['Takes 20–30 minutes; feels like mild dull pressure only', 'Zero sharp pain felt'] },
      { id: 'after', label: 'First 24h', points: ['Bite firmly on gauze for 45 minutes', 'Apply cold ice pack; eat soft cold foods (ice cream/smoothies)'] },
      { id: 'recovery', label: 'Day 3–5', points: ['Swelling peaks at 48h and resolves rapidly', 'Dissolvable stitches dissolve on their own in 7 days'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Painless (complete local numbing)',
      anaesthesia: 'Profound local block',
      downtime: '2 to 3 days (soft food)',
      visibleResults: 'Immediate relief from impaction pain',
      returnToRoutine: '1 to 2 days (avoid intense workouts for 48h)',
      sessionsNeeded: '1 single appointment',
      bestFor: 'Wisdom teeth, severe decay, emergency pain',
      suitableSkinTypes: 'All candidates'
    },
    benefits: [
      { title: 'Eliminates Wisdom Tooth Infections', description: 'Stops recurrent swelling, cheek biting, and jaw stiffness from impacted wisdom teeth.' },
      { title: 'Protects Neighboring Teeth', description: 'Prevents wisdom teeth from pushing against second molars and causing hidden cavities.' },
      { title: 'Bone-Preserving Technique', description: 'Keeps bone socket intact for seamless future implant placement.' }
    ],
    approachHeading: 'Gentle, Minimally Invasive Surgery.',
    approachParagraphs: [
      'We never use brute force. By sectioning the tooth into small segments under magnification, we slide it out smoothly with minimal pressure and rapid recovery.'
    ],
    results: {
      format: 'quote',
      quote: 'I was terrified of having my impacted wisdom tooth removed. The oral surgeon at 22Luna had it out in 15 minutes without any pain at all. Healing was smooth and easy!',
      attribution: 'Patient, 22Luna Oral Surgery'
    },
    faqs: [
      { question: 'Will I feel pain during tooth extraction?', answer: 'No! You will feel light pressure and vibrations, but you will feel zero sharp pain. If you ever feel anything, we add more local anesthesia immediately.' },
      { question: 'How can I prevent a dry socket?', answer: 'Do not drink through a straw, do not smoke, and do not spit forcefully for the first 48 hours. This protects the delicate blood clot in the socket.' }
    ],
    actives: ['Collagen Socket Plugs', 'Autologous Platelet-Rich Fibrin (PRF)', 'Chlorhexidine Gel'],
    technology: 'Piezo-Electric Bone Surgery & Atraumatic Luxators'
  },

  'gum-disease': {
    slug: 'gum-disease',
    name: 'Gum Disease (Periodontal Therapy)',
    tagline: 'Deep ultrasonic root planing, subgingival curettage, and antimicrobial laser therapy to halt bone loss and restore firm, healthy gums.',
    category: 'Dental',
    snapshot: {
      duration: '45 – 60 minutes per quadrant',
      comfortLevel: 'Comfortable with local anesthesia numbing',
      downtime: 'Zero (mild gum tenderness for 24 hours)',
      visibleResults: 'Bleeding halts in 7 days; gum pocket depths shrink and tighten in 3–4 weeks',
      suitableFor: 'Chronic bleeding gums, deep periodontal pockets, bad breath, loose teeth, receding gums',
      sessions: '2 to 4 quadrant sessions + 3-month maintenance',
    },
    introHeading: 'Subgingival Root Planing.\nPeriodontal Laser Decontamination.',
    introLabel: 'ADVANCED PERIODONTAL THERAPY',
    introParagraphs: [
      'Periodontal Therapy at 22Luna is a specialized medical protocol designed to halt the progression of periodontitis—the chronic bacterial infection that destroys the bone holding your teeth in place.',
      'Combining deep ultrasonic root planing, specialized subgingival curettage, and diode laser pocket decontamination, our periodontists eliminate subgingival calculus, detoxify root surfaces, and stimulate healthy gum reattachment.'
    ],
    whyChooseItems: [
      { title: 'Subgingival Diode Laser Sterilization', description: 'Laser energy vaporizes diseased sulcular pocket epithelium and kills anaerobic bacteria.' },
      { title: 'Smooth Root Surface Smoothing', description: 'Removes bacterial endotoxins so gums can firmly re-adhere to tooth roots.' },
      { title: 'Computerized Periodontal Charting', description: 'Maps 6 pocket depths per tooth to track healing with clinical measurements.' }
    ],
    suitability: {
      idealFor: [
        'Bleeding gums when brushing, flossing, or eating hard food',
        'Deep periodontal gum pockets (>4mm) harboring bacteria',
        'Chronic bad breath (halitosis) not cured by mouthwashes',
        'Teeth feeling slightly mobile or gums receding away from teeth'
      ],
      advisedAgainst: [
        'Acute necrotizing ulcerative periodontitis (requires initial antibiotics)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: '6-Point Periodontal Pocket Mapping', description: 'Pocket depth measurements are recorded for every tooth.' },
      { number: '02', label: 'Subgingival Anesthetic Comfort', description: 'Local anesthetic ensures complete comfort during deep cleaning below the gumline.' },
      { number: '03', label: 'Ultrasonic & Hand Root Planing', description: 'Micro-curettes and ultrasonic tips smooth rough root surfaces and remove deep calculus.' },
      { number: '04', label: 'Laser Pocket Decontamination', description: 'Diode laser light sterilizes the deep pocket and seals the capillary tissue for rapid healing.' }
    ],
    journey: [
      { id: 'before', label: 'Assessment', points: ['Full mouth X-ray survey and pocket chart', 'Quadrant treatment schedule established'] },
      { id: 'during', label: 'In Session', points: ['Gums are completely numbed', 'Takes 45 minutes per section'] },
      { id: 'after', label: 'Immediate', points: ['Rinse with warm salt water', 'Gums feel clean and tight'] },
      { id: 'recovery', label: 'Healing', points: ['Bleeding stops within 7 days', 'Gums shrink and firm up tightly around teeth'] }
    ],
    quickFacts: {
      duration: '45 to 60 minutes',
      comfort: 'Comfortable (local numbing used)',
      anaesthesia: 'Local Lidocaine',
      downtime: 'Zero',
      visibleResults: 'Bleeding halts in 1 week; pockets shrink in 3 weeks',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '2 to 4 quadrant visits',
      bestFor: 'Bleeding gums, bone loss prevention, loose teeth',
      suitableSkinTypes: 'All candidates with periodontitis'
    },
    benefits: [
      { title: 'Stops Permanent Bone Loss', description: 'Eliminates bacteria that trigger the immune system to dissolve jawbone.' },
      { title: 'Saves Teeth from Falling Out', description: 'Firms up gum tissue attachment, stabilizing loose teeth.' },
      { title: 'Eliminates Chronic Halitosis', description: 'Destroys volatile sulfur-producing bacteria breeding in deep gum pockets.' }
    ],
    approachHeading: 'Preserve Your Foundation.',
    approachParagraphs: [
      'Gums and bone are the biological foundation of your teeth. We treat periodontal disease aggressively with lasers and deep debridement to save your teeth for decades to come.'
    ],
    results: {
      format: 'quote',
      quote: 'My gums bled heavily every time I brushed, and my dentist elsewhere told me I might lose my lower teeth. The periodontal laser treatment at 22Luna stopped my bleeding completely and saved my teeth.',
      attribution: 'Patient, 22Luna Periodontal Care'
    },
    faqs: [
      { question: 'What is the difference between regular scaling and deep root planing?', answer: 'Regular scaling cleans only the tooth above the gumline. Deep root planing goes beneath the gumline to smooth the root surface and remove deep bacterial calculus destroying the bone.' },
      { question: 'Can gum disease be cured?', answer: 'While bone that has already been lost does not grow back naturally, periodontal therapy completely arrests the infection, stops bleeding, and maintains your remaining bone firmly for life.' }
    ],
    actives: ['Chlorhexidine Gluconate', 'Minocycline Microspheres', 'Hyaluronic Acid Periodontal Gel'],
    technology: 'Subgingival Ultrasonic Scaling & Soft-Tissue Diode Laser (810nm)'
  },

  'sensitive-teeth-treatment': {
    slug: 'sensitive-teeth-treatment',
    name: 'Treatment for Sensitive Teeth',
    tagline: 'Bio-glass remineralization, laser dentin desensitization, and fluoride varnish to seal open dentinal tubules and eliminate sharp tooth sensitivity.',
    category: 'Dental',
    snapshot: {
      duration: '30 minutes',
      comfortLevel: 'Completely comfortable and soothing',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate reduction in cold, sweet, and touch sensitivity',
      suitableFor: 'Sharp shooting pain with cold water/ice cream, toothbrush abrasion, exposed roots',
      sessions: '1 to 2 sessions',
    },
    introHeading: 'Laser Tubule Occlusion.\nEnamel Bio-Glass Mineralization.',
    introLabel: 'DENTIN HYPERSENSITIVITY MANAGEMENT',
    introParagraphs: [
      'Sensitive Teeth Treatment at 22Luna provides immediate, lasting relief from sharp tooth pain triggered by cold drinks, hot coffee, sweets, or toothbrush friction.',
      'Sensitivity occurs when enamel wears away or gums recide, exposing thousands of microscopic fluid-filled dentinal tubules that transmit shock waves directly to the tooth nerve. Using soft-tissue laser occlusion, medical bio-glass remineralization, and high-potency fluoride bonding resins, we seal these tubules permanently.'
    ],
    whyChooseItems: [
      { title: 'Laser Dentinal Tubule Occlusion', description: 'Laser energy melts and seals open microscopic dentin tubules in seconds.' },
      { title: 'Bioactive Glass Mineralization', description: 'Releases calcium and phosphate ions that form a synthetic hydroxyapatite enamel layer.' },
      { title: 'Immediate Pain Elimination', description: 'Walk out enjoying cold ice water without sharp shooting sensitivity.' }
    ],
    suitability: {
      idealFor: [
        'Sharp wincing pain when drinking cold water, ice drinks, or eating ice cream',
        'Sensitivity to sweet or acidic citrus fruits',
        'Exposed yellow root surfaces caused by aggressive toothbrushing or gum recession',
        'Post-teeth-whitening transient sensitivity'
      ],
      advisedAgainst: [
        'Deep throbbing pain that lingers for minutes (sign of nerve infection requiring root canal therapy)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Cold Air Diagnostic Mapping', description: 'The dentist tests individual teeth to locate the exact exposed sensitive tubules.' },
      { number: '02', label: 'Laser Desensitization Pass', description: 'A diode laser wand passes over the exposed root, vitrifying and sealing tubule openings.' },
      { number: '03', label: 'Bioactive Glass Application', description: 'Calcium-phosphate minerals are rubbed into the enamel to crystallize new enamel armor.' },
      { number: '04', label: 'Protective Bonding Seal', description: 'A durable resin-modified glass ionomer barrier is cured over deep abrasion notches.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['No special prep needed', 'Discuss your specific cold/hot trigger foods'] },
      { id: 'during', label: 'Treatment', points: ['Takes 20–30 minutes; non-invasive and relaxing', 'Cool air checks confirm immediate relief'] },
      { id: 'after', label: 'Immediate', points: ['Immediate dramatic reduction in cold sensitivity', 'Resume drinking normal drinks immediately'] },
      { id: 'recovery', label: 'Home Care', points: ['Use recommended potassium-nitrate toothpaste', 'Avoid hard-bristle toothbrushes'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Very high comfort',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Instant relief from cold sensitivity',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 to 2 visits',
      bestFor: 'Cold tooth pain, exposed roots, enamel wear',
      suitableSkinTypes: 'All candidates with sensitivity'
    },
    benefits: [
      { title: 'Instantly Blocks Nerve Pain', description: 'Seals fluid tubules so temperature changes cannot reach the pulp nerve.' },
      { title: 'Rebuilds Enamel Minerals', description: 'Deposits biocompatible hydroxyapatite to strengthen thin, worn enamel.' },
      { title: 'Restores Eating Freedom', description: 'Enjoy cold ice cream, hot coffee, and iced water with zero wincing.' }
    ],
    approachHeading: 'Target the Cause.',
    approachParagraphs: [
      'We not only seal the sensitive tubules immediately with lasers and minerals, but we also identify the cause (e.g. acidic diet, hard toothbrushing, nighttime grinding) to protect your teeth permanently.'
    ],
    results: {
      format: 'quote',
      quote: 'I couldn’t drink cold water or eat ice cream without sharp pain shooting through my front teeth. The laser desensitizing at 22Luna worked instantly—I walked out and had an iced latte with zero pain!',
      attribution: 'Patient, 22Luna Dental Care'
    },
    faqs: [
      { question: 'Why are my teeth suddenly sensitive to cold?', answer: 'The most common causes are gum recession exposing tooth roots, brushing too hard with a stiff toothbrush, tooth grinding wearing away enamel, or acidic diet erosion.' },
      { question: 'How long does the laser sensitivity treatment last?', answer: 'Laser tubule occlusion provides long-lasting relief for months to years, especially when paired with a soft-bristle toothbrush and remineralizing toothpaste.' }
    ],
    actives: ['Bioactive Glass (NovaMin)', '5% Sodium Fluoride Varnish', 'Potassium Nitrate', 'Amorphous Calcium Phosphate'],
    technology: 'Diode Laser Tubule Occlusion & Bioactive Mineral Infusion'
  },

  'porcelain-veneers': {
    slug: 'porcelain-veneers',
    name: 'Porcelain Veneers',
    tagline: 'Ultra-thin custom lithium disilicate (E-Max) porcelain shells bonded to the front of teeth for a Hollywood smile transformation.',
    category: 'Dental',
    snapshot: {
      duration: '2 appointments (Digital Smile Design & Prep → Bond Delivery)',
      comfortLevel: 'Completely comfortable (local numbing during prep)',
      downtime: 'Zero downtime',
      visibleResults: 'Flawless porcelain smile transformation with perfect alignment, shade, and symmetry',
      suitableFor: 'Severely discolored teeth, chipped edges, gaps, crooked teeth, irregular shapes',
      sessions: '2 visits across 7 to 10 days',
    },
    introHeading: 'Hand-Layered E-Max Porcelain.\nBespoke Smile Symmetry.',
    introLabel: 'COSMETIC PORCELAIN VENEERS',
    introParagraphs: [
      'Porcelain Veneers at 22Luna represent the absolute pinnacle of cosmetic aesthetic dentistry. Veneers are paper-thin, custom-sculpted shells of lithium disilicate ceramic (E-Max) that are permanently bonded over the front surface of your teeth.',
      'Guided by 3D Digital Smile Design (DSD), our cosmetic dentists design each veneer to complement your facial symmetry, lip curvature, skin tone, and eye axis, correcting deep tetracycline staining, chipped edges, gaps, and misalignments in just two visits.'
    ],
    whyChooseItems: [
      { title: '3D Digital Smile Design Preview', description: 'Try on your projected smile mock-up directly in your mouth before any tooth is touched.' },
      { title: 'Ultra-Conservative Micro-Prep', description: 'Shaves as little as 0.3mm of enamel, preserving maximum natural tooth structure.' },
      { title: 'Permanently Stain-Proof Ceramic', description: 'Porcelain is non-porous and will never discolor from coffee, tea, wine, or spices.' }
    ],
    suitability: {
      idealFor: [
        'Deep internal intrinsic staining that cannot be lightened by teeth whitening',
        'Chipped, worn down, or unevenly sized teeth',
        'Gaps (diastemas) between front teeth',
        'Mildly crowded or crooked teeth seeking an instant cosmetic alignment'
      ],
      advisedAgainst: [
        'Severe untreated teeth grinding (bruxism) without wearing a protective nightguard',
        'Teeth with severe active decay or insufficient remaining enamel'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Digital Smile Simulation & Mock-Up', description: 'Facial photographs and 3D intraoral scans generate a physical trial smile you can see in the mirror.' },
      { number: '02', label: 'Micro-Enamel Prep & Scan', description: 'Minimal 0.3–0.5mm enamel preparation is performed and a 3D digital scan is taken.' },
      { number: '03', label: 'Master Ceramicist Hand-Layering', description: 'Veneers are custom-milled in E-Max and hand-glazed with natural enamel mamelon translucency.' },
      { number: '04', label: 'Light-Cure Adhesive Bonding', description: 'Each veneer is tried in, shade-verified, and bonded with high-strength resin cements.' }
    ],
    journey: [
      { id: 'before', label: 'Consult', points: ['3D facial photography and Digital Smile Design', 'Approve your trial smile in wax mock-up'] },
      { id: 'during', label: 'Visit 1: Prep', points: ['Minimal enamel shaping under local anesthesia', 'Wear beautiful temporary trial veneers for 7 days'] },
      { id: 'after', label: 'Visit 2: Bonding', points: ['Final porcelain veneers tried in and bonded permanently', 'Immediate breathtaking smile reveal'] },
      { id: 'recovery', label: 'Care', points: ['Brush and floss normally; wear nightguard if you clench', 'Lasts 15 to 20+ years'] }
    ],
    quickFacts: {
      duration: '2 visits (1 week apart)',
      comfort: 'Painless (local anesthetic used during prep)',
      anaesthesia: 'Local Lidocaine',
      downtime: 'Zero',
      visibleResults: 'Instant complete smile transformation',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '2 visits',
      bestFor: 'Hollywood smile, gaps, chips, discolored teeth',
      suitableSkinTypes: 'Adult candidates seeking smile perfection'
    },
    benefits: [
      { title: 'Permanent Stain Resistance', description: 'Glass-like ceramic surface is impervious to coffee, wine, and turmeric staining.' },
      { title: 'Closes Gaps & Aligns Teeth', description: 'Creates straight, symmetrical, beautifully proportioned teeth in days instead of years.' },
      { title: 'Natural Translucency & Luster', description: 'Recreates the natural optical mamelons and light reflection of youthful virgin enamel.' }
    ],
    approachHeading: 'Smile Artistry Engineered for You.',
    approachParagraphs: [
      'We reject unnatural, overly opaque, piano-key white veneers. Our master ceramicists hand-layer individual characteristics and delicate translucency so your new smile looks radiant, luminous, and authentically yours.'
    ],
    results: {
      format: 'quote',
      quote: 'Getting porcelain veneers at 22Luna was the best decision of my life. My teeth were stained and uneven. The new smile looks so natural and completely elevated my confidence in meetings and photos!',
      attribution: 'Patient, 22Luna Cosmetic Dentistry'
    },
    faqs: [
      { question: 'Will my natural teeth be shaved down to pegs?', answer: 'No! That is an outdated crown technique. Modern porcelain veneers require ultra-conservative micro-preparation of only 0.3mm to 0.5mm on the front enamel surface only.' },
      { question: 'How long do porcelain veneers last?', answer: 'With good oral hygiene, regular dental check-ups, and wearing a nightguard if you clench, porcelain veneers typically last 15 to 20+ years.' }
    ],
    actives: ['Lithium Disilicate Porcelain (Ivoclar E-Max)', 'Silane Ceramic Primer', 'Light-Cure Resin Cement'],
    technology: '3D Digital Smile Design (DSD) & CAD/CAM Master Ceramic Hand-Layering'
  },

  'teeth-whitening': {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening (In-Clinic Laser Bleaching)',
    tagline: 'Professional in-office hydrogen peroxide laser whitening to lighten teeth by 4 to 8 shades in a single 60-minute session.',
    category: 'Dental',
    snapshot: {
      duration: '60 minutes',
      comfortLevel: 'Comfortable with protective gingival barrier',
      downtime: 'Zero (follow white diet for 48 hours)',
      visibleResults: 'Immediate 4 to 8 shades lighter on the VITA shade guide',
      suitableFor: 'Yellow enamel, coffee/tea stains, smoking discoloration, aging enamel darkening',
      sessions: 'Single 60-minute in-clinic appointment',
    },
    introHeading: 'Laser-Activated Peroxide.\n4 to 8 Shades Brighter in 60 Minutes.',
    introLabel: 'PROFESSIONAL IN-CLINIC WHITENING',
    introParagraphs: [
      'Teeth Whitening at 22Luna is a safe, physician-administered clinical whitening protocol that safely lifts deep intrinsic and extrinsic stains from within the enamel rods.',
      'Using pH-neutral, medical-grade hydrogen peroxide bleaching gel activated by a cool blue LED laser accelerator light, our whitening system breaks down chromophore carbon double bonds, delivering a brilliant, radiant white smile in a single 60-minute visit without damaging enamel.'
    ],
    whyChooseItems: [
      { title: 'Cool Blue LED Laser Accelerator', description: 'Activates whitening molecules without emitting dehydrating heat, minimizing tooth sensitivity.' },
      { title: 'Gingival Isolation Shield', description: 'Liquid dam cured over gums guarantees zero gum burning or chemical irritation.' },
      { title: '4 to 8 Shades Verified Improvement', description: 'Before and after digital VITA shade scanner measurements confirm dramatic brightening.' }
    ],
    suitability: {
      idealFor: [
        'Enamel yellowing from age, tea, coffee, wine, or tobacco',
        'Pre-wedding, pre-event, or photoshoot smile brightening',
        'Overall dullness seeking an instant luminous smile boost'
      ],
      advisedAgainst: [
        'Existing visible front composite fillings or crowns (ceramics do not bleach and may need replacement)',
        'Severe untreated cavities or active gum infections (must be treated prior)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Baseline Digital Shade Scan', description: 'Initial tooth shade is recorded on the clinical VITA shade guide.' },
      { number: '02', label: 'Light-Cured Gingival Barrier', description: 'A protective resin dam is painted over your gums and cured rock-solid to isolate enamel.' },
      { number: '03', label: 'Laser-Activated Gel Passes', description: 'Medical hydrogen peroxide gel is applied in three 15-minute cycles under the blue LED light.' },
      { number: '04', label: 'Enamel Desensitizing Varnish', description: 'A calcium-fluoride remineralizing treatment is applied to lock in brightness and eliminate sensitivity.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['Scale & polish cleaning recommended prior', 'Relax in our luxury dental suite with entertainment'] },
      { id: 'during', label: 'Procedure', points: ['Takes 60 minutes across three 15-min cycles', 'Relax and listen to music'] },
      { id: 'after', label: 'Immediate', points: ['Instant 4–8 shades brighter smile reveal in the mirror', 'Apply desensitizing gel'] },
      { id: 'recovery', label: 'White Diet (48h)', points: ['Avoid dark staining foods (coffee, turmeric, red wine) for 48 hours', 'Brightness locks in permanently'] }
    ],
    quickFacts: {
      duration: '60 minutes',
      comfort: 'Comfortable (mild transient sensitivity)',
      anaesthesia: 'None required',
      downtime: 'Zero (white diet for 48h)',
      visibleResults: 'Immediate (4 to 8 shades lighter)',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 single appointment',
      bestFor: 'Yellow teeth, coffee/tea stains, event glow',
      suitableSkinTypes: 'All adult enamel'
    },
    benefits: [
      { title: 'Dramatic 4–8 Shade Lightening', description: 'Removes years of stubborn deep staining in one single hour.' },
      { title: '100% Enamel Safe', description: 'pH-balanced formulation lifts stains without eroding or weakening tooth enamel.' },
      { title: 'Boosts Facial Radiance & Confidence', description: 'Bright teeth make the entire face look younger, fresher, and healthier.' }
    ],
    approachHeading: 'Clinical Safety Over Harsh Strips.',
    approachParagraphs: [
      'Over-the-counter whitening kits use acidic gels that erode enamel and burn gums. Our in-clinic laser protocol protects your gums with a liquid dam and uses pH-buffered peroxide for maximum brightness with minimal sensitivity.'
    ],
    results: {
      format: 'quote',
      quote: 'My teeth lightened by 6 shades in just one 60-minute appointment before my engagement shoot! The whitening was easy, comfortable, and my smile looked incredible in every photo.',
      attribution: 'Patient, 22Luna Dental Care'
    },
    faqs: [
      { question: 'Does clinical teeth whitening damage enamel?', answer: 'No. Professional in-office whitening is pH-neutral. It works by oxidizing stain molecules inside the microscopic enamel pores without stripping or thinning the mineral enamel structure.' },
      { question: 'What is the "white diet" post-whitening?', answer: 'For 48 hours after whitening, your enamel pores are temporarily open and receptive to stains. Stick to light-colored foods (milk, chicken, rice, bananas, white pasta) and avoid coffee, tea, turmeric, cola, and red wine.' },
      { question: 'How long do whitening results last?', answer: 'Results typically last 12 to 24 months depending on your diet and smoking habits. Periodic home touch-up trays maintain brilliant white enamel indefinitely.' }
    ],
    actives: ['Medical Hydrogen Peroxide (35%)', 'Amorphous Calcium Phosphate (ACP)', 'Potassium Nitrate Desensitizer'],
    technology: 'Cool-Blue LED Laser Whitening Accelerator & Liquid Dam Gingival Isolation'
  },

  'braces': {
    slug: 'braces',
    name: 'Braces & Orthodontics',
    tagline: 'Self-ligating clear ceramic brackets and aesthetic orthodontics to correct complex malocclusions, bite misalignment, and overcrowding.',
    category: 'Dental',
    snapshot: {
      duration: '6 to 18 months depending on case complexity',
      comfortLevel: 'Comfortable with low-friction light force wires',
      downtime: 'Zero downtime',
      visibleResults: 'Visible alignment improvement within 8–12 weeks; lifetime perfect bite harmony',
      suitableFor: 'Severe crowding, spacing, overbites, underbites, crossbites, rotated teeth',
      sessions: 'Monthly adjustment appointments',
    },
    introHeading: 'Self-Ligating Ceramic Orthodontics.\nFunctional Bite Alignment.',
    introLabel: 'AESTHETIC ORTHODONTIC SYSTEMS',
    introParagraphs: [
      'Orthodontics at 22Luna combines advanced biomechanical tooth movement with discreet clear ceramic brackets and low-friction thermal memory titanium wires.',
      'Our orthodontists design treatment plans that not only straighten crowded or spaced teeth but also establish proper functional bite occlusion, relieve jaw joint (TMJ) stress, and enhance facial profile balance.'
    ],
    whyChooseItems: [
      { title: 'Clear Aesthetic Ceramic Brackets', description: 'Blends seamlessly with your natural tooth color for discreet, subtle treatment.' },
      { title: 'Self-Ligating Low-Friction Technology', description: 'Moves teeth faster with lighter biological forces and significantly less soreness.' },
      { title: 'Comprehensive Bite Alignment', description: 'Corrects deep overbites, underbites, and crossbites for long-term jaw health.' }
    ],
    suitability: {
      idealFor: [
        'Severe tooth crowding, overlapping, and rotated teeth',
        'Large gaps and spacing between upper and lower arches',
        'Bite misalignments (overbite, underbite, crossbite, open bite)',
        'Complex cases requiring full 3D root torque and vertical movement'
      ],
      advisedAgainst: [
        'Severe untreated gum disease with active bone loss (must be stabilized first)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: '3D Orthodontic Cephalometric Diagnostic', description: 'Digital X-rays, panoramic scans, and 3D intraoral scans map jaw-to-tooth proportions.' },
      { number: '02', label: 'Discreet Bracket Bonding', description: 'Clear ceramic brackets are positioned precisely on each tooth with light-cured resin.' },
      { number: '03', label: 'Thermal Shape-Memory Wire Placement', description: 'A flexible nickel-titanium wire is clipped into brackets to guide gentle tooth movement.' },
      { number: '04', label: 'Monthly Alignment Calibration', description: 'Routine 20-minute monthly visits adjust wire tension and check alignment progress.' }
    ],
    journey: [
      { id: 'before', label: 'Consult', points: ['3D digital scan and treatment plan review', 'Select clear ceramic or metallic brackets'] },
      { id: 'during', label: 'Bonding Day', points: ['Brackets bonded comfortably in 45 minutes', 'Receive orthodontic wax and hygiene kit'] },
      { id: 'after', label: 'First Week', points: ['Mild pressure for 3–4 days as teeth start moving', 'Soft food diet for the first few days'] },
      { id: 'recovery', label: 'Final Result', points: ['Brackets removed; teeth polished clean', 'Clear custom retainers delivered to maintain alignment for life'] }
    ],
    quickFacts: {
      duration: '6 to 18 months',
      comfort: 'Gentle continuous low-force movement',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Visible alignment improvement in 2–3 months',
      returnToRoutine: 'Immediate',
      sessionsNeeded: 'Monthly adjustment visits',
      bestFor: 'Crowding, bite misalignment, crooked teeth',
      suitableSkinTypes: 'Teens and adult candidates'
    },
    benefits: [
      { title: 'Lifetime Straight Teeth', description: 'Permanently corrects crooked, overlapping, and spaced teeth.' },
      { title: 'Improves Chewing & TMJ Health', description: 'Harmonizes upper and lower jaw contact, preventing uneven enamel wear and jaw joint pain.' },
      { title: 'Easier Cleaning & Plaque Prevention', description: 'Straight teeth eliminate tight overlapping areas where food traps and plaque cause decay.' }
    ],
    approachHeading: 'Modern Low-Friction Orthodontics.',
    approachParagraphs: [
      'Gone are the days of heavy metal railroad tracks. Our self-ligating clear ceramic braces use gentle biological forces that move teeth smoothly with maximum comfort and minimal visibility.'
    ],
    results: {
      format: 'quote',
      quote: 'I had severe crowding and an overbite that made me hide my smile. The clear ceramic braces at 22Luna straightened my teeth in 12 months without being obvious at work. My new smile is perfect!',
      attribution: 'Patient, 22Luna Orthodontics'
    },
    faqs: [
      { question: 'Are clear ceramic braces noticeable?', answer: 'Clear ceramic brackets are made of translucent porcelain that blends directly into your natural tooth enamel. From normal conversational distance, they are very discreet and subtle.' },
      { question: 'Will I need to wear a retainer after braces?', answer: 'Yes! Retainers are essential to keep your straight teeth in place while the surrounding bone solidifies. We provide clear, invisible retainers that you wear comfortably at night.' }
    ],
    actives: ['Polycrystalline Clear Ceramic', 'Thermal Nickel-Titanium Archwires', 'Orthodontic Adhesive Resin'],
    technology: 'Self-Ligating Ceramic Orthodontic Bracket Systems'
  },

  'tooth-jewellery': {
    slug: 'tooth-jewellery',
    name: 'Tooth Jewellery',
    tagline: 'Non-invasive cosmetic Swarovski crystals and gold dental gems bonded safely to enamel with zero drilling.',
    category: 'Dental',
    snapshot: {
      duration: '15 – 20 minutes',
      comfortLevel: 'Completely painless and non-invasive',
      downtime: 'Zero downtime',
      visibleResults: 'Instant sparkling smile accent',
      suitableFor: 'Cosmetic smile accentuation, festivals, individual style expression',
      sessions: 'Single 15-minute appointment',
    },
    introHeading: 'Non-Invasive Enamel Crystals.\nPlayful Smile Accents.',
    introLabel: 'COSMETIC DENTAL ACCENTS',
    introParagraphs: [
      'Tooth Jewellery at 22Luna is a safe, 100% non-invasive cosmetic treatment that adds a dazzling sparkle to your smile using genuine Swarovski dental crystals, gold gems, or diamonds.',
      'Applied using dental-grade adhesive bonding resin with absolutely zero drilling or enamel cutting, tooth gems adhere securely to the tooth surface without damaging your enamel and can be easily removed or changed at any time by a dentist.'
    ],
    whyChooseItems: [
      { title: '100% Non-Invasive (Zero Drilling)', description: 'Adheres to the natural enamel surface without cutting, drilling, or harming tooth structure.' },
      { title: 'Lead-Free Swarovski Dental Crystals', description: 'Medical-safe glass crystals with a patented back coating for brilliant optical reflection.' },
      { title: 'Easily Reversible Anytime', description: 'Can be removed in 2 minutes by our dentist, leaving your natural enamel 100% intact.' }
    ],
    suitability: {
      idealFor: [
        'Adding a subtle, playful sparkle to your smile',
        'Festival, wedding, or event styling',
        'Cosmetic accentuation on upper lateral incisors or canines'
      ],
      advisedAgainst: [
        'Teeth with severe enamel decay, fractures, or poor oral hygiene'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Tooth Selection & Polish', description: 'The chosen tooth is cleaned and polished with an oil-free prophylaxis paste.' },
      { number: '02', label: 'Micro-Etching', description: 'A mild dental etchant prepares microscopic enamel micropores for adhesive bonding.' },
      { number: '03', label: 'Crystal Placement', description: 'A micro-droplet of clear light-cure adhesive is placed and the crystal is positioned.' },
      { number: '04', label: 'LED Light Cure', description: 'High-intensity blue LED light cures the bonding resin rock-solid in 20 seconds.' }
    ],
    journey: [
      { id: 'before', label: 'Choice', points: ['Select crystal size (1.8mm, 2.3mm, 2.7mm) and color', 'Pick placement tooth'] },
      { id: 'during', label: 'Application', points: ['Takes just 15 minutes; zero needles or drilling', 'Completely painless'] },
      { id: 'after', label: 'Immediate', points: ['Instant dazzling sparkle in your smile', 'Eat soft foods for the first 2 hours'] },
      { id: 'recovery', label: 'Care', points: ['Brush normally; avoid picking at the gem', 'Lasts 6 to 24 months or remove whenever you wish'] }
    ],
    quickFacts: {
      duration: '15 minutes',
      comfort: 'Painless (zero drilling)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Instant sparkle',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 single appointment',
      bestFor: 'Smile sparkle, style accentuation',
      suitableSkinTypes: 'All candidates with healthy enamel'
    },
    benefits: [
      { title: 'Zero Damage to Enamel', description: 'Non-invasive bonding leaves your natural tooth completely untouched.' },
      { title: 'Secure & Long-Lasting', description: 'Dental-grade resin holds the gem firmly through meals and daily brushing.' },
      { title: '100% Removable', description: 'Can be removed and polished clean in 2 minutes whenever you want a change.' }
    ],
    approachHeading: 'Safe Professional Bonding.',
    approachParagraphs: [
      'Never use DIY nail glue or superglue on teeth. Our professional dental bonding ensures safe, lead-free crystals that protect your enamel and stay secure.'
    ],
    results: {
      format: 'quote',
      quote: 'I got a subtle Swarovski crystal bonded on my canine tooth at 22Luna. It sparkles every time I smile and I get compliments constantly! It took 10 minutes with zero pain.',
      attribution: 'Patient, 22Luna Aesthetic Dental'
    },
    faqs: [
      { question: 'Will tooth jewellery damage my enamel?', answer: 'No! There is zero drilling involved. The crystal is attached using the same gentle adhesive resin used for orthodontic brackets. When removed, your enamel is polished completely smooth and untouched.' },
      { question: 'Can I brush my teeth normally with a tooth gem?', answer: 'Yes! You can brush your teeth normally with a manual or electric toothbrush. Just avoid biting into hard objects (like opening bottle caps) directly on the crystal.' }
    ],
    actives: ['Medical-Grade Swarovski Crystal Glass', 'Light-Cure Adhesive Bonding Resin', 'Enamel Etchant'],
    technology: 'Non-Invasive Dental Composite Enamel Bonding'
  },

  'smile-designing': {
    slug: 'smile-designing',
    name: 'Smile Designing (Digital Smile Design)',
    tagline: 'Comprehensive facial-dental aesthetics using 3D digital smile simulation to design your ideal tooth proportions, lip support, and golden ratio harmony.',
    category: 'Dental',
    snapshot: {
      duration: 'Comprehensive multi-stage cosmetic protocol',
      comfortLevel: 'Non-invasive digital diagnostics & planning',
      downtime: 'Zero during design phase',
      visibleResults: 'Preview your complete new smile in 3D in your mouth before treatment begins',
      suitableFor: 'Full smile makeovers, uneven gumline, worn teeth, gaps, discolored enamel',
      sessions: 'Design consultation → Wax mock-up preview → Clinical execution',
    },
    introHeading: 'Digital Smile Design.\nFacial-Dental Aesthetic Architecture.',
    introLabel: '3D DIGITAL SMILE DESIGN (DSD)',
    introParagraphs: [
      'Smile Designing at 22Luna is a holistic aesthetic engineering protocol that harmonizes your teeth with your unique facial features, smile curve, lip dynamics, and eye line.',
      'Using high-definition 3D intraoral scans, facial videography, and CAD/CAM design software, our cosmetic dentists create a digital preview of your ideal smile proportions, allowing you to "test-drive" your new smile in your mouth before any permanent treatment begins.'
    ],
    whyChooseItems: [
      { title: 'In-Mouth 3D Smile Test-Drive', description: 'Wear a temporary mock-up of your projected smile in the mirror before committing to treatment.' },
      { title: 'Facial-Driven Proportions', description: 'Aligns tooth width, length, and axis with your interpupillary eye line and facial midline.' },
      { title: 'Multi-Disciplinary Synergy', description: 'Seamlessly combines veneers, gum contouring, whitening, and aligners into one cohesive plan.' }
    ],
    suitability: {
      idealFor: [
        'Patients wanting a complete smile makeover with predictable, guaranteed results',
        'Worn-down, uneven, chipped, or aged teeth lacking youthful length',
        'Uneven gumline or gummy smile disrupting teeth symmetry',
        'Multiple cosmetic concerns (gaps, yellowing, misalignment, chips)'
      ],
      advisedAgainst: [
        'Patients with active untreated gum disease (periodontal health must be established first)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: '3D Facial Scanning & Videography', description: 'Dynamic facial expressions, speech movements, and smile lines are recorded digitally.' },
      { number: '02', label: 'Digital Smile Design (DSD) CAD Simulation', description: 'Cosmetic dentists calculate ideal tooth proportions and golden ratio symmetry on screen.' },
      { number: '03', label: 'In-Mouth Mock-Up Trial', description: 'A temporary 3D printed model of your new smile is placed in your mouth for your live evaluation.' },
      { number: '04', label: 'Precision Clinical Delivery', description: 'Your approved design is executed with porcelain veneers, clear aligners, or composite bonding.' }
    ],
    journey: [
      { id: 'before', label: 'Discovery', points: ['3D intraoral scan and facial studio photography', 'Discuss your dream smile aesthetic goals'] },
      { id: 'during', label: 'The Test-Drive', points: ['Try on your new smile in your mouth', 'Refine tooth length, curvature, and shade to your preference'] },
      { id: 'after', label: 'Execution', points: ['Minimally invasive clinical execution (veneers/bonding/whitening)', 'Comfortable visits'] },
      { id: 'recovery', label: 'The Reveal', points: ['Final breathtaking smile transformation delivered', 'Photograph your new confident smile'] }
    ],
    quickFacts: {
      duration: 'Custom multi-stage plan',
      comfort: 'High comfort',
      anaesthesia: 'None required for design phase',
      downtime: 'Zero during planning',
      visibleResults: 'Instant 3D digital simulation preview',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '2 to 3 visits',
      bestFor: 'Complete smile makeovers, worn teeth, gaps',
      suitableSkinTypes: 'All adult candidates'
    },
    benefits: [
      { title: '100% Predictable Aesthetic Outcome', description: 'See and approve your exact smile result before any permanent procedure begins.' },
      { title: 'Reverses Facial Aging', description: 'Restoring proper tooth length plumps up collapsed lips and softens marionette folds.' },
      { title: 'Total Facial-Dental Harmony', description: 'Creates a radiant smile designed specifically for your unique facial anatomy.' }
    ],
    approachHeading: 'Architecture Meets Artistry.',
    approachParagraphs: [
      'A great smile is not about placing generic white teeth. It is about understanding facial geometry, light reflection, and natural emotion to create a smile that feels effortlessly yours.'
    ],
    results: {
      format: 'quote',
      quote: 'Being able to see and try on my new smile in my mouth before doing anything gave me complete peace of mind. The final porcelain veneers match the digital design 100%. I can’t stop smiling!',
      attribution: 'Patient, 22Luna Smile Design'
    },
    faqs: [
      { question: 'What is the "Smile Test-Drive"?', answer: 'Using 3D printing and temporary cosmetic resin, we place a physical temporary model of your new smile directly over your teeth in the clinic. You can look in the mirror, smile, speak, and take photos to ensure you love it before any permanent work starts.' },
      { question: 'How long does a full smile makeover take?', answer: 'Planning and mock-up take 3 to 5 days. Execution depends on the treatment: porcelain veneers take 7 to 10 days, while composite bonding can be completed in a single afternoon.' }
    ],
    actives: ['CAD/CAM Lithium Disilicate', 'Direct Composite Enamel Resins', 'Provisional Bis-Acryl'],
    technology: '3D Intraoral Scanning, Facial Videography & Digital Smile Design (DSD)'
  },

  'gummy-smile-correction': {
    slug: 'gummy-smile-correction',
    name: 'Correction of Gummy Smile',
    tagline: 'Diode laser gingivoplasty and lip repositioning neuromodulation to align excessive gum display with natural tooth proportions.',
    category: 'Dental',
    snapshot: {
      duration: '30 – 45 minutes',
      comfortLevel: 'Completely painless (local numbing or quick micro-injections)',
      downtime: 'Zero to 2 days (laser seals gums instantly with no bleeding)',
      visibleResults: 'Immediate balanced smile proportions; full gum healing in 5–7 days',
      suitableFor: 'Excessive gum display when smiling (>3mm), short stubby teeth, uneven gumline',
      sessions: 'Single 30-minute appointment',
    },
    introHeading: 'Laser Gingival Contouring.\nBalanced Gum-to-Tooth Proportions.',
    introLabel: 'GUMMY SMILE CORRECTION',
    introParagraphs: [
      'Correction of Gummy Smile at 22Luna addresses excessive gum tissue visibility (showing more than 3mm of gum when smiling) using soft-tissue diode laser gingivoplasty or precision lip neuromodulation.',
      'By gently sculpting overgrown gum margins with optical laser energy to expose the full natural crown of your teeth—or using micro-doses of Botox in hyperactive upper lip elevator muscles (LLSAN)—we restore harmonious, elegant smile proportions in a single visit.'
    ],
    whyChooseItems: [
      { title: 'Soft-Tissue Laser Precision', description: 'Laser sculpts gum contours with zero scalpels, zero bleeding, and instant healing.' },
      { title: 'Targeted Upper Lip Neuromodulation', description: 'Relaxes hyperactive lip elevator muscles without any surgery or dental cuts.' },
      { title: 'Instant Smile Elongation', description: 'Immediately reveals full, youthful tooth length and eliminates short stubby appearances.' }
    ],
    suitability: {
      idealFor: [
        'Excessive pink gum display when smiling or laughing',
        'Teeth that appear short, square, or hidden beneath thick gum margins',
        'Uneven or asymmetrical gum heights across front teeth',
        'Hyperactive upper lip that pulls up excessively high when smiling'
      ],
      advisedAgainst: [
        'Severe vertical maxillary excess skeletal deformity (may require combined orthognathic approach)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Proportion Mapping', description: 'Gum margin symmetry and ideal tooth height-to-width ratio (80%) are calculated.' },
      { number: '02', label: 'Gentle Topical Numbing', description: 'Local anesthetic gel ensures zero discomfort during laser contouring.' },
      { number: '03', label: 'Laser Gingivoplasty Sculpting', description: 'Soft-tissue diode laser vaporizes excess gum tissue and seals micro-capillaries instantly.' },
      { number: '04', label: 'Lip Elevator Relaxer (Optional)', description: 'Micro-units of Botox are placed at the LLSAN muscle to prevent excessive upper lip retraction.' }
    ],
    journey: [
      { id: 'before', label: 'Consult', points: ['Digital photography determines if laser or Botox is best', 'Anesthetic applied'] },
      { id: 'during', label: 'Procedure', points: ['Takes 20–30 minutes; painless', 'Laser coagulates tissue instantly with zero bleeding'] },
      { id: 'after', label: 'Immediate', points: ['Instant reveal of elongated, beautifully proportioned teeth', 'Eat normal soft food'] },
      { id: 'recovery', label: 'Healing', points: ['Gums heal completely in 3–5 days', 'Enjoy smiling with zero gum self-consciousness'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Painless (local anesthetic used)',
      anaesthesia: 'Topical and local anesthetic',
      downtime: 'Zero (no bleeding with laser)',
      visibleResults: 'Immediate balanced smile proportions',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 single appointment',
      bestFor: 'Excessive gum display, short teeth, gummy smile',
      suitableSkinTypes: 'All candidates with excessive gum show'
    },
    benefits: [
      { title: 'Elongates Natural Teeth', description: 'Uncovers the beautiful natural enamel hidden beneath overgrown gum tissue.' },
      { title: 'Perfect Symmetrical Gumline', description: 'Aligns the gingival zenith of each tooth for harmonious frame symmetry.' },
      { title: 'Zero Stitching or Bleeding', description: 'Diode laser cauterizes as it sculpts, allowing you to return to work immediately.' }
    ],
    approachHeading: 'Balance Between Pink and White.',
    approachParagraphs: [
      'An attractive smile is all about the harmony between pink gum architecture and white enamel. Our minimally invasive laser protocols create the perfect balance effortlessly.'
    ],
    results: {
      format: 'quote',
      quote: 'I used to cover my mouth when laughing because my gums showed so much. The laser contouring at 22Luna took 20 minutes with zero pain. My teeth look longer and my smile is so balanced!',
      attribution: 'Patient, 22Luna Smile Design'
    },
    faqs: [
      { question: 'Does laser gum contouring hurt?', answer: 'No. The gums are completely numbed with local anesthesia before starting. The laser seals nerve endings as it sculpts, so there is virtually zero post-operative pain or bleeding.' },
      { question: 'Will the sculpted gum tissue grow back?', answer: 'When performed by experienced cosmetic dentists within biological width guidelines, laser gingivoplasty results are permanent.' }
    ],
    actives: ['Diode Laser Hemostatic Pulse', 'Topical Benzocaine Numbing Gel', 'Chlorhexidine Recovery Gel'],
    technology: 'Soft-Tissue Dental Diode Laser (810nm/980nm) & Precision Neuromodulation'
  },

  'full-mouth-rehabilitation': {
    slug: 'full-mouth-rehabilitation',
    name: 'Full Mouth Rehabilitation',
    tagline: 'Comprehensive multidisciplinary reconstruction combining dental implants, zirconia crowns, and bite re-alignment to restore full oral health and function.',
    category: 'Dental',
    snapshot: {
      duration: 'Phased multidisciplinary program (4 to 12 weeks)',
      comfortLevel: 'Completely comfortable with phased local anesthesia',
      downtime: 'Minimal between phases',
      visibleResults: 'Total transformation of chewing function, bite stability, and youthful smile aesthetics',
      suitableFor: 'Severely worn teeth from grinding, collapsed bite vertical dimension, multiple missing teeth',
      sessions: 'Custom phased restorative program',
    },
    introHeading: 'Multidisciplinary Reconstruction.\nTotal Bite & Aesthetic Rehabilitation.',
    introLabel: 'FULL MOUTH REHABILITATION',
    introParagraphs: [
      'Full Mouth Rehabilitation at 22Luna is a specialized restorative discipline that reconstructs severely compromised dentition where severe tooth wear, multiple missing teeth, and collapsed bite vertical dimension impair eating and facial aesthetics.',
      'By combining CAD/CAM zirconia crowns, dental implants, root canal therapy, and neuromuscular bite registration, our team rebuilds your jaw’s correct physiological bite height, eliminating TMJ pain and restoring complete lifelong chewing power.'
    ],
    whyChooseItems: [
      { title: 'Neuromuscular Bite Vertical Restoration', description: 'Re-establishes correct facial height, smoothing sunken facial wrinkles.' },
      { title: 'Full-Arch CAD/CAM Monolithic Zirconia', description: 'Rebuilds broken, ground-down teeth with unbreakable biocompatible ceramics.' },
      { title: 'Integrated Multi-Specialist Team', description: 'Prosthodontists, endodontists, and implantologists coordinate on every step.' }
    ],
    suitability: {
      idealFor: [
        'Severely ground-down, flat, or eroded teeth (bruxism/acid erosion)',
        'Multiple broken, missing, or failing teeth across upper and lower arches',
        'Collapsed facial height causing sunken lips and deep marionette creases',
        'Chronic jaw joint (TMJ) soreness, muscle fatigue, and chewing difficulty'
      ],
      advisedAgainst: [
        'Patients seeking a quick single-tooth cosmetic fix'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: '3D CBCT, Face-Bow & Intraoral Scan', description: 'Full digital capture of jaw joint kinematics, bone density, and tooth wear.' },
      { number: '02', label: 'Centric Relation Bite Re-Establishment', description: 'Physiological bite height is determined and tested with provisional restorations.' },
      { number: '03', label: 'Phase 1: Foundation Treatment', description: 'Root canal treatments, extractions, and guided dental implants are placed.' },
      { number: '04', label: 'Phase 2: Master CAD/CAM Zirconia Delivery', description: 'Upper and lower full-arch custom ceramic crowns are bonded permanently.' }
    ],
    journey: [
      { id: 'before', label: 'Diagnostic', points: ['Complete 3D digital smile & bite scan', 'Provisional trial bite tested for 4 weeks'] },
      { id: 'during', label: 'Phase 1', points: ['Implants placed and foundation teeth treated', 'Temporary functional teeth keep you smiling'] },
      { id: 'after', label: 'Phase 2', points: ['Permanent CAD/CAM zirconia arches delivered', 'Bite checked with digital pressure sensors'] },
      { id: 'recovery', label: 'Life Restored', points: ['Full chewing power restored', 'Eat any food with comfort and confidence'] }
    ],
    quickFacts: {
      duration: 'Phased 4 to 12 week program',
      comfort: 'High comfort (phased anesthesia)',
      anaesthesia: 'Local Lidocaine blocks',
      downtime: 'Zero between phases',
      visibleResults: 'Total transformation of smile, face, and bite',
      returnToRoutine: 'Immediate between visits',
      sessionsNeeded: 'Custom multi-step restorative plan',
      bestFor: 'Severe tooth wear, missing teeth, collapsed bite',
      suitableSkinTypes: 'All candidates with complex dental needs'
    },
    benefits: [
      { title: 'Restores Complete Chewing Power', description: 'Eat any food, meat, or crunch without pain, weakness, or tooth breakage.' },
      { title: 'Reverses Facial Collapse', description: 'Rebuilding tooth height lifts the lower third of the face, taking 10 years off your profile.' },
      { title: 'Eliminates TMJ & Muscle Pain', description: 'Harmonizes jaw mechanics, relieving chronic headaches and neck tension.' }
    ],
    approachHeading: 'Engineered for Lifetime Function.',
    approachParagraphs: [
      'Full mouth reconstruction is the ultimate intersection of engineering and biology. We ensure every tooth meets in harmonious occlusion, distributing forces evenly for lifelong durability.'
    ],
    results: {
      format: 'quote',
      quote: 'Years of severe grinding had worn my teeth down to short stubs, and chewing was painful. 22Luna rebuilt my entire mouth with full zirconia crowns. I can eat anything again and my smile looks incredible!',
      attribution: 'Patient, 22Luna Full Mouth Rehabilitation'
    },
    faqs: [
      { question: 'How long does a full mouth rehabilitation take?', answer: 'Depending on whether implants or gum healing are needed, the phased treatment typically takes between 4 to 12 weeks. You will have comfortable temporary teeth throughout so you are never without a functional smile.' },
      { question: 'Will I be able to eat normally during the process?', answer: 'Yes! We place high-strength provisional restorations at your new bite height so you can chew and speak comfortably while your master permanent crowns are fabricated.' }
    ],
    actives: ['Monolithic Zirconia', 'Straumann Titanium Implants', 'Resin Cements'],
    technology: '3D CBCT, Digital Face-Bow Articulation & Full-Arch CAD/CAM Milling'
  },

  'party-gums': {
    slug: 'party-gums',
    name: 'Party Gums (Rapid Gum Brightening & Refresh)',
    tagline: 'Express non-invasive gum oxygenation, anti-inflammatory polishing, and rapid aesthetic contouring for instant party-ready smile radiance.',
    category: 'Dental',
    snapshot: {
      duration: '30 minutes',
      comfortLevel: 'Deeply relaxing & soothing',
      downtime: 'Zero downtime',
      visibleResults: 'Immediate pink, fresh, de-puffed gum aesthetics and radiant enamel polish',
      suitableFor: 'Puffy gums before events, dull smile margins, mild surface staining, pre-wedding glow',
      sessions: 'Single 30-minute express visit',
    },
    introHeading: 'Gingival Oxygenation.\nInstant Party-Ready Smile Polish.',
    introLabel: 'EXPRESS GUM & SMILE REFRESH',
    introParagraphs: [
      'Party Gums at 22Luna is an express cosmetic dental grooming protocol designed to give your smile an immediate, high-definition refresh 24 to 48 hours before big events, weddings, parties, or photoshoots.',
      'Combining gentle subgingival oxygen misting, anti-inflammatory botanical gum massage, and diamond enamel airflow polishing, this zero-downtime treatment eliminates gum puffiness, tightens gingival margins, and leaves your teeth gleaming and photo-ready.'
    ],
    whyChooseItems: [
      { title: 'Zero Downtime or Sensitivity', description: 'Gentle non-invasive protocol designed specifically for immediate event readiness.' },
      { title: 'Subgingival Oxygen Infusion', description: 'Flushes out puffiness and restores fresh, healthy, pale-pink gum margins.' },
      { title: 'Diamond Airflow Luster Polish', description: 'Buffs away superficial stains for an instant, glass-like enamel shine.' }
    ],
    suitability: {
      idealFor: [
        'Pre-wedding, pre-party, or red-carpet event smile preparation',
        'Puffy, swollen, or slightly inflamed gum margins',
        'Surface coffee and tea dullness needing a 30-minute polish',
        'Fresh, confident breath and gleaming smile for important occasions'
      ],
      advisedAgainst: [
        'Severe deep periodontal bone disease (requires full deep periodontal therapy)'
      ]
    },
    howItWorksSteps: [
      { number: '01', label: 'Gentle Airflow Polish', description: 'Pressurized water and glycine powder buff away surface tea and wine stains.' },
      { number: '02', label: 'Oxygenating Gum Mist', description: 'Pressurized sterile oxygen mist purges bacteria and stimulates micro-lymphatic drainage.' },
      { number: '03', label: 'Botanical Gingival Massage', description: 'A soothing antioxidant, hyaluronic, and tea-tree balm is massaged along gum margins.' },
      { number: '04', label: 'Enamel Gloss Seal', description: 'A fast-acting gloss varnish enhances tooth light reflectivity for camera flashes.' }
    ],
    journey: [
      { id: 'before', label: 'Arrival', points: ['Schedule 24–48h before your big event', 'No preparation needed'] },
      { id: 'during', label: 'In Chair', points: ['Pleasant, refreshing, minty session', 'Takes just 30 minutes'] },
      { id: 'after', label: 'Immediate', points: ['Gums look crisp, pink, and tight', 'Teeth gleam with mirror-like shine'] },
      { id: 'recovery', label: 'Event Ready', points: ['Zero sensitivity; enjoy party food and drinks immediately', 'Smile with complete confidence'] }
    ],
    quickFacts: {
      duration: '30 minutes',
      comfort: 'Extremely comfortable (spa-like)',
      anaesthesia: 'None required',
      downtime: 'Zero',
      visibleResults: 'Instant de-puffed pink gums and glossy teeth',
      returnToRoutine: 'Immediate',
      sessionsNeeded: '1 single express session',
      bestFor: 'Pre-event glow, parties, weddings, photoshoots',
      suitableSkinTypes: 'All candidates'
    },
    benefits: [
      { title: 'Instant De-Puffing of Gums', description: 'Reduces gum swelling, creating a crisp, clean border along teeth.' },
      { title: 'High-Gloss Enamel Luster', description: 'Removes dull surface film so teeth catch the light beautifully in photos.' },
      { title: 'Ultra-Fresh Breath Confidence', description: 'Oxygenates sulcular spaces, guaranteeing clean, fresh breath all night.' }
    ],
    approachHeading: 'Event-Ready Smile Grooming.',
    approachParagraphs: [
      'Just like getting a blowout or facial before an event, your smile deserves an express luxury refresh. Party Gums ensures your smile is immaculate and photo-ready in 30 minutes.'
    ],
    results: {
      format: 'quote',
      quote: 'I had the Party Gums treatment the morning of my friend’s reception. My teeth were gleaming white, my gums looked so clean and pink, and my smile looked incredible in all the HD photos!',
      attribution: 'Patient, 22Luna Dental Lounge'
    },
    faqs: [
      { question: 'Will this cause any bleeding or pain before my party?', answer: 'Zero! The treatment is completely non-invasive and soothing. It uses gentle oxygen mist and glycine air-polishing, so there is no pain, bleeding, or recovery time.' },
      { question: 'How close to my event should I book this?', answer: 'We recommend booking 24 to 48 hours before your event (or even on the morning of the event) for peak radiance and freshness.' }
    ],
    actives: ['Glycine Polishing Powder', 'Hyaluronic Acid Gingival Gel', 'CoQ10', 'Tea Tree Oil', 'Oxygen Mist'],
    technology: 'Subgingival Oxygen Jet & Airflow Polishing'
  }
};
