import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { achievements } from '../constants';
import { Award, Trophy, Medal, Star, FileText, Gavel, Code, ArrowUpRight } from 'lucide-react';

const iconMap = {
    award: Award,
    trophy: Trophy,
    medal: Medal,
    star: Star,
    file: FileText,
    gavel: Gavel,
    code: Code,
};

const linkText = (achievement) => {
    if (achievement.linkLabel) return achievement.linkLabel;
    if (achievement.badge === 'Paper') return 'View certificate';
    return `View ${achievement.badge?.toLowerCase() || 'details'}`;
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 md:py-32">
            <AnimatedSection>
                <div className="mb-12">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300 mb-3">Proof & Recognition</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Achievements & <span className="text-teal-400">Certifications</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {achievements.map((achievement) => {
                        const Icon = iconMap[achievement.iconType] || Award;

                        return (
                            <div key={achievement.title} className="group relative flex h-full flex-col bg-slate-900/80 rounded-xl overflow-hidden border border-slate-800 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/30">
                                {achievement.image && (
                                    <div className="relative h-52 overflow-hidden bg-slate-950">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            loading="lazy"
                                            className={`w-full h-full object-cover ${achievement.imagePosition === 'center' ? 'object-center' : 'object-top'} transition-transform duration-500 group-hover:scale-105`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                        {achievement.badge && (
                                            <span className="absolute left-4 top-4 rounded-full border border-teal-400/30 bg-slate-950/80 px-3 py-1 text-xs font-bold text-teal-200 backdrop-blur">
                                                {achievement.badge}
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="flex flex-1 p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 rounded-lg bg-teal-400/10 p-3">
                                            <Icon className="w-6 h-6 text-teal-300" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-slate-100 mb-1 group-hover:text-teal-300 transition-colors">
                                                {achievement.title}
                                            </h3>

                                            {achievement.issuer && (
                                                <p className="text-teal-400 text-sm font-medium">
                                                    {achievement.issuer}
                                                </p>
                                            )}

                                            {achievement.date && (
                                                <p className="text-slate-500 text-sm mt-1">
                                                    {achievement.date}
                                                </p>
                                            )}

                                            <p className="text-slate-400 leading-relaxed text-sm mt-3">
                                                {achievement.description}
                                            </p>

                                            {achievement.link && (
                                                <a
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 mt-4 text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium"
                                                >
                                                    {linkText(achievement)}
                                                    <ArrowUpRight size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Achievements;
