import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const KNOWLEDGE_BASE = {
    skills: [
        "React", "TypeScript", "Next.js", "Django", "Tailwind CSS",
        "LangChain", "RAG", "Prompt Engineering", "PostgreSQL",
        "Stripe", "GraphQL", "Python", "OpenCV", "YOLOv8", "Saleor"
    ],
    projects: [
        {
            name: "Glow-Bio-Builder Platform",
            description: "A real-time platform for building personalized bios, built with Next.js and Supabase."
        },
        {
            name: "AI Assistant for Izoguern",
            description: "Advanced AI chatbot using LangChain and RAG for intelligent data retrieval."
        },
        {
            name: "E-commerce Platform for Izoguern",
            description: "Full-featured e-commerce solution using Next.js, Saleor, and GraphQL."
        }
    ],
    experience: "Nidhal is a Full-Stack & AI Developer with 4+ years of experience. He specializes in building premium web applications and AI solutions with tools like Django, Stripe, and LangChain.",
    contact: "You can reach Nidhal at nidhalhaouari57@gmail.com or via WhatsApp at +216 29 897 262. He is based in Tunisia and available for freelance worldwide."
};

const SUGGESTIONS = [
    "Tell me about your AI expertise",
    "Describe your projects",
    "What is your tech stack?",
    "How to contact you?"
];

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm Nidhal's AI assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const botResponse = generateResponse(text);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const generateResponse = (input: string): string => {
        const query = input.toLowerCase();

        if (query.includes('skill') || query.includes('tech') || query.includes('stack')) {
            return `Nidhal specializes in ${KNOWLEDGE_BASE.skills.slice(0, 5).join(', ')}, and many more. He's an expert in building scalable full-stack applications with React and Next.js.`;
        }

        if (query.includes('project') || query.includes('work') || query.includes('build')) {
            return `He has worked on several high-impact projects like the ${KNOWLEDGE_BASE.projects[0].name} and ${KNOWLEDGE_BASE.projects[1].name}. His work focuses on performance and user experience.`;
        }

        if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('hire')) {
            return KNOWLEDGE_BASE.contact;
        }

        if (query.includes('experience') || query.includes('background') || query.includes('years')) {
            return KNOWLEDGE_BASE.experience;
        }

        if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
            return "Hello! I can tell you all about Nidhal's technical expertise, his portfolio projects, or how to get in touch with him. What would you like to know?";
        }

        return "I'm not sure I understand that yet, but I can tell you about Nidhal's skills, projects, and contact information. Try asking 'What are your skills?'";
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 shadow-2xl shadow-indigo-500/40 flex items-center justify-center text-white border border-white/20 group overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                            <MessageSquare size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-white/20 translate-y-16 group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-28 right-8 z-[100] w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] glass rounded-[32px] overflow-hidden flex flex-col border border-white/10 shadow-2xl flex-container"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-tight">AI Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                        <span className="text-white/70 text-[10px] uppercase font-black tracking-widest leading-none">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10, x: msg.sender === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-indigo-600' : 'bg-slate-800'} text-white`}>
                                            {msg.sender === 'user' ? <User size={14} /> : <Sparkles size={14} />}
                                        </div>
                                        <div className={`p-4 rounded-2xl text-sm font-light leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/20'
                                            : 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        <div className="px-6 pb-2 overflow-x-auto">
                            <div className="flex gap-2 pb-2">
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => handleSend(s)}
                                        className="whitespace-nowrap px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-500/30 transition-all uppercase tracking-widest"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-6 pt-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
                                    placeholder="Ask about skills, projects..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-6 pr-14 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-light text-sm"
                                />
                                <button
                                    onClick={() => handleSend(inputValue)}
                                    className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
