import React from 'react';
import {
    Code2, FileCode2, TerminalSquare, Braces,
    Atom, Wind, LayoutTemplate, Palette, Figma,
    Server, Box, Database, Network, Cpu, LayoutGrid, Globe, Webhook,
    Terminal, Container, Cloud,
    GitBranch, Github, Code, Send, Image, Key, Sparkles, PenTool
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const skillCategories = [
    {
        title: "Languages",
        color: "#f97316",
        skills: [
            { name: "C", subtitle: "Programming", icon: Code2, color: "#60a5fa" },
            { name: "C++", subtitle: "System Lang", icon: FileCode2, color: "#3b82f6" },
            { name: "Python", subtitle: "Scripting", icon: Terminal, color: "#facc15" },
            { name: "JavaScript", subtitle: "Web Lang", icon: Braces, color: "#fde047" }
        ]
    },
    {
        title: "Frontend",
        color: "#a3e635",
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
        color: "#f97316",
        skills: [
            { name: "Node.js", subtitle: "Runtime", icon: Server, color: "#22c55e" },
            { name: "Express", subtitle: "Framework", icon: Box, color: "#d1d5db" },
            { name: "MongoDB", subtitle: "NoSQL DB", icon: Database, color: "#16a34a" },
            { name: "Mongoose", subtitle: "ODM", icon: LayoutGrid, color: "#f87171" },
            { name: "Redis", subtitle: "Caching", icon: Cpu, color: "#ef4444" },
            { name: "SQL", subtitle: "Relational DB", icon: Database, color: "#93c5fd" },
            { name: "Socket.io", subtitle: "Real-time", icon: Network, color: "#e5e7eb" },
            { name: "REST APIs", subtitle: "Integration", icon: Webhook, color: "#a78bfa" }
        ]
    },
    {
        title: "DevOps & Cloud",
        color: "#a3e635",
        skills: [
            { name: "Linux", subtitle: "OS", icon: Terminal, color: "#fef08a" },
            { name: "Docker", subtitle: "Containers", icon: Container, color: "#3b82f6" },
            { name: "AWS", subtitle: "Cloud Infra", icon: Cloud, color: "#fb923c" }
        ]
    },
    {
        title: "Tools",
        color: "#f97316",
        skills: [
            { name: "Git", subtitle: "Version Ctrl", icon: GitBranch, color: "#f97316" },
            { name: "GitHub", subtitle: "Collaboration", icon: Github, color: "#e5e7eb" },
            { name: "VS Code", subtitle: "IDE", icon: Code, color: "#3b82f6" },
            { name: "Postman", subtitle: "API Testing", icon: Send, color: "#fb923c" },
            { name: "Cloudinary", subtitle: "Media", icon: Image, color: "#60a5fa" },
            { name: "Clerk", subtitle: "Auth", icon: Key, color: "#818cf8" },
            { name: "Gemini API", subtitle: "AI Integr.", icon: Sparkles, color: "#93c5fd" },
            { name: "Canva", subtitle: "Design", icon: PenTool, color: "#67e8f9" }
        ]
    }
];

const FloatingSkillIcon = ({ skill, index }) => {
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
                animate={{
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
                        borderColor: `${color}30`,
                        backgroundColor: theme === 'dark'
                            ? `${color}12`
                            : `${color}18`,
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
                    className="text-[#4D4D4D]"
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
        </section>
    );
};

export default Skills;
