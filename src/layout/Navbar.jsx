import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = ({ onNavClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu HP

    const navLinks = [
        { href: '#about', label: 'About'},
        { href: '#education', label: 'Education'},
        { href: '#experience', label: 'Experience'},
        { href: '#projects', label: 'Project'},
        { href: '#skills', label: 'Skill'},
    ];

    useEffect(() =>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Tutup menu HP setelah diklik

        const id = targetId.replace('#', '');
        if ((id === 'projects' || id === 'skills') && onNavClick) {
            onNavClick();
        }

        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150);
    };

    return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "bg-[#292A2D] backdrop-blur-md py-3" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between"> 
            <a href="#" className="flex items-center gap-0 text-white font-bold text-2xl">
                <img src="/logoweb.svg" alt="Logo MDA" width={50} className="object-contain" />
                <span/> MDA.
            </a>

            {/* Desktop Nav*/}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-3">
                    {navLinks.map((link, index) => (
                        <a 
                            href={link.href} 
                            key={index} 
                            // Pasang event onClick untuk smooth scroll
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Tombol Get in Touch */}
            <div className="hidden md:block">
                <div onClick={(e) => handleSmoothScroll(e, 'footer')} className="cursor-pointer">
                    <Button size="sm">Get in Touch </Button>
                </div>
            </div>

            {/* Tombol Hamburger (Mobile) */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className='md:hidden p-2 text-white hover:text-[#ff9500] transition-colors focus:outline-none'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>
        </nav>

        {/* --- MENU DROPDOWN MOBILE --- */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 w-full bg-[#15181e] border-b border-gray-800 shadow-2xl flex flex-col py-4 px-6 gap-4"
                >
                    {navLinks.map((link, index) => (
                        <a 
                            href={link.href} 
                            key={index} 
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className="text-gray-300 font-bold text-lg hover:text-[#ff9500] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="h-px bg-gray-800 w-full my-2"></div>
                    <div onClick={(e) => handleSmoothScroll(e, 'contact')} className="cursor-pointer">
                        <button className="w-full bg-[#ff9500] text-black font-bold py-3 rounded-lg hover:bg-white transition-colors">
                            Get in Touch
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </header>
    );
};