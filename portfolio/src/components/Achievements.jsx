import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { achievements } from '../constants';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const iconMap = {
    award: Award,
    trophy: Trophy,
    medal: Medal,
    star: Star,
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-16">
            <AnimatedSection>
                <div className="mb-12">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300 mb-3">Proof & Recognition</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Achievements & Certifications
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.iconType] || Award;

                        return (
                            <AnimatedSection key={achievement.title} delay={index * 0.1}>
                                <div className="group relative h-full bg-slate-900/80 rounded-xl overflow-hidden border border-slate-800 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/30">
                                    {achievement.image && (
                                        <div className="relative h-52 overflow-hidden bg-slate-950">
                                            <img
                                                src={achievement.image}
                                                alt={achievement.title}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                            <span className="absolute left-4 top-4 rounded-full border border-teal-400/30 bg-slate-950/80 px-3 py-1 text-xs font-bold text-teal-200 backdrop-blur">
                                                Certificate
                                            </span>
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 rounded-lg bg-teal-400/10 p-3">
                                                <Icon className="w-6 h-6 text-teal-300" />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-teal-300 transition-colors">
                                                    {achievement.title}
                                                </h3>

                                                {achievement.issuer && (
                                                    <p className="text-teal-400 text-sm font-medium mb-2">
                                                        {achievement.issuer}
                                                    </p>
                                                )}

                                                {achievement.date && (
                                                    <p className="text-slate-500 text-sm mb-3">
                                                        {achievement.date}
                                                    </p>
                                                )}

                                                <p className="text-slate-400 leading-relaxed text-sm">
                                                    {achievement.description}
                                                </p>

                                                {achievement.link && achievement.link !== '#' && (
                                                    <a
                                                        href={achievement.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block mt-4 text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium"
                                                    >
                                                        View Certificate -&gt;
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Achievements;
