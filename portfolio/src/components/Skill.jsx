import React from 'react';
import { Code, Server, Database, LayoutTemplate, Sparkles, Wrench } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { skills } from '../constants';
import SectionHeading from './SectionHeading';

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
        <div className="bg-zinc-900/50 backdrop-blur-sm p-5 md:p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 border border-white/5 hover:border-accent-500/50 group">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="p-2.5 md:p-3 bg-zinc-800/60 rounded-lg group-hover:bg-accent-500/10 transition-all duration-300">
                    <Icon size={24} className="text-accent-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors duration-300">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-zinc-700 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300 md:px-3 md:text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-32">
            <AnimatedSection>
                <SectionHeading index="05" label="Skills" title="My" accent="Tech Stack" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {skills.map((category) => (
                        <SkillCategory key={category.title} {...category} />
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Skills;
