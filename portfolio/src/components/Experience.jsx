import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { experienceData } from '../constants';

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    My <span className="text-teal-400">Journey</span>
                </h2>
                <div className="relative border-l-2 border-slate-700 max-w-2xl mx-auto">
                    {experienceData.map((item, index) => (
                        <div key={index} className="mb-12 pl-12 relative before:content-[''] before:absolute before:left-[-9px] before:top-1.5 before:w-4 before:h-4 before:bg-slate-700 before:rounded-full before:border-2 before:border-teal-400">
                            <div className="absolute -left-5 top-0.5 w-10 h-10 bg-slate-800 rounded-full border-2 border-slate-700 flex items-center justify-center shadow-lg">
                                {item.type === 'work' ? <Briefcase size={20} className="text-teal-400"/> : <Award size={20} className="text-teal-400"/>}
                            </div>
                            <p className="text-sm text-slate-400 mb-1">{item.date}</p>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-md text-slate-300 mb-2">{item.institution}</p>
                            <p className="text-slate-400 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Experience;
