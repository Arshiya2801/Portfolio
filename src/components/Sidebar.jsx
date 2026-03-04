import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-full lg:w-[320px] flex-shrink-0 relative h-full">
            <div className="sticky top-28 bg-white text-black rounded-[1.5rem] p-8 pb-10 flex flex-col items-center text-center shadow-2xl overflow-hidden min-h-[500px]">

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
    );
};

export default Sidebar;
