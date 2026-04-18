import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
    // Variasi animasi untuk efek muncul saat di-scroll
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <footer id="footer" className="bg-[#0f1115] pt-24 font-sans">
            {/* --- BAGIAN ATAS: CALL TO ACTION --- */}
            <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                >
                    <h3 className="text-[#ff9500] font-bold text-lg mb-2">Get in touch
                    <br /><p className="text-[#ff9500] mt-1 mb-2 animate-bounce">▼</p></h3>

                    {/*<h3 className="text-[#ff9500] font-bold text-lg tracking-wide">
                        Get in touch
                    </h3>
                    <div className="flex justify-center mt-1 mb-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff9500" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                            <path d="M12 21L23 9H1L12 21Z" />
                        </svg>
                    </div>*/}

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Let's build something <span className="text-[#ff9500]">GREAT</span> together
                    </h2>
                    
                    <p className="text-gray-300 text-md md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                        Have a project you need completed? Interested in doing business?<br className="hidden md:block" />
                        Consider hiring me.
                    </p>
                </motion.div>
            </div>

            {/* --- BAGIAN BAWAH: INFORMASI KONTAK & STATUS --- */}
            <div className="w-full bg-[#15181e] border-t border-gray-800 py-12">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        
                        {/* KIRI: Contact Information (Span 7 kolom) */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-8"
                        >
                            <h4 className="text-white font-bold text-lg mb-6">Contact Information :</h4>
                            
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                {/* Email */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#ff9500] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#0f1115]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-0.5 font-bold">Email :</p>
                                        <p className="text-gray-300 text-md font-medium">mdhaoed@gmail.com</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#ff9500] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0f1115]">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-0.5 font-bold">Phone :</p>
                                        <p className="text-gray-300 text-md font-medium">085274139938</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#ff9500] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#0f1115]">
                                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-0.5 font-bold">Location :</p>
                                        <p className="text-gray-300 text-md font-medium">Kepulauan Riau, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* KANAN: Status & Social Media (Span 4 kolom) */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:col-span-4 flex justify-between items-start"
                        >
                            {/* Teks Status */}
                            <div className="pr-6">
                                <div className="flex items-center gap-3 mb-3">
                                    {/* Indikator Hijau Menyala (Glowing Pulse) */}
                                    <div className="relative flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00ff00] shadow-[0_0_10px_#00ff00]"></span>
                                    </div>
                                    <span className="text-white font-bold text-[15px]">Status : Available for Work</span>
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed text-justify pr-4">
                                    I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or freelance consultant. Let's talk ...
                                </p>
                            </div>

                            {/* Ikon Sosial Media Vertikal */}
                            <div className="flex flex-col gap-4 border-l border-gray-700 pl-6 h-full justify-center">
                                {/* GitHub */}
                                <a href="https://github.com/Dhaoed" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#ff9500] hover:scale-110 transition-all duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0f1115]">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/muhammad-dhaoed-arrazaq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#ff9500] hover:scale-110 transition-all duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0f1115]">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/mdhaoed?igsh=ZjY0ZHNlOWo4cGdu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#ff9500] hover:scale-110 transition-all duration-300">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0f1115]">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                <div className='relative pt-6'>
                <p className='text-gray-500 text small text-center gap-10'>
                    © 2026. Muhammad Dhaoed Arrazaq. All rights reserved.
                </p>
                </div>
        </div>
    </footer>
    );
};

export default Footer;