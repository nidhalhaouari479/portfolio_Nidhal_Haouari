import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PREDEFINED_LOGOS = [
    { name: 'GSM', src: '/clients/gsmlogo.webp' },
    { name: 'Sword', src: '/clients/sword.jpg' },
    { name: 'Son of Bear', src: '/clients/son-of-bear-logo-DfmRjPeU.png' },
    { name: '74rx', src: '/clients/logo-74rx_T3v.jpg' },
    { name: '1630', src: '/clients/1630668424746.jpg' },
    { name: '2530', src: '/clients/253036_624408.webp' },
    { name: '87c2', src: '/clients/87c2d9d0-c576-412f-94ea-9000707424c4.png' },
    { name: 'DWE', src: '/clients/dwe-logo-transparent.webp' },
    { name: 'GSM Guide', src: '/clients/gsm-guide-h-logo.svg' },
    { name: 'Capture', src: '/clients/capture.png' },
    { name: 'Client 11', src: '/clients/280068972_100127616039937_9222057076771347962_n (2).png' },
];

export default function Clients() {
    const { t } = useTranslation();

    // Duplicate logos to ensure a seamless infinite scroll loop
    const row1 = [...PREDEFINED_LOGOS, ...PREDEFINED_LOGOS];
    
    // Reverse or shuffle the second row for visual variety
    const row2 = [...PREDEFINED_LOGOS].reverse();
    const row2Duplicated = [...row2, ...row2];

    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                        {t('clients.title', 'Trusted by our clients')}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t('clients.subtitle', "We’ve worked with amazing brands")}
                    </p>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative flex flex-col gap-8 md:gap-12 w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                {/* Row 1: Left to Right */}
                <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
                    {row1.map((logo, idx) => (
                        <div 
                            key={`row1-${logo.name}-${idx}`} 
                            className="flex items-center justify-center mx-4 md:mx-8 w-[120px] h-[60px] md:w-[160px] md:h-[80px]"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out mix-blend-multiply dark:mix-blend-screen dark:brightness-[2] dark:hover:brightness-100"
                            />
                        </div>
                    ))}
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
                    {row2Duplicated.map((logo, idx) => (
                        <div 
                            key={`row2-${logo.name}-${idx}`} 
                            className="flex items-center justify-center mx-4 md:mx-8 w-[120px] h-[60px] md:w-[160px] md:h-[80px]"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out mix-blend-multiply dark:mix-blend-screen dark:brightness-[2] dark:hover:brightness-100"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
