import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
    const certifications = [
        {
            name: 'Certified Red Team Operations Management (CRTOM)',
            issuer: 'Red Team Leaders',
            date: '2025',
            link: '/certificates/Certified Red Team Operations Management (CRTOM).png',
            image: '/certificates/Certified Red Team Operations Management (CRTOM).png',
            logo: 'https://ui-avatars.com/api/?name=RTL&background=ef4444&color=fff&size=128', // Fallback for RTL
            color: 'from-red-600 to-orange-600'
        },
        {
            name: 'Premiers pas avec Cisco Packet Tracer',
            issuer: 'Cisco',
            date: '2025',
            link: '/certificates/Premiers pas avec Cisco Packet Tracer.png',
            image: '/certificates/Premiers pas avec Cisco Packet Tracer.png',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Qdrant Essentials',
            issuer: 'Qdrant',
            date: '2026',
            link: '/certificates/Qdrant Essentials.png',
            image: '/certificates/Qdrant Essentials.png',
            logo: 'https://qdrant.tech/images/logo_with_text.png',
            color: 'from-red-500 to-pink-500'
        },
        {
            name: 'AWS ML Engineer Associate',
            issuer: 'Amazon Web Services',
            date: '2026',
            link: '/certificates/AWS ML Engineer Associate Curriculum Overview.png',
            image: '/certificates/AWS ML Engineer Associate Curriculum Overview.png',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
            color: 'from-orange-500 to-yellow-500'
        },
        {
            name: 'Python Data Analysis Bootcamp',
            issuer: 'Udemy',
            date: '2025',
            link: '/certificates/Python Data Analysis Bootcamp - Pandas, Seaborn and Plotly.jpg',
            image: '/certificates/Python Data Analysis Bootcamp - Pandas, Seaborn and Plotly.jpg',
            logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            name: 'Agentic AI with LangChain and LangGraph',
            issuer: 'Coursera',
            date: '2025',
            link: '/certificates/Agentic AI with LangChain and LangGraph.png',
            image: '/certificates/Agentic AI with LangChain and LangGraph.png',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            name: 'Offensive Agent AI Course',
            issuer: 'Red Team Leaders',
            date: '2026',
            link: '/certificates/Offensive Agent AI Course.png',
            image: '/certificates/Offensive Agent AI Course.png',
            logo: 'https://ui-avatars.com/api/?name=RTL&background=ef4444&color=fff&size=128',
            color: 'from-red-700 to-red-500'
        },
        {
            name: 'SEO Certification',
            issuer: 'HubSpot Academy',
            date: '2025',
            link: '/certificates/SEO.jpg',
            image: '/certificates/SEO.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/HubSpot_Logo.png/1200px-HubSpot_Logo.png',
            color: 'from-orange-400 to-red-400'
        },
        {
            name: 'Use Generative AI for Software Development',
            issuer: 'IBM',
            date: '2025',
            link: '/certificates/Use Generative AI for Software Development.jpg',
            image: '/certificates/Use Generative AI for Software Development.jpg',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png',
            color: 'from-blue-400 to-teal-400'
        }
    ];

    return (
        <section id="certifications" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Geometric backgrounds */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div>

            <div className="section-container relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold uppercase tracking-widest mb-4"
                    >
                        <Award size={16} />
                        Achievements
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight"
                    >
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Verifications</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Certificate Image Preview */}
                            <div className="relative aspect-video overflow-hidden bg-slate-900">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                                {/* Issuer Logo Badge */}
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 p-2 flex items-center justify-center">
                                    <img
                                        src={cert.logo}
                                        alt={cert.issuer}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                <div className="space-y-2 mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
                                        {cert.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium">
                                        Issued by <span className="text-slate-200">{cert.issuer}</span>
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                        {cert.date}
                                    </span>

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider hover:text-indigo-300 transition-colors"
                                    >
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
