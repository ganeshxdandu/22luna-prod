import { MetadataRoute } from 'next';
import { SKIN_GROUPS, HAIR_TREATMENTS, DENTAL_TREATMENTS } from '@/lib/treatments-catalogue';
import { SKIN_CONCERNS, HAIR_CONCERNS, DENTAL_CONCERNS, SPECIAL_CONCERNS } from '@/lib/concerns-catalogue';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://22luna.in';

  // 1. Static Routes
  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/consultation',
    '/treatments',
    '/concerns',
    '/medical-tourism',
    '/shop',
    '/find-your-starting-point',
    '/privacy-policy',
    '/terms-of-use',
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Treatment Routes
  const treatmentSlugs: string[] = [];

  // Skin
  SKIN_GROUPS.forEach((group) => {
    group.treatments.forEach((t) => {
      treatmentSlugs.push(t.slug);
    });
  });

  // Hair
  HAIR_TREATMENTS.forEach((t) => {
    treatmentSlugs.push(t.slug);
  });

  // Dental
  DENTAL_TREATMENTS.forEach((t) => {
    treatmentSlugs.push(t.slug);
  });

  const treatmentEntries = treatmentSlugs.map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // 3. Dynamic Concern Routes
  const concernSlugs: string[] = [
    ...SKIN_CONCERNS.map((c) => c.slug),
    ...HAIR_CONCERNS.map((c) => c.slug),
    ...DENTAL_CONCERNS.map((c) => c.slug),
    ...SPECIAL_CONCERNS.map((c) => c.slug),
  ];

  const concernEntries = concernSlugs.map((slug) => ({
    url: `${baseUrl}/concerns/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...treatmentEntries, ...concernEntries];
}
