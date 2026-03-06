import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="relative scroll-mt-32">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-white-300 leading-[0.9] tracking-tight uppercase">
                PROFESSIONAL
                <span className="text-[#4D4D4D]"> EXPERIENCE</span>
            </h3>
            <br />
            <br />
            {/* Experience List */}
            <div className="flex flex-col gap-10">

                {/* Entry 1: Microvision */}
                <div className="flex flex-col border-b border-[#222] pb-8 last:border-0 last:pb-0">

                    {/* Top Row: Company & Icon */}
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[22px] font-semibold text-[#b3ff3b]">
                            Microvision
                        </h3>
                        {/* <ArrowUpRight size={24} className="text-[#f97316] flex-shrink-0" /> */}
                    </div>

                    {/* Sub-header: Role & Date */}
                    <p className="text-[#a3a3a3] text-[16px] font-normal mb-6">
                        Web Development Intern | May 2025 - Jul 2025
                    </p>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-2 list-none p-0 m-0 text-italics">
                        <li className="text-[#e5e5e5] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#f97316]">
                            Engineered a scalable commercial web platform with automated customer inquiry handling.
                        </li>
                        <li className="text-[#e5e5e5] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#f97316]">
                            Built an admin dashboard for efficient product management and streamlined data updates.
                        </li>
                        <li className="text-[#e5e5e5] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#f97316]">
                            Optimized deployment and performance through technical SEO and system tuning.
                        </li>
                        <li className="text-[#e5e5e5] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#f97316]">
                            Delivered clean, maintainable, and scalable code in a collaborative team environment.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;
