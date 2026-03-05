import React from 'react';
import {
    Code2, FileCode2, TerminalSquare, Braces,
    Atom, Wind, LayoutTemplate, Palette, Figma,
    Server, Box, Database, Network, Cpu, LayoutGrid, Globe, Webhook,
    Terminal, Container, Cloud,
    GitBranch, Github, Code, Send, Image, Key, Sparkles, PenTool
} from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        color: "text-[#f97316]",
        skills: [
            { name: "C", subtitle: "Programming Language", icon: Code2, color: "text-blue-400" },
            { name: "C++", subtitle: "System Language", icon: FileCode2, color: "text-blue-500" },
            { name: "Python", subtitle: "Scripting", icon: Terminal, color: "text-yellow-400" },
            { name: "JavaScript", subtitle: "Web Language", icon: Braces, color: "text-yellow-300" }
        ]
    },
    {
        title: "Frontend",
        color: "text-[#a3e635]",
        skills: [
            { name: "React.js", subtitle: "UI Library", icon: Atom, color: "text-cyan-400" },
            { name: "Tailwind CSS", subtitle: "Styling Framework", icon: Wind, color: "text-teal-400" },
            { name: "HTML5", subtitle: "Markup", icon: LayoutTemplate, color: "text-orange-500" },
            { name: "CSS3", subtitle: "Styling", icon: Palette, color: "text-blue-400" },
            { name: "Framer Motion", subtitle: "Animation Library", icon: Figma, color: "text-pink-400" }
        ]
    },
    {
        title: "Backend & Databases",
        color: "text-[#f97316]",
        skills: [
            { name: "Node.js", subtitle: "Runtime", icon: Server, color: "text-green-500" },
            { name: "Express.js", subtitle: "Framework", icon: Box, color: "text-gray-300" },
            { name: "MongoDB", subtitle: "NoSQL DB", icon: Database, color: "text-green-600" },
            { name: "Mongoose", subtitle: "ODM", icon: LayoutGrid, color: "text-red-400" },
            { name: "Redis", subtitle: "Caching", icon: Cpu, color: "text-red-500" },
            { name: "SQL", subtitle: "Relational DB", icon: Database, color: "text-blue-300" },
            { name: "Socket.io", subtitle: "Real-time", icon: Network, color: "text-white" },
            { name: "REST APIs", subtitle: "Integration", icon: Webhook, color: "text-purple-400" }
        ]
    },
    {
        title: "DevOps & Cloud",
        color: "text-[#a3e635]",
        skills: [
            { name: "Linux", subtitle: "OS", icon: Terminal, color: "text-yellow-200" },
            { name: "Docker", subtitle: "Containerization", icon: Container, color: "text-blue-500" },
            { name: "AWS", subtitle: "Cloud Infrastructure", icon: Cloud, color: "text-orange-400" }
        ]
    },
    {
        title: "Tools",
        color: "text-[#f97316]",
        skills: [
            { name: "Git", subtitle: "Version Control", icon: GitBranch, color: "text-orange-500" },
            { name: "GitHub", subtitle: "Collaboration", icon: Github, color: "text-white" },
            { name: "VS Code", subtitle: "IDE", icon: Code, color: "text-blue-500" },
            { name: "Postman", subtitle: "API Testing", icon: Send, color: "text-orange-400" },
            { name: "Cloudinary", subtitle: "Media Storage", icon: Image, color: "text-blue-400" },
            { name: "Clerk", subtitle: "Auth", icon: Key, color: "text-indigo-400" },
            { name: "Gemini API", subtitle: "AI Integration", icon: Sparkles, color: "text-blue-300" },
            { name: "Canva", subtitle: "Design", icon: PenTool, color: "text-cyan-300" }
        ]
    }
];

const SkillCard = ({ skill }) => {
    const Icon = skill.icon;
    return (
        <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-4 flex items-center gap-4 hover:border-[#333] transition-colors duration-300 group">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Icon size={24} className={`${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
            </div>

            {/* Text Content */}
            <div className="flex flex-col overflow-hidden">
                <span className="text-white font-bold text-[16px] xl:text-[17px] truncate tracking-wide">
                    {skill.name}
                </span>
                <span className="text-[#888] text-[13px] xl:text-[14px] truncate font-medium mt-0.5">
                    {skill.subtitle}
                </span>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="pt-24 relative">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-white-300 leading-[0.9] tracking-tight uppercase mb-16">
                TECHNICAL
                <span className="text-[#4D4D4D]"> SKILLS</span>
            </h3>

            <div className="flex flex-col gap-12">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="flex flex-col">
                        {/* Category Header */}
                        <h4 className={`text-[20px] font-bold mb-6 font-sans tracking-wider uppercase ${category.color}`}>
                            {category.title}
                        </h4>

                        {/* Bento Grid layout for cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.skills.map((skill, sIdx) => (
                                <SkillCard key={sIdx} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Skills;
