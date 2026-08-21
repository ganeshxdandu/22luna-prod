"use client";

import * as React from "react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { DOCTOR_PROFILES, type DoctorProfile } from "@/lib/doctorData";
import { DoctorProfileOverlay } from "./DoctorProfileOverlay";

export interface TheCollectiveProps {
    className?: string;
}

export function TheCollective({ className }: TheCollectiveProps) {
    const [selectedDoctor, setSelectedDoctor] = React.useState<DoctorProfile | null>(null);

    const handleOpenProfile = (doctor: DoctorProfile) => {
        setSelectedDoctor(doctor);
    };

    const handleCloseProfile = () => {
        setSelectedDoctor(null);
    };

    return (
        <>
            <section
                id="the-collective"
                className={cn("relative w-full bg-moon-ivory", className)}
            >
                {/* ── Main Content Container ── */}
                <div className="max-w-site mx-auto w-full pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16 px-6 md:px-8 flex flex-col gap-12">
                    {/* Header Block */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={{ delay: 0.1 }}
                        className="flex flex-col items-start text-left"
                    >
                        <h2 className="font-display uppercase leading-[1.05] tracking-[-0.03em] text-[28px] sm:text-[34px] lg:text-[40px]">
                            <span className="text-charcoal inline-block mr-2">
                                The
                            </span>
                            <span className="text-botanical font-normal inline-block">
                                Collective.
                            </span>
                        </h2>
                        <p className="font-sans text-stone-gray text-[15px] sm:text-base font-light mt-3">
                            A multidisciplinary team united by one philosophy.
                        </p>
                    </motion.div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {DOCTOR_PROFILES.map((member, index) => (
                            <motion.div
                                key={member.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={{ delay: 0.15 + index * 0.08 }}
                                onClick={() => handleOpenProfile(member)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleOpenProfile(member);
                                    }
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label={`View profile for ${member.name}, ${member.specialty}`}
                                className="flex flex-col items-start w-full group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-botanical focus-visible:ring-offset-2 rounded-[2px]"
                            >
                                {/* Photo Box with Subtle VIEW PROFILE Overlay */}
                                <div className="w-full aspect-[4/5] bg-[#2E4A40] rounded-[2px] shadow-sm overflow-hidden select-none relative">
                                    {member.image ? (
                                        <CloudinaryImage
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        />
                                    ) : (
                                        /* Fallback pattern for doctors without photo */
                                        <div className="w-full h-full opacity-40 mix-blend-overlay bg-gradient-to-tr from-charcoal to-transparent transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                                    )}

                                    {/* Subtle Editorial VIEW PROFILE Badge */}
                                    <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-moon-ivory/95 text-charcoal font-sans text-xs uppercase tracking-tight font-medium shadow-sm">
                                            View Profile
                                            <ArrowUpRight size={13} className="text-botanical transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </span>
                                    </div>
                                </div>

                                {/* Doctor Details */}
                                <div className="flex justify-between items-center w-full mt-4 border-t border-charcoal/5 pt-3">
                                    <div className="flex flex-col">
                                        <span className="font-sans text-[14px] sm:text-[15px] font-medium text-charcoal tracking-tight group-hover:text-botanical transition-colors">
                                            {member.name}
                                        </span>
                                        <span className="font-sans text-xs text-stone-gray font-light uppercase tracking-tight mt-0.5">
                                            {member.specialty}
                                        </span>
                                    </div>
                                    <span className="text-charcoal/30 group-hover:text-botanical transition-colors">
                                        <ArrowUpRight size={15} />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctor Profile Overlay Modal */}
            <DoctorProfileOverlay
                doctor={selectedDoctor}
                doctors={DOCTOR_PROFILES}
                isOpen={selectedDoctor !== null}
                onClose={handleCloseProfile}
                onSelectDoctor={(doctor) => setSelectedDoctor(doctor)}
            />
        </>
    );
}
