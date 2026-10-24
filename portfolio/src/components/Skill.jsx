import React from 'react';
import { Code, Server, Database, LayoutTemplate, Sparkles, Wrench } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { skills } from '../constants';

const iconMap = {
    Code,
    Server,
    Database,
    Layout: LayoutTemplate,
    Sparkles,
    Wrench,
};

const SkillCategory = ({ iconType, title, skills }) => {
    const Icon = iconMap[iconType] || Code;

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/10 border border-slate-700/50 hover:border-teal-500/50 group">
            <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-teal-500/10 transition-all duration-300">
                    <Icon size={24} className="text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1 text-sm text-slate-300">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    My <span className="text-teal-400">Tech Stack</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category) => (
                        <SkillCategory key={category.title} {...category} />
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Skills;
