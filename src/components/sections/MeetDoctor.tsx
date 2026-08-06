"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

const PATTERN_IMAGE_PUBLIC_ID = "pattern_zva0wm.svg";

export interface MeetDoctorProps {
    className?: string;
}

export function MeetDoctor({ className }: MeetDoctorProps) {
    const doctorImageUrl =
        "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785290554/doc_cxeext.png";

    return (
        <section
            className={cn(
                "bg-moon-ivory py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 w-full relative overflow-hidden select-none",
                className,
            )}
        >
            {/* ── Floral Pattern Top Right ── */}
            <div className="absolute top-0 right-0 w-[200px] md:w-[350px] aspect-square opacity-[0.12] select-none pointer-events-none z-0">
                <CloudinaryImage
                    src={PATTERN_IMAGE_PUBLIC_ID}
                    alt="Flora Pattern Decor"
                    fill
                    sizes="(max-width: 768px) 200px, 350px"
                    className="object-contain object-right-top"
                />
            </div>

            <div className="max-w-site mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
                {/* ── Left Side: Arched Image Frame ── */}
                <div className="flex justify-center w-full lg:w-[400px] shrink-0 relative">
                    {/* Subtle soft ambient moonlight halo */}
                    <div className="absolute -inset-4 rounded-t-full bg-[#BBA175]/10 blur-[50px] pointer-events-none" />

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative border border-charcoal/10 rounded-t-full p-3 md:p-4 w-full aspect-[8/11] flex items-center justify-center bg-transparent luna-soft-shadow group"
                    >
                        {/* ── Glassmorphism Rotating Circular Text Badge (Top Left - Balanced Offset) ── */}
                        <div className="absolute -top-2 -left-2 md:-top-5 md:-left-5 w-24 h-24 md:w-32 md:h-32 rounded-full bg-moon-ivory/60 backdrop-blur-[6px] border border-charcoal/5 shadow-sm flex items-center justify-center z-20 select-none transition-all duration-700 hover:scale-110 hover:bg-moon-ivory/75">
                            {/* Rotating SVG Text */}
                            <div className="w-full h-full animate-[spin_30s_linear_infinite] hover:animate-[spin_15s_linear_infinite] transition-all duration-1000">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="w-full h-full"
                                >
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                            fill="none"
                                        />
                                    </defs>
                                    <text className="fill-charcoal font-sans text-[6.5px] font-medium uppercase">
                                        <textPath
                                            href="#circlePath"
                                            startOffset="0%"
                                            textLength="232.5"
                                            lengthAdjust="spacing"
                                        >
                                            • 22LUNA • SKIN • HAIR • DENTAL •
                                            BENGALURU
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Stationary Monogram in Center */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 13 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-charcoal/70 w-4 h-4 md:w-5 md:h-5"
                                >
                                    <path
                                        d="M0.000429727 11.004C0.000429727 7.882 4.92843 6.062 4.92843 2.716C4.92843 0.937997 4.15843 0.167997 2.87043 0.167997C1.54043 0.167997 0.36443 1.442 0.18243 2.688H0.15443V0.251998C1.70843 0.251998 2.18443 -2.38419e-06 3.13643 -2.38419e-06C5.40443 -2.38419e-06 6.07643 1.078 6.07643 2.45C6.07643 5.936 1.90443 6.342 0.40643 10.01H4.38243C5.79643 10.01 5.92943 8.218 5.92943 8.036H5.95043V11.004H0.000429727ZM6.88777 11.004C6.88777 7.882 11.8158 6.062 11.8158 2.716C11.8158 0.937997 11.0458 0.167997 9.75777 0.167997C8.42777 0.167997 7.25177 1.442 7.06977 2.688H7.04177V0.251998C8.59577 0.251998 9.07177 -2.38419e-06 10.0238 -2.38419e-06C12.2918 -2.38419e-06 12.9638 1.078 12.9638 2.45C12.9638 5.936 8.79177 6.342 7.29377 10.01H11.2698C12.6838 10.01 12.8168 8.218 12.8168 8.036H12.8378V11.004H6.88777Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="w-full h-full relative rounded-t-full overflow-hidden bg-charcoal/5">
                            <CloudinaryImage
                                src={doctorImageUrl}
                                alt="Dr. Niharika Mandhyan"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 35vw"
                                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* ── Right Side: Text & Quote ── */}
                <div className="flex flex-col items-center text-center justify-center max-w-[500px] w-full">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center w-full"
                    >
                        {/* Header Title */}
                        <h2 className="font-display text-[2rem] md:text-[2.5rem] tracking-tighter text-charcoal mb-6 leading-tight font-light">
                            Meet{" "}
                            <span className="text-botanical font-medium">
                                Dr. Niharika
                            </span>
                        </h2>

                        {/* Top Double Quotes */}
                        <span className="text-botanical/60 text-[3rem] leading-none select-none font-display font-light block mb-[-12px]">
                            “
                        </span>

                        {/* Quote Body */}
                        <p className="text-stone-gray font-display text-[0.875rem] md:text-[1rem] leading-[1.75] tracking-wide max-w-[500px]">
                            Beautiful skin is never the result of a single
                            treatment. It begins with understanding your
                            lifestyle, your concerns, and the story your skin is
                            telling. Only then do we create a treatment plan
                            that’s uniquely yours.
                        </p>

                        {/* Bottom Double Quotes */}
                        <span className="text-botanical/60 text-[3rem] leading-none select-none font-display font-light block mt-6 mb-6">
                            ”
                        </span>

                        {/* Author details */}
                        <div className="flex flex-col gap-1 items-center mb-10">
                            <span className="font-sans font-medium text-[0.875rem] md:text-[1rem] text-charcoal">
                                Dr. Niharika Mandhyan
                            </span>
                            <span className="font-sans text-[0.75rem] tracking-wider text-stone-gray font-light">
                                Founder, 22 Luna
                            </span>
                        </div>

                        {/* CTA Link */}
                        <Link
                            href="/about#founders-story"
                            className="inline-flex items-center gap-1.5 text-botanical hover:text-charcoal font-sans text-[0.75rem] font-medium uppercase tracking-tight transition-all duration-300 relative group"
                        >
                            Read Full Story
                            <ArrowUpRight
                                size={13}
                                strokeWidth={1.8}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-botanical/30 group-hover:bg-charcoal/30 transition-colors duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
