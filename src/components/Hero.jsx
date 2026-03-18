import React from 'react';
import { Linkedin, Instagram, Mail, ArrowRight, Download, Code2, FolderGit2, Flame } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect';
import GradientBlob from './GradientBlob';
import Tilt from 'react-parallax-tilt';

// Reusable animated terminal line component
const TerminalLine = ({ children, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3, ease: 'easeOut' }}
        style={{ color }}
    >
        {children}
    </motion.div>
);

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
                            <TerminalLine delay={0.3} color="#6b7280">{`// about_me.js`}</TerminalLine>
                            <TerminalLine delay={0.5} color="#c792ea">{`const`} <span className="text-[#82aaff]">arshiya</span> <span className="text-white">=</span> {`{`}</TerminalLine>
                            <TerminalLine delay={0.7} color="#ffcb6b">{`  role`}<span className="text-white">{`: `}</span><span className="text-[#c3e88d]">"Full-Stack Engineer"</span><span className="text-white">,</span></TerminalLine>
                            <TerminalLine delay={0.9} color="#c792ea">{`};`}</TerminalLine>
                            <div className="h-2" />
                            <TerminalLine delay={1.1} color="#546e7a">{`/**`}</TerminalLine>
                            <TerminalLine delay={1.3} color="#546e7a">{` * Passionate about architecting scalable, real-time web applications. I combine a rigorous algorithmic mindset  with deep MERN stack expertise to deliver high-performance, optimized architectures.`}</TerminalLine>

                            <TerminalLine delay={1.6} color="#546e7a">{` * Whether integrating AI-driven features or streamlining backend processing, I bridge complex challenges and intuitive user experiences through clean code.`}</TerminalLine>

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
                                <div className="bg-[#b3ff3b] rounded-[2rem] p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group border border-[#a4e612]">
                                    {/* SVG Zig-Zag Background */}
                                    <div className="absolute inset-0 pointer-events-none z-0">
                                        <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
                                            <path d="M0,100 L50,60 L100,130 L150,30 L200,110 L250,20 L300,90 L350,40 L400,100" fill="none" stroke="#addb25" strokeWidth="3" />
                                            <path d="M0,120 L80,80 L120,140 L180,50 L240,120 L300,60 L350,100 L400,70" fill="none" stroke="#9bc91a" strokeWidth="2" opacity="0.4" />
                                        </svg>
                                    </div>

                                    <div className="relative z-10 flex flex-col gap-2">
                                        {/* Pulsing icon */}
                                        <motion.div
                                            className="bg-black/10 p-2.5 rounded-xl backdrop-blur-sm w-max text-black"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                        >
                                            <FolderGit2 size={20} />
                                        </motion.div>
                                        <h3 className="text-black font-bold text-lg xl:text-xl uppercase leading-tight">
                                            View My Resume
                                        </h3>
                                    </div>

                                    <motion.a
                                        whileHover={{ scale: 1.1, rotate: -45 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://drive.google.com/file/d/1FjikijeCaoffE8nxvKPpQTsDe7q9nLHy/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                        className="relative z-10 bg-black text-[#b3ff3b] w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 cursor-pointer flex-shrink-0"
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
                                <TerminalLine delay={2.0} color="#f97316">{`$ availability`}</TerminalLine>
                                <TerminalLine delay={2.2} color="#6b7280">
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
                                <TerminalLine delay={2.4} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>type: </span>
                                    <span className="text-[#84cc16]">fulltime/intern</span>
                                </TerminalLine>
                                <TerminalLine delay={2.6} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>remote: </span>
                                    <span className="text-[#84cc16]">true</span>
                                </TerminalLine>
                                <TerminalLine delay={2.6} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>open_to_relocation: </span>
                                    <span className="text-[#84cc16]">true</span>
                                </TerminalLine>
                                <TerminalLine delay={2.8} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>location: </span>
                                    <span className="text-[#f97316]">"India"</span>
                                </TerminalLine>
                                <TerminalLine delay={2.6} color="#6b7280">
                                    <span className="text-[#84cc16]">▸ </span>
                                    <span>response_time: </span>
                                    <span className="text-[#84cc16]">"24 hours"</span>
                                </TerminalLine>


                                {/* Blinking cursor — appears after all lines */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 3.0 }}
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
