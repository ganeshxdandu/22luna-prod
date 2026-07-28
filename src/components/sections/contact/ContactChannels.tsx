'use client';

import * as React from 'react';
import { MessageCircle, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

interface Channel {
  title: string;
  icon: React.ElementType;
  value: string;
  href: string;
  description: string;
  isExternal?: boolean;
}

const CHANNELS: Channel[] = [
  {
    title: 'WhatsApp',
    icon: MessageCircle,
    value: '+91 89717 25522',
    href: 'https://wa.me/918971725522',
    description: 'Perfect for quick questions, scheduling appointments, or discreet inquiries.',
    isExternal: true,
  },
  {
    title: 'Phone Call',
    icon: Phone,
    value: '+91 89717 25522',
    href: 'tel:+918971725522',
    description: 'Ideal for speaking directly with our clinic team during opening hours.',
  },
  {
    title: 'Email',
    icon: Mail,
    value: 'care@22luna.com',
    href: 'mailto:care@22luna.com',
    description: 'Best for detailed medical history queries or international patient coordination.',
  },
  {
    title: 'Instagram',
    icon: InstagramIcon,
    value: '@22luna.official',
    href: 'https://instagram.com',
    description: 'Ideal for following our daily sanctuary life, clinical case studies, and philosophy.',
    isExternal: true,
  },
];

export interface ContactChannelsProps {
  className?: string;
}

export function ContactChannels({ className }: ContactChannelsProps) {
  return (
    <section
      id="ways-to-reach-us"
      className={cn('relative w-full bg-soft-ivory border-b border-charcoal/10 py-16 md:py-24', className)}
    >
      <div className="max-w-site mx-auto w-full px-6 md:px-8">

        {/* Header */}
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
              Communication Pathways
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.05] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-normal">
              Ways to reach us.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={{ delay: 0.2 }}
            className="font-sans text-stone-gray text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] font-light w-full lg:w-[50%] lg:max-w-[480px]"
          >
            Choose the communication channel that feels most natural for you. Our team responds promptly across all platforms during clinical hours.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNELS.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.title}
                href={channel.href}
                target={channel.isExternal ? '_blank' : undefined}
                rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={{ delay: 0.08 * idx }}
                className="group bg-moon-ivory border border-charcoal/10 rounded-[2px] p-7 flex flex-col justify-between gap-6 transition-all duration-500 hover:border-charcoal/20 hover:shadow-sm"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-soft-ivory flex items-center justify-center border border-charcoal/8 text-botanical">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <ArrowUpRight size={14} className="text-stone-gray/40 group-hover:text-botanical transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="font-display text-charcoal text-[1.2rem] uppercase tracking-tight font-normal">
                    {channel.title}
                  </h3>

                  <p className="font-sans text-stone-gray text-[0.82rem] leading-[1.7] font-light">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal/8">
                  <span className="font-sans text-[0.78rem] text-botanical font-medium">
                    {channel.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
