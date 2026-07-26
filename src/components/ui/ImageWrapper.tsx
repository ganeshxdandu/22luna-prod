'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CloudinaryImage, CloudinaryImageProps } from './CloudinaryImage';
import { AnimatedWrapper } from './AnimatedWrapper';

export interface ImageWrapperProps extends Omit<CloudinaryImageProps, 'className'> {
  caption?: string;
  zoomOnHover?: boolean;
  wrapperClassName?: string;
  imageClassName?: string;
  animateEntrance?: boolean;
  delay?: number;
}

/**
 * Editorial wrapper for images.
 * Manages aspect ratios, hover zoom effects, captions, and entry animations.
 */
export function ImageWrapper({
  src,
  alt,
  caption,
  zoomOnHover = true,
  animateEntrance = true,
  delay = 0.1,
  wrapperClassName,
  imageClassName,
  aspectRatio = '4:3',
  ...props
}: ImageWrapperProps) {
  // Convert aspect ratio (e.g. '16:9' -> padding-top helper or standard style)
  const aspectStyle = React.useMemo(() => {
    if (!aspectRatio) return undefined;
    const parts = aspectRatio.split(':');
    if (parts.length === 2) {
      const width = parseFloat(parts[0]);
      const height = parseFloat(parts[1]);
      return { aspectRatio: `${width} / ${height}` };
    }
    return undefined;
  }, [aspectRatio]);

  const containerContent = (
    <div className="group relative w-full overflow-hidden bg-surface-muted" style={aspectStyle}>
      <motion.div
        className="w-full h-full"
        whileHover={zoomOnHover ? { scale: 1.04 } : undefined}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <CloudinaryImage
          src={src}
          alt={alt}
          fill
          aspectRatio={aspectRatio}
          className={cn(imageClassName)}
          {...props}
        />
      </motion.div>
    </div>
  );

  return (
    <div className={cn('w-full flex flex-col gap-3.5', wrapperClassName)}>
      {animateEntrance ? (
        <AnimatedWrapper variant="scaleIn" delay={delay}>
          {containerContent}
        </AnimatedWrapper>
      ) : (
        containerContent
      )}

      {caption && (
        <span className="text-caption text-muted font-sans font-light italic leading-normal px-1">
          {caption}
        </span>
      )}
    </div>
  );
}
