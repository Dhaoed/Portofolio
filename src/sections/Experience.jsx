import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { AnimatedBorderButton } from '../components/BorderButton';

export const Experience = ({ onShowProjects }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const experienceData = [
        {
            id: 1,
            date: "June 2023 - November 2025",
            title: "Phoneshop Shopkeeper & Frontliner | Part Time",
            location: "NST Phoneshop",
            bullets: [
                "Successfully provides targeted product consultations, able to provide customers the information they need and educating them on technical specifications so they can purchase devices that meet their needs and ensure a successful transaction.",
                "Able to process daily transactions—both cash and non-cash—quickly and accurately for purchases of devices, accessories, phone credit, internet packages, and top-up services.",
                "Experienced in managing visual display layouts and conducting regular stock checks (stock takings) to ensure data accuracy and the condition of merchandise, as well as arranging products on the shelves to keep them visually appealing and enhance their market value.",
                "Able to handle, respond to, and provide solutions for customer complaints and product return processes to maintain customer trust in the store.",
                "Successfully collaborates synergistically with sales colleagues and agents to optimize the store's operational efficiency from opening to closing."
            ]
        },
        {
            id: 2,
            date: "July 2024 - August 2024",
            title: "Full-Stack Web Developer | Intership",
            location: "Kantor Camat",
            bullets: [
                "Building three websites for institutional needs (subdistrict profile portal, web-based archive system SIMANTAP and SIMPENAN).",
                "Designed, developed, and implemented 'SIMPENAN' a full-stack web application to digitize the entire archival process.",
                "Effectively improved data accessibility and security by digitized all archived data into MySQL database,  increase overall efficiency for the institution.",
                "Successfully lead a team to complete the project on time during a 2-month internship."
            ]
        },
        {
            id: 3,
            date: "August 2023 - December 2023",
            title: "IBM AI & Cybersecurity Mentee | Certified Independent Study",
            location: "Infinite Learning, PT Kinema Systrans Multimedia",
            bullets: [
                "Specialized in IBM AI and Cybersecurity and Red Hat Certified System Administrator (RHCSA).",
                "Completed a comprehensive 6-month course in IBM AI and Cyber Security and Red Hat Enterprise Linux (RHEL).",
                "Achieved Red Hat Certified System Administrator (RHCSA) certification, demonstrating expertise in Linux administration, automation, and troubleshooting.",
                "Designed, developed 'Cancare,' and implemented a generative AI-based virtual assistant capstone project provided by IBM Watsonx.ai.",
                "Successfully participated in an intensive independent study program focused on AI and Cybersecurity under the guidance of Infinite Learning Indonesia, fully funded by the Ministry of Education, Culture, Research, and Technology of Indonesia."
            ]
        },
        {
            id: 4,
            date: "November 2021 - May 2023",
            title: "Printing Operator | Part Time",
            location: "Toko Viacom",
            bullets: [
                "Able to independently operate and perform technical maintenance on various types of printing machines to ensure equipment readiness and minimize daily operational issues.",
                "Successfully ensures optimal print quality standards through meticulous quality control, a deep understanding of color accuracy, and the selection of appropriate paper specifications.",
                "Possesses a deep understanding of optimal print quality standards through meticulous quality control, color accuracy, and paper selection.",
                "Experienced in handling customer requests directly by providing quick solutions for document typing and editing services, contributing to high customer satisfaction.",
                "Able to manage the entire workflow from start to finish, from preparing raw materials (ink and paper), processing various types of official documents, to the final finishing stage (laminating) with results meeting operational standards.",
                "Possesses work resilience, such as the ability to work under pressure and good time management in a dynamic environment, with full dedication to the smooth daily operations of the store."
            ]
        }
    ];

    const bulletContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        }
    };

    const bulletItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const handleShowProjectsClick = () => {
        if (onShowProjects) onShowProjects();
        setTimeout(() => {
            const projectSection = document.getElementById('projects');
            if (projectSection) {
                projectSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150); 
    };

    return (
        <section id="experience" className="bg-[#0f1115] min-h-screen py-24 font-sans overflow-x-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* --- HEADER --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 w-full text-center md:text-left"
                >
                    <h3 className="text-[#ff9500] font-bold text-lg mb-2 uppercase tracking-widest">Work Experience</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        <span className="text-[#ff9500]">EXP-erience</span> that help me Level Up !!!
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto md:mx-0">
                        Perjalanan dan pengalaman selama kuliah membantu membentuk keterampilan teknis dan soft-skill saya di bidang teknologi.
                    </p>
                </motion.div>

                {/* --- TIMELINE AREA --- */}
                <div ref={containerRef} className="relative mt-10 md:mt-20 pb-10">
                    
                    {/* WADAH GARIS TENGAH */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[3px] z-0">
                        <div className="absolute inset-0 bg-[#2a2d34] w-full h-full rounded-full"></div>
                        <motion.div 
                            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                            className="absolute inset-0 bg-[#ff9500] w-full shadow-[0_0_15px_#ff9500] rounded-full"
                        ></motion.div>
                    </div>

                    {/* Mapping Data Pengalaman */}
                    {experienceData.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={exp.id} className="relative mb-16 md:mb-28 w-full flex flex-col md:flex-row items-start md:items-center group">
                                
                                {/* Titik Orange pada Garis Tengah */}
                                <motion.div 
                                    initial={{ scale: 0, backgroundColor: "#2a2d34" }}
                                    whileInView={{ scale: 1, backgroundColor: "#ff9500" }}
                                    viewport={{ once: false, amount: 0.8 }}
                                    transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 border-[4px] border-[#0f1115] shadow-[0_0_15px_#ff9500] mt-1.5 md:mt-0 transition-transform duration-300 group-hover:scale-125"
                                ></motion.div>

                                {/* --- BAGIAN TANGGAL --- */}
                                <motion.div 
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={`w-full md:w-1/2 pl-14 md:pl-0 mb-4 md:mb-0
                                        ${isEven ? 'md:pl-16 lg:pl-24 md:order-2 text-left' : 'md:pr-16 lg:pr-24 md:order-1 md:text-right text-left'}
                                        order-1`}
                                >
                                    <h3 className="text-white font-black text-3xl md:text-4xl tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg whitespace-nowrap">
                                        {exp.date}
                                    </h3>
                                </motion.div>

                                {/* --- BAGIAN KARTU PENGALAMAN --- */}
                                <motion.div 
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={`w-full md:w-1/2 pl-12 md:pl-0
                                        ${isEven ? 'md:pr-16 lg:pr-24 md:order-1 md:text-right' : 'md:pl-16 lg:pl-24 md:order-2 md:text-left'}
                                        order-2`}
                                >
                                    <div className="bg-[#15181e] p-7 md:p-9 rounded-2xl border border-gray-800 shadow-2xl transition-all duration-500 group-hover:border-[#ff9500]/50 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(255,149,0,0.15)] relative overflow-hidden">
                                        
                                        {/* Aksen Glow di Sudut Kartu (Hanya muncul saat di-hover) */}
                                        <div className={`absolute top-0 w-32 h-32 bg-[#ff9500] opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700 pointer-events-none ${isEven ? 'left-0' : 'right-0'}`}></div>

                                        {/* Header Kartu: Judul & Lokasi */}
                                        <div className={`mb-6 ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                                            <h4 className="text-white text-2xl font-bold group-hover:text-[#ff9500] transition-colors duration-300">
                                                {exp.title}
                                            </h4>
                                            
                                            <p className={`text-gray-400 text-sm mt-2 flex items-center gap-1.5 ${isEven ? 'md:justify-end justify-start' : 'justify-start'}`}>
                                                {exp.location}
                                            </p>
                                        </div>

                                        {/* Deskripsi (Bullets) */}
                                        <div className="text-gray-300 text-[15px] leading-relaxed relative z-10">
                                            <motion.ul 
                                                variants={bulletContainerVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false }}
                                                className="space-y-3 list-none pl-0"
                                            >
                                                {exp.bullets.map((bullet, i) => (
                                                    // Menggunakan flex-row-reverse di Desktop (Jika Kiri) agar rapi
                                                    <motion.li 
                                                        key={i} 
                                                        variants={bulletItemVariants}
                                                        className={`flex items-start ${isEven ? 'md:flex-row-reverse flex-row' : 'flex-row'}`}
                                                    >
                                                        {/* Ikon Diamond Orange */}
                                                        <span className={`text-gray-300 group-hover:text-[#ff9500] mt-1.5 text-[10px] ${isEven ? 'md:ml-3 mr-3 md:mr-0' : 'mr-3'}`}>
                                                            ◆
                                                        </span>
                                                        <span className={`text-gray-300 ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                                                            {bullet}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                {/* --- TOMBOL BAWAH --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-10 flex justify-center"
                >
                    <div onClick={handleShowProjectsClick} className="cursor-pointer">
                        <AnimatedBorderButton>
                            Show All My Project ➔
                        </AnimatedBorderButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
