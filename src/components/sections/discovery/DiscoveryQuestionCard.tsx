'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { QuestionOption } from '@/lib/guided-discovery-data';

export interface DiscoveryQuestionCardProps {
  option: QuestionOption;
  isSelected: boolean;
  onSelect: (optionId: string) => void;
  shortcutIndex?: number;
  className?: string;
}

export function DiscoveryQuestionCard({
  option,
  isSelected,
  onSelect,
  shortcutIndex,
  className,
}: DiscoveryQuestionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(option.id)}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={cn(
        'group relative w-full text-left rounded-[4px] p-6 sm:p-7 border transition-all duration-300 flex items-start justify-between gap-4 cursor-pointer select-none arch-niche-glow',
        isSelected
          ? 'bg-moon-ivory border-botanical shadow-md ring-1 ring-botanical/20'
          : 'bg-soft-ivory/70 hover:bg-soft-ivory border-charcoal/10 hover:border-charcoal/25 luna-soft-shadow',
        className
      )}
    >
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-3">
          {shortcutIndex !== undefined && (
            <span className="w-5 h-5 rounded-full border border-charcoal/15 flex items-center justify-center font-sans text-[0.62rem] text-stone-gray font-medium group-hover:border-botanical group-hover:text-botanical transition-colors">
              {shortcutIndex + 1}
            </span>
          )}
          <h3 className="font-display text-charcoal text-[1.1rem] sm:text-[1.25rem] leading-tight tracking-tight uppercase group-hover:text-botanical transition-colors duration-300">
            {option.label}
          </h3>
        </div>

        <p className="font-sans text-stone-gray text-[0.85rem] leading-[1.7] font-light">
          {option.description}
        </p>
      </div>

      {/* Selected Indicator Circle */}
      <div
        className={cn(
          'w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 mt-1',
          isSelected
            ? 'border-botanical bg-botanical text-moon-ivory'
            : 'border-charcoal/20 group-hover:border-botanical/50'
        )}
      >
        {isSelected && <Check size={13} strokeWidth={2.5} />}
      </div>
    </motion.button>
  );
}
