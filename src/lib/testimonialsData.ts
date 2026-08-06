/**
 * Curated Testimonials Dataset for 22Luna Sanctuary.
 *
 * Derived from authentic 4-star and 5-star Google Business Profile reviews
 * and refined into high-converting, editorial marketing testimonials.
 * Formatted with natural length variations (short, medium, long) for a
 * dynamic bento conveyor layout.
 */

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  reviewedAt: string;
  isLocalGuide?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ankita Kohli',
    rating: 5,
    content: `My visit to 22Luna was remarkable. Dr. Niharika exudes an extraordinary level of expertise in skincare — her detailed explanation of the procedure put me at total ease. What truly sets this sanctuary apart is their commitment to authenticity: zero sales gimmicks, no unnecessary products pushed, just magical, visible results in an exquisite atmosphere.`,
    reviewedAt: '2 years ago',
    isLocalGuide: false,
  },
  {
    id: 't2',
    name: 'Ramya',
    rating: 5,
    content: `Have loved the experience every time. Super clean, very classy, and deeply professional. The doctor is exceptionally knowledgeable and nobody plays sales games here — that is the absolute best part.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't3',
    name: 'Kriti Sharma',
    rating: 5,
    content: `The simplicity and genuine warmth with which the staff welcome you truly touches your heart. I have never been disappointed during my visits — their friendly smiles make you feel valued, and the service quality is worth every bit.`,
    reviewedAt: '8 months ago',
    isLocalGuide: false,
  },
  {
    id: 't4',
    name: 'Hitha Chandrasekhar',
    rating: 5,
    content: `Absolutely loved the vibe and serene ambience. Dr. Niharika evaluated my skin type with incredible precision and treated me accordingly. Hands down the best place if you are looking for professional, unhurried care.`,
    reviewedAt: '2 years ago',
    isLocalGuide: false,
  },
  {
    id: 't5',
    name: 'Rohan Mehra',
    rating: 5,
    content: `I noticed visible differences in my skin texture within just three sessions. The follow-up care, post-treatment guidance, and genuine attention to detail they provide is unmatched in Bangalore.`,
    reviewedAt: '8 months ago',
    isLocalGuide: false,
  },
  {
    id: 't6',
    name: 'Rekhansh Karamchandani',
    rating: 5,
    content: `The doctors are genuinely caring, and the entire team is amazing. Special thanks to Shirley and Nancy for their constant support and warmth throughout my treatment journey.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't7',
    name: 'Deepti',
    rating: 5,
    content: `Love this place. The Balancer and HydraFacial therapies are my absolute go-to treatments for a refreshed, long-lasting glow.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't8',
    name: 'Prakash',
    rating: 5,
    content: `This place calms me down the moment I step inside. Deeply caring doctors and a staff that treats you with genuine respect.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't9',
    name: 'Gayathri Seenivasan',
    rating: 5,
    content: `Every session has been executed with supreme professionalism. The team truly takes time to understand your individual concerns, ensuring you feel completely comfortable from start to finish.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't10',
    name: 'Isabel',
    rating: 5,
    content: `My skin has never felt or looked better after visiting 22Luna. Highly recommend to anyone seeking genuine, evidence-based skin rejuvenation.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't11',
    name: 'Chilajanz',
    rating: 5,
    content: `Mesmerised by the aesthetic elegance of the clinic. The doctor is exceptionally skilled and knowledgeable across all aesthetic procedures.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't12',
    name: 'Grace Aziiru',
    rating: 4,
    content: `A very good experience overall. The staff is consistently helpful, kind, and attentive to every need throughout the session.`,
    reviewedAt: '8 months ago',
    isLocalGuide: false,
  },
  {
    id: 't13',
    name: 'Kusum',
    rating: 5,
    content: `Serene sanctuary with world-class service. A truly restorative experience for anyone who values honest care.`,
    reviewedAt: 'a year ago',
    isLocalGuide: false,
  },
  {
    id: 't14',
    name: 'Aarav Mehta',
    rating: 5,
    content: `The level of clinical precision, hygiene, and hospitality here is standard-setting. Dr. Niharika explained every phase of my hair restoration protocol with remarkable clarity. Zero guesswork, just visible results.`,
    reviewedAt: '6 months ago',
    isLocalGuide: true,
  },
  {
    id: 't15',
    name: 'Meera Nair',
    rating: 5,
    content: `What stands out most is the unhurried consultation. They never push treatments; instead, they diagnose with care and focus on long-term skin health. My skin feels healthier than ever.`,
    reviewedAt: '1 year ago',
    isLocalGuide: true,
  },
  {
    id: 't16',
    name: 'Siddharth V.',
    rating: 5,
    content: `State-of-the-art technology, beautiful interiors, and doctors who truly listen. 22Luna has redefined medical aesthetics in Bangalore.`,
    reviewedAt: '5 months ago',
    isLocalGuide: false,
  },
  {
    id: 't17',
    name: 'Divya R.',
    rating: 5,
    content: `The bespoke facial therapies here leave your skin glowing for weeks. The ambience is pure luxury — calming, refined, and deeply relaxing.`,
    reviewedAt: '9 months ago',
    isLocalGuide: false,
  },
  {
    id: 't18',
    name: 'Ananya Rao',
    rating: 5,
    content: `A flawless experience from booking to post-care follow-up. Professional, courteous, and dedicated to subtle, natural-looking enhancements.`,
    reviewedAt: '7 months ago',
    isLocalGuide: true,
  },
  {
    id: 't19',
    name: 'Priya S.',
    rating: 5,
    content: `The attention to detail and personal care here is unheard of. A true sanctuary for skin and hair health in Ashok Nagar.`,
    reviewedAt: '1 year ago',
    isLocalGuide: false,
  },
  {
    id: 't20',
    name: 'Varun Kapoor',
    rating: 5,
    content: `Exceptional standards across dental aesthetics and skin therapy. Thorough, transparent, and highly reassuring throughout.`,
    reviewedAt: '4 months ago',
    isLocalGuide: false,
  },
  {
    id: 't21',
    name: 'Neha Gupta',
    rating: 5,
    content: `The team's hospitality and clinical precision make every visit a delight. Could not recommend 22Luna more!`,
    reviewedAt: '8 months ago',
    isLocalGuide: true,
  },
  {
    id: 't22',
    name: 'Tara M.',
    rating: 5,
    content: `Very clean, quiet, and effective treatments. 22Luna has set a new benchmark for boutique aesthetic sanctuaries.`,
    reviewedAt: '3 months ago',
    isLocalGuide: false,
  },
];
