import type { ConcernDetailData } from '../concern-detail-data';

export const HAIR_CONCERNS_DATA: Record<string, ConcernDetailData> = {
  // 19. HAIR LOSS
  'hair-loss': {
    slug: 'hair-loss',
    name: 'Hair Loss',
    tagline: 'Stop excessive shedding, revive dormant hair roots, and restore density with natural PRP growth factors.',
    category: 'Hair Concerns',
    understandingHeading: 'Understanding Hair Shedding & Follicle Health.',
    understandingParagraphs: [
      'Losing 50 to 100 strands of hair a day is completely normal as old hairs shed to make room for new ones. However, when you start losing significantly more than that—or when hairs fall out and the roots go to sleep without growing back—you will notice a thinner ponytail, widening hair parting, or visible scalp.',
      'Hair loss is rarely just about changing your shampoo; it is usually driven by internal factors like genetics, hormonal shifts (like DHT or thyroid changes), iron and vitamin deficiencies, or high physical stress. At 22 Luna, we look closely at your scalp health and blood levels before creating a personalized treatment plan using natural Platelet-Rich Plasma (PRP), targeted root therapy, and medical scalp care to wake up sleeping follicles and halt hair loss.',
    ],
    howCommon: 'Affects over half of men and up to 40% of women by age 50, with more young adults experiencing it today due to stress and lifestyle.',
    signsNoticed: [
      'Excessive hair gathering in the shower drain, on your pillow, or on your brush (>100 strands a day)',
      'A noticeably smaller, thinner ponytail or overall loss of hair volume',
      'The central parting line on your scalp looking wider and more noticeable',
      'Scalp skin becoming visible under indoor lights or in the sunshine',
      'Hair strands shedding easily with a tiny white bulb at the root',
    ],
    causes: [
      {
        factor: 'Hormonal Shrinkage (DHT Sensitivity)',
        explanation: 'A natural hormone byproduct called DHT binds to sensitive hair roots, causing them to shrink and produce thinner strands.',
      },
      {
        factor: 'High Stress or Illness (Telogen Effluvium)',
        explanation: 'Major physical stress, high fever, rapid weight loss, or surgery can shock growing hairs into a sudden resting phase.',
      },
      {
        factor: 'Nutritional & Iron Deficiencies',
        explanation: 'Low iron stores (ferritin), Vitamin D3, or B12 deprive hair roots of the essential fuel needed to grow strong hair.',
      },
      {
        factor: 'Thyroid & Hormonal Changes',
        explanation: 'Post-pregnancy hormonal drops, thyroid fluctuations, or PCOS can trigger diffuse, sudden hair shedding.',
      },
    ],
    adviceGuidance: [
      'When heavy hair shedding continues for longer than 6 to 8 weeks without slowing down',
      'When you start noticing visible scalp thinning at your crown, temples, or parting line',
      'When drugstore hair oils, growth serums, and biotin gummies show zero improvement',
      'To get a doctor to examine your scalp roots early before sleeping follicles permanently close',
    ],
    suitableTreatments: [
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-hair',
        description: 'Using your own natural concentrated growth factors to awaken dormant hair roots, strengthen hair shafts, and stimulate healthy new growth.',
      },
      {
        name: 'Hair Loss Treatment',
        slug: 'hair-loss-treatment',
        description: 'Comprehensive doctor-guided medical care combining prescription root support, nutrition balancing, and growth boosters.',
      },
      {
        name: 'Scalp Rejuvenation',
        slug: 'scalp-rejuvenation',
        description: 'Deep scalp detox, blood circulation stimulation, and peptide infusion to create the ideal environment for hair growth.',
      },
      {
        name: 'Scalp Oxy Therapy',
        slug: 'scalp-oxy-therapy',
        description: 'High-pressure pure oxygen and vitamin mist to nourish hair roots and refresh the scalp.',
      },
    ],
    preventionTips: [
      'Eat enough protein daily (eggs, lentils, paneer, fish, chicken) to supply the building blocks for hair keratin',
      'Check your iron (ferritin), Vitamin D3, and thyroid levels through routine blood checks',
      'Avoid very tight hairstyles (tight buns, high ponytails) that constantly pull and strain your hair roots',
      'Use a gentle, sulfate-free shampoo and avoid roughly rubbing wet hair with a towel',
    ],
    faqs: [
      {
        question: 'Can lost hair really regrow with PRP therapy?',
        answer: 'Yes! PRP is clinically proven to wake up shrinking and dormant hair follicles, increase the thickness of individual hair strands, and significantly reduce shedding. As long as the hair follicle is still alive under the skin, healthy regrowth is achievable.',
      },
      {
        question: 'How many PRP sessions are typically needed?',
        answer: 'A standard initial plan consists of 4 to 6 sessions spaced about a month apart, followed by maintenance sessions once or twice a year to keep follicles strong.',
      },
      {
        question: 'Is the PRP hair procedure painful?',
        answer: 'Discomfort is minimal. We apply a numbing cream and use cooling devices with ultra-fine micro-needles, making the quick scalp treatment very comfortable.',
      },
    ],
    ctaTitle: 'Halt hair loss and revive your roots.',
    ctaSubtitle: 'Schedule your comprehensive scalp and PRP consultation at 22 Luna.',
  },

  // 20. HAIR THINNING
  'hair-thinning': {
    slug: 'hair-thinning',
    name: 'Hair Thinning',
    tagline: 'Reverse follicle shrinking, thicken fine hair strands, and restore full scalp volume.',
    category: 'Hair Concerns',
    understandingHeading: 'Understanding Follicle Shrinking & Hair Thickness.',
    understandingParagraphs: [
      'Hair thinning is different from sudden heavy shedding: it is a slow process where hair follicles gradually shrink (miniaturize) over time. As a follicle shrinks, each new hair it produces grows back finer, shorter, and more wispy than before. Eventually, what used to be a thick, healthy hair turns into fine, baby-like fuzz.',
      'Because thinning happens gradually, many people lose up to 50% of their overall hair volume before they notice it in the mirror. At 22 Luna, we catch follicle shrinking early. By delivering your body’s natural growth factors (PRP), oxygen-infused nutrient therapy, and targeted root stimulation, we reverse follicle shrinkage and help your hair grow back thick and strong.',
    ],
    howCommon: 'Affects over 40% of adult women and 60% of adult men, often starting subtly in your 20s or 30s.',
    signsNoticed: [
      'Individual hair strands feeling much thinner, finer, and softer than they used to be',
      'Hair looking flat and lifeless, struggling to hold volume or styling shapes',
      'Your scalp showing through your hair when standing under indoor lights or outdoors in the sun',
      'Hair seeming to stop growing past a certain length because fine strands break or shed early',
      'Noticeably thinner hair across the top of your head compared to the thick hair at the back',
    ],
    causes: [
      {
        factor: 'Hormonal Follicle Shrinkage',
        explanation: 'Sensitivity to DHT hormone causes hair roots to gradually shrink over time, making strands finer.',
      },
      {
        factor: 'Poor Scalp Blood Flow',
        explanation: 'Reduced blood circulation in the scalp limits the oxygen and nutrients reaching the hair root.',
      },
      {
        factor: 'Chronic Micro-Inflammation',
        explanation: 'Low-grade scalp irritation and product buildup can restrict healthy follicle growth over time.',
      },
      {
        factor: 'Natural Aging & Stress',
        explanation: 'Natural aging slows down cell renewal, shortening the active growth phase of each hair strand.',
      },
    ],
    adviceGuidance: [
      'When your hair feels noticeably thinner, flatter, and less dense than it was 1 to 2 years ago',
      'When your scalp is increasingly visible through your hair under everyday lighting',
      'When volumizing shampoos and hair sprays only give temporary puffiness without real fullness',
      'To start restorative medical treatment early while your hair roots are still alive and responsive',
    ],
    suitableTreatments: [
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-hair',
        description: 'Directly stimulates shrinking hair roots with concentrated natural growth factors to thicken individual hair strands.',
      },
      {
        name: 'Hair Loss Treatment',
        slug: 'hair-loss-treatment',
        description: 'Customized medical care combining bio-active peptides, topical stimulants, and nutritional support.',
      },
      {
        name: 'Scalp Rejuvenation',
        slug: 'scalp-rejuvenation',
        description: 'Scalp detox, follicle unclogging, and micro-nutrient infusion to stimulate active root metabolism.',
      },
      {
        name: 'Scalp Oxy Therapy',
        slug: 'scalp-oxy-therapy',
        description: 'Pressurized pure oxygen and vitamins to energize weakened hair roots and improve scalp health.',
      },
    ],
    preventionTips: [
      'Massage your scalp gently with your fingertips for 4 to 5 minutes daily to boost natural blood circulation',
      'Avoid heavy silicone buildup and overuse of dry shampoos that can choke your hair roots',
      'Eat a nutrient-dense diet rich in healthy fats, biotin, zinc, and amino acids',
      'Avoid excessive high-heat straightening and harsh chemical bleaching that weaken fragile hair',
    ],
    faqs: [
      {
        question: 'Can fine, thinned-out hair strands become thick again?',
        answer: 'Yes! If treated while the follicle is still active, treatments like PRP and targeted growth factor therapies can reverse shrinking and restore thick, healthy hair caliber.',
      },
      {
        question: 'How soon can I expect to see thicker hair?',
        answer: 'Most people see a noticeable reduction in shedding within 4 to 6 weeks, with visible increases in hair thickness and scalp coverage developing between 3 to 6 months as new growth cycles mature.',
      },
      {
        question: 'Is hair thinning different in women compared to men?',
        answer: 'Yes. Men usually experience thinning along the temples and crown (receding hairline), while women typically experience diffuse thinning across the top of the scalp while keeping their frontal hairline intact.',
      },
    ],
    ctaTitle: 'Restore thickness and volume to thinning hair.',
    ctaSubtitle: 'Book your scalp assessment and hair thickening plan at 22 Luna.',
  },

  // 21. RECEDING HAIRLINE
  'receding-hairline': {
    slug: 'receding-hairline',
    name: 'Receding Hairline',
    tagline: 'Stabilize receding temples, stimulate frontal margins, and preserve your natural hairline.',
    category: 'Hair Concerns',
    understandingHeading: 'Understanding Frontal Recession & Hairline Care.',
    understandingParagraphs: [
      'A receding hairline is the classic early sign of pattern hair loss. It typically starts with hair thinning at the temples on either side of your forehead, forming a distinct "M" or "V" shape, before slowly moving backward across the front of your head.',
      'The hair follicles along the front hairline naturally have the highest sensitivity to DHT (a byproduct of testosterone). At 22 Luna, we focus on early, proactive care. By stabilizing active recession with medical therapies and stimulating sleeping temple follicles with concentrated PRP and root therapy, we help protect and reinforce your natural hairline contour.',
    ],
    howCommon: 'Affects up to 80% of men over their lifetime, often starting in the late teens, 20s, or early 30s.',
    signsNoticed: [
      'Gradual backward movement of the hair boundary at your left and right temples',
      'Fine, short, wispy "baby hairs" along the front edge that refuse to grow longer',
      'Forehead looking visibly larger or higher in photos compared to previous years',
      'One temple receding faster than the other, creating an uneven frontal hairline',
      'Difficulty styling your hair in pushed-back or parted styles due to thin temple edges',
    ],
    causes: [
      {
        factor: 'Hormonal Temple Sensitivity',
        explanation: 'Genetically sensitive frontal follicles react to DHT hormone, causing growth cycles to become shorter.',
      },
      {
        factor: 'Family Pattern Genetics',
        explanation: 'A family history of early hairline recession on either your mother’s or father’s side increases your likelihood.',
      },
      {
        factor: 'Tight Hairstyles & Tension',
        explanation: 'Pulling hair back tightly into buns or wearing tight caps puts constant physical strain on frontal roots.',
      },
      {
        factor: 'Scalp Tightness & Reduced Blood Flow',
        explanation: 'Tension across the scalp can reduce the micro-circulation feeding frontal hair roots.',
      },
    ],
    adviceGuidance: [
      'At the very first sign of temple retreat—early intervention gives the highest chance of saving hair roots',
      'When thick hairs along the front border start turning into fine, wispy baby hairs',
      'When over-the-counter minoxidil or hair oils fail to stop the hairline from moving back',
      'To explore non-surgical regenerative stimulation before follicles become permanently inactive',
    ],
    suitableTreatments: [
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-hair',
        description: 'Micro-precision injections of concentrated natural growth factors placed directly along the receding temples to reactivate dormant hair roots.',
      },
      {
        name: 'Hair Loss Treatment',
        slug: 'hair-loss-treatment',
        description: 'Doctor-guided medical stabilization plan to block hormonal shrinkage and boost frontal hair growth.',
      },
      {
        name: 'Scalp Rejuvenation',
        slug: 'scalp-rejuvenation',
        description: 'Targeted root stimulation and peptide bio-infusion to improve frontal scalp blood flow and nutrient delivery.',
      },
    ],
    preventionTips: [
      'Seek medical advice as soon as you notice your temples moving back—sleeping roots are much easier to revive early',
      'Avoid tight pull-back hairstyles (like tight man buns or braids) that pull on frontal edges',
      'Use doctor-recommended topicals to help protect sensitive frontal roots',
      'Protect your forehead hairline from sunburn, which can damage delicate hair roots',
    ],
    faqs: [
      {
        question: 'Can a receding hairline be brought back without surgery?',
        answer: 'If the hair roots at your temples are miniaturized but still alive, PRP and medical therapies can thicken them and bring back visible frontal density. If roots have completely disappeared for many years, a hair transplant may be recommended.',
      },
      {
        question: 'How do I know if my hairline is naturally maturing or receding?',
        answer: 'A naturally mature hairline moves back slightly by 1 to 2 cm in your early 20s and then stays completely stable. A receding hairline continues moving back at the temples with fine, thinning hairs that keep shedding.',
      },
      {
        question: 'How quickly does PRP help stabilize a receding hairline?',
        answer: 'Most patients see shedding along the hairline stabilize within 4 to 8 weeks, with noticeable thickening at the temple margins visible between 3 and 6 months.',
      },
    ],
    ctaTitle: 'Protect and reinforce your hairline.',
    ctaSubtitle: 'Schedule your hairline evaluation at 22 Luna today.',
  },

  // 22. DANDRUFF & FLAKY SCALP
  'dandruff-flaky-scalp': {
    slug: 'dandruff-flaky-scalp',
    name: 'Dandruff & Flaky Scalp',
    tagline: 'Clear stubborn flakes, soothe intense scalp itching, and rebalance your scalp microbiome.',
    category: 'Hair Concerns',
    understandingHeading: 'Understanding Dandruff, Itching & Scalp Balance.',
    understandingParagraphs: [
      'Dandruff happens when a naturally occurring harmless yeast on your scalp (called Malassezia) grows too quickly by feeding on scalp oils. When this yeast breaks down your natural oils, it produces byproducts that irritate sensitive scalp skin, causing skin cells to shed much faster than usual in visible white or yellowish flakes.',
      'Applying heavy hair oils (like coconut or mustard oil) often makes dandruff worse because the yeast feeds directly on oil. At 22 Luna, we treat dandruff through doctor-guided scalp detoxification, gentle exfoliating treatments, pure oxygen therapy, and soothing anti-inflammatory care that eliminates flakes and restores a clean, healthy scalp.',
    ],
    howCommon: 'Affects up to 50% of adults, often flaring up during seasonal weather changes or periods of high stress.',
    signsNoticed: [
      'Visible white, gray, or greasy yellowish flakes shedding onto your shoulders and dark clothes',
      'Persistent, frustrating scalp itching and the urge to scratch continuously',
      'Red, irritated, or tender patches on your scalp, especially near your hairline or behind your ears',
      'Greasy scalp buildup combined with dry, brittle, dull hair ends',
      'Increased hair fall during flare-ups due to constant scratching and scalp irritation',
    ],
    causes: [
      {
        factor: 'Scalp Yeast Overgrowth (Malassezia)',
        explanation: 'Natural scalp yeast multiplies and breaks down scalp oils into irritating byproducts that trigger rapid flaking.',
      },
      {
        factor: 'Excess Scalp Oil Production',
        explanation: 'Heavy oil buildup provides more food for yeast to multiply and cause inflammation.',
      },
      {
        factor: 'Applying Heavy Scalp Oils',
        explanation: 'Applying plant oils (coconut, castor) to an already flaky scalp feeds the yeast and worsens flaking.',
      },
      {
        factor: 'Infrequent or Improper Washing',
        explanation: 'Not washing hair regularly allows dead cells, sweat, and oil to accumulate into thick flakes.',
      },
    ],
    adviceGuidance: [
      'When regular anti-dandruff shampoos stop working or leave your hair dry and rough as straw',
      'When flaking is accompanied by redness, burning sensations, or raw skin from scratching',
      'When dandruff flare-ups coincide with increased hair shedding and scalp soreness',
      'To get a medical scalp detox that clears stubborn flakes and restores long-term comfort',
    ],
    suitableTreatments: [
      {
        name: 'Scalp Rejuvenation',
        slug: 'scalp-rejuvenation',
        description: 'Clinical scalp detox and gentle exfoliating therapy to dissolve stubborn, stuck-on flakes and clear clogged pores.',
      },
      {
        name: 'Scalp Oxy Therapy',
        slug: 'scalp-oxy-therapy',
        description: 'Pressurized pure oxygen and antifungal botanical extracts to eliminate yeast and soothe scalp irritation.',
      },
      {
        name: 'Hair Loss Treatment',
        slug: 'hair-loss-treatment',
        description: 'Doctor-guided care to treat hair shedding triggered by severe scalp inflammation and itching.',
      },
    ],
    preventionTips: [
      'Wash your hair 3 to 4 times a week with a doctor-recommended active shampoo (ketoconazole or zinc pyrithione)',
      'Leave your medicated shampoo on your scalp for 3 to 5 minutes before rinsing so it has time to work',
      'Avoid applying heavy oils, butters, or greasy serums directly to an itchy, flaky scalp',
      'Rinse your hair with lukewarm or cool water—never hot water, which triggers more oil production',
    ],
    faqs: [
      {
        question: 'Why does applying coconut oil make my dandruff worse?',
        answer: 'Coconut oil and other natural plant oils are rich in fatty acids that the dandruff yeast feeds on. Applying oil to a flaky scalp provides more food for the yeast, accelerating flaking and itching.',
      },
      {
        question: 'Can severe dandruff cause permanent hair loss?',
        answer: 'Dandruff itself does not kill hair roots, but the chronic redness, inflammation, and constant aggressive scratching can weaken roots and cause temporary hair fall.',
      },
      {
        question: 'How quickly does clinical Scalp Rejuvenation clear dandruff?',
        answer: 'Most patients feel instant relief from itching and see a dramatic reduction in visible flakes after just one clinical session, with lasting control maintained through simple follow-up care.',
      },
    ],
    ctaTitle: 'Clear stubborn dandruff and soothe your scalp.',
    ctaSubtitle: 'Book your clinical scalp detox and rejuvenation session at 22 Luna.',
  },

  // 23. DRY / UNHEALTHY SCALP
  'dry-unhealthy-scalp': {
    slug: 'dry-unhealthy-scalp',
    name: 'Dry / Unhealthy Scalp',
    tagline: 'Rehydrate parched scalp barriers, relieve tightness, and nourish the soil for healthy hair growth.',
    category: 'Hair Concerns',
    understandingHeading: 'Understanding Scalp Dryness & Moisture Barriers.',
    understandingParagraphs: [
      'Just like the skin on your face, your scalp needs a healthy moisture barrier to stay hydrated, protect hair roots, and defend against irritation. When this barrier is stripped by harsh sulfate shampoos, hot water, dry air conditioning, or chemical hair treatments, the scalp loses its natural moisture.',
      'A dry scalp feels tight, itchy, and uncomfortable, producing fine, powdery white flakes (different from oily dandruff) and leaving your hair looking dull and lifeless. At 22 Luna, we treat your scalp as living biological soil: using deeply hydrating scalp facials, pure oxygen therapy, and nourishing micro-nutrients to restore moisture and comfort.',
    ],
    howCommon: 'Experienced by over 45% of people, especially in winter, dry seasons, or after chemical hair straightening and coloring.',
    signsNoticed: [
      'Persistent scalp tightness, prickling, or dry itching throughout the day',
      'Fine, dry, white powdery dust on your hair roots (distinct from oily, sticky dandruff flakes)',
      'Hair emerging from your roots looking dry, dull, and lacking natural shine',
      'Scalp feeling sensitive or stinging when applying hair care products or tying hair up',
      'Rough, dry patches on your scalp when parting your hair',
    ],
    causes: [
      {
        factor: 'Harsh Sulfates & Over-Washing',
        explanation: 'Strong shampoos strip away natural protective oils, leaving the scalp barrier dry and exposed.',
      },
      {
        factor: 'Hot Showers & Dry Indoor Air',
        explanation: 'Hot water and air-conditioned rooms pull essential moisture out of delicate scalp skin.',
      },
      {
        factor: 'Chemical Straightening & Dyes',
        explanation: 'Hair bleaching and chemical straightening chemicals cause acute dehydration on scalp tissue.',
      },
      {
        factor: 'Dehydration & Low Healthy Fats',
        explanation: 'Not drinking enough water or lacking healthy omega fats in your diet leads to dry skin and scalp.',
      },
    ],
    adviceGuidance: [
      'When your scalp feels constantly tight, dry, and sensitive despite using moisturizing shampoos',
      'When fine powdery flakes persist and standard anti-dandruff shampoos make the dryness worse',
      'Following chemical bleaching, coloring, or straightening that has left your scalp parched',
      'To build a healthy, hydrated scalp environment that supports strong, shiny hair growth',
    ],
    suitableTreatments: [
      {
        name: 'Scalp Oxy Therapy',
        slug: 'scalp-oxy-therapy',
        description: 'Micro-jet infusion of 98% pure oxygen and hydrating hyaluronic acid directly into the scalp to restore instant moisture and comfort.',
      },
      {
        name: 'Scalp Rejuvenation',
        slug: 'scalp-rejuvenation',
        description: 'Gentle clinical scalp facial using ceramide-rich serums, soothing botanicals, and LED light to repair a damaged scalp barrier.',
      },
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-hair',
        description: 'Natural growth factors that improve blood circulation, tissue elasticity, and scalp hydration from within.',
      },
    ],
    preventionTips: [
      'Switch to a mild, sulfate-free, hydrating shampoo with a skin-friendly pH',
      'Always wash your hair with lukewarm or cool water—never steaming hot water',
      'Apply a lightweight hyaluronic acid or peptide scalp serum after washing while hair is damp',
      'Drink at least 2.5 to 3 liters of water daily and include healthy fats (walnuts, almonds, avocados) in your diet',
    ],
    faqs: [
      {
        question: 'How can I tell the difference between a dry scalp and dandruff?',
        answer: 'A dry scalp produces small, dry, white powdery dust, feels tight, and improves with moisture. Dandruff produces larger, oily, yellowish flakes, causes redness, and requires antifungal cleansing.',
      },
      {
        question: 'How does Scalp Oxy Therapy help a dry scalp?',
        answer: 'Scalp Oxy Therapy uses pure, pressurized oxygen to painlessly push deep hydration, vitamins, and antioxidants directly into your scalp without needles, instantly relieving tightness and dryness.',
      },
      {
        question: 'How often should someone with a dry scalp wash their hair?',
        answer: 'Washing 2 to 3 times a week with a gentle, sulfate-free hydrating shampoo is ideal to keep your scalp clean without stripping its natural moisture.',
      },
    ],
    ctaTitle: 'Nourish and rehydrate your scalp.',
    ctaSubtitle: 'Schedule your scalp hydration and rejuvenation session at 22 Luna.',
  },

  // 24. WEAK / BRITTLE HAIR
  'weak-brittle-hair': {
    slug: 'weak-brittle-hair',
    name: 'Weak / Brittle Hair',
    tagline: 'Repair broken hair bonds, restore strength, and infuse deep moisture into damaged, snapping hair.',
    category: 'Hair Concerns',
    understandingHeading: 'Understanding Hair Breakage & Keratin Repair.',
    understandingParagraphs: [
      'Each hair strand is protected by an outer layer of microscopic overlapping scales called the cuticle, surrounding a strong inner core made of keratin protein. When hair is exposed to frequent heat styling, chemical bleaching, perming, or swimming pool chlorine, the protective cuticle cracks and lifts.',
      'Once this protective shield is damaged, internal moisture leaks out, protein bonds snap, and hair becomes porous, dry, and brittle—breaking off easily midway down the strand. At 22 Luna, we offer deep-conditioning Hair Botox fiber reconstruction, autologous scalp stimulation, and revitalizing IV nutrient drips to repair broken protein bonds, seal cracked cuticles, and restore silky, touchable strength.',
    ],
    howCommon: 'Affects over 70% of people who regularly use heat straighteners, curling irons, bleach, or chemical hair colors.',
    signsNoticed: [
      'Hair strands snapping and breaking off midway down when brushing, washing, or tying hair',
      'Extensive split ends, frayed tips, and a rough, straw-like feel when touching your hair',
      'Constant frizz, flyaways, and extreme difficulty gently detangling wet hair',
      'Hair having zero stretch or bounce (strands snap immediately when pulled gently instead of flexing)',
      'Dull, faded, rough look that fails to reflect light even after using salon conditioners',
    ],
    causes: [
      {
        factor: 'Heat Styling & Flat Irons',
        explanation: 'High heat from hair straighteners and curling irons breaks the internal protein bonds of the hair fiber.',
      },
      {
        factor: 'Chemical Bleaching & Dyes',
        explanation: 'Bleaching chemicals strip away the hair’s natural protective lipid layer, leaving cuticles cracked and open.',
      },
      {
        factor: 'Protein & Nutrient Deficiencies',
        explanation: 'Low dietary protein, iron, and amino acids cause newly growing hair to emerge weak from the root.',
      },
      {
        factor: 'Sun & Chlorine Exposure',
        explanation: 'UV sunlight and pool chemicals dry out hair keratin, making strands rough and fragile.',
      },
    ],
    adviceGuidance: [
      'When your hair snaps easily with gentle brushing and standard conditioners fail to make it soft',
      'Following intensive chemical bleaching, coloring, or straightening that has left your hair feeling gummy or rough',
      'When split ends and breakage prevent your hair from ever growing past your shoulders',
      'To undergo physician-grade hair fiber reconstruction and systemic nutrient replenishment',
    ],
    suitableTreatments: [
      {
        name: 'Botox (Hair Botox)',
        slug: 'hair-botox',
        description: 'Deep restorative fiber filler packed with amino acids, peptides, and natural oils to seal cracked cuticles, eliminate frizz, and restore strength.',
      },
      {
        name: 'Scalp Rejuvenation',
        slug: 'scalp-rejuvenation',
        description: 'Nourishing root therapy ensuring newly growing hair emerges strong, dense, and full of healthy keratin.',
      },
      {
        name: 'REVIV IV Hydration',
        slug: 'reviv-iv-hydration',
        description: 'Intravenous infusion of biotin, zinc, B-complex, and amino acids for direct cellular hair nourishment from the inside out.',
      },
    ],
    preventionTips: [
      'Always apply a heat protectant spray before using any hot styling tool or blow dryer',
      'Keep heat styling tools at moderate temperatures (below 180°C / 350°F) and air-dry whenever possible',
      'Sleep on a smooth pure silk or satin pillowcase to prevent overnight friction and tangling',
      'Use a wide-tooth comb starting from the ends and working upward to detangle gently without snapping strands',
    ],
    faqs: [
      {
        question: 'What is Hair Botox and how does it fix brittle hair?',
        answer: 'Hair Botox is an intensive, non-chemical deep restorative treatment (containing no needles or toxin) that acts like a filler for your hair. It packs damaged gaps in the hair cuticle with nourishing peptides, keratin, and hyaluronic acid to restore silky softness and strength.',
      },
      {
        question: 'How is Hair Botox different from a Keratin treatment?',
        answer: 'Unlike keratin treatments that use harsh chemicals (like formaldehyde) and high heat to flatten hair, Hair Botox is 100% nourishing and restorative, repairing damage without breaking chemical bonds or flattening your natural texture.',
      },
      {
        question: 'How long do the results of Hair Botox last?',
        answer: 'Results typically last 2 to 4 months with gentle, sulfate-free home care, leaving your hair noticeably smoother, shinier, and much less prone to breakage.',
      },
    ],
    ctaTitle: 'Repair weak, brittle hair from within.',
    ctaSubtitle: 'Book a restorative Hair Botox and fiber repair consultation at 22 Luna.',
  },
};
