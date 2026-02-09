import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Copy, Check, AlertCircle } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import { useTranslation } from 'react-i18next';

export default function Contact() {
    // const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [formState, setFormState] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const email = "nidhalhaouari57@gmail.com";
    const publicKey = "_jKlWBagpMABQU1--";
    const serviceId = "service_y3tgsbn";
    const templateId = "template_80t8t8n";

    useEffect(() => {
        emailjs.init(publicKey);
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        if (form.current) {
            emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey
            )
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    setFormState({ user_name: '', user_email: '', user_phone: '', user_message: '' });
                    setTimeout(() => setSubmitStatus('idle'), 5000);
                }, (error) => {
                    console.error('Email sending failed:', error);
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                    // Display the actual error text from EmailJS if available
                    setErrorMessage(error.text || 'Failed to send message. Please check your connection and try again.');
                    setTimeout(() => setSubmitStatus('idle'), 5000);
                });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#4f46e50a_0%,transparent_70%)]"></div>

            <div className="section-container relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white tracking-tight"
                    >
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Connect</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto font-light"
                    >
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-12"
                    >
                        <div className="space-y-8">
                            <div className="group glass p-6 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer" onClick={copyToClipboard}>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email Me</p>
                                        <p className="text-white font-medium text-lg truncate">{email}</p>
                                    </div>
                                    <div className="text-slate-500 group-hover:text-indigo-400 transition-colors">
                                        {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
                                    </div>
                                </div>
                            </div>

                            <div className="group glass p-6 rounded-3xl hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp / Phone</p>
                                        <p className="text-white font-medium text-lg">+216 29 897 262</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group glass p-6 rounded-3xl hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                                        <p className="text-white font-medium text-lg">Tunisia, North Africa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Follow the Journey</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/nidhalhaouari479" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/nidhal-haouari-b1801124b/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form ref={form} onSubmit={sendEmail} className="glass p-8 md:p-12 rounded-[40px] space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Your Name</label>
                                    <input
                                        type="text" name="user_name" required value={formState.user_name} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-light"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email" name="user_email" required value={formState.user_email} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-light"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Phone Number</label>
                                <input
                                    type="tel" name="user_phone" required value={formState.user_phone} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-light"
                                    placeholder="+216 00 000 000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    name="user_message" rows={6} required value={formState.user_message} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-light resize-none"
                                    placeholder="Briefly describe your project or inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-premium-primary justify-center text-lg py-5"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                            </button>

                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 text-center font-medium"
                                    >
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-center font-medium flex items-center justify-center gap-2"
                                    >
                                        <AlertCircle size={18} />
                                        {errorMessage || "Something went wrong. Please try again."}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
