import React from 'react';
import { Code, Server, Database, BrainCircuit } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { skills } from '../constants';

const iconMap = {
    Code: <Code size={32} className="text-teal-400" />,
    Server: <Server size={32} className="text-teal-400" />,
    Database: <Database size={32} className="text-teal-400" />,
    BrainCircuit: <BrainCircuit size={32} className="text-teal-400" />,
};

const SkillCategory = ({ iconType, title, skills }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 border border-slate-700/50 hover:border-teal-500/50 group">
        <div className="inline-block p-4 bg-slate-700/50 rounded-full mb-4 group-hover:bg-teal-500/10 transition-all duration-300">
            {iconMap[iconType]}
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">{title}</h3>
        <ul className="text-slate-400 space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="transition-colors duration-300 hover:text-teal-400 cursor-default">
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    My <span className="text-teal-400">Tech Stack</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category) => (
                        <SkillCategory key={category.title} {...category} />
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Skills;
