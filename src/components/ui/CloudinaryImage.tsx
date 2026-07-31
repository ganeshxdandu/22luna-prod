'use client';

import * as React from 'react';
import Image, { ImageProps, ImageLoaderProps } from 'next/image';
import { cn } from '@/lib/utils';
import {
  buildCloudinaryUrl,
  getCloudinaryBlurPlaceholder,
  isFullUrl,
  CloudinaryTransformOptions,
} from '@/lib/cloudinary';

export interface CloudinaryImageProps extends Omit<ImageProps, 'src' | 'placeholder' | 'blurDataURL' | 'quality'> {
  src: string; // Cloudinary public ID, local path, or external URL
  aspectRatio?: string; // e.g. "16:9", "1:1", "4:3", "3:4"
  crop?: CloudinaryTransformOptions['crop'];
  quality?: CloudinaryTransformOptions['quality'];
  gravity?: CloudinaryTransformOptions['gravity'];
  blurPlaceholder?: boolean; // If true, generates low-res blurred background
  rawTransformations?: string[];
}

/**
 * Premium Image component integrated with Next.js Image optimization and Cloudinary URL builder.
 * Safely handles Cloudinary public IDs, local static files, and standard external URLs.
 */
export function CloudinaryImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  quality = 'auto',
  crop = 'fill',
  gravity = 'auto',
  aspectRatio,
  blurPlaceholder = true,
  rawTransformations = [],
  className,
  ...props
}: CloudinaryImageProps) {
  const isCloudinary = React.useMemo(() => {
    if (!src) return false;
    if (src.startsWith('/')) return false;
    if (isFullUrl(src)) {
      return src.includes('res.cloudinary.com');
    }
    return true;
  }, [src]);

  // Next.js custom loader for Cloudinary images (automatically handles responsive srcSets)
  const loader = React.useCallback(
    ({ src: loaderSrc, width: loaderWidth, quality: loaderQuality }: ImageLoaderProps) => {
      return buildCloudinaryUrl(loaderSrc, {
        width: loaderWidth,
        quality: loaderQuality || quality,
        crop,
        gravity,
        aspectRatio,
        rawTransformations,
      });
    },
    [quality, crop, gravity, aspectRatio, rawTransformations]
  );

  // If using Cloudinary, generate a blur placeholder URL
  const blurUrl = React.useMemo(() => {
    if (isCloudinary && blurPlaceholder) {
      return getCloudinaryBlurPlaceholder(src);
    }
    return undefined;
  }, [src, isCloudinary, blurPlaceholder]);

  if (!src) return null;

  // Standard static image props
  const imageProps: Partial<ImageProps> = {
    alt,
    className: cn('object-cover w-full h-full transition-all duration-500', className),
    priority,
    ...props,
  };

  // Set sizing strategy
  if (fill) {
    imageProps.fill = true;
    imageProps.sizes = sizes;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  // Handle placeholders
  if (blurUrl) {
    imageProps.placeholder = 'blur';
    imageProps.blurDataURL = blurUrl;
  }

  // Render Image
  if (isCloudinary) {
    return (
      <Image
        loader={loader}
        src={src}
        alt={alt || ''}
        {...(imageProps as Omit<ImageProps, 'src' | 'alt'>)}
      />
    );
  }

  // Fallback for static assets or external URLs
  return (
    <Image
      src={src}
      alt={alt || ''}
      {...(imageProps as Omit<ImageProps, 'src' | 'alt'>)}
    />
  );
}
