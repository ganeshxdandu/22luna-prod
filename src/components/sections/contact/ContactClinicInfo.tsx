'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ContactClinicInfoProps {
  className?: string;
}

export function ContactClinicInfo({ className }: ContactClinicInfoProps) {
  return (
    <section
      id="visit-our-clinic"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-16 md:py-24 lg:py-28', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 pb-12 md:pb-16 border-b border-charcoal/10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
            className="w-full lg:w-[46%]"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Sanctuary Location
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal">
              Visit our clinic.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="w-full lg:w-[50%] lg:max-w-[500px]"
          >
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light">
              22luna was designed as a tranquil sanctuary away from commercial bustle. From private treatment suites to serene greenery, every detail is engineered to ensure privacy, comfort, and peace of mind.
            </p>
          </motion.div>
        </div>

        {/* Information Grid (2x3 editorial layout) */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Address & Landmark */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={{ delay: 0.1 }}
            className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-7 md:p-8 flex flex-col justify-between gap-4"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
              Location & Address
            </span>
            <div className="flex flex-col gap-1.5">
              <p className="font-sans text-charcoal text-[0.95rem] font-medium leading-snug">
                22luna Skin, Hair & Dental Sanctuary
              </p>
              <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.7] font-light">
                #5, Rest House Crescent, Ashok Nagar, Bengaluru 560001
              </p>
              <p className="font-sans text-stone-gray/80 text-[0.78rem] font-light mt-2 pt-2 border-t border-charcoal/8">
                Landmark: Off Kasturba Cross Road, near Coconut Grove
              </p>
            </div>
          </motion.div>

          {/* Card 2: Hours */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={{ delay: 0.15 }}
            className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-7 md:p-8 flex flex-col justify-between gap-4"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
              Opening Hours
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-charcoal text-[0.88rem] font-medium">Tuesday – Sunday</span>
                <span className="font-sans text-stone-gray text-[0.85rem] font-light">10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-charcoal/8 opacity-60">
                <span className="font-sans text-charcoal text-[0.88rem] font-medium">Monday</span>
                <span className="font-sans text-stone-gray text-[0.85rem] font-light">Closed</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Direct Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={{ delay: 0.2 }}
            className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-7 md:p-8 flex flex-col justify-between gap-4"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2">
              <p className="font-sans text-stone-gray text-[0.85rem] font-light">
                Phone: <strong className="font-medium text-charcoal">+91 89717 25522</strong>
              </p>
              <p className="font-sans text-stone-gray text-[0.85rem] font-light">
                Email: <strong className="font-medium text-charcoal">hello@22luna.in</strong>
              </p>
              <p className="font-sans text-stone-gray/80 text-[0.78rem] font-light mt-1 pt-2 border-t border-charcoal/8">
                WhatsApp available for instant queries
              </p>
            </div>
          </motion.div>

          {/* Card 4: Parking & Access */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={{ delay: 0.25 }}
            className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-7 md:p-8 flex flex-col justify-between gap-4"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
              Parking & Access
            </span>
            <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.7] font-light">
              Limited street parking is available on Rest House Crescent. We highly recommend arriving via cab or using the MG Road Metro Station (a 5-minute walk from the clinic).
            </p>
          </motion.div>

          {/* Card 5: Privacy & Accessibility */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={{ delay: 0.3 }}
            className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-7 md:p-8 flex flex-col justify-between gap-4"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
              Privacy & Comfort
            </span>
            <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.7] font-light">
              Individual consultation and treatment suites ensure 100% discretion and a calm, personal experience.
            </p>
          </motion.div>

          {/* Card 6: Medical Standard */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={{ delay: 0.35 }}
            className="bg-moon-ivory border border-charcoal/10 rounded-[2px] p-7 md:p-8 flex flex-col justify-between gap-4"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-botanical font-medium">
              Sterilization Standard
            </span>
            <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.7] font-light">
              Hospital-grade autoclave sterilization and single-use cartridge standards in every room.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
