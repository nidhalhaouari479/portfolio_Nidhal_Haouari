import { Github, Linkedin, Mail, Heart } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

export default function Footer() {
    // const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-20 relative overflow-hidden">
            {/* Background decorative blur */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-indigo-600/5 blur-[100px] pointer-events-none"></div>

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="space-y-4">
                        <div className="text-3xl font-black text-white tracking-tighter">
                            NIDHAL<span className="text-indigo-500">.</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-sm font-light leading-relaxed">
                            Crafting high-end digital experiences with a focus on performance,
                            minimalism, and intelligent design.
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-6">
                        <div className="flex gap-4">
                            <a href="https://github.com/nidhalhaouari479" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/nidhal-haouari-b1801124b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:nidhalhaouari57@gmail.com" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500/20 transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                        <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
                            Available for freelance worldwide
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-widest flex items-center gap-2">
                        © {currentYear} Handcrafted with <Heart size={12} className="text-red-500 animate-pulse" /> by Nidhal
                    </p>
                    <div className="flex gap-8">
                        <a href="#home" className="text-slate-600 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
