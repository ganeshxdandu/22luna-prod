import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent';
  size?: 'sm' | 'md';
}

const variantStyles = {
  default: 'bg-surface-muted text-muted border border-transparent',
  outline: 'bg-transparent border border-border text-muted',
  accent: 'bg-accent/10 border border-accent/20 text-accent dark:bg-accent/20 dark:text-accent-foreground',
};

const sizeStyles = {
  sm: 'px-2.5 py-0.5 text-caption tracking-widest uppercase',
  md: 'px-3.5 py-1 text-small tracking-wider uppercase',
};

/**
 * Minimalist Badge tag element.
 */
export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-sans font-medium rounded-none transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
