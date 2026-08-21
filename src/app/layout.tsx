import type { Metadata, Viewport } from 'next';
import { displayFont, sansFont, signatureFont } from '@/app/fonts';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ScrollProvider } from '@/components/providers/ScrollProvider';
import { GuidedDiscoveryModal } from '@/components/ui/GuidedDiscoveryModal';
import { SITE_METADATA } from '@/lib/constants';
import '@/styles/globals.css';

export const viewport: Viewport = {
  themeColor: '#F7F4EF',
};

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | 22luna`,
  },
  description: SITE_METADATA.description,
  metadataBase: new URL(SITE_METADATA.url),
  authors: [{ name: SITE_METADATA.author }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: '22luna',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.url,
    siteName: '22luna',
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_METADATA.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    creator: SITE_METADATA.twitter,
    images: [SITE_METADATA.ogImage],
  },
  icons: {
    icon: [
      {
        url: '/22luna-dark.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/22luna.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} ${signatureFont.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen bg-background">
        <ThemeProvider>
          <ScrollProvider>
            <div className="w-full flex flex-col min-h-screen">
              {children}
              <GuidedDiscoveryModal />
            </div>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
