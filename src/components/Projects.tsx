import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, User, ArrowRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    client: string;
    date: string;
    type: 'academic' | 'freelance' | 'personal';
    mediaType: 'video' | 'image';
    mediaUrl: string;
    liveUrl?: string;
    githubUrl?: string;
    thumbnailUrl?: string;
}

const projects: Project[] = [
    {
        title: '🎓 GSM Guide Academy',
        description: 'A comprehensive educational management platform built with Next.js and Supabase. Features include course management, student enrollment tracking, and an automated email notification system using Nodemailer.',
        technologies: ['Next.js', 'Supabase', 'Nodemailer', 'Tailwind CSS'],
        client: 'GSM Guide Academy',
        date: '2026',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/o1QoxKDEMT0',
        thumbnailUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/nidhalhaouari479/gsm-guide-academy',
        liveUrl: 'https://academy.gsm-guide.com',
    },
    {
        title: '📊 ERP School Dashboard',
        description: 'A high-performance ERP system dashboard for schools, developed with Next.js and Supabase. Provides administrators with real-time analytics, financial reporting, and student performance metrics with a premium user interface.',
        technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'Chart.js'],
        client: 'Private School (Ecole)',
        date: '2026',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/x63Wg-75ZBE',
        thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/nidhalhaouari479/erp-school-dashboard',
        liveUrl: 'https://erp-school.vercel.app',
    },
    {
        title: '✨ Glow-Bio-Builder Platform',
        description: 'A web application developed in 2026 for building personalized bios and profiles. Built with Next.js and Supabase, the platform features fast real-time interactions, user authentication, and smooth UI flows.',
        technologies: ['Next.js', 'Supabase'],
        client: 'Glow-Bio-Builder',
        date: '2026',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/76D2xfHtiR0',
        thumbnailUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/nidhalhaouari479/Glow-Bio-Builder',
        liveUrl: 'https://glow-bio-builder.vercel.app',
    },
    {
        title: '📱 GSM Guide Platform',
        description: 'A platform dedicated to mobile phones where I worked on SEO optimization and digital performance. The project focuses on improving search engine visibility, user tracking, and e-commerce performance.',
        technologies: ['WordPress', 'WooCommerce', 'SEO Tools', 'Google Analytics'],
        client: 'GSM Guide',
        date: '2026',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/CJMLoTGz6C0',
        thumbnailUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/gsm-guide',
        liveUrl: 'https://gsm-guide.example.com',
    },
    {
        title: '💻 Platform for DWE Creation',
        description: 'Web platform for DWE Creation, built with Next.js. Includes email functionalities and database integration.',
        technologies: ['Next.js', 'Supabase', 'NodeMailer'],
        client: 'DWE Creation',
        date: '2026',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/JONcHnlt8EE',
        thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/dwe-creation',
        liveUrl: 'https://dwecreation.com',
    },
    {
        title: '⚽ Intelligent Football Analysis System with AI',
        description: 'Automated AI system for analyzing football matches in real time, detecting players, tracking the ball, differentiating teams, and generating tactical stats.',
        technologies: ['Python', 'OpenCV', 'YOLOv8', 'Roboflow'],
        client: 'AI Sports Analytics',
        date: '2025',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/kH5mNPT8F2k',
        thumbnailUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/football-analysis',
        liveUrl: 'https://football-ai.example.com',
    },
    {
        title: '🏗️ Website for Jomana Travaux',
        description: 'Professional website for Jomana Travaux construction company, built to showcase services and projects.',
        technologies: ['React', 'Next.js', 'Tailwind'],
        client: 'Jomana Travaux',
        date: '2025',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/lVmIu-pFxLc',
        thumbnailUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/jomana-travaux',
        liveUrl: 'https://jomanatravaux.com',
    },
    {
        title: '🌐 Website for Tuniscaling Agency',
        description: 'Professional website for Tuniscaling agency, built with React. Includes contact functionality using NodeMailer.',
        technologies: ['React', 'NodeMailer', 'Vercel'],
        client: 'Tuniscaling',
        date: '2025',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/npw9SSwaV-0',
        thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/tuniscaling',
        liveUrl: 'https://tuniscaling.com',
    },
    {
        title: '🤖 AI Assistant for Izoguern',
        description: 'AI-powered assistant for Izoguern, built with LangChain, RAG, and Prompt Engineering. Integrated with PostgreSQL and Gemini.',
        technologies: ['LangChain', 'RAG', 'PostgreSQL', 'Gemini'],
        client: 'Izoguern Co.',
        date: '2025',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/e4VmV3wNbpg',
        thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/izoguern-ai',
        liveUrl: 'https://ai.izoguern.com',
    },
    {
        title: '🛒 E-commerce Platform for Izoguern',
        description: 'Full-featured e-commerce website for Izoguern, built with Next.js, Tailwind CSS, and Saleor. Optimized as a PWA with PostgreSQL backend.',
        technologies: ['Next.js', 'Saleor', 'PostgreSQL'],
        client: 'Izoguern Co.',
        date: '2025',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/qCGgZe33gpk',
        thumbnailUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/izoguern-shop',
        liveUrl: 'https://izoguern.com',
    },
    {
        title: '✈️ Travel Agency Website',
        description: 'Progressive Web Application for a travel agency based in Poland, built with React for a seamless user experience across all devices.',
        technologies: ['React', 'PWA', 'Tailwind'],
        client: 'GoTravel Poland',
        date: '2024',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/7BSF-poCYBM',
        thumbnailUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/travel-agency',
        liveUrl: 'https://travel-agency.example.com',
    },
    {
        title: '📊 Dashboard Platform for Izoguern',
        description: 'Professional web dashboard for Izoguern, featuring dynamic data visualizations to monitor business metrics and KPIs.',
        technologies: ['React', 'Django', 'Chart.js'],
        client: 'Izoguern Co.',
        date: '2024',
        type: 'freelance',
        mediaType: 'video',
        mediaUrl: 'https://youtu.be/E_rFX8ueyOM',
        thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/izoguern-dashboard',
        liveUrl: 'https://dashboard.izoguern.com',
    },
    {
        title: '🛍️ E-commerce Platform for Brand Sword',
        description: 'Online store for Brand Sword, built with Shopify and Stripe for smooth payments and scalable e-commerce features.',
        technologies: ['Shopify', 'Stripe'],
        client: 'Brand Sword',
        date: '2024',
        type: 'freelance',
        mediaType: 'image',
        mediaUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/brand-sword',
        liveUrl: 'https://brandsword.example.com',
    },
    {
        title: '🏆 Fantasy Tunisia League',
        description: 'An immersive fantasy football platform for the Tunisian league, featuring team management, league creation, and real-time player performance tracking.',
        technologies: ['Angular', 'PHP', 'MySQL'],
        client: 'Tunisian Football Federation',
        date: '2023',
        type: 'freelance',
        mediaType: 'image',
        mediaUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=800',
        thumbnailUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/fantasy-tunisia',
        liveUrl: 'https://fantasy.tunisia.example.com',
    },
    {
        title: '🚀 My Digital',
        description: 'A cutting-edge website for a digital marketing agency, featuring dynamic service showcases, client testimonials, and lead generation functionality.',
        technologies: ['React', 'Tailwind', 'Framer Motion'],
        client: 'My Digital',
        date: '2023',
        type: 'freelance',
        mediaType: 'image',
        mediaUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
        thumbnailUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/example/my-digital',
        liveUrl: 'https://mydigital.example.com',
    },
];

export default function Projects() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const mainProjects = projects.slice(0, 6);
    const otherProjects = projects.slice(6);

    return (
        <section id="projects" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background logic */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="section-container relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white tracking-tighter"
                    >
                        {t('projects.success')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">{t('projects.stories')}</span>
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {mainProjects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            index={index} 
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-20 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        className="group flex items-center gap-4 px-10 py-5 rounded-full bg-indigo-600 text-white font-black text-xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20"
                    >
                        {t('projects.other')} {t('projects.otherProjects')}
                        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.button>
                </div>

                {/* Modals */}
                <AnimatePresence>
                    {isModalOpen && (
                        <OtherProjectsModal
                            projects={otherProjects}
                            onClose={() => setIsModalOpen(false)}
                            onProjectClick={(p) => setSelectedProject(p)}
                        />
                    )}
                    {selectedProject && (
                        <ProjectDetailModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function ProjectDetailModal({ project, onClose }: { project: Project, onClose: () => void }) {
    const { t } = useTranslation();
    const videoId = project.mediaUrl?.includes('youtu.be/')
        ? project.mediaUrl.split('youtu.be/')[1]
        : project.mediaUrl?.includes('v=')
            ? project.mediaUrl.split('v=')[1]?.split('&')[0]
            : '';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-2xl"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl bg-slate-900 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 rounded-2xl bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/10"
                >
                    <X size={24} />
                </button>

                <div className="overflow-y-auto custom-scrollbar">
                    <div className="relative aspect-video bg-black">
                        {project.mediaType === 'video' && videoId ? (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                                title={project.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img
                                src={project.mediaUrl}
                                alt={project.title}
                                className="w-full h-full object-contain"
                            />
                        )}
                    </div>

                    <div className="p-8 md:p-12 space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">{project.title}</h2>
                                <div className="flex flex-wrap items-center gap-6 text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                            <User size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{t('projects.client')}</p>
                                            <p className="text-sm font-bold text-slate-200">{project.client}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                            <Calendar size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{t('projects.year')}</p>
                                            <p className="text-sm font-bold text-slate-200">{project.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm transition-all shadow-lg shadow-indigo-600/20">
                                        Visit Site <ExternalLink size={18} />
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all">
                                        <Github size={24} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="h-px bg-white/5"></div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest">{t('nav.about')} Project</h3>
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-5 py-2.5 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function OtherProjectsModal({ projects, onClose, onProjectClick }: { projects: Project[], onClose: () => void, onProjectClick: (p: Project) => void }) {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl"
        >
            <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="relative w-full max-w-7xl h-full max-h-[90vh] bg-slate-900 rounded-[40px] border border-white/10 overflow-hidden flex flex-col shadow-2xl shadow-indigo-500/20"
            >
                {/* Header */}
                <div className="sticky top-0 z-10 p-8 flex items-center justify-between bg-slate-900/50 backdrop-blur-md border-b border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center">
                            <ArrowRight className="text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                            {t('projects.other')} <span className="text-indigo-400">{t('projects.otherProjects')}</span>
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                                index={index + 6} 
                                onClick={() => {
                                    onProjectClick(project);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function ProjectCard({ project, index, onClick }: { project: Project, index: number, onClick: () => void }) {

    // Extract video ID if it's a YouTube URL
    const videoId = project.mediaUrl?.includes('youtu.be/')
        ? project.mediaUrl.split('youtu.be/')[1]
        : project.mediaUrl?.includes('v=')
            ? project.mediaUrl.split('v=')[1]?.split('&')[0]
            : '';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={onClick}
            className="group relative flex flex-col h-full bg-slate-900/50 rounded-[32px] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
        >
            {/* Media Section */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                {project.mediaType === 'video' && videoId ? (
                    <div className="relative w-full h-full">
                        <iframe
                            className="absolute inset-0 w-full h-full object-cover scale-[1.35] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                        {/* Interactive blocker to allow card hover/click instead of iframe interaction */}
                        <div className="absolute inset-0 z-10"></div>
                    </div>
                ) : (
                    <img
                        src={project.mediaUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none z-20">
                    <div className="absolute bottom-6 left-6 right-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-1"
                        >
                            <div className="flex items-center gap-2 text-indigo-400">
                                <User size={14} className="opacity-70" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{project.client}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                                <Calendar size={14} className="opacity-70" />
                                <span className="text-xs font-bold uppercase tracking-widest">{project.date}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass border-white/10 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md z-30">
                    {project.type}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-black text-white mb-3 leading-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-2 py-1">+ {project.technologies.length - 3}</span>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        {project.liveUrl && (
                            <a 
                                href={project.liveUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all border border-white/5"
                            >
                                Visit Site <ExternalLink size={14} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5"
                            >
                                <Github size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
