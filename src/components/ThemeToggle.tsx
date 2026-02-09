import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 glass rounded-full flex items-center justify-center overflow-hidden group transition-all duration-500 hover:bg-white/10"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                >
                    {theme === 'light' ? (
                        <Moon size={20} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    ) : (
                        <Sun size={20} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
