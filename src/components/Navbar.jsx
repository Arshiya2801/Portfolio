import React from 'react';
import { Home, GraduationCap, Briefcase, FolderGit2, Code2, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Project', icon: FolderGit2, href: '#project' },
    { name: 'Education', icon: GraduationCap, href: '#education' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Contact Me', icon: Mail, href: '#contact' }
];

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#222]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 w-full">

                    {/* Navigation Links */}
                    <div className="flex justify-center w-full px-4 overflow-x-auto">
                        <div className="flex items-center gap-x-8 sm:gap-x-12 md:gap-x-16 min-w-max">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center text-gray-300 hover:text-white transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-70 group"
                                >
                                    <item.icon className="w-4 h-4 mr-2 stroke-[1.5px] text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
