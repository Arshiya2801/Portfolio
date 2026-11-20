import React from 'react';
import {
    Code2, FileCode2, TerminalSquare, Braces,
    Atom, Wind, LayoutTemplate, Palette, Figma,
    Server, Box, Database, Network, Cpu, LayoutGrid, Globe, Webhook,
    Terminal, Container, Cloud,
    GitBranch, Github, Code, Send, Image, Key, Sparkles, PenTool,
    Radio, Wifi, Shield, Brain, Monitor, Mail, Rocket, Activity
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import msLogo from '../assets/microsoft-logo.svg';
import cwLogo from '../assets/commonwealth-logo.svg';

const skillCategories = [
    {
        title: "Languages",
        color: "var(--color-accent-text)",
        skills: [
            { name: "C", subtitle: "Programming", icon: Code2, color: "#60a5fa" },
            { name: "C++", subtitle: "System Lang", icon: FileCode2, color: "#3b82f6" },
            { name: "Python", subtitle: "Scripting", icon: Terminal, color: "#facc15" },
            { name: "JavaScript", subtitle: "Web Lang", icon: Braces, color: "#fde047" }
        ]
    },
    {
        title: "Frontend",
        color: "var(--color-accent-text)",
        skills: [
            { name: "React.js", subtitle: "UI Library", icon: Atom, color: "#22d3ee" },
            { name: "Tailwind", subtitle: "CSS Framework", icon: Wind, color: "#2dd4bf" },
            { name: "HTML5", subtitle: "Markup", icon: LayoutTemplate, color: "#f97316" },
            { name: "CSS3", subtitle: "Styling", icon: Palette, color: "#60a5fa" },
            { name: "Framer", subtitle: "Animation", icon: Figma, color: "#f472b6" }
        ]
    },
    {
        title: "Backend & Databases",
        color: "var(--color-accent-text)",
        skills: [
            { name: "Node.js", subtitle: "Runtime", icon: Server, color: "#22c55e" },
            { name: "Express", subtitle: "Framework", icon: Box, color: "#d1d5db" },
            { name: "MongoDB", subtitle: "NoSQL DB", icon: Database, color: "#16a34a" },
            { name: "Mongoose", subtitle: "ODM", icon: LayoutGrid, color: "#f87171" },
            { name: "Redis", subtitle: "Caching", icon: Database, color: "#dc382d" },
            { name: "SQL", subtitle: "Relational DB", icon: Database, color: "#93c5fd" },
            { name: "MySQL", subtitle: "RDBMS", icon: Database, color: "#00758f" },
            { name: "Socket.io", subtitle: "Real-time", icon: Network, color: "#e5e7eb" },
            { name: "WebRTC", subtitle: "Video Calls", icon: Wifi, color: "#5c6bc0" },
            { name: "SSE", subtitle: "Server Events", icon: Radio, color: "#f97316" },
            { name: "JWT", subtitle: "Authentication", icon: Shield, color: "#ff6b6b" },
            { name: "REST APIs", subtitle: "Integration", icon: Code2, color: "#14b8a6" },
            { name: "WebSockets", subtitle: "Real-time", icon: Network, color: "#22d3ee" },
            { name: "RBAC", subtitle: "Authorization", icon: Shield, color: "#f87171" },
            { name: "Atlas Vector Search", subtitle: "MongoDB", icon: Database, color: "#22c55e" }
        ]
    },
    {
        title: "Generative AI",
        color: "var(--color-lavender)",
        skills: [
            { name: "RAG Pipelines", subtitle: "Context Retrieval", icon: Brain, color: "var(--color-lavender)" },
            { name: "Embeddings", subtitle: "Vector Search", icon: Database, color: "var(--color-lavender)" },
            { name: "Semantic Search", subtitle: "Retrieval", icon: Sparkles, color: "var(--color-lavender)" },
            { name: "LLM Integration", subtitle: "AI Features", icon: Webhook, color: "var(--color-lavender)" },
            { name: "OpenAI", subtitle: "LLM API", icon: Brain, color: "var(--color-lavender)" },
            { name: "Llama 3", subtitle: "Language Model", icon: Brain, color: "var(--color-lavender)" },
            { name: "AI Agents", subtitle: "Tool Calling", icon: Cpu, color: "var(--color-lavender)" },
            { name: "MCP", subtitle: "Tool Integration", icon: Network, color: "var(--color-lavender)" },
            { name: "Prompt Engineering", subtitle: "LLM Instructions", icon: TerminalSquare, color: "var(--color-lavender)" }
        ]
    },
    {
        title: "DevOps & Cloud",
        color: "var(--color-accent-text)",
        skills: [
            { name: "Linux", subtitle: "OS", icon: Terminal, color: "#fef08a" },
            { name: "AWS EC2", subtitle: "Compute", icon: Cloud, color: "#fb923c" },
            { name: "CI/CD", subtitle: "Automation", icon: Rocket, color: "#ef4444" },
            { name: "Event-Driven", subtitle: "Architecture", icon: Activity, color: "#8b5cf6" }
        ]
    },
    {
        title: "Tools",
        color: "var(--color-accent-text)",
        skills: [
            { name: "Git", subtitle: "Version Ctrl", icon: GitBranch, color: "#f97316" },
            { name: "GitHub", subtitle: "Collaboration", icon: Github, color: "#e5e7eb" },
            { name: "VS Code", subtitle: "IDE", icon: Code, color: "#3b82f6" },
            { name: "Postman", subtitle: "API Testing", icon: Send, color: "#fb923c" },
            { name: "Cloudinary", subtitle: "Media", icon: Image, color: "#60a5fa" },
            { name: "Clerk", subtitle: "Auth", icon: Key, color: "#818cf8" },
            { name: "Brevo", subtitle: "Email API", icon: Mail, color: "#0092ff" },
            { name: "Gemini AI", subtitle: "LLM", icon: Brain, color: "#4285f4" },
            { name: "Monaco", subtitle: "Code Editor", icon: Monitor, color: "#007acc" },
            { name: "Judge0", subtitle: "Code Execution", icon: Cpu, color: "#ff6b00" },
            { name: "Canva", subtitle: "Design", icon: PenTool, color: "#67e8f9" },
            { name: "Claude Code", subtitle: "AI Coding", icon: Terminal, color: "#fb923c" },
            { name: "Cursor", subtitle: "AI Editor", icon: Code, color: "#a3a3a3" }
        ]
    },
    {
        title: "Core Computer Science",
        color: "var(--color-accent-text)",
        skills: [
            { name: "DSA", subtitle: "Problem Solving", icon: Code2, color: "var(--color-accent-text)" },
            { name: "System Design", subtitle: "Architecture", icon: Network, color: "var(--color-accent-text)" },
            { name: "Distributed Systems", subtitle: "Core CS", icon: Server, color: "var(--color-accent-text)" },
            { name: "OOP", subtitle: "Programming", icon: Box, color: "var(--color-accent-text)" },
            { name: "Operating Systems", subtitle: "Core CS", icon: Terminal, color: "var(--color-accent-text)" },
            { name: "Computer Networks", subtitle: "Core CS", icon: Globe, color: "var(--color-accent-text)" },
            { name: "DBMS", subtitle: "Data Management", icon: Database, color: "var(--color-accent-text)" }
        ]
    }
];

const FloatingSkillIcon = ({ skill, index }) => {
    const reduceMotion = useReducedMotion();
    const { theme } = useTheme();
    const Icon = skill.icon;
    const color = skill.color;

    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4, ease: 'easeOut' }}
        >
            <motion.div
                animate={reduceMotion ? { y: 0 } : {
                    y: [0, -8, 0, 6, 0],
                }}
                transition={{
                    duration: 5 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                }}
            >
                {/* Icon container */}
                <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center border backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    style={{
                        borderColor: `color-mix(in srgb, ${color} 20%, transparent)`,
                        backgroundColor: theme === 'dark'
                            ? `color-mix(in srgb, ${color} 7%, transparent)`
                            : `color-mix(in srgb, ${color} 9%, transparent)`,
                    }}
                >
                    {/* Glow */}
                    <div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-20"
                        style={{ background: color }}
                    />
                    <Icon size={38} style={{ color }} className="relative z-10" />
                </div>
            </motion.div>
            {/* Label */}
            <span className="text-[15px] font-bold tracking-wide text-[var(--color-text-primary)]">
                {skill.name}
            </span>
            <span className="text-[12px] font-medium text-[var(--color-text-secondary)] opacity-60 -mt-1">
                {skill.subtitle}
            </span>
        </motion.div>
    );
};

const Skills = () => {
    const certifications = [
        {
            id: 3,
            title: 'AI Fluency: Framework & Foundations',
            issuer: 'Anthropic',
            logo: '/anthropic-logo.png',
            link: 'https://verify.skilljar.com/c/ng4zxm5w222h',
            color: 'var(--color-lavender)',
            description: 'Certified in AI fundamentals, use, and tool application.'
        },
        {
            id: 1,
            title: 'Walmart Advanced Software Engineering Job Simulation',
            issuer: 'Walmart Global Tech',
            date: '2024',
            link: 'https://drive.google.com/file/d/132FpMU90Ra9-yMfY_UGLKadGxYEDfewV/view',
            logo: '/walmart.png',
            color: '#ffd400',
            description: 'Implemented custom heap data structures in Java, designed UML class diagrams using SOLID principles, and developed Python data pipelines for database ingestion'
        },
        {
            id: 2,
            title: 'GitHub Foundations',
            issuer: 'Microsoft Learn',
            date: '2023',
            link: 'https://drive.google.com/file/d/1v2Rrt6G6CnHwyaSMABKyZ-uYh1wDYIDS/view',
            logo: msLogo,
            color: '#0078D6',
            description: 'Certification covering GitHub fundamentals and version control.'
        }
    ];

    return (
        <section id="skills" className="relative scroll-mt-32">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-text-primary)] leading-[0.9] tracking-tight uppercase overflow-hidden flex flex-wrap mb-16">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="mr-3"
                >
                    TECHNICAL
                </motion.span>
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="text-[var(--color-text-secondary)]"
                >
                    SKILLS
                </motion.span>
            </h3>

            <div className="flex flex-col gap-14">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="flex flex-col">
                        {/* Category Header */}
                        <h4
                            className="text-[20px] font-bold mb-8 font-sans tracking-wider uppercase"
                            style={{ color: category.color }}
                        >
                            {category.title}
                        </h4>

                        {/* Floating Icons Row */}
                        <div className="flex flex-wrap justify-start gap-8 sm:gap-10 lg:gap-12">
                            {category.skills.map((skill, sIdx) => (
                                <FloatingSkillIcon key={sIdx} skill={skill} index={sIdx} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Certifications Section (cards) */}
            <div className="mt-12">
                <h4
                    className="text-[20px] font-bold mb-6 font-sans tracking-wider uppercase"
                    style={{ color: 'var(--color-lavender)' }}
                >
                    CERTIFICATIONS
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-4 hover:border-[var(--color-accent)] transition-all duration-300 group relative overflow-hidden"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Subtle glow like Achievement cards */}
                            <div
                                className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none blur-2xl"
                                style={{ background: cert.color }}
                            />

                            <div className="relative z-10 flex flex-wrap items-start gap-3">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                                    style={{ backgroundColor: `color-mix(in srgb, ${cert.color} 9%, transparent)` }}
                                >
                                    {cert.logo ? <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-8 h-8 object-contain" /> : <Brain size={28} style={{ color: cert.color }} aria-hidden="true" />}
                                </div>

                                <div className="flex-1 min-w-[140px]">
                                    <div className="text-sm text-[var(--color-text-secondary)]">{cert.issuer}{cert.date && <> • <span className="font-medium">{cert.date}</span></>}</div>
                                    <div className="text-[16px] font-semibold mt-2">{cert.title}</div>
                                    <div className="text-[13px] text-[var(--color-text-secondary)] mt-2 text-justify">{cert.description}</div>
                                </div>

                                <div className="ml-auto">
                                    <a
                                        href={cert.link}
                                        aria-label={`View ${cert.title} certificate`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block px-3 py-1.5 bg-[var(--color-accent)] text-white rounded-md text-sm hover:opacity-95"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
