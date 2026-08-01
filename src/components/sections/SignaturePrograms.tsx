"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { cn } from "@/lib/utils";
import { fadeIn, fadeUp } from "@/lib/animations";

interface ProgramItem {
    id: string;
    title: string;
    description: string;
    publicId: string;
}

// ─────────────────────────────────────────────────────────
// 👇 PASTE YOUR CLOUDINARY PUBLIC IDs FOR EACH PROGRAM HERE
// ─────────────────────────────────────────────────────────
const PROGRAMS: ProgramItem[] = [
    {
        id: "01",
        title: "Skin",
        description: "Prescription facials, lasers & regenerative skin care.",
        publicId: "skin_qo9vhn", // Your skin image public ID (Initially loaded)
    },
    {
        id: "02",
        title: "Hair",
        description: "Medical hair restoration and scalp health.",
        publicId: "hair_v9hkrz", // Hair image public ID
    },
    {
        id: "03",
        title: "Dental",
        description: "Smile design and cosmetic dentistry.",
        publicId: "dental_fpthem", // Dental image public ID
    },
    {
        id: "04",
        title: "Wellness & IV",
        description: "IV therapy and longevity programs.",
        publicId: "reviv", // Wellness image public ID
    },
];
// ─────────────────────────────────────────────────────────

// Map care category item IDs to their corresponding landing page anchors
const getProgramSectionUrl = (id: string): string => {
    if (id === "01") return "/treatments#skin-category";
    if (id === "02") return "/treatments#hair-category";
    if (id === "03") return "/treatments#dental-category";
    if (id === "04") return "/treatments#wellness-category";
    return "/treatments";
};

export interface SignatureProgramsProps {
    className?: string;
}

export function SignaturePrograms({ className }: SignatureProgramsProps) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

    React.useEffect(() => {
        let observer: IntersectionObserver | null = null;

        const initObserver = () => {
            if (observer) {
                observer.disconnect();
            }

            // Only activate scroll observer on mobile/tablet (viewport < 1024px)
            if (window.innerWidth < 1024) {
                const observerOptions = {
                    root: null,
                    rootMargin: "-42% 0px -42% 0px", // focus on the middle vertical band
                    threshold: 0,
                };

                observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = itemRefs.current.indexOf(entry.target as HTMLAnchorElement);
                            if (index !== -1) {
                                setActiveIndex(index);
                            }
                        }
                    });
                }, observerOptions);

                itemRefs.current.forEach((ref) => {
                    if (ref) observer?.observe(ref);
                });
            }
        };

        initObserver();

        window.addEventListener("resize", initObserver);
        return () => {
            window.removeEventListener("resize", initObserver);
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <section
            className={cn(
                "bg-soft-ivory py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 w-full select-none",
                className,
            )}
        >
            <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* ── Left Content: Heading & List ── */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    {/* Section Header */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-10 md:mb-16"
                    >
                        <span className="text-[0.75rem] tracking-[0.2em] text-stone-gray uppercase block mb-3 font-sans font-medium">
                            Care Categories
                        </span>
                        <h2 className="font-display leading-[1.05] tracking-tight text-charcoal">
                            <span className="block text-[2rem] md:text-[2.5rem] font-light">
                                OUR SIGNATURE
                            </span>
                            <span className="block text-[2rem] md:text-[2.5rem] text-botanical font-medium">
                                PROGRAMS
                            </span>
                        </h2>
                    </motion.div>

                    {/* Program Accordion-styled Rows */}
                    <div className="flex flex-col border-t border-charcoal/10">
                        {PROGRAMS.map((program, idx) => {
                            const isActive = activeIndex === idx;
                            const targetUrl = getProgramSectionUrl(program.id);
                            return (
                                <Link
                                    key={program.id}
                                    ref={(el) => { itemRefs.current[idx] = el; }}
                                    href={targetUrl}
                                    className="border-b border-charcoal/10 py-6 md:py-8 px-4 sm:px-6 md:px-8 cursor-pointer transition-all duration-500 relative block group"
                                    onMouseEnter={() => setActiveIndex(idx)}
                                >
                                    {/* Background Hover Highlight Slide */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-charcoal/[0.02] scale-y-0 origin-bottom transition-transform duration-500 pointer-events-none",
                                            isActive &&
                                                "scale-y-100 origin-top",
                                        )}
                                    />

                                    <div className="flex items-start justify-between relative z-10">
                                        <div className="flex flex-col gap-2 max-w-[70%]">
                                            {/* Program Title */}
                                            <h3
                                                className={cn(
                                                    "font-display text-2xl md:text-[2rem] tracking-tight transition-colors duration-500 leading-tight",
                                                    isActive
                                                        ? "text-charcoal"
                                                        : "text-charcoal/40 group-hover:text-charcoal/70",
                                                )}
                                            >
                                                {program.title.toUpperCase()}
                                            </h3>
                                            {/* Description */}
                                            <p
                                                className={cn(
                                                    "text-xs md:text-sm font-sans font-light tracking-wide transition-all duration-500",
                                                    isActive
                                                        ? "text-stone-gray opacity-100 max-h-12 translate-y-0"
                                                        : "text-stone-gray/60 opacity-60 md:opacity-0 md:max-h-0 md:-translate-y-2 overflow-hidden",
                                                )}
                                            >
                                                {program.description}
                                            </p>
                                        </div>

                                        {/* Program Number */}
                                        <span
                                            className={cn(
                                                "font-display text-2xl md:text-3xl font-light tracking-wide transition-colors duration-500 leading-none",
                                                isActive
                                                    ? "text-charcoal/80"
                                                    : "text-charcoal/10 group-hover:text-charcoal/30",
                                            )}
                                        >
                                            {program.id}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* ── Right Content: Display Active Image ── */}
                <div className="lg:col-span-5 w-full flex justify-center">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full aspect-[4/5] relative rounded-sm overflow-hidden bg-charcoal/5 group shadow-sm border border-charcoal/5"
                    >
                        {/* Animated cross-fade between active program images */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <CloudinaryImage
                                    src={PROGRAMS[activeIndex].publicId}
                                    alt={PROGRAMS[activeIndex].title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Subtle overlay shading */}
                        <div className="absolute inset-0 bg-charcoal/5 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
