import { CLOUDINARY_CONFIG } from './constants';

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'limit' | 'scale' | 'thumb' | 'crop' | 'pad';
  quality?: 'auto' | 'best' | 'good' | 'eco' | 'low' | number;
  format?: 'auto' | 'jpg' | 'png' | 'webp' | 'avif';
  blur?: number;
  aspectRatio?: string;
  gravity?: 'auto' | 'face' | 'center' | 'north' | 'south' | 'east' | 'west';
  rawTransformations?: string[];
}

/**
 * Checks if a string is a full URL (http/https).
 */
export function isFullUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

/**
 * Builds a highly optimized Cloudinary image URL.
 *
 * If the input source is a full URL (not a Cloudinary public ID),
 * it returns the URL as is unless it's configured for Cloudinary fetch.
 *
 * @param publicId The Cloudinary asset public ID (e.g. "treatments/skin-therapy") or full URL.
 * @param options Transformations to apply (dimensions, quality, format, crop, etc.).
 * @returns The fully constructed, optimized image URL.
 */
export function buildCloudinaryUrl(
  publicId: string,
  options: CloudinaryTransformOptions = {}
): string {
  if (!publicId) return '';

  // If the source is already a full URL (and not starting with res.cloudinary.com), return it
  if (isFullUrl(publicId) && !publicId.includes('res.cloudinary.com')) {
    return publicId;
  }

  // Extract publicId if a full Cloudinary URL was accidentally passed
  let cleanPublicId = publicId;
  const cloudName = CLOUDINARY_CONFIG.cloudName;
  const cloudinaryDomain = `res.cloudinary.com/${cloudName}/image/upload/`;

  if (publicId.includes(cloudinaryDomain)) {
    const parts = publicId.split(cloudinaryDomain);
    // The second part might contain transformations, we want just the publicId
    const afterUpload = parts[1];
    const afterUploadParts = afterUpload.split('/');
    // Check if the first part has transformations (like w_100, f_auto, etc.)
    if (afterUploadParts[0].includes('_') || afterUploadParts[0] === 'v1' || /^\d+$/.test(afterUploadParts[0])) {
      // It has transformations or a version prefix, slice them out
      cleanPublicId = afterUploadParts.slice(1).join('/');
    } else {
      cleanPublicId = afterUpload;
    }
  }

  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    blur,
    aspectRatio,
    gravity = 'auto',
    rawTransformations = [],
  } = options;

  const transforms: string[] = [];

  // 1. Quality and Format (Always default to optimized, except for SVGs)
  const isSvg = cleanPublicId.toLowerCase().endsWith('.svg');
  if (!isSvg) {
    transforms.push(`f_${format}`);
    transforms.push(`q_${quality}`);
  }

  // 2. Dimensions and Crop
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height) {
    transforms.push(`c_${crop}`);
    if (crop === 'fill' || crop === 'thumb' || crop === 'crop') {
      transforms.push(`g_${gravity}`);
    }
  }

  // 3. Aspect Ratio
  if (aspectRatio) {
    transforms.push(`ar_${aspectRatio}`);
  }

  // 4. Effects (Blur)
  if (blur !== undefined) {
    transforms.push(`e_blur:${blur}`);
  }

  // 5. Appends any raw transformation strings
  if (rawTransformations.length > 0) {
    transforms.push(...rawTransformations);
  }

  const transformString = transforms.join(',');
  const deliveryUrl = `${CLOUDINARY_CONFIG.baseDeliveryUrl}/${cloudName}/image/upload`;

  return `${deliveryUrl}/${transformString}/${cleanPublicId}`.replace(/([^:]\/)\/+/g, '$1');
}

/**
 * Generates an ultra-low-resolution blurred thumbnail image URL
 * to be used as a placeholder during lazy loading (`blurDataURL`).
 *
 * @param publicId The Cloudinary asset public ID.
 * @returns An optimized low-res blurred image URL.
 */
export function getCloudinaryBlurPlaceholder(publicId: string): string {
  return buildCloudinaryUrl(publicId, {
    width: 30,
    quality: 'eco',
    blur: 1000,
  });
}
