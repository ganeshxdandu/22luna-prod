import * as React from 'react';
import { cn } from '@/lib/utils';
import { Stack } from './Stack';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  pretitle?: string;
  description?: string;
  align?: 'left' | 'center';
  titleAs?: 'h1' | 'h2' | 'h3';
  accent?: boolean;
}

/**
 * Editorial section header component designed to present sections with premium spacing.
 */
export function SectionHeading({
  title,
  pretitle,
  description,
  align = 'left',
  titleAs = 'h2',
  accent = false,
  className,
  ...props
}: SectionHeadingProps) {
  const TitleComponent = titleAs;

  return (
    <Stack
      gap={3}
      align={align === 'center' ? 'center' : 'start'}
      className={cn(
        'w-full max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      {...props}
    >
      {pretitle && (
        <span className="text-caption tracking-[0.15em] uppercase text-muted font-sans font-medium">
          {pretitle}
        </span>
      )}
      
      <TitleComponent
        className={cn(
          'text-heading-lg text-foreground tracking-tight',
          accent && 'text-accent'
        )}
      >
        {title}
      </TitleComponent>

      {description && (
        <p className="text-body-lg text-muted font-sans font-light leading-relaxed mt-1">
          {description}
        </p>
      )}
    </Stack>
  );
}
