'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverLift } from '@/lib/animations';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

// Define base HTML motion props and extend with href/custom values
export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children' | 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-foreground border border-accent hover:bg-opacity-95',
  outline: 'bg-transparent border border-border text-foreground hover:bg-surface-muted hover:border-muted',
  ghost: 'bg-transparent text-foreground hover:bg-surface-muted',
  accent: 'bg-foreground text-background border border-foreground hover:bg-opacity-90',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-caption tracking-wider',
  md: 'px-8 py-3 text-small tracking-widest',
  lg: 'px-10 py-4 text-body tracking-widest',
};

/**
 * Premium premium button with interactive lift animations.
 * Automatically switches to a Next.js Link if an `href` prop is supplied.
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      external = false,
      className,
      ...props
    },
    ref
  ) => {
    const combinedClasses = cn(
      'inline-flex items-center justify-center font-sans font-medium uppercase transition-colors select-none focus:outline-none focus:ring-1 focus:ring-accent/40 rounded-none cursor-pointer',
      variantStyles[variant],
      sizeStyles[size],
      isLoading && 'opacity-70 pointer-events-none',
      className
    );

    const buttonContent = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
        <span className="relative">{children}</span>
        {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
      </>
    );

    // If it's a Link
    if (href) {
      const isExternal = external || href.startsWith('http');
      const MotionLink = motion.create(Link);

      return (
        <MotionLink
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
          variants={hoverLift}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          ref={ref as React.Ref<HTMLAnchorElement>}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
        >
          {buttonContent}
        </MotionLink>
      );
    }

    return (
      <motion.button
        className={combinedClasses}
        variants={hoverLift}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
