import { AnimatedBorderButton } from "../components/BorderButton";

export const About = ({ onShowProjects }) => {
    const handleSneakPeakClick = () => {
        // Ubah state di App.jsx menjadi true (memunculkan Project & Skill)
        if (onShowProjects) onShowProjects();

        // Beri jeda 150ms agar React merender section baru, lalu scroll ke sana
        setTimeout(() => {
            const projectSection = document.getElementById('projects');
            if (projectSection) {
                projectSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150);
    };

    return (
        <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/about-bg.jpg" alt="About Image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#E87F24",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }} />
                ))}
            </div>

            {/* --- KONTEN UTAMA --- */}
            {/* PERBAIKAN: Ubah h-screen menjadi min-h-screen di HP agar konten yang menumpuk tidak terpotong bawahnya */}
            <div className="container mx-auto px-6 min-h-screen md:h-screen flex items-center justify-center py-24 md:py-0 md:pt-24">
                {/* PERBAIKAN: Tambahkan gap-10 di HP agar jarak antara gambar dan teks saat ditumpuk tidak terlalu rapat */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 w-full max-w-6xl items-center relative">

                    {/* BAGIAN KIRI: Siluet, Panah, dan Dekorasi */}
                    <div className="col-span-1 md:col-span-5 relative w-full h-[400px] md:h-[550px] flex justify-center items-end order-1 md:order-none">

                        {/* Teks Role (Kiri Atas) */}
                        <div className="animate-fade-in absolute top-0 md:left-3 flex items-center text-[#ff9500] font-semibold text-lg z-20">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[11px] md:text-sm text-primary">
                                <span className="w-3 h-3 bg-primary [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]" />
                                Software Engineer - Fullstack Developer
                            </span>
                        </div>

                        {/* PANAH Kanan (Disembunyikan di HP dengan hidden md:block) */}
                        <img
                            src="/icon/panah.png"
                            alt="Panah Kiri"
                            className="hidden md:block absolute top-18 right-75 w-50 h-auto z-20 opacity-90 transform rotate-[-110deg] flip-y"
                        />

                        {/* PANAH Kiri (Disembunyikan di HP dengan hidden md:block) */}
                        <img
                            src="/icon/panah.png"
                            alt="Panah Kanan"
                            className="hidden md:block absolute top-[48%] -right-20 w-50 h-auto z-20 opacity-90 transform rotate-[140deg]"
                        />

                        {/* GAMBAR SILUET */}
                        {/* PERBAIKAN: Di HP lebarnya sedikit diperbesar (w-[85%]) agar lebih proporsional */}
                        <img
                            src="/icon/PP.png"
                            alt="Silhouette MDA"
                            className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 h-full w-[85%] md:w-[69%] object-contain relative z-10"
                        />

                        {/* Badge Status (Bawah Kiri) */}
                        <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 bg-[#1e2126] border border-[#2d3139] rounded-full px-4 py-1.5 flex items-center z-20 shadow-xl animate-float whitespace-nowrap">
                            <span className="relative flex h-3 w-3 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff00] shadow-[0_0_10px_#00ff00]"></span>
                            </span>
                            <span className="text-[11px] md:text-xs font-semibold text-gray-200 tracking-wide">Status : Available for Work</span>
                        </div>
                    </div>

                    {/* BAGIAN KANAN: Teks Intro & Tombol */}
                    {/* PERBAIKAN: Hapus padding kiri di HP (pl-0) dan ubah ke rata tengah (text-center) di HP */}
                    <div className="col-span-1 md:col-span-7 pl-0 md:pl-12 space-y-4 relative z-20 order-2 md:order-none text-center md:text-left">

                        {/* WRAPPER BARU: Margin negatif hanya diaktifkan di layar medium ke atas (ml-0 md:-ml-25) */}
                        <div className="ml-0 md:-ml-25 transition-transform">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-200 animate-fade-in">Welcome Visitor, I'm</h2>
                            
                            {/* PERBAIKAN H1: whitespace-normal di HP agar bisa turun baris, text-4xl di HP */}
                            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white whitespace-normal md:whitespace-nowrap tracking-tight leading-tight mb-2 animate-fade-in animate-delay-100">
                                Muhammad Dhaoed Arrazaq
                            </h1>
                        </div>

                        {/* PERBAIKAN P: Ubah rata tengah di HP, dan justify di Desktop */}
                        <p className="text-gray-300 text-sm text-justify md:text-justify leading-relaxed animate-fade-in animate-delay-200 mx-auto md:mx-0">
                            Informatics Engineering graduate from Indonesia, I hold a Bachelor's degree and
                            have gained practical experience in software development such as web or mobile
                            application. I also have strong skills in design, such as UI/UX, graphic design, editing,
                            3D modelling and more.
                        </p>

                        {/* Tombol Aksi */}
                        {/* PERBAIKAN: Di HP tombol ditumpuk (flex-col), di Desktop berjajar (md:flex-row) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-5 pt-4 animate-fade-in animation-delay-100">
                            <button onClick={handleSneakPeakClick} className="w-full sm:w-auto bg-[#ff9500] hover:bg-[#e08300] text-black px-8 py-3 rounded-full font-bold transition shadow-[0_4px_14px_0_rgba(255,149,0,0.39)] cursor-pointer">
                                Sneak Peak
                            </button>
                            <div className="w-full sm:w-auto flex justify-center">
                                <a href="/src/assets/doc/CV. Pribadi.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                <AnimatedBorderButton>
                                    My Resume ➔
                                </AnimatedBorderButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#education" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <p className="animate-bounce">▼</p>
                </a>
            </div>
        </section>
    );
};

export default About;