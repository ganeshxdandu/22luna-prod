import type { Metadata } from 'next';
import { displayFont, sansFont } from '@/app/fonts';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ScrollProvider } from '@/components/providers/ScrollProvider';
import { GuidedDiscoveryModal } from '@/components/ui/GuidedDiscoveryModal';
import { SITE_METADATA } from '@/lib/constants';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  metadataBase: new URL(SITE_METADATA.url),
  authors: [{ name: SITE_METADATA.author }],
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
    icon: '/favicon.ico',
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
      className={`${sansFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen bg-background">
        <ThemeProvider>
          <ScrollProvider>
            <div className="w-full max-w-site mx-auto flex flex-col min-h-screen">
              {children}
              <GuidedDiscoveryModal />
            </div>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
