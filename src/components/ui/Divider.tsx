import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'sm' | 'md';
}

/**
 * Editorial divider line matching standard borders.
 */
export function Divider({
  orientation = 'horizontal',
  thickness = 'sm',
  className,
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(
        'bg-border/60 shrink-0',
        orientation === 'horizontal'
          ? cn('w-full', thickness === 'sm' ? 'h-[1px]' : 'h-[2px]')
          : cn('h-full', thickness === 'sm' ? 'w-[1px]' : 'w-[2px]'),
        className
      )}
      {...props}
    />
  );
}
