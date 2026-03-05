import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-full lg:w-[350px] flex-shrink-10 relative">
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
