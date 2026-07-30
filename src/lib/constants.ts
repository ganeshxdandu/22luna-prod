/**
 * Global application constants for 22luna.
 * Provides a single source of truth for the design system tokens, configurations, and metadata.
 */

export const SITE_METADATA = {
  title: '22Luna - Luxury Editorial & Calm Digital Space',
  description: 'A premium digital editorial platform curated for holistic health, medical wellness, and spacious design aesthetics.',
  url: 'https://22luna.in',
  ogImage: '/assets/placeholders/og-image.jpg',
  author: '22Luna Editorial Team',
  twitter: '@22Luna',
};

export const CONTAINER_WIDTHS = {
  sm: 'max-w-container-sm',   // 48rem / 768px (prose text)
  md: 'max-w-container-md',   // 64rem / 1024px (standard layout)
  lg: 'max-w-container-lg',   // 80rem / 1280px (rich grids, headers)
  xl: 'max-w-container-xl',   // 96rem / 1536px (wide photography)
  full: 'max-w-container-full' // 100% width
} as const;

export const SECTION_SPACING = {
  tight: 'py-section-tight',
  normal: 'py-section',
  loose: 'py-section-loose',
} as const;

export const TRANSITIONS = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1], // cubic-bezier custom ease-out-quint
  spring: {
    type: 'spring',
    damping: 30,
    stiffness: 150,
  },
} as const;

const rawCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? 'dz5xgcfj';

export const CLOUDINARY_CONFIG = {
  cloudName: rawCloudName.replace(/['"]/g, ''),
  secure: true,
  baseDeliveryUrl: 'https://res.cloudinary.com',
} as const;
