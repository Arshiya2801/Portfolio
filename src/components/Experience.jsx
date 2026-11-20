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
                    className="text-[var(--color-text-secondary)]"
                >
                    EXPERIENCE
                </motion.span>
            </h3>
            <br />
            <br />
            {/* Experience List */}
            <div className="flex flex-col gap-10">

                <article className="flex flex-col border-b border-[var(--color-border)] pb-8">
                    <div className="flex flex-col items-start gap-4 mb-2">
                        <img src="/infinito-comics-logo.png" alt="Infinito Comics logo" width={447} height={113} className="w-44 h-auto max-w-full flex-shrink-0 object-contain rounded-md" />
                        <h4 className="text-xl font-bold text-[var(--color-text-primary)]">Infinito Comics</h4>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-6">
                        <span>Full Stack AI Developer Intern | July 2026 - September 2026 | Remote</span>
                        <a href="/infinito-comics-offer-letter.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Infinito Comics offer letter (PDF, opens in a new tab)" title="View offer letter" className="ml-2 text-sm inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline">
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    </p>
                    <ul className="experience-details">
                        <li>Built an AI customer assistant using RAG, vector embeddings, semantic catalog search, and client session state for customer support and real-time navigation guidance.</li>
                        <li>Integrated Razorpay checkout for recurring subscription tiers and merchandise using React and Node.js, with HMAC-verified payment webhooks.</li>
                        <li>Engineered headless WooCommerce REST API pipelines to synchronize merchandise catalogs, inventory counts, and customer checkout flows.</li>
                        <li>Developed responsive React 19 and Tailwind CSS client portals in a full-stack monorepo, including cross-origin postMessage iframe bridges.</li>
                        <li>Collaborated in an Agile engineering team, led QA review sessions, and maintained production releases through Jest and automated API integration tests, CI/CD pipelines, and CodeRabbit reviews.</li>
                    </ul>
                </article>

                {/* Entry 1: Microvision */}
                <div className="flex flex-col border-b border-[var(--color-border)] pb-8 last:border-0 last:pb-0">

                    {/* Top Row: Company & Icon */}
                    <div className="flex flex-col items-start gap-4 mb-2">
                            <img src="/microvison-logo.png" alt="Microvison Logo" className="h-16 w-auto object-contain rounded-md" />
                        <h4 className="text-xl font-bold text-[var(--color-text-primary)]">Microvison</h4>
                    </div>

                    {/* Sub-header: Role & Date */}
                    <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-2">
                        <span>Web Development Intern | May 2026 - July 2026 | Remote</span>
                        <a href="https://drive.google.com/file/d/16EhqDJlo8M1cNKoCMPLCjz4GN6BD4goD/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="View Microvison internship certificate" className="ml-2 text-sm inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline">
                            <ArrowUpRight size={14} />
                        </a>
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-6">Service centres across 5+ states</p>

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
                            Architected and deployed a MERN service management platform for 300+ service centres, implementing complaint registration, service assignment, billing, and real-time tracking to replace a manual phone-based workflow.                        </motion.li>
                        <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                            Developed a RBAC-based admin system using React.js, Node.js and JWT, featuring complaint management, product tracking, automated warranty validation, and a 5-step registration workflow and location mapping.                        </motion.li>
                        <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                            Integrated the Meta WhatsApp Cloud API with 7 message templates and 8 automated workflows, built a Critical Action module for warranty handling, and deployed the application as a Progressive Web App (PWA).                        </motion.li>
                        <li className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">Built multi-tenant ticket registration and a rule-based warranty verification engine for the guided five-step workflow.</li>
                        <li className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">Designed a transactional billing engine with indexed serial lookups, in- and out-of-warranty claims processing, and bulk invoice reconciliation to eliminate manual spreadsheet billing.</li>
                        <li className="text-[var(--color-text-primary)] text-[14px] leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--color-accent)]">Added retry queues for reliable customer notifications across eight event-driven webhooks.</li>
                    </motion.ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;
