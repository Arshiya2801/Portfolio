import React from 'react';
import { Linkedin, Instagram, Mail, ArrowRight, Download, Code2, FolderGit2, Flame } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect';

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
                repeatDelay: 1.5 // Decreased delay so it loops more continuously
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
            {/* Right Column (Main Content) */}
            <div className="flex-1 flex flex-col">

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
                        className="text-[var(--color-text-secondary)] font-medium text-[20px] mb-10 max-w leading-relaxed relative z-20 h-[30px]" // fixed height to prevent jitter
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
                        <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wideeducar font-medium">Projects<br />Completed</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-bold text-[var(--color-text-primary)] mb-2"><AnimatedCounter from={0} to={400} /></span>
                        <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-medium">DSA Questions <br />Solved</span>
                    </div>
                </div>
                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

                    {/* Orange Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-4 bg-[#f96332] rounded-[2rem] p-8 pb-10 relative overflow-hidden group flex flex-col justify-end min-h-[200px]"
                    >
                        {/* SVG Wavy Background */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                            <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none">
                                <path d="M-50,150 C50,140 100,200 180,180 C260,160 300,50 450,40 L450,350 L-50,350 Z" fill="#e75727" opacity="0.6" />
                                <path d="M-50,220 C100,200 150,280 250,230 C350,180 400,100 450,150 L450,350 L-50,350 Z" fill="#d84818" opacity="0.4" />
                            </svg>
                        </div>

                        {/* <div className="relative top-0 left-0 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-transparent border border-white/30 group-hover:bg-white group-hover:text-[#f96332] transition-colors cursor-pointer text-white">
                                <ArrowRight size={20} strokeWidth={2} />
                            </div> */}

                        <p className="text-white font-small text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] leading-relaxed relative z-10 w-[95%] text-justify ">
                            Passionate about architecting scalable, real-time web applications. I combine a rigorous algorithmic mindset with deep MERN stack expertise to deliver high-performance, optimized system architectures. Whether I am integrating AI-driven features or streamlining backend data processing, I bridge the gap between complex logical challenges and intuitive user experiences through clean, well-documented code.
                        </p>
                    </motion.div>

                    {/* Green Card (View Resume) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6, delay: 0.35 }}
                        className="lg:col-span-2 bg-[#b3ff3b] rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border border-[#a4e612]"
                    >
                        {/* SVG Zig-Zag Background */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                            <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none">
                                <path d="M0,200 L50,150 L100,350 L150,50 L200,280 L250,20 L300,220 L350,80 L400,250" fill="none" stroke="#addb25" strokeWidth="4" />
                                <path d="M0,280 L80,220 L120,400 L180,150 L240,350 L300,120 L350,280 L400,150" fill="none" stroke="#9bc91a" strokeWidth="2" opacity="0.5" />
                            </svg>
                        </div>

                        <div className="bg-black/10 p-3 rounded-xl backdrop-blur-sm w-max mb-8 relative z-10 text-black">
                            <FolderGit2 size={24} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-black font-bold text-xl xl:text-2xl uppercase leading-tight mb-4">
                                View My <br />Resume
                            </h3>
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://drive.google.com/file/d/1FjikijeCaoffE8nxvKPpQTsDe7q9nLHy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-black text-[#b3ff3b] w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors cursor-pointer"
                            >
                                <ArrowRight size={20} className="-rotate-45" />
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
