import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Skills = () => {
    // --- STATE UNTUK ROTASI RODA ---
    const [rotation, setRotation] = useState(0);

    const rotateLeft = () => setRotation(prev => prev + 60);
    const rotateRight = () => setRotation(prev => prev - 60);
    
    const spinTransition = { type: "spring", stiffness: 60, damping: 15 };

    // --- DATA KEMAMPUAN UNTUK RODA (DENGAN IKON URL) ---
    // Gunakan URL gambar untuk ikon. Jika dikosongkan (icon: ""), ia akan mengambil 2 huruf pertama
    const skillCategories = [
        { 
            id: 0, 
            name: ["Program","Language"], 
            skills: [
                { name: "C", icon: "/skill-icon/1-c.svg" },
                { name: "C++", icon: "/skill-icon/1-cplusplus.svg" },
                { name: "PHP", icon: "/skill-icon/1-php.svg" },
                { name: "Python", icon: "/skill-icon/1-python.svg" },
                { name: "JavaScript", icon: "/skill-icon/1-javascript.svg" },
                { name: "TypeScript", icon: "/skill-icon/1-typescript.svg" }
            ] 
        },
        { 
            id: 1, 
            name: ["Mobile","Development"], 
            skills: [
                { name: "Flutter", icon: "/skill-icon/2-flutter.svg" },
                { name: "Dart", icon: "/skill-icon/2-dart.svg" }
            ] 
        },
        { 
            id: 2, 
            name: ["Deep & Machine","Learning"], 
            skills: [
                { name: "TensorFlow", icon: "/skill-icon/3-tensorflow.svg" },
                { name: "PyTorch", icon: "/skill-icon/3-pytorch.svg" },
                { name: "Scikit-Learn", icon: "/skill-icon/3-scikitlearn.svg" },
                { name: "Pandas", icon: "/skill-icon/3-pandas.svg" },
                { name: "NumPy", icon: "/skill-icon/3-numpy.svg" },
                { name: "EfficientNet", icon: "/skill-icon/4-EfficientNet.svg" },
                { name: "CNN", icon: "/skill-icon/4-CNN.svg" }
            ] 
        },
        { 
            id: 3, 
            name: ["FrontEnd &","BackEnd"], 
            skills: [
                { name: "React JS", icon: "/skill-icon/2-react.svg" },
                { name: "Node.js", icon: "/skill-icon/4-nodejs.svg" },
                { name: "ExpressJS", icon: "/skill-icon/4-express.svg" },
                { name: "Tailwind", icon: "/skill-icon/4-tailwindcss.svg" },
                { name: "Laravel", icon: "/skill-icon/4-laravel.svg" },
                { name: "CodeIgniter", icon: "/skill-icon/4-codeigniter.svg" }
            ] 
        },
        { 
            id: 4, 
            name: ["UI / UX", "Design"], 
            skills: [
                { name: "Figma", icon: "/skill-icon/5-figma.svg" },
                { name: "WebFlow", icon: "/skill-icon/5-webflow.svg" },
                { name: "PenPot", icon: "/skill-icon/4-PenPot.svg" },
                { name: "MockPlus", icon: "/skill-icon/4-mockplus.svg" },
                { name: "UIzard", icon: "/skill-icon/4-UIzard.svg" },
                { name: "Zeplin", icon: "/skill-icon/5-zeplin.svg" }
            ] 
        },
        { 
            id: 5, 
            name: ["Additional", "Skill"], 
            skills: [
                { name: "Photoshop", icon: "/skill-icon/6-photoshop.svg" },
                { name: "Illustrator", icon: "/skill-icon/5-illustrator.svg" },
                { name: "Affinity", icon: "/skill-icon/6-affinity.svg"},
                { name: "Blender", icon: "/skill-icon/6-blender.svg" },
                { name: "Autodesk 3D Max", icon: "/skill-icon/6-autodesk-3ds-max.svg" },
                { name: "Capcut", icon: "/skill-icon/6-capcut.svg" }
            ] 
        }
    ];

    // --- DATA SERTIFIKAT ---
    const certificates = [
        { id: 1, title: "Red Hat Certified System Administrator (RHCSA)", issuer: "Issued by Red Hat", link: "https://www.credly.com/badges/6c9026ec-33ff-4271-baad-7bb56156e2a3/public_url" },
        { id: 2, title: "Python for Data Science", issuer: "Issued by IBM", link: "https://www.credly.com/badges/3fd1dbe0-2246-421b-8675-7a1e2574abf9/public_url" },
        { id: 3, title: "Enterprise Design Thinking Co-Creator", issuer: "Issued by IBM", link: "https://www.credly.com/badges/b1a5a17d-ce87-480a-bba4-a058712a0006/public_url" },
        { id: 4, title: "Enterprise Design Thinking Practitioner", issuer: "Issued by IBM", link: "https://www.credly.com/badges/b7965ec6-c27c-4fe3-962a-efce1bdb3115/public_url" },
        { id: 5, title: "Enterprise Security in Practice", issuer: "Issued by IBM", link: "https://www.credly.com/badges/7db163c5-83ea-4866-88e1-b23d2f400dc6/public_url" },
        { id: 6, title: "Security Operations Center in Practice", issuer: "Issued by IBM", link: "https://www.credly.com/badges/8efdda69-4b29-4793-a51f-3a918ecd1e88/public_url" },
        { id: 7, title: "Getting Started with Enterprise-grade AI", issuer: "Issued by IBM", link: "https://www.credly.com/badges/b3719c96-f9c0-4af5-ad13-628b06c7518f/public_url" },
        { id: 8, title: "Getting Started with Threat Intelligence and Hunting", issuer: "Issued by IBM", link: "https://www.credly.com/badges/aa7763d0-57f2-45b3-b577-13ef8ffbf4f7/public_url" },
        { id: 9, title: "Building AI Solutions Using Advanced Algorithms and Open Source Frameworks", issuer: "Issued by IBM", link: "https://www.credly.com/badges/791832dd-dddf-4819-8b34-e29136a72d54/public_url" },
        { id: 10, title: "Building Trustworthy AI Enterprise Solutions", issuer: "Issued by IBM", link: "https://www.credly.com/badges/6a9ae5a2-e233-4f10-b08e-d23c34bd5979/public_url" },
        { id: 11, title: "MSIB Certificate", issuer: "Issued by Infinite Learning and MSIB Kampus Merdeka", link: "https://drive.google.com/file/d/1VNwweKIJnNndr8vtJ4bCjvGzYmXJ9-oC/view?usp=sharing" },
        { id: 12, title: "Microsoft Office Specialist", issuer: "Issued by Office Excel", link: "https://drive.google.com/file/d/1-x4Blb0hXTus6QRpQ3UIc04OpzFUUSUA/view?usp=sharing" }
    ];

    // Helper: Membuat Rasi Bintang Skill (Kapasitas Maksimal 8 Node)
    const renderTechNodes = (skills, catAngle) => {
        // Koordinat polar untuk 8 tempat (Cincin dalam, tengah, luar)
        const positions = [
            { r: 240, a: -12 }, { r: 240, a: 12 },   // Ring 1 (Dekat Teks)
            { r: 295, a: -22 }, { r: 295, a: 0 }, { r: 295, a: 22 }, // Ring 2
            { r: 350, a: -15 }, { r: 350, a: 15 },   // Ring 3
            { r: 375, a: 0 }                         // Titik Puncak
        ];

        return skills.map((skill, index) => {
            const pos = positions[index % positions.length]; // Akan looping ke awal jika lebih dari 8
            const finalAngle = (pos.a - 90) * (Math.PI / 180);
            const x = 400 + pos.r * Math.cos(finalAngle);
            const y = 400 + pos.r * Math.sin(finalAngle);

            return (
                <g key={index}>
                    {/* Garis Penghubung Rasi Bintang */}
                    <line x1="400" y1="220" x2={x} y2={y} stroke="white" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.25" />
                    
                    {/* Lingkaran Logo / Ikon (Menerapkan Rotasi Terbalik agar selalu tegak) */}
                    <motion.g 
                        animate={{ rotate: -(rotation + catAngle) }} 
                        style={{ transformOrigin: `${x}px ${y}px` }}
                        transition={spinTransition}
                    >
                        {/* Area penangkap mouse (Pointer Events) diperlebar agar hover lebih mudah */}
                        <foreignObject x={x - 40} y={y - 40} width="80" height="80" className="overflow-visible pointer-events-none">
                            <div className="flex flex-col items-center justify-center w-full h-full pointer-events-auto group">
                                
                                {/* Bulatan Ikon */}
                                <div className="relative flex items-center justify-center w-10 h-10 bg-[#1e2126] border border-gray-700 rounded-full hover:border-[#ff9500] hover:bg-[#ff9500]/10 hover:scale-110 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-20 cursor-pointer">
                                    {/* Merender Logo atau Huruf Initial */}
                                    {skill.icon ? (
                                        <img src={skill.icon} alt={skill.name} className="w-[55%] h-[55%] object-contain opacity-90 group-hover:opacity-100" />
                                    ) : (
                                        <span className="text-[11px] font-extrabold text-gray-300 group-hover:text-[#ff9500]">
                                            {skill.name.substring(0, 2).toUpperCase()}
                                        </span>
                                    )}
                                </div>

                                {/* Tooltip (Muncul saat di hover) */}
                                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-300 bg-[#0f1115] text-[#ff9500] text-[10px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap border border-[#ff9500]/30 shadow-xl z-50 pointer-events-none">
                                    {skill.name}
                                </div>
                            </div>
                        </foreignObject>
                    </motion.g>
                </g>
            );
        });
    };

    // Variasi Animasi Fade In Sertifikat
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    return (
        <section id="skills" className="min-h-screen bg-[#0f1115] py-24 font-sans border-t border-gray-900 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Level Up to unlock <span className="text-[#ff9500]">Skills</span>
                    </h2>
                    <p className="text-[#ff9500] text-sm font-semibold tracking-wide uppercase">
                        Tech stack that I use
                    </p>
                </div>

                {/* --- INTERACTIVE WHEEL --- */}
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-20">
                    <div className="w-full relative aspect-[2/1] overflow-hidden rounded-t-full border-b border-gray-800 drop-shadow-[0_-10px_30px_rgba(255,149,0,0.05)]">
                        <svg viewBox="0 0 800 400" className="w-full h-full">
                            <circle cx="400" cy="400" r="380" fill="#d97706" />
                            
                            <motion.g
                                animate={{ rotate: rotation }}
                                style={{ transformOrigin: "400px 400px" }}
                                transition={spinTransition}
                            >
                                <circle cx="400" cy="400" r="315" stroke="white" strokeWidth="1" strokeDasharray="5 10" opacity="0.1" fill="none" />
                                <circle cx="400" cy="400" r="370" stroke="white" strokeWidth="1" strokeDasharray="2 6" opacity="0.1" fill="none" />

                                {[...Array(6)].map((_, i) => (
                                    <line 
                                        key={i} x1="400" y1="400" x2="400" y2="20" 
                                        stroke="#111827" strokeWidth="4" 
                                        transform={`rotate(${i * 60 + 30}, 400, 400)`} 
                                    />
                                ))}

                                <circle cx="400" cy="400" r="220" fill="#171a21" stroke="#2d3139" strokeWidth="4" />

                                {skillCategories.map((cat, i) => {
                                    const catAngle = i * 60;
                                    return (
                                        <g key={cat.id} transform={`rotate(${catAngle}, 400, 400)`}>
                                            
                                            {/* Label Tengah */}
                                            <motion.g 
                                                animate={{ rotate: -(rotation + catAngle) }} 
                                                style={{ transformOrigin: "400px 270px" }}
                                                transition={spinTransition}
                                            >
                                                <text 
                                                    x="400" y="270" fill="white" fontSize="14" 
                                                    fontWeight="bold" textAnchor="middle" className="uppercase tracking-widest"
                                                >
                                                    {cat.name.map((line, idx) => (
                                                        <tspan key={idx} x="400" dy={idx === 0 ? 0 : 20}>{line}</tspan>
                                                    ))}
                                                </text>
                                            </motion.g>

                                            {/* Eksekusi fungsi Rasi Bintang */}
                                            {renderTechNodes(cat.skills, catAngle)}
                                        </g>
                                    );
                                })}
                            </motion.g>
                        </svg>

                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0f1115] via-[#0f1115]/0 to-[#0f1115] opacity-60"></div>
                    </div>

                    {/* Tombol Kontrol Kiri / Kanan */}
                    <div className="flex gap-6 mt-10">
                        <button onClick={rotateLeft} className="bg-[#fff] hover:bg-[#000] p-3 rounded-xl shadow-[0_0_15px_rgba(255,149,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-[#ff9500] group-hover:scale-110 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button onClick={rotateRight} className="bg-[#fff] hover:bg-[#000] p-3 rounded-xl shadow-[0_0_15px_rgba(255,149,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-[#ff9500] group-hover:scale-110 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* --- CERTIFICATES SECTION --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#15181e] p-6 md:p-10 rounded-2xl border border-gray-800 shadow-2xl"
                >
                    <div className="mb-10 text-center">
                        <h3 className="text-3xl font-bold text-white tracking-wide">
                            Certificate
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">Validating expertise across multiple disciplines</p>
                    </div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                    >
                        {certificates.map((cert) => (
                            <motion.div 
                                key={cert.id}
                                variants={fadeIn}
                                className="flex justify-between items-center bg-transparent border border-gray-700/80 p-4 md:p-5 rounded-xl hover:border-[#ff9500]/50 hover:bg-[#1a1d24] transition-all duration-300 group"
                            >
                                <div className="pr-4">
                                    <h4 className="text-gray-200 text-sm md:text-[15px] font-semibold mb-1 group-hover:text-white transition-colors">
                                        {cert.title}
                                    </h4>
                                    <p className="text-gray-500 text-xs font-medium tracking-wide">
                                        {cert.issuer}
                                    </p>
                                </div>
                                
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-[#ff9500] hover:bg-white text-[#0f1115] text-[10px] md:text-xs font-extrabold px-4 py-2 rounded transition-colors whitespace-nowrap shadow-md inline-block text-center"
                                >
                                    View Certificate
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
