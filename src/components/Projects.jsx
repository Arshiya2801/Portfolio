import React, { useState, useRef } from 'react';
import { Github, ChevronDown } from 'lucide-react';

const PrimaryProjects = [
    {
        title: 'MindClash',
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
        link: '#'
    },
    {
        title: 'TalentIQ',
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
        link: '#'
    },
    {
        title: 'Streamly Backend API',
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
        link: '#'
    }
];

const SecondaryProjects = [
    {
        title: 'Currency Converter',
        tagline: 'Sleek React app, API-based real-time conversion, Tailwind CSS.',
        description: 'A responsive currency converter leveraging real-time exchange rates, built with React and styled elegantly using Tailwind CSS for a modern user experience.',
        tags: [
            { name: 'ReactJS', type: 'frontend' },
            { name: 'Tailwind CSS', type: 'frontend' },
            { name: 'Real-time API', type: 'backend' }
        ],
        link: '#'
    },
    {
        title: 'Background Changer',
        tagline: 'React app, color palette history, dark/light mode toggle.',
        description: 'An interactive utility that allows users to instantly change the background color of the application, keeping a history of selected palettes and supporting dark/light UI modes.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'UI/UX', type: 'frontend' }
        ],
        link: '#'
    },
    {
        title: 'To-Do List',
        tagline: 'Responsive app, local storage persistence, filterable tags, Vite/React.',
        description: 'A high-performance task management application featuring persistent local storage, dynamic tag filtering, and a lightning-fast Vite-based React setup.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'Vite', type: 'frontend' },
            { name: 'localStorage', type: 'backend' }
        ],
        link: '#'
    },
    {
        title: 'Customer Segmentation',
        tagline: 'Streamlit ML dashboard, K-Means clustering, PCA visualization.',
        description: 'A comprehensive machine learning dashboard built in Streamlit. It applies K-Means clustering on customer data and visualizes the results intuitively using PCA along with detailed data charts.',
        tags: [
            { name: 'Streamlit', type: 'frontend' },
            { name: 'Machine Learning', type: 'backend' },
            { name: 'K-Means', type: 'backend' },
            { name: 'PCA', type: 'backend' }
        ],
        link: '#'
    }
];

const ProjectRow = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-4 transition-colors hover:border-[#333]">
            {/* Default View (Always visible header) */}
            <div
                className="p-5 flex items-center justify-between cursor-pointer group"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-6 flex-1 pr-4">
                    {/* Thumbnail Image */}
                    <div className="w-[80px] h-[80px] flex-shrink-0 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-[#222]">
                        <span className="text-[#4D4D4D] text-xs font-semibold">80x80</span>
                    </div>

                    {/* Middle Content */}
                    <div className="flex flex-col flex-1">
                        <h3 className="text-white text-[22px] font-bold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-[#a3a3a3] text-[15px] font-medium truncate max-w-[90%]">
                            {project.tagline}
                        </p>
                    </div>
                </div>

                {/* Right Side Icons */}
                <div className="flex flex-col items-end justify-between self-stretch">
                    {/* GitHub Link - Stop propagation so clicking the link doesn't toggle the accordion */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-[#1f1f1f] rounded-lg transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github size={24} className="text-[#f97316] hover:text-[#ff8f3d] transition-colors" />
                    </a>

                    {/* Expand Chevron */}
                    <div className={`p-2 rounded-full transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white' : 'rotate-0 text-[#666] group-hover:text-[#a3a3a3]'}`}>
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
                <div className="p-5 pt-0 pl-[124px] pr-6 border-t border-[#1f1f1f]/50 mt-1">
                    {/* Detailed Features List */}
                    <div className="pt-5 mb-6">
                        {project.features ? (
                            <ul className="flex flex-col gap-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="text-[#d4d4d4] text-[15px] leading-relaxed">
                                        <span className="font-semibold text-white">{feature.title}:</span> {feature.desc}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-[#d4d4d4] text-[16px] leading-relaxed">
                                {project.description}
                            </p>
                        )}

                        {/* Why it's Unique */}
                        {project.whyUnique && (
                            <div className="mt-6">
                                <h4 className="text-white font-bold text-[16px] mb-2 font-sans tracking-wide">Why it's Unique</h4>
                                <p className="text-[#a3a3a3] text-[15px] leading-relaxed border-l-2 border-[#f97316] pl-4 italic">
                                    {project.whyUnique}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pb-2">
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
    );
};

const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const secondaryListRef = useRef(null);

    return (
        <section id="project" className="relative scroll-mt-32">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-white-300 leading-[0.9] tracking-tight uppercase mb-12">
                RECENT
                <span className="text-[#4D4D4D]"> PROJECTS</span>
            </h3>

            {/* Primary Projects Stack */}
            <div className="flex flex-col pointer-events-auto">
                {PrimaryProjects.map((project, index) => (
                    <ProjectRow key={`primary-${index}`} project={project} />
                ))}
            </div>

            {/* Expandable Secondary Projects Stack */}
            <div
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
            </div>

            {/* View More / View Less Button */}
            <div className="flex justify-center mt-8 mb-8">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="px-8 py-3 rounded-full bg-[#1a1a1a] border border-[#333] text-white font-medium hover:bg-[#222] hover:border-[#f97316] transition-all duration-300 group flex items-center gap-2"
                >
                    {showMore ? 'View Less' : 'View More Projects'}
                    <div className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}>
                        <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                </button>
            </div>

        </section>
    );
};

export default Projects;
