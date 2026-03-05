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
            {/* Header Area */}
            <div className="text-center mb-16">
                <h3 className="text-5xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[0.9] tracking-tight mb-4">
                    Get In Touch
                    <div className="h-1 w-24 bg-[#3b82f6] mx-auto mt-4 rounded-full"></div>
                </h3>
                <p className="text-[#a3a3a3] text-[16px] max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, opportunities, or just a friendly chat
                </p>
            </div>

            {/* Social Grid Zone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

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
                            Profile: <a href="https://linkedin.com/in/arshiya-singh" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">/in/arshiya-singh-03ab90288</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
