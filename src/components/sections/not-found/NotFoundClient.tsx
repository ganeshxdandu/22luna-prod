'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';

export function NotFoundClient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[calc(100vh-72px)] bg-moon-ivory flex items-center justify-center overflow-hidden py-24 md:py-32 px-6 md:px-8 border-b border-charcoal/10 select-none"
    >
      {/* ── Whimsical Detail 1: Interactive Ambient Moonlight Glow ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ x: springX, y: springY }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[550px] sm:w-[700px] aspect-square rounded-full bg-gradient-to-tr from-[#BBA175]/35 via-botanical/20 to-transparent blur-[110px]"
        />

        {/* Layered Translucent Hairline Circles */}
        <div className="absolute w-[420px] sm:w-[540px] aspect-square rounded-full border border-charcoal/8 pointer-events-none" />
        <div className="absolute w-[280px] sm:w-[380px] aspect-square rounded-full border border-botanical/12 pointer-events-none" />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-[700px] w-full flex flex-col items-center text-center">

        {/* Hidden Delight 1: Page Numbering as "404 ○" */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.1, duration: 0.8 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="font-display text-charcoal/30 text-[1.4rem] tracking-tight font-light">
            404
          </span>
          <span className="w-2.5 h-2.5 rounded-full border border-botanical/50 bg-botanical/20 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-botanical" />
          </span>
          <span className="font-sans text-[0.68rem] tracking-[0.24em] uppercase text-botanical font-medium">
            Wandering Off Course
          </span>
        </motion.div>

        {/* Hero Editorial Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.2, duration: 1.1 }}
          className="font-display text-charcoal uppercase leading-[1.04] tracking-[-0.03em] text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-normal mb-6"
        >
          Nothing here but a little moonlight.
        </motion.h1>

        {/* Reassuring Supporting Copy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.35, duration: 1.0 }}
          className="font-sans text-stone-gray text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light mb-10 max-w-[540px]"
        >
          Even the quietest journeys take an unexpected turn. The page you are looking for does not seem to exist anymore, but let us guide you back somewhere a little more familiar.
        </motion.p>

        {/* Calm Editorial Action Buttons */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.5, duration: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[520px] mb-12"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-6 py-3.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
          >
            <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            Return Home
          </Link>

          <Link
            href="/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-limestone text-charcoal border border-charcoal/10 font-sans text-[0.72rem] uppercase px-6 py-3.5 tracking-tight transition-all duration-300 hover:border-charcoal/30 group"
          >
            Explore Treatments
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="https://wa.me/918971725522?text=I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-moon-ivory text-charcoal border border-charcoal/15 font-sans text-[0.72rem] uppercase px-6 py-3.5 tracking-tight transition-all duration-300 hover:border-charcoal/40 group"
          >
            Book Consultation
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Microcopy Note */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.65, duration: 0.9 }}
          className="pt-6 border-t border-charcoal/10 w-full max-w-[360px]"
        >
          <p className="font-sans text-[0.75rem] text-stone-gray/80 font-light tracking-wide italic">
            &ldquo;The best paths aren&apos;t always the ones we planned.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
