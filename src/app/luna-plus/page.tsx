'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { ArrowUpRight, Crown } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const HERO_IMAGE = 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1786939308/hero-luna_himscl.png';
const TWENTY_PCT_SVG = 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1786939358/twentypercent_ueov7s.svg';

const WA = 'https://wa.me/918971725522?text=I%20am%20enquiring%20about%20the%20Luna%2B%20loyalty%20programme.';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function TicketCard({
  bg,
  stickyTop,
  zIndex,
  index,
  progress,
  children,
}: {
  bg: string;
  stickyTop: string;
  zIndex: number;
  index: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}) {
  const isFirst = index === 0;

  // 3D scale & tilt transform on scroll
  const scale = useTransform(progress, [0.15, 0.75], isFirst ? [1, 0.94] : [1, 1]);
  const rotateX = useTransform(progress, [0.15, 0.75], isFirst ? [0, -6] : [0, 0]);

  const smoothScale = useSpring(scale, { stiffness: 180, damping: 25 });
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 25 });

  return (
    <div
      className="sticky px-4 sm:px-5 lg:px-8 mt-4"
      style={{
        top: stickyTop,
        zIndex,
        perspective: '1200px',
      }}
    >
      <motion.div
        style={{
          scale: smoothScale,
          rotateX: smoothRotateX,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-[12px] overflow-visible"
      >
        <div
          className="relative rounded-[12px] overflow-visible"
          style={{ background: bg }}
        >
          {/* Ticket notch left */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[52%] w-9 h-9 rounded-full bg-[#F5F0E8] z-10"
            aria-hidden="true"
          />
          {/* Ticket notch right */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[52%] w-9 h-9 rounded-full bg-[#F5F0E8] z-10"
            aria-hidden="true"
          />
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default function LunaPlusPage() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main className="bg-[#F5F0E8]">

      {/* HERO — 100vh height */}
      <section className="relative w-full bg-[#F5F0E8] min-h-screen flex flex-col justify-between overflow-hidden">
        <Header variant="light" />

        <div className="relative max-w-site w-full mx-auto flex-1 flex flex-col md:flex-row items-stretch pt-[72px] pb-6 md:pb-0">

          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-8 pb-4 md:py-0 z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-2 font-sans text-sm sm:text-base uppercase tracking-tight font-normal text-botanical mb-4 sm:mb-6"
            >
              <Crown size={18} strokeWidth={1.8} className="text-botanical shrink-0" />
              <span>LUNA+</span>
            </motion.div>

            <div className="overflow-hidden mb-5 sm:mb-6">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.1, ease }}
                className="font-display text-charcoal uppercase leading-[0.92] tracking-tight text-[44px] sm:text-6xl lg:text-[68px] xl:text-[72px]"
              >
                <span className="whitespace-nowrap">YOUR CARE.</span>
                <br />
                <span className="whitespace-nowrap">MORE VALUE.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="font-sans text-charcoal/65 font-light text-base sm:text-lg leading-[1.65] tracking-tight max-w-[360px] mb-8"
            >
              A loyalty programme created to bring more value to your continued care at 22Luna.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              <Link
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-botanical text-moon-ivory font-sans text-xs sm:text-sm uppercase tracking-tight px-8 py-4 transition-all duration-300 hover:bg-botanical/90 group"
              >
                DISCOVER LUNA+
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right — hero image, rotated vertically on mobile to fill space without cropping */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.15, ease }}
            className="relative w-full md:w-[54%] lg:w-[58%] h-[55vh] sm:h-[60vh] md:h-auto min-h-[420px] sm:min-h-[480px] md:min-h-[580px] shrink-0"
          >
            {/* Mobile View: rotated +16deg & scaled 1.28x so gold card tilts UP diagonally into vertical space */}
            <div
              className="absolute inset-0 flex items-end justify-end md:hidden"
              style={{
                right: '-4%',
                bottom: '-2%',
                transform: 'rotate(16deg) scale(1.28)',
                transformOrigin: '85% 90%',
              }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Luna+ card held by a white-gloved hand"
                fill
                priority
                className="object-contain object-right-bottom"
                sizes="100vw"
              />
            </div>

            {/* Desktop View: rotated 2.5deg & scaled 1.08x for desktop layout */}
            <div
              className="hidden md:flex absolute inset-0 items-center justify-end"
              style={{
                right: '-6%',
                bottom: '-4%',
                transform: 'rotate(2.5deg) scale(1.08)',
                transformOrigin: '80% 85%',
              }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Luna+ card held by a white-gloved hand"
                fill
                priority
                className="object-contain object-right-bottom"
                sizes="60vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO — Limestone background (#F3EEE8 / bg-limestone) */}
      <section className="bg-limestone py-20 md:py-32 px-6 sm:px-10 flex flex-col items-center text-center border-y border-charcoal/8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease }}
          className="max-w-[580px] flex flex-col items-center"
        >
          <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.36em] font-light text-charcoal/35 mb-7">
            The Luna+ Experience
          </p>
          <h2
            className="font-display text-charcoal uppercase leading-[1.0] tracking-[-0.025em] mb-7"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.6rem)' }}
          >
            A little more, for every step of your journey.
          </h2>
          <p className="font-sans text-charcoal/45 font-light text-[12px] sm:text-[13px] leading-[1.9] max-w-[400px]">
            Luna+ is our way of making your continued relationship with 22Luna a little more
            rewarding &#8212; with greater treatment value and thoughtful benefits for sharing the
            Luna experience with others.
          </p>
        </motion.div>
      </section>

      {/* STACKING TICKET CARDS — Moon Ivory background */}
      <div ref={containerRef} className="relative pb-12 md:pb-20 bg-[#F5F0E8] pt-12 md:pt-20">

        {/* CARD 01 — Financial (dark green) */}
        <TicketCard
          bg="#24493B"
          stickyTop="80px"
          zIndex={10}
          index={0}
          progress={scrollYProgress}
        >
          <div className="pt-6 sm:pt-8 pb-7 sm:pb-9">
            {/* Top header text */}
            <div className="px-6 sm:px-8 pb-4 sm:pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-sans text-[11px] sm:text-sm uppercase tracking-tight font-normal text-moon-ivory">
                  <span className="font-extralight">THE LUNA+</span> &nbsp;PRIVILEGES
                </p>
                <p className="font-sans text-[11px] sm:text-sm uppercase tracking-tight font-normal text-moon-ivory">
                  <span className="font-extralight">01</span> &nbsp;SIGNATURE FINANCIAL BENEFIT
                </p>
              </div>
            </div>

            {/* End-to-end dashed border (Figma: #FFF 50% opacity, 0.5px weight, 10px dash, 10px gap) */}
            <div
              className="w-full h-[0.5px] mb-6 md:mb-10"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5) 50%, transparent 50%)`,
                backgroundSize: `20px 0.5px`,
                backgroundRepeat: `repeat-x`,
              }}
            />

            {/* Center numbers and horizontal SVG arrow */}
            <div className="px-6 sm:px-8">
              <div className="flex flex-col md:flex-row items-center justify-center py-4 md:py-10 gap-6 md:gap-12 w-full mx-auto">
                {/* Left: ALLOCATE + 1,00,000 */}
                <div className="flex flex-col items-center md:items-start gap-1">
                  <p className="font-sans text-xs sm:text-sm uppercase tracking-tight font-light text-moon-ivory/40">
                    ALLOCATE
                  </p>
                  <p
                    className="font-display text-moon-ivory/40 leading-none tracking-[-0.03em]"
                    style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)' }}
                  >
                    1,00,000
                  </p>
                </div>

                {/* Middle: Long horizontal arrow */}
                <div className="flex items-center justify-center shrink-0 py-1 md:py-0 px-2 md:px-6">
                  <svg width="140" height="16" viewBox="0 0 140 16" fill="none" className="w-20 sm:w-32 md:w-44 h-4 text-moon-ivory/35">
                    <line x1="0" y1="8" x2="132" y2="8" stroke="currentColor" strokeWidth="1" />
                    <path d="M126 2.5L134 8L126 13.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Right: 1,15,000 + TREATMENT VALUE RECEIVED */}
                <div className="flex flex-col items-center md:items-start gap-1">
                  <p
                    className="font-display text-moon-ivory leading-none tracking-[-0.03em]"
                    style={{ fontSize: 'clamp(3rem, 7.5vw, 6.8rem)' }}
                  >
                    1,15,000
                  </p>
                  <p className="font-sans text-xs sm:text-sm uppercase tracking-tight font-light text-moon-ivory/50">
                    TREATMENT VALUE RECEIVED
                  </p>
                </div>
              </div>

              {/* Bottom text & button */}
              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
                <p className="font-sans text-moon-ivory/50 font-light text-sm sm:text-base leading-[1.7] max-w-full sm:max-w-[360px]">
                  Secure comprehensive care value across all treatments. Your allocation credited directly to your 22Luna client profile, simplifying payments across subsequent visits.
                </p>
                <Link
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-moon-ivory text-botanical font-sans text-xs sm:text-sm capitalize tracking-tight px-6 py-3 transition-all duration-300 hover:bg-moon-ivory/90 group shrink-0 w-full sm:w-auto whitespace-nowrap"
                >
                  Enquire About this Benefit
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </TicketCard>

        {/* CARD 02 — Referral (dark navy) */}
        <TicketCard
          bg="#1B2A3B"
          stickyTop="120px"
          zIndex={20}
          index={1}
          progress={scrollYProgress}
        >
          <div className="pt-6 sm:pt-8 pb-7 sm:pb-9">
            {/* Top header text */}
            <div className="px-6 sm:px-8 pb-4 sm:pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-sans text-[11px] sm:text-sm uppercase tracking-tight font-normal text-moon-ivory">
                  <span className="font-extralight">THE LUNA+</span> &nbsp;PRIVILEGES
                </p>
                <p className="font-sans text-[11px] sm:text-sm uppercase tracking-tight font-normal text-moon-ivory">
                  <span className="font-extralight">02</span> &nbsp;REFERRAL ADVANTAGE
                </p>
              </div>
            </div>

            {/* End-to-end dashed border (Figma: #FFF 50% opacity, 0.5px weight, 10px dash, 10px gap) */}
            <div
              className="w-full h-[0.5px] mb-6 md:mb-10"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5) 50%, transparent 50%)`,
                backgroundSize: `20px 0.5px`,
                backgroundRepeat: `repeat-x`,
              }}
            />

            {/* Center-aligned: 20% SVG + text side by side */}
            <div className="px-6 sm:px-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 py-4 md:py-10 max-w-fit mx-auto">
                <div className="shrink-0 w-[160px] sm:w-[220px] md:w-[320px] lg:w-[380px] flex items-center justify-center">
                  <Image
                    src={TWENTY_PCT_SVG}
                    alt="20% Off"
                    width={380}
                    height={225}
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center">
                  <p className="font-sans text-xs sm:text-sm uppercase tracking-tight font-light text-moon-ivory/40 mb-2 leading-tight">
                    REFER SOMEONE<br className="hidden md:block" /> YOU CARE ABOUT.
                  </p>
                  <h2
                    className="font-display text-moon-ivory uppercase leading-[0.95] tracking-[-0.03em]"
                    style={{ fontSize: 'clamp(2rem, 4.2vw, 3.8rem)' }}
                  >
                    Your Next<br />Signature<br />Treatment
                  </h2>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
                <p className="font-sans text-moon-ivory/50 font-light text-sm sm:text-base leading-[1.7] max-w-full sm:max-w-[360px]">
                  Share the 22Luna experience with someone you care about and enjoy 20% off your next signature treatment.
                </p>
                <Link
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-moon-ivory text-midnight font-sans text-xs sm:text-sm capitalize tracking-tight px-6 py-3 transition-all duration-300 hover:bg-moon-ivory/90 group shrink-0 w-full sm:w-auto whitespace-nowrap"
                >
                  Enquire About this Benefit
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </TicketCard>

      </div>

      {/* SECTION 05 — HOW LUNA+ WORKS */}
      <section className="bg-[#F5F0E8] py-16 md:py-24 px-6 sm:px-10 lg:px-16 border-t border-charcoal/8">
        <div className="max-w-site mx-auto">
          {/* Header */}
          <div className="max-w-[620px] mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease }}
              className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.32em] font-medium text-botanical mb-3"
            >
              HOW LUNA+ WORKS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-display text-charcoal uppercase leading-[1.0] tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)' }}
            >
              MAKE MORE OF YOUR<br />LUNA+ JOURNEY.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="font-sans text-charcoal/60 font-light text-sm sm:text-base leading-[1.7] tracking-tight max-w-[460px]"
            >
              A simple way to enjoy more value from your continued care at 22Luna.
            </motion.p>
          </div>

          {/* Three Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 pt-2">
            {/* Step 01 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="border-t border-charcoal/15 pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-botanical text-2xl sm:text-3xl block mb-4">
                  01
                </span>
                <h3 className="font-display text-charcoal uppercase tracking-tight text-lg sm:text-xl mb-2">
                  JOIN
                </h3>
              </div>
              <p className="font-sans text-charcoal/60 font-light text-sm sm:text-base leading-[1.7] tracking-tight mt-1 max-w-[280px]">
                Choose to participate in Luna+ and activate your client privileges.
              </p>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="border-t border-charcoal/15 pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-botanical text-2xl sm:text-3xl block mb-4">
                  02
                </span>
                <h3 className="font-display text-charcoal uppercase tracking-tight text-lg sm:text-xl mb-2">
                  ENJOY
                </h3>
              </div>
              <p className="font-sans text-charcoal/60 font-light text-sm sm:text-base leading-[1.7] tracking-tight mt-1 max-w-[280px]">
                Your allocation is credited directly to your client profile for treatments.
              </p>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="border-t border-charcoal/15 pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-botanical text-2xl sm:text-3xl block mb-4">
                  03
                </span>
                <h3 className="font-display text-charcoal uppercase tracking-tight text-lg sm:text-xl mb-2">
                  REFER
                </h3>
              </div>
              <p className="font-sans text-charcoal/60 font-light text-sm sm:text-base leading-[1.7] tracking-tight mt-1 max-w-[280px]">
                Share the 22Luna experience with others and unlock your referral benefit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — FINAL LUNA+ CTA */}
      <section className="relative w-full bg-limestone py-20 md:py-28 px-6 sm:px-10 lg:px-16 border-t border-charcoal/8 overflow-hidden">
        <div className="max-w-site mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-2 font-sans text-xs sm:text-sm uppercase tracking-tight font-normal text-botanical mb-4"
          >
            <Crown size={15} strokeWidth={1.8} className="text-botanical shrink-0" />
            <span>LUNA+</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="font-display text-charcoal uppercase leading-[1.0] tracking-tight max-w-[640px] mb-5"
            style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.75rem)' }}
          >
            READY TO MAKE MORE<br />OF YOUR LUNA JOURNEY?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="font-sans text-charcoal/60 font-light text-sm sm:text-base leading-[1.7] tracking-tight max-w-[420px] mb-8"
          >
            Discover the benefits of Luna+ and speak with our team to learn more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-botanical text-moon-ivory font-sans text-xs sm:text-sm uppercase tracking-tight px-8 py-4 transition-all duration-300 hover:bg-botanical/90 group"
            >
              ENQUIRE ABOUT LUNA+
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TERMS — Limestone background */}
      <div className="bg-limestone border-t border-charcoal/8 px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-sans text-stone-gray/30 text-[10px] font-light tracking-wide">
          *Referral benefit subject to terms &amp; conditions. Luna+ is available to eligible 22Luna clients.
        </p>
        <Link
          href="/terms-of-use"
          className="font-sans text-stone-gray/30 text-[10px] font-light underline underline-offset-2 hover:text-stone-gray/55 transition-colors shrink-0"
        >
          Terms of Use &rarr;
        </Link>
      </div>

      <Footer />
    </main>
  );
}
