import React from 'react';
import { GraduationCap, Building2 } from 'lucide-react'; // Fallback icons for placeholders
import { motion } from 'framer-motion';

const educationData = [
    {
        institution: "Indian Institute of Information Technology, Una",
        degree: "B.Tech in Information Technology",
        date: "2023 – Present",
        grade: "Current CGPA: 8.43",
        logo: "/iiit-logo.png",
        details: [
            { label: "Relevant Coursework", value: "Data Structures and Algorithms, Database Management System, Operating Systems, Computer Networks, Software Engineering, Software Development Life Cycle (SDLC)" }
        ]
    },
    {
        institution: "Ryan International School, Greater Noida",
        degree: "CBSE(XII), Maths & Computer Science",
        date: "2020 – 2022",
        grade: "91%",
        logo: "/ryan-logo.png",
        details: [
            { label: "Stream", value: "Completed Senior Secondary (Class 12th) with Computer Science as an optional subject." }
        ]
    },
    {
        institution: "Ryan International School, Greater Noida",
        degree: "CBSE(X), All Subjects with Computer Science",
        date: "2019 – 2020",
        grade: "96.8%",
        logo: "/ryan-logo.png",
        details: [
            { label: "Academics", value: "Completed High School (Class 10th) with outstanding academic performance." }
        ]
    }
];

const EducationCard = ({ data }) => {
    return (
        <motion.div variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-6 mb-6 flex flex-col md:flex-row gap-6 hover:border-[var(--color-accent)] transition-colors duration-300">
            {/* Left/Top: Logo */}
            <div className="w-[50px] h-[50px] flex-shrink-0 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                {data.logo ? (
                    <img src={data.logo} alt={data.institution} className="w-full h-full object-contain" />
                ) : (
                    <Building2 size={24} className="text-[#0f0f0f]" />
                )}
            </div>

            {/* Middle & Right Content */}
            <div className="flex flex-col flex-1 w-full">
                {/* Header Row: Title & Date */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                    <div>
                        <h4 className="text-[var(--color-text-primary)] text-[20px] font-bold leading-snug">
                            {data.institution}
                        </h4>
                        <p className="text-[var(--color-text-secondary)] text-[16px] font-medium mt-1">
                            {data.degree}
                        </p>
                    </div>
                    {/* Right/Bottom: Date Range */}
                    <div className="flex-shrink-0 mt-2 md:mt-0">
                        <span className="text-[#f97316] text-[14px] font-semibold bg-[#f97316]/10 px-3 py-1 rounded-full whitespace-nowrap">
                            {data.date}
                        </span>
                    </div>
                </div>

                {/* Grade display */}
                {data.grade && (
                    <div className="mt-3">
                        <p className="text-[15px]">
                            <span className="text-[#888888]">Grade: </span>
                            <span className="text-[#3b82f6] font-medium">{data.grade}</span>
                        </p>
                    </div>
                )}

                {/* Details List */}
                <div className="mt-4">
                    <ul className="flex flex-col gap-2">
                        {data.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-[16px]">
                                <span className="text-[var(--color-accent)] mr-3 mt-1 text-sm">●</span>
                                <p className="text-[var(--color-text-primary)] leading-relaxed">
                                    <span className="font-semibold text-[var(--color-text-primary)]">{detail.label}: </span>
                                    {detail.value}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="relative scroll-mt-32">
            {/* Header */}
            <motion.h3
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.8 }}
                className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-text-primary)] leading-[0.9] tracking-tight uppercase mb-12"
            >
                EDUCATION
            </motion.h3>

            {/* Education Cards */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="flex flex-col"
            >
                {educationData.map((edu, index) => (
                    <EducationCard key={index} data={edu} />
                ))}
            </motion.div>
        </section>
    );
};

export default Education;
