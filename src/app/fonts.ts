import localFont from 'next/font/local';
import { Outfit } from 'next/font/google';

/**
 * Configure primary display/editorial font: BeautiqueDisplay.
 * Loaded locally from OpenType files under `src/assets/fonts/`.
 */
export const displayFont = localFont({
  src: [
    {
      path: '../assets/fonts/BeautiqueDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/BeautiqueDisplay-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-display',
  display: 'swap',
});

/**
 * Configure secondary body font (Outfit from Google Fonts).
 * Next.js self-hosts this at build time, avoiding external network hits.
 */
export const sansFont = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
