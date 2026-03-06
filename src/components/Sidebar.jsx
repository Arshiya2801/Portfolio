import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 }}
            className="w-full lg:w-[335px] flex-shrink-10 relative"
        >
            <div className="sticky top-28 bg-white text-black rounded-[2rem] p-6 pb-12 flex flex-col items-center text-center shadow-2xl mt-4">

                {/* Profile Image */}
                <div className="w-full aspect-[4/5] mx-auto rounded-[1.5rem] overflow-hidden mb-8 mt-2 shadow-inner relative group">
                    <img
                        src="/profile.jpg"
                        alt="Arshiya Singh"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <h1 className="text-[36px] font-extrabold tracking-tight mb-2 font-sans">
                    Arshiya Singh
                </h1>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-8 mb-4 w-full mt-auto">
                    <motion.a
                        whileHover={{ y: -3, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        href="https://linkedin.com/in/arshiya-singh" target="_blank" rel="noopener noreferrer" className="text-[#f97316] flex items-center justify-center">
                        <Linkedin size={26} className="stroke-[1.5]" />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -3, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        href="https://github.com/Arshiya2801" target="_blank" rel="noopener noreferrer" className="text-[#f97316] flex items-center justify-center">
                        <Github size={26} className="stroke-[1.5]" />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -3, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        href="mailto:singharshiya.work@gmail.com" className="text-[#f97316] flex items-center justify-center">
                        <Mail size={26} className="stroke-[1.5]" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default Sidebar;
