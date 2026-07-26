import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  html?: string;
  children?: React.ReactNode;
}

/**
 * Editorial typography wrapper for prose content (CMS outputs, body articles).
 * Styles standard raw tags cleanly using the design system.
 */
export function RichText({ html, children, className, ...props }: RichTextProps) {
  const wrapperClass = cn(
    'prose prose-stone dark:prose-invert max-w-none',
    // Custom heading styles
    '[&_h2]:font-display [&_h2]:text-heading-md [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-foreground',
    '[&_h3]:font-display [&_h3]:text-heading-sm [&_h3]:tracking-tight [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-foreground',
    // Custom body elements
    '[&_p]:font-sans [&_p]:text-body-lg [&_p]:font-light [&_p]:leading-relaxed [&_p]:text-foreground/90 [&_p]:mb-6',
    // Links
    '[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:text-foreground dark:[&_a]:text-accent-foreground',
    // Lists
    '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul_li]:font-sans [&_ul_li]:text-body [&_ul_li]:mb-2 [&_ul_li]:text-muted',
    '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol_li]:font-sans [&_ol_li]:text-body [&_ol_li]:mb-2 [&_ol_li]:text-muted',
    // Blockquote
    '[&_blockquote]:pl-6 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:font-display [&_blockquote]:text-heading-sm [&_blockquote]:italic [&_blockquote]:text-muted [&_blockquote]:my-8',
    // Divider
    '[&_hr]:border-border/50 [&_hr]:my-10',
    className
  );

  if (html) {
    return (
      <div
        className={wrapperClass}
        dangerouslySetInnerHTML={{ __html: html }}
        {...props}
      />
    );
  }

  return (
    <div className={wrapperClass} {...props}>
      {children}
    </div>
  );
}
