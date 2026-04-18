import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
    // 1. STATE MANAGEMENT
    const [selectedProject, setSelectedProject] = useState(null); // Melacak proyek yang diklik
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Melacak urutan gambar di slider

    // Mencegah background website bisa di-scroll saat modal terbuka
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedProject]);

    // 2. DATA PROYEK (Ditambahkan array 'images' untuk slider)
    const projectsData = [
        {
            id: 1,
            title: "DEFEND : Deepfake Efficient Detector",
            description: "An AI-powered system built with EfficientNetB0 and MTCNN to detect video manipulations. Deployed via Streamlit, it utilizes transfer learning to provide real-time confidence scores and facial anomaly analysis based on industry-standard datasets.",
            extendedDesc: "Developed web-based deepfake detection system using EfficientNetB0 and MTCNN. The application performs real-time facial extraction and anomaly detection, providing confidence scores and visual analysis via a Streamlit dashboard. Trained on FaceForensics++ and Celeb-DF datasets to ensure high classification accuracy.",
            tags: ["Deep Learning", "EfficientNet", "Python", "MTCNN", "OpenCV"],
            link: "https://github.com/Dhaoed/DEFEND-Deepfake-Efficient-Detector.git",
            images: [
                "/projects/DEFEND/Id1A.png",
                "/projects/DEFEND/Id1B.png",
                "/projects/DEFEND/Id1C.png",
                "/projects/DEFEND/Id1D.png",
                "/projects/DEFEND/Id1E.png",
                "/projects/DEFEND/Id1F.png",
                "/projects/DEFEND/Id1G.png"
            ]
        },/*
        {
            id: 2,
            title: "NST E-Catalog",
            description: "A streamlined digital storefront for NST Phoneshop that digitizes product inventory. It enhances the customer journey by providing a searchable, high-resolution interface for browsing mobile device specifications and availability.",
            extendedDesc: "Designed a digital storefront for NST Phoneshop to modernize product browsing. The platform digitizes inventory management and enhances customer experience by providing a searchable interface for product specifications and high-resolution imagery.",
            tags: ["ReactJS", "ViteJS", "TailwindCSS", "Typescript", "SupaBase."],
            link: "https://github.com/Dhaoed/NST-E-Catalog.git",
            images: [
                "/projects/NST E-Catalog/Id2A.png",
                "/projects/NST E-Catalog/Id2B.png",
                "/projects/NST E-Catalog/Id2C.png",
                "/projects/NST E-Catalog/Id2D.png",
                "/projects/NST E-Catalog/Id2E.png",
                "/projects/NST E-Catalog/Id2F.png",
                "/projects/NST E-Catalog/Id2G.png"
            ]
        },*/
        {
            id: 3,
            title: "SIMPENAN : Sistem Informasi Penyimpanan dan Pengarsipan",
            description: "A web-based document management platform that transitioned the Bintan Timur District Office from manual to digital filing. It features secure CRUD operations and division-specific dashboards to optimize governmental archiving workflows.",
            extendedDesc: "A web-based document management system for the Bintan Timur District Office. Streamlined government workflows by transitioning manual filing to a secure digital database featuring CRUD operations, document previews, and division-specific dashboards.",
            tags: ["PHP", "HTML", "CSS", "Javascript", "MySQL"],
            link: "https://github.com/Dhaoed/SIMPENAN.git",
            images: [
                "/projects/SIMPENAN/Id3A.png",
                "/projects/SIMPENAN/Id3B.png",
                "/projects/SIMPENAN/Id3C.png",
                "/projects/SIMPENAN/Id3D.png",
                "/projects/SIMPENAN/Id3E.png",
                "/projects/SIMPENAN/Id3F.png",
                "/projects/SIMPENAN/Id3G.png",
                "/projects/SIMPENAN/Id3H.png"
            ]
        },
        {
            id: 4,
            title: "PalVoice : Palestine Voice",
            description: "A Flutter and Firebase mobile application dedicated to humanitarian advocacy. The app centralizes real-time news, donation resources, and consumer awareness tools to support social causes through a unified mobile interface.",
            extendedDesc: "A cross-platform mobile application using Flutter and Firebase to centralize humanitarian information. Features include real-time news feeds, donation tracking, and a database of boycotted products to support social advocacy efforts.",
            tags: ["Flutter", "Dart", "NewsAPI", "Firebase", "Cloud Firestore"],
            link: "https://github.com/Dhaoed/PalVoice.git",
            images: [
                "/projects/Palvoice/Id4A.png",
                "/projects/Palvoice/Id4A.png"
            ]
        },
        {
            id: 5,
            title: "UMKM Bertuah",
            description: "A regional digital platform designed to boost the online visibility of MSMEs in the Riau Islands. It facilitates growth for local entrepreneurs by providing a centralized hub for product promotion and community interaction.",
            extendedDesc: "A digital platform to promote Micro, Small, and Medium Enterprises (MSMEs) in the Riau Islands. The site serves as a central hub to increase the digital visibility of local businesses and facilitate user interaction with regional products.",
            tags: ["HTML", "Javascript", "CSS"],
            link: "https://github.com/Dhaoed/UMKM-Bertuah.git",
            images: [
                "/projects/UMKM Bertuah/Id5A.png",
                "/projects/UMKM Bertuah/Id5B.png",
                "/projects/UMKM Bertuah/Id5C.png",
                "/projects/UMKM Bertuah/Id5D.png",
                "/projects/UMKM Bertuah/Id5F.png"
            ]
        },/*
        {
            id: 6,
            title: "SICERDIK App",
            description: "A specialized web solution that automates the student transfer process. By digitalizing administrative paperwork, the platform ensures a faster, more transparent, and organized workflow for schools and parents alike.",
            extendedDesc: "A specialized web-based solution created to digitize and automate the student transfer process within the school system. By streamlining administrative workflows, the application ensures a more efficient and transparent experience for both educational institutions and parents.",
            tags: ["ReactJS", "ExpressJS", "MongoDB", "RestAPI"],
            link: "https://sicerdik.tanjungpinangkota.go.id/",
            images: [
                "/projects/SICERDIK/Id5A.png",
                "/projects/SICERDIK/Id5B.png"
            ]
        },*/
        {
            id: 7,
            title: "Cancare : A Virtual Assistant for Cancer Patient",
            description: "An AI-integrated support platform providing 24/7 guidance for cancer patients. It uses natural language processing to deliver medical information and emotional support, bridging the gap between healthcare data and patient care.",
            extendedDesc: "Created an AI-powered virtual assistant providing 24/7 information and emotional support for cancer patients and caregivers. The platform leverages natural language processing to deliver empathetic guidance and medical information in an accessible format.",
            tags: ["Watson Assistant", "Virtual Assistant", "IBM Watson.AI"],
            link: "https://github.com/Dhaoed/Cancare.git",
            images: [
                "/projects/Cancare/Id7A.png",
                "/projects/Cancare/Id7B.png",
                "/projects/Cancare/Id7C.png"
            ]
        },
        {
            id: 8,
            title: "Capstone Design Project",
            description: "A 3D architectural visualization and animation project presenting sustainable housing solutions for coastal regions. It integrates landscape modeling and urban design concepts to communicate a 'Smart Community' vision effectively.",
            extendedDesc: "Desgined a 3D architectural visualization and walkthrough animation for a sustainable 'Smart Community' in Kampung Baru Keke. Integrated landscape modeling with urban planning concepts to present a viable housing solution for coastal regions.",
            tags: ["Autodesk 3D Max"],
            link: "https://youtu.be/-dFj8xYPF48",
            images: [
                "/projects/Capstone/Id8A.png",
                "/projects/Capstone/Id8B.png",
                "/projects/Capstone/Id8C.png",
                "/projects/Capstone/Id8D.png",
                "/projects/Capstone/Id8E.png"
            ]
        }
    ];

    // 3. FUNGSI HANDLER MODAL & SLIDER
    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); // Selalu mulai dari gambar pertama
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const nextImage = (e) => {
        e.stopPropagation(); // Mencegah klik tembus ke background (yang menutup modal)
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    };

    // Variasi Animasi
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="projects" className="min-h-screen bg-[#0f1115] py-24 font-sans border-t border-gray-900 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* --- HEADER --- */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center text-center mb-20"
                >
                    <h3 className="text-[#ff9500] font-bold text-lg mb-2">Featured Work
                    <br /><p className="text-[#ff9500] mt-1 mb-2 animate-bounce">▼</p></h3>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center gap-3 flex-wrap leading-tight">
                        Doing <span className="text-[#ff9500]">Project</span> to gain more 
                        <span style={{ fontFamily: 'Impact', letterSpacing: '2px' }} className="text-7xl font-light italic uppercase">
                            EXP
                        </span>
                    </h2>
                    <p className="text-white text-sm font-medium mt-3 tracking-widest opacity-80">
                        Level Up !!!
                    </p>
                </motion.div>

                {/* --- GRID KARTU PROYEK --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {projectsData.map((proj) => (
                        <motion.div 
                            key={proj.id} 
                            variants={cardVariants}
                            onClick={() => openModal(proj)} // Klik kartu untuk membuka modal
                            className="bg-[#171a21] rounded-2xl overflow-hidden border border-gray-800/60 flex flex-col group transition-all duration-500 hover:border-[#ff9500]/30 shadow-xl hover:shadow-[0_20px_50px_rgba(255,149,0,0.1)] cursor-pointer"
                        >
                            {/* Bagian Atas: Gambar Thumbnail */}
                            <div className="w-full h-64 bg-[#08090b] relative overflow-hidden">
                                <img src={proj.images[0]} alt={proj.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-transparent opacity-90"></div>
                            </div>

                            {/* Bagian Bawah: Konten */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-white font-extrabold text-2xl mb-4 group-hover:text-[#ff9500] transition-colors duration-300">
                                    {proj.title}
                                </h3>
                                <p className="text-[#9ca3af] text-[14px] leading-relaxed mb-10 text-justify">
                                    {proj.description}
                                </p>
                                <div className="flex justify-between items-center mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-[#ff9500] text-[#0f1115] text-[10px] font-extrabold px-3.5 py-1.5 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="bg-[#08090b] text-[#ff9500] text-[12px] font-bold px-5 py-2.5 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-[#ff9500] hover:text-black flex items-center gap-2">
                                        View <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* --- POP-UP MODAL SLIDER --- */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal} // Klik di luar area modal untuk menutup
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-10 backdrop-blur-sm"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal ikut menutup modal
                            className="w-full max-w-4xl bg-[#171a21] rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 flex flex-col max-h-[90vh]"
                        >
                            {/* AREA SLIDER GAMBAR */}
                            <div className="relative w-full h-[35vh] md:h-[55vh] bg-[#08090b] flex items-center justify-center group">
                                <img 
                                    src={selectedProject.images[currentImageIndex]} 
                                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                                    className="w-full h-full object-contain" // Ubah object-cover jadi object-contain jika tidak ingin gambar terpotong
                                />
                                
                                {/* Tombol Panah Kiri */}
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-4 w-12 h-12 bg-black/50 hover:bg-[#ff9500] text-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </button>

                                {/* Tombol Panah Kanan */}
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-4 w-12 h-12 bg-black/50 hover:bg-[#ff9500] text-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                {/* Indikator Titik (Dots) di bawah gambar */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {selectedProject.images.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-[#ff9500] w-6' : 'bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* AREA INFO MODAL */}
                            <div className="p-6 md:p-8 bg-[#15181e] flex-1 overflow-y-auto">
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, idx) => (
                                                <span key={idx} className="bg-[#ff9500] text-[#0f1115] text-[11px] font-extrabold px-4 py-1.5 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Tombol Kunjungi Website */}
                                    <a href={selectedProject.link} className="inline-flex items-center gap-2 bg-[#08090b] text-[#ff9500] font-bold px-6 py-3 rounded-lg border border-gray-800 hover:bg-[#ff9500] hover:text-black transition-colors duration-300 flex-shrink-0">
                                        See more<span className="text-lg leading-none">→</span>
                                    </a>
                                </div>

                                <hr className="border-gray-800 mb-6" />

                                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                                    {selectedProject.extendedDesc}
                                </p>
                            </div>

                            {/* Tombol Tutup (X) */}
                            <button onClick={closeModal} className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#ff9500] bg-black/50 p-2 rounded-full backdrop-blur-md transition-colors z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;