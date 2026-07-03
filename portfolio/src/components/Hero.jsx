import React from 'react';
import { ArrowUpRight, FileText, Github, Linkedin, Code, BrainCircuit } from 'lucide-react';
import Typewriter from './Typewriter'; // Assuming you have a Typewriter component
const socialLinks = [
    { href: "https://github.com/JamilAhmadRupak/", icon: Github },
    { href: "https://www.linkedin.com/in/jamil-ahmad-rupak-997077317/", icon: Linkedin },
    { href: "https://codeforces.com/profile/JamilAhmadRupak", icon: Code },
    { href: "https://leetcode.com/u/Rupak23/", icon: BrainCircuit }
];

const Hero = () => {
    const heroTags = ['React', 'Django', 'PostgreSQL', 'AI Healthcare'];

    return (
        <section id="home" className="min-h-screen flex items-center pt-28 md:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-200 mb-6">
                        <span className="h-2 w-2 rounded-full bg-teal-300"></span>
                        Available for software roles and client projects
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
                        <span className="block">Jamil Ahmad</span>
                        <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">Rupak</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
                        <Typewriter text="SWE at Algoclan | Full-Stack Developer" />
                    </div>
                    <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
                        I build product-focused web applications with React, Next.js, Django, FastAPI, and PostgreSQL, turning complex ideas into clean interfaces and reliable backend systems.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                        {heroTags.map((tag) => (
                            <span key={tag} className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-sm text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>
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
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 bg-teal-400 text-slate-950 font-bold py-3 px-7 rounded-lg text-lg hover:bg-cyan-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-teal-500/20"
                        >
                            View Work
                            <ArrowUpRight size={20} />
                        </a>
                        <a
                            href="https://github.com/JamilAhmadRupak/cv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/70 text-slate-200 font-bold py-3 px-7 rounded-lg text-lg hover:border-teal-400 hover:text-teal-300 transition-all duration-300"
                        >
                            <FileText size={20} />
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <div className="relative mx-auto max-w-2xl">
                        <div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 shadow-2xl shadow-cyan-950/40 overflow-hidden">
                            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">HealthTwin</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
                                <img
                                    src="/PATIENT_DASHBOARD.png"
                                    alt="HealthTwin patient dashboard"
                                    className="h-52 sm:h-72 w-full rounded-lg object-cover object-left-top border border-slate-800"
                                />
                                <img
                                    src="/DOCTOR_DASHBOARD.png"
                                    alt="HealthTwin doctor dashboard"
                                    className="h-52 sm:h-72 w-full rounded-lg object-cover object-left-top border border-slate-800"
                                />
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                            <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-4">
                                <p className="text-2xl font-bold text-white">3</p>
                                <p className="text-xs text-slate-400">Featured apps</p>
                            </div>
                            <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-4">
                                <p className="text-2xl font-bold text-white">5+</p>
                                <p className="text-xs text-slate-400">Core tools</p>
                            </div>
                            <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-4">
                                <p className="text-2xl font-bold text-white">1</p>
                                <p className="text-xs text-slate-400">SWE role</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
