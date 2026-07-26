import * as React from 'react';
import { cn } from '@/lib/utils';
import { CONTAINER_WIDTHS } from '@/lib/constants';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: keyof typeof CONTAINER_WIDTHS;
  as?: React.ElementType;
  clean?: boolean; // If true, removes horizontal padding
}

/**
 * Reusable layout container with strict max-widths and centered positioning.
 * Follows premium editorial margins.
 */
export function Container({
  children,
  size = 'lg',
  as: Component = 'div',
  clean = false,
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full',
        CONTAINER_WIDTHS[size],
        !clean && 'px-6 md:px-10 lg:px-16',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
