import type { ConcernDetailData } from '../concern-detail-data';

export const SKIN_CONCERNS_DATA: Record<string, ConcernDetailData> = {
  // 1. ACNE
  'acne': {
    slug: 'acne',
    name: 'Acne',
    tagline: 'Clear active breakouts, calm painful inflammation, and prevent long-term marks with doctor-led care.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Acne & Why Breakouts Happen.',
    understandingParagraphs: [
      'Acne happens when oil (sebum) produced by your skin mixes with shed dead skin cells and blocks your pores. When a pore is blocked, normal skin bacteria get trapped inside, multiply, and cause redness, swelling, and pimples.',
      'At 22 Luna, we look beyond the surface. Breakouts are often linked to hormonal changes, stress, skincare product buildup, or a damaged skin barrier from harsh scrubbing. Rather than drying out your skin with aggressive products, our medical team focuses on clearing congestion, soothing active redness, and preventing scarring while keeping your skin balanced and healthy.',
    ],
    howCommon: 'Acne affects more than 80% of teenagers and up to 40% of adults, especially women dealing with hormonal shifts.',
    signsNoticed: [
      'Red, tender bumps (pimples) and pus-filled blemishes on your face, jawline, or back',
      'Blackheads and whiteheads clustered around your nose, forehead, and cheeks',
      'Deep, painful cysts under the skin that take weeks to go away',
      'Red or brown marks left behind after a pimple heals',
      'Skin that gets very oily by midday but still feels dry, tight, or irritated',
    ],
    causes: [
      {
        factor: 'Clogged Pores',
        explanation: 'Dead skin cells do not shed properly and stick together inside pore openings, trapping oil.',
      },
      {
        factor: 'Excess Oil Production',
        explanation: 'Hormonal fluctuations signal oil glands to produce more oil than your skin naturally needs.',
      },
      {
        factor: 'Acne Bacteria & Swelling',
        explanation: 'Trapped bacteria grow quickly inside blocked pores, triggering redness, tenderness, and inflammation.',
      },
      {
        factor: 'Over-Exfoliating & Harsh Skincare',
        explanation: 'Using too many scrubs or stripping cleansers damages the skin barrier, making breakouts worse.',
      },
    ],
    adviceGuidance: [
      'When over-the-counter face washes and spot treatments fail to clear your skin after 4 to 6 weeks',
      'When breakouts leave behind dark marks, red stains, or pitted scars',
      'If you get painful, deep bumps along your jawline or chin that flare up around your period',
      'Before trying harsh home remedies or picking at pimples, which can cause permanent marks',
    ],
    suitableTreatments: [
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Gentle medical solutions that dissolve deep pore buildup, reduce oiliness, and speed up healthy skin renewal.',
      },
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Doctor-guided deep pore cleansing with painless extractions, calming serums, and barrier repair.',
      },
      {
        name: 'Light Therapy',
        slug: 'light-therapy',
        description: 'Blue and red LED light waves that destroy acne-causing bacteria and calm facial redness.',
      },
      {
        name: 'Micro-Needling / Advanced RF',
        slug: 'microneedling-rf',
        description: 'Targeted radiofrequency energy to balance overactive oil glands and smooth your skin.',
      },
    ],
    preventionTips: [
      'Wash your face twice a day with a gentle, non-stripping cleanser and lukewarm water',
      'Never pop, squeeze, or scratch pimples—it pushes bacteria deeper and causes dark marks',
      'Use oil-free, non-comedogenic sunscreen and moisturizers that do not clog pores',
      'Wipe down your phone screen regularly and change your pillowcase every few days',
    ],
    faqs: [
      {
        question: 'How long does it take to see clear skin with treatment?',
        answer: 'Most people see less redness and clearer pores after 2 to 3 sessions. Deeper cystic or hormonal acne typically responds best over an 8 to 12-week personalized plan with supportive home care.',
      },
      {
        question: 'Will clinical treatments make my skin purge or break out at first?',
        answer: 'Some gentle exfoliating treatments and peels speed up cell renewal, which can bring existing trapped congestion to the surface a little faster. This is temporary and quickly leads to much clearer, smoother skin.',
      },
      {
        question: 'Can adult acne be managed permanently?',
        answer: 'Yes. By balancing oil levels, keeping pores clear, and protecting your skin barrier with doctor-recommended care, you can maintain clear, blemish-free skin long-term.',
      },
    ],
    ctaTitle: 'Ready to clear persistent breakouts?',
    ctaSubtitle: 'Book a personal consultation at 22 Luna for a tailored acne clearing plan.',
  },

  // 2. ACNE SCARS
  'acne-scars': {
    slug: 'acne-scars',
    name: 'Acne Scars',
    tagline: 'Smooth pitted depressions, uneven skin texture, and old acne marks by rebuilding natural collagen.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Acne Scars & How Skin Heals.',
    understandingParagraphs: [
      'Acne scars form when deep, inflamed pimples or cysts damage the deeper layers of your skin. When the body tries to heal that injured area, it may produce too little collagen, leaving behind small dips, pits, or uneven hollows on the skin’s surface.',
      'Unlike surface dark spots (which naturally fade over time), true pitted acne scars sit deep in the skin and cannot be erased by creams or serums alone. At 22 Luna, we use advanced collagen-boosting treatments like RF microneedling, laser resurfacing, and natural growth factor therapy to gently lift indented areas and restore smooth, uniform skin texture.',
    ],
    howCommon: 'About 1 in 3 people who have had moderate or severe inflammatory acne develop some level of textural scarring.',
    signsNoticed: [
      'Small, sharp pits (ice-pick scars) on your cheeks and temples',
      'Broad, shallow dips (rolling scars) that make skin look wavy under side lighting',
      'Square-edged, boxy indentations (boxcar scars) left by old blemishes',
      'Makeup or foundation settling into tiny hollows rather than gliding on smoothly',
      'Dark or reddish discoloration lingering over textured scars',
    ],
    causes: [
      {
        factor: 'Deep Inflammation from Cysts',
        explanation: 'Severe blemishes damage collagen and elastic fibers deep beneath the surface of the skin.',
      },
      {
        factor: 'Loss of Collagen During Healing',
        explanation: 'If the body does not create enough new collagen to fill the wound, an indented scar is left behind.',
      },
      {
        factor: 'Squeezing or Picking Pimples',
        explanation: 'Popping blemishes tears delicate skin tissue and forces infection deeper, increasing scar risk.',
      },
      {
        factor: 'Delayed Treatment of Breakouts',
        explanation: 'Leaving painful acne untreated for months allows inflammation to break down deeper skin support.',
      },
    ],
    adviceGuidance: [
      'When uneven pits and indentations stay visible long after active pimples have cleared',
      'When over-the-counter retinol, oils, and creams fail to smooth out your skin texture',
      'When you want a doctor to map your scar types and design a treatment plan that actually works',
      'Before trying harsh home rolling tools that can cause skin infections and further damage',
    ],
    suitableTreatments: [
      {
        name: 'Micro-Needling / Advanced RF',
        slug: 'microneedling-rf',
        description: 'Tiny gold-tipped micro-pins deliver gentle radiofrequency heat into the skin to break up stiff scar bands and stimulate fresh collagen.',
      },
      {
        name: 'Skin Resurfacing',
        slug: 'skin-resurfacing',
        description: 'Precision laser peeling that smooths rough scar edges and evens out surface texture.',
      },
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-skin',
        description: 'Using your body’s own natural growth factors to accelerate skin repair and promote healthy, plump tissue.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Targeted medical peels to smooth superficial roughness and fade stubborn post-acne dark marks.',
      },
    ],
    preventionTips: [
      'Treat active acne early with doctor guidance so deep, scar-causing cysts do not form',
      'Resist the urge to pick, squeeze, or scratch pimples and scabs',
      'Wear daily sunscreen (SPF 50) so healing scars do not darken under the sun',
      'Keep your skin well moisturized with soothing, barrier-repairing ingredients like ceramides and hyaluronic acid',
    ],
    faqs: [
      {
        question: 'Can pitted acne scars be completely removed?',
        answer: 'While completely erasing severe scars is difficult, modern combination treatments (like RF microneedling and laser resurfacing) can achieve a 60% to 85%+ improvement, making scars significantly shallower and skin much smoother.',
      },
      {
        question: 'How many sessions are usually needed for acne scar revision?',
        answer: 'Most patients see great results across 3 to 6 sessions spaced about a month apart, as your skin continues to produce new collagen for several months after each treatment.',
      },
      {
        question: 'Is there a long recovery time after scar treatments?',
        answer: 'Downtime is minimal. You may experience mild redness and warmth (similar to a light sunburn) for 1 to 3 days, but you can get back to your daily routine very quickly.',
      },
    ],
    ctaTitle: 'Smooth out acne scars and rebuild confidence.',
    ctaSubtitle: 'Schedule your comprehensive scar assessment with Dr. Niharika at 22 Luna.',
  },

  // 3. PIGMENTATION / DULLNESS / MELASMA
  'pigmentation-dullness-melasma': {
    slug: 'pigmentation-dullness-melasma',
    name: 'Pigmentation / Dullness / Melasma',
    tagline: 'Fade stubborn dark patches, balance sun-induced discoloration, and restore a bright, radiant glow.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Dark Patches, Melasma & Skin Glow.',
    understandingParagraphs: [
      'Skin pigmentation happens when your pigment cells (melanocytes) produce extra melanin in response to sunlight, hormonal shifts, heat, or past inflammation. Melasma usually appears as symmetric brownish or grayish patches across the cheeks, forehead, and upper lip.',
      'Dullness, meanwhile, occurs when dead skin cells build up on the surface and fail to shed on time, making your complexion look tired and dry. At 22 Luna, we use gentle, specialized Q-Switched lasers, physician-formulated peels, and nourishing antioxidant infusions that safely break down excess pigment without irritating your skin or causing rebound darkening.',
    ],
    howCommon: 'Pigmentation and melasma are among the most common skin concerns in South Asian skin types, affecting over 50% of adult women.',
    signsNoticed: [
      'Dark brown or grayish patches on your cheeks, nose bridge, forehead, or upper lip',
      'Dark marks from past blemishes that take months to fade on their own',
      'Tired-looking, dull complexion that has lost its natural glow and freshness',
      'Pigmentation patches that noticeably darken after a few hours in the sun or near heat',
      'Needing concealer or color-correcting makeup every day to even out your skin tone',
    ],
    causes: [
      {
        factor: 'Hormonal Changes',
        explanation: 'Fluctuations in estrogen and progesterone (during pregnancy, birth control, or hormonal shifts) trigger extra pigment production.',
      },
      {
        factor: 'Sunlight & Blue Light Exposure',
        explanation: 'UV rays and light from phone and computer screens stimulate pigment cells to produce more melanin.',
      },
      {
        factor: 'Heat & Kitchen Steam',
        explanation: 'Exposure to high heat (like cooking over a stove or hot yoga) causes micro-inflammation that deepens melasma.',
      },
      {
        factor: 'Past Skin Irritation',
        explanation: 'Acne, burns, or harsh chemical bleaching products can leave behind stubborn dark marks as they heal.',
      },
    ],
    adviceGuidance: [
      'When dark patches keep spreading or darkening despite using drugstore brightening creams',
      'When your skin looks dull and uneven, making you look tired even when you are well-rested',
      'Before trying harsh whitening bleaches or unverified creams containing steroids',
      'When you want a safe, doctor-led laser and peel treatment specifically customized for Indian skin',
    ],
    suitableTreatments: [
      {
        name: 'Q Switched Nd:YAG Laser',
        slug: 'q-switched-laser',
        description: 'Advanced laser pulses shatter trapped pigment particles into tiny fragments that your body clears away naturally, with no downtime.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Carefully chosen mild acid solutions that lift dark surface layers and regulate pigment production.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy',
        description: 'Tiny micro-infusions of vitamin C, glutathione, and hydrating boosters delivered directly into the skin.',
      },
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Medical-grade oxygenation and deep hydration to sweep away dull dead cells and bring back instant radiance.',
      },
    ],
    preventionTips: [
      'Wear a broad-spectrum sunscreen (SPF 50+ PA++++) every single day and reapply every 2 to 3 hours',
      'Use a daily Vitamin C or antioxidant serum in the morning under your sunscreen',
      'Wear a wide-brimmed hat or use an umbrella during bright sunny afternoons',
      'Avoid harsh facial bleaches or rubbing your face aggressively with towel cloths',
    ],
    faqs: [
      {
        question: 'Can melasma be cured permanently?',
        answer: 'Because melasma is tied to hormones and sun exposure, it cannot be permanently eliminated forever. However, clinical treatments can clear 80% to 90% of visible dark patches, and simple daily habits keep it clear and under control.',
      },
      {
        question: 'Are laser treatments safe for Indian and darker skin tones?',
        answer: 'Yes, when done with the right technology. At 22 Luna, we use low-energy Q-Switched Nd:YAG laser toning specifically designed to treat melanin-rich skin safely without burns or rebound marks.',
      },
      {
        question: 'How many sessions will I need to see a visible change?',
        answer: 'Most patients notice their skin becoming brighter and more even after 2 to 3 sessions, with optimal clearing achieved in 4 to 6 sessions.',
      },
    ],
    ctaTitle: 'Fade dark patches and bring back your natural glow.',
    ctaSubtitle: 'Book a skin pigmentation consultation with our doctors at 22 Luna.',
  },

  // 4. ENLARGED PORES
  'enlarged-pores': {
    slug: 'enlarged-pores',
    name: 'Enlarged Pores',
    tagline: 'Refine open pore size, balance excess oil, and firm up skin texture for a smooth, clean finish.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Open Pores & Skin Firmness.',
    understandingParagraphs: [
      'Pores are the tiny natural openings on your skin where hair follicles and oil glands release moisture. When pores produce too much oil or get clogged with dead skin cells and oxidized grime, they stretch out and become much more visible, especially on the nose, cheeks, and forehead.',
      'As we age or experience sun exposure, the natural collagen that supports and tightens the walls of our pores also weakens, making them look looser and larger. At 22 Luna, we do not rely on harsh pore strips; instead, we deeply clear out trapped impurities, balance oil production, and tighten the skin around your pores using RF microneedling and medical exfoliation.',
    ],
    howCommon: 'Enlarged pores are extremely common, particularly in warm, humid climates and for anyone with oily or combination skin.',
    signsNoticed: [
      'Visible pinhole texture and open dots across your nose, cheeks, and forehead',
      'Face becoming very oily and shiny just a few hours after washing',
      'Foundation, concealer, or powder settling into tiny pore holes instead of looking smooth',
      'Stubborn blackheads and whiteheads continually forming in your T-zone',
      'Pores looking oval or stretched out as skin loses firmness with age',
    ],
    causes: [
      {
        factor: 'Overactive Oil Glands',
        explanation: 'Heavy oil flow expands the pore opening, making it look wider and more noticeable.',
      },
      {
        factor: 'Trapped Dead Cells & Debris',
        explanation: 'When oil and dead skin mix, they form a plug that stretches the pore outward.',
      },
      {
        factor: 'Loss of Collagen Around Pores',
        explanation: 'Sun damage and natural aging weaken the firm collagen "collar" that holds pores tight.',
      },
      {
        factor: 'Genetics & Natural Skin Type',
        explanation: 'Your baseline pore size and oil production are naturally influenced by family genetics.',
      },
    ],
    adviceGuidance: [
      'When pore-minimizing toners, clay masks, and drugstore strips fail to give lasting results',
      'When pores look stretched or oval due to loss of skin elasticity',
      'If using home suction tools or squeezing has caused redness, broken capillaries, or bruising',
      'When you want a doctor-guided treatment that cleans pores deeply and firms up your skin texture',
    ],
    suitableTreatments: [
      {
        name: 'Micro-Needling / Advanced RF',
        slug: 'microneedling-rf',
        description: 'Delivers gentle radiofrequency warmth deep into the skin to rebuild collagen around pore walls and tighten open pores.',
      },
      {
        name: 'Skin Polishing',
        slug: 'skin-polishing',
        description: 'Painless diamond micro-dermabrasion that clears out oxidized blackheads and smooths rough skin surface.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Salicylic and mandelic acid peels that penetrate deep into oily pores to dissolve stubborn plugs from within.',
      },
      {
        name: 'Skin Resurfacing',
        slug: 'skin-resurfacing',
        description: 'Fractional skin renewal to smooth overall texture and tighten loose, aging pores.',
      },
    ],
    preventionTips: [
      'Double cleanse at night to fully remove sunscreen, makeup, and pollution particles',
      'Use a gentle BHA (salicylic acid) liquid 2 to 3 times a week to keep pores clear',
      'Incorporate a lightweight Niacinamide serum to help balance oil and improve elasticity',
      'Always apply an oil-free sunscreen daily to protect the collagen supporting your pore walls',
    ],
    faqs: [
      {
        question: 'Can open pores be closed permanently?',
        answer: 'Pores are an essential part of your skin’s breathing and hydration, so they can never be erased entirely. However, clinical treatments can dramatically reduce their visible size, making your skin look smooth, tight, and refined.',
      },
      {
        question: 'Do pore vacuum tools and peel-off strips help?',
        answer: 'Pore strips and suction tools only pull off the very top layer of grime and often stretch pore walls or break tiny blood vessels. Clinical hydra-cleansing and peels clean deeper without stretching your skin.',
      },
      {
        question: 'How long do pore tightening results last?',
        answer: 'Results last for many months, especially when supported with simple daily skincare (niacinamide, sunscreen) and occasional maintenance facials every few months.',
      },
    ],
    ctaTitle: 'Refine your skin texture and tighten pores.',
    ctaSubtitle: 'Schedule your pore refinement assessment at 22 Luna today.',
  },

  // 5. FRECKLES / SUNSPOTS / MARKS
  'freckles-sunspots-marks': {
    slug: 'freckles-sunspots-marks',
    name: 'Freckles / Sunspots / Marks',
    tagline: 'Clear isolated sunspots, freckles, and lingering dark marks with targeted laser precision.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Sunspots, Freckles & Dark Marks.',
    understandingParagraphs: [
      'Freckles and sunspots are small, concentrated clusters of melanin pigment triggered by exposure to ultraviolet (UV) sunlight. While freckles are often inherited and darken in the summer, sunspots (solar spots) are permanent dark marks that appear over time from cumulative sun exposure on areas like the nose, cheeks, hands, and shoulders.',
      'Because these spots sit directly in the skin’s pigment layers, regular face creams usually cannot fade them completely. At 22 Luna, we use targeted Q-Switched laser technology and gentle medical peels to pinpoint each spot and safely break down the excess pigment, allowing your body to clear it away and reveal spotless, clear skin.',
    ],
    howCommon: 'Sunspots and freckles are seen in over 70% of adults who spend time outdoors or commute in sunny climates.',
    signsNoticed: [
      'Small, well-defined brown or tan spots on your nose, cheekbones, and forehead',
      'Dark sunspots appearing on your chest, shoulders, or the backs of your hands',
      'Spots that multiply or become noticeably darker after a holiday or beach trip',
      'Stubborn dark spots left behind by old pimples, insect bites, or scratches',
      'Complexion looking speckled and uneven rather than clean and clear',
    ],
    causes: [
      {
        factor: 'Cumulative Sun Exposure',
        explanation: 'UV rays prompt local pigment cells to produce extra melanin to protect deeper skin layers.',
      },
      {
        factor: 'Natural Genetic Tendency',
        explanation: 'Some people naturally inherit a genetic tendency to produce freckles when exposed to daylight.',
      },
      {
        factor: 'Natural Photoaging',
        explanation: 'Over years of sun exposure, pigment cells group together into permanent, flat brown spots.',
      },
      {
        factor: 'Post-Blemish Dark Marks',
        explanation: 'Healing pimples or scratches often leave behind isolated dark spots (post-inflammatory marks).',
      },
    ],
    adviceGuidance: [
      'When isolated sunspots or dark freckles do not fade after months of using Vitamin C or brightening creams',
      'When spots multiply across your face, hands, or chest and make skin look older than it is',
      'To have a doctor examine spots and confirm they are harmless before aesthetic laser removal',
      'Before trying risky home chemical drops or bleaching creams that can cause permanent white scars or burns',
    ],
    suitableTreatments: [
      {
        name: 'Q Switched Nd:YAG Laser',
        slug: 'q-switched-laser',
        description: 'Pinpoint laser pulses target only the dark pigment of the spot, causing it to lighten and fade away naturally.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Medical brightening peels to gently exfoliate superficial sun marks and brighten overall skin tone.',
      },
      {
        name: 'Skin Polishing',
        slug: 'skin-polishing',
        description: 'Diamond micro-dermabrasion to smooth away dull surface buildup and enhance skin clarity.',
      },
      {
        name: 'Light Therapy',
        slug: 'light-therapy',
        description: 'Soothing LED light to calm the skin and support healthy cellular renewal after laser treatments.',
      },
    ],
    preventionTips: [
      'Apply a broad-spectrum SPF 50+ sunscreen every morning, even on cloudy or indoor days',
      'Reapply sunscreen every 2 to 3 hours when you are outside or driving during daylight',
      'Use a daily antioxidant serum (like Vitamin C) under your sunscreen to fight sun damage',
      'Wear sunglasses and wide-brimmed hats when spending extended time in direct sunlight',
    ],
    faqs: [
      {
        question: 'How does laser treatment remove sunspots?',
        answer: 'The laser delivers quick, gentle pulses of light that are absorbed specifically by the dark melanin in the spot without harming the surrounding normal skin. The pigment breaks into tiny particles that fade away over the following week.',
      },
      {
        question: 'Will treated sunspots come back?',
        answer: 'The specific spots treated and cleared will not return. However, if your skin is exposed to unprotected sun in the future, new spots can develop, which is why daily sunscreen is key.',
      },
      {
        question: 'How many sessions does it take to clear sunspots?',
        answer: 'Many individual sunspots fade significantly in 1 to 2 targeted sessions. Widespread freckles or scattered marks typically need 3 to 4 sessions for complete clarity.',
      },
    ],
    ctaTitle: 'Clear unwanted spots and enjoy spotless skin.',
    ctaSubtitle: 'Schedule your spot removal consultation at 22 Luna today.',
  },

  // 6. DARK LIPS
  'dark-lips': {
    slug: 'dark-lips',
    name: 'Dark Lips',
    tagline: 'Restore natural pinkness, smooth out discoloration, and deeply hydrate dark or two-toned lips.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Lip Darkness & How to Restore Pinkness.',
    understandingParagraphs: [
      'The skin on our lips is much thinner and more delicate than the rest of our face—having only a few cellular layers and no natural oil glands to protect it. Lip hyperpigmentation happens when extra melanin builds up due to sun exposure, smoking, habitual lip-licking, chemical allergies from low-grade lipsticks, or natural genetics.',
      'Dark or two-toned lips often feel dry, chapped, and look dull. At 22 Luna, we do not use harsh bleaching chemicals. Instead, we use specialized gentle low-energy laser toning, hydrating lip peels, and nourishing skin booster micro-infusions to safely clear dark pigment, restore natural pink tones, and deeply hydrate your lips.',
    ],
    howCommon: 'Very common in South Asian individuals due to natural pigment density combined with sun exposure and lifestyle habits.',
    signsNoticed: [
      'Dark brown, purplish, or grayish color across the upper lip, lower lip, or lip borders',
      'Two-toned lips where the upper lip looks significantly darker than the bottom lip',
      'Lips that stay constantly dry, rough, or peeling despite applying lip balm',
      'Lipsticks and glosses looking altered in shade or clinging to dark patches',
      'Dark smoker’s discoloration and fine lines around the lip edges',
    ],
    causes: [
      {
        factor: 'Sun & Daylight Exposure',
        explanation: 'Lips are often forgotten during daily sunscreen application and easily darken under UV rays.',
      },
      {
        factor: 'Smoking & Nicotine',
        explanation: 'Tobacco heat and nicotine stimulate extra melanin production and reduce blood circulation in lip tissue.',
      },
      {
        factor: 'Habitual Lip Licking & Biting',
        explanation: 'Enzymes in saliva dry out the lip surface, leading to chronic friction and darkening over time.',
      },
      {
        factor: 'Harsh Lip Cosmetics & Dyes',
        explanation: 'Low-quality lipsticks, fragrances, and expired cosmetics can cause mild allergic darkening.',
      },
    ],
    adviceGuidance: [
      'When drugstore lip balms, scrubs, and home remedies fail to lighten dark lip color',
      'When you have a pronounced two-toned contrast that you constantly try to cover with lipstick',
      'If past smoking or sun exposure has left your lips discolored and dehydrated',
      'When preparing for a wedding or milestone and wanting naturally soft, pink, healthy lips',
    ],
    suitableTreatments: [
      {
        name: 'Q Switched Nd:YAG Laser',
        slug: 'q-switched-laser',
        description: 'Specialized gentle laser lip toning breaks down deep melanin safely without pain or peeling.',
      },
      {
        name: 'Lip Rejuvenation',
        slug: 'lip-rejuvenation',
        description: 'Micro-droplet hyaluronic acid and nourishing boosters to restore soft plumpness, deep hydration, and healthy color.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy',
        description: 'Gentle micro-infusion of brightening peptides, glutathione, and vitamins directly into the lip surface.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Ultra-mild mandelic and lactic acid lip peeling to gently slough away dark, dry surface layers.',
      },
    ],
    preventionTips: [
      'Use a nourishing lip balm with SPF 30 every day before stepping outdoors',
      'Never lick, bite, or peel dry flakes from your lips—apply a rich ceramide balm instead',
      'Avoid low-grade, heavily fragranced, or expired lipsticks and matte lip stains',
      'Drink 2.5 to 3 liters of water daily to keep your lips naturally hydrated from within',
    ],
    faqs: [
      {
        question: 'Is laser treatment safe on delicate lip skin?',
        answer: 'Yes! We use specialized low-energy laser toning calibrated specifically for sensitive lip tissue. The treatment is completely safe, feels like a warm tingle, and requires zero downtime.',
      },
      {
        question: 'How many sessions will it take to see pinker lips?',
        answer: 'Most patients notice lighter, softer lips after 2 to 3 sessions, with optimal natural pinkness achieved over 4 to 6 sessions spaced two weeks apart.',
      },
      {
        question: 'Will lip fillers help lighten dark lips?',
        answer: 'Fillers add volume and hydration, but true color lightening comes from laser lip toning and brightening mesotherapy. Combining both gives the ultimate soft, hydrated, rosy lip result.',
      },
    ],
    ctaTitle: 'Restore soft, natural pinkness to your lips.',
    ctaSubtitle: 'Book a lip lightening and rejuvenation consultation at 22 Luna.',
  },

  // 7. DARK CIRCLES
  'dark-circles': {
    slug: 'dark-circles',
    name: 'Dark Circles',
    tagline: 'Brighten under-eye shadows, fill hollow tear troughs, and refresh tired-looking eyes.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Under-Eye Darkness & Hollows.',
    understandingParagraphs: [
      'The skin under your eyes is the thinnest on your entire body—just half a millimeter thick. Because this skin is so delicate and translucent, the blood vessels, natural shadows, and pigment underneath show through very easily.',
      'Dark circles usually come from three main causes: true skin pigmentation (excess melanin), blood pooling under thin skin, or hollow tear troughs (loss of natural fat under the eyes that creates a dark shadow). At 22 Luna, we first determine the exact reason for your dark circles, then combine gentle under-eye fillers, brightening micro-infusions, and collagen boosters to refresh your eyes so you look awake, radiant, and well-rested.',
    ],
    howCommon: 'Experienced by over 60% of adults, often worsened by screen time, lack of sleep, and natural genetics.',
    signsNoticed: [
      'Bluish-purple tint under your lower eyelids that shows through thin skin',
      'Brown or grayish pigment circles surrounding the entire eye socket',
      'Sunken under-eye hollows (tear troughs) that cast deep shadows under overhead lighting',
      'Puffy morning eye bags that make the groove below them look even darker',
      'People frequently asking if you are tired or stressed even when you feel great',
    ],
    causes: [
      {
        factor: 'Hollow Tear Troughs (Volume Loss)',
        explanation: 'Natural loss of fat and bone support under the eye creates a sunken groove that casts a dark shadow.',
      },
      {
        factor: 'Natural Skin Pigmentation',
        explanation: 'Extra melanin in the thin under-eye skin, which is very common in South Asian families.',
      },
      {
        factor: 'Sluggish Circulation & Thin Skin',
        explanation: 'Deoxygenated blood pooling in tiny under-eye capillaries shows as a purple or blue tint.',
      },
      {
        factor: 'Screen Strain & Lack of Sleep',
        explanation: 'Prolonged mobile and computer screen time, eye rubbing, and poor sleep dilate blood vessels.',
      },
    ],
    adviceGuidance: [
      'When eye creams, cold tea bags, and caffeine serums fail to make a visible difference',
      'When deep under-eye hollows make you look perpetually exhausted in photos and mirrors',
      'To have a doctor determine whether your circles are caused by shadows, pigment, or thin skin',
      'Before trying risky home microneedling or harsh bleaching creams near your delicate eyes',
    ],
    suitableTreatments: [
      {
        name: 'Dermal Fillers',
        slug: 'dermal-fillers',
        description: 'Smooth, lightweight hyaluronic acid placed gently into the under-eye hollow to erase shadows and restore smooth contours instantly.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy',
        description: 'Micro-infusions of peptides, polynucleotides, and hyaluronic acid to thicken thin under-eye skin and lighten pigment.',
      },
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-skin',
        description: 'Your own natural growth factors stimulate fresh collagen, boost blood circulation, and firm delicate eye skin.',
      },
      {
        name: 'Lymphatic Drainage',
        slug: 'lymphatic-drainage',
        description: 'Gentle clinical facial drainage to reduce fluid retention and clear morning eye puffiness.',
      },
    ],
    preventionTips: [
      'Get 7 to 8 hours of restful sleep with your head slightly elevated to prevent fluid buildup',
      'Wear 100% UV-blocking sunglasses when outside to prevent squinting and sun pigment',
      'Avoid vigorously rubbing your eyes when tired or removing eye makeup',
      'Reduce salty late-night snacks and drink plenty of water to minimize puffiness',
    ],
    faqs: [
      {
        question: 'How do I know if my dark circles are pigment or hollow shadows?',
        answer: 'During consultation, we do a simple light test. If the darkness disappears when light shines straight at your eye from below, it is a hollow shadow that can be lifted with tear trough filler. If the dark color remains, it is skin pigment treatable with mesotherapy and gentle peels.',
      },
      {
        question: 'Are tear trough under-eye fillers safe?',
        answer: 'Yes, when done by an experienced doctor. At 22 Luna, we use blunt-tip micro-cannulas (instead of sharp needles) and premium soft fillers designed specifically for the delicate eye area to ensure maximum safety and smooth, natural results.',
      },
      {
        question: 'How long do under-eye filler results last?',
        answer: 'Because the under-eye area does not move very much compared to the mouth or cheeks, tear trough fillers typically last 12 to 18 months or even longer.',
      },
    ],
    ctaTitle: 'Refresh your eyes and erase dark shadows.',
    ctaSubtitle: 'Schedule your under-eye consultation with Dr. Niharika at 22 Luna.',
  },

  // 8. UNEVEN SKIN TONE
  'uneven-skin-tone': {
    slug: 'uneven-skin-tone',
    name: 'Uneven Skin Tone',
    tagline: 'Balance patchy discoloration, redness, and dull zones for a uniform, luminous complexion.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Complexion Uniformity & Tone Balance.',
    understandingParagraphs: [
      'An uneven skin tone happens when different areas of your face have different shades—combining darker sun-exposed patches, redness around the nose or chin, and dull areas where dead skin cells have accumulated. This unevenness prevents light from reflecting cleanly off your face, making skin look tired and aged.',
      'Unlike a single isolated dark spot, an uneven complexion is spread across the entire face and is often triggered by irregular sun exposure, past breakout marks, and a fluctuating skin barrier. At 22 Luna, we harmonize your complexion using doctor-formulated multi-acid peels, medical medi-facials, and gentle brightening toning to bring back balanced, uniform luminosity.',
    ],
    howCommon: 'One of the most frequent skin concerns reported by both men and women living in busy urban cities.',
    signsNoticed: [
      'Noticeable shade difference between your forehead, cheeks, and lower jawline',
      'Mottled complexion with scattered red blemish marks and patchy brown tones',
      'Skin looking blotchy or dull without foundation, BB cream, or concealer',
      'Slow recovery and dark marks lingering for weeks after minor breakouts or bug bites',
      'Rough, dry patches appearing side-by-side with oily, discolored areas',
    ],
    causes: [
      {
        factor: 'Uneven Sun Exposure',
        explanation: 'Sunlight hits higher contours (forehead, cheekbones) more strongly, producing patchy melanin.',
      },
      {
        factor: 'Past Acne Marks & Redness',
        explanation: 'Old blemishes leave a mosaic of reddish vascular stains and dark pigment spots.',
      },
      {
        factor: 'Irregular Dead Cell Shedding',
        explanation: 'When skin cells shed at uneven rates, light bounces off irregularly, making skin look patchy and dull.',
      },
      {
        factor: 'City Pollution & Environmental Stress',
        explanation: 'Airborne dust and smoke generate free radicals that trigger uneven pigment production.',
      },
    ],
    adviceGuidance: [
      'When brightening serums and drugstore face washes fail to balance your complexion',
      'When you feel you cannot leave the house without applying foundation or concealer',
      'If your skin tends to turn red and irritated when using generic cosmetic brightening creams',
      'When you want a doctor-crafted treatment plan that gently evens out your skin without peeling downtime',
    ],
    suitableTreatments: [
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Multi-acid peeling solutions (glycolic, lactic, kojic) that gently sweep away uneven surface layers to reveal fresh, balanced skin.',
      },
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Deep medical cleansing, hydration, and antioxidant infusions to instantly restore skin clarity and natural glow.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy',
        description: 'Direct micro-infusions of brightening vitamins, glutathione, and hyaluronic acid into the skin.',
      },
      {
        name: 'Light Therapy',
        slug: 'light-therapy',
        description: 'Calming LED light wavelengths that reduce red blotchiness and promote an even, healthy tone.',
      },
    ],
    preventionTips: [
      'Apply a broad-spectrum SPF 50+ sunscreen evenly every morning across your whole face and neck',
      'Use a daily antioxidant serum (such as Vitamin C) to guard against pollution and sun damage',
      'Avoid harsh walnut or apricot face scrubs that scratch the skin and cause patchy redness',
      'Incorporate a gentle Niacinamide serum (3–5%) to help regulate pigment and soothe your skin barrier',
    ],
    faqs: [
      {
        question: 'How many sessions does it take to get an even skin tone?',
        answer: 'Most patients see a noticeable improvement in skin clarity and brightness after 2 sessions. A structured series of 4 to 6 sessions spaced a few weeks apart delivers complete, balanced uniformity.',
      },
      {
        question: 'Can sensitive skin with redness be treated for uneven tone?',
        answer: 'Yes! We use ultra-gentle, hydrating mandelic or lactic acid peels and soothing LED light specifically designed for sensitive skin that cannot tolerate strong acids.',
      },
      {
        question: 'Will my uneven tone return if I go on an outdoor vacation?',
        answer: 'Wearing your broad-spectrum sunscreen (SPF 50), reapplying every few hours, and wearing a hat will protect your results. An occasional maintenance facial keeps your glow fresh all year.',
      },
    ],
    ctaTitle: 'Harmonize your complexion and reveal a unified glow.',
    ctaSubtitle: 'Schedule your skin tone consultation at 22 Luna today.',
  },

  // 9. TANNING / SUN DAMAGE
  'tanning-sun-damage': {
    slug: 'tanning-sun-damage',
    name: 'Tanning / Sun Damage',
    tagline: 'Reverse stubborn sun darkening, rehydrate sun-parched skin, and restore healthy bounce.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Sun Tanning & Photo-Damage Recovery.',
    understandingParagraphs: [
      'A tan is your skin’s emergency defense shield: when exposed to ultraviolet (UV) radiation from the sun, your pigment cells produce extra melanin to shield cell DNA from damage. However, intense or repeated sun exposure also breaks down your skin’s natural collagen, drains essential moisture, and leaves the surface feeling dry, rough, and leathery.',
      'A stubborn tan lingers when sun-darkened dead skin cells remain stuck to a dehydrated skin barrier. At 22 Luna, we do not use aggressive bleach treatments that burn your skin. Instead, we use medical diamond skin polishing, hydrating medi-facials, gentle peels, and laser toning to safely de-tan, deeply rehydrate, and bring back your natural, fresh complexion.',
    ],
    howCommon: 'Extremely common after beach holidays, outdoor sports, road trips, or daily commuting in sunny weather.',
    signsNoticed: [
      'Noticeable shade difference between your exposed face/neck and covered body areas',
      'Skin feeling rough, leathery, or dehydrated to the touch after sun exposure',
      'Fine sun lines and loss of natural softness and skin bounce',
      'Dull, muddy tone that looks fatigued and refuses to reflect light',
      'New freckles, dark blemish marks, and sunspots appearing after spending time outdoors',
    ],
    causes: [
      {
        factor: 'UVA & UVB Sun Radiation',
        explanation: 'UV rays trigger immediate darkening of existing pigment and stimulate rapid new melanin production.',
      },
      {
        factor: 'Collagen & Moisture Depletion',
        explanation: 'Sunlight breaks down dermal collagen and damages the skin barrier, leading to dry, rough texture.',
      },
      {
        factor: 'Compromised Moisture Barrier',
        explanation: 'Sun-parched skin loses water rapidly, making dead, darkened cells stick to the surface longer.',
      },
      {
        factor: 'Missing Sunscreen Reapplication',
        explanation: 'Applying sunscreen once in the morning wears off after 2 to 3 hours, leaving skin unprotected.',
      },
    ],
    adviceGuidance: [
      'When a stubborn tan lingers for months after a vacation and fails to fade on its own',
      'When sun exposure leaves your face feeling dry, tight, rough, and drained of glow',
      'Before trying harsh salon bleaches that strip the skin barrier and cause rebound darkening',
      'When you want a quick, relaxing clinical treatment that restores brightness and deep moisture',
    ],
    suitableTreatments: [
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Deep hydra-exfoliation, antioxidant infusion, and cooling cryo-therapy to instantly de-tan and soothe sun-stressed skin.',
      },
      {
        name: 'Skin Polishing',
        slug: 'skin-polishing',
        description: 'Diamond micro-dermabrasion to gently buff away tanned, oxidized surface cells and reveal fresh, bright skin.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Gentle fruit and lactic acid peels to accelerate the natural shedding of sun-darkened cells.',
      },
      {
        name: 'Q Switched Nd:YAG Laser',
        slug: 'q-switched-laser',
        description: 'Gentle laser toning to shatter stubborn deep sun pigment without heat damage or peeling.',
      },
    ],
    preventionTips: [
      'Apply a generous amount of broad-spectrum SPF 50+ PA++++ sunscreen every single morning',
      'Reapply sunscreen every 2 to 3 hours when outdoors, exercising, or driving in daylight',
      'Wear sunglasses and wide-brimmed hats during peak afternoon sun (11 AM – 3 PM)',
      'Apply soothing aloe, hyaluronic acid, and ceramide creams immediately after spending time in the sun',
    ],
    faqs: [
      {
        question: 'How quickly can clinical treatments remove a stubborn tan?',
        answer: 'You will see an immediate boost in brightness and softness after just one Medi Facial or Skin Polishing session. Deep, long-standing tanning typically clears completely across 2 to 4 sessions.',
      },
      {
        question: 'Are salon chemical bleaches harmful compared to clinical de-tanning?',
        answer: 'Yes. Commercial salon bleaches use harsh hydrogen peroxide that burns the skin barrier and can trigger dark rebound marks. At 22 Luna, we use medical hydra-infusions and gentle peels that nourish and protect your skin.',
      },
      {
        question: 'Can sun-damaged skin regain its natural firmness and glow?',
        answer: 'Absolutely. By removing sun-damaged surface cells and stimulating fresh natural collagen with medical facials, your skin quickly recovers its natural elasticity, softness, and radiant glow.',
      },
    ],
    ctaTitle: 'Reverse sun damage and reclaim your glow.',
    ctaSubtitle: 'Book a revitalizing de-tan and skin repair treatment at 22 Luna.',
  },

  // 10. ROSACEA & SENSITIVE SKIN
  'rosacea-sensitive-skin': {
    slug: 'rosacea-sensitive-skin',
    name: 'Rosacea & Sensitive Skin',
    tagline: 'Calm facial flushing, soothe stinging and burning, and strengthen hyper-reactive skin barriers.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Facial Flushing, Sensitivity & Rosacea.',
    understandingParagraphs: [
      'Rosacea and hyper-sensitive skin happen when the tiny blood vessels near your skin’s surface overreact to everyday triggers (like temperature changes, hot foods, emotional stress, or certain skincare products), causing persistent redness, visible spider-like capillaries, and uncomfortable stinging or burning sensations.',
      'Because sensitive skin has a weakened moisture barrier, aggressive scrubs or strong chemicals can cause severe flare-ups. At 22 Luna, our approach is gentle, soothing, and medically grounded: we use calming LED light therapy, barrier-repair facials, and gentle vascular treatments to calm inflammation, soothe irritation, and restore comfortable, tranquil skin.',
    ],
    howCommon: 'Affects roughly 1 in 10 adults, frequently mistaken for regular acne or seasonal dry skin.',
    signsNoticed: [
      'Frequent or permanent facial redness across your nose, cheeks, and chin',
      'Stinging, burning, or tightness when applying ordinary moisturizers, sunscreens, or face wash',
      'Tiny, visible broken blood vessels (spider capillaries) around the nose and cheekbones',
      'Small, tender red bumps that look like acne pimples but have no blackheads',
      'Sudden flushing triggered by hot drinks, spicy food, alcohol, or weather changes',
    ],
    causes: [
      {
        factor: 'Hyper-Reactive Blood Vessels',
        explanation: 'Facial micro-capillaries dilate excessively in response to mild environmental or emotional changes.',
      },
      {
        factor: 'Weakened Skin Barrier',
        explanation: 'Depleted natural lipids allow essential moisture to escape and irritants to enter, causing stinging.',
      },
      {
        factor: 'Underlying Micro-Inflammation',
        explanation: 'An overactive immune response in the skin keeps facial blood vessels constantly widened and inflamed.',
      },
      {
        factor: 'Microscopic Skin Mite Sensitivity',
        explanation: 'A natural sensitivity to normal skin mites (Demodex) can trigger red bumps and irritation in sensitive follicles.',
      },
    ],
    adviceGuidance: [
      'When facial redness shifts from temporary blushing to a permanent red tint on your cheeks and nose',
      'When almost every skincare cream or face wash causes your skin to sting, burn, or break out in red bumps',
      'When visible red thread-like veins start appearing and spreading across your cheeks',
      'Before using strong OTC acne washes (like benzoyl peroxide), which make rosacea redness much worse',
    ],
    suitableTreatments: [
      {
        name: 'Light Therapy',
        slug: 'light-therapy',
        description: 'Medical LED red and near-infrared light wavelengths that soothe underlying inflammation, calm redness, and speed up barrier healing.',
      },
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Gentle, cooling clinical facials with lipid-replenishing serums and cryo-soothing therapy designed specifically for hyper-sensitive skin.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy',
        description: 'Micro-droplet infusions of calming peptides and low-molecular hyaluronic acid to rebuild skin resilience.',
      },
      {
        name: 'Sclerotherapy',
        slug: 'sclerotherapy',
        description: 'Targeted micro-closure for prominent dilated capillaries and visible red spider veins.',
      },
    ],
    preventionTips: [
      'Use ultra-gentle, fragrance-free, non-foaming cleansing lotions and lukewarm water—never hot water',
      'Apply a 100% mineral sunscreen (Zinc Oxide based) daily, which soothes sensitive skin without chemical stinging',
      'Identify and minimize your personal flush triggers (such as very spicy meals, hot showers, or alcohol)',
      'Avoid physical face scrubs, alcohol-based toners, and harsh active acids',
    ],
    faqs: [
      {
        question: 'Can rosacea and facial redness be managed effectively?',
        answer: 'Yes. While sensitive skin requires ongoing gentle care, doctor-guided LED therapy, barrier-repair facials, and the right home routine can keep redness, flushing, and bumps under complete control.',
      },
      {
        question: 'Are chemical peels safe if I have rosacea or sensitive skin?',
        answer: 'Standard strong peels should be avoided. However, specialized, ultra-gentle polyhydroxy acid (PHA) or milk-based lactic acid peels administered by our doctors are completely safe and help strengthen your skin barrier.',
      },
      {
        question: 'How does LED Light Therapy calm facial redness?',
        answer: 'Red and near-infrared LED light penetrates comfortably into the skin to calm inflammatory signals, boost cellular energy for healing, and help over-dilated blood vessels return to normal.',
      },
    ],
    ctaTitle: 'Soothe sensitivity and calm facial redness.',
    ctaSubtitle: 'Schedule your gentle rosacea evaluation with our doctors at 22 Luna.',
  },

  // 11. STRETCH MARKS
  'stretch-marks': {
    slug: 'stretch-marks',
    name: 'Stretch Marks',
    tagline: 'Smooth red and mature white stretch marks by rebuilding natural collagen and tightening skin.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Stretch Marks & Dermal Repair.',
    understandingParagraphs: [
      'Stretch marks develop when your body expands faster than your skin’s natural elasticity can keep up with. When skin is pulled rapidly, the collagen and elastin fibers in the deeper layer tear. When fresh, they appear red, purple, or pink (because active blood vessels show through); over time, they mature into pale, silvery-white, slightly indented lines.',
      'Because stretch marks live deep in the dermis, standard body oils and cocoa butters cannot reach deep enough to rebuild torn fibers. At 22 Luna, we use advanced radiofrequency microneedling, fractional laser resurfacing, and natural growth factor therapy to stimulate fresh collagen, tighten the torn edges, and blend stretch marks with your surrounding skin tone.',
    ],
    howCommon: 'Affects up to 90% of pregnant women, and up to 70% of teens and adults during growth spurts or weight changes.',
    signsNoticed: [
      'Linear indented streaks or bands across the abdomen, hips, thighs, buttocks, or arms',
      'Fresh, reddish-purple or pink lines that may itch mildly when they first appear',
      'Mature, silvery-white or pearly streaks that feel slightly soft or crinkly to the touch',
      'Loss of skin firmness and elasticity over stretched body contours',
    ],
    causes: [
      {
        factor: 'Rapid Physical Growth or Weight Changes',
        explanation: 'Pregnancy, puberty growth spurts, rapid weight changes, or gym muscle building stretch skin rapidly.',
      },
      {
        factor: 'Hormonal Shifts & Cortisol',
        explanation: 'Higher hormone levels during pregnancy or puberty can temporarily reduce skin elasticity and collagen strength.',
      },
      {
        factor: 'Natural Genetic Skin Type',
        explanation: 'Genetics influence your baseline skin thickness and how easily your collagen fibers stretch.',
      },
      {
        factor: 'Prolonged Steroid Cream Use',
        explanation: 'Overusing strong steroid creams thins the skin layers, making stretch marks more likely to form.',
      },
    ],
    adviceGuidance: [
      'When stretch marks are in their early red or purple stage (when treatment results are fastest and most complete)',
      'When mature silvery-white stretch marks cause self-consciousness in swimwear, dresses, or workout clothes',
      'When over-the-counter bio-oils, creams, and butters have shown zero visible improvement',
      'To combine deep collagen-stimulating technology with natural growth factors for real textural smoothing',
    ],
    suitableTreatments: [
      {
        name: 'Micro-Needling / Advanced RF',
        slug: 'microneedling-rf',
        description: 'Micro-pins deliver gentle radiofrequency warmth deep into the torn dermal layer to contract stretch marks and rebuild fresh collagen.',
      },
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-skin',
        description: 'Your own natural concentrated growth factors are infused into treated stretch marks to speed up cellular regeneration and skin repair.',
      },
      {
        name: 'Skin Resurfacing',
        slug: 'skin-resurfacing',
        description: 'Fractional laser peeling to smooth surface crinkling and blend the color of pale marks with surrounding skin.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Body peeling treatments to refine surface texture and stimulate healthy new skin turnover.',
      },
    ],
    preventionTips: [
      'Keep skin well moisturized with rich ceramide and peptide body creams during pregnancy or muscle building',
      'Eat a balanced diet with adequate protein, zinc, and Vitamin C to support healthy collagen production',
      'Aim for steady, gradual weight adjustments rather than sudden drastic fluctuations',
      'Seek clinical treatment as soon as red or purple marks first appear for the best possible outcome',
    ],
    faqs: [
      {
        question: 'Can old, white stretch marks be improved?',
        answer: 'Yes! While older white marks cannot be 100% erased, advanced RF microneedling and laser resurfacing typically achieve a 50% to 75%+ improvement in depth, width, texture, and color blending.',
      },
      {
        question: 'Is treatment more effective on fresh red stretch marks?',
        answer: 'Yes. Red stretch marks still have active blood circulation and responsive healing cells, making them respond faster and more completely to treatment than older white marks.',
      },
      {
        question: 'How many sessions will I need for noticeable results?',
        answer: 'A standard treatment course involves 4 to 6 sessions spaced about a month apart, with progressive collagen remodeling continuing for up to 6 months after your last session.',
      },
    ],
    ctaTitle: 'Smooth stretch marks and restore skin firmness.',
    ctaSubtitle: 'Schedule your stretch mark consultation with the medical team at 22 Luna.',
  },

  // 12. WARTS AND SKIN TAGS
  'warts-skin-tags': {
    slug: 'warts-skin-tags',
    name: 'Warts and Skin Tags',
    tagline: 'Quick, safe, and virtually scarless removal of unwanted skin tags, warts, and benign bumps.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Skin Tags, Warts & Safe Removal.',
    understandingParagraphs: [
      'Skin tags are small, soft, harmless flaps of skin that commonly grow in friction areas like the neck, underarms, eyelids, and under the breasts. Warts, on the other hand, are rough, firm bumps caused by a common skin virus (HPV) that enters through tiny micro-scratches and causes the outer skin cells to grow rapidly.',
      'Trying to cut, burn, or tie off skin tags or warts at home is dangerous and can lead to painful infections, heavy bleeding, and permanent scars. At 22 Luna, we use gentle, precision radiofrequency (RF) micro-removal under local numbing to instantly vaporize growths at their base—safely, cleanly, and with minimal downtime.',
    ],
    howCommon: 'Over half of all adults develop skin tags over their lifetime, and warts affect up to 10% of the population.',
    signsNoticed: [
      'Small, soft, flesh-colored or brown flaps of skin hanging on your neck, underarms, or eyelids',
      'Rough, hard, raised bumps (warts) on your hands, feet, fingers, or face',
      'Growths that constantly catch on shirt collars, necklaces, or razors, causing pain or bleeding',
      'Spots that multiply or spread after shaving or scratching',
      'Feeling self-conscious about visible bumps on your face, neck, or chest',
    ],
    causes: [
      {
        factor: 'Skin Friction & Rubbing',
        explanation: 'Constant rubbing of skin against skin or against tight clothing collars triggers skin tags.',
      },
      {
        factor: 'Common Skin Virus (HPV)',
        explanation: 'Certain harmless viral strains infect the top layer of skin, causing contagious rough warts.',
      },
      {
        factor: 'Hormones & Blood Sugar Changes',
        explanation: 'Insulin resistance and hormonal changes during pregnancy frequently increase skin tag growth.',
      },
      {
        factor: 'Natural Family Tendency',
        explanation: 'Genetics often determine whether you are prone to developing multiple skin tags as you get older.',
      },
    ],
    adviceGuidance: [
      'When skin tags catch on jewellery, clothing, or razors and cause recurrent bleeding or soreness',
      'When warts begin spreading to nearby areas of your skin or to family members',
      'To have a medical doctor confirm that the bump is completely benign before safe aesthetic removal',
      'Never attempt dangerous home cutting, tying with thread, or applying caustic chemical acids',
    ],
    suitableTreatments: [
      {
        name: 'Removal of Warts / Skin Tags',
        slug: 'warts-skin-tags-removal',
        description: 'Gentle radiofrequency micro-ablation instantly vaporizes the base of the growth with zero bleeding and minimal scarring.',
      },
      {
        name: 'Skin Resurfacing',
        slug: 'skin-resurfacing',
        description: 'Gentle laser touch-up to smooth and blend surrounding skin texture after lesion removal.',
      },
    ],
    preventionTips: [
      'Wear soft, breathable clothing to minimize friction around your neck and underarms',
      'Never pick, scratch, or shave directly over active warts to prevent spreading the virus',
      'Maintain balanced blood sugar and an active lifestyle to help curb new skin tag growth',
      'Practice good hand hygiene in public gyms, locker rooms, and swimming pools',
    ],
    faqs: [
      {
        question: 'Is radiofrequency removal of skin tags and warts painful?',
        answer: 'Not at all. We apply a potent numbing cream or give a tiny local numbing droplet before the procedure, so you feel virtually nothing throughout the quick removal.',
      },
      {
        question: 'Will a removed skin tag grow back in the same spot?',
        answer: 'No. Once a skin tag is removed completely at its base, that specific tag will not grow back. However, people prone to tags may develop new ones over time in other friction areas.',
      },
      {
        question: 'What is the healing process after RF removal?',
        answer: 'A tiny, superficial micro-scab forms over the treated spot and heals and flakes off naturally in 4 to 7 days, leaving smooth, clear skin with little to no visible mark.',
      },
    ],
    ctaTitle: 'Clear unwanted skin tags and warts comfortably.',
    ctaSubtitle: 'Book your quick, scarless removal appointment at 22 Luna today.',
  },

  // 13. BURNS / SCARS / KELOIDS
  'burns-scars-keloids': {
    slug: 'burns-scars-keloids',
    name: 'Burns / Scars / Keloids',
    tagline: 'Soften thick raised scars, flatten keloids, relieve itching, and restore skin flexibility.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Raised Scars, Keloids & Tissue Softening.',
    understandingParagraphs: [
      'Raised scars (hypertrophic scars) and keloids happen when the body’s healing process goes into overdrive after a cut, burn, piercing, or acne cyst. Instead of laying down a normal flat layer of collagen, the skin produces too much thick, tangled collagen. While hypertrophic scars stay within the original wound area, keloids continue to grow larger, forming firm, raised, and often itchy or tender nodules.',
      'Surgical cutting alone often causes keloids to return even larger. At 22 Luna, we use a doctor-led non-surgical combination approach: gentle scar-softening micro-injections, RF microneedling, laser smoothing, and natural growth factors to flatten raised bumps, stop itching, and blend the scar smoothly with your natural skin.',
    ],
    howCommon: 'Keloids occur in up to 15% of individuals with genetic susceptibility, especially on the chest, shoulders, jawline, and earlobes.',
    signsNoticed: [
      'Raised, firm, rubbery scar tissue that has grown larger than the original cut or piercing',
      'Constant itching, tenderness, or sharp prickling sensations inside the scar',
      'Shiny, purplish, red, or dark surface with no pores or hair',
      'Tight, pulling feeling on the skin that makes moving your neck or joints uncomfortable',
      'Feeling self-conscious about visible thick scars on your chest, shoulders, ears, or face',
    ],
    causes: [
      {
        factor: 'Genetic Healing Tendency',
        explanation: 'Some people naturally inherit cells that produce excessive collagen during wound repair.',
      },
      {
        factor: 'Deep Skin Injury & High Tension',
        explanation: 'Burns, surgical incisions, ear piercings, or deep acne cysts heal under high mechanical skin tension.',
      },
      {
        factor: 'Prolonged Inflammation During Healing',
        explanation: 'Infections or slow-healing wounds keep collagen-producing cells active for too long.',
      },
      {
        factor: 'Extra Blood Vessels in the Scar',
        explanation: 'Active micro-vessels inside the scar continue feeding growth and causing redness and itching.',
      },
    ],
    adviceGuidance: [
      'When a scar keeps growing, thickening, or spreading months after an injury or piercing',
      'When scars cause persistent itching, throbbing discomfort, or pain under clothing pressure',
      'If burn scars feel stiff and restrict your normal movement or neck flexibility',
      'To undergo a safe, non-surgical medical treatment plan that prevents scars from returning',
    ],
    suitableTreatments: [
      {
        name: 'Micro-Needling / Advanced RF',
        slug: 'microneedling-rf',
        description: 'Radiofrequency micro-pins break down stiff, tangled collagen bundles and stimulate softer, flatter skin remodeling.',
      },
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-skin',
        description: 'Natural growth factors help rebalance collagen production and promote healthy, organized tissue repair.',
      },
      {
        name: 'Skin Resurfacing',
        slug: 'skin-resurfacing',
        description: 'Fractional laser remodeling to smooth raised borders and blend scar color with your natural skin.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy',
        description: 'Targeted micro-injections of medical scar-softening and anti-inflammatory formulations directly into the raised scar.',
      },
    ],
    preventionTips: [
      'Avoid elective piercings, tattoos, or unessential cosmetic cuts if you or your family are prone to keloids',
      'Use medical-grade silicone gel sheets on fresh wounds for 3 to 6 months to keep scars flat as they heal',
      'Protect healing wounds from all direct sunlight with clothing and SPF 50+ to avoid dark staining',
      'Gently massage healing cuts with hydrating ointments to reduce stiff tissue tension',
    ],
    faqs: [
      {
        question: 'Can keloids be flattened without surgery?',
        answer: 'Yes! Non-surgical combination therapy (softening micro-injections, RF microneedling, and laser smoothing) is actually much safer than surgery, flattening keloids while preventing them from growing back.',
      },
      {
        question: 'How many sessions does it take to flatten a thick scar?',
        answer: 'Most patients see significant softening, flattening, and relief from itching across 4 to 6 sessions spaced about a month apart.',
      },
      {
        question: 'Will the scar disappear completely?',
        answer: 'While deep scars cannot be 100% erased, clinical treatments can flatten raised bumps, relieve pain and itching, and achieve a 70% to 80% aesthetic blending with your natural skin.',
      },
    ],
    ctaTitle: 'Flatten and soften stubborn scars.',
    ctaSubtitle: 'Schedule your comprehensive scar revision consultation at 22 Luna.',
  },

  // 14. HYPERHIDROSIS
  'hyperhidrosis': {
    slug: 'hyperhidrosis',
    name: 'Hyperhidrosis',
    tagline: 'Stop excessive underarm, palm, and sole sweating with quick, physician-guided treatments.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Excessive Sweating & How to Stop It.',
    understandingParagraphs: [
      'Hyperhidrosis is a medical condition where your sweat glands produce far more sweat than your body needs for normal cooling. It most commonly affects the underarms, palms of the hands, soles of the feet, and forehead—often soaking through clothing even when you are sitting in a cool, air-conditioned room.',
      'This condition is not caused by poor hygiene or nervousness; it happens because the nerve signals that control your sweat glands are overactive. At 22 Luna, we offer quick, physician-administered neuromodulator (Botox) micro-treatments and radiofrequency therapies that temporarily calm overactive sweat signals, giving you 6 to 9+ months of complete dryness and restored confidence.',
    ],
    howCommon: 'Affects about 1 in 20 people worldwide, frequently causing frustration at work and in social situations.',
    signsNoticed: [
      'Sweat visibly soaking through shirts or dresses within minutes of putting them on',
      'Excessive underarm sweating happening even at rest or in cool air conditioning',
      'Clammy, wet hands that cause embarrassment during handshakes, writing, or using a phone',
      'Foot sweating that damages shoes and makes feet slide inside footwear',
      'Carrying extra clothes or relying on heavy pads throughout your workday',
    ],
    causes: [
      {
        factor: 'Overactive Nerve Signals',
        explanation: 'Nerve pathways send continuous signals to sweat glands, keeping them constantly turned on.',
      },
      {
        factor: 'Family Genetics',
        explanation: 'Over 65% of people with excessive sweating have a family member who experiences the same issue.',
      },
      {
        factor: 'Stress & Social Triggers',
        explanation: 'Adrenaline spikes during meetings or social encounters further amplify sweat gland output.',
      },
      {
        factor: 'Hormonal Fluctuations',
        explanation: 'Thyroid changes or hormonal shifts can occasionally worsen sweating episodes.',
      },
    ],
    adviceGuidance: [
      'When drugstore and clinical antiperspirants irritate your skin or fail to stop sweat patches',
      'When sweating soaks through shirts and impairs your confidence at work, meetings, or parties',
      'When sweaty palms make writing, shaking hands, or using touchscreens difficult',
      'When you want a fast, non-surgical treatment that keeps you dry for months with zero downtime',
    ],
    suitableTreatments: [
      {
        name: 'Botox',
        slug: 'botox',
        description: 'Gentle micro-droplet injections temporarily block the nerve signals that trigger sweat glands, keeping underarms or palms completely dry for 6–9 months.',
      },
      {
        name: 'Micro-Needling / Advanced RF',
        slug: 'microneedling-rf',
        description: 'Targeted radiofrequency energy delivered into the sweat gland layer for long-term reduction in sweat activity.',
      },
    ],
    preventionTips: [
      'Wear breathable, natural fabrics like cotton and linen that allow air to circulate freely',
      'Apply clinical antiperspirants at night before bed when sweat glands are naturally resting',
      'Cut back on very spicy foods and excessive caffeine, which stimulate sweat nerves',
      'Use antibacterial body wash to prevent sweat from breaking down and causing odor',
    ],
    faqs: [
      {
        question: 'How does Botox stop excessive sweating?',
        answer: 'Botox temporarily blocks the chemical messenger (acetylcholine) that tells your sweat glands to produce sweat. When the glands do not receive the message, sweating stops in that area within 3 to 7 days.',
      },
      {
        question: 'Is underarm Botox treatment painful?',
        answer: 'Not at all. We apply a strong numbing cream beforehand and use ultra-fine micro-needles, so the quick 15-minute treatment feels like tiny, comfortable pinches.',
      },
      {
        question: 'Will stopping underarm sweat make me sweat more in other places?',
        answer: 'No. Underarm sweat glands make up less than 2% of your body’s total sweat glands. Your body continues to cool itself completely normally everywhere else with zero compensatory sweating.',
      },
    ],
    ctaTitle: 'Enjoy sweat-free confidence every day.',
    ctaSubtitle: 'Book your doctor-led sweat reduction appointment at 22 Luna today.',
  },

  // 15. WRINKLES & AGEING
  'wrinkles-ageing': {
    slug: 'wrinkles-ageing',
    name: 'Wrinkles & Ageing',
    tagline: 'Smooth expression lines, restore youthful volume, and firm up facial contours with natural, subtle artistry.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Facial Aging, Lines & Natural Volume.',
    understandingParagraphs: [
      'Facial aging is a natural biological process involving a gradual decline in collagen and elastin (about 1% lost per year after age 25), subtle shifts in natural facial fat pads, and years of repetitive facial expressions (like smiling, frowning, or squinting). Over time, dynamic expression lines that used to disappear when your face relaxed turn into permanent, static creases.',
      'At 22 Luna, Dr. Niharika and our medical team follow a natural, preservative philosophy. We never believe in frozen, unnatural, or overfilled faces. Instead, we strategically use subtle wrinkle relaxers, structural volume replenishment, and radiofrequency skin tightening to restore rested vitality, smooth lines, and celebrate your natural features.',
    ],
    howCommon: 'A universal part of life that often accelerates in busy urban lifestyles due to screen time, sun exposure, and stress.',
    signsNoticed: [
      'Forehead worry lines, frown lines between the brows ("11s"), and crow’s feet around the eyes',
      'Deepening smile lines (nasolabial folds) and marionette lines around the mouth',
      'Loss of cheek fullness, hollow temples, and early softening of the jawline',
      'Thin, crepey skin texture across the neck, chest, and hands',
      'Makeup and foundation settling into facial lines by midday',
    ],
    causes: [
      {
        factor: 'Natural Collagen & Elastin Decline',
        explanation: 'Skin cells naturally slow down collagen production with age, reducing firmness and elasticity.',
      },
      {
        factor: 'Repetitive Facial Expressions',
        explanation: 'Years of smiling, squinting, and concentrating crease the overlying skin in predictable patterns.',
      },
      {
        factor: 'Loss of Natural Facial Fat Support',
        explanation: 'Subtle shifting and shrinking of deep facial fat pads leads to hollows and loose skin.',
      },
      {
        factor: 'Sun Exposure & Daily Stress',
        explanation: 'UV rays and environmental pollution break down healthy skin fibers and accelerate fine lines.',
      },
    ],
    adviceGuidance: [
      'When expression lines stay visible on your face even when your facial muscles are completely at rest',
      'When loss of volume in your cheeks makes your face look tired, hollow, or sagging',
      'When you want a subtle, refreshed look that friends will notice as "glowing" without looking altered',
      'To build a personalized anti-aging plan combining gentle in-clinic care with doctor-recommended home skincare',
    ],
    suitableTreatments: [
      {
        name: 'Botox',
        slug: 'botox',
        description: 'Micro-precision muscle relaxation to smooth forehead furrows, frown lines, and crow’s feet naturally while keeping your full emotional expression.',
      },
      {
        name: 'Dermal Fillers',
        slug: 'dermal-fillers',
        description: 'Natural hyaluronic acid support to gently restore lost cheek volume, soften smile lines, and define jaw contours.',
      },
      {
        name: 'Thread Lifts',
        slug: 'thread-lifts',
        description: 'Dissolvable support threads that gently lift sagging cheeks and jowls while stimulating long-term collagen growth.',
      },
      {
        name: 'Skin Tightening',
        slug: 'skin-tightening',
        description: 'Comfortable radiofrequency warmth to contract loose collagen and firm up the lower face and neck.',
      },
      {
        name: 'Anti Ageing',
        slug: 'anti-ageing',
        description: 'Comprehensive skin vitality and cellular regeneration protocols tailored to your personal aging timeline.',
      },
    ],
    preventionTips: [
      'Wear a broad-spectrum mineral sunscreen (SPF 50+) every morning to block UV collagen breakdown',
      'Use a doctor-recommended retinol or peptide serum at night to keep collagen production active',
      'Eat antioxidant-rich foods, stay hydrated with plenty of water, and get 7 to 8 hours of sleep',
      'Wear sunglasses outdoors to prevent squinting and crow’s feet around your eyes',
    ],
    faqs: [
      {
        question: 'Will wrinkle relaxers (Botox) make my face look frozen or fake?',
        answer: 'Never at 22 Luna. We use baby-dose, micro-precision techniques that preserve your natural facial expressions and smiles while simply softening harsh, tired creases.',
      },
      {
        question: 'What is the best age to start anti-aging treatments?',
        answer: 'Preventative care often starts in the late 20s or early 30s when fine lines first start lingering. Corrective treatments can be started at any age to restore volume and firm up skin.',
      },
      {
        question: 'How long do wrinkle relaxers and dermal fillers last?',
        answer: 'Wrinkle relaxers typically keep lines smooth for 3 to 5 months, while hyaluronic acid fillers provide natural volume support for 12 to 18+ months.',
      },
    ],
    ctaTitle: 'Look refreshed and naturally youthful.',
    ctaSubtitle: 'Schedule your personal anti-aging consultation with Dr. Niharika at 22 Luna.',
  },

  // 16. BRIDAL / EVENT SKIN PREPARATION
  'bridal-event-prep': {
    slug: 'bridal-event-prep',
    name: 'Bridal / Event Skin Preparation',
    tagline: 'Custom aesthetic timelines designed to give you camera-ready, luminous skin for your wedding or milestone.',
    category: 'Skin Concerns',
    understandingHeading: 'Structured Timelines for Flawless Event Glow.',
    understandingParagraphs: [
      'Preparing your skin for a wedding or milestone event requires smart clinical planning rather than risky last-minute experiments. Stress, wedding planning, travel, late nights, and multiple makeup trials can disrupt your skin barrier, leading to sudden breakouts, dullness, or tired under-eye bags right before your big celebrations.',
      'At 22 Luna, we curate bespoke 3-month, 6-month, and express bridal and groom aesthetic timelines. By strategically sequencing deep medi-facials, gentle peels, laser toning, revitalizing IV nutrient drips, and subtle facial balancing, we ensure your skin reaches its absolute peak radiance—smooth, glowing, and camera-ready with zero downtime risk.',
    ],
    howCommon: 'Over 85% of brides and grooms schedule professional aesthetic treatments in the months leading up to their wedding.',
    signsNoticed: [
      'Dull, tired complexion caused by wedding planning stress and irregular sleep',
      'Uneven skin tone and dark marks that show through high-definition photography',
      'Clogged pores and rough texture preventing smooth, seamless makeup application',
      'Dark under-eye circles and morning facial puffiness from late-night schedules',
      'Desire for sculpted facial contours, a clean jawline, and a full-body radiant glow',
    ],
    causes: [
      {
        factor: 'Event Planning Stress & Cortisol',
        explanation: 'Stress hormones increase skin oil, trigger inflammation, and slow down natural skin repair.',
      },
      {
        factor: 'Heavy Trial Makeup & Product Switching',
        explanation: 'Multiple makeup applications and rapid product changes can clog pores and cause sensitivity.',
      },
      {
        factor: 'Dehydration & Irregular Sleep',
        explanation: 'Busy schedules lead to low water intake and lack of rest, leaving skin looking fatigued.',
      },
      {
        factor: 'Last-Minute Aggressive Treatments',
        explanation: 'Doing harsh peels or facials too close to the event date can cause unwanted redness or peeling.',
      },
    ],
    adviceGuidance: [
      'Ideally 3 to 6 months before your wedding to treat acne, scars, pigmentation, or contouring goals',
      'At least 2 to 4 weeks before for express glow treatments, medi-facials, and IV hydration replenishment',
      'For grooms wanting clean beard margins, pore clearing, and a fresh, polished look',
      'To ensure all treatments are safely planned so your skin looks its absolute best on your wedding day',
    ],
    suitableTreatments: [
      {
        name: 'Bride/Groom To Be Treatments',
        slug: 'bridal-groom-treatments',
        description: 'Complete, structured aesthetic packages combining clinical facials, gentle peels, and laser toning customized to your wedding timeline.',
      },
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Medical hydra-cleansing, lymphatic drainage, and antioxidant oxygen infusion for an instant glass-skin glow.',
      },
      {
        name: 'Skin Polishing',
        slug: 'skin-polishing',
        description: 'Diamond micro-dermabrasion to smooth rough skin and ensure flawless, long-lasting makeup application.',
      },
      {
        name: 'REVIV IV Hydration',
        slug: 'reviv-iv-hydration',
        description: 'Intravenous vitamins, electrolytes, and glutathione to boost energy and give a full-body inner glow.',
      },
      {
        name: 'Mesotherapy',
        slug: 'mesotherapy',
        description: 'Direct micro-infusions of skin boosters and hyaluronic acid for deep, plump dermal hydration.',
      },
    ],
    preventionTips: [
      'Lock in your skincare routine at least 6 weeks before the wedding—avoid introducing untested new products',
      'Schedule all peels and active laser sessions at least 2 to 3 weeks before major photo shoots',
      'Drink 3 liters of water daily and aim for 8 hours of sleep to keep your skin naturally plump',
      'Book a final soothing Medi Facial 3 to 5 days before your event for the perfect makeup canvas',
    ],
    faqs: [
      {
        question: 'When is the best time to start bridal skin preparation?',
        answer: 'The sweet spot is 3 to 6 months before your wedding. This gives us enough time to resolve any acne, marks, or pigmentation, leaving the final few weeks for pure glow and hydration treatments.',
      },
      {
        question: 'Can grooms also benefit from event preparation treatments?',
        answer: 'Absolutely! We offer tailored groom protocols focusing on beard line shaping, pore clearing, skin polishing, dark circle reduction, and revitalizing IV drips.',
      },
      {
        question: 'Will treatments cause peeling or redness on my wedding day?',
        answer: 'No. Every treatment is scheduled backward from your wedding date. Only gentle, hydrating, non-peeling treatments with zero downtime are performed in the final 2 to 3 weeks.',
      },
    ],
    ctaTitle: 'Look breathtaking on your special day.',
    ctaSubtitle: 'Reserve your bespoke bridal or groom consultation at 22 Luna.',
  },

  // 17. KERATOSIS PILARIS
  'keratosis-pilaris': {
    slug: 'keratosis-pilaris',
    name: 'Keratosis Pilaris',
    tagline: 'Smooth rough "strawberry skin" bumps and clear clogged hair follicles on your arms and thighs.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Strawberry Skin & Keratin Buildup.',
    understandingParagraphs: [
      'Keratosis Pilaris (KP), often called "strawberry skin" or "chicken skin," is a completely harmless genetic condition where your skin produces a little too much keratin (the natural protein that protects your skin). The excess keratin forms tiny, hard plugs in your hair follicle openings, trapping hair shafts and creating small, sandpaper-like bumps.',
      'KP often gets worse in dry weather or with aggressive scrubbing (which inflames the follicles and makes redness worse). At 22 Luna, we treat KP with clinical body peels, diamond skin polishing, and gentle laser hair reduction to clear trapped plugs, eliminate curled hairs, and restore touchably smooth skin.',
    ],
    howCommon: 'Affects up to 50% of teenagers and 40% of adults, most commonly on the outer upper arms, thighs, and buttocks.',
    signsNoticed: [
      'Small, rough, sandpaper-like bumps on the outer upper arms, thighs, or buttocks',
      'Skin feeling dry, scratchy, and rough when you run your hand across it',
      'Tiny red or brownish dots surrounding each hair follicle (strawberry look)',
      'Roughness getting noticeably worse during dry winter months or in air-conditioned rooms',
      'Loofahs and rough body scrubs causing redness and stinging instead of smoothness',
    ],
    causes: [
      {
        factor: 'Keratin Plug Buildup',
        explanation: 'Extra keratin builds up inside hair follicle openings, forming tiny hard bumps.',
      },
      {
        factor: 'Natural Family Genetics',
        explanation: 'KP is a hereditary trait that runs in families and is common in people with dry or sensitive skin.',
      },
      {
        factor: 'Dry Weather & Dehydration',
        explanation: 'Low humidity and dry air make keratin harder and increase skin roughness.',
      },
      {
        factor: 'Harsh Physical Scrubbing',
        explanation: 'Rough scrubbing with loofahs irritates follicles and causes the skin to produce even more keratin.',
      },
    ],
    adviceGuidance: [
      'When rough arm or leg bumps cause self-consciousness in sleeveless tops, dresses, or swimwear',
      'When regular body lotions, oils, and physical scrubs fail to smooth out your skin',
      'If aggressive scrubbing has caused dark marks or red spots around hair roots',
      'To combine diamond skin polishing with gentle medical peels for rapid, lasting smoothness',
    ],
    suitableTreatments: [
      {
        name: 'Skin Polishing',
        slug: 'skin-polishing',
        description: 'Medical diamond micro-dermabrasion gently buffs away hard surface plugs without tearing delicate skin.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Lactic and salicylic acid body peels to dissolve tough keratin bonds and accelerate smooth cell renewal.',
      },
      {
        name: 'Laser Hair Reduction',
        slug: 'laser-hair-reduction',
        description: 'Disables the hair follicle completely, removing the root structure where keratin collects.',
      },
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Deep body hydra-infusions to replenish lost lipids and calm red, irritated follicles.',
      },
    ],
    preventionTips: [
      'Apply a moisturizing body cream containing 10% Urea, Lactic Acid, or Salicylic Acid twice daily to damp skin',
      'Take short, lukewarm showers instead of long, hot baths that dry out skin',
      'Never scrub with harsh loofahs, pumice stones, or coarse scrubs',
      'Use gentle, soap-free, hydrating body washes instead of harsh bar soaps',
    ],
    faqs: [
      {
        question: 'Can Keratosis Pilaris be cured permanently?',
        answer: 'Because KP is genetic, it cannot be permanently cured, but it can be kept 90%+ smooth and virtually invisible with clinical exfoliation and the right daily moisturizing routine.',
      },
      {
        question: 'Does Laser Hair Removal help with Keratosis Pilaris?',
        answer: 'Yes! Laser hair reduction is one of the most effective long-term treatments for KP. By disabling the hair follicle, it removes both the trapped hair and the pocket where keratin collects.',
      },
      {
        question: 'How many sessions are needed for smooth arms?',
        answer: 'Most patients notice a dramatic improvement in skin softness after 2 to 3 sessions, with optimal smoothness achieved in 4 to 6 sessions.',
      },
    ],
    ctaTitle: 'Smooth out strawberry skin bumps.',
    ctaSubtitle: 'Book your specialized skin smoothing treatment at 22 Luna today.',
  },

  // 18. SPIDER VEINS
  'spider-veins': {
    slug: 'spider-veins',
    name: 'Spider Veins',
    tagline: 'Non-invasive laser therapy and precision sclerotherapy to safely clear red and purple spider veins.',
    category: 'Skin Concerns',
    understandingHeading: 'Understanding Spider Veins & How to Clear Them.',
    understandingParagraphs: [
      'Spider veins (telangiectasias) are tiny, dilated blood vessels that sit right beneath the surface of your skin. They look like thin, web-like red, blue, or purple threads, most commonly appearing on the sides of the nose, cheeks, thighs, and lower legs.',
      'Unlike large bulging varicose veins, spider veins are primarily a cosmetic concern caused by vessel wall weakness, prolonged standing, sun exposure, or hormonal shifts. At 22 Luna, we offer gold-standard treatments including gentle sclerotherapy micro-injections and vascular laser therapy to safely close and dissolve unwanted veins with no surgery or downtime.',
    ],
    howCommon: 'Affects over 50% of adult women and 40% of adult men by age 50.',
    signsNoticed: [
      'Fine, branching red, blue, or purple thread-like veins across your cheeks or sides of your nose',
      'Web-like clusters of spider veins on your outer thighs, calves, or around your ankles',
      'Mild tired or aching sensations in your legs after standing on your feet all day',
      'Veins that become more prominent after warm showers or during hot weather',
      'Feeling hesitant to wear shorts, skirts, or go without makeup due to visible veins',
    ],
    causes: [
      {
        factor: 'Natural Family Genetics',
        explanation: 'Inherited weakness in tiny vessel walls makes blood vessels prone to stretching and staying visible.',
      },
      {
        factor: 'Prolonged Standing or Sitting',
        explanation: 'Jobs that require standing or sitting for long hours increase pressure in leg veins.',
      },
      {
        factor: 'Hormonal Changes',
        explanation: 'Estrogen and progesterone relax the walls of blood vessels during pregnancy or hormonal therapy.',
      },
      {
        factor: 'Sun Exposure & Skin Thinning',
        explanation: 'UV rays damage the collagen supporting facial capillaries, allowing them to dilate permanently.',
      },
    ],
    adviceGuidance: [
      'When spider veins become visibly noticeable on your face, nose, chest, or legs',
      'When leg veins cause mild aching, burning, or a heavy feeling at the end of the day',
      'To have a doctor confirm that veins are superficial and not part of deeper circulation issues',
      'For a safe, non-surgical treatment that clears veins cleanly with no cutting or scarring',
    ],
    suitableTreatments: [
      {
        name: 'Sclerotherapy',
        slug: 'sclerotherapy',
        description: 'A tiny micro-injection of a medical solution directly into the vein causes it to gently close, seal, and naturally dissolve away.',
      },
      {
        name: 'Q Switched / Vascular Nd:YAG Laser',
        slug: 'q-switched-laser',
        description: 'Targeted laser light seals tiny facial capillaries through the skin without any needles or skin punctures.',
      },
    ],
    preventionTips: [
      'Wear light compression stockings during long flights or if your job requires standing all day',
      'Take regular short walks to activate your calf muscles and keep blood flowing smoothly',
      'Apply daily broad-spectrum SPF 50+ to your face to protect delicate facial capillaries from sun damage',
      'Elevate your legs on a pillow for 15 minutes at the end of long days to reduce pressure',
    ],
    faqs: [
      {
        question: 'Are treated spider veins permanently gone?',
        answer: 'Yes! Once a vein is closed through sclerotherapy or laser treatment, it is permanently dissolved and reabsorbed by your body. If underlying genetic factors persist, new veins can occasionally appear in other areas over the years.',
      },
      {
        question: 'What is the difference between sclerotherapy and laser vein treatment?',
        answer: 'Sclerotherapy is the gold standard for leg veins (1–3mm) because a tiny micro-injection seals the vessel from within. Laser treatment is ideal for tiny red veins on the nose and cheeks where injections are not needed.',
      },
      {
        question: 'Is there any recovery time after sclerotherapy?',
        answer: 'Downtime is minimal. You can walk immediately after the procedure. We recommend wearing light compression stockings for a couple of days and avoiding very hot baths or strenuous workouts for 48 hours.',
      },
    ],
    ctaTitle: 'Clear unwanted spider veins safely.',
    ctaSubtitle: 'Schedule your vascular evaluation and vein removal appointment at 22 Luna.',
  },
};
