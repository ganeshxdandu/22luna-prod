'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Paperclip,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { fadeUp, fadeIn } from '@/lib/animations';

// ─────────────────────────────────────────────────────────────────────────────
// DATA — single source of truth for role list + dropdown
// ─────────────────────────────────────────────────────────────────────────────

const ROLES = [
  { id: '01', label: 'Front Desk' },
  { id: '02', label: 'Body Therapist' },
  { id: '03', label: 'Dermatologist' },
  { id: '04', label: 'Nutritionist' },
  { id: '05', label: 'Other Clinical & Wellness Roles' },
] as const;

type RoleLabel = (typeof ROLES)[number]['label'];

const CONTACT_INFO = {
  email: { value: '22lunaskin@gmail.com', href: 'mailto:22lunaskin@gmail.com' },
  phone: { value: '+91 89717 25522',       href: 'tel:+918971725522' },
  whatsapp: {
    value: '+91 89717 25522',
    href: 'https://wa.me/918971725522?text=Hi%2C%20I%20am%20interested%20in%20career%20opportunities%20at%2022Luna.',
  },
  instagram: { value: '@22lunaclinic', href: 'https://www.instagram.com/22lunaclinic/' },
} as const;



// ─────────────────────────────────────────────────────────────────────────────
// IMAGE PLACEHOLDER HELPER
// ─────────────────────────────────────────────────────────────────────────────

function EditorialImagePlaceholder({
  label,
  className,
  src,
}: {
  label: string;
  className?: string;
  src?: string;
}) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-[#E8E4DC] border border-charcoal/8 rounded-[2px] select-none group',
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 text-center pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-botanical/25" />
          <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-stone-gray/50">
            {label}
          </span>
          <span className="font-sans text-[8px] text-stone-gray/35 italic">4:5 editorial crop</span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FORM STATE TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface FormFields {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  role: RoleLabel | '';
  instagram: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: FormFields = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  role: '',
  instagram: '',
  message: '',
};

// ─────────────────────────────────────────────────────────────────────────────
// FORM FIELD COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function FormLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-stone-gray font-medium block mb-2 select-none"
    >
      {children}
      {optional && (
        <span className="ml-2 text-stone-gray/40 normal-case tracking-normal font-light text-[0.6rem]">
          optional
        </span>
      )}
    </label>
  );
}

const baseInput =
  'w-full bg-transparent border-b border-charcoal/15 py-3 font-sans text-[0.88rem] text-charcoal placeholder:text-stone-gray/35 font-light focus:outline-none focus:border-botanical transition-colors duration-300';

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  // Form state
  const [fields, setFields] = React.useState<FormFields>(EMPTY_FORM);
  const [status, setStatus] = React.useState<FormStatus>('idle');
  const [serverError, setServerError] = React.useState<string>('');

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setServerError('');

    try {
      const body = new FormData();
      Object.entries(fields).forEach(([k, v]) => body.append(k, v));

      const res = await fetch('https://formspree.io/f/mljrjlyd', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });
      const json = await res.json();

      if (!res.ok) {
        const msg =
          json?.errors?.[0]?.message ??
          json?.error ??
          'Something went wrong. Please try again.';
        setServerError(msg);
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main className="flex flex-col bg-moon-ivory min-h-screen">
      <Header variant="light" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 01 — HERO                                                           */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="careers-hero"
        className="relative w-full bg-moon-ivory border-b border-charcoal/10 arch-light-wash-top"
      >
        <div className="max-w-site mx-auto w-full px-6 md:px-8 pt-[96px] md:pt-[116px] pb-16 md:pb-20 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Left: Heading */}
          <div className="w-full lg:w-[52%] flex flex-col">

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.05 }}
              className="mb-5"
            >
              <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium">
                Careers
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.18, duration: 1.1 }}
              className="font-display text-charcoal uppercase leading-[1.0] tracking-[-0.03em] text-[2.8rem] sm:text-[3.5rem] lg:text-[4.2rem] font-normal mb-7"
            >
              BUILD THE FUTURE<br />OF 22LUNA<br />WITH US.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.3, duration: 1.0 }}
              className="font-sans text-stone-gray text-[15px] sm:text-[16px] leading-[1.85] font-light max-w-[420px] mb-9"
            >
              We are always open to meeting talented people who share our passion
              for thoughtful, personalised care and exceptional client experiences.
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.42, duration: 0.9 }}
            >
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 rounded-full bg-botanical text-moon-ivory font-sans text-[0.72rem] uppercase px-7 py-3.5 tracking-tight transition-all duration-300 hover:bg-botanical/90 group"
              >
                Apply Now
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right: Editorial Image */}
          <div className="w-full lg:w-[48%] flex justify-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.32, duration: 1.0 }}
              className="w-full max-w-[460px]"
            >
              <EditorialImagePlaceholder
                label="22Luna careers"
                src="https://res.cloudinary.com/dz5xgcfj/image/upload/v1786341458/careers_c6auaq.png"
                className="aspect-[4/5]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 02 — WE ARE OPEN TO HIRING                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="open-roles"
        className="w-full bg-soft-ivory border-b border-charcoal/10 py-20 md:py-28 lg:py-32 px-6 md:px-8"
      >
        <div className="max-w-site mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Left: heading + copy */}
          <div className="w-full lg:w-[44%] shrink-0">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.1 }}
              className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-5"
            >
              Open Roles
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.18, duration: 1.0 }}
              className="font-display text-charcoal uppercase leading-[1.04] tracking-[-0.03em] text-[2.2rem] sm:text-[2.75rem] lg:text-[3.2rem] font-normal mb-6"
            >
              WE ARE OPEN<br />TO HIRING.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.26 }}
              className="font-sans text-stone-gray text-[14px] sm:text-[15px] leading-[1.85] font-light max-w-[380px]"
            >
              We are looking for passionate professionals across clinical, wellness
              and guest experience roles.
            </motion.p>
          </div>

          {/* Right: Role list */}
          <div className="w-full lg:w-[56%] border-t border-charcoal/10">
            {ROLES.map((role, idx) => (
              <motion.div
                key={role.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={{ delay: 0.08 * idx }}
                className="flex items-baseline gap-8 py-6 border-b border-charcoal/10 group cursor-default"
              >
                <span className="font-display text-charcoal/[0.16] text-[0.85rem] font-light select-none tabular-nums shrink-0">
                  {role.id}
                </span>
                <span className="font-display text-charcoal uppercase leading-tight tracking-[-0.01em] text-[1.35rem] sm:text-[1.65rem] lg:text-[1.9rem] font-normal transition-colors duration-300 group-hover:text-botanical">
                  {role.label}
                </span>
              </motion.div>
            ))}

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.45 }}
              className="pt-8"
            >
              <a
                href="#application-form"
                className="font-sans text-[0.72rem] uppercase tracking-wider font-medium text-botanical hover:text-botanical/70 inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors duration-300"
              >
                Submit Your Application
                <ArrowUpRight size={12} strokeWidth={2} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 03 — APPLICATION FORM                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="application-form"
        className="w-full bg-moon-ivory border-b border-charcoal/10 py-20 md:py-28 lg:py-32 px-6 md:px-8"
      >
        <div className="max-w-site mx-auto">

          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 md:mb-16"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4">
              Applications
            </span>
            <h2 className="font-display text-charcoal uppercase leading-[1.04] tracking-[-0.03em] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal mb-4">
              INTERESTED IN<br />JOINING 22LUNA?
            </h2>
            <p className="font-sans text-stone-gray text-[14px] sm:text-[15px] leading-[1.85] font-light max-w-[480px]">
              Tell us a little about yourself and share your CV. Our team will get
              in touch if your profile matches an available opportunity.
            </p>
          </motion.div>

          {/* ── Success State ─────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start gap-5 border border-charcoal/10 rounded-[2px] p-10 md:p-14 bg-soft-ivory max-w-[600px]"
              >
                <CheckCircle2 size={28} className="text-botanical" strokeWidth={1.5} />
                <h3 className="font-display text-charcoal text-[1.4rem] sm:text-[1.7rem] uppercase tracking-tight leading-snug">
                  Application received.
                </h3>
                <p className="font-sans text-stone-gray text-sm leading-[1.8] font-light max-w-[440px]">
                  Thank you for your interest in joining 22Luna. Our team will review
                  your application and get in touch if there is a suitable opportunity.
                </p>
                <div className="w-full border-t border-charcoal/10 pt-5 flex flex-col gap-1">
                  <span className="font-sans text-[0.72rem] uppercase tracking-widest text-stone-gray/60 font-medium">
                    One last step
                  </span>
                  <p className="font-sans text-[0.82rem] text-stone-gray font-light leading-[1.7]">
                    Please email your CV (PDF) to{' '}
                    <a
                      href="mailto:22lunaskin@gmail.com?subject=CV%20Application%20%E2%80%94%2022Luna"
                      className="text-botanical underline underline-offset-2 hover:text-botanical/70 transition-colors duration-200"
                    >
                      22lunaskin@gmail.com
                    </a>{' '}
                    with the subject line{' '}
                    <span className="font-medium text-charcoal">&ldquo;CV Application &mdash; [Your Name]&rdquo;</span>.
                  </p>
                </div>
              </motion.div>
            ) : (
              /* ── Form ──────────────────────────────────────────────────── */
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
                noValidate
              >
                {/* ── Personal Details ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

                  {/* Full Name */}
                  <div className="flex flex-col">
                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      value={fields.fullName}
                      onChange={handleChange}
                      placeholder="Dr. Priya Sharma"
                      className={baseInput}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={baseInput}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={fields.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={baseInput}
                    />
                  </div>

                  {/* Instagram */}
                  <div className="flex flex-col">
                    <FormLabel htmlFor="instagram" optional>Instagram Handle</FormLabel>
                    <input
                      id="instagram"
                      name="instagram"
                      type="text"
                      value={fields.instagram}
                      onChange={handleChange}
                      placeholder="@yourhandle"
                      className={baseInput}
                    />
                  </div>

                  {/* Address — full width */}
                  <div className="flex flex-col md:col-span-2">
                    <FormLabel htmlFor="address">Address</FormLabel>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      autoComplete="street-address"
                      value={fields.address}
                      onChange={handleChange}
                      placeholder="City, State, Country"
                      className={baseInput}
                    />
                  </div>

                  {/* Role Dropdown — full width */}
                  <div className="flex flex-col md:col-span-2">
                    <FormLabel htmlFor="role">Role You&apos;re Interested In</FormLabel>
                    <select
                      id="role"
                      name="role"
                      required
                      value={fields.role}
                      onChange={handleChange}
                      className={cn(
                        baseInput,
                        'appearance-none cursor-pointer',
                        !fields.role && 'text-stone-gray/35'
                      )}
                    >
                      <option value="" disabled>Select a role…</option>
                      {ROLES.map((r) => (
                        <option key={r.id} value={r.label}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message — full width */}
                  <div className="flex flex-col md:col-span-2">
                    <FormLabel htmlFor="message" optional>
                      Message / Anything You&apos;d Like Us To Know
                    </FormLabel>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={fields.message}
                      onChange={handleChange}
                      placeholder="Tell us about your background, aspirations, or anything relevant…"
                      className={cn(
                        baseInput,
                        'resize-none pt-3 border-b-0 border border-charcoal/15 focus:border-botanical rounded-[1px] px-4'
                      )}
                    />
                  </div>
                </div>

                {/* ── CV Instruction ── */}
                <div className="flex items-start gap-4 border border-charcoal/10 rounded-[2px] bg-soft-ivory px-6 py-5">
                  <div className="w-8 h-8 rounded-full bg-botanical/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Paperclip size={14} className="text-botanical" strokeWidth={1.6} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[0.78rem] text-charcoal font-medium">
                      Attach your CV
                    </span>
                    <p className="font-sans text-[0.78rem] text-stone-gray font-light leading-[1.7]">
                      After submitting this form, please email your CV (PDF) to{' '}
                      <a
                        href="mailto:22lunaskin@gmail.com?subject=CV%20Application%20%E2%80%94%2022Luna"
                        className="text-botanical underline underline-offset-2 hover:text-botanical/70 transition-colors duration-200"
                      >
                        22lunaskin@gmail.com
                      </a>{' '}
                      with the subject line{' '}
                      <span className="font-medium text-charcoal">&ldquo;CV Application — [Your Name]&rdquo;</span>.
                    </p>
                  </div>
                </div>

                {/* ── Server Error ── */}
                <AnimatePresence>
                  {status === 'error' && serverError && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-2.5 text-red-500 border border-red-200 rounded-[2px] px-4 py-3.5 bg-red-50/40"
                    >
                      <AlertCircle size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                      <span className="font-sans text-[0.8rem] leading-relaxed">{serverError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Submit ── */}
                <div className="flex items-center gap-6 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full font-sans text-[0.72rem] uppercase px-8 py-4 tracking-tight transition-all duration-300 group',
                      status === 'loading'
                        ? 'bg-botanical/60 text-moon-ivory cursor-not-allowed'
                        : 'bg-botanical text-moon-ivory hover:bg-botanical/90'
                    )}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 04 — DIRECT CONTACT                                                 */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="direct-contact"
        className="w-full bg-soft-ivory border-b border-charcoal/10 py-16 md:py-24 px-6 md:px-8"
      >
        <div className="max-w-site mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: heading */}
          <div className="w-full lg:w-[40%] shrink-0">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-botanical font-medium block mb-4"
            >
              Direct Contact
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.1 }}
              className="font-display text-charcoal uppercase leading-[1.04] tracking-[-0.03em] text-[1.9rem] sm:text-[2.25rem] lg:text-[2.75rem] font-normal mb-4"
            >
              PREFER TO REACH<br />OUT DIRECTLY?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={{ delay: 0.18 }}
              className="font-sans text-stone-gray text-[14px] leading-[1.85] font-light max-w-[340px]"
            >
              You can also contact our team directly regarding career opportunities
              at 22Luna.
            </motion.p>
          </div>

          {/* Right: contact list */}
          <div className="w-full lg:w-[60%] flex flex-col divide-y divide-charcoal/10 border-t border-charcoal/10">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: CONTACT_INFO.email.value,
                href: CONTACT_INFO.email.href,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: CONTACT_INFO.phone.value,
                href: CONTACT_INFO.phone.href,
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: CONTACT_INFO.whatsapp.value,
                href: CONTACT_INFO.whatsapp.href,
                external: true,
              },
            ].map(({ icon: Icon, label, value, href, external }, idx) => (
              <motion.a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={{ delay: 0.08 * idx }}
                className="group flex items-center justify-between gap-6 py-6 transition-colors duration-300 hover:text-botanical"
              >
                <div className="flex items-center gap-5">
                  <div className="w-9 h-9 rounded-full bg-moon-ivory flex items-center justify-center border border-charcoal/8 text-botanical shrink-0 transition-colors duration-300 group-hover:border-botanical/20">
                    <Icon size={16} strokeWidth={1.6} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-stone-gray/60 font-medium">
                      {label}
                    </span>
                    <span className="font-sans text-[0.9rem] text-charcoal font-light transition-colors duration-300 group-hover:text-botanical">
                      {value}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-stone-gray/25 group-hover:text-botanical transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 05 — INSTAGRAM LINK                                                 */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-10 px-6 md:px-8 bg-moon-ivory border-b border-charcoal/10">
        <div className="max-w-site mx-auto flex items-center justify-between gap-6">
          <motion.a
            href={CONTACT_INFO.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-sans text-[0.72rem] uppercase tracking-wider font-medium text-stone-gray hover:text-botanical inline-flex items-center gap-1.5 transition-colors duration-300 group"
          >
            Follow 22Luna on Instagram
            <ArrowUpRight
              size={12}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
          <span className="font-sans text-[0.72rem] text-stone-gray/40 tracking-wide hidden sm:block">
            {CONTACT_INFO.instagram.value}
          </span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
