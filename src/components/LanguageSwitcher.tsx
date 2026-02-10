import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'fr', label: 'FR' },
        { code: 'ar', label: 'AR' }
    ];

    return (
        <div className="flex bg-white/5 border border-white/10 rounded-full p-1 self-center">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="relative px-4 py-1.5 rounded-full text-xs font-black transition-all group overflow-hidden"
                >
                    <span className={`relative z-10 transition-colors duration-300 ${i18n.resolvedLanguage === lang.code ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        {lang.label}
                    </span>
                    {i18n.resolvedLanguage === lang.code && (
                        <motion.div
                            layoutId="lang-bg"
                            className="absolute inset-0 bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
