import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import {
    Atom, Server, Braces, FileCode2, Terminal,
    Database, Cloud, GitBranch
} from 'lucide-react';

const floatingIcons = [
    { Icon: Atom, label: 'React', subtitle: 'UI Library', color: '#61dafb', delay: 0 },
    { Icon: Server, label: 'Node', subtitle: 'JS Runtime', color: '#68a063', delay: 0.15 },
    { Icon: Braces, label: 'JS', subtitle: 'Web Language', color: '#f7df1e', delay: 0.3 },
    { Icon: FileCode2, label: 'C++', subtitle: 'System Lang', color: '#6295cb', delay: 0.45 },
    { Icon: Terminal, label: 'Python', subtitle: 'Scripting', color: '#ffd43b', delay: 0.6 },
    { Icon: Database, label: 'MongoDB', subtitle: 'NoSQL DB', color: '#47a248', delay: 0.75 },
    { Icon: Cloud, label: 'AWS', subtitle: 'Cloud Infra', color: '#ff9900', delay: 0.9 },
    { Icon: GitBranch, label: 'Git', subtitle: 'Version Ctrl', color: '#f05032', delay: 1.05 },
];

function FloatingIcon({ Icon, label, subtitle, color, delay }) {
    const { theme } = useTheme();

    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4, ease: 'easeOut' }}
        >
            <motion.div
                animate={{
                    y: [0, -8, 0, 6, 0],
                }}
                transition={{
                    duration: 5 + delay * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay,
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
            <span
                className="text-[15px] font-bold tracking-wide text-[var(--color-text-primary)]"
            >
                {label}
            </span>
            <span
                className="text-[12px] font-medium text-[var(--color-text-secondary)] opacity-60 -mt-1"
            >
                {subtitle}
            </span>
        </motion.div>
    );
}

export default function FloatingTechIcons() {
    return (
        <div className="w-full mb-8">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12 py-6">
                {floatingIcons.map((icon, i) => (
                    <FloatingIcon key={i} {...icon} />
                ))}
            </div>
        </div>
    );
}
