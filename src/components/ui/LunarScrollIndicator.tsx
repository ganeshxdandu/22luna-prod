'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export function LunarScrollIndicator() {
  const [mounted, setMounted] = React.useState(false);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Calculate circular SVG dashoffset for 360-degree moon phase ring
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [100, 0]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 bg-moon-ivory/80 backdrop-blur-md border border-charcoal/10 rounded-full px-3.5 py-2 shadow-sm select-none"
    >
      {/* Tiny Lunar Phase SVG Ring */}
      <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Base hairline circle */}
          <path
            className="text-charcoal/15"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Progress fill ring */}
          <motion.path
            className="text-botanical"
            strokeDasharray="100, 100"
            style={{ strokeDashoffset }}
            strokeWidth="2.5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        {/* Center tiny glowing core */}
        <span className="absolute w-1 h-1 rounded-full bg-botanical opacity-80" />
      </div>

      {/* Label */}
      <span className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-stone-gray font-medium">
        Luna Phase
      </span>
    </motion.div>
  );
}
