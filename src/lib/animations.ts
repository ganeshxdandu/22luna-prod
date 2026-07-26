import { Variants } from 'framer-motion';

/**
 * Editorial transitions using premium cubic-bezier easing.
 * Custom ease-out-quint matching the aesthetic of Apple and Aesop.
 */
const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Fade In animation preset.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    transition: {
      duration: custom?.duration ?? 0.8,
      delay: custom?.delay ?? 0,
      ease: editorialEase,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: editorialEase,
    },
  },
};

/**
 * Fade Up animation preset (Standard editorial entrance).
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? 0.8,
      delay: custom?.delay ?? 0,
      ease: editorialEase,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      ease: editorialEase,
    },
  },
};

/**
 * Stagger Container animation preset.
 * Animates child elements that have hidden/visible variants defined.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (custom?: { staggerChildren?: number; delayChildren?: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom?.staggerChildren ?? 0.12,
      delayChildren: custom?.delayChildren ?? 0,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

/**
 * Slide Left animation preset.
 */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? 0.8,
      delay: custom?.delay ?? 0,
      ease: editorialEase,
    },
  }),
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.5,
      ease: editorialEase,
    },
  },
};

/**
 * Slide Right animation preset.
 */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? 0.8,
      delay: custom?.delay ?? 0,
      ease: editorialEase,
    },
  }),
  exit: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.5,
      ease: editorialEase,
    },
  },
};

/**
 * Scale In animation preset.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom?.duration ?? 0.8,
      delay: custom?.delay ?? 0,
      ease: editorialEase,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.4,
      ease: editorialEase,
    },
  },
};

/**
 * Layout/Page transition preset.
 */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: editorialEase,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.4,
      ease: editorialEase,
    },
  },
};

/**
 * Hover Lift animation preset.
 */
export const hoverLift: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.015,
    transition: {
      duration: 0.4,
      ease: editorialEase,
    },
  },
  tap: {
    scale: 0.99,
    y: -1,
  },
};

/**
 * Hover Fade animation preset.
 */
export const hoverFade: Variants = {
  initial: { opacity: 0.9 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: editorialEase,
    },
  },
};
