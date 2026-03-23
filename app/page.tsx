"use client";
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, MessageCircle, Facebook, AtSign, Code, Database, PenTool, Users, Layout, Lightbulb, Menu, X } from 'lucide-react';
import TypewriterText from './components/TypewriterText';
import ScrollReveal from './components/ScrollReveal';
import MouseTrail from './components/MouseTrail';
import { Particles } from './registry/magicui/particles';
import { HyperText } from './registry/magicui/hyper-text';
import { BorderBeam } from './registry/magicui/border-beam';
import { ShineBorder } from './registry/magicui/shine-border';
emailjs.init('tcUnROxGRHeHMNya6');

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_d0kzaag', 
        'template_jdoc5ed', 
        form.current
      )
      .then((_: any) => {
          alert("Send massage successfully! I'll get back to you soon. ");
          form.current?.reset(); // Form එක හිස් කරන්න
      }, (_error: any) => {
          alert("Try again! Something went wrong.");
      });
    }
  };

  function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className="relative min-h-screen bg-[#030014] overflow-hidden text-white font-sans selection:bg-purple-500/30">
      
      {/* Particles Background */}
      <Particles quantity={400} color="#ffffff" staticity={50} ease={50} />
      
      {/* Mouse Trail Effect */}
      <MouseTrail />
      
      {/* Background Styling - Asfakur Look */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#4f4f4f 1px, transparent 1px), linear-gradient(90deg, #4f4f4f 1px, transparent 1px)`, backgroundSize: '45px 45px' }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-600/5 via-transparent to-transparent z-0"></div>

      {/* --- Clickable Logo with Smooth Scroll --- */}
      <a 
        href="#" 
        onClick={scrollToTop}
        className="fixed top-4 left-8 z-50 group"
      >
        <div className="relative w-48 h-16 cursor-pointer transition-transform duration-300 group-hover:scale-105">
          <Image 
            src="/logo.png" 
            alt="Manu Dev Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
      </a>

      {/* Navigation Bar - Responsive */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full px-4 md:w-auto md:px-0">
        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <BorderBeam className="rounded-full w-auto">
            <nav className="flex flex-row items-center justify-center gap-6 px-8 py-3 bg-[#0c0c1d]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl whitespace-nowrap">
              <div className="flex flex-row gap-6 text-gray-400 text-xs font-medium">
                <a 
                  href="#home" 
                  onClick={scrollToTop} 
                  className={`nav-link transition ${activeSection === 'home' ? 'text-orange-500 font-bold' : 'hover:text-white'}`}
                >
                  Home
                </a>
                <a 
                  href="#who-i-am" 
                  className={`nav-link transition ${activeSection === 'who-i-am' ? 'text-orange-500 font-bold' : 'hover:text-white'}`}
                >
                  Who I Am
                </a>
                <a 
                  href="#skills" 
                  className={`nav-link transition ${activeSection === 'skills' ? 'text-orange-500 font-bold' : 'hover:text-white'}`}
                >
                  Skill
                </a>
                <a 
                  href="#projects" 
                  className={`nav-link transition ${activeSection === 'projects' ? 'text-orange-500 font-bold' : 'hover:text-white'}`}
                >
                  Project
                </a>
                <a 
                  href="#timeline" 
                  className={`nav-link transition ${activeSection === 'timeline' ? 'text-orange-500 font-bold' : 'hover:text-white'}`}
                >
                  Timeline
                </a>
                <a 
                  href="#volunteer" 
                  className={`nav-link transition ${activeSection === 'volunteer' ? 'text-orange-500 font-bold' : 'hover:text-white'}`}
                >
                  Volunteer
                </a>
              </div>
              
              <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-200 transition inline-block">
                Contact 
              </a>
            </nav>
          </BorderBeam>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0c0c1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="text-white font-bold text-sm">Menu</div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-orange-500 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide Out */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-50 md:hidden"
        >
          <div className="mx-4 bg-[#0c0c1d]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={(e) => {
                  scrollToTop(e);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition ${
                  activeSection === 'home'
                    ? 'text-orange-500 font-bold bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </a>
              <a
                href="#who-i-am"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition ${
                  activeSection === 'who-i-am'
                    ? 'text-orange-500 font-bold bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Who I Am
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition ${
                  activeSection === 'skills'
                    ? 'text-orange-500 font-bold bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Skill
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition ${
                  activeSection === 'projects'
                    ? 'text-orange-500 font-bold bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Project
              </a>
              <a
                href="#timeline"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition ${
                  activeSection === 'timeline'
                    ? 'text-orange-500 font-bold bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Timeline
              </a>
              <a
                href="#volunteer"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition ${
                  activeSection === 'volunteer'
                    ? 'text-orange-500 font-bold bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Volunteer
              </a>
              <div className="border-t border-white/10 my-2"></div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-4 rounded-lg text-sm font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:opacity-90 transition text-center"
              >
                Contact
              </a>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center py-24 px-4 text-center min-h-screen overflow-hidden scroll-mt-20">
        {/* Background Dot Pattern Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{
               backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* "Hey I'm" text */}
        <p className="text-gray-400 text-lg md:text-xl mb-3 tracking-[0.2em] uppercase font-bold relative z-20">
          Hey 👋 I&apos;m 
        </p>
        
        {/* Name with HyperText */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase relative z-20">
          <HyperText duration={2000} delay={500}>BHASHITHA MANUPPRIYA</HyperText>
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg mb-2 relative z-20">A passionate</p>
        
        {/* TypewriterText with fixed minimum height */}
        <div className="relative z-20 mb-6 min-h-[60px] md:min-h-[80px]">
          <TypewriterText />
        </div>
        
        {/* Profile Image Container with Glow */}
        <div className="relative my-6">
          {/* Radial Glow Effect Behind Image */}
          <div className="absolute inset-0 w-40 h-40 md:w-56 md:h-56 bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
          
          {/* Shine Border with Image */}
          <ShineBorder className="relative group">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-white/5">
              <Image 
                src="/me.jpg"
                alt="Bhashitha" 
                width={224} 
                height={224}
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </ShineBorder>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 z-20">
          <a href="https://drive.google.com/uc?export=download&id=1yxsSpm_D4OvRLTtB-q1MsPENtplHbp3e" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition shadow-xl shadow-purple-500/20 inline-flex items-center">
            Resume
          </a>
          <a href="#projects" className="bg-white/10 border border-white/30 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition shadow-xl shadow-purple-500/20 inline-flex items-center">
            Projects 
          </a>
        </div>
      </section>

      {/* --- About Section --- */}
      <ScrollReveal>
        <section id="who-i-am" className="relative z-10 max-w-7xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center scroll-mt-24">
          {/* Main Content Card - Glassmorphism */}
          <div className="bg-[#0c0c1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-500">
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side: Title & Description */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">Who I Am</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  &quot;I am a <span className="text-orange-500 font-bold">3rd-year Software Engineering undergraduate at OUSL</span> with a deep passion for building scalable digital solutions. Complementing my academic foundation, I am specializing in <span className="text-orange-400 font-bold">Full-Stack Development at the University of Moratuwa</span>. With hands-on experience in Python, Java, React, Next.js, and JavaScript, I thrive on solving complex problems through clean, efficient code. I am currently seeking internship opportunities to apply my technical skills in a professional environment and contribute to impactful projects.&quot;
                </p>
              </div>

              {/* Right Side: Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Circular Glow Effect */}
                  <div className="absolute inset-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[80px] -z-10"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-72 h-72 rounded-full overflow-hidden border-3 border-orange-500/30 shadow-xl">
                    <Image 
                      src="/me.jpg"
                      alt="Bhashitha" 
                      width={288} 
                      height={288}
                      className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Button - Below the Card */}
          <div className="flex justify-center mt-12">
            <a href="https://drive.google.com/uc?export=download&id=1yxsSpm_D4OvRLTtB-q1MsPENtplHbp3e" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-600 to-pink-500 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-orange-500/30 max-w-[200px] inline-flex items-center">
               Resume 
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* --- Skills Section --- */}
      <ScrollReveal delay={0.1}>
        <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3 relative z-10">
              Skills & Strengths
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter relative z-10">
              What I Bring <span className="text-orange-500 italic font-serif">to the Table</span>
            </h2>
          </div>
          
          {/* Main Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
          {/* --- Main Box Wrapper --- */}
        
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
            
            {/* 1. Frontend Development Card */}
            <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-lg group hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-5 h-5 text-orange-500" />
                <h3 className="text-white font-bold text-xs">Frontend Development</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['WordPress', 'React', 'Next.js', 'React Native', 'Shadcn/UI'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-[9px] hover:border-orange-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Backend & Databases Card */}
            <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-lg group hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-orange-500" />
                <h3 className="text-white font-bold text-xs">Backend & Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MySQL', 'MongoDB', 'Laravel (Learning)'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-[9px] hover:border-orange-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Design & Prototyping Card */}
            <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-lg group hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <PenTool className="w-5 h-5 text-orange-500" />
                <h3 className="text-white font-bold text-xs">Design & Prototyping</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Canva'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-[9px] hover:border-orange-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Leadership & Management Card */}
            <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-lg group hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-orange-500" />
                <h3 className="text-white font-bold text-xs">Leadership & Management</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Program Management', 'Team Leadership', 'CRM'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-[9px] hover:border-orange-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Design & UX Card */}
            <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-lg group hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Layout className="w-5 h-5 text-orange-500" />
                <h3 className="text-white font-bold text-xs">Design & UX</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Design Thinking', 'User-Centered Design', 'User Research', 'Wireframing', 'High-Fidelity Prototyping', 'Accessibility'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-[9px] hover:border-orange-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Problem Solving & Creativity Card */}
            <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-lg group hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-5 h-5 text-orange-500" />
                <h3 className="text-white font-bold text-xs">Problem Solving & Creativity</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Creative Thinking', 'Critical Thinking', 'Collaborative Problem Solving', 'Attention to Detail'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-[9px] hover:border-orange-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* Sliding Tech Stack Marquee */}
      <div className="relative py-8 overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          <div className="flex justify-around w-full text-lg md:text-2xl font-black text-gray-800 uppercase tracking-widest italic">
            <span>Next.js</span> <span>React</span> <span>Java</span> <span>Python</span> <span>SQL</span> <span>Tailwind</span> <span>Node.js</span> <span>Figma</span>
          </div>
          <div className="flex justify-around w-full text-lg md:text-2xl font-black text-gray-800 uppercase tracking-widest italic">
            <span>Next.js</span> <span>React</span> <span>Java</span> <span>Python</span> <span>SQL</span> <span>Tailwind</span> <span>Node.js</span> <span>Figma</span>
          </div>
        </div>
      </div>

      {/* --- Projects Section --- */}
      <ScrollReveal delay={0.3}>
        <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-12 uppercase tracking-tighter text-center">Projects</h2>
          
          {/* Projects Grid - Responsive 1, 2, 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Project 1: Personal Portfolio */}
            <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="group relative p-[1px] rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 hover:from-purple-500/30 hover:to-purple-500/10 transition-all duration-300 block">
              <div className="bg-[#050510]/90 backdrop-blur-xl rounded-[11px] p-4 h-32 flex flex-col justify-between">
                <div>
                  <h4 className="text-purple-400 font-black text-sm uppercase tracking-tight mb-2">Personal Portfolio</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">Interactive portfolio with glassmorphism effects and smooth animations.</p>
                </div>
                <span className="text-purple-400 hover:text-purple-300 text-[10px] font-bold uppercase tracking-widest inline-block hover:underline">Source Code →</span>
              </div>
            </a>

            {/* Project 2: Vehicle Booking */}
            <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="group relative p-[1px] rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 hover:from-pink-500/30 hover:to-pink-500/10 transition-all duration-300 block">
              <div className="bg-[#050510]/90 backdrop-blur-xl rounded-[11px] p-4 h-32 flex flex-col justify-between">
                <div>
                  <h4 className="text-pink-400 font-black text-sm uppercase tracking-tight mb-2">Vehicle Booking</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">Python console app for intelligent vehicle rental management.</p>
                </div>
                <span className="text-pink-400 hover:text-pink-300 text-[10px] font-bold uppercase tracking-widest inline-block hover:underline">Source Code →</span>
              </div>
            </a>

            {/* Project 3: Modern Calculator */}
            <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="group relative p-[1px] rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 hover:from-emerald-500/30 hover:to-emerald-500/10 transition-all duration-300 block">
              <div className="bg-[#050510]/90 backdrop-blur-xl rounded-[11px] p-4 h-32 flex flex-col justify-between">
                <div>
                  <h4 className="text-emerald-400 font-black text-sm uppercase tracking-tight mb-2">Modern Calculator</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">Full-stack app for managing projects and team tasks efficiently.</p>
                </div>
                <span className="text-emerald-400 hover:text-emerald-300 text-[10px] font-bold uppercase tracking-widest inline-block hover:underline">Source Code →</span>
              </div>
            </a>

            {/* Project 4: Weather Dashboard */}
            <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="group relative p-[1px] rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 hover:from-blue-500/30 hover:to-blue-500/10 transition-all duration-300 block">
              <div className="bg-[#050510]/90 backdrop-blur-xl rounded-[11px] p-4 h-32 flex flex-col justify-between">
                <div>
                  <h4 className="text-blue-400 font-black text-sm uppercase tracking-tight mb-2">Weather Dashboard</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">Real-time weather data visualization with geolocation API.</p>
                </div>
                <span className="text-blue-400 hover:text-blue-300 text-[10px] font-bold uppercase tracking-widest inline-block hover:underline">Source Code →</span>
              </div>
            </a>

            {/* Project 5: E-commerce Store */}
            <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="group relative p-[1px] rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 hover:from-orange-500/30 hover:to-orange-500/10 transition-all duration-300 block">
              <div className="bg-[#050510]/90 backdrop-blur-xl rounded-[11px] p-4 h-32 flex flex-col justify-between">
                <div>
                  <h4 className="text-orange-400 font-black text-sm uppercase tracking-tight mb-2">Expense Tracker Master</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">Next.js e-commerce platform with Stripe payment integration.</p>
                </div>
                <span className="text-orange-400 hover:text-orange-300 text-[10px] font-bold uppercase tracking-widest inline-block hover:underline">Source Code →</span>
              </div>
            </a>

            {/* Project 6: MindQuiz */}
            <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="group relative p-[1px] rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 hover:from-indigo-500/30 hover:to-indigo-500/10 transition-all duration-300 block">
              <div className="bg-[#050510]/90 backdrop-blur-xl rounded-[11px] p-4 h-32 flex flex-col justify-between">
                <div>
                  <h4 className="text-indigo-400 font-black text-sm uppercase tracking-tight mb-2">MindQuiz</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">Real-time messaging app with WebSocket and user authentication.</p>
                </div>
                <span className="text-indigo-400 hover:text-indigo-300 text-[10px] font-bold uppercase tracking-widest inline-block hover:underline">Source Code →</span>
              </div>
            </a>

          </div>
        </section>
      </ScrollReveal>

      {/* --- Timeline Section (Education & Experience) --- */}
      <ScrollReveal delay={0.4}>
        <section id="timeline" className="relative z-10 max-w-6xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-12 uppercase tracking-normal text-center">Timeline</h2>
          
          {/* Main Timeline Container - Unified Glassmorphism */}
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-orange-500/20 via-transparent to-pink-500/20 shadow-2xl z-10 max-w-4xl mx-auto w-full">
            <div className="bg-[#050510]/90 backdrop-blur-xl rounded-[23px] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                  <h3 className="text-emerald-500 font-black text-lg md:text-xl mb-8 uppercase tracking-widest">Education</h3>
                  <div className="space-y-8 border-l-2 border-emerald-500/20 pl-6 ml-2">
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-emerald-600 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">Current</span>
                      <h4 className="text-white font-bold text-base">SE Undergraduate (3rd Year)</h4>
                      <p className="text-gray-400 text-sm mt-1">The Open University of Sri Lanka</p>
                    </motion.div>
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">Reading</span>
                      <h4 className="text-white font-bold text-base">Full-Stack Development</h4>
                      <p className="text-gray-400 text-sm mt-1">University of Moratuwa</p>
                    </motion.div>
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.3 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-emerald-400 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">Completed</span>
                      <h4 className="text-white font-bold text-base">Diploma in English (SLEGA)</h4>
                      <p className="text-gray-400 text-sm mt-1">Pass with A Grade</p>
                    </motion.div>
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.4 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-gray-600 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">2020-2022</span>
                      <h4 className="text-white font-bold text-base">Advanced Level - Technology</h4>
                      <p className="text-gray-400 text-sm mt-1">Engineering Technology</p>
                    </motion.div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-blue-500 font-black text-lg md:text-xl mb-8 uppercase tracking-widest">Experience</h3>
                  <div className="space-y-8 border-l-2 border-blue-500/20 pl-6 ml-2">
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">1 Year</span>
                      <h4 className="text-white font-bold text-base">Customer Relations Officer</h4>
                      <p className="text-gray-400 text-sm mt-1">DBC.PVT - Professional customer service</p>
                    </motion.div>
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">Training</span>
                      <h4 className="text-white font-bold text-base">Banking Operations</h4>
                      <p className="text-gray-400 text-sm mt-1">Sampath Bank - Core Banking & Customer Service</p>
                    </motion.div>
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.3 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">Experience</span>
                      <h4 className="text-white font-bold text-base">Administrative Operations</h4>
                      <p className="text-gray-400 text-sm mt-1">Divisional Secretariat - Government operations</p>
                    </motion.div>
                    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.4 }}>
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-gray-600 rounded-full border-4 border-[#050510]"></div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400 mb-2 inline-block tracking-tighter">Experience</span>
                      <h4 className="text-white font-bold text-base">Data Management</h4>
                      <p className="text-gray-400 text-sm mt-1">Nehera.pvt - Operational support</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal delay={0.5}>
        <section id="volunteer" className="relative z-10 max-w-6xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-12 uppercase tracking-tighter text-center">Volunteer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "SLAAI 2025", desc: "IEEE Student Branch Member OUSL", icon: "🤝" },
              { title: "FETSAC 2025", desc: "Organizing Committee - The Open University of Sri Lanka", icon: "📋" },
              { title: "JAMBORIEEE 2025", desc: "Organizing Committee (Secretary Team) - IEEE OUSL", icon: "📝" },
              { title: "SLASSCOM 2024", desc: "TV Program Representation - The Open University", icon: "📺" }
            ].map((item, index) => (
              <a 
              key={index} 
              href="https://www.linkedin.com/in/bhashitha-manuppriya-980918276" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:scale-[1.02] hover:bg-white/[0.08] transition-all duration-500 group"
            >
                <div className="text-3xl mb-3 group-hover:scale-110 transition">{item.icon}</div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* --- Get in Touch Section --- */}
      {/* --- Line 475: Contact Section Start --- */}

{/* --- WRAPPER FOR FULL PAGE CENTERING --- */}
<section id="contact" className="relative min-h-screen flex flex-col justify-between bg-transparent overflow-hidden">
  
  {/* 1. TOP SPACING (To push content down) */}
  <div className="h-20"></div>

  {/* 2. CENTERED CONTACT CONTENT */}
  <div className="max-w-3xl mx-auto px-6 relative z-10 text-center flex-grow flex flex-col justify-center">
    
    <p className="text-gray-1000 text-[12px] tracking-[0.3em] uppercase mb-1">Get In Touch</p>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      I&apos;d love to <span className="text-orange-500 italic">hear from you!</span>
    </h2>

    {/* --- COMPACT FORM WITH GRID --- */}
<form ref={form} onSubmit={sendEmail} className="space-y-3 max-w-lg mx-auto mb-10">
  {/* First Name & Last Name in One Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <input 
      type="text" 
      name="from_name"
      placeholder="First Name" 
      required
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:border-orange-500/50 outline-none transition-all" 
    />
    <input 
      type="text" 
      placeholder="Last Name" 
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:border-orange-500/50 outline-none transition-all" 
    />
  </div>

  {/* Email Field */}
  <input 
    type="email" 
    name="email"
    placeholder="Your Email" 
    required
    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:border-orange-500/50 outline-none transition-all" 
  />

  {/* Message Field */}
  <textarea 
    name="message"
    placeholder="Your Message" 
    rows={2} 
    required
    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:border-orange-500/50 outline-none resize-none transition-all"
  ></textarea>
  
  {/* Submit Button */}
  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2.5 rounded-full text-[11px] font-extrabold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-orange-500/20 uppercase tracking-widest">
    Send Message
  </button>

</form>

    {/* Social Links */}
<div className="flex flex-col items-center gap-3 mt-8">
  
  {/* LinkedIn Tab */}
  <a href="https://www.linkedin.com/in/bhashitha-manuppriya-980918276" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group w-64">
    <Linkedin size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
    <span className="text-gray-400 text-[11px] group-hover:text-white">/bhashitha-manuppriya</span>
  </a>

  {/* GitHub Tab */}
  <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all group w-64">
    <Github size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
    <span className="text-gray-400 text-[11px] group-hover:text-white">/bhashitha-m</span>
  </a>


  {/* Instagram Tab */}
  <a href="https://www.instagram.com/bhashithamanuppriya?utm_source=qr&igsh=dnV1MmJtZXY2Nmwx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-pink-500/50 transition-all group w-64">
    <Instagram size={16} className="text-pink-400 group-hover:scale-110 transition-transform" />
    <span className="text-gray-400 text-[11px] group-hover:text-white">@bhashithamanuppriya</span>
  </a>

</div>
  </div>

 
{/* --- FULL-WIDTH FIXED FOOTER BAR --- */}
<footer className="w-full bg-[#0c0c1d]/60 border-t border-white/10 backdrop-blur-xl py-6 mt-auto">
  
  <div className="max-w-[98%] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    
    {/* Left: Logo with Orange Dot */}
    <div className="flex-1 text-center md:text-left">
      <div className="text-2xl font-black italic text-white/50 tracking-tighter hover:text-white transition-all cursor-default uppercase">
        &lt;Manu <span className="text-orange-500">.</span> Dev/&gt;
      </div>
    </div>

    {/* Center: Copyright - Compressed Spacing */}
    <div className="flex-[2] text-center">
      <p className="text-[11px] md:text-[13px] text-gray-400 tracking-[0.1em] uppercase font-bold">
        © 2026 Bhashitha Manuppriya. All rights reserved.
      </p>
    </div>

    {/* Right: Social Media Icons */}
<div className="flex-1 flex justify-center md:justify-end gap-5">
  <a href="https://linkedin.com/in/bhashitha-manuppriya-980918276" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all hover:scale-110">
    <Linkedin size={18} />
  </a>
  <a href="https://github.com/bhashitha-m" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110">
    <Github size={18} />
  </a>
  <a href="https://wa.me/94711096839" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-all hover:scale-110">
    <MessageCircle size={18} />
  </a>
  <a href="https://web.facebook.com/bhashitha.manuppriya.3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-all hover:scale-110">
    <Facebook size={18} />
  </a>
  <a href="https://www.threads.net/@bhashithamanuppriya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110">
    <AtSign size={18} />
  </a>
  <a href="https://www.instagram.com/bhashithamanuppriya?utm_source=qr&igsh=dnV1MmJtZXY2Nmwx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-all hover:scale-110">
    <Instagram size={18} />
  </a>
</div>
  </div>
</footer>

</section>
      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 20%;
          }
          50% {
            background-position: 60% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes beam-travel {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .nav-link {
          position: relative;
          display: inline-block;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #F1C40F, #E74C3C);
          transition: width 0.5s ease;
          border-radius: 50%;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

    </main>
  );
}