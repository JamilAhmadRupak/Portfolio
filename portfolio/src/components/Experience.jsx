import React, { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { experienceData } from '../constants';
import SectionHeading from './SectionHeading';

// Bullets shown on phones before "Show more"; desktop always shows all of them
const MOBILE_VISIBLE = 3;

const Highlights = ({ points }) => {
    const [expanded, setExpanded] = useState(false);
    const hiddenCount = points.length - MOBILE_VISIBLE;

    return (
        <>
            <ul className="mt-4 space-y-2">
                {points.map((point, i) => (
                    <li
                        key={point}
                        className={`gap-3 text-sm text-zinc-400 leading-relaxed ${
                            i >= MOBILE_VISIBLE && !expanded ? 'hidden md:flex' : 'flex'
                        }`}
                    >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400"></span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
            {hiddenCount > 0 && (
                <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 md:hidden"
                >
                    {expanded ? 'Show less' : `Show ${hiddenCount} more`}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                </button>
            )}
        </>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-32">
            <AnimatedSection>
                <SectionHeading index="02" label="Experience & Education" title="My" accent="Journey" />
                <div className="relative ml-5 border-l border-zinc-800 max-w-4xl">
                    {experienceData.map((item) => (
                        <div key={item.title} className="mb-10 md:mb-12 pl-8 md:pl-12 relative">
                            <div className="absolute -left-5 top-0.5 w-10 h-10 bg-zinc-800 rounded-full border-2 border-zinc-700 flex items-center justify-center shadow-lg">
                                {item.type === 'work' ? <Briefcase size={20} className="text-accent-400"/> : <GraduationCap size={20} className="text-accent-400"/>}
                            </div>
                            <div className={item.highlights ? 'rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 md:p-6 hover:border-accent-500/40 transition-colors duration-300' : ''}>
                                <p className="font-mono text-xs uppercase tracking-wider text-accent-300/80 mb-2">{item.date}</p>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-md text-zinc-300 mb-2">{item.institution}</p>
                                <p className="text-zinc-400 text-sm">{item.description}</p>
                                {item.highlights && <Highlights points={item.highlights} />}
                                {item.tags && (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-semibold px-2.5 py-1 rounded-full">
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
