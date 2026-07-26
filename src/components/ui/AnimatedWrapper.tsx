'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import * as animations from '@/lib/animations';

type AnimationPreset = 'fadeIn' | 'fadeUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'staggerContainer';

export interface AnimatedWrapperProps extends Omit<HTMLMotionProps<'div'>, 'children' | 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  children?: React.ReactNode;
  variant?: AnimationPreset;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  as?: React.ElementType;
}

/**
 * Reusable wrapper to trigger premium entry/scroll animations in viewport
 * leveraging the unified Framer Motion presets.
 */
export function AnimatedWrapper({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration,
  staggerChildren,
  as: Component = 'div',
  className,
  ...props
}: AnimatedWrapperProps) {
  // Select preset variants dictionary from animations.ts
  const motionVariants = animations[variant];

  // Prepare custom dynamic props for variants (like delay or duration)
  const customData = React.useMemo(() => {
    if (variant === 'staggerContainer') {
      return { staggerChildren };
    }
    return { delay, duration };
  }, [variant, delay, duration, staggerChildren]);

  // Create client motion container
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = motion.create(Component as any);

  return (
    <MotionComponent
      variants={motionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      custom={customData}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
