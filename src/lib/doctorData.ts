/**
 * Doctor / Collective Data Source
 * Single source of truth for all doctor profiles across 22Luna.
 */

export interface DoctorProfile {
  id: string;
  name: string;
  specialty: string;
  image?: string;
  biography?: string[];
  areasOfExpertise?: string[];
  educationAndCredentials?: string[];
  experience?: string;
}

export const DOCTOR_PROFILES: DoctorProfile[] = [
  {
    id: "dr-niharika-mandhyan",
    name: "Dr. Niharika Mandhyan",
    specialty: "FOUNDER & PROSTHODONTIST",
    image: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1787484561/DrNiharika_u3bmmm.png",
    biography: [
      "Dr. Niharika Mandhyan is the Founder and Medical Director of 22Luna Skin, Hair & Dental Sanctuary in Bengaluru. As a specialist Prosthodontist and Aesthetic practitioner, she established 22Luna with a vision to redefine aesthetic and reconstructive care through unhurried consultations, evidence-based science, and holistic facial harmony.",
      "With extensive clinical expertise spanning advanced prosthodontics, cosmetic dentistry, full-mouth rehabilitation, and cutting-edge non-invasive skin rejuvenation, Dr. Niharika emphasizes a natural, preservative approach. She believes that true aesthetics begins by listening deeply to each patient's lifestyle and concerns, curating bespoke treatment pathways that restore confidence without looking altered.",
      "She actively collaborates with international leaders in aesthetic technology and regenerative medicine, bringing gold-standard global innovations—such as micro-invasive laser protocols and advanced regenerative systems—directly to 22Luna’s private treatment suites.",
    ],
    areasOfExpertise: [
      "Prosthodontics & Full Mouth Rehabilitation",
      "Cosmetic & Aesthetic Dentistry",
      "Dental Implants & Reconstructive Care",
      "Invisalign & Digital Smile Design",
      "Advanced Medical Facial Aesthetics",
      "Holistic Facial Harmony Assessment",
      "Regenerative Skin & Tissue Protocols",
    ],
    educationAndCredentials: [
      "MDS – Prosthodontics and Crown & Bridge, V.S. Dental College, Bangalore",
      "BDS, V.S. Dental College, Bangalore",
      "Certified Invisalign Provider",
      "Fellowship & Advanced Training in Clinical Aesthetic Medicine",
    ],
    experience: "10+ Years of Clinical & Aesthetic Excellence",
  },
  {
    id: "dr-devanjali",
    name: "Dr. Devanjali",
    specialty: "ORTHODONTIST",
    image: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785294011/devanjali_lzfmlh.png",
    biography: [
      "Dr. Devanjali is an enthusiastic and highly skilled orthodontist, dedicated to improving smiles and transforming lives. With a passion for enhancing facial aesthetics, she firmly believes that a beautiful smile is not only a sign of confidence but also an essential aspect of overall well-being. Having completed her advanced studies, MDS orthodontics, and a fellowship in Esthetic dentistry, she has gained a deep understanding of the intricate science behind teeth alignment and facial harmony.",
      "Dr. Devanjali takes immense pride in her work, finding joy in every smile she helps to perfect. Her expertise spans a wide range of orthodontic treatments, including traditional braces, clear aligners like Invisalign, and other advanced techniques aimed at providing the most comfortable and effective solutions for her patients. For Dr. Devanjali, each patient is an opportunity to create something special — a smile that not only improves dental health but also boosts self-esteem.",
      "She is constantly upgrading her knowledge and skills by attending specialized orthodontic workshops and conferences, ensuring that her practice stays at the cutting edge of the latest developments in the field. Dr. Devanjali’s dedication to her craft is matched only by her genuine care for her patients, as she strives to make each treatment experience as pleasant as possible.",
      "Through her work, Dr. Devanjali doesn’t just change smiles; she changes lives, helping individuals gain the confidence to smile freely.",
    ],
    areasOfExpertise: [
      "Traditional braces",
      "Clear aligners",
      "Invisalign",
      "Advanced orthodontic techniques",
      "Esthetic dentistry",
      "Teeth alignment",
      "Facial harmony",
    ],
    educationAndCredentials: [
      "MDS Orthodontics",
      "Fellowship in Esthetic Dentistry",
    ],
  },
  {
    id: "dr-romir-navaneetham",
    name: "Dr. Romir Navaneetham",
    specialty: "MAXILLOFACIAL SURGEON",
    image: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785293977/romir_hx6qtx.png",
    biography: [
      "Dr Romir Navaneetham finished at the top of his class and college in Maxillofacial Surgery in his undergraduate and postgraduate.",
      "He is an experienced implantologist with a fellowship from the international congress of implantology from the USA. He has fellowships in advanced trauma management and temporomandibular disorders.",
    ],
    areasOfExpertise: [
      "Minor oral surgical procedures including complex extractions and impactions",
      "Maxillofacial Trauma",
      "Oral and maxillofacial cysts and benign tumors",
      "TMJ pathologies and pain",
      "Diagnosis of various maxillofacial defects and management with distraction osteogenesis",
      "Orthognathic surgery and aesthetic facial surgical procedures",
      "Initial management and stabilization of head injury and maxillofacial injury patients in emergency scenarios",
    ],
    educationAndCredentials: [
      "Top of class and college in Maxillofacial Surgery (Undergraduate & Postgraduate)",
      "Fellowship from the International Congress of Implantology (USA)",
      "Fellowship in Advanced Trauma Management",
      "Fellowship in Temporomandibular Disorders",
    ],
  },
  {
    id: "dr-fathima-ibrahim",
    name: "Dr. Fathima Ibrahim",
    specialty: "ENDODONTIST",
    image: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785507252/fathima_wmnpgx.png",
    biography: [
      "I specialize in Endodontics and Restorative Dentistry. I have been practicing since 2021, with a primary focus on endodontic and restorative care, along with a keen interest in aesthetic dentistry.",
      "My areas of expertise include root canal treatments, endodontic retreatments, restorative procedures, and the management of complex endodontic cases. I also particularly enjoy aesthetic procedures such as diastema closure, teeth whitening, anterior composite restorations, and minimally invasive aesthetic corrections. I believe in providing precise, evidence-based, and conservative treatment with a strong emphasis on preserving natural tooth structure and achieving functional and aesthetically pleasing outcomes.",
    ],
    areasOfExpertise: [
      "Root canal treatments",
      "Endodontic retreatments",
      "Restorative procedures",
      "Complex endodontic cases",
      "Diastema closure",
      "Teeth whitening",
      "Anterior composite restorations",
      "Minimally invasive aesthetic corrections",
      "Restorative dentistry",
      "Aesthetic dentistry",
    ],
    experience: "Practicing since 2021.",
  },
  {
    id: "dr-arinban",
    name: "Dr. Arinban",
    specialty: "PERIODONTIST",
    image: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785294034/anirban_snoaqm.png",
  },
];
