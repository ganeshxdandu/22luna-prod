'use client';

import * as React from 'react';
import { Navigation, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ContactMapProps {
  className?: string;
}

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.978807530647!2d77.6401083!3d12.9731233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a75f0a4f5f%3A0x6a1b2c3d4e5f6g7h!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

const GOOGLE_MAPS_EXTERNAL_URL =
  'https://maps.google.com/?q=22luna+Skin+Hair+Dental+Sanctuary+Indiranagar+Bengaluru';

export function ContactMap({ className }: ContactMapProps) {
  return (
    <section
      id="find-us"
      className={cn('relative w-full bg-limestone border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8 flex flex-col gap-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.1 }}
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-3">
              Interactive Map
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[1.8rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal">
              Find Us in Indiranagar
            </h2>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href={GOOGLE_MAPS_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-6 py-3 tracking-tight transition-all duration-300 hover:bg-botanical/90"
            >
              <Navigation size={13} />
              Get Directions
            </a>

            <a
              href={GOOGLE_MAPS_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-moon-ivory text-charcoal border border-charcoal/10 font-sans text-[0.72rem] uppercase px-6 py-3 tracking-tight transition-all duration-300 hover:border-charcoal/30"
            >
              <MapPin size={13} className="text-botanical" />
              Open in Google Maps
              <ExternalLink size={11} className="opacity-60" />
            </a>
          </motion.div>
        </div>

        {/* Integrated Map Container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          custom={{ delay: 0.3 }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[2px] overflow-hidden border border-charcoal/10 bg-soft-ivory shadow-sm"
        >
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="22luna Clinic Location Map"
          />
        </motion.div>

      </div>
    </section>
  );
}
