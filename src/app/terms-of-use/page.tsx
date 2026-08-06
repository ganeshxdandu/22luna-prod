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
            Last Updated: August 4, 2026
          </p>

          <div className="h-[1px] w-full bg-charcoal/10 mb-10" />

          {/* Content paragraphs */}
          <div className="space-y-8 text-stone-gray font-sans font-light text-[0.92rem] sm:text-[0.98rem] leading-[1.8] tracking-wide w-full">
            
            <p>
              Welcome to 22Luna! These Terms &amp; Conditions (the &quot;Terms&quot;) govern your use of our website (22luna.in) and all content and services provided through it. By accessing or using our website, you agree to these Terms. Please note that we may update these Terms periodically, and it is your responsibility to review them. If you do not agree to these Terms, please refrain from using our website.
            </p>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Appointments
              </h2>
              <p className="font-semibold text-charcoal">Booking an Appointment</p>
              <p>To book an appointment at 22Luna, you can:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Online:</span> Visit our website and use the online booking system.</li>
                <li><span className="font-semibold">Phone:</span> Call us at <a href="tel:8971724422" className="text-botanical hover:text-charcoal underline transition-colors font-medium">8971724422</a>, <a href="tel:8971725522" className="text-botanical hover:text-charcoal underline transition-colors font-medium">8971725522</a></li>
                <li><span className="font-semibold">In-Person:</span> Visit our clinic at Address - 5, Rest House, Kasturba Cross Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001</li>
              </ul>

              <p className="font-semibold text-charcoal mt-4">Cancellation and Rescheduling</p>
              <p>
                If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance. Late cancellations or no-shows may be subject to a fee.
              </p>

              <p className="font-semibold text-charcoal mt-4">Late Arrival Policy</p>
              <p>
                If you arrive late for your appointment, we will do our best to accommodate you. However, your appointment may need to be rescheduled to ensure timely service for all patients.
              </p>

              <p className="font-semibold text-charcoal mt-4">Consultation Fees</p>
              <p>
                Consultation fees vary based on the type of service and duration. Please contact our reception for specific details.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Pictorial Images &amp; Photographs Disclaimer
              </h2>
              <p>
                Results may vary between individuals and treatments. All images are for illustrative purposes only.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Medical Advice Disclaimer
              </h2>
              <p>
                The content on this website, including text, images, videos, photos, audio, and graphics, is for informational purposes only and does not constitute medical advice, diagnosis, treatment, or recommendations of any kind. It should not replace advice provided by qualified healthcare professionals. We do not endorse specific tests, physicians, products, procedures, opinions, or other information on this website.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Guarantee/Warranty
              </h2>
              <p>
                No guarantee or warranty is provided for any treatments or services. Individual results may vary.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Limitation of Liability
              </h2>
              <p>
                In no event shall 22Luna.in, its founders, owners, employees, agents, or service providers (collectively, &quot;Protected Entities&quot;) be liable for any direct, indirect, special, punitive, consequential, or incidental damages arising from or related to the use of our website. Users assume full responsibility for any adverse outcomes.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Copyright &amp; Prohibited Use
              </h2>
              <p>
                All textual content on this website is the copyright of 22Luna.in, registered in Bangalore, India. No part of this website may be used without prior written consent from 22Luna.in. Commercial use, distribution, or promotion of website content is strictly prohibited. Users may not download, distribute, display, publish, copy, reproduce, transmit, create derivative works from, sell, or otherwise exploit any content available on our website.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Hosting
              </h2>
              <p>
                Our website is hosted on Wordpress Org. They provide us with an online platform that allows us to show our products and services to you.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Changes to These Terms of Service
              </h2>
              <p>
                We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                Contact Information
              </h2>
              <p>
                Questions about the Terms of Service should be sent to us at{' '}
                <a href="mailto:22lunaskin@gmail.com" className="text-botanical hover:text-charcoal underline transition-colors">
                  22lunaskin@gmail.com
                </a>
              </p>
              <p className="mt-2 font-semibold text-charcoal">Our contact information is posted below:</p>
              <p className="text-charcoal font-medium">22 Luna Clinic</p>
              <ul className="list-none space-y-1">
                <li>
                  <span className="font-semibold text-charcoal">Email:</span>{' '}
                  <a href="mailto:22lunaskin@gmail.com" className="text-botanical hover:text-charcoal underline transition-colors">
                    22lunaskin@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Address:</span> 5, Rest House, Kasturba Cross Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Ph:</span> <a href="tel:8971724422" className="text-botanical hover:text-charcoal underline transition-colors font-medium">8971724422</a>, <a href="tel:8971725522" className="text-botanical hover:text-charcoal underline transition-colors font-medium">8971725522</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
