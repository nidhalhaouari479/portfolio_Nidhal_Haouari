import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MousePointer2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse duration-700"></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse duration-1000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="section-container relative z-10 w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-indigo-400 font-medium text-sm tracking-widest uppercase"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            {t('hero.greeting')}
                        </motion.div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
                                {t('hero.name').split(' ')[0]} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 text-glow">
                                    {t('hero.name').split(' ').slice(1).join(' ')}
                                </span>
                            </h1>
                            <h2 className="text-2xl md:text-4xl text-slate-300 font-light tracking-tight max-w-2xl">
                                {t('hero.role')}
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light">
                            {t('hero.description')}
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 w-full">
                            <a
                                href="/images/cv_nidhal_haouari.pdf"
                                download="Nidhal_Haouari_CV.pdf"
                                className="w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-premium-primary w-full sm:w-auto flex items-center justify-center gap-2"
                                >
                                    <span className="relative flex h-3 w-3 mr-1">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                    </span>
                                    {t('hero.downloadCV')}
                                </motion.button>
                            </a>
                            <Link to="projects" smooth={true} offset={-64} duration={800} className="w-full sm:w-auto">

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-premium-primary w-full sm:w-auto"
                                >
                                    {t('hero.viewProjects')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.button>
                            </Link>
                            <Link to="contact" smooth={true} offset={-64} duration={800} className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-premium-secondary w-full sm:w-auto"
                                >
                                    {t('hero.contact')}
                                </motion.button>
                            </Link>

                            <div className="flex items-center gap-4 py-4 px-6 rounded-full glass mt-4 lg:mt-0 lg:ml-auto">
                                <a href="https://github.com/nidhalhaouari479" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="GitHub">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/nidhal-haouari-b1801124b/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="mailto:nidhalhaouari57@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="Email">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] group">
                            {/* Animated ring */}
                            <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute -inset-4 rounded-full border border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]"></div>

                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-700 bg-slate-900 group">
                                <img
                                    src="/images/myphoto.jpg"
                                    alt="Developer Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Accent elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-indigo-500"
                >
                    <MousePointer2 size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
