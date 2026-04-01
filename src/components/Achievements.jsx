import React from 'react';
import { Trophy, Medal, Code2, Flame, Users, Award, Palette, PenTool, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const achievementsData = [
    {
        icon: Trophy,
        title: 'National Road Safety Hackathon',
        highlight: 'Semi-Finalist',
        desc: 'Top 50 out of 5,000+ teams — organized by the Ministry of Road Transport & Highways (MoRTH).',
        color: '#f59e0b'
    },
    {
        icon: Award,
        title: "Engineer's Ring of Honour",
        highlight: '3rd Rank',
        desc: 'Naukri Campus Competition — secured 3rd position with a ₹10,000 prize.',
        color: '#3b82f6'
    },
    {
        icon: Flame,
        title: 'Adobe GenSolve Hackathon',
        highlight: 'Round 2 Qualifier',
        desc: 'Top 4,000 out of 260,000+ participants nationwide.',
        color: '#ef4444'
    },
    {
        icon: Medal,
        title: 'Yalgaar Sports Fest',
        highlight: 'Gold & Bronze Medals',
        desc: 'Gold Medal in Basketball and Bronze Medal in 400m Relay at IIIT Una.',
        color: '#22c55e'
    },
    {
        icon: Code2,
        title: 'Competitive Programming',
        highlight: '400+ Problems Solved',
        desc: 'Across LeetCode (Rating: 1556), CodeChef & GeeksforGeeks.',
        color: '#f97316'
    },
    {
        icon: Users,
        title: 'Open Source Contributor',
        highlight: 'GSSoC 2024',
        desc: 'Active contributor during GirlScript Summer of Code 2024.',
        color: '#8b5cf6'
    },
    {
        icon: Award,
        title: "Ryan's Scholars Award",
        highlight: 'Academic Excellence',
        desc: 'Recognized for outstanding academic performance and overall contribution.',
        color: '#ec4899'
    }
];

const leadershipData = [
    {
        icon: Palette,
        role: 'Design Lead',
        org: 'Eunoia Club',
        desc: 'Leading visual identity, branding, and creative direction for college cultural initiatives.',
        color: '#14b8a6'
    },
    {
        icon: PenTool,
        role: 'Graphic Designer',
        org: 'FORCE Club',
        desc: 'Crafting promotional material, social media graphics, and event branding.',
        color: '#f59e0b'
    },
    {
        icon: Megaphone,
        role: 'Content Writer',
        org: 'EPMOC Club',
        desc: 'Producing engaging written content, articles, and event communications for the club.',
        color: '#8b5cf6'
    }
];

const AchievementCard = ({ data, index }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1, y: 0,
                    transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: index * 0.05 }
                }
            }}
            className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-accent)] transition-all duration-300 group relative overflow-hidden"
        >
            {/* Subtle top-left glow */}
            <div
                className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                style={{ background: data.color }}
            />

            <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
                    style={{ backgroundColor: `${data.color}15` }}
                >
                    <data.icon size={22} style={{ color: data.color }} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 min-w-0">
                    <span
                        className="text-[13px] font-bold uppercase tracking-wider mb-1"
                        style={{ color: data.color }}
                    >
                        {data.highlight}
                    </span>
                    <h4 className="text-[var(--color-text-primary)] text-[17px] font-bold leading-snug mb-1.5">
                        {data.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed">
                        {data.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const LeadershipCard = ({ data, index }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                    opacity: 1, y: 0,
                    transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: index * 0.08 }
                }
            }}
            className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-accent)] transition-all duration-300 group relative overflow-hidden"
        >
            {/* Subtle glow */}
            <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                style={{ background: data.color }}
            />

            <div className="relative z-10 flex items-center gap-4">
                {/* Icon */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: `${data.color}15` }}
                >
                    <data.icon size={24} style={{ color: data.color }} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 min-w-0">
                    <h4 className="text-[var(--color-text-primary)] text-[17px] font-bold leading-snug">
                        {data.role}
                    </h4>
                    <span
                        className="text-[13px] font-semibold tracking-wide"
                        style={{ color: data.color }}
                    >
                        {data.org} — IIIT Una
                    </span>
                    <p className="text-[var(--color-text-secondary)] text-[13px] leading-relaxed mt-1.5">
                        {data.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="relative scroll-mt-32">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-text-primary)] leading-[0.9] tracking-tight uppercase overflow-hidden flex flex-wrap mb-12">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="mr-3"
                >
                    KEY
                </motion.span>
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="text-[#4D4D4D]"
                >
                    ACHIEVEMENTS
                </motion.span>
            </h3>

            {/* Achievement Cards Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {achievementsData.map((achievement, index) => (
                    <AchievementCard key={index} data={achievement} index={index} />
                ))}
            </motion.div>

            {/* Leadership & Involvement Sub-header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 }}
                className="mt-16 mb-8 flex items-center gap-4"
            >
                <div className="h-px flex-1 bg-[var(--color-border)]" />
                <h4 className="text-[var(--color-text-secondary)] uppercase tracking-[0.2em] text-[14px] font-bold whitespace-nowrap">
                    Leadership & Involvement
                </h4>
                <div className="h-px flex-1 bg-[var(--color-border)]" />
            </motion.div>

            {/* Leadership Cards Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                {leadershipData.map((role, index) => (
                    <LeadershipCard key={index} data={role} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default Achievements;
