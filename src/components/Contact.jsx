import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail, Phone, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    // Basic state for the form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., to an API or email service
        console.log('Form Submitted:', formData);
        alert('Thank you for reaching out! I will get back to you soon.');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="relative scroll-mt-32">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-text-primary)] leading-[0.9] tracking-tight uppercase overflow-hidden flex flex-wrap mb-12">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="mr-3"
                >
                    LET'S WORK
                </motion.span>
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.75 }}
                    className="text-[#4D4D4D]"
                >
                    TOGETHER
                </motion.span>
            </h3>

            <div className="flex flex-col gap-16">

                {/* Part 1: The "Work with Me" Zone (Form) */}
                <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-8 lg:p-10 w-full hover:border-[var(--color-accent)] transition-colors duration-300">
                    <motion.form
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        onSubmit={handleSubmit} className="flex flex-col gap-6"
                    >
                        {/* Name & Email Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="flex-1 flex flex-col gap-2">
                                <label htmlFor="name" className="text-[var(--color-text-secondary)] text-sm font-medium tracking-wide">
                                    Full Name <span className="text-[var(--color-accent)]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Jane Doe"
                                    className="w-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[#666] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                />
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="flex-1 flex flex-col gap-2">
                                <label htmlFor="email" className="text-[var(--color-text-secondary)] text-sm font-medium tracking-wide">
                                    Email Address <span className="text-[var(--color-accent)]">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="jane@example.com"
                                    className="w-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[#666] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                />
                            </motion.div>
                        </div>

                        {/* Message Input */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-[var(--color-text-secondary)] text-sm font-medium tracking-wide">
                                Your Message <span className="text-[var(--color-accent)]">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project or role..."
                                className="w-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[#666] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-y"
                            ></textarea>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="mt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ff8f3d] text-white font-bold text-[15px] py-4 px-8 rounded-full transition-colors w-full"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </div>

                {/* Part 2: The "Verify & Connect" Zone (Socials) */}
                <div className="flex flex-col items-center">
                    <p className="text-[var(--color-text-secondary)] uppercase tracking-widest text-[25px] font-bold mb-6">Or Connect With Me Directly</p>
                    {/* Social Grid Zone */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto"
                    >

                        {/* Email Card */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="bg-[var(--color-bg-secondary)] border border-[#f87171]/20 rounded-xl p-6 flex items-start gap-4 hover:border-[#f87171]/50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#ef4444]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Mail className="text-[#ef4444]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[var(--color-text-primary)] font-bold text-[18px] mb-1">Email</h4>
                                <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed mb-3">
                                    Reach out via email. I usually reply within 24-48 hours.
                                </p>
                                <p className="text-[var(--color-text-secondary)] text-[14px]">
                                    Email: <a href="mailto:singharshiya.work@gmail.com" className="text-[#ef4444] hover:underline">singharshiya.work@gmail.com</a>
                                </p>
                            </div>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 flex items-start gap-4 hover:border-[#374151] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Phone className="text-[#22c55e]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[var(--color-text-primary)] font-bold text-[18px] mb-1">Phone</h4>
                                <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed mb-3">
                                    For quicker communication, feel free to drop a message or call.
                                </p>
                                <p className="text-[var(--color-text-secondary)] text-[14px]">
                                    Contact: <span className="text-[#3b82f6]">+91 9821937286</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* GitHub Card */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 flex items-start gap-4 hover:border-[#374151] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[var(--color-text-primary)]/5 flex items-center justify-center flex-shrink-0 mt-1">
                                <Github className="text-[var(--color-text-primary)]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[var(--color-text-primary)] font-bold text-[18px] mb-1">GitHub</h4>
                                <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed mb-3">
                                    Check out my repositories and open source contributions.
                                </p>
                                <p className="text-[var(--color-text-secondary)] text-[14px]">
                                    Profile: <a href="https://github.com/Arshiya2801" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-primary)] hover:underline">Arshiya2801</a>
                                </p>
                            </div>
                        </motion.div>

                        {/* LinkedIn Card */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 flex items-start gap-4 hover:border-[#374151] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#0a66c2]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Linkedin className="text-[#0a66c2]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[var(--color-text-primary)] font-bold text-[18px] mb-1">LinkedIn</h4>
                                <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed mb-3">
                                    Connect with me professionally on LinkedIn.
                                </p>
                                <p className="text-[var(--color-text-secondary)] text-[14px]">
                                    Profile: <a href="https://linkedin.com/in/arshiya-singh" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">/in/arshiya-singh</a>
                                </p>
                            </div>
                        </motion.div>

                        {/* Twitter Card */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } } }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 flex items-start gap-4 hover:border-[#374151] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#1da1f2]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Twitter className="text-[#1da1f2]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[var(--color-text-primary)] font-bold text-[18px] mb-1">Twitter (X)</h4>
                                <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed mb-3">
                                    Follow me for tech discussions and updates.
                                </p>
                                <p className="text-[var(--color-text-secondary)] text-[14px]">
                                    Profile: <a href="https://x.com/ash240272" target="_blank" rel="noopener noreferrer" className="text-[#1da1f2] hover:underline">@ash240272</a>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
