import type { ConcernDetailData } from '../concern-detail-data';

export const DENTAL_CONCERNS_DATA: Record<string, ConcernDetailData> = {
  // 25. TOOTH DECAY / CAVITIES
  'tooth-decay-cavities': {
    slug: 'tooth-decay-cavities',
    name: 'Tooth Decay / Cavities',
    tagline: 'Gentle micro-dentistry, tooth-colored natural composite fillings, and microscope-enhanced root canal therapy.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Tooth Decay & How Cavities Form.',
    understandingParagraphs: [
      'Tooth decay happens when natural bacteria in your mouth feed on sugars from the foods and drinks you consume. As these bacteria feed, they produce acids that slowly dissolve the hard protective enamel coating on the outside of your teeth, forming small holes known as cavities.',
      'If caught early, decay can be easily cleaned and restored with a quick, invisible tooth-colored filling. If left untreated, decay travels deeper into the softer inner tooth and can reach the sensitive nerve, causing toothaches. At 22 Luna, Dr. Niharika and our dental team use gentle micro-dentistry, digital X-rays, and natural-looking composite materials to remove decay comfortably, protect your natural tooth, and stop pain.',
    ],
    howCommon: 'Tooth decay is the most common dental concern in the world, experienced by more than 90% of adults at some point.',
    signsNoticed: [
      'Visible brown, black, or chalky white spots and tiny holes on your teeth',
      'Sensitivity or sharp twinges when drinking cold water, hot tea, or eating sweets',
      'Throbbing toothache, especially when chewing or lying down at night',
      'Food constantly getting stuck between the same two teeth during meals',
      'A rough edge felt with your tongue, or dental floss catching and tearing',
    ],
    causes: [
      {
        factor: 'Bacterial Plaque & Acid Formation',
        explanation: 'Mouth bacteria ferment dietary sugars into acids that gradually dissolve tooth enamel.',
      },
      {
        factor: 'Frequent Snacking & Sugary Drinks',
        explanation: 'Frequent snacking keeps mouth acid levels high, not giving saliva time to naturally protect enamel.',
      },
      {
        factor: 'Skipping Daily Flossing',
        explanation: 'Toothbrushes cannot reach between tight teeth, where over half of all adult cavities begin.',
      },
      {
        factor: 'Dry Mouth & Low Saliva',
        explanation: 'Saliva naturally neutralizes acids and washes away food particles; having a dry mouth increases decay risk.',
      },
    ],
    adviceGuidance: [
      'At the first sign of a dark spot, sensitivity to cold or sweets, or food packing between teeth',
      'When you feel a lingering toothache or discomfort when biting down on food',
      'When an old filling feels loose, cracked, or has rough edges',
      'To fix small surface cavities early before they reach the tooth nerve and require root canal care',
    ],
    suitableTreatments: [
      {
        name: 'Filling / Restoration',
        slug: 'filling-restoration',
        description: 'Natural tooth-colored composite fillings that bond seamlessly with your enamel, restoring full strength and beauty.',
      },
      {
        name: 'Root Canal Treatment (Microscope Enhanced)',
        slug: 'root-canal-treatment',
        description: 'Painless, microscope-assisted therapy to gently clear deep infection from inside the tooth and save your natural root.',
      },
      {
        name: 'Crowns and Bridges',
        slug: 'crowns-bridges',
        description: 'Custom ceramic crowns to reinforce and protect teeth that have had large cavities or root canal treatment.',
      },
      {
        name: 'Cleaning and Polishing',
        slug: 'cleaning-polishing',
        description: 'Gentle ultrasonic scaling to clear hardened tartar and bacterial plaque from hard-to-reach areas.',
      },
    ],
    preventionTips: [
      'Brush teeth twice a day for two minutes with a soft-bristled toothbrush and fluoride toothpaste',
      'Floss between all teeth every night before bed to remove hidden plaque and food particles',
      'Rinse your mouth with water after drinking sweet, carbonated, or acidic beverages',
      'Visit 22 Luna every 6 months for routine checkups and gentle professional cleaning',
    ],
    faqs: [
      {
        question: 'Are modern tooth-colored fillings strong and durable?',
        answer: 'Yes! Modern composite fillings bond chemically to your tooth structure, offering exceptional strength for everyday chewing and a completely natural appearance that matches your enamel shade.',
      },
      {
        question: 'How do I know if I need a simple filling or a root canal?',
        answer: 'If decay is only in the outer layers of the tooth, a quick composite filling is all that is needed. If decay has reached the deep inner pulp and nerve—causing throbbing pain—a microscope-enhanced root canal is needed to save the tooth.',
      },
      {
        question: 'Is cavity filling treatment painful at 22 Luna?',
        answer: 'Not at all. We apply gentle numbing gels and use comfortable, precise local anaesthesia, so you will feel completely relaxed and pain-free throughout your appointment.',
      },
    ],
    ctaTitle: 'Protect your teeth and stop decay early.',
    ctaSubtitle: 'Schedule your comprehensive dental exam and care at 22 Luna.',
  },

  // 26. TOOTH DISCOLOURATION
  'tooth-discolouration': {
    slug: 'tooth-discolouration',
    name: 'Tooth Discolouration',
    tagline: 'In-clinic laser teeth whitening, stain removal, and ultra-thin custom porcelain veneers.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Tooth Stains & How to Brighten Your Smile.',
    understandingParagraphs: [
      'Tooth discoloration happens in two main ways: surface (extrinsic) stains and internal (intrinsic) discoloration. Surface stains build up on outer enamel from everyday habits like drinking tea, coffee, red wine, eating turmeric-rich curries, or using tobacco. Internal discoloration occurs deep within the tooth structure due to natural aging (as enamel thins and the naturally yellowish inner dentin shows through), past dental trauma, or childhood medication exposure.',
      'Abrasive charcoal powders and drugstore whitening kits can scratch your enamel and cause sharp sensitivity without lifting deep stains. At 22 Luna, Dr. Niharika offers gentle laser-activated in-clinic teeth whitening and handcrafted porcelain veneers that safely brighten your smile by up to 6–8 shades while protecting your enamel.',
    ],
    howCommon: 'Affects over 80% of adults, with tooth shade naturally darkening as we go through life.',
    signsNoticed: [
      'Yellowish, brownish, or grayish tint across your teeth',
      'Dark stains lodged in the grooves and between your front teeth',
      'Loss of bright, luminous white reflection when you smile',
      'Certain teeth looking noticeably darker or more yellow than neighboring teeth',
      'Holding back your smile or feeling self-conscious in photographs and social settings',
    ],
    causes: [
      {
        factor: 'Tea, Coffee & Colorful Foods',
        explanation: 'Natural dark pigments in tea, coffee, wine, and curries cling to the microscopic pores of your enamel.',
      },
      {
        factor: 'Smoking & Tobacco',
        explanation: 'Nicotine and tar penetrate enamel pores, leaving behind stubborn dark brown or yellow stains.',
      },
      {
        factor: 'Natural Aging & Enamel Thinning',
        explanation: 'As outer translucent enamel gently wears down with time, the naturally yellow inner layer shows through more.',
      },
      {
        factor: 'Internal Staining & Past Medications',
        explanation: 'Childhood exposure to certain antibiotics (like tetracycline) or past tooth injuries can cause deep internal gray bands.',
      },
    ],
    adviceGuidance: [
      'When whitening toothpastes and home kits fail to give you a brighter, whiter smile',
      'When preparing for major milestones like a wedding, graduation, or professional photos',
      'When deep internal gray or yellow discoloration requires aesthetic coverage with porcelain veneers',
      'To ensure safe, professional whitening that will not harm your enamel or cause painful sensitivity',
    ],
    suitableTreatments: [
      {
        name: 'Teeth Whitening',
        slug: 'teeth-whitening',
        description: 'Advanced in-clinic laser-activated whitening to lift deep stains and brighten your smile by 6–8 shades in a single comfortable 60-minute visit.',
      },
      {
        name: 'Cleaning and Polishing',
        slug: 'cleaning-polishing',
        description: 'Gentle ultrasonic scaling and air-polishing to instantly sweep away surface tea, coffee, and tobacco stains.',
      },
      {
        name: 'Porcelain Veneers',
        slug: 'porcelain-veneers',
        description: 'Ultra-thin handcrafted ceramic shells that permanently mask deep discoloration, fluorosis, or gray bands with permanent white brilliance.',
      },
      {
        name: 'Smile Designing',
        slug: 'smile-designing',
        description: 'Digital smile simulation to plan the ideal tooth shade, shape, and proportions for your face.',
      },
    ],
    preventionTips: [
      'Rinse your mouth with plain water after drinking coffee, black tea, or red wine',
      'Drink dark or acidic beverages through a straw to reduce direct contact with your front teeth',
      'Avoid abrasive charcoal or baking soda toothpastes that scratch and thin your enamel',
      'Get a professional dental cleaning and polish at 22 Luna every 6 months to prevent stain buildup',
    ],
    faqs: [
      {
        question: 'Is in-clinic teeth whitening safe for my enamel?',
        answer: 'Yes! Medical teeth whitening uses balanced, pH-safe whitening agents that gently lift stain molecules from enamel pores without damaging or thinning your tooth structure.',
      },
      {
        question: 'Will teeth whitening hurt or cause tooth sensitivity?',
        answer: 'At 22 Luna, we use modern desensitizing formulations and laser activation that protect tooth nerves, ensuring you stay comfortable with little to no post-treatment sensitivity.',
      },
      {
        question: 'How long do in-clinic whitening results last?',
        answer: 'Results typically last 1 to 3 years depending on your dietary habits. With routine hygiene and occasional home touch-ups, your bright white smile can be maintained for years.',
      },
    ],
    ctaTitle: 'Brighten your smile with confidence.',
    ctaSubtitle: 'Book your in-clinic laser teeth whitening consultation at 22 Luna.',
  },

  // 27. MISSING TEETH
  'missing-teeth': {
    slug: 'missing-teeth',
    name: 'Missing Teeth',
    tagline: 'Permanent bio-integrated titanium dental implants, custom ceramic bridges, and full smile restoration.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Missing Teeth & Bone Health.',
    understandingParagraphs: [
      'Losing even a single tooth affects your entire mouth. When a tooth is lost, the jawbone underneath naturally begins to shrink over time because it no longer receives the natural chewing stimulation it needs. Meanwhile, neighboring teeth slowly tilt into the empty space, opposing teeth drift downward, and your overall bite can become unbalanced.',
      'Missing teeth also make chewing difficult and can cause cheeks and lips to look sunken, making you look older than you are. As a specialist prosthodontist, Dr. Niharika designs permanent tooth replacement solutions—from single dental implants that act just like natural tooth roots, to custom ceramic bridges—restoring comfortable chewing, bite stability, and a complete, confident smile.',
    ],
    howCommon: 'Over 60% of adults aged 35–44 are missing at least one permanent tooth, with tooth loss becoming more common with age.',
    signsNoticed: [
      'A visible gap in your smile when talking, smiling, or laughing',
      'Difficulty chewing tough, crunchy, or fibrous foods, forcing you to chew on only one side',
      'Neighboring teeth gradually leaning or shifting into the empty space',
      'Sunken lip or cheek contours around the area where teeth are missing',
      'Bite feeling uneven or uncomfortable when you close your teeth together',
    ],
    causes: [
      {
        factor: 'Advanced Gum Disease (Periodontitis)',
        explanation: 'Untreated gum infections weaken the bone foundation holding teeth, causing them to loosen and fall out.',
      },
      {
        factor: 'Severe Unrestorable Tooth Decay',
        explanation: 'Deep cavities that destroy too much of the tooth structure to be saved by a filling or root canal.',
      },
      {
        factor: 'Accidents, Falls & Sports Injuries',
        explanation: 'Physical impact or cracked roots that require the tooth to be safely removed.',
      },
      {
        factor: 'Naturally Missing Teeth from Birth',
        explanation: 'Genetic absence of certain permanent adult teeth (commonly upper side incisors).',
      },
    ],
    adviceGuidance: [
      'Soon after losing or extracting a tooth, to prevent surrounding teeth from shifting and jawbone from shrinking',
      'When chewing difficulty causes stomach issues or forces you to avoid your favorite foods',
      'When missing front or back teeth make you feel self-conscious and reluctant to smile',
      'To consult with specialist prosthodontist Dr. Niharika for 3D digital implant planning',
    ],
    suitableTreatments: [
      {
        name: 'Dental Implants',
        slug: 'dental-implants',
        description: 'Permanent titanium tooth roots placed securely into the jawbone to support a lifelike custom ceramic crown that looks, feels, and chews just like a natural tooth.',
      },
      {
        name: 'Crowns and Bridges',
        slug: 'crowns-bridges',
        description: 'Custom porcelain bridges anchored to neighboring teeth to fill gaps seamlessly without removable plates.',
      },
      {
        name: 'Dentures',
        slug: 'dentures',
        description: 'Custom partial or full dentures designed for a secure, comfortable fit and natural smile aesthetics.',
      },
      {
        name: 'Full Mouth Rehabilitation',
        slug: 'full-mouth-rehabilitation',
        description: 'Comprehensive restorative care combining implants and crowns to rebuild an entire arch of missing or worn teeth.',
      },
    ],
    preventionTips: [
      'Treat dental cavities and bleeding gums early before they cause permanent tooth loss',
      'Wear a custom sports mouthguard during athletic and high-impact sports',
      'Never ignore loose teeth or persistent deep gum soreness',
      'Replace extracted teeth within 3 to 6 months to preserve your natural jawbone shape',
    ],
    faqs: [
      {
        question: 'Why are dental implants the gold standard for missing teeth?',
        answer: 'Dental implants are the only replacement option that stimulates and preserves your natural jawbone. Unlike traditional bridges, they do not require grinding down healthy neighboring teeth and can last a lifetime with good oral care.',
      },
      {
        question: 'Is the dental implant procedure painful?',
        answer: 'Most patients are surprised by how comfortable implant placement is—many report it is easier and less painful than a simple tooth extraction. We use precise digital 3D guides and gentle local numbing so you feel completely at ease.',
      },
      {
        question: 'How long do dental implants last?',
        answer: 'With regular brushing, flossing, and 6-month dental checkups, dental implants have a success rate over 95–98% and can last 25+ years or a lifetime.',
      },
    ],
    ctaTitle: 'Restore your complete, confident smile.',
    ctaSubtitle: 'Schedule your prosthodontic and dental implant consultation with Dr. Niharika at 22 Luna.',
  },

  // 28. CHIPPED / CRACKED TEETH
  'chipped-cracked-teeth': {
    slug: 'chipped-cracked-teeth',
    name: 'Chipped / Cracked Teeth',
    tagline: 'Instant natural composite bonding, porcelain veneers, and structural tooth repair.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Chipped Teeth & Single-Visit Repair.',
    understandingParagraphs: [
      'Our teeth handle enormous chewing pressure every day. Biting down on something hard (like an ice cube, unpopped popcorn kernel, or olive pit), nighttime teeth grinding (bruxism), or sports impacts can suddenly chip an enamel corner or create a hairline crack in a tooth.',
      'Even a minor chip can leave sharp jagged edges that irritate your tongue and expose the sensitive inner tooth to bacteria. At 22 Luna, Dr. Niharika specializes in seamless, same-day composite bonding and custom porcelain veneers that restore your tooth’s original shape, strength, and brightness in as little as a single visit.',
    ],
    howCommon: 'One of the most frequent dental situations, affecting over 35% of people at some point in their life.',
    signsNoticed: [
      'A sharp, rough, or jagged edge felt by your tongue on a front or back tooth',
      'A visible broken corner or missing piece of enamel from a front tooth',
      'A quick, sharp twinge of pain when biting down or releasing bite pressure on food',
      'Sudden sensitivity to cold water or sweet drinks on the chipped tooth surface',
      'Feeling self-conscious when smiling due to an uneven, broken tooth edge',
    ],
    causes: [
      {
        factor: 'Biting on Hard Foods or Objects',
        explanation: 'Accidentally biting on hard items like ice cubes, hard nuts, bones, or popcorn kernels.',
      },
      {
        factor: 'Nighttime Teeth Grinding (Bruxism)',
        explanation: 'Grinding or clenching teeth while sleeping puts heavy sideways stress on enamel, causing fatigue cracks.',
      },
      {
        factor: 'Large Old Fillings',
        explanation: 'Teeth with large old fillings have less natural enamel support, making remaining walls easier to chip.',
      },
      {
        factor: 'Sports & Accidental Bumps',
        explanation: 'Direct knocks to the mouth during sports, gym workouts, or falls without a mouthguard.',
      },
    ],
    adviceGuidance: [
      'Immediately after chipping a tooth to seal exposed inner layers and prevent bacterial infection',
      'When a cracked tooth gives a sharp jolt of pain whenever you chew on it',
      'When sharp broken edges irritate or cut your tongue, lips, or cheek',
      'To restore your smile seamlessly and prevent small micro-cracks from splitting deeper into the root',
    ],
    suitableTreatments: [
      {
        name: 'Filling / Restoration (Composite Bonding)',
        slug: 'filling-restoration',
        description: 'Direct artistic layering of high-strength, tooth-colored composite resin to invisibly rebuild broken tooth corners in a single 45-minute visit.',
      },
      {
        name: 'Porcelain Veneers',
        slug: 'porcelain-veneers',
        description: 'Custom ceramic facings that reinforce and aesthetically renew fractured front teeth with permanent color and shine.',
      },
      {
        name: 'Crowns and Bridges',
        slug: 'crowns-bridges',
        description: 'Full-coverage ceramic crowns to encircle and protect teeth that have large cracks or broken cusps.',
      },
      {
        name: 'Smile Designing',
        slug: 'smile-designing',
        description: 'Digital smile alignment to restore symmetry and natural proportions after tooth damage.',
      },
    ],
    preventionTips: [
      'Never use your teeth as tools to open plastic packets, tear tape, or crack nutshells',
      'Wear a custom nightguard if you clench or grind your teeth while sleeping',
      'Wear an athletic sports mouthguard during contact sports and workouts',
      'Avoid chewing on hard ice cubes, pencils, or unpopped popcorn kernels',
    ],
    faqs: [
      {
        question: 'Can a chipped tooth be repaired in a single appointment?',
        answer: 'Yes! Direct composite bonding can seamlessly reconstruct a chipped tooth in a single 45-minute visit with no waiting. Custom porcelain veneers or crowns typically take 2 visits for custom crafting.',
      },
      {
        question: 'Will composite bonding match my natural tooth color?',
        answer: 'Completely. Dr. Niharika uses artistic multi-layering composite techniques matching natural tooth translucency, enamel shine, and exact color shades so the repair is completely invisible.',
      },
      {
        question: 'What should I do right after chipping a tooth?',
        answer: 'Rinse your mouth gently with warm water, save any broken tooth fragments in milk or clean saline if possible, avoid chewing on that side, and contact 22 Luna for a quick appointment.',
      },
    ],
    ctaTitle: 'Repair your chipped tooth seamlessly.',
    ctaSubtitle: 'Schedule your aesthetic tooth repair consultation at 22 Luna.',
  },

  // 29. CROOKED / MISALIGNED TEETH
  'crooked-misaligned-teeth': {
    slug: 'crooked-misaligned-teeth',
    name: 'Crooked / Misaligned Teeth',
    tagline: 'Discreet clear aligners, aesthetic ceramic braces, digital smile design, and porcelain veneers.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Teeth Alignment & Modern Clear Aligners.',
    understandingParagraphs: [
      'Crooked, crowded, or rotated teeth happen when there is a mismatch between the size of your jaw and the size of your teeth, or due to childhood habits like thumb-sucking or mouth-breathing. When there is not enough room in the dental arch, teeth overlap, twist, or push outward or inward.',
      'Beyond how your smile looks, crowded teeth create tight, hidden food traps that are difficult to clean with brushing and flossing—increasing your risk of cavities and gum inflammation. At 22 Luna, we offer modern virtually invisible clear aligners, discreet ceramic braces, and instant smile designing with porcelain veneers to gently align your teeth into a balanced, functional, and stunning smile.',
    ],
    howCommon: 'Over 65% of people have some degree of teeth crowding, overlapping, or bite misalignment.',
    signsNoticed: [
      'Overlapping, twisted, or inward/outward tilted front teeth',
      'Dental floss tearing or getting stuck when trying to pass between tight, crowded teeth',
      'Uneven wear and chipping on prominent or rotated teeth when chewing',
      'Jaw joint tightness, clicking, or chewing fatigue due to an unbalanced bite',
      'Holding back open laughter or feeling hesitant to smile in photos',
    ],
    causes: [
      {
        factor: 'Jaw Size Disproportion',
        explanation: 'Inheriting a smaller jaw with normal-sized teeth leaves insufficient space, causing teeth to crowd.',
      },
      {
        factor: 'Childhood Habits & Mouth Breathing',
        explanation: 'Thumb-sucking, prolonged pacifier use, or mouth-breathing can narrow the palate during development.',
      },
      {
        factor: 'Early Loss of Baby Teeth',
        explanation: 'Losing baby teeth too early allows permanent teeth to drift forward into empty spaces, blocking erupting teeth.',
      },
      {
        factor: 'Natural Adult Forward Drift',
        explanation: 'Teeth naturally drift forward slightly as we age, often causing lower front teeth to crowd over time.',
      },
    ],
    adviceGuidance: [
      'When crowded teeth make it difficult to keep your gums clean and free of plaque',
      'When uneven biting forces cause specific teeth to chip, flatten, or become sensitive',
      'When you want straight teeth without the look or hassle of traditional metal wire braces',
      'To see a digital 3D scan of your teeth showing exactly what your straight smile will look like before starting',
    ],
    suitableTreatments: [
      {
        name: 'Braces (Clear Aligners & Ceramic Braces)',
        slug: 'braces',
        description: 'Custom clear aligners or tooth-colored ceramic brackets that gently and discreetly guide your teeth into ideal alignment.',
      },
      {
        name: 'Smile Designing',
        slug: 'smile-designing',
        description: 'Digital 3D smile planning to balance teeth alignment, lip contours, and facial harmony.',
      },
      {
        name: 'Porcelain Veneers',
        slug: 'porcelain-veneers',
        description: 'Instant aesthetic alignment and shape correction for mild crowding or rotations without orthodontic wait times.',
      },
      {
        name: 'Cleaning and Polishing',
        slug: 'cleaning-polishing',
        description: 'Gentle clinical cleaning to keep crowded areas healthy and plaque-free during alignment care.',
      },
    ],
    preventionTips: [
      'Wear your retainers at night after alignment treatment to keep your new straight smile permanently in place',
      'Use interdental brushes and water flossers to clean between crowded teeth easily',
      'Address mouth-breathing habits and nasal congestion early in children',
      'Bring children for a routine dental alignment check around age 7 for early guidance',
    ],
    faqs: [
      {
        question: 'Can adults get their teeth straightened with clear aligners?',
        answer: 'Yes, absolutely! Over half of our clear aligner patients are adults. Clear aligners are virtually invisible, comfortable, and can be easily removed for meals and brushing, making them fit smoothly into busy professional routines.',
      },
      {
        question: 'How long does clear aligner treatment typically take?',
        answer: 'Mild-to-moderate alignment cases typically take 6 to 12 months, with noticeable improvements visible within the first few weeks of wearing aligners.',
      },
      {
        question: 'Can porcelain veneers straighten teeth without braces?',
        answer: 'Yes! For mild crowding, small overlaps, or narrow teeth, custom porcelain veneers can create the appearance of a perfectly straight, bright smile in just 2 appointments.',
      },
    ],
    ctaTitle: 'Straighten your smile discreetly and comfortably.',
    ctaSubtitle: 'Book your 3D digital smile scan and aligner consultation at 22 Luna.',
  },

  // 30. GAPS BETWEEN TEETH
  'gaps-between-teeth': {
    slug: 'gaps-between-teeth',
    name: 'Gaps Between Teeth',
    tagline: 'Close front tooth gaps and spacing seamlessly with same-day composite bonding, porcelain veneers, or clear aligners.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Tooth Gaps & Natural Smile Proportions.',
    understandingParagraphs: [
      'A gap or extra space between teeth (commonly called a diastema) most frequently appears between the two upper front teeth. Gaps can happen when teeth are naturally small compared to the jaw, when a thick muscle band (frenum) under the upper lip sits low between the teeth, when side teeth are missing, or when tongue habits push teeth slightly forward.',
      'While some people love small gaps as a personal trademark, prominent spaces often trap food, cause slight air whistling when speaking, and make people feel self-conscious about smiling. At 22 Luna, Dr. Niharika offers gentle, versatile options tailored to you: from same-day non-invasive composite bonding and custom porcelain veneers to discreet clear aligners that close spaces gently.',
    ],
    howCommon: 'Tooth gaps are present in about 20–25% of adults, frequently creating aesthetic self-consciousness.',
    signsNoticed: [
      'A noticeable gap between your two upper or lower front teeth',
      'Multiple small spaces scattered across your upper teeth, making them look small',
      'Food particles continually getting caught between spaced teeth during meals',
      'Mild whistling or lisping sounds when pronouncing "S" and "T" words',
      'Feeling hesitant to smile broadly in photographs or social gatherings',
    ],
    causes: [
      {
        factor: 'Jaw-to-Tooth Size Disproportion',
        explanation: 'A normal or large jaw paired with genetically smaller teeth leaves natural extra space across the arch.',
      },
      {
        factor: 'Low-Attaching Lip Muscle Band (Frenum)',
        explanation: 'A thick band of gum tissue between the upper front teeth keeps them mechanically separated.',
      },
      {
        factor: 'Missing or Small Side Teeth',
        explanation: 'Underdeveloped or missing lateral side teeth allow front teeth to drift apart.',
      },
      {
        factor: 'Gum Disease & Tooth Shifting',
        explanation: 'Weakened bone support from past gum inflammation can allow front teeth to spread apart over time.',
      },
    ],
    adviceGuidance: [
      'When gaps between your front teeth make you hold back your smile in photos or conversations',
      'When food packing between spaced teeth causes gum irritation or soreness',
      'When you want a quick, non-invasive same-day transformation using direct composite bonding',
      'To see a digital preview of your closed, beautifully proportioned smile before starting',
    ],
    suitableTreatments: [
      {
        name: 'Smile Designing',
        slug: 'smile-designing',
        description: 'Digital 3D smile planning to establish balanced tooth proportions and close spacing harmoniously.',
      },
      {
        name: 'Porcelain Veneers',
        slug: 'porcelain-veneers',
        description: 'Ultra-thin handcrafted ceramic shells that widen teeth proportionally and permanently close gaps with natural translucency.',
      },
      {
        name: 'Filling / Restoration (Composite Bonding)',
        slug: 'filling-restoration',
        description: 'Artistic same-day resin bonding to close front gaps in a single 60-minute visit without any drilling or injections.',
      },
      {
        name: 'Braces (Clear Aligners)',
        slug: 'braces',
        description: 'Discreet clear aligners to physically move separated teeth together and close spacing naturally.',
      },
    ],
    preventionTips: [
      'Wear your post-alignment retainers at night to keep spaces closed permanently',
      'Keep your gums healthy with daily flossing to prevent gum disease-related tooth shifting',
      'Use interdental brushes to keep spaced gum areas clean and free of food debris',
      'Avoid tongue-thrusting habits against your front teeth',
    ],
    faqs: [
      {
        question: 'Can gaps between front teeth be closed in just one visit?',
        answer: 'Yes! Direct composite bonding can close a front gap in a single 60-minute visit with no drilling, no needles, and no pain, giving you an immediate, beautiful smile transformation.',
      },
      {
        question: 'Will closing the gap make my front teeth look too wide?',
        answer: 'Dr. Niharika carefully balances golden facial proportions. If teeth are narrow, bonding or veneers create ideal natural widths; if teeth are already wide, clear aligners are used to move teeth together without making them look wider.',
      },
      {
        question: 'Are porcelain veneers a permanent solution for tooth gaps?',
        answer: 'Yes. Porcelain veneers are bonded permanently to your enamel, resist food stains completely, and keep your gap closed and bright for 15 to 20+ years.',
      },
    ],
    ctaTitle: 'Close unwanted gaps and perfect your smile.',
    ctaSubtitle: 'Book a digital smile design and gap closure consultation at 22 Luna.',
  },

  // 31. GUM DISEASE / BLEEDING GUMS
  'gum-disease-bleeding-gums': {
    slug: 'gum-disease-bleeding-gums',
    name: 'Gum Disease / Bleeding Gums',
    tagline: 'Deep ultrasonic cleaning, laser gum decontamination, and root therapy to reverse bleeding gums and protect teeth.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Bleeding Gums & Protecting Bone Support.',
    understandingParagraphs: [
      'Healthy gums are firm, pale pink, and never bleed when you brush or floss. When bacterial plaque and hardened tartar build up along and beneath the gumline, it triggers an infection. In its early stage (gingivitis), gums become red, swollen, and bleed easily. If ignored, the infection spreads deeper into the jawbone supporting your teeth (periodontitis).',
      'As bone support recedes, gums pull back, teeth become loose, and persistent bad breath develops. Systemically, gum bacteria can also enter the bloodstream, affecting heart and metabolic health. At 22 Luna, we use gentle ultrasonic scaling, laser-assisted gum decontamination, and deep root cleaning to eliminate bacterial buildup, stop bleeding, and protect your natural teeth.',
    ],
    howCommon: 'Gum disease is the leading cause of adult tooth loss worldwide, affecting nearly half of all adults aged 30 and older.',
    signsNoticed: [
      'Blood on your toothbrush, in the sink, or on dental floss during daily cleaning',
      'Gums that look swollen, puffy, dark red, or purplish instead of pale pink',
      'Receding gums that make teeth look longer and expose sensitive root surfaces',
      'Persistent bad breath (halitosis) or an unpleasant taste in your mouth',
      'Teeth feeling slightly loose, tender when chewing, or shifting position',
    ],
    causes: [
      {
        factor: 'Hardened Tartar & Plaque Under Gums',
        explanation: 'Hardened calculus provides a rough shelter for bacteria beneath the gumline that brushing cannot remove.',
      },
      {
        factor: 'Skipping Daily Flossing',
        explanation: 'Toothbrush bristles cannot reach below the gumline where harmful bacteria colonies thrive.',
      },
      {
        factor: 'Smoking & Vaping',
        explanation: 'Nicotine restricts blood flow in gums (often masking bleeding) while severely weakening defense against infection.',
      },
      {
        factor: 'Diabetes & Systemic Health',
        explanation: 'High blood sugar levels reduce natural healing and fuel inflammation around the teeth.',
      },
    ],
    adviceGuidance: [
      'At the very first sign of bleeding when brushing or flossing—bleeding gums are never normal',
      'When gums look red, puffy, swollen, or pull away from your teeth',
      'When teeth feel slightly mobile, roots feel sensitive, or bad breath refuses to go away',
      'To undergo a thorough deep ultrasonic clean and laser decontamination to save natural teeth',
    ],
    suitableTreatments: [
      {
        name: 'Gum Disease (Periodontal Therapy)',
        slug: 'gum-disease',
        description: 'Thorough deep scaling, root smoothing, and laser sterilization under the gums to clear infection and allow gums to reattach firmly.',
      },
      {
        name: 'Cleaning and Polishing',
        slug: 'cleaning-polishing',
        description: 'Gentle ultrasonic tartar removal and airflow polishing to keep teeth plaque-free and gums healthy.',
      },
      {
        name: 'Treatment for Sensitive Teeth',
        slug: 'sensitive-teeth-treatment',
        description: 'Protective desensitizing sealants to soothe sensitive root areas where gums have receded.',
      },
      {
        name: 'Full Mouth Rehabilitation',
        slug: 'full-mouth-rehabilitation',
        description: 'Reconstructive tooth stabilization and bite re-engineering for teeth affected by past bone loss.',
      },
    ],
    preventionTips: [
      'Brush gently along the gumline twice a day using a soft-bristled toothbrush at a 45-degree angle',
      'Floss between all teeth daily or use a water flosser to clean subgingival spaces',
      'Never ignore bleeding gums—it is the earliest reversible warning sign of infection',
      'Schedule a professional dental clean at 22 Luna every 4 to 6 months if you are prone to gum inflammation',
    ],
    faqs: [
      {
        question: 'Is it normal for gums to bleed when I start flossing?',
        answer: 'Mild bleeding during the first few days of flossing means there is pre-existing gum inflammation. With daily gentle flossing and a professional clean, the inflammation clears and bleeding stops completely within 7 to 10 days.',
      },
      {
        question: 'Can bone lost from gum disease grow back?',
        answer: 'While lost jawbone cannot grow back on its own, clinical periodontal care stops further bone loss immediately and keeps your teeth firmly anchored for life.',
      },
      {
        question: 'Does deep cleaning (scaling and root planing) hurt?',
        answer: 'We ensure complete comfort by applying soothing numbing gels and gentle local anaesthesia. You will feel no pain during your deep cleaning appointment.',
      },
    ],
    ctaTitle: 'Halt gum disease and protect your teeth.',
    ctaSubtitle: 'Schedule your comprehensive gum evaluation and deep clean at 22 Luna.',
  },

  // 32. TOOTH SENSITIVITY
  'tooth-sensitivity': {
    slug: 'tooth-sensitivity',
    name: 'Tooth Sensitivity',
    tagline: 'Seal exposed tooth roots, replace worn minerals, and eliminate sharp cold and sweet twinges.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Tooth Sensitivity & Exposed Roots.',
    understandingParagraphs: [
      'Tooth sensitivity happens when the protective outer enamel of your tooth crown or the gum covering your tooth root wears away, exposing the softer inner layer called dentin. Dentin contains thousands of microscopic fluid-filled channels (dentinal tubules) that lead directly to the tooth nerve.',
      'When you drink ice water, hot coffee, eat sweets, or breathe cold air, the fluid inside these microscopic channels shifts rapidly, triggering a sharp jolt of pain in the nerve. At 22 Luna, we pinpoint the exact source of your sensitivity and apply clinical desensitizing sealants, laser tubule closure, or gentle composite bonding for immediate, long-lasting relief.',
    ],
    howCommon: 'Affects more than 40% of adults, most frequently between the ages of 20 and 50.',
    signsNoticed: [
      'A sudden, sharp jolt or twinge when sipping ice water, iced tea, or eating ice cream',
      'Discomfort when drinking hot coffee, tea, or warm soups',
      'Sensitivity triggered by sweet, acidic foods like citrus fruits or carbonated drinks',
      'Sharp pain when breathing in cold air through your mouth or when brushing near the gumline',
      'Hesitating to enjoy your favorite cold foods and drinks due to fear of sudden zinging pain',
    ],
    causes: [
      {
        factor: 'Gingival Recession & Exposed Roots',
        explanation: 'Receding gums leave the softer root dentin exposed, which wears away easily and exposes nerve channels.',
      },
      {
        factor: 'Aggressive Hard Brushing',
        explanation: 'Scrubbing teeth with hard-bristle brushes wears deep notches into the tooth necks along the gumline.',
      },
      {
        factor: 'Acidic Foods, Drinks & Acid Reflux',
        explanation: 'Frequent sodas, lemon drinks, or stomach acid reflux (GERD) dissolve outer enamel coating.',
      },
      {
        factor: 'Nighttime Teeth Grinding',
        explanation: 'Grinding teeth flexes the enamel at the gumline, popping off microscopic enamel crystals.',
      },
    ],
    adviceGuidance: [
      'When tooth sensitivity makes eating, drinking, or morning brushing uncomfortable',
      'When drugstore sensitive toothpastes fail to provide relief after 2 to 3 weeks of use',
      'When sensitivity pain turns into a lingering, throbbing ache (which can indicate nerve inflammation)',
      'To determine whether sensitivity is caused by exposed roots, a hidden cavity, or a cracked tooth',
    ],
    suitableTreatments: [
      {
        name: 'Treatment for Sensitive Teeth',
        slug: 'sensitive-teeth-treatment',
        description: 'In-clinic application of medical desensitizing varnishes and laser tubule sealing for instant relief from cold and sweet pain.',
      },
      {
        name: 'Filling / Restoration',
        slug: 'filling-restoration',
        description: 'Smooth, natural tooth-colored composite bonding to cover and protect deep notches at the gumline.',
      },
      {
        name: 'Cleaning and Polishing',
        slug: 'cleaning-polishing',
        description: 'Gentle ultrasonic cleaning to remove irritating tartar that causes gums to recede.',
      },
      {
        name: 'Crowns and Bridges',
        slug: 'crowns-bridges',
        description: 'Protective ceramic crowns for severely worn or cracked teeth causing persistent nerve sensitivity.',
      },
    ],
    preventionTips: [
      'Use an ultra-soft toothbrush and brush with gentle circular motions—never hard horizontal sawing',
      'Use a potassium nitrate and fluoride sensitivity toothpaste twice daily',
      'Wait at least 30 minutes after having citrus or sour foods before brushing your teeth',
      'Wear a custom nightguard if you clench or grind your teeth while sleeping',
    ],
    faqs: [
      {
        question: 'Why does in-clinic sensitivity treatment work faster than sensitive toothpaste?',
        answer: 'Toothpaste takes weeks of daily use to slowly plug microscopic tubules. In-clinic clinical desensitizers and laser therapy instantly seal the open channels in a single 15-minute appointment for immediate relief.',
      },
      {
        question: 'Can tooth sensitivity turn into a root canal problem?',
        answer: 'If sensitivity is caused by a deep cavity or cracked tooth that is left untreated, bacteria can reach the inner nerve and cause an infection that requires a root canal. Treating sensitivity early prevents this.',
      },
      {
        question: 'Is the in-clinic desensitizing treatment painful?',
        answer: 'Not at all. The treatment simply involves gently painting soothing medical varnishes and bonding agents over the sensitive root areas with zero drilling and zero needles.',
      },
    ],
    ctaTitle: 'Enjoy your favorite foods without sensitivity.',
    ctaSubtitle: 'Book a tooth sensitivity assessment and relief treatment at 22 Luna.',
  },

  // 33. BAD BREATH
  'bad-breath': {
    slug: 'bad-breath',
    name: 'Bad Breath',
    tagline: 'Eliminate odor-causing bacteria, clean deep gum pockets, and enjoy fresh, confident breath.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Chronic Bad Breath & Oral Bacteria.',
    understandingParagraphs: [
      'Chronic bad breath (halitosis) originates directly inside the mouth in over 90% of cases. It is caused by specific anaerobic bacteria that live deep under the gums, between tight teeth, in untreated cavities, and within the microscopic grooves on the back of the tongue.',
      'These bacteria break down trapped food particles and proteins, releasing foul-smelling sulfur gases (Volatile Sulfur Compounds). Chewing gums, mints, and mouthwashes only mask the smell for 15 minutes. At 22 Luna, we eliminate the actual root cause of bad breath through deep ultrasonic plaque cleaning, tongue disinfection, cavity restoration, and salivary flow care.',
    ],
    howCommon: 'Affects more than 30% of adults regularly, frequently causing personal, social, and professional worry.',
    signsNoticed: [
      'Unpleasant breath odor that returns shortly after brushing, flossing, or using mouthwash',
      'A thick white or yellowish coating on the back surface of your tongue',
      'A bitter, sour, or unpleasant metallic taste lingering in your mouth during the day',
      'A dry, sticky mouth feeling caused by low saliva flow',
      'Feeling worried about standing close to people when talking in meetings or social settings',
    ],
    causes: [
      {
        factor: 'Bacterial Plaque & Tartar Under Gums',
        explanation: 'Deep gum pockets house millions of odor-producing bacteria that normal brushing cannot reach.',
      },
      {
        factor: 'Tongue Coating & Deep Grooves',
        explanation: 'Dead cells and food particles collect in microscopic tongue grooves, feeding odor-producing microbes.',
      },
      {
        factor: 'Untreated Cavities & Old Fillings',
        explanation: 'Decaying tooth structure and broken fillings trap rotting food particles that smell bad.',
      },
      {
        factor: 'Dry Mouth (Low Saliva Flow)',
        explanation: 'Saliva naturally cleanses mouth bacteria; when mouth is dry, bacteria multiply rapidly.',
      },
    ],
    adviceGuidance: [
      'When bad breath persists consistently despite brushing your teeth and using mouthwashes',
      'When bad breath is accompanied by bleeding gums, a bad taste, or a constantly dry mouth',
      'When you want a permanent, medical solution rather than relying on temporary breath mints',
      'To undergo a thorough gum health screening and clinical breath refresh at 22 Luna',
    ],
    suitableTreatments: [
      {
        name: 'Cleaning and Polishing',
        slug: 'cleaning-polishing',
        description: 'Full-mouth ultrasonic scaling and airflow polishing to clear tartar, plaque biofilm, and odor-producing bacteria.',
      },
      {
        name: 'Gum Disease (Periodontal Therapy)',
        slug: 'gum-disease',
        description: 'Deep cleaning under the gumline to clear hidden bacterial pockets and restore fresh, healthy gums.',
      },
      {
        name: 'Filling / Restoration',
        slug: 'filling-restoration',
        description: 'Restoration of cavitated teeth and replacement of defective old fillings that trap rotting food.',
      },
    ],
    preventionTips: [
      'Use a tongue cleaner or copper scraper every morning to clean the white coating from your tongue',
      'Floss between all teeth every night to remove rotting food particles that your toothbrush misses',
      'Drink 2.5 to 3 liters of water daily to keep your mouth hydrated and saliva flowing naturally',
      'Avoid alcohol-based commercial mouthwashes that dry out your mouth and make bad breath worse',
    ],
    faqs: [
      {
        question: 'Why do commercial mouthwashes only work for a few minutes?',
        answer: 'Commercial mouthwashes use alcohol and artificial mint flavor to temporarily mask odors without removing the bacteria hiding deep under your gums and tongue grooves. Professional cleaning removes the bacteria directly.',
      },
      {
        question: 'Can bad breath come from the stomach instead of the mouth?',
        answer: 'Over 90% of chronic bad breath originates directly inside the mouth from gums, tongue, or cavities. Stomach-related causes are rare (less than 5%) and are usually accompanied by severe acid reflux or medical symptoms.',
      },
      {
        question: 'How quickly will clinical treatment eliminate bad breath?',
        answer: 'You will feel an immediate fresh, clean sensation and notice a dramatic improvement in your breath right after a professional ultrasonic cleaning and tongue disinfection appointment.',
      },
    ],
    ctaTitle: 'Enjoy fresh, clean breath with confidence.',
    ctaSubtitle: 'Schedule your comprehensive oral hygiene and breath care at 22 Luna.',
  },

  // 34. WORN / DAMAGED TEETH
  'worn-damaged-teeth': {
    slug: 'worn-damaged-teeth',
    name: 'Worn / Damaged Teeth',
    tagline: 'Full mouth rehabilitation, bite re-engineering, porcelain crowns, and custom nightguards.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Tooth Wear, Night Grinding & Bite Height.',
    understandingParagraphs: [
      'Tooth wear is the slow, gradual loss of your enamel and inner dentin. It is typically caused by three factors: nighttime teeth grinding and clenching (attrition), acidic foods or stomach acid reflux dissolving enamel (erosion), or brushing too hard with abrasive toothpastes (abrasion).',
      'As teeth wear down, they become visibly shorter, chipped, and flat. This causes your bite height to collapse, making your lower jaw close too far—which leads to jaw joint (TMJ) pain, morning headaches, and sunken lips that age your face. As a specialist prosthodontist, Dr. Niharika specializes in full-mouth rehabilitation: precisely rebuilding your natural bite height, restoring tooth length with custom ceramic crowns, and protecting your smile with custom nightguards.',
    ],
    howCommon: 'Affects over 40% of adults, with tooth wear accelerating rapidly due to daily stress, nocturnal clenching, and acidic diets.',
    signsNoticed: [
      'Teeth looking noticeably shorter, flattened, chipped, or uneven along biting edges',
      'Yellow or translucent front tooth edges where the inner layer shows through worn enamel',
      'Morning jaw muscle stiffness, temple headaches, or clicking in your jaw joints (TMJ)',
      'A prematurely aged facial look with thinner lips and downward-turning mouth corners',
      'Widespread sensitivity when drinking cold water or hot tea across multiple teeth',
    ],
    causes: [
      {
        factor: 'Nighttime Teeth Grinding & Clenching',
        explanation: 'Involuntary clenching and grinding during sleep exerts heavy friction that grinds down tooth enamel.',
      },
      {
        factor: 'Acid Reflux (GERD) & Acidic Drinks',
        explanation: 'Stomach acid reflux or frequent citrus and sodas chemically dissolve outer tooth enamel.',
      },
      {
        factor: 'Missing Back Molars',
        explanation: 'Missing back teeth forces front teeth to take on all chewing forces, causing them to wear out faster.',
      },
      {
        factor: 'Brushing Too Hard with Abrasive Pastes',
        explanation: 'Hard-bristle scrubbing saws notches into the necks of teeth over time.',
      },
    ],
    adviceGuidance: [
      'When your teeth appear visibly shorter, flatter, or more chipped than they were a few years ago',
      'When front teeth look thin, see-through, or continually chip when eating',
      'When morning jaw pain, temple headaches, or jaw joint clicking accompany worn teeth',
      'To consult with specialist prosthodontist Dr. Niharika for digital bite analysis and full restoration',
    ],
    suitableTreatments: [
      {
        name: 'Full Mouth Rehabilitation',
        slug: 'full-mouth-rehabilitation',
        description: 'Complete prosthodontic re-establishment of your natural bite height and anatomical reconstruction of all worn teeth.',
      },
      {
        name: 'Crowns and Bridges',
        slug: 'crowns-bridges',
        description: 'Durable custom ceramic and zirconia crowns to restore original tooth length, strength, and chewing function.',
      },
      {
        name: 'Smile Designing',
        slug: 'smile-designing',
        description: 'Digital 3D smile planning to restore youthful facial proportions, full lip support, and tooth display.',
      },
      {
        name: 'Treatment for Sensitive Teeth',
        slug: 'sensitive-teeth-treatment',
        description: 'Clinical desensitizing sealants and mineral replenishment to soothe exposed worn dentin.',
      },
    ],
    preventionTips: [
      'Wear a custom-fitted nightguard every night to absorb grinding forces and protect enamel',
      'Manage acid reflux (GERD) with doctor guidance and avoid acidic foods before bed',
      'Replace missing back teeth promptly to distribute chewing pressure evenly across your mouth',
      'Switch to an ultra-soft toothbrush and non-abrasive fluoride toothpaste',
    ],
    faqs: [
      {
        question: 'Can worn-down teeth really be restored to their original length?',
        answer: 'Yes! Through full-mouth rehabilitation, Dr. Niharika precisely raises your bite height back to its natural comfortable position and restores each worn tooth with beautiful, durable porcelain crowns.',
      },
      {
        question: 'Will restoring worn teeth make my face look more youthful?',
        answer: 'Yes, remarkably so. Restoring lost tooth length brings back proper lower facial height, smooths out lines around the mouth, plumps sunken lips, and restores a vibrant, youthful smile.',
      },
      {
        question: 'What is the role of a nightguard after restoring worn teeth?',
        answer: 'A custom nightguard acts as a protective cushion, absorbing nighttime grinding forces and ensuring your new ceramic restorations and natural teeth remain protected for decades.',
      },
    ],
    ctaTitle: 'Rebuild your bite and restore youthful tooth length.',
    ctaSubtitle: 'Schedule your prosthodontic consultation with Dr. Niharika at 22 Luna.',
  },

  // 35. GUMMY SMILE
  'gummy-smile': {
    slug: 'gummy-smile',
    name: 'Gummy Smile',
    tagline: 'Painless laser gum contouring, lip elevation control, and aesthetic porcelain veneers.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Gummy Smiles & Balanced Proportions.',
    understandingParagraphs: [
      'A gummy smile happens when more than 3 to 4 millimeters of pink gum tissue is visible above your upper teeth when you smile broadly. While completely healthy medically, showing too much gum can make your teeth look unusually short, square, or childlike.',
      'Gummy smiles come from a few anatomical reasons: extra gum tissue covering teeth that never receded fully, strong upper lip muscles that pull your lip high up when smiling, or short tooth crowns. At 22 Luna, Dr. Niharika combines dental precision with facial aesthetics to offer painless laser gum contouring, gentle lip relaxation, and smile design veneers to establish balanced, elegant tooth-to-gum proportions.',
    ],
    howCommon: 'Affects about 10–14% of young adults, and is more frequently noticed by women.',
    signsNoticed: [
      'Excessive pink gum tissue showing prominently above your upper teeth when you smile or laugh',
      'Upper front teeth appearing unusually short, stubby, or square instead of gracefully rectangular',
      'An uneven or wavy gumline where some teeth show much more gum than others',
      'Upper lip rising very high toward your nose during broad laughter',
      'Habitually covering your mouth with your hand when laughing or smiling in photos',
    ],
    causes: [
      {
        factor: 'Extra Gum Tissue Covering Teeth',
        explanation: 'Gum tissue did not recede naturally during tooth development, leaving beautiful enamel hidden underneath.',
      },
      {
        factor: 'Hyperactive Upper Lip Muscles',
        explanation: 'Lip elevator muscles pull the upper lip higher than average when smiling.',
      },
      {
        factor: 'Upper Jaw Bone Structure',
        explanation: 'Natural upper jaw bone shape positions the dental arch slightly lower relative to the upper lip.',
      },
      {
        factor: 'Short or Worn Down Teeth',
        explanation: 'Genetically small teeth or teeth flattened by nighttime grinding create a disproportionate gum display.',
      },
    ],
    adviceGuidance: [
      'When showing too much gum makes you feel self-conscious or hold back your natural smile',
      'When teeth look short, square, or hidden underneath overgrown gum margins',
      'To have a specialist accurately determine whether your gummy smile is caused by gums, muscles, or tooth length',
      'For quick, painless laser contouring or gentle lip moderation with instant results',
    ],
    suitableTreatments: [
      {
        name: 'Correction of Gummy Smile',
        slug: 'gummy-smile-correction',
        description: 'Precision diode laser gum contouring (gingivectomy) to painlessly sculpt excess gum tissue and reveal your full natural tooth length with zero bleeding.',
      },
      {
        name: 'Smile Designing',
        slug: 'smile-designing',
        description: 'Comprehensive digital smile planning to establish balanced tooth-to-gum proportions and symmetrical smile arch curvature.',
      },
      {
        name: 'Botox',
        slug: 'botox',
        description: 'Micro-precision relaxation of the hyperactive lip elevator muscles so the upper lip rests gracefully at the top of your teeth.',
      },
      {
        name: 'Porcelain Veneers',
        slug: 'porcelain-veneers',
        description: 'Custom ceramic veneers placed after laser contouring to create elongated, luminous, and elegant tooth proportions.',
      },
    ],
    preventionTips: [
      'Maintain good oral hygiene along the gumline to prevent inflammatory gum puffiness',
      'Consult with a cosmetic dental specialist before considering any invasive surgical procedures',
      'Schedule periodic touch-ups every 4 to 6 months if choosing muscle-relaxation lip moderation',
    ],
    faqs: [
      {
        question: 'Is laser gum contouring (gingivectomy) painful?',
        answer: 'Not at all. We use gentle local numbing and an advanced soft-tissue laser that seals nerve endings and blood vessels as it gently sculpts, resulting in zero bleeding, no stitches, and quick healing.',
      },
      {
        question: 'How does Botox treat a gummy smile?',
        answer: 'A tiny micro-droplet of Botox on either side of the nose gently relaxes the hyperactive lip muscles. When you smile, your lip rests gracefully right at the top of your teeth instead of pulling high up.',
      },
      {
        question: 'Will gum tissue grow back after laser contouring?',
        answer: 'When performed by a specialist following proper biological guidelines, laser gum contouring results are permanent, and the sculpted gum tissue does not grow back.',
      },
    ],
    ctaTitle: 'Harmonize your smile line and gum display.',
    ctaSubtitle: 'Schedule your gummy smile assessment with Dr. Niharika at 22 Luna.',
  },

  // 36. WISDOM TEETH / IMPACTED TEETH
  'wisdom-teeth-impacted': {
    slug: 'wisdom-teeth-impacted',
    name: 'Wisdom Teeth / Impacted Teeth',
    tagline: 'Gentle, pain-free wisdom tooth extraction, 3D panoramic imaging, and comfortable recovery.',
    category: 'Dental Concerns',
    understandingHeading: 'Understanding Wisdom Teeth & Impacted Molars.',
    understandingParagraphs: [
      'Wisdom teeth (third molars) are the last teeth to emerge, usually appearing between the ages of 17 and 25. Because modern jaws are often too compact to fit four additional large molars, wisdom teeth frequently become "impacted"—trapped beneath gum tissue or jawbone at tilted angles.',
      'Partially erupted wisdom teeth create a flap of gum (operculum) that easily traps food and bacteria, causing sudden painful infections, jaw swelling, difficulty opening your mouth, and decay in adjacent molars. At 22 Luna, we use 3D panoramic X-ray imaging and gentle, atraumatic micro-surgical techniques under complete local numbing to remove problematic wisdom teeth safely, quickly, and comfortably.',
    ],
    howCommon: 'Up to 70% of adults have at least one impacted wisdom tooth requiring monitoring or gentle extraction.',
    signsNoticed: [
      'Throbbing, aching pain and soreness at the very back of your upper or lower jaw',
      'Swollen, red, or tender gum flap behind your last molar that bleeds easily',
      'Difficulty opening your mouth fully or discomfort when chewing and swallowing',
      'Bad breath or a foul, salty taste coming from the back corner of your mouth',
      'Pressure or headaches radiating into your ear, temple, or neck',
    ],
    causes: [
      {
        factor: 'Lack of Jaw Arch Space',
        explanation: 'Modern jaws are frequently too compact to fit four extra large molars at the back.',
      },
      {
        factor: 'Tilted or Horizontal Eruption Angle',
        explanation: 'Wisdom teeth often grow in sideways, pushing directly against the roots of neighboring molars.',
      },
      {
        factor: 'Trapped Food Under Gum Flap',
        explanation: 'A partial gum flap traps food and bacteria that a toothbrush cannot reach, triggering acute infection.',
      },
      {
        factor: 'Fluid Pocket / Cyst Formation',
        explanation: 'The developmental sac around an impacted tooth can occasionally fill with fluid and cause bone pressure.',
      },
    ],
    adviceGuidance: [
      'When you feel throbbing pain, jaw stiffness, or swelling behind your back molars',
      'When food continually gets packed behind the last tooth, causing bad breath or decay',
      'When an X-ray shows wisdom teeth pushing directly into the roots of your healthy neighboring molars',
      'For safe, comfortable, and preventative removal before roots fully lock into the jawbone',
    ],
    suitableTreatments: [
      {
        name: 'Extraction (Wisdom Tooth Surgery)',
        slug: 'extraction',
        description: 'Gentle, atraumatic removal of impacted wisdom teeth using precision micro-instruments under complete, comfortable local anaesthesia.',
      },
      {
        name: 'Cleaning and Polishing',
        slug: 'cleaning-polishing',
        description: 'Antimicrobial irrigation and plaque clearing around erupting wisdom teeth to manage mild gum swelling.',
      },
    ],
    preventionTips: [
      'Get a routine digital panoramic dental X-ray between ages 17 and 21 to check wisdom tooth angles early',
      'Use a small single-tuft toothbrush and warm salt water rinses to clean behind back molars',
      'Do not delay removal if you experience recurrent swelling—early removal is easier and heals faster',
    ],
    faqs: [
      {
        question: 'Do all wisdom teeth need to be removed?',
        answer: 'No. If your wisdom teeth erupt straight, are fully functional, healthy, and easy to keep clean, they do not need removal. Removal is recommended when they are impacted, painful, crowding adjacent teeth, or causing recurrent infections.',
      },
      {
        question: 'Is wisdom tooth removal painful at 22 Luna?',
        answer: 'Not at all. We ensure complete local numbing and use gentle, atraumatic micro-surgical techniques. You will feel light pressure during the procedure but absolutely no pain.',
      },
      {
        question: 'How long is the recovery time after wisdom tooth removal?',
        answer: 'Most patients recover comfortably within 3 to 5 days. We provide clear post-operative guidance, pain management medications, and simple dietary tips to ensure your healing is smooth and quick.',
      },
    ],
    ctaTitle: 'Relieve wisdom tooth pain safely and comfortably.',
    ctaSubtitle: 'Schedule your 3D wisdom tooth evaluation at 22 Luna.',
  },
};
