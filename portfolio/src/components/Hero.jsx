import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import SocialIcon from './SocialIcon';
import { socialLinks, heroStats, cvUrl } from '../constants';

const Hero = () => {
    const heroTags = ['Node.js', 'Next.js', 'FastAPI', 'Django', 'MongoDB', 'PostgreSQL'];

    return (
        <section id="home" className="flex items-center pt-28 pb-8 lg:min-h-screen lg:pt-20 lg:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-200 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-300 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-300"></span>
                        </span>
                        Open to software engineering roles
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-5 leading-[1.05]">
                        <span className="block">Jamil Ahmad</span>
                        <span className="accent block w-fit mx-auto lg:mx-0 bg-gradient-to-r from-accent-200 via-accent-300 to-accent-500 bg-clip-text text-transparent">Rupak</span>
                    </h1>
                    <p className="font-mono text-sm md:text-base uppercase tracking-[0.18em] text-zinc-300 mb-6">
                        Software Engineer <span className="text-accent-400">@</span> Algoclan
                    </p>
                    <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0">
                        Full-stack engineer building production inventory, order and pricing systems for e-commerce clients.
                        I like turning messy real-world workflows into reliable software.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                        {heroTags.map((tag) => (
                            <span key={tag} className="rounded-full border border-zinc-700 bg-zinc-800/70 px-3 py-1 text-sm text-zinc-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-center lg:justify-start gap-1 mb-8 -mx-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                title={social.label}
                                className="rounded-full p-2 text-zinc-400 hover:text-accent-400 transition-transform duration-300 hover:scale-110"
                            >
                                <SocialIcon name={social.icon} size={28} />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-zinc-950 font-bold py-3 px-7 rounded-lg text-lg hover:bg-accent-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-accent-500/20"
                        >
                            View Work
                            <ArrowUpRight size={20} />
                        </a>
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900/70 text-zinc-200 font-bold py-3 px-7 rounded-lg text-lg hover:border-accent-400 hover:text-accent-300 transition-all duration-300"
                        >
                            <FileText size={20} />
                            View Resume
                        </a>
                    </div>
                </div>
                <div>
                    <div className="group relative mx-auto max-w-2xl">
                        <div className="absolute -inset-4 hidden sm:block rounded-3xl bg-gradient-to-tr from-accent-500/10 via-accent-500/5 to-accent-500/10 blur-2xl"></div>
                        <div className="relative hidden sm:block rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-accent-950/40 overflow-hidden">
                            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                                </div>
                                <span className="eyebrow text-zinc-500">HealthTwin</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
                                <img
                                    src="/PATIENT_DASHBOARD.png"
                                    alt="HealthTwin patient dashboard"
                                    className="h-52 sm:h-72 w-full rounded-lg object-cover object-left-top border border-zinc-800 saturate-[.35] sepia-[.25] brightness-90 transition duration-700 group-hover:saturate-100 group-hover:sepia-0 group-hover:brightness-100"
                                />
                                <img
                                    src="/DOCTOR_DASHBOARD.png"
                                    alt="HealthTwin doctor dashboard"
                                    className="h-52 sm:h-72 w-full rounded-lg object-cover object-left-top border border-zinc-800 saturate-[.35] sepia-[.25] brightness-90 transition duration-700 group-hover:saturate-100 group-hover:sepia-0 group-hover:brightness-100"
                                />
                            </div>
                        </div>
                        <div className="relative grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-3 sm:gap-3 sm:text-center">
                            {heroStats.map((stat) => (
                                <div key={stat.label} className="flex items-baseline gap-3 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 sm:block sm:px-3 sm:py-4">
                                    <p className="shrink-0 text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-zinc-400">{stat.label}</p>
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
