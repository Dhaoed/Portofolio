import React from 'react';

export const Education = () => {
    return (
        // id="education" agar menu navigasi bisa scroll ke bagian ini
        <section id="education" className="min-h-screen bg-[#0f1115] flex items-center py-20 font-sans">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                    
                    {/* KOLOM KIRI: About Me */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#ff9500] text-xl tracking-wide">About Me</h3>
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                <span className="text-transparent bg-clip-text text-white gap-3">
                                    Everything is Under </span>
                                <span className="font-mono bg-[#1a1d24] px-3 py-1 rounded-md border border-gray-700 text-gray-400">Ctrl</span> 
                            </h2>
                        </div>
                        
                        {/* Paragraf Deskripsi */}
                        <div className="space-y-5 text-gray-300 text-[15px] leading-relaxed text-justify">
                            <p>
                                As a recent Informatics Engineering graduate, I hold a Bachelor's degree and have gained practical experience in software development, coding, and graphic design.
                            </p>
                            <p>
                                I am capable of working both independently and in a team. Currently, I am building my interest in AI development (artificial intelligence), deep learning, and machine learning, such as object detection, face recognition, and image or video classification, while occasionally exploring DevOps in my free time.
                            </p>
                            <p>
                                I've always been passionate about technology and digital developments and eager to continuously learn new things in order to adapt and make a real contribution to the industry.
                            </p>
                        </div>

                        {/* Quote Box (Kotak "lorem Ipsum") */}
                        <div className="bg-[#1a1d24] mt-1 p-6 md:p-8 rounded-xl border border-gray-800 shadow-inner">
                            <p className="text-gray-200 italic font-light">"I’m not afraid of failing & falling on my own, I’m afraid if others have to fail & fall alongside me "</p>
                        </div>
                    </div>

                    {/* KOLOM KANAN: Education Card */}
                    <div className="bg-[#15181e] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl flex flex-col">
                        
                        <h2 className="text-3xl font-bold text-white text-center mb-10 tracking-wide">
                            Education
                        </h2>
                        
                        <div className="space-y-8 flex-grow">
                            {/* Gelar & Universitas */}
                            <div>
                                <h4 className="font-semibold text-white text-lg">
                                    Bachelor Degree of Informatics Engineering
                                </h4>
                                <p className="text-[#20b2aa] text-sm mt-1">
                                    Universitas Maritim Raja Ali Haji (UMRAH)
                                </p>
                                <p className="text-gray-400 text-sm mt-3">
                                    Grade Point Average (GPA): <span className="text-white font-medium">3.55 / 4.00</span>
                                </p>
                            </div>

                            {/* Info Skripsi (Thesis) */}
                            <div>
                                <h5 className="font-semibold text-white text-[15px]">Thesis :</h5>
                                <p className="text-gray-400 text-sm mt-1.5 leading-relaxed text-justify">
                                    Analysis and Implementation of Transfer Learning to Identifying Deepfake Videos using EfficientNet Model.
                                </p>
                            </div>

                            {/* Info Jurnal */}
                            <div>
                                <h5 className="font-semibold text-white text-[15px]">Journal :</h5>
                                <p className="text-gray-400 text-sm mt-1.5 leading-relaxed text-justify">
                                    EfficientNet : Rethinking Model Scaling for Convolutional Neural Networks.
                                </p>
                            </div>
                        </div>

                        {/* Tombol Aksi Bawah */}
                        <div className="flex flex-wrap gap-4 mt-12 justify-center">
                            <a 
                                href="/doc/My Thesis Full Text.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#ff9500] hover:bg-[#e87f24] text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300 shadow-lg flex items-center gap-2"
                            >
                                My Thesis <span className="text-lg leading-none">→</span>
                            </a>
                            <a 
                                href="https://drive.google.com/drive/folders/1A4mTKA9MpnojE-3A37s_JpWI5XQmkpPb?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#ff9500] hover:bg-[#e87f24] text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300 shadow-lg flex items-center gap-2"
                            >
                                Journal <span className="text-lg leading-none">→</span>
                            </a>
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
