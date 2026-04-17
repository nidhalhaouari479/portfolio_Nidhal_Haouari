import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();



    return (
        <section id="about" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Intro Side */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                                Beyond the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Code</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
                            <p className="text-xl text-slate-400 leading-relaxed font-light">
                                {t('about.intro')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-2 gap-8"
                        >
                            <div className="space-y-2">
                                <h4 className="text-4xl font-black text-white">4+</h4>
                                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Years Experience</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-black text-white">20+</h4>
                                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Projects Done</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-black text-white">10+</h4>
                                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Technologies</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-black text-white">9+</h4>
                                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Certifications</p>
                            </div>
                        </motion.div>

                        {/* Languages Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                Languages
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { lang: 'French', level: 'B2 (Professional)', percent: 75 },
                                    { lang: 'English', level: 'B2 (EnglishScore)', percent: 75 },
                                    { lang: 'Arabic', level: 'Native', percent: 100 },
                                    { lang: 'German', level: 'Beginner', percent: 25 }
                                ].map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-slate-200">{item.lang}</span>
                                            <span className="text-indigo-400">{item.level}</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.percent}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Timeline Side */}
                    <div className="lg:col-span-7 space-y-16">
                        {/* Work Experience */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                                <Briefcase className="text-indigo-500" />
                                Work Experience
                            </h3>

                            <div className="relative space-y-12">
                                {/* Vertical Line */}
                                <div className="absolute left-0 lg:left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent"></div>

                                {(t('about.workExperiences', { returnObjects: true }) as any[]).map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.8 }}
                                        className="relative pl-10"
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-slate-950 border-2 border-indigo-500 z-10"></div>

                                        <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                <div className="space-y-1">
                                                    <h4 className="text-2xl font-black text-white group-hover:text-indigo-400 transition-colors">
                                                        {exp.role}
                                                    </h4>
                                                    <p className="text-indigo-400 font-bold text-sm uppercase tracking-wider">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={14} />
                                                        {exp.period}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin size={14} />
                                                        {exp.location}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-400 font-light leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                                <GraduationCap className="text-pink-500" />
                                {t('about.educationTitle')}
                            </h3>

                            <div className="relative space-y-12">
                                {/* Vertical Line */}
                                <div className="absolute left-0 lg:left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-pink-600 via-purple-600 to-transparent"></div>

                                {(t('about.education', { returnObjects: true }) as any[]).map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.8 }}
                                        className="relative pl-10"
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-slate-950 border-2 border-pink-500 z-10"></div>

                                        <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                <div className="space-y-1">
                                                    <h4 className="text-2xl font-black text-white group-hover:text-pink-400 transition-colors">
                                                        {edu.degree}
                                                    </h4>
                                                    <p className="text-pink-400 font-bold text-sm uppercase tracking-wider">
                                                        {edu.school}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={14} />
                                                        {edu.period}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-400 font-light leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Volunteering Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                                <Award className="text-purple-500" />
                                {t('about.volunteeringTitle')}
                            </h3>

                            <div className="relative space-y-12">
                                {/* Vertical Line */}
                                <div className="absolute left-0 lg:left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-purple-600 via-indigo-600 to-transparent"></div>

                                {(t('about.volunteering', { returnObjects: true }) as any[]).map((vol, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.8 }}
                                        className="relative pl-10"
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-slate-950 border-2 border-purple-500 z-10"></div>

                                        <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                <div className="space-y-1">
                                                    <h4 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">
                                                        {vol.organization}
                                                    </h4>
                                                    <p className="text-purple-400 font-bold text-sm uppercase tracking-wider">
                                                        {vol.role}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={14} />
                                                        {vol.period}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-400 font-light leading-relaxed">
                                                {vol.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
