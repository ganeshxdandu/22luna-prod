import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names safely utilizing clsx and tailwind-merge.
 * Prevents Tailwind CSS class conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  // Use clsx to resolve inputs then tailwind-merge to clean up conflicts
  return twMerge(clsx(inputs));
}

/**
 * Reusable utility to generate a page-level scroll offset for smooth anchors
 */
export const getScrollOffset = (headerHeight = 80): number => {
  return -headerHeight;
};

/**
 * Formats dates consistently across the editorial site
 */
export function formatDate(date: string | Date, locale = 'en-US'): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(locale, options);
}

/**
 * Creates custom responsive spacing strings for margins or paddings
 */
export function getResponsiveSpacing(
  scale: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  property: 'margin' | 'padding' = 'padding',
  axis: 'x' | 'y' | 'all' = 'all'
): string {
  const isPadding = property === 'padding';
  const prefix = isPadding ? 'p' : 'm';
  const axisSuffix = axis === 'all' ? '' : axis;

  const scales = {
    xs: { mobile: '2', md: '4' },
    sm: { mobile: '4', md: '8' },
    md: { mobile: '8', md: '16' },
    lg: { mobile: '12', md: '24' },
    xl: { mobile: '16', md: '32' },
  };

  const selected = scales[scale];
  return cn(
    `${prefix}${axisSuffix}-${selected.mobile}`,
    `md:${prefix}${axisSuffix}-${selected.md}`
  );
}
