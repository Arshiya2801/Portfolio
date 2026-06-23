import React, { useState, useRef } from 'react';
import { Github, ChevronDown, Brain, Laptop, Server, Coins, Palette, CheckSquare, PieChart, Briefcase, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useTheme } from './ThemeContext';

const PrimaryProjects = [

    {
        title: 'Apollo',
        thumbnail: '/thumb_apollo.png',
        icon: Laptop,
        tagline: 'An AI-powered coding workspace and interview simulator.',
        features: [
            { title: 'Intelligent Coding Assistance', desc: 'Provides real-time code explanation, debugging, and review through 20+ specialized AI personas, enhancing learning and productivity.' },
            { title: 'Interactive Development Environment', desc: 'Integrates Monaco Editor and Judge0 for secure multi-language execution with instant feedback and collaborative live sessions.' },
            { title: 'Interview Simulator', desc: 'Features dynamic problem generation, adaptive difficulty scaling, timed assessments, and AI evaluations that mirror real interview experiences.' },
            { title: 'Secure & Personalized Experience', desc: 'Implements JWT authentication, bcrypt hashing, and MongoDB-backed session management to maintain secure user accounts and coding history.' }
        ],
        whyUnique: 'Combines an AI mentor, coding workspace, and interview coach into a single environment that explains code, reviews solutions, simulates interviews, and provides personalized feedback.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'Node.js', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'Monaco', type: 'frontend' },
            { name: 'Gemini API', type: 'backend' },
            { name: 'WebRTC', type: 'backend' },
            { name: 'Socket.io', type: 'backend' },
            { name: 'Judge0', type: 'backend' }
        ],
        link: 'https://github.com/Arshiya2801/Apollo',
        deploymentLink: 'https://mind-clash-nine.vercel.app'
    },
    {
        title: 'MindClash',
        thumbnail: '/thumb-mind.png',
        icon: Brain,
        tagline: 'A gamified, real-time debate arena with AI-driven moderation.',
        features: [
            { title: 'Seamless Interaction', desc: 'Enables 1v1 and team-based debating with <1s latency, ensuring participants stay synced without refreshing.' },
            { title: 'AI-Enhanced Integrity', desc: 'Features a unique Gemini-powered fact-checking layer that provides live feedback and scoring, elevating the quality of arguments.' },
            { title: 'Engaging User Experience', desc: 'Includes a secure anonymous mode and a proprietary XP-based betting system that incentivizes spectators to engage deeply with the debates.' }
        ],
        whyUnique: 'Unlike standard video chat, MindClash adds a "referee" and a "scoring system" layer. It turns passive debate-watching into an active, gamified, and intellectually honest experience.',
        tags: [
            { name: 'MongoDB', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'React', type: 'frontend' },
            { name: 'Node.js', type: 'backend' },
            { name: 'Socket.io', type: 'backend' },
            { name: 'Redis', type: 'backend' },
            { name: 'JWT', type: 'backend' },
            { name: 'Gemini API', type: 'backend' },
            { name: 'Tailwind CSS', type: 'frontend' }
        ],
        link: 'https://github.com/Arshiya2801/MindClash',
        deploymentLink: 'https://mindclash-live.vercel.app',

    },
    {
        title: 'MediQueue',
        thumbnail: '/thumb-mediqueue.png',
        // icon: Stethoscope,
        tagline: 'A Smart Hospital Appointment & Queue Management System',
        features: [
            {
                title: 'Smart Appointment Booking',
                desc: 'Allows patients to discover doctors by specialization, view availability, select time slots, and securely book appointments through an intuitive healthcare workflow.'
            },
            {
                title: 'Real-Time Queue Tracking',
                desc: 'Provides live queue monitoring with token-based tracking, estimated waiting time, patients-ahead calculations, and instant status updates powered by Socket.io.'
            },
            {
                title: 'Role-Based Healthcare Management',
                desc: 'Features dedicated patient and doctor dashboards for appointment management, queue operations, profile management, earnings tracking, and consultation workflows.'
            }
        ],
        whyUnique: 'Unlike traditional appointment booking systems, MediQueue bridges the gap between scheduling and hospital visits through real-time queue intelligence. Patients can monitor their queue position remotely, while doctors manage appointments, queues, and consultations from a unified dashboard, significantly reducing waiting-room congestion and improving operational efficiency.',
        tags: [
            { name: 'MongoDB', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'React', type: 'frontend' },
            { name: 'Node.js', type: 'backend' },
            { name: 'Socket.io', type: 'backend' },
            { name: 'JWT', type: 'backend' },
            { name: 'Razorpay', type: 'backend' },
            { name: 'Tailwind CSS', type: 'frontend' },
            { name: 'Cloudinary', type: 'backend' }
        ],
        link: 'https://github.com/Arshiya2801/MediQueue',
        deploymentLink: 'https://medi-queue-topaz-nine.vercel.app/'
    },

];

const SecondaryProjects = [
    {
        title: 'TalentIQ',
        icon: Laptop,
        tagline: 'The all-in-one technical interview environment for remote assessments.',
        features: [
            { title: 'Unified Workspace', desc: 'Combines real-time coding, video conferencing, and chat into one interface, eliminating the need to toggle between Zoom, VS Code, and Slack.' },
            { title: 'Secure Sandboxed Coding', desc: 'Features an in-browser code editor with isolated execution, allowing interviewers to verify logic instantly without risking the host system.' },
            { title: 'High-Stability Infrastructure', desc: 'Built with WebRTC to guarantee 99% call stability, ensuring zero friction during critical interview moments.' }
        ],
        whyUnique: 'It solves "Context-Switching Fatigue" for interviewers. By creating a professional, unified environment, it reduces evaluation time by 75% compared to multi-tool setups.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'Tailwind CSS', type: 'frontend' },
            { name: 'Node.js', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'WebRTC', type: 'backend' },
            { name: 'Stream', type: 'backend' },
            { name: 'Clerk', type: 'backend' }
        ],
        link: 'https://github.com/Arshiya2801/TalentIQ'
    },
    {
        title: 'Streamly Backend API',
        icon: Server,
        tagline: 'A secure video management backend designed for speed and reliability.',
        features: [
            { title: 'Robust Media Pipeline', desc: 'Automates complex media workflows, handling everything from high-resolution uploads to playlist organization.' },
            { title: 'Security-First Architecture', desc: 'Implements industry-standard JWT-based session management, ensuring that user data and content remain protected.' },
            { title: 'Performance Optimization', desc: 'Utilizes cloud-native storage and efficient caching strategies to process media 30% faster than standard implementations.' }
        ],
        whyUnique: 'It’s an "invisible" but vital piece of infrastructure. It prioritizes reliability and security over flashy features, making it a plug-and-play backbone for any video-content application.',
        tags: [
            { name: 'Node.js', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'MongoDB', type: 'backend' },
            { name: 'Mongoose', type: 'backend' },
            { name: 'JWT', type: 'backend' },
            { name: 'Multer', type: 'backend' },
            { name: 'Cloudinary', type: 'backend' }
        ],
        link: 'https://github.com/Arshiya2801/Streamly'
    },
    {
        title: 'Currency Converter',
        thumbnail: '/thumb-currency.png',
        icon: Coins,
        tagline: 'Sleek React app, API-based real-time conversion, Tailwind CSS.',
        description: 'A responsive currency converter leveraging real-time exchange rates, built with React and styled elegantly using Tailwind CSS for a modern user experience.',
        tags: [
            { name: 'ReactJS', type: 'frontend' },
            { name: 'Tailwind CSS', type: 'frontend' },
            { name: 'Real-time API', type: 'backend' }
        ],
        // thumbnail: '/thumb-customer.png',
        link: 'https://github.com/Arshiya2801/Currency-Convertor'
    },
    {
        title: 'Background Changer',
        thumbnail: '/thumb-bg.png',
        icon: Palette,
        tagline: 'React app, color palette history, dark/light mode toggle.',
        description: 'An interactive utility that allows users to instantly change the background color of the application, keeping a history of selected palettes and supporting dark/light UI modes.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'UI/UX', type: 'frontend' }
        ],

        // thumbnail: '/thumb-currency.png',
        link: 'https://github.com/Arshiya2801/Background-Changer'
    },
    {
        title: 'To-Do List',
        thumbnail: '/thumb-todo.png',
        icon: CheckSquare,
        tagline: 'Responsive app, local storage persistence, filterable tags, Vite/React.',
        description: 'A high-performance task management application featuring persistent local storage, dynamic tag filtering, and a lightning-fast Vite-based React setup.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'Vite', type: 'frontend' },
            { name: 'localStorage', type: 'backend' }
        ],
        // thumbnail: '/thumb-todo.png',
        link: 'https://github.com/Arshiya2801/To-Do-List-Application'
    },
    {
        title: 'Customer Segmentation',
        thumbnail: '/thumb-customer.png',
        icon: PieChart,
        tagline: 'Streamlit ML dashboard, K-Means clustering, PCA visualization.',
        description: 'A comprehensive machine learning dashboard built in Streamlit. It applies K-Means clustering on customer data and visualizes the results intuitively using PCA along with detailed data charts.',
        tags: [
            { name: 'Streamlit', type: 'frontend' },
            { name: 'Machine Learning', type: 'backend' },
            { name: 'K-Means', type: 'backend' },
            { name: 'PCA', type: 'backend' }
        ],

        // thumbnail: '/thumb-bg.png',
        link: 'https://github.com/Arshiya2801/Customer-Segmentation'
    }
];

const PrimaryProjectCard = ({ project }) => {
    const { theme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl overflow-hidden mb-12 transition-all hover:border-[var(--color-accent)] group flex flex-col pointer-events-auto">
            {/* Clickable Header Area (Thumbnail + Title Block) */}
            <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                {/* Big Thumbnail */}
                <div className={`w-full h-[250px] sm:h-[350px] md:h-[450px] relative overflow-hidden flex items-center justify-center border-b ${theme === 'dark' ? 'bg-[#1a1a1a] border-[var(--color-border)]' : 'bg-[#e5e5e5] border-[var(--color-border)]'}`}>
                    {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02] p-4" />
                    ) : project.icon ? (
                        <project.icon size={80} className="text-[#4D4D4D] group-hover:text-[#f97316] transition-colors duration-300" />
                    ) : null}
                </div>

                {/* Title Block & Links */}
                <div className="p-6 sm:p-8 md:p-10 pb-4 sm:pb-6">
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                        <div className="flex-1 pr-4">
                            <h3 className="text-[var(--color-text-primary)] text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-lg sm:text-xl font-medium leading-relaxed">
                                {project.tagline}
                            </p>
                        </div>
                        {/* Links & Arrow */}
                        <div className="flex items-center gap-3 flex-shrink-0 w-full xl:w-auto justify-between xl:justify-end">
                            <div className="flex gap-3">
                                {project.deploymentLink && (
                                    <a
                                        href={project.deploymentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-5 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-primary)] hover:border-[#f97316] rounded-xl transition-all flex items-center gap-2 group/link shadow-sm"
                                        title="View Live Site"
                                    >
                                        <span className="text-[var(--color-text-primary)] font-semibold hidden sm:block">Live Demo</span>
                                        <ExternalLink size={20} className="text-[#f97316] group-hover/link:scale-110 transition-transform" />
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-5 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-primary)] hover:border-[#f97316] rounded-xl transition-all flex items-center gap-2 group/link shadow-sm"
                                        title="View Source Code"
                                    >
                                        <span className="text-[var(--color-text-primary)] font-semibold hidden sm:block">GitHub</span>
                                        <Github size={20} className="text-[#f97316] group-hover/link:scale-110 transition-transform" />
                                    </a>
                                )}
                            </div>

                            {/* Expand Chevron */}
                            <div className={`p-3 rounded-full transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]' : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] group-hover:bg-[#f97316]/10'}`}>
                                <ChevronDown size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expandable Details Section */}
            <div
                ref={contentRef}
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{
                    maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '0px',
                    opacity: isExpanded ? 1 : 0
                }}
            >
                <div className="p-6 sm:p-8 md:p-10 pt-0 sm:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-t border-[var(--color-border)] pt-8 mt-2">
                        {/* Detailed Features List */}
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <div>
                                <h4 className="text-[var(--color-text-primary)] font-bold text-lg mb-4 uppercase tracking-wider text-sm opacity-80">Key Features</h4>
                                {project.features && (
                                    <ul className="flex flex-col gap-4">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="text-[var(--color-text-secondary)] text-[16px] leading-relaxed flex gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2.5 flex-shrink-0" />
                                                <div>
                                                    <span className="font-semibold text-[var(--color-text-primary)]">{feature.title}:</span> {feature.desc}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Sidebar Area (Tags Only) */}
                        <div className="flex flex-col gap-8">
                            {/* Tech Stack Pills */}
                            <div>
                                <h4 className="text-[var(--color-text-primary)] font-bold text-sm mb-4 uppercase tracking-wider opacity-80">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2.5">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className={`px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide ${tag.type === 'frontend'
                                                ? 'bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20'
                                                : 'bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20'
                                                }`}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why it's Unique Full Width */}
                    {project.whyUnique && (
                        <div className="mt-8 bg-[var(--color-bg-tertiary)] p-6 rounded-2xl border border-[var(--color-border)]">
                            <h4 className="text-[var(--color-text-primary)] font-bold text-sm mb-3 uppercase tracking-wider opacity-80">Why it's Unique</h4>
                            <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed italic border-l-2 border-[#f97316] pl-4">
                                "{project.whyUnique}"
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectRow = ({ project }) => {
    const { theme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    return (
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={1500} glareEnable={true} glareMaxOpacity={0.08} className="mb-4">
            <motion.div
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }}
                className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-colors hover:border-[#333]"
            >
                {/* Default View (Always visible header) */}
                <div
                    className="p-5 flex items-center justify-between cursor-pointer group"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center gap-6 flex-1 pr-4">
                        {/* Thumbnail Image */}
                        <div className={`w-[80px] h-[80px] flex-shrink-0 rounded-xl flex items-center justify-center border overflow-hidden ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#222]' : 'bg-[#e5e5e5] border-[#d4d4d4]'}`}>
                            {project.thumbnail ? (
                                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                            ) : project.icon ? (
                                <project.icon size={36} className="text-[#4D4D4D] group-hover:text-[#f97316] transition-colors duration-300" />
                            ) : (
                                <span className="text-[#4D4D4D] text-xs font-semibold">80x80</span>
                            )}
                        </div>


                        {/* Middle Content */}
                        <div className="flex flex-col flex-1">
                            <h3 className="text-[var(--color-text-primary)] text-[22px] font-bold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-[15px] font-medium truncate max-w-[90%]">
                                {project.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex flex-col items-end justify-between self-stretch">
                        <div className="flex items-center">
                            {/* Deployment Link */}
                            {project.deploymentLink && (
                                <a
                                    href={project.deploymentLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-[#1f1f1f] rounded-lg transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                    title="View Live Site"
                                >
                                    <ExternalLink size={24} className="text-[#f97316] hover:text-[#ff8f3d] transition-colors" />
                                </a>
                            )}
                            {/* GitHub Link - Stop propagation so clicking the link doesn't toggle the accordion */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-[#1f1f1f] rounded-lg transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                    title="View Source Code"
                                >
                                    <Github size={24} className="text-[#f97316] hover:text-[#ff8f3d] transition-colors" />
                                </a>
                            )}
                        </div>

                        {/* Expand Chevron */}
                        <div className={`p-2 rounded-full transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[var(--color-text-primary)]' : 'rotate-0 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'}`}>
                            <ChevronDown size={20} />
                        </div>
                    </div>
                </div>

                {/* Expanded View with Smooth Height Transition */}
                <div
                    ref={contentRef}
                    className="transition-all duration-500 ease-in-out overflow-hidden"
                    style={{
                        maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '0px',
                        opacity: isExpanded ? 1 : 0
                    }}
                >
                    <div className="p-5 pt-0 pl-[124px] pr-6 border-t border-[var(--color-border)] mt-1">
                        {/* Detailed Features List */}
                        <div className="pt-5 mb-6">
                            {project.features ? (
                                <ul className="flex flex-col gap-3">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
                                            <span className="font-semibold text-[var(--color-text-primary)]">{feature.title}:</span> {feature.desc}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-[var(--color-text-secondary)] text-[16px] leading-relaxed">
                                    {project.description}
                                </p>
                            )}

                            {/* Why it's Unique */}
                            {project.whyUnique && (
                                <div className="mt-6">
                                    <h4 className="text-[var(--color-text-primary)] font-bold text-[16px] mb-2 font-sans tracking-wide">Why it's Unique</h4>
                                    <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed border-l-2 border-[var(--color-accent)] pl-4 italic">
                                        {project.whyUnique}
                                    </p>
                                </div>
                            )}

                            {/* Tech Stack Pills (hidden until expanded) */}
                            <div className="flex flex-wrap gap-2 pb-2 mt-4">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 rounded-full text-[13px] font-semibold tracking-wide ${tag.type === 'frontend'
                                            ? 'bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/30'
                                            : 'bg-[#f97316]/15 text-[#f97316] border border-[#f97316]/30'
                                            }`}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </motion.div>
        </Tilt>
    );
};

const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const secondaryListRef = useRef(null);

    return (
        <section id="project" className="relative scroll-mt-32">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-text-primary)] leading-[0.9] tracking-tight uppercase overflow-hidden flex flex-wrap mb-12">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="mr-3"
                >
                    RECENT
                </motion.span>
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="text-[#4D4D4D]"
                >
                    PROJECTS
                </motion.span>
            </h3>

            {/* Primary Projects Stack */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="flex flex-col pointer-events-auto"
            >
                {PrimaryProjects.map((project, index) => (
                    <PrimaryProjectCard key={`primary-${index}`} project={project} />
                ))}
            </motion.div>

            {/* Expandable Secondary Projects Stack */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                ref={secondaryListRef}
                className="transition-all duration-700 ease-in-out overflow-hidden"
                style={{
                    maxHeight: showMore ? `${secondaryListRef.current?.scrollHeight}px` : '0px',
                    opacity: showMore ? 1 : 0,
                    marginTop: showMore ? '1rem' : '0'
                }}
            >
                <div className="flex flex-col">
                    {SecondaryProjects.map((project, index) => (
                        <ProjectRow key={`secondary-${index}`} project={project} />
                    ))}
                </div>
            </motion.div>

            {/* View More / View Less Button */}
            <div className="flex justify-center mt-8 mb-8">
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowMore(!showMore)}
                    className="px-8 py-3 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)] transition-all duration-300 group flex items-center gap-2"
                >
                    {showMore ? 'View Less' : 'View More Projects'}
                    <div className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}>
                        <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                </motion.button>
            </div>

        </section>
    );
};

export default Projects;
