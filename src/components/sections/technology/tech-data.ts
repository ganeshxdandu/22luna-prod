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
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/02_ambk1m.png',
    title: 'Fotona SP Dynamis',
    subtitle: 'Dual-Wavelength Laser',
    description: 'Premium laser system offering non-invasive face lifting, tight-sculpting, and advanced skin resurfacing with dual-wavelength precision.',
    category: 'Aesthetic Laser Systems',
    alt: 'Fotona SP Dynamis Dual-Wavelength Laser at 22Luna',
    origin: 'Slovenia',
    fdaApproved: true,
    year: '2024',
    spec: 'Dual-Wavelength Er:YAG & Nd:YAG'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785122942/03_rsn5jj.png',
    title: 'Soprano Titanium',
    subtitle: 'Advanced Hair Removal',
    description: 'State-of-the-art virtually painless laser hair removal featuring trio-clustered diode technology and cooling systems.',
    category: 'Laser Hair Removal',
    alt: 'Soprano Titanium Laser Hair Removal system at 22Luna',
    origin: 'Israel',
    fdaApproved: true,
    year: '2023',
    spec: 'Trio-Clustered Diode Technology'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/02_ambk1m.png',
    title: 'Ultraformer III (HIFU)',
    subtitle: 'High-Intensity Focused Ultrasound',
    description: 'Non-surgical face lifting, skin tightening, and body contouring using micro and macro-focused ultrasound waves.',
    category: 'Skin Tightening & Lifting',
    alt: 'Ultraformer III HIFU lifting device at 22Luna',
    origin: 'South Korea',
    fdaApproved: true,
    year: '2023',
    spec: 'High-Intensity Focused Ultrasound'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785109998/04_fyr6z0.png',
    title: 'Choukroun PRF Duo',
    subtitle: 'Platelet-Rich Fibrin System',
    description: 'Inventor-grade centrifuge system for biological tissue regeneration and accelerated natural healing using autologous blood concentrates.',
    category: 'Regenerative Medicine',
    alt: 'Choukroun PRF Duo centrifuge system at 22Luna',
    origin: 'France',
    fdaApproved: true,
    year: '2022',
    spec: 'Autologous Centrifugal Fibrin'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/01_ipr4rw.png',
    title: 'Carestream CS 8100 3D',
    subtitle: 'Panoramic & CBCT Dental Imaging',
    description: 'High-definition 3D extraoral imaging, OPG, and CBCT scans for precise orthodontic and implant planning with ultra-low radiation.',
    category: 'Advanced Dental Diagnostics',
    alt: 'Carestream Dental Panoramic X-Ray at 22Luna',
    origin: 'France',
    fdaApproved: true,
    year: '2024',
    spec: 'OPG & CBCT Extraoral Imaging'
  },
  {
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785110013/02_ambk1m.png',
    title: 'Alma Harmony XL Pro',
    subtitle: 'Multi-Application Laser Platform',
    description: 'Versatile multi-technology platform for skin remodeling, tone rejuvenation, and vascular lesion clearing with clinical efficacy.',
    category: 'Laser & Light Therapy',
    alt: 'Alma Harmony XL Pro Laser Platform at 22Luna',
    origin: 'Israel',
    fdaApproved: true,
    year: '2023',
    spec: 'Multi-Application Aesthetic Platform'
  }
];
