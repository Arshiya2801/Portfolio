import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-full lg:w-[320px] flex-shrink-0 relative">
            <div className="sticky top-28 bg-white text-black rounded-[2rem] p-6 pb-12 flex flex-col items-center text-center shadow-2xl mt-4">

                {/* Profile Image Placeholder */}
                <div className="w-full aspect-[4/5] mx-auto rounded-[1.5rem] overflow-hidden mb-8 mt-2 bg-[#f97316] flex items-center justify-center shadow-inner relative">
                    <span className="text-white/70 font-bold text-base">Image Placeholder</span>
                </div>

                <h1 className="text-[36px] font-extrabold tracking-tight mb-10 font-sans">
                    Arshiya Singh
                </h1>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-8 w-full mt-auto">
                    <a href="#" className="text-[#f97316] hover:scale-110 transition-transform flex items-center justify-center">
                        <Linkedin size={26} className="stroke-[1.5]" />
                    </a>
                    <a href="#" className="text-[#f97316] hover:scale-110 transition-transform flex items-center justify-center">
                        <Instagram size={26} className="stroke-[1.5]" />
                    </a>
                    <a href="mailto:singharshiya.work@gmail.com" className="text-[#f97316] hover:scale-110 transition-transform flex items-center justify-center">
                        <Mail size={26} className="stroke-[1.5]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
