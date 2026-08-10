'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Crown, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { fadeUp, fadeIn } from '@/lib/animations';

// ── Reusable Editorial Image Placeholder ──────────────────────────────────────
interface ImagePlaceholderProps {
  aspectRatio: '16-9' | '4-5' | '1-1';
  label: string;
  className?: string;
  src?: string;
}

function ImagePlaceholder({ aspectRatio, label, className, src }: ImagePlaceholderProps) {
  const aspectClass =
    aspectRatio === '16-9' ? 'aspect-[16/9]' :
    aspectRatio === '4-5' ? 'aspect-[4/5]' :
    'aspect-square';

  return (
    <div className={cn(
      'relative w-full overflow-hidden bg-[#ECE8E0] border border-charcoal/8 flex items-center justify-center group select-none rounded-[2px] shadow-sm shadow-charcoal/5',
      aspectClass,
      className
    )}>
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-botanical/30" />
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-stone-gray/60 font-light">
            {label}
          </span>
          <span className="font-sans text-[8px] text-stone-gray/40 font-light italic">
            ({aspectRatio.replace('-', ':')} Editorial Crop)
          </span>
        </div>
      )}
    </div>
  );
}

// ── FAQ Items Interface ───────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is LUNA+?',
    answer: 'LUNA+ is a thoughtfully designed client benefits program for returning guests of 22Luna. It offers additional value and special privileges to reward clients who continue their long-term health and aesthetic care journey at our sanctuary.',
  },
  {
    question: 'How does the ₹1,00,000 treatment value work?',
    answer: 'When you credit ₹1,00,000 to your LUNA+ account, you receive an immediate allocation of ₹1,15,000 in treatment value. This value is redeemable against skin, hair, and dental services at 22Luna. Please contact our team for the current terms and eligibility.',
  },
  {
    question: 'How does the referral benefit work?',
    answer: 'By introducing someone you care about to 22Luna, you share our standard of personalized, clinical care. When they complete their first visit, you receive a 20% discount on your next signature treatment. Terms & conditions apply. Please contact our team for the current terms and eligibility.',
  },
  {
    question: 'How can I enquire about LUNA+?',
    answer: 'Joining LUNA+ is highly personalized. You can connect with our guest relations team on WhatsApp or speak with our clinic representatives during your next visit. We will verify your account standing and outline the transition process. Please contact our team for the current terms and eligibility.',
  },
];

export default function LunaPlusPage() {
  const [openFAQIdx, setOpenFAQIdx] = React.useState<number | null>(0);

  const whatsappLink = "https://wa.me/918971725522?text=I%20am%20interested%20in%20learning%20more%20about%20the%20LUNA%2B%20loyalty%20program.";
  const treatmentsLink = "/treatments";

  return (
    <main className="flex flex-col bg-moon-ivory min-h-screen">
      {/* Light Header Variant */}
      <Header variant="light" />

      {/* ── 02: HERO SECTION ── */}
      <section className="relative w-full pt-[96px] md:pt-[128px] pb-16 md:pb-24 px-6 md:px-8 border-b border-charcoal/10 overflow-hidden">
        <div className="max-w-site mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Heading and CTAs (50-55% width) */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <Crown size={14} className="text-botanical" aria-hidden="true" />
              <span className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-botanical font-medium">
                LUNA+
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.2, duration: 1.1 }}
              className="font-display text-charcoal uppercase leading-[1.0] tracking-[-0.03em] text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-normal mb-6"
            >
              MORE FROM YOUR<br />22LUNA JOURNEY.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.3, duration: 1.0 }}
              className="font-sans text-stone-gray text-sm md:text-base leading-[1.8] font-light max-w-[420px] mb-10"
            >
              A thoughtfully designed program for clients who continue their care journey with 22Luna.
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.45, duration: 0.9 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-7 py-4 tracking-tight transition-all duration-300 hover:bg-botanical/90 w-full sm:w-auto group"
              >
                Enquire About LUNA+
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href={treatmentsLink}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 text-charcoal font-sans text-[0.72rem] uppercase px-7 py-4 tracking-tight transition-all duration-300 hover:bg-charcoal/5 w-full sm:w-auto"
              >
                Explore Treatments
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual (45-50% width) */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.35, duration: 1.0 }}
              className="w-full max-w-[480px]"
            >
              <ImagePlaceholder
                aspectRatio="4-5"
                label="Clinic Architecture / Moonlight"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03: EDITORIAL INTRODUCTION ── */}
      <section className="w-full py-20 md:py-32 px-6 md:px-8 border-b border-charcoal/10 bg-soft-ivory">
        <div className="max-w-site mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="w-full md:w-[50%]"
          >
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal">
              FOR THOSE WHO<br />CHOOSE TO<br />RETURN.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="w-full md:w-[45%] md:max-w-[400px] flex flex-col justify-start pt-2 md:pt-4"
          >
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light">
              LUNA+ is designed to offer additional value to clients who continue their treatment journey with 22Luna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 04: SIGNATURE BENEFIT ── */}
      <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-8 border-b border-charcoal/10">
        <div className="max-w-site mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Visual Area */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1 flex justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.1 }}
              className="w-full max-w-[420px]"
            >
              <ImagePlaceholder
                aspectRatio="4-5"
                label="Bespoke Care / Subtle Human Interaction"
              />
            </motion.div>
          </div>

          {/* Right Column: Financial Statement */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2 flex flex-col items-start">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-botanical font-semibold mb-4 block"
            >
              01 / SIGNATURE FINANCIAL BENEFIT
            </motion.span>

            {/* Financial comparison display */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.2 }}
              className="flex flex-col gap-3 py-6 w-full border-t border-b border-charcoal/10 mb-8"
            >
              <div className="flex flex-col">
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-gray/60 font-light mb-1">
                  When You Allocate
                </span>
                <span className="font-display text-[2.5rem] sm:text-[3.2rem] text-stone-gray/70 leading-none font-light">
                  ₹1,00,000
                </span>
              </div>
              <div className="py-2 flex items-center">
                <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-botanical font-medium px-3 py-1 bg-botanical/5 border border-botanical/10 rounded-full">
                  Becomes
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-botanical font-medium mb-1">
                  Treatment Value Received
                </span>
                <span className="font-display text-[3.2rem] sm:text-[4.2rem] text-botanical leading-none font-medium">
                  ₹1,15,000
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.3 }}
              className="font-sans text-stone-gray text-xs md:text-sm leading-[1.8] font-light max-w-[450px] mb-8"
            >
              Secure comprehensive care value across all therapies. Account allocations are credited straight to your client profile to simplify payments during subsequent visits.
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.4 }}
            >
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-6 py-3.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
              >
                Enquire About This Benefit
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 05: REFER & REWARD ── */}
      <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-8 border-b border-charcoal/10 bg-soft-ivory">
        <div className="max-w-site mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Referral Statement */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-botanical font-semibold mb-4 block"
            >
              02 / REFERRAL ADVANTAGE
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.1 }}
              className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal mb-5"
            >
              REFER SOMEONE<br />YOU CARE ABOUT.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.2 }}
              className="py-5 border-t border-b border-charcoal/10 w-full mb-8"
            >
              <span className="font-display text-[2.5rem] sm:text-[3.2rem] text-botanical leading-none font-medium block">
                20% OFF
              </span>
              <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-stone-gray font-light mt-1 block">
                YOUR NEXT SIGNATURE TREATMENT
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.3 }}
              className="font-sans text-stone-gray text-xs md:text-sm leading-[1.8] font-light max-w-[450px] mb-8"
            >
              Refer a friend and receive 20% off your next treatment.
              <span className="block mt-3 text-[10px] text-stone-gray/50 italic">Terms & conditions apply.</span>
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.4 }}
            >
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-6 py-3.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
              >
                Enquire On WhatsApp
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual Area */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.1 }}
              className="w-full max-w-[420px]"
            >
              <ImagePlaceholder
                aspectRatio="4-5"
                label="Clinical Interior / Personal Care"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 06: LUNA+ BENEFITS (Magazine-Style Editorial Composition) ── */}
      <section className="w-full py-20 md:py-32 px-6 md:px-8 border-b border-charcoal/10">
        <div className="max-w-site mx-auto">
          <div className="mb-16 md:mb-20">
            <span className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-botanical font-semibold block mb-4">
              BENEFITS SUMMARY
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal">
              MAGAZINE PROFILE
            </h2>
          </div>

          {/* Asymmetric layout with spaces for future benefit items */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
            
            {/* Benefit 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.1 }}
              className="md:col-span-5 border-t border-charcoal/15 pt-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-charcoal/[0.15] text-[2.5rem] leading-none block mb-4 font-light select-none">
                  01
                </span>
                <h3 className="font-sans text-charcoal text-base md:text-lg font-medium leading-snug tracking-tight mb-4">
                  Account Allocation Boost
                </h3>
                <p className="font-sans text-stone-gray text-xs md:text-sm leading-[1.8] font-light">
                  Crediting ₹1,00,000 unlocks ₹1,15,000 in direct treatment value. Valid across skin, hair, and dental programs.
                </p>
              </div>
            </motion.div>

            {/* Gap column for editorial breathing room */}
            <div className="hidden md:block md:col-span-2" />

            {/* Benefit 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.2 }}
              className="md:col-span-5 border-t border-charcoal/15 pt-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-charcoal/[0.15] text-[2.5rem] leading-none block mb-4 font-light select-none">
                  02
                </span>
                <h3 className="font-sans text-charcoal text-base md:text-lg font-medium leading-snug tracking-tight mb-4">
                  Advocate Referral Reward
                </h3>
                <p className="font-sans text-stone-gray text-xs md:text-sm leading-[1.8] font-light">
                  Share the sanctuary standard. Every qualified referral grants you 20% off your next treatment session.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Reserved breathing room for future program benefits */}
          <div className="mt-16 md:mt-24 border-t border-charcoal/10 pt-8 flex flex-col sm:flex-row justify-between items-start gap-4">
            <span className="font-sans text-[0.62rem] tracking-[0.18em] uppercase text-stone-gray/50 italic">
              * Additional client privileges will be highlighted as program updates release.
            </span>
          </div>
        </div>
      </section>

      {/* ── 07: HOW LUNA+ WORKS (Minimal Three-Step Sequence) ── */}
      <section className="w-full py-20 md:py-32 px-6 md:px-8 border-b border-charcoal/10 bg-soft-ivory">
        <div className="max-w-site mx-auto">
          <div className="mb-16 md:mb-20 text-center">
            <span className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-botanical font-semibold block mb-4">
              THE METHOD
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pt-8 border-t border-charcoal/10">
            {/* Step 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.1 }}
              className="flex flex-col items-start"
            >
              <span className="font-display text-botanical/[0.12] text-[5rem] leading-none mb-4 font-light select-none">
                01
              </span>
              <h3 className="font-sans text-charcoal text-sm uppercase tracking-[0.15em] font-semibold mb-2">
                ENQUIRE
              </h3>
              <p className="font-sans text-stone-gray text-xs md:text-sm leading-[1.8] font-light max-w-[280px]">
                Connect with the 22Luna guest relations team on WhatsApp or in-clinic.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <span className="font-display text-botanical/[0.12] text-[5rem] leading-none mb-4 font-light select-none">
                02
              </span>
              <h3 className="font-sans text-charcoal text-sm uppercase tracking-[0.15em] font-semibold mb-2">
                CHOOSE
              </h3>
              <p className="font-sans text-stone-gray text-xs md:text-sm leading-[1.8] font-light max-w-[280px]">
                Understand the available LUNA+ benefits and allocate values to your profile.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.3 }}
              className="flex flex-col items-start"
            >
              <span className="font-display text-botanical/[0.12] text-[5rem] leading-none mb-4 font-light select-none">
                03
              </span>
              <h3 className="font-sans text-charcoal text-sm uppercase tracking-[0.15em] font-semibold mb-2">
                ENJOY
              </h3>
              <p className="font-sans text-stone-gray text-xs md:text-sm leading-[1.8] font-light max-w-[280px]">
                Continue your 22Luna treatment journey with additional value and simplified checkout.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 08: CINEMATIC VISUAL BREAK (Full-Width Visual Section) ── */}
      <section className="relative w-full overflow-hidden select-none border-b border-charcoal/10">
        {/* Visual Box with correct 16:9 aspect ratio */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative bg-charcoal/10 flex items-center justify-center">
          
          {/* Video or Image Container (using placeholder structure) */}
          <div className="absolute inset-0 bg-[#ECE8E0] flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-center select-none pointer-events-none opacity-40">
              <span className="w-2 h-2 rounded-full bg-botanical" />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone-gray">
                Cinematic Visual Space (16:9 Aspect Ratio)
              </span>
            </div>
          </div>

          {/* Dark Overlay to dim the video/photo */}
          <div className="absolute inset-0 bg-charcoal/30 z-10" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="font-sans text-[0.7rem] tracking-[0.3em] uppercase text-moon-ivory font-medium mb-4 block">
                LUNA+
              </span>
              <h2 className="font-display text-white uppercase leading-tight tracking-[0.05em] text-[1.8rem] sm:text-[2.5rem] lg:text-[3.2rem] font-light">
                CARE THAT CONTINUES.
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 09: FAQ ACCORDION ── */}
      <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-8 border-b border-charcoal/10">
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:sticky lg:top-[120px]"
            >
              <span className="text-[0.7rem] tracking-[0.22em] text-stone-gray uppercase block mb-4 font-sans font-semibold">
                LUNA+ GUIDE
              </span>
              <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-tighter text-charcoal mb-4">
                Frequently Asked <span className="text-botanical font-medium block md:inline lg:block">Questions</span>
              </h2>
              <p className="text-stone-gray font-sans font-light text-xs md:text-sm tracking-wide max-w-[340px]">
                Understand the parameters and guidelines of our client benefits program.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col w-full">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFAQIdx === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-charcoal/10 py-6 md:py-7 cursor-pointer"
                  onClick={() => setOpenFAQIdx(isOpen ? null : idx)}
                >
                  {/* Question Title Header */}
                  <div className="flex items-center justify-between gap-6 select-none">
                    <h3 className={cn(
                      "font-sans text-base md:text-lg tracking-tight font-medium leading-snug transition-colors duration-300 text-charcoal",
                      isOpen ? "text-botanical" : "hover:text-charcoal/80"
                    )}>
                      {item.question}
                    </h3>
                    <span className="text-charcoal/60 shrink-0">
                      {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                    </span>
                  </div>

                  {/* Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-stone-gray font-sans font-light text-xs md:text-sm leading-[1.7] tracking-wide pt-4 max-w-[580px]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10: FINAL CTA SECTION ── */}
      <section className="w-full py-24 md:py-36 px-6 md:px-8 bg-soft-ivory text-center">
        <div className="max-w-site mx-auto flex flex-col items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-botanical font-semibold mb-6 block">
              MEMBERSHIP ENQUIRY
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.5rem] sm:text-[3.2rem] lg:text-[4rem] font-normal mb-8 max-w-[620px]">
              YOUR JOURNEY DOESN&apos;T HAVE TO STOP HERE.
            </h2>
            <p className="font-sans text-stone-gray text-sm md:text-base leading-[1.8] font-light max-w-[420px] mb-12">
              Discover the benefits of continuing your journey with 22Luna.
            </p>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-8 py-4.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
            >
              Enquire About LUNA+
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
