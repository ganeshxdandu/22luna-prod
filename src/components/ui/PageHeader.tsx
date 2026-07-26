import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Stack } from './Stack';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category?: string;
  description?: string;
  centered?: boolean;
}

/**
 * Premium page title header component designed with spacious editorial padding.
 */
export function PageHeader({
  title,
  category,
  description,
  centered = false,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'border-b border-border/40 bg-background pt-24 pb-12 md:pt-36 md:pb-20',
        className
      )}
      {...props}
    >
      <Container size="lg">
        <Stack
          gap={4}
          align={centered ? 'center' : 'start'}
          className={cn('max-w-4xl', centered && 'mx-auto text-center')}
        >
          {category && (
            <span className="text-caption tracking-[0.25em] uppercase text-accent font-sans font-medium">
              {category}
            </span>
          )}

          <h1 className="text-display font-display font-normal text-foreground leading-[1.05] tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="text-body-lg md:text-xl font-sans font-light text-muted leading-relaxed max-w-2xl mt-2">
              {description}
            </p>
          )}
        </Stack>
      </Container>
    </div>
  );
}
