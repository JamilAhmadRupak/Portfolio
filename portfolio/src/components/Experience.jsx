import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { experienceData } from '../constants';

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    My <span className="text-teal-400">Journey</span>
                </h2>
                <div className="relative border-l-2 border-slate-700 max-w-3xl mx-auto">
                    {experienceData.map((item) => (
                        <div key={item.title} className="mb-12 pl-10 md:pl-12 relative">
                            <div className="absolute -left-5 top-0.5 w-10 h-10 bg-slate-800 rounded-full border-2 border-slate-700 flex items-center justify-center shadow-lg">
                                {item.type === 'work' ? <Briefcase size={20} className="text-teal-400"/> : <GraduationCap size={20} className="text-teal-400"/>}
                            </div>
                            <div className={item.highlights ? 'rounded-xl border border-slate-800 bg-slate-900/70 p-6 hover:border-teal-500/40 transition-colors duration-300' : ''}>
                                <p className="text-sm font-semibold text-teal-300/80 mb-1">{item.date}</p>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-md text-slate-300 mb-2">{item.institution}</p>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                                {item.highlights && (
                                    <ul className="mt-4 space-y-2">
                                        {item.highlights.map((point) => (
                                            <li key={point} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400"></span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.tags && (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="bg-slate-800 text-teal-200 border border-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Experience;
