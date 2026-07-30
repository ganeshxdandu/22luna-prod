'use client';

import * as React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  DISCOVERY_QUESTIONS,
  calculateDiscoveryResults,
  type DiscoveryResult,
} from '@/lib/guided-discovery-data';
import { LunarPhaseProgress } from './LunarPhaseProgress';
import { DiscoveryQuestionCard } from './DiscoveryQuestionCard';
import { DiscoveryResultsView } from './DiscoveryResultsView';

export interface GuidedDiscoveryExperienceProps {
  className?: string;
  onClose?: () => void;
}

export function GuidedDiscoveryExperience({ className, onClose }: GuidedDiscoveryExperienceProps) {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [result, setResult] = React.useState<DiscoveryResult | null>(null);

  const currentQuestion = DISCOVERY_QUESTIONS[currentStepIndex];
  const totalSteps = DISCOVERY_QUESTIONS.length;
  const currentSelectedOptionId = selectedAnswers[currentQuestion?.id];

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Calculate final results
      const answerIds = Object.values(selectedAnswers);
      const computedResult = calculateDiscoveryResults(answerIds);
      setResult(computedResult);
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
    setResult(null);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCompleted) return;

      if (e.key === 'ArrowRight' && currentSelectedOptionId) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && currentStepIndex > 0) {
        handlePrev();
      } else if (e.key === 'Enter' && currentSelectedOptionId) {
        handleNext();
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const num = parseInt(e.key, 10) - 1;
        if (currentQuestion && currentQuestion.options[num]) {
          handleSelectOption(currentQuestion.options[num].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStepIndex, currentSelectedOptionId, isCompleted, currentQuestion]);

  // Scroll container or window to top on step transition
  React.useEffect(() => {
    const section = document.getElementById('guided-discovery');
    if (section) {
      let parent = section.parentElement;
      while (parent && parent !== document.body) {
        const overflow = window.getComputedStyle(parent).overflowY;
        if (overflow === 'auto' || overflow === 'scroll') {
          parent.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        parent = parent.parentElement;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStepIndex, isCompleted]);

  return (
    <section
      id="guided-discovery"
      className={cn(
        'relative w-full min-h-[500px] bg-moon-ivory border-b border-charcoal/10 flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-6 md:px-8 select-none',
        className
      )}
    >
      {/* ── Soft Breathing Moonlight Background Glow ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.07, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[650px] sm:w-[800px] aspect-square rounded-full bg-gradient-to-tr from-[#BBA175]/30 via-botanical/20 to-transparent blur-[130px]"
        />
      </div>

      <div className="relative z-10 max-w-site mx-auto w-full flex flex-col items-center">

        {/* Dynamic State 1: Conversational Onboarding Flow */}
        {!isCompleted ? (
          <div className="w-full max-w-[720px] flex flex-col items-center">

            {/* Header Progress & Step Count */}
            <div className="w-full flex items-center justify-between pb-8 mb-8 border-b border-charcoal/10">
              {/* Back button */}
              {currentStepIndex > 0 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 font-sans text-[0.72rem] uppercase tracking-wider text-stone-gray hover:text-botanical transition-colors"
                >
                  <ArrowLeft size={13} />
                  Previous
                </button>
              ) : (
                <span className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-botanical font-medium">
                  Meet Luna · Guided Discovery
                </span>
              )}

              {/* Lunar Phase Progress Indicator */}
              <LunarPhaseProgress
                currentStep={currentStepIndex}
                totalSteps={totalSteps}
              />
            </div>

            {/* Question Transition Animation Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col items-start gap-8"
              >
                {/* Question Heading & Subtitle */}
                <div>
                  <h1 className="font-display text-charcoal uppercase leading-[1.08] tracking-[-0.03em] text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-normal mb-3">
                    {currentQuestion.question}
                  </h1>
                  <p className="font-sans text-stone-gray text-[0.88rem] sm:text-[0.95rem] leading-[1.75] font-light">
                    {currentQuestion.subtitle}
                  </p>
                </div>

                {/* Question Options List */}
                <div className="w-full flex flex-col gap-4">
                  {currentQuestion.options.map((opt, idx) => (
                    <DiscoveryQuestionCard
                      key={opt.id}
                      option={opt}
                      isSelected={currentSelectedOptionId === opt.id}
                      onSelect={handleSelectOption}
                      shortcutIndex={idx}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions Bar */}
            <div className="w-full flex items-center justify-between pt-10 mt-8 border-t border-charcoal/10">
              <span className="font-sans text-[0.7rem] text-stone-gray/70 font-light hidden sm:inline">
                Press <kbd className="px-1.5 py-0.5 border rounded bg-soft-ivory text-[0.65rem]">1-{currentQuestion.options.length}</kbd> or <kbd className="px-1.5 py-0.5 border rounded bg-soft-ivory text-[0.65rem]">Enter</kbd> to choose
              </span>

              <button
                type="button"
                onClick={handleNext}
                disabled={!currentSelectedOptionId}
                className={cn(
                  'ml-auto inline-flex items-center gap-2 rounded-full font-sans text-[0.72rem] uppercase px-7 py-3.5 tracking-tight transition-all duration-300',
                  currentSelectedOptionId
                    ? 'bg-botanical text-moon-ivory hover:bg-botanical/90 shadow-sm cursor-pointer'
                    : 'bg-charcoal/10 text-stone-gray/50 cursor-not-allowed'
                )}
              >
                {currentStepIndex === totalSteps - 1 ? (
                  <>
                    See My Starting Point
                    <Sparkles size={13} />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </div>

          </div>
        ) : (
          /* Dynamic State 2: Personalized Results Summary */
          result && <DiscoveryResultsView result={result} onReset={handleReset} onClose={onClose} />
        )}

      </div>
    </section>
  );
}
