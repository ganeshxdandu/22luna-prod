import * as React from 'react';
import { cn } from '@/lib/utils';
import { SECTION_SPACING } from '@/lib/constants';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  spacing?: keyof typeof SECTION_SPACING;
  background?: 'default' | 'surface' | 'muted';
  as?: React.ElementType;
}

/**
 * Reusable layout Section component ensuring unified vertical rhythm
 * across different modules.
 */
export function Section({
  children,
  spacing = 'normal',
  background = 'default',
  as: Component = 'section',
  className,
  ...props
}: SectionProps) {
  const bgClasses = {
    default: 'bg-background',
    surface: 'bg-surface',
    muted: 'bg-surface-muted',
  };

  return (
    <Component
      className={cn(
        SECTION_SPACING[spacing],
        bgClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
