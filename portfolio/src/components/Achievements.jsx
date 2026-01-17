import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { achievements } from '../constants';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="py-16">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100">
                    Achievements & Certifications
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group relative bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10">
                                {/* Achievement Image */}
                                {achievement.image && (
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent"></div>
                                    </div>
                                )}
                                
                                {/* Achievement Content */}
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            {achievement.iconType === 'trophy' && (
                                                <Trophy className="w-8 h-8 text-teal-400" />
                                            )}
                                            {achievement.iconType === 'medal' && (
                                                <Medal className="w-8 h-8 text-teal-400" />
                                            )}
                                            {achievement.iconType === 'award' && (
                                                <Award className="w-8 h-8 text-teal-400" />
                                            )}
                                            {achievement.iconType === 'star' && (
                                                <Star className="w-8 h-8 text-teal-400" />
                                            )}
                                        </div>
                                        
                                        {/* Text Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
                                                {achievement.title}
                                            </h3>
                                            
                                            {achievement.issuer && (
                                                <p className="text-teal-400 text-sm font-medium mb-2">
                                                    {achievement.issuer}
                                                </p>
                                            )}
                                            
                                            {achievement.date && (
                                                <p className="text-slate-400 text-sm mb-3">
                                                    {achievement.date}
                                                </p>
                                            )}
                                            
                                            <p className="text-slate-300 leading-relaxed">
                                                {achievement.description}
                                            </p>
                                            
                                            {/* Link if available */}
                                            {achievement.link && (
                                                <a
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block mt-4 text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium"
                                                >
                                                    View Certificate →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Achievements;
