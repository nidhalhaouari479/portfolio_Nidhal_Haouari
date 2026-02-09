import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Layout, ShieldCheck, TerminalSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const { t } = useTranslation();

    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: Layout,
            color: 'from-blue-500 to-cyan-400',
            skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'Flutter', 'Bootstrap', 'PWA']
        },
        {
            title: 'Backend & Systems',
            icon: Database,
            color: 'from-indigo-500 to-purple-400',
            skills: ['Python', 'Django', 'Flask', 'Spring Boot', 'PostgreSQL', 'Node-RED', 'SQL', 'MongoDB']
        },
        {
            title: 'AI & Data Science',
            icon: Cpu,
            color: 'from-purple-500 to-pink-400',
            skills: ['LangChain', 'RAG', 'Prompt Engineering', 'TensorFlow', 'PyTorch', 'YOLOv8', 'OpenCV', 'Spark']
        },
        {
            title: 'Tools & DevOps',
            icon: ShieldCheck,
            color: 'from-emerald-500 to-teal-400',
            skills: ['Docker', 'Git', 'Vercel', 'Supabase', 'Saleor', 'Shopify', 'CI/CD', 'UML']
        },
        {
            title: 'Languages',
            icon: TerminalSquare,
            color: 'from-orange-500 to-yellow-400',
            skills: ['Python', 'JavaScript', 'C', 'Java', 'R', 'PHP', 'Dart', 'PL/SQL']
        }
    ];

    return (
        <section id="services" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="section-container relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight"
                    >
                        Arsenal of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto font-light"
                    >
                        My technical toolkit is constantly evolving, focusing on tools that enable high-performance, scalable, and intelligent applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl group hover:border-white/20 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-500`}>
                                <category.icon className="text-white" size={28} />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-6 group-hover:text-indigo-400 transition-colors">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
