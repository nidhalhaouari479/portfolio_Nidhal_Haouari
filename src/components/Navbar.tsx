import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t('nav.home'), to: 'home' },
        { name: t('nav.about'), to: 'about' },
        { name: t('nav.projects'), to: 'projects' },
        { name: t('nav.services'), to: 'services' },
        { name: t('nav.certifications'), to: 'certifications' },
        { name: t('nav.contact'), to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`relative flex items-center justify-between px-6 h-16 rounded-full transition-all duration-500 ${scrolled ? 'glass' : 'bg-transparent'}`}>
                    <div className="flex-shrink-0 font-black text-2xl tracking-tighter text-white">
                        NIDHAL<span className="text-indigo-500">.</span>
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800}
                                    activeClass="!text-white !bg-white/10"
                                    className="cursor-pointer text-slate-400 hover:text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>

                    <div className="flex lg:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-6 top-24 z-[90] lg:hidden"
                    >
                        <div className="glass p-8 rounded-[32px] space-y-4 border border-white/10 shadow-2xl">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800}
                                    className="block cursor-pointer text-xl font-black text-white px-4 py-3 hover:bg-white/5 rounded-2xl transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
