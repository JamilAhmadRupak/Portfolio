import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import Typewriter from './Typewriter';
import SocialIcon from './SocialIcon';
import { socialLinks, heroStats, cvUrl } from '../constants';

const Hero = () => {
    const heroTags = ['Node.js', 'Next.js', 'FastAPI', 'Django', 'MongoDB', 'PostgreSQL'];

    return (
        <section id="home" className="min-h-screen flex items-center pt-28 md:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-200 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300"></span>
                        </span>
                        Open to software engineering roles
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
                        <span className="block">Jamil Ahmad</span>
                        <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">Rupak</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-slate-300 mb-6 font-light min-h-[2em]">
                        <Typewriter text="Software Engineer at Algoclan" />
                    </div>
                    <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
                        Full-stack engineer building production inventory, order and pricing systems for e-commerce clients.
                        I like turning messy real-world workflows into reliable software.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                        {heroTags.map((tag) => (
                            <span key={tag} className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-sm text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-5 mb-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                title={social.label}
                                className="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-125"
                            >
                                <SocialIcon name={social.icon} size={30} />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 bg-teal-400 text-slate-950 font-bold py-3 px-7 rounded-lg text-lg hover:bg-cyan-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-teal-500/20"
                        >
                            View Work
                            <ArrowUpRight size={20} />
                        </a>
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/70 text-slate-200 font-bold py-3 px-7 rounded-lg text-lg hover:border-teal-400 hover:text-teal-300 transition-all duration-300"
                        >
                            <FileText size={20} />
                            View Resume
                        </a>
                    </div>
                </div>
                <div>
                    <div className="relative mx-auto max-w-2xl">
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-sky-500/10 blur-2xl"></div>
                        <div className="relative rounded-2xl border border-slate-700/70 bg-slate-950/80 shadow-2xl shadow-cyan-950/40 overflow-hidden">
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
                        <div className="relative mt-4 grid grid-cols-3 gap-3 text-center">
                            {heroStats.map((stat) => (
                                <div key={stat.label} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-4">
                                    <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
