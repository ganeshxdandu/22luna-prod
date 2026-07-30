import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Terms of Use | 22Luna Sanctuary',
  description: 'Website terms, medical disclaimers, and consultation policies at 22Luna.',
  alternates: {
    canonical: 'https://22luna.in/terms-of-use',
  },
  openGraph: {
    title: 'Terms of Use | 22Luna Sanctuary',
    description: 'Website terms, medical disclaimers, and consultation policies at 22Luna.',
    url: 'https://22luna.in/terms-of-use',
    images: [
      {
        url: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785397953/bedding_qudetj.png',
        width: 1200,
        height: 630,
        alt: '22Luna Terms of Use',
      },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', item: '/' },
  { name: 'Terms of Use', item: '/terms-of-use' },
];

export default function TermsOfUsePage() {
  return (
    <main className="flex flex-col bg-moon-ivory">
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      {/* Light navigation header */}
      <Header variant="light" />

      {/* ── Content Section ── */}
      <section className="w-full max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-[104px] md:pt-[128px] pb-24 md:pb-32 flex flex-col items-center select-text">
        <div className="w-full max-w-[700px] flex flex-col items-start">
          
          {/* Eyebrow */}
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            Legal & Guidelines
          </span>

          {/* Title */}
          <h1 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal mb-3">
            Terms of Use
          </h1>

          <p className="font-sans text-stone-gray text-[0.8rem] tracking-wider uppercase font-light mb-8">
            Last Updated: July 29, 2026
          </p>

          <div className="h-[1px] w-full bg-charcoal/10 mb-10" />

          {/* Content paragraphs */}
          <div className="space-y-8 text-stone-gray font-sans font-light text-[0.92rem] sm:text-[0.98rem] leading-[1.8] tracking-wide">
            
            <p>
              Welcome to the 22luna website. By accessing or browsing this website, you agree to comply with 
              and be bound by the following Terms of Use and guidelines.
            </p>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                1. No Medical Diagnosis or Advice
              </h2>
              <p>
                The information provided on this website - including details on treatments, skin concerns, and case studies - is 
                strictly for educational and exploration purposes. It does not replace a professional medical consultation, 
                diagnosis, or treatment plan. A direct evaluation by our clinical team is required for diagnosis.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                2. Appointment & Cancellation Policy
              </h2>
              <p>
                Booking requests made via the website are subject to scheduling availability and confirmation. 
                We appreciate at least 24 hours&apos; notice for cancellations or modifications of scheduled consultations.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                3. Intellectual Property
              </h2>
              <p>
                All editorial articles, clinical descriptions, photography, design elements, and logos on this website 
                are the intellectual property of 22luna. Copying, republishing, or distributing any materials without 
                express written consent is prohibited.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                4. General Inquiries
              </h2>
              <p>
                If you have questions regarding these terms, medical disclaimers, or booking guidelines, please email us at 
                <a href="mailto:hello@22luna.in" className="text-botanical hover:text-charcoal underline transition-colors mx-1">
                  hello@22luna.in
                </a> 
                or call the clinic directly.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
