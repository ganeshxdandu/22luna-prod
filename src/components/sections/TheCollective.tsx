'use client';

import * as React from 'react';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: 'Dr. Devanjali', 
    role: 'Orthodontist',
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785294011/devanjali_lzfmlh.png'
  },
  { 
    name: 'Dr. Iqbal', 
    role: 'Orthodontist' 
  },
  { 
    name: 'Dr. Romir', 
    role: 'Maxillo Surgeon',
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785293977/romir_hx6qtx.png'
  },
  { 
    name: 'Dr. Fatima', 
    role: 'Endodontist' 
  },
  { 
    name: 'Dr. Anirban', 
    role: 'Periodontist',
    image: 'https://res.cloudinary.com/dz5xgcfj/image/upload/v1785294034/anirban_snoaqm.png'
  },
];

export interface TheCollectiveProps {
  className?: string;
}

export function TheCollective({ className }: TheCollectiveProps) {
  return (
    <section
      id="the-collective"
      className={cn('relative w-full bg-moon-ivory', className)}
    >
      {/* ── Main Content Container: Expanded vertical padding, standard horizontal padding (px-6 md:px-8) ── */}
      <div className="max-w-site mx-auto w-full pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16 px-6 md:px-8 flex flex-col gap-12">
        
        {/* Header Block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={{ delay: 0.1 }}
          className="flex flex-col items-start text-left"
        >
          <h2 className="font-display uppercase leading-[1.05] tracking-[-0.03em] text-[28px] sm:text-[34px] lg:text-[40px]">
            <span className="text-charcoal inline-block mr-2">The</span>
            <span className="text-botanical font-normal inline-block">Collective.</span>
          </h2>
          <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] font-light mt-3">
            A multidisciplinary team united by one philosophy.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.15 + index * 0.08 }}
              className="flex flex-col items-start w-full group"
            >
              {/* Photo Box (Brand green placeholder bg fallback, or Doctor Image if provided) */}
              <div className="w-full aspect-[4/5] bg-[#2E4A40] rounded-[2px] shadow-sm overflow-hidden select-none transition-transform duration-500 group-hover:scale-[1.01] relative">
                {member.image ? (
                  <CloudinaryImage
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center"
                  />
                ) : (
                  /* Fallback pattern / background */
                  <div className="w-full h-full opacity-40 mix-blend-overlay bg-gradient-to-tr from-charcoal to-transparent" />
                )}
              </div>

              {/* Doctor Details */}
              <div className="flex justify-between items-center w-full mt-4 border-t border-charcoal/5 pt-3">
                <span className="font-sans text-[13px] sm:text-[14px] font-medium text-charcoal tracking-tight">
                  {member.name}
                </span>
                <span className="font-sans text-[11px] sm:text-[12px] text-stone-gray font-light uppercase tracking-wide">
                  {member.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
