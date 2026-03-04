import React from 'react';
import { Linkedin, Instagram, Mail, ArrowRight, Download, Code2, FolderGit2, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen gap-12">
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative">

                {/* Left Column (Sticky Sidebar) */}
                <div className="w-full lg:w-[320px] flex-shrink-0 relative">
                    <div className="sticky top-28 bg-white text-black rounded-[1.5rem] p-8 pb-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden min-h-[500px]">

                        {/* Circular Profile Image Placeholder */}
                        <div className="w-60 h-70 mx-auto rounded-[1.5rem] overflow-hidden mb-8 mt-4 bg-gradient-to-br from-[#e85d22] to-[#ff7d45] flex items-center justify-center shadow-inner relative z-20">
                            <span className="text-white/50 font-bold text-sm">Image Placeholder</span>
                        </div>

                        <h1 className="text-[38px] font-extrabold tracking-tight mb-3 max-w-[400px] font-sans relative z-20">
                            Arshiya Singh
                        </h1>



                        {/* Social Icons - mt-auto pushes these to the bottom */}
                        {/* pt-10 creates space above without pushing icons up away from the bottom edge */}
                        <div className="flex items-center justify-center gap-10 mt-auto pt-10 w-full z-10">
                            <a href="#" className="text-[#f97316] hover:scale-110 transition-transform">
                                <Linkedin size={24} className="stroke-[1.5]" />
                            </a>
                            <a href="#" className="text-[#f97316] hover:scale-110 transition-transform">
                                <Instagram size={24} className="stroke-[1.5]" />
                            </a>
                            <a href="mailto:singharshiya.work@gmail.com" className="text-[#f97316] hover:scale-110 transition-transform">
                                <Mail size={24} className="stroke-[1.5]" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column (Main Content) */}
                <div className="flex-1 flex flex-col pt-4">

                    {/* Main Heading Stack */}
                    <div className="mb-12">
                        <h2 className="text-10xl sm:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.9] tracking-tight uppercase">
                            Software<br />
                            <span className="text-white">Development</span><br />
                            <span className="text-[#333333]">Engineer</span>
                        </h2>
                        <p className="text-gray-400 font-medium text-[20px] mb-10 max-w leading-relaxed relative z-20">
                            Full-Stack Engineer & Algorithmic Problem Solver
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-6 mb-16 border-b border-[#222] pb-12">
                        <div className="flex flex-col">
                            <span className="text-5xl font-bold text-white mb-2">+1</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Years of<br />Experience</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-5xl font-bold text-white mb-2">+3</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Projects<br />Completed</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-5xl font-bold text-white mb-2">+400</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">DSA Questions <br />Solved</span>
                        </div>
                    </div>
                    {/* Bento Grid layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

                        {/* Orange Card */}
                        <div className="lg:col-span-4 bg-[#f96332] rounded-[2rem] p-8 pb-10 relative overflow-hidden group flex flex-col justify-end min-h-[200px]">
                            {/* SVG Wavy Background */}
                            <div className="absolute inset-0 pointer-events-none z-0">
                                <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none">
                                    <path d="M-50,150 C50,140 100,200 180,180 C260,160 300,50 450,40 L450,350 L-50,350 Z" fill="#e75727" opacity="0.6" />
                                    <path d="M-50,220 C100,200 150,280 250,230 C350,180 400,100 450,150 L450,350 L-50,350 Z" fill="#d84818" opacity="0.4" />
                                </svg>
                            </div>

                            <div className="absolute top-8 right-8 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-transparent border border-white/30 group-hover:bg-white group-hover:text-[#f96332] transition-colors cursor-pointer text-white">
                                <ArrowRight size={20} strokeWidth={2} />
                            </div>

                            <p className="text-white font-small text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] leading-relaxed relative z-10 w-[95%] ">
                                Passionate about architecting scalable, real-time web applications. I combine a rigorous algorithmic mindset with deep MERN stack expertise to deliver high-performance, optimized system architectures. Whether I am integrating AI-driven features or streamlining backend data processing, I bridge the gap between complex logical challenges and intuitive user experiences through clean, well-documented code.
                            </p>
                        </div>

                        {/* Green Card (Download Resume) */}
                        <div className="lg:col-span-2 bg-[#b3ff3b] rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300 border border-[#a4e612]">
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
                                <h3 className="text-black font-bold text-xl xl:text-1xl uppercase leading-tight mb-5">
                                    Download<br />My Resume
                                </h3>
                                <button className="bg-black text-[#b3ff3b] w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    <Download size={20} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
