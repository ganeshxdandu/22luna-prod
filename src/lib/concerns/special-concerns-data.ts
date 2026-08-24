import type { ConcernDetailData } from '../concern-detail-data';

export const SPECIAL_CONCERNS_DATA: Record<string, ConcernDetailData> = {
  // 37. PCOS (POLYCYSTIC OVARY SYNDROME)
  'pcos': {
    slug: 'pcos',
    name: 'PCOS',
    tagline: 'Comprehensive medical care for hormonal jawline acne, hair thinning, unwanted facial hair, and dark neck patches.',
    category: 'Special Concerns',
    understandingHeading: 'Understanding Hormonal Imbalance, Skin & Hair in PCOS.',
    understandingParagraphs: [
      'Polycystic Ovary Syndrome (PCOS) is a common hormonal and metabolic condition affecting women of reproductive age. It is characterized by higher levels of androgen hormones (like testosterone), insulin resistance, and irregular periods. Outwardly, PCOS affects both skin and hair: triggering persistent cystic acne along the jawline and chin, diffuse thinning of scalp hair, unwanted coarse facial hair (hirsutism), and velvety skin darkening around the neck and body folds.',
      'Because PCOS is an internal multi-system condition, surface cosmetic creams alone usually provide only temporary relief. At 22 Luna, we take an integrated, doctor-led approach: combining medical acne management, physician-grade chemical peels, medical laser hair reduction, natural PRP hair follicle stimulation, and revitalizing IV wellness infusions to manage symptoms from the root upward.',
    ],
    howCommon: 'Affects roughly 1 in 5 women of reproductive age, making it the most common hormonal reason for adult skin and hair concerns.',
    signsNoticed: [
      'Deep, painful cystic pimples and tender bumps concentrated along your jawline, chin, and upper neck',
      'Breakouts that flare up predictably before your menstrual period or during irregular cycles',
      'Diffuse hair thinning and widening of your central hair parting line on the scalp',
      'Coarse, dark, unwanted hair growth on your chin, upper lip, sideburns, neck, chest, or abdomen',
      'Velvety brownish-black skin darkening (acanthosis nigricans) around your neck, underarms, or skin folds',
    ],
    causes: [
      {
        factor: 'Elevated Androgen Hormones',
        explanation: 'Higher natural androgen levels stimulate oil glands to cause cystic acne, while shrinking scalp hair roots and triggering facial hair growth.',
      },
      {
        factor: 'Insulin Resistance',
        explanation: 'When body cells do not respond efficiently to insulin, the body produces more insulin, signaling the ovaries to produce extra testosterone.',
      },
      {
        factor: 'Chronic Low-Grade Inflammation',
        explanation: 'Underlying inflammation makes skin pores more prone to clogging and makes acne blemishes more painful and red.',
      },
      {
        factor: 'Follicle Hormone Sensitivity',
        explanation: 'Scalp hair roots sensitive to androgen hormones begin shrinking, causing fine, thinning hair over time.',
      },
    ],
    adviceGuidance: [
      'When deep jawline acne or sudden hair thinning coincides with irregular or delayed periods',
      'When over-the-counter acne washes, hair growth oils, and salon facials keep failing',
      'When unwanted chin or facial hair causes constant skin bumps and redness from waxing, threading, or plucking',
      'To build an integrated medical care plan that coordinates skin clarity, hair restoration, and metabolic wellness',
    ],
    suitableTreatments: [
      {
        name: 'Medi Facials',
        slug: 'medi-facials',
        description: 'Doctor-led clinical facials with gentle pore extractions, calming serums, and cooling cryotherapy to soothe hormonal inflammation.',
      },
      {
        name: 'PRP (Platelet-Rich Plasma)',
        slug: 'prp-hair',
        description: 'Autologous natural growth factor therapy to awaken hair follicles weakened by hormones and halt diffuse female pattern thinning.',
      },
      {
        name: 'Laser Hair Reduction',
        slug: 'laser-hair-reduction',
        description: 'Medical-grade laser treatments to permanently reduce stubborn, coarse hormonal facial and body hair growth.',
      },
      {
        name: 'Chemical Peels',
        slug: 'chemical-peels',
        description: 'Targeted mandelic and salicylic peels to clear cystic congestion and fade dark post-acne marks.',
      },
      {
        name: 'REVIV IV Hydration',
        slug: 'reviv-iv-hydration',
        description: 'Intravenous electrolyte, antioxidant (glutathione), and vitamin infusions to support metabolic detox and energy.',
      },
    ],
    preventionTips: [
      'Eat a balanced, low-glycemic diet with whole grains, protein, and vegetables to keep blood sugar and insulin stable',
      'Incorporate regular moderate exercise (strength training, walking) to improve your body’s natural insulin sensitivity',
      'Never squeeze or pick at deep hormonal jawline cysts—use gentle salicylic or azelaic acid topicals instead',
      'Avoid constant aggressive threading or plucking on chin hair, which causes ingrown hair bumps and dark scars',
    ],
    faqs: [
      {
        question: 'Can PCOS-related acne and hair thinning be reversed?',
        answer: 'Yes! By combining clinical dermatological treatments (medical peels, medi-facials, PRP) with balanced lifestyle habits and hormonal support, PCOS-related skin congestion and hair loss can be brought under complete, healthy control.',
      },
      {
        question: 'Does laser hair removal work effectively for PCOS facial hair?',
        answer: 'Yes! Medical laser hair reduction is exceptionally effective for hormonal facial hair. While PCOS patients may need a few extra maintenance sessions due to underlying hormones, treatments permanently reduce hair thickness, coarseness, and density.',
      },
      {
        question: 'Why does PCOS acne always show up on the jawline and chin?',
        answer: 'The oil glands located in the lower third of the face (the "U-zone": jawline, chin, and lower cheeks) have the highest concentration of androgen hormone receptors, making them acutely sensitive to hormonal shifts.',
      },
    ],
    ctaTitle: 'Take control of PCOS symptoms with medical care.',
    ctaSubtitle: 'Schedule your comprehensive cross-disciplinary PCOS consultation at 22 Luna.',
  },
};
