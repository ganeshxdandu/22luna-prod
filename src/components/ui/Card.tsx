'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverLift } from '@/lib/animations';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  hoverable?: boolean;
  as?: React.ElementType;
  background?: 'default' | 'surface' | 'muted';
}

const bgClasses = {
  default: 'bg-transparent',
  surface: 'bg-surface border border-border',
  muted: 'bg-surface-muted border border-transparent',
};

/**
 * Composable Card element using the Compound Components pattern.
 * Supports elegant editorial layouts and optional lift animations on hover.
 */
function CardRoot({
  children,
  hoverable = false,
  as: Component = 'div',
  background = 'surface',
  className,
  ...props
}: CardProps) {
  const combinedClasses = cn(
    'relative flex flex-col w-full overflow-hidden transition-all duration-300',
    bgClasses[background],
    className
  );

  if (hoverable) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const MotionComponent = motion.create(Component as any);
    return (
      <MotionComponent
        className={combinedClasses}
        variants={hoverLift}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn('p-6 md:p-8 pb-4 flex flex-col gap-2', className)} {...props}>
      {children}
    </div>
  );
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn('p-6 md:p-8 pt-0 flex-1', className)} {...props}>
      {children}
    </div>
  );
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div className={cn('p-6 md:p-8 pt-0 mt-auto flex items-center border-t border-border/10', className)} {...props}>
      {children}
    </div>
  );
}

// Attach compound sub-components
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});
