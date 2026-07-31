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

  // Extract publicId and cloudName if a Cloudinary URL is passed
  let cleanPublicId = publicId;
  let cloudName = CLOUDINARY_CONFIG.cloudName;

  if (publicId.includes('res.cloudinary.com/')) {
    const uploadSplit = publicId.split(/\/image\/upload\//);
    if (uploadSplit.length === 2) {
      const domainPart = uploadSplit[0];
      const pathPart = uploadSplit[1];
      
      const domainParts = domainPart.split('/');
      cloudName = domainParts[domainParts.length - 1];
      
      const pathSegments = pathPart.split('/');
      const cleanSegments = pathSegments.filter((segment, index) => {
        if (index === pathSegments.length - 1) return true;
        if (/^v\d+$/.test(segment)) return false;
        if (/^[a-z]{1,3}_[a-zA-Z0-9:]+$/.test(segment)) return false;
        if (segment.includes(',') && segment.split(',').every(s => /^[a-z]{1,3}_[a-zA-Z0-9:]+$/.test(s))) {
          return false;
        }
        return true;
      });
      cleanPublicId = cleanSegments.join('/');
    }
  } else {
    // Fallback for relative public IDs that might contain the default domain split
    const cloudinaryDomain = `res.cloudinary.com/${cloudName}/image/upload/`;
    if (publicId.includes(cloudinaryDomain)) {
      const parts = publicId.split(cloudinaryDomain);
      const afterUpload = parts[1];
      const afterUploadParts = afterUpload.split('/');
      if (afterUploadParts[0].includes('_') || afterUploadParts[0] === 'v1' || /^\d+$/.test(afterUploadParts[0]) || /^v\d+$/.test(afterUploadParts[0])) {
        cleanPublicId = afterUploadParts.slice(1).join('/');
      } else {
        cleanPublicId = afterUpload;
      }
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
