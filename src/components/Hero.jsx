import React from 'react';
import { Linkedin, Instagram, Mail, ArrowRight, Download, Code2, FolderGit2, Flame } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect';
import GradientBlob from './GradientBlob';
import Tilt from 'react-parallax-tilt';

// Typewriter terminal line — types out text character by character
const TerminalLine = ({ children, delay, color, text }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayedChars, setDisplayedChars] = React.useState(0);
    const [started, setStarted] = React.useState(false);

    // If 'text' prop is provided, use typewriter effect
    const useTypewriter = typeof text === 'string';
    const charSpeed = 25; // ms per character

    React.useEffect(() => {
        if (!isInView || !useTypewriter) return;
        const timer = setTimeout(() => setStarted(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [isInView, delay, useTypewriter]);

    React.useEffect(() => {
        if (!started || !useTypewriter) return;
        if (displayedChars >= text.length) return;
        const timer = setTimeout(() => setDisplayedChars(prev => prev + 1), charSpeed);
        return () => clearTimeout(timer);
    }, [started, displayedChars, text, useTypewriter]);

    if (useTypewriter) {
        return (
            <div ref={ref} style={{ color, minHeight: '1.2em' }}>
                {started ? text.slice(0, displayedChars) : ''}
                {started && displayedChars < text.length && (
                    <span className="inline-block w-1.5 h-3.5 bg-current opacity-70 ml-px animate-pulse" />
                )}
            </div>
        );
    }

    // Fallback for JSX children — use fade-in
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.3, ease: 'easeOut' }}
            style={{ color }}
        >
            {children}
        </motion.div>
    );
};

const AnimatedCounter = ({ from, to, prefix = "+" }) => {
    const ref = React.useRef(null);
    const motionValue = useMotionValue(from);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    React.useEffect(() => {
        if (inView) {
            animate(motionValue, to, {
                duration: 2,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1.5
            });
        }
    }, [motionValue, inView, to]);

    return (
        <span ref={ref} className="inline-flex">
            {prefix}<motion.span>{rounded}</motion.span>
        </span>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative">
            {/* Gradient Blob Background */}
            <GradientBlob />

            {/* Right Column (Main Content) */}
            <div className="flex-1 flex flex-col relative z-10">

                {/* Main Heading Stack */}
                <div className="mb-12">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        className="font-bold text-[var(--color-text-primary)] leading-[0.9] tracking-tight uppercase break-words"
                    >
                        <motion.span variants={{ hidden: { opacity: 0, x: 150, filter: "blur(14px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.85 } } }} className="block text-6xl sm:text-7xl lg:text-[7rem] xl:text-[8rem]">Software</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, x: 150, filter: "blur(14px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.85 } } }} className="block text-[var(--color-text-primary)] text-[2.7rem] sm:text-[3.6rem] lg:text-[5.1rem] xl:text-[5.85rem]">Development</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, x: 150, filter: "blur(14px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.85 } } }} className="block text-[#737373] dark:text-[#737373] text-6xl sm:text-7xl lg:text-[7rem] xl:text-[8rem]">Engineer</motion.span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-[var(--color-text-secondary)] font-medium text-[20px] mb-10 max-w leading-relaxed relative z-20 h-[30px]"
                    >
                        <TypewriterEffect text="Full-Stack Engineer & Algorithmic Problem Solver" delay={800} speed={40} />
                    </motion.div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-16 border-b border-[var(--color-border)] pb-12">
                    <div className="flex flex-col">
                        <span className="text-5xl font-bold text-[var(--color-text-primary)] mb-2"><AnimatedCounter from={0} to={1} /></span>
                        <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-medium">Years of<br />Experience</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-bold text-[var(--color-text-primary)] mb-2"><AnimatedCounter from={0} to={7} /></span>
                        <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-medium">Projects<br />Completed</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-bold text-[var(--color-text-primary)] mb-2"><AnimatedCounter from={0} to={400} /></span>
                        <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-medium">DSA Questions <br />Solved</span>
                    </div>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

                    {/* PART 3 — Code Editor Card (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.8, delay: 0.1 }}
                        whileHover={{
                            scale: 1.015,
                            boxShadow: '0 0 30px rgba(249, 115, 22, 0.15)',
                            borderColor: 'rgba(249, 115, 22, 0.2)',
                            transition: { duration: 0.4, ease: 'easeOut' }
                        }}
                        className="lg:col-span-4 bg-[#0d1117] rounded-[2rem] p-0 relative overflow-hidden flex flex-col min-h-[200px] border border-[#1e2a3a]"
                    >
                        {/* Terminal Header Bar */}
                        <div className="flex items-center gap-2 px-6 py-4 border-b border-[#1e2a3a]">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                            <span className="ml-3 text-[12px] text-[#6b7280] font-mono">arshiya — portfolio</span>
                        </div>

                        {/* Terminal Body */}
                        <div className="px-6 py-5 flex-1 flex flex-col gap-1.5 font-mono text-[12px] sm:text-[13px] leading-relaxed">
                            <TerminalLine delay={0.3} color="#6b7280" text="// about_me.js" />
                            <TerminalLine delay={0.8} color="#c792ea" text='const arshiya = {' />
                            <TerminalLine delay={1.5} color="#ffcb6b" text='  role: "Full-Stack Engineer",' />
                            <TerminalLine delay={2.5} color="#c792ea" text="};" />
                            <div className="h-2" />
                            <TerminalLine delay={2.8} color="#546e7a" text="/**" />
                            <TerminalLine delay={3.0} color="#546e7a" text=" * Passionate about architecting scalable, real-time web applications. I combine a rigorous algorithmic mindset with deep MERN stack expertise to deliver high-performance, optimized architectures." />

                            <TerminalLine delay={8.0} color="#546e7a" text=" * Whether integrating AI-driven features or streamlining backend processing, I bridge complex challenges and intuitive user experiences through clean code." />
                            <TerminalLine delay={12.0} color="#546e7a" text=" */" />

                            {/* Blinking cursor — appears after all lines */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 2.2 }}
                            >
                                <motion.span
                                    className="inline-block w-2 h-4 bg-[#f97316] ml-0.5"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.6, repeat: Infinity, ease: 'steps(2)' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column — Two Stacked Cards */}
                    <div className="lg:col-span-3 flex flex-col gap-6">

                        {/* PART 4 — View Resume Card (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.7, delay: 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                scale={1.03}
                                transitionSpeed={1500}
                                glareEnable={true}
                                glareMaxOpacity={0.08}
                                glareColor="#ffffff"
                                className="rounded-[2rem]"
                            >
                                <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group border border-white/10 hover:border-[#2563eb]/30 dark:hover:border-[#f97316]/30 transition-all duration-300">
                                    {/* Accent left stripe — blue in light, orange in dark */}
                                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#2563eb] to-[#3b82f6] dark:from-[#f97316] dark:to-[#f59e0b]" />

                                    <div className="relative z-10 flex flex-col gap-2 pl-3">
                                        {/* Pulsing icon */}
                                        <motion.div
                                            className="bg-[#2563eb]/10 dark:bg-[#f97316]/10 p-2.5 rounded-xl w-max text-[#2563eb] dark:text-[#f97316]"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                        >
                                            <FolderGit2 size={20} />
                                        </motion.div>
                                        <h3 className="text-[var(--color-text-primary)] font-bold text-lg xl:text-xl uppercase leading-tight">
                                            View My Resume
                                        </h3>
                                    </div>

                                    <motion.a
                                        whileHover={{ scale: 1.1, rotate: -45 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://drive.google.com/file/d/1FjikijeCaoffE8nxvKPpQTsDe7q9nLHy/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                        className="relative z-10 bg-[#2563eb] dark:bg-[#f97316] text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#2563eb] dark:group-hover:text-[#f97316] transition-colors duration-300 cursor-pointer flex-shrink-0"
                                    >
                                        <ArrowRight size={20} className="-rotate-45" />
                                    </motion.a>
                                </div>
                            </Tilt>
                        </motion.div>

                        {/* PART 1 & 2 — New Terminal Card (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.8, delay: 0.3 }}
                            whileHover={{
                                scale: 1.015,
                                boxShadow: '0 0 30px rgba(132, 204, 22, 0.12)',
                                borderColor: 'rgba(132, 204, 22, 0.2)',
                                transition: { duration: 0.4, ease: 'easeOut' }
                            }}
                            className="bg-[#0d1117] rounded-[2rem] p-0 relative overflow-hidden flex-1 flex flex-col border border-[#1e2a3a]"
                        >
                            {/* Terminal Header Bar */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e2a3a]">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                <span className="ml-2 text-[11px] text-[#6b7280] font-mono">arshiya — terminal</span>
                            </div>

                            {/* Terminal Body */}
                            <div className="px-5 py-4 flex-1 flex flex-col gap-1 font-mono text-[11px] sm:text-[12px] leading-relaxed">


                                {/* availability */}
                                <TerminalLine delay={0.3} color="#f97316" text="$ availability" />
                                <TerminalLine delay={0.8} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>open_to_hire: </span>
                                    <span className="text-[#84cc16]">true</span>
                                    <span className="ml-2 inline-flex">
                                        <motion.span
                                            className="inline-block w-2 h-2 rounded-full bg-[#84cc16]"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                boxShadow: [
                                                    '0 0 0px #84cc16',
                                                    '0 0 8px #84cc16',
                                                    '0 0 0px #84cc16'
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                        />
                                    </span>
                                </TerminalLine>
                                <TerminalLine delay={1.0} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>type: </span>
                                    <span className="text-[#84cc16]">fulltime/intern</span>
                                </TerminalLine>
                                <TerminalLine delay={1.2} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>remote: </span>
                                    <span className="text-[#84cc16]">true</span>
                                </TerminalLine>
                                <TerminalLine delay={1.4} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>open_to_relocation: </span>
                                    <span className="text-[#84cc16]">true</span>
                                </TerminalLine>
                                <TerminalLine delay={1.6} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>location: </span>
                                    <span className="text-[#f97316]">"India"</span>
                                </TerminalLine>
                                <TerminalLine delay={1.8} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>response_time: </span>
                                    <span className="text-[#84cc16]">" less 24 hours"</span>
                                </TerminalLine>


                                {/* Blinking cursor — appears after all lines */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 2.2 }}
                                    className="mt-1"
                                >
                                    <motion.span
                                        className="inline-block w-2 h-3.5 bg-[#f97316]"
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 0.6, repeat: Infinity, ease: 'steps(2)' }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
