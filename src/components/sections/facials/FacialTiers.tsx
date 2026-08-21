'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Shared Treatment Item Component ─────────────────────────────────────────

function TreatmentRow({
  name,
  index,
  isDark = false,
}: {
  name: string;
  index: number;
  isDark?: boolean;
}) {
  return (
    <div
      className={cn(
        'group flex items-baseline justify-between py-4 sm:py-5 border-b transition-all duration-300',
        isDark
          ? 'border-white/[0.08] hover:border-gold/50'
          : 'border-charcoal/[0.08] hover:border-botanical/50'
      )}
    >
      <div className="flex items-baseline gap-4 sm:gap-6 pr-4">
        <span
          className={cn(
            'font-sans text-xs tracking-tight uppercase shrink-0 font-light',
            isDark ? 'text-white/30' : 'text-charcoal/40'
          )}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className={cn(
            'font-display text-[1.15rem] sm:text-[1.3rem] md:text-[1.4rem] font-light leading-[1.3] transition-colors duration-300',
            isDark
              ? 'text-moon-ivory group-hover:text-gold'
              : 'text-charcoal group-hover:text-botanical'
          )}
        >
          {name}
        </span>
      </div>
      <span
        className={cn(
          'font-sans text-xs uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
          isDark ? 'text-gold' : 'text-botanical'
        )}
      >
        <ArrowUpRight size={14} />
      </span>
    </div>
  );
}

// ─── TIER 01: ESSENTIAL ──────────────────────────────────────────────────────

const ESSENTIAL_TREATMENTS = [
  'Enzyme Radiance Ritual — Foaming Enzyme',
  'HydraFacial Deluxe',
  'Clear Balance Acne Facial — Dermalogica',
  'Mandeluxe Glow Facial',
  'Two for Glow — Fire & Ice + Vitaglow IV',
];

function TierEssential() {
  return (
    <section className="relative w-full bg-moon-ivory border-b border-charcoal/[0.08] py-20 md:py-32 overflow-hidden">
      {/* Editorial Decorative Background Accent */}
      <span
        aria-hidden="true"
        className="absolute -top-12 -right-8 font-display font-light text-charcoal/[0.03] text-[18rem] md:text-[26rem] leading-none select-none pointer-events-none"
      >
        01
      </span>

      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Header Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-botanical/60" />
              <span className="font-sans text-xs tracking-tight uppercase text-botanical font-medium">
                01 / Level One
              </span>
            </div>

            <h3
              className="font-display font-light text-charcoal uppercase leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Essential
              <br />
              <span className="italic text-stone-gray font-light">Facials.</span>
            </h3>

            <p className="font-sans font-light text-stone-gray leading-[1.85] text-[15px] sm:text-base max-w-[440px] mb-8">
              The foundation of radiant skin. Gentle yet effective, these facials maintain hydration, glow, and overall skin health — perfect for regular upkeep and routine skin nutrition.
            </p>

            <div className="flex items-center gap-6 mt-2 pt-6 border-t border-charcoal/[0.06]">
              <div>
                <span className="block font-display text-xl text-charcoal font-light">Upkeep</span>
                <span className="font-sans text-xs uppercase tracking-tight text-stone-gray/60">Category</span>
              </div>
              <div className="w-px h-8 bg-charcoal/[0.08]" />
              <div>
                <span className="block font-display text-xl text-botanical font-light">Luminous</span>
                <span className="font-sans text-xs uppercase tracking-tight text-stone-gray/60">Finish</span>
              </div>
            </div>
          </div>

          {/* Treatment List Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="border-t border-charcoal/[0.1]">
              {ESSENTIAL_TREATMENTS.map((treatment, idx) => (
                <TreatmentRow key={treatment} name={treatment} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TIER 02: THERAPEUTIC ────────────────────────────────────────────────────

const THERAPEUTIC_TREATMENTS = [
  'HydraFacial Platinum',
  'O₂ Derm Oxy Facial — Oxygen Vitality Facial',
  'Dual Element Fire & Ice Cryo Facial',
  'ZO Obagi Hydraboost Therapy Facial',
  'Forma RF Tech Touch Therapy Facial',
  'Elixir PRF Restore Therapy Facial',
];

function TierTherapeutic() {
  return (
    <section className="relative w-full bg-soft-ivory border-b border-charcoal/[0.08] py-20 md:py-32 overflow-hidden">
      {/* Editorial Decorative Background Accent */}
      <span
        aria-hidden="true"
        className="absolute -top-12 -left-8 font-display font-light text-charcoal/[0.03] text-[18rem] md:text-[26rem] leading-none select-none pointer-events-none"
      >
        02
      </span>

      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Treatment List Column */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col">
            <div className="border-t border-charcoal/[0.1]">
              {THERAPEUTIC_TREATMENTS.map((treatment, idx) => (
                <TreatmentRow key={treatment} name={treatment} index={idx} />
              ))}
            </div>
          </div>

          {/* Header Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col lg:pl-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-botanical/60" />
              <span className="font-sans text-xs tracking-tight uppercase text-botanical font-medium">
                02 / Level Two
              </span>
            </div>

            <h3
              className="font-display font-light text-charcoal uppercase leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Therapeutic
              <br />
              <span className="italic text-botanical font-light">Facials.</span>
            </h3>

            <p className="font-sans font-light text-stone-gray leading-[1.85] text-[15px] sm:text-base max-w-[440px] mb-8">
              Targeted solutions for specific concerns like acne, pigmentation, and sensitivity. These physician-calibrated treatments correct, restore, and strengthen the skin barrier over time.
            </p>

            <div className="flex items-center gap-6 mt-2 pt-6 border-t border-charcoal/[0.06]">
              <div>
                <span className="block font-display text-xl text-charcoal font-light">Corrective</span>
                <span className="font-sans text-xs uppercase tracking-tight text-stone-gray/60">Protocol</span>
              </div>
              <div className="w-px h-8 bg-charcoal/[0.08]" />
              <div>
                <span className="block font-display text-xl text-botanical font-light">Restorative</span>
                <span className="font-sans text-xs uppercase tracking-tight text-stone-gray/60">Benefit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TIER 03: PRECISION PERFORMANCE ─────────────────────────────────────────

const PRECISION_STEPS = [
  {
    step: '01',
    title: 'Choose a Treatment',
    desc: 'Select targeted active technology (Laser, RF, Micro-needling, or Cryo).',
  },
  {
    step: '02',
    title: 'Choose a Facial',
    desc: 'Pair with medical-grade dermal infusions and nutrient deep-pore hydration.',
  },
  {
    step: '03',
    title: 'Enhancements & Add-Ons',
    desc: 'Integrate LED chromotherapy, lymphatic drainage, or targeted ampoules.',
  },
  {
    step: '04',
    title: 'Doctor Review',
    desc: 'Aesthetic physician checks skin tolerances and customizes active parameters.',
  },
];

function TierPrecision() {
  return (
    <section className="relative w-full bg-moon-ivory border-b border-charcoal/[0.08] py-20 md:py-32 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -top-12 -right-8 font-display font-light text-charcoal/[0.03] text-[18rem] md:text-[26rem] leading-none select-none pointer-events-none"
      >
        03
      </span>

      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Top Header — Stacked on mobile, Justify-between on desktop */}
        <div className="mb-16 md:mb-20">
          {/* Eyebrow + Red Tag Row */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-botanical/60" />
              <span className="font-sans text-xs tracking-tight uppercase text-botanical font-medium">
                03 / Level Three
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-600 font-sans text-xs tracking-tight uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Prescription Facial
            </span>
          </div>

          {/* Heading (Left) + Paragraph (Right on desktop) */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
            <h3
              className="font-display font-light text-charcoal uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Precision Performance
              <br />
              <span className="italic text-botanical font-light">Facial.</span>
            </h3>

            <p className="font-sans font-light text-stone-gray leading-[1.85] text-[15px] sm:text-base max-w-[500px]">
              High-efficacy, result-driven treatments. Using advanced devices and clinical-grade actives, these facials refine texture, enhance radiance, and address early signs of aging with measurable transformation.
            </p>
          </div>
        </div>

        {/* 4-Stage Architectural Interactive Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PRECISION_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative bg-soft-ivory/60 border border-charcoal/[0.08] p-8 md:p-10 rounded-[2px] flex flex-col justify-between min-h-[270px] group hover:border-botanical/40 hover:bg-soft-ivory transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal/[0.06]">
                  <span className="font-sans text-xs tracking-tight uppercase text-stone-gray/60 font-medium">
                    STAGE {item.step}
                  </span>
                  {idx < PRECISION_STEPS.length - 1 ? (
                    <span className="font-sans text-xs text-charcoal/30 group-hover:text-botanical transition-colors">
                      →
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-botanical" />
                  )}
                </div>

                <h4 className="font-display text-[1.45rem] leading-snug font-light text-charcoal mb-3 group-hover:text-botanical transition-colors duration-300">
                  {item.title}
                </h4>

                <p className="font-sans font-light text-stone-gray text-[14px] sm:text-[15px] leading-[1.7]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-3 border-t border-charcoal/[0.04] flex items-center justify-between text-xs tracking-tight uppercase text-stone-gray/50">
                <span>Phase {item.step}</span>
                <span>Calibrated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 flex justify-start">
          <Link
            href="https://wa.me/918971725522?text=I%20would%20like%20to%20explore%20Precision%20Performance%20Facials."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-tight text-botanical hover:text-charcoal transition-colors duration-300 group font-medium"
          >
            Explore Precision Performance
            <ArrowUpRight size={14} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── TIER 04: SUPER FACIALS ──────────────────────────────────────────────────

function TierSuper() {
  return (
    <section className="relative w-full bg-[#EDE8E0] border-b border-charcoal/[0.08] py-20 md:py-32 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -top-12 -left-8 font-display font-light text-charcoal/[0.03] text-[18rem] md:text-[26rem] leading-none select-none pointer-events-none"
      >
        04
      </span>

      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Header Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-botanical/60" />
              <span className="font-sans text-xs tracking-tight uppercase text-botanical font-medium">
                04 / Level Four
              </span>
            </div>

            <h3
              className="font-display font-light text-charcoal uppercase leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Super
              <br />
              <span className="italic text-botanical font-light">Facials.</span>
            </h3>

            <p className="font-sans font-light text-stone-gray leading-[1.85] text-[15px] sm:text-base max-w-[440px]">
              Next-level treatments that push results further. Concentrated actives and advanced synergistic techniques work simultaneously to deliver dramatic improvements in skin tone, elasticity, and cellular vitality.
            </p>
          </div>

          {/* Bespoke Interactive Combination Architecture */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Modular Option A */}
            <div className="bg-moon-ivory border border-charcoal/[0.1] p-8 md:p-10 rounded-[2px] relative group hover:border-botanical transition-all duration-400">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-charcoal/[0.06]">
                <span className="font-sans text-xs tracking-tight uppercase text-stone-gray/60 font-medium">
                  COMBINATION PATHWAY 01
                </span>
                <span className="font-sans text-xs tracking-tight uppercase text-botanical font-semibold">
                  SYNERGY A
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-2xl md:text-[1.85rem] font-light text-charcoal leading-tight">
                    2 Treatments <span className="text-stone-gray font-light text-xl">+</span> 1 Facial
                  </h4>
                  <p className="font-sans font-light text-stone-gray text-[14px] sm:text-[15px] mt-1">
                    Dual targeted clinical energy procedures merged with intensive restorative hydration.
                  </p>
                </div>
                <span className="font-sans text-xs tracking-tight uppercase px-4 py-2 border border-charcoal/10 rounded-full text-charcoal/70 self-start sm:self-center shrink-0">
                  Select
                </span>
              </div>
            </div>

            {/* Subtle Editorial Divider */}
            <div className="flex items-center gap-4 px-4">
              <div className="flex-1 h-px bg-charcoal/[0.1]" />
              <span className="font-sans text-xs tracking-tight uppercase text-stone-gray/60 font-medium">
                OR
              </span>
              <div className="flex-1 h-px bg-charcoal/[0.1]" />
            </div>

            {/* Modular Option B */}
            <div className="bg-moon-ivory border border-charcoal/[0.1] p-8 md:p-10 rounded-[2px] relative group hover:border-botanical transition-all duration-400">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-charcoal/[0.06]">
                <span className="font-sans text-xs tracking-tight uppercase text-stone-gray/60 font-medium">
                  COMBINATION PATHWAY 02
                </span>
                <span className="font-sans text-xs tracking-tight uppercase text-botanical font-semibold">
                  SYNERGY B
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-2xl md:text-[1.85rem] font-light text-charcoal leading-tight">
                    2 Facials <span className="text-stone-gray font-light text-xl">+</span> 1 Treatment
                  </h4>
                  <p className="font-sans font-light text-stone-gray text-[14px] sm:text-[15px] mt-1">
                    Dual clinical infusion and enzyme renewal layered with one high-impact energy modality.
                  </p>
                </div>
                <span className="font-sans text-xs tracking-tight uppercase px-4 py-2 border border-charcoal/10 rounded-full text-charcoal/70 self-start sm:self-center shrink-0">
                  Select
                </span>
              </div>
            </div>

            {/* Doctor Review Mandatory Gate */}
            <div className="bg-botanical text-moon-ivory p-6 md:p-8 rounded-[2px] flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0 animate-pulse" />
                <div>
                  <h5 className="font-display text-lg tracking-tight font-light">
                    Clinical Doctor Review
                  </h5>
                  <p className="font-sans text-[14px] text-moon-ivory/80 font-light">
                    Every bespoke super facial permutation is finalized by our aesthetic physicians.
                  </p>
                </div>
              </div>
              <span className="font-sans text-xs tracking-tight uppercase text-gold shrink-0 hidden sm:block font-medium">
                Required Step
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TIER 05: ULTRA LUXE ─────────────────────────────────────────────────────

function TierUltraLuxe() {
  return (
    <section className="relative w-full bg-midnight py-24 md:py-36 overflow-hidden border-b border-white/5" style={{ backgroundColor: '#223348' }}>
      <span
        aria-hidden="true"
        className="absolute -top-12 -right-8 font-display font-light text-white/[0.02] text-[18rem] md:text-[26rem] leading-none select-none pointer-events-none"
      >
        05
      </span>

      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Header Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold/50" />
              <span className="font-sans text-xs tracking-tight uppercase text-gold font-medium">
                05 / The Pinnacle
              </span>
            </div>

            <h3
              className="font-display font-light text-moon-ivory uppercase leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
            >
              Ultra Luxe
              <br />
              <span className="italic font-light" style={{ color: '#B9985B' }}>
                Facials.
              </span>
            </h3>

            <p className="font-sans font-light leading-[1.9] text-[15px] sm:text-base max-w-[480px] mb-10 text-moon-ivory/80">
              The ultimate aesthetic indulgence. These facials combine rare bio-actives, proprietary regenerative factors, and advanced machine touch for an unparalleled sensory and results-driven experience, leaving the skin rejuvenated and luminous.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/918971725522?text=I%20would%20like%20to%20reserve%20an%20Ultra%20Luxe%20Facial%20experience."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-midnight font-sans text-xs uppercase tracking-tight px-8 py-4 transition-all duration-300 group font-medium"
              >
                Reserve Ultra Luxe Session
                <ArrowUpRight size={14} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Luxury Editorial Showcase Box */}
          <div className="lg:col-span-6">
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 sm:p-12 rounded-[2px] relative">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <span className="font-sans text-xs tracking-tight uppercase text-gold/90 font-medium">
                  PRIVATE SANCTUARY SUITE
                </span>
                <span className="font-sans text-xs tracking-tight uppercase text-white/40">
                  BY APPOINTMENT ONLY
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-2xl text-moon-ivory font-light mb-1">
                    Multi-Vector Cellular Rejuvenation
                  </h4>
                  <p className="font-sans text-[14px] text-moon-ivory/60 font-light leading-relaxed">
                    Custom combinations of deep tissue RF remodelling, hyperbaric oxygen infusion, autologous growth factors, and cold-laser toning.
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                <div>
                  <h4 className="font-display text-2xl text-moon-ivory font-light mb-1">
                    End-to-End Physician Supervision
                  </h4>
                  <p className="font-sans text-[14px] text-moon-ivory/60 font-light leading-relaxed">
                    Continuous real-time skin diagnostics, bespoke formulation mixing, and post-treatment barrier recovery kits included.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-moon-ivory/50 font-sans text-xs tracking-tight uppercase">
                <span>Tailored Dosing</span>
                <span>Zero Compromise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export interface FacialTiersProps {
  className?: string;
}

export function FacialTiers({ className }: FacialTiersProps) {
  return (
    <div id="facial-tiers" className={className}>
      <TierEssential />
      <TierTherapeutic />
      <TierPrecision />
      <TierSuper />
      <TierUltraLuxe />
    </div>
  );
}
