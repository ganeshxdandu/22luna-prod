'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  selected?: boolean;
  interactive?: boolean;
}

/**
 * Editorial selector pill for filters, categories or tabs.
 */
export function Pill({
  children,
  selected = false,
  interactive = true,
  className,
  ...props
}: PillProps) {
  const Component = interactive ? 'button' : 'span';

  return (
    <Component
      type={interactive ? 'button' : undefined}
      className={cn(
        'inline-flex items-center justify-center px-5 py-1.5 text-caption tracking-widest uppercase transition-all duration-300 font-sans border select-none',
        selected
          ? 'bg-accent border-accent text-accent-foreground'
          : 'bg-transparent border-border text-muted hover:border-muted hover:text-foreground',
        !interactive && 'pointer-events-none hover:border-border hover:text-muted',
        className
      )}
      {...(interactive ? props : {})}
    >
      {children}
    </Component>
  );
}
