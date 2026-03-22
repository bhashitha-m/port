import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
           style={{ 
             backgroundImage: `linear-gradient(#4f4f4f 1px, transparent 1px), linear-gradient(90deg, #4f4f4f 1px, transparent 1px)`, 
             backgroundSize: '45px 45px' 
           }}>
      </div>
      
      {/* Glowing background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] z-0"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-4xl px-6 py-3 bg-[#0c0c1d]/60 backdrop-blur-xl border border-white/10 rounded-full">
        <div className="text-white font-bold text-xl italic tracking-tighter cursor-pointer">PORTFOLIO</div>
        <div className="hidden md:flex gap-8 text-gray-400 text-sm font-medium">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Work</a>
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-xs font-bold hover:scale-105 transition">
          Let's Talk 📞
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
        <h3 className="text-white text-lg font-medium mb-3 flex items-center gap-2">
          Hey 👋 I'm
        </h3>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase">
          BHASHITHA MANUPPRIYA
        </h1>
        <p className="text-gray-400 text-lg italic uppercase tracking-widest">A passionate</p>
        <h2 className="text-[#ff3b3b] text-4xl md:text-5xl font-black italic uppercase mt-2 mb-6 drop-shadow-[0_0_15px_rgba(255,59,59,0.3)]">
          Software Developer
        </h2>
        
        {/* Profile Image */}
        <div className="relative group mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative w-64 h-80 bg-[#1a1a2e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <Image 
              src="/me.jpg"
              alt="Profile Picture"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <p className="text-gray-500 max-w-lg text-sm md:text-base leading-relaxed mb-8">
          Crafting pixel-perfect, high-performance web applications using modern technologies. 
          Ready to turn your ideas into reality.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-[#8b5cf6] text-white rounded-full font-bold flex items-center gap-3 hover:bg-[#7c3aed] transition-all shadow-lg shadow-purple-500/20">
            Download CV ⬇️
          </button>
          <button className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
            My Projects
          </button>
        </div>
      </div>

      {/* --- Manu Dev Logo with Smooth Scroll --- */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed top-1 left-8 z-50 group transition-all duration-500"
      >
        <div className="relative w-80 h-32 cursor-pointer transition-transform duration-300 group-hover:scale-105">
          <Image 
            src="/logo.png" 
            alt="Manu Dev Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
      </a>

      {/* --- අලුතින් එකතු කරපු කොටස (About & Skills) --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <h2 className="text-white text-3xl font-bold mb-6 border-l-4 border-purple-500 pl-4 uppercase">
              About Me
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              "I am a driven Software Engineering Undergraduate at OUSL with a focus on building scalable, efficient digital solutions. With a solid foundation in Full-Stack development, I bridge the gap between complex backend logic and intuitive user experiences. My journey is fueled by a passion for solving real-world problems through clean code and innovative design. Always learning, always building."
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-gray-300 text-sm">Problem Solver</span>
              <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-gray-300 text-sm">UI/UX Enthusiast</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="text-white text-xl font-semibold mb-6">My Tech Stack</h3>
            <div className="grid grid-cols-3 gap-6">
              {['Next.js', 'React', 'Tailwind', 'TypeScript', 'Node.js', 'Figma'].map((skill) => (
                <div key={skill} className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-[#0c0c1d] border border-white/10 rounded-xl flex items-center justify-center group-hover:border-purple-500 transition-colors mb-2">
                    <span className="text-[10px] text-gray-400 font-bold">{skill[0]}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-tighter">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work & Education Section */}
      <section id="work" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-white text-4xl font-extrabold mb-2 uppercase tracking-tight flex items-center gap-3">
            Work & Education <span className="text-3xl">🎓</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl">
            An overview of my professional experience and academic journey, showcasing the skills and knowledge I've gained along the way.
          </p>
        </div>

        <div className="relative border-l border-gray-800 ml-4 md:ml-0 md:grid md:grid-cols-2 md:border-l-0 gap-x-12 gap-y-10">
          
          {/* මැද තියෙන සිරස් ඉර (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-800 -translate-x-1/2"></div>

          {/* Item 1 - Junior Developer (Left Side) */}
          <div className="relative mb-12 md:mb-0 md:text-right">
            <div className="hidden md:block absolute top-2 -right-[50px] w-4 h-4 bg-red-600 rounded-full border-4 border-[#030014] z-20"></div>
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold mb-3">
              2024 - Present
            </span>
            <h3 className="text-red-500 font-bold text-lg">Junior Developer</h3>
            <h4 className="text-white font-semibold mb-2">Self Employed / Freelance</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md md:ml-auto">
              I design responsive websites, implement Figma designs, and write clean, efficient code using React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Item 2 - Master's Degree (Right Side) */}
          <div className="relative mb-12 md:mb-0 md:pt-20">
            <div className="hidden md:block absolute top-[88px] -left-[50px] w-4 h-4 bg-red-600 rounded-full border-4 border-[#030014] z-20"></div>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold mb-3">
              2022 - 2024
            </span>
            <h3 className="text-red-500 font-bold text-lg">Software Engineering Diploma</h3>
            <h4 className="text-white font-semibold mb-2">Professional Institute</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Focusing on building core programming skills, data structures, and modern web application development.
            </p>
          </div>

          {/* Item 3 - Web Developer Internship (Left Side) */}
          <div className="relative md:text-right">
            <div className="hidden md:block absolute top-2 -right-[50px] w-4 h-4 bg-red-600 rounded-full border-4 border-[#030014] z-20"></div>
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold mb-3">
              2021 - 2023
            </span>
            <h3 className="text-red-500 font-bold text-lg">Web Developer - Internship</h3>
            <h4 className="text-white font-semibold mb-2">Tech Solutions</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md md:ml-auto">
              Assisted in developing and maintaining web applications using HTML, CSS, JavaScript, and other related technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer hover:rotate-12 transition transform active:scale-90">
          💬
        </div>
      </div>
    </main>
  );
}