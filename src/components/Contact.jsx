import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail, Phone } from 'lucide-react';

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
        <section id="contact" className="pt-24 pb-20 relative">
            {/* Header */}
            <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[0.9] tracking-tight uppercase mb-12">
                LET'S WORK
                <span className="text-[#4D4D4D]"> TOGETHER</span>
            </h3>

            <div className="flex flex-col gap-16">

                {/* Part 1: The "Work with Me" Zone (Form) */}
                <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl p-8 lg:p-10 w-full hover:border-[#333] transition-colors duration-300">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Name & Email Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="name" className="text-[#E5E5E5] text-sm font-medium tracking-wide">
                                    Full Name <span className="text-[#f97316]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Jane Doe"
                                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#f97316] transition-colors"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="email" className="text-[#E5E5E5] text-sm font-medium tracking-wide">
                                    Email Address <span className="text-[#f97316]">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="jane@example.com"
                                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#f97316] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-[#E5E5E5] text-sm font-medium tracking-wide">
                                Your Message <span className="text-[#f97316]">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project or role..."
                                className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#f97316] transition-colors resize-y"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-2">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ff8f3d] text-white font-bold text-[15px] py-4 px-8 rounded-full transition-colors w-full"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Part 2: The "Verify & Connect" Zone (Socials) */}
                <div className="flex flex-col items-center">
                    <p className="text-[#666] uppercase tracking-widest text-[25px] font-bold mb-6">Or Connect With Me Directly</p>
                    {/* Social Grid Zone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">

                        {/* Email Card */}
                        <div className="bg-[#11131a] border border-[#f87171]/20 rounded-xl p-6 flex items-start gap-4 hover:border-[#f87171]/50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#ef4444]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Mail className="text-[#ef4444]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold text-[18px] mb-1">Email</h4>
                                <p className="text-[#a3a3a3] text-[14px] leading-relaxed mb-3">
                                    Reach out via email. I usually reply within 24-48 hours.
                                </p>
                                <p className="text-[#888888] text-[14px]">
                                    Email: <a href="mailto:singharshiya.work@gmail.com" className="text-[#ef4444] hover:underline">singharshiya.work@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-[#11131a] border border-[#1f2937] rounded-xl p-6 flex items-start gap-4 hover:border-[#374151] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Phone className="text-[#22c55e]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold text-[18px] mb-1">Phone</h4>
                                <p className="text-[#a3a3a3] text-[14px] leading-relaxed mb-3">
                                    For quicker communication, feel free to drop a message or call.
                                </p>
                                <p className="text-[#888888] text-[14px]">
                                    Contact: <span className="text-[#3b82f6]">+91 9821937286</span>
                                </p>
                            </div>
                        </div>

                        {/* GitHub Card */}
                        <div className="bg-[#11131a] border border-[#1f2937] rounded-xl p-6 flex items-start gap-4 hover:border-[#374151] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                                <Github className="text-white" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold text-[18px] mb-1">GitHub</h4>
                                <p className="text-[#a3a3a3] text-[14px] leading-relaxed mb-3">
                                    Check out my repositories and open source contributions.
                                </p>
                                <p className="text-[#888888] text-[14px]">
                                    Profile: <a href="https://github.com/Arshiya2801" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Arshiya2801</a>
                                </p>
                            </div>
                        </div>

                        {/* LinkedIn Card */}
                        <div className="bg-[#11131a] border border-[#1f2937] rounded-xl p-6 flex items-start gap-4 hover:border-[#374151] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#0a66c2]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Linkedin className="text-[#0a66c2]" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold text-[18px] mb-1">LinkedIn</h4>
                                <p className="text-[#a3a3a3] text-[14px] leading-relaxed mb-3">
                                    Connect with me professionally on LinkedIn.
                                </p>
                                <p className="text-[#888888] text-[14px]">
                                    Profile: <a href="https://linkedin.com/in/arshiya-singh" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">/in/arshiya-singh</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
