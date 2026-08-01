"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { fadeUp, fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface WellnessRevivSectionProps {
    className?: string;
}

const GALLERY_ITEMS = [
    { src: "https://res.cloudinary.com/dz5xgcfj/video/upload/v1785551138/instagram-highlight-316492473298_ovyk7v.mp4", type: "video" },
    { src: "https://res.cloudinary.com/dz5xgcfj/video/upload/v1785551134/instagram-highlight-332119416512_zkg1wm.mp4", type: "video" },
    { src: "https://res.cloudinary.com/dz5xgcfj/video/upload/v1785551134/instagram-highlight-313231872002_jf4tyj.mp4", type: "video" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551134/instagram-highlight-317063136303_jzlmfs.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551133/instagram-highlight-252902476606_pndblc.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551133/instagram-highlight-307112307800_u9ghys.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551132/instagram-highlight-252860349945_lc0vh9.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551131/instagram-highlight-253866337462_hkolke.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551131/instagram-highlight-308192728959_i3craf.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551131/instagram-highlight-309452676821_e6iyia.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551131/instagram-highlight-314307669175_luruos.jpg", type: "image" },
    { src: "https://res.cloudinary.com/dz5xgcfj/image/upload/v1785551130/instagram-highlight-314307703823_sqaq6a.jpg", type: "image" },
];

export function WellnessRevivSection({ className }: WellnessRevivSectionProps) {
    // Distribute the 12 items evenly across 3 columns to loop seamlessly
    const col1 = [GALLERY_ITEMS[0], GALLERY_ITEMS[3], GALLERY_ITEMS[6], GALLERY_ITEMS[9]];
    const col2 = [GALLERY_ITEMS[1], GALLERY_ITEMS[4], GALLERY_ITEMS[7], GALLERY_ITEMS[10]];
    const col3 = [GALLERY_ITEMS[2], GALLERY_ITEMS[5], GALLERY_ITEMS[8], GALLERY_ITEMS[11]];

    const col1Items = [...col1, ...col1];
    const col2Items = [...col2, ...col2];
    const col3Items = [...col3, ...col3];

    return (
        <section
            id="wellness-category"
            className={cn(
                "relative w-full bg-botanical text-moon-ivory overflow-hidden py-20 md:py-32",
                className,
            )}
        >
            {/* Inject vertical marquee animation styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes marquee-down {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                .animate-marquee-up {
                    animation: marquee-up 35s linear infinite;
                }
                .animate-marquee-down {
                    animation: marquee-down 35s linear infinite;
                }
                /* Pause on hover */
                .hover-pause:hover .animate-marquee-up,
                .hover-pause:hover .animate-marquee-down {
                    animation-play-state: paused;
                }
            `}} />

            {/* Subtle background ambient pattern / glow */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23ffffff' stroke-width='1.2'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-site mx-auto w-full px-6 md:px-8 relative z-10">
                <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
                    {/* Partner Tagline Label */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-moon-ivory/20 bg-moon-ivory/5 mb-8"
                    >
                        <Sparkles size={13} className="text-gold" />
                        <span className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-moon-ivory/80 font-medium">
                            Global Wellness Partner Experience
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={{ delay: 0.2 }}
                        className="font-display uppercase leading-[1.08] tracking-[-0.03em] text-[2.2rem] sm:text-[3rem] lg:text-[3.75rem] font-normal mb-8 text-moon-ivory"
                    >
                        Wellness & IV Therapies
                    </motion.h2>

                    {/* Partner Narrative Paragraph */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={{ delay: 0.3 }}
                        className="font-sans text-moon-ivory/80 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.85] font-light mb-12 max-w-[680px]"
                    >
                        To deliver medical-grade intravenous hydration, nutrient
                        therapies, and longevity infusions at the highest
                        international standard, 22Luna has partnered exclusively
                        with{" "}
                        <strong className="font-normal text-moon-ivory">
                            REVIV
                        </strong>{" "}
                        — a globally recognized leader in preventive IV
                        wellness. Every infusion is administered in our private
                        suites under strict medical supervision, ensuring
                        safety, efficacy, and complete serenity.
                    </motion.p>

                    {/* ── Vertical Marquee Gallery Section ── */}
                    <div className="w-full mb-16 md:mb-20 flex flex-col items-center">
                        <div
                            className="w-full h-[450px] md:h-[550px] overflow-hidden relative grid grid-cols-1 md:grid-cols-3 gap-6 hover-pause px-4"
                            style={{
                                maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.5) 18%, rgba(0,0,0,0.85) 28%, black 38%, black 62%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.15) 92%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.5) 18%, rgba(0,0,0,0.85) 28%, black 38%, black 62%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.15) 92%, transparent 100%)",
                            }}
                        >

                            <div className="relative h-full overflow-hidden flex flex-col gap-6">
                                <div className="flex flex-col gap-6 animate-marquee-up">
                                    {col1Items.map((item, idx) => (
                                        <div key={`col1-${idx}`} className="relative aspect-[9/16] rounded-[8px] overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                                            {item.type === "video" ? (
                                                <video
                                                    src={item.src}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <CloudinaryImage src={item.src} alt="REVIV Highlight" fill sizes="(max-width: 768px) 100vw, 320px" className="transition-transform duration-700 group-hover:scale-105" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative h-full overflow-hidden hidden md:flex flex-col gap-6">
                                <div className="flex flex-col gap-6 animate-marquee-down">
                                    {col2Items.map((item, idx) => (
                                        <div key={`col2-${idx}`} className="relative aspect-[9/16] rounded-[8px] overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                                            {item.type === "video" ? (
                                                <video
                                                    src={item.src}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <CloudinaryImage src={item.src} alt="REVIV Highlight" fill sizes="(max-width: 768px) 100vw, 320px" className="transition-transform duration-700 group-hover:scale-105" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative h-full overflow-hidden hidden md:flex flex-col gap-6">
                                <div className="flex flex-col gap-6 animate-marquee-up">
                                    {col3Items.map((item, idx) => (
                                        <div key={`col3-${idx}`} className="relative aspect-[9/16] rounded-[8px] overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                                            {item.type === "video" ? (
                                                <video
                                                    src={item.src}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <CloudinaryImage src={item.src} alt="REVIV Highlight" fill sizes="(max-width: 768px) 100vw, 320px" className="transition-transform duration-700 group-hover:scale-105" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Statistic Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full py-8 border-y border-moon-ivory/15 mt-16 text-center">
                            <div className="flex flex-col items-center gap-1.5">
                                <span className="font-display text-gold text-2xl sm:text-3xl font-light tracking-tight">2,000,000+</span>
                                <span className="font-sans text-[0.7rem] tracking-[0.15em] uppercase text-moon-ivory/60 font-medium">IV Therapies Delivered</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <span className="font-display text-gold text-2xl sm:text-3xl font-light tracking-tight">100+</span>
                                <span className="font-sans text-[0.7rem] tracking-[0.15em] uppercase text-moon-ivory/60 font-medium">Global Locations</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <span className="font-display text-gold text-2xl sm:text-3xl font-light tracking-tight">Since 2013</span>
                                <span className="font-sans text-[0.7rem] tracking-[0.15em] uppercase text-moon-ivory/60 font-medium">Trusted Worldwide</span>
                            </div>
                        </div>
                    </div>

                    {/* Transition CTA */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={{ delay: 0.5 }}
                    >
                        <Link
                            href="https://revivindia.com/iv-therapies"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 rounded-full bg-moon-ivory text-botanical font-sans text-[0.75rem] uppercase font-medium px-8 py-4 tracking-tight transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-sm group"
                        >
                            <span>Continue to REVIV</span>
                            <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
