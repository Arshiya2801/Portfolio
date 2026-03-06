import React from 'react';
import { Home, GraduationCap, Briefcase, FolderGit2, Code2, Mail, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Project', icon: FolderGit2, href: '#project' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Education', icon: GraduationCap, href: '#education' },
    { name: 'Contact Me', icon: Mail, href: '#contact' }
];

const Navbar = () => {
    const [activeSection, setActiveSection] = React.useState('#home');
    const { theme, toggleTheme } = useTheme();

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.querySelector(item.href));
            const scrollPos = window.scrollY + window.innerHeight / 3;

            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                    setActiveSection('#' + section.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 w-full">

                    {/* Navigation Links */}
                    <div className="flex justify-center w-full px-4 overflow-x-auto">
                        <div className="flex items-center gap-x-8 sm:gap-x-12 md:gap-x-16 min-w-max">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveSection(item.href)}
                                    className="relative flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 ease-in-out opacity-100 py-2 group"
                                >
                                    <item.icon className={`w-4 h-4 mr-2 stroke-[1.5px] transition-colors ${activeSection === item.href ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'}`} />
                                    <span className={`text-sm font-medium ${activeSection === item.href ? 'text-[var(--color-text-primary)]' : ''}`}>{item.name}</span>
                                    {activeSection === item.href && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ))}

                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-[var(--color-bg-secondary)] transition-colors ml-4 text-[var(--color-text-primary)]"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
