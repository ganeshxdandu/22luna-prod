import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | 22luna Sanctuary',
  description: 'How we collect, store, and protect your personal and medical information at 22luna.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col bg-moon-ivory">
      {/* Light navigation header */}
      <Header variant="light" />

      {/* ── Content Section ── */}
      <section className="w-full max-w-site mx-auto px-6 md:px-12 lg:px-16 pt-[104px] md:pt-[128px] pb-24 md:pb-32 flex flex-col items-center select-text">
        <div className="w-full max-w-[700px] flex flex-col items-start">
          
          {/* Eyebrow */}
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
            Legal & Privacy
          </span>

          {/* Title */}
          <h1 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal mb-3">
            Privacy Policy
          </h1>

          <p className="font-sans text-stone-gray text-[0.8rem] tracking-wider uppercase font-light mb-8">
            Last Updated: July 29, 2026
          </p>

          <div className="h-[1px] w-full bg-charcoal/10 mb-10" />

          {/* Content paragraphs */}
          <div className="space-y-8 text-stone-gray font-sans font-light text-[0.92rem] sm:text-[0.98rem] leading-[1.8] tracking-wide">
            
            <p>
              At 22luna Sanctuary, we are committed to honoring the trust you place in us. 
              This Privacy Policy explains how we collect, store, and safeguard your personal and medical details 
              when you use our website, schedule consultations, or visit our Bangalore clinic.
            </p>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when scheduling an appointment or sending an inquiry, 
                including your name, phone number, email address, and any clinical history or concerns you choose to share.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                2. How We Use Your Data
              </h2>
              <p>
                Your personal and health information is strictly used to provide personalized, doctor-led clinical evaluations, 
                manage appointment bookings, coordinate coordinate care, and respond to your direct queries. 
                We do not sell, lease, or distribute your information to commercial third parties.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                3. Clinical Discretion & Security
              </h2>
              <p>
                As a doctor-led clinic, we implement high clinical and technical standards to maintain the security and confidentiality 
                of your patient files. Access to medical histories is restricted strictly to qualified clinical staff.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="font-display text-[1.25rem] text-charcoal tracking-tight font-medium uppercase">
                4. Your Rights
              </h2>
              <p>
                You hold the right to request access to the personal records we hold, request corrections to any inaccuracies, 
                or request deletion of your administrative files. You can reach out directly via our email at 
                <a href="mailto:hello@22luna.com" className="text-botanical hover:text-charcoal underline transition-colors mx-1">
                  hello@22luna.com
                </a> 
                to exercise these rights.
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
