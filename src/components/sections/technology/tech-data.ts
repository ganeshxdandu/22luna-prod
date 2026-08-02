export interface TechCardData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  alt: string;
  origin?: string;
  fdaApproved?: boolean;
  year?: string;
  spec?: string;
}

export const ENHANCED_TECH_CARDS: TechCardData[] = [
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/02_ambk1m.png',
    title: 'Lumenis Stellar M22',
    subtitle: 'Multi-Platform Laser',
    description: 'Gold-standard platform treating over 30 skin concerns, from vascular lesions and pigmentation to advanced photo-rejuvenation.',
    category: 'Laser & Light Therapy',
    alt: 'Lumenis Stellar M22 Multi Platform Laser at 22Luna',
    origin: 'Israel',
    fdaApproved: true,
    year: '2023',
    spec: 'Multi-Platform IPL & Laser'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785122942/03_rsn5jj.png',
    title: 'Hydrafacial Syndeo',
    subtitle: 'Next-Gen Skin Health',
    description: 'Cloud-connected, smart delivery system for personalized, non-invasive skin rejuvenation, deep pore cleansing, and targeted serum infusion.',
    category: 'Skin Health & Glow',
    alt: 'Hydrafacial Syndeo Next-generation Facial cart at 22Luna',
    origin: 'USA',
    fdaApproved: true,
    year: '2024',
    spec: 'Vortex-Fusion Skin System'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/01_ipr4rw.png',
    title: 'iTero Element 5D',
    subtitle: 'Intraoral Scanner',
    description: 'Advanced dental scanning technology providing 3D visualizations, near-infrared imaging (NIRI), and cosmetic simulations in real time.',
    category: 'Cosmetic Dentistry',
    alt: 'iTero Digital Dental Scanner display at 22Luna',
    origin: 'USA',
    fdaApproved: true,
    year: '2023',
    spec: 'Near-Infrared Intraoral Scanner'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785109998/04_fyr6z0.png',
    title: 'Dermapen 4',
    subtitle: 'Precision Microneedling',
    description: 'Precision automated microneedling to stimulate natural collagen, targeting fine lines, scarring, and skin texture with minimal downtime.',
    category: 'Skin Needling & Collagen',
    alt: 'Derma Pen 4 Microneedling hand-held device at 22Luna',
    origin: 'Australia',
    fdaApproved: true,
    year: '2024',
    spec: 'Automated Fractional Microneedling'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785637420/05_pwrfa3.png',
    title: 'Choukroun PRF Duo Quattro',
    subtitle: 'Platelet-Rich Fibrin System',
    description: 'The gold standard in autologous tissue regeneration, centrifuging PRF concentrates to accelerate cellular healing and advanced skin recovery.',
    category: 'Regenerative Medicine',
    alt: 'Choukroun PRF Duo Quattro centrifuge system at 22Luna',
    origin: 'France',
    fdaApproved: true,
    year: '2024',
    spec: 'Platelet-Rich Fibrin Centrifuge'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785637737/06_nxopzx.png',
    title: 'Vatech Pax-i3D Smart',
    subtitle: 'Panoramic & CBCT Dental Imaging',
    description: 'Ultra-low dose digital panoramic imaging and CBCT scans providing rapid, high-definition 3D diagnostics for precise treatment planning.',
    category: 'Advanced Dental Diagnostics',
    alt: 'Vatech Pax-i3D Smart Panoramic CBCT Scanner at 22Luna',
    origin: 'South Korea',
    fdaApproved: true,
    year: '2024',
    spec: 'CBCT & Panoramic Digital OPG'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785638689/08_ozaudy.png',
    title: 'Lumenis LightSheer Desire',
    subtitle: 'High-Speed Diode Laser',
    description: 'Advanced high-speed diode laser hair removal system featuring ChillTip contact cooling for maximum patient comfort and clinical efficacy.',
    category: 'Laser Hair Removal',
    alt: 'Lumenis LightSheer Desire Diode Laser Hair Removal System at 22Luna',
    origin: 'USA',
    fdaApproved: true,
    year: '2023',
    spec: 'High-Speed Diode Laser'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785638928/07_cgpbup.png',
    title: 'InMode Morpheus8',
    subtitle: 'Fractional RF Microneedling',
    description: 'Subdermal adipose remodeling device utilizing fractional radiofrequency microneedling to tighten skin, contour tissue, and stimulate deep collagen.',
    category: 'RF Microneedling & Contour',
    alt: 'InMode Morpheus8 Fractional RF Microneedling System at 22Luna',
    origin: 'Israel',
    fdaApproved: true,
    year: '2023',
    spec: 'Fractional RF Microneedling'
  }
];
