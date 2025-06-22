import React from 'react';
import { FileText, Github, Linkedin, Code, BrainCircuit } from 'lucide-react';
import Typewriter from './Typewriter'; // Assuming you have a Typewriter component
const socialLinks = [
    { href: "https://github.com/JamilAhmadRupak/", icon: Github },
    { href: "https://www.linkedin.com/in/jamil-ahmad-rupak-997077317/", icon: Linkedin },
    { href: "https://codeforces.com/profile/JamilAhmadRupak", icon: Code },
    { href: "https://leetcode.com/u/Rupak23/", icon: BrainCircuit }
];

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                        <span className="block">Jamil Ahmad</span>
                        <span className="block text-teal-400">Rupak</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
                        <Typewriter text="Full-Stack Development Enthusiast" />
                    </div>
                    <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
                        I build elegant, efficient, and scalable web solutions. Passionate about solving complex problems and crafting high-quality code.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-5 mb-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-125"
                            >
                                <social.icon size={32} />
                            </a>
                        ))}
                    </div>
                    <a
                        href="https://github.com/JamilAhmadRupak/cv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20"
                    >
                        <span className="flex items-center gap-2">
                            <FileText size={20} />
                            Download CV
                        </span>
                    </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-2xl animate-pulse opacity-30"></div>
                        <img
                            src="/jamil_ahmad_rupak.png"
                            alt="Jamil Ahmad Rupak"
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl hover:border-teal-400 transition-all duration-500"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/0f172a/ffffff?text=JAR'; }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
