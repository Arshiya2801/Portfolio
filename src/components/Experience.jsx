import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="relative scroll-mt-32">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-text-primary)] leading-[0.9] tracking-tight uppercase overflow-hidden flex flex-wrap mb-10">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="mr-3"
                >
                    PROFESSIONAL
                </motion.span>
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="text-[#4D4D4D]"
                >
                    EXPERIENCE
                </motion.span>
            </h3>
            <br />
            <br />
            {/* Experience List */}
            <div className="flex flex-col gap-10">

                {/* Entry 1: Microvision */}
                <div className="flex flex-col border-b border-[var(--color-border)] pb-8 last:border-0 last:pb-0">

                    {/* Top Row: Company & Icon */}
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[22px] font-semibold text-[#b3ff3b] dark:text-[#b3ff3b]">
                            Microvison
                        </h3>
                        {/* <ArrowUpRight size={24} className="text-[#f97316] flex-shrink-0" /> */}
                    </div>

                    {/* Sub-header: Role & Date */}
                    <p className="text-[var(--color-text-secondary)] text-[16px] font-normal mb-6 flex items-center gap-2">
                        <span>Web Development Intern | January 2026 - February 2026</span>
                        <a href="https://drive.google.com/file/d/16EhqDJlo8M1cNKoCMPLCjz4GN6BD4goD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-2 text-sm inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline">
                            <ArrowUpRight size={14} />
                        </a>
                    </p>

                    {/* Bullet Points */}
                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="flex flex-col gap-2 list-none p-0 m-0 text-italics"
                    >
                        <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                            Architected a full-stack commercial website with category-based product listings and automated inquiry routing via Node.js email handlers, cutting manual client response time by 60%.
                        </motion.li>
                        <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                            Built a role-based admin dashboard using React.js and Node.js with full CRUD capabilities and access control, reducing product content update time by 40% across 3 categories for non-technical staff.
                        </motion.li>
                        <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                            Streamlined CI/CD deployment pipeline and frontend performance through Gzip compression, code splitting, lazy loading, and meta-tag SEO enhancements, reducing initial page load time by 20%.
                        </motion.li>
                    </motion.ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;
