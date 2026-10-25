import React, { useCallback, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';
import { achievements } from '../constants';
import { Award, Trophy, Medal, Star, FileText, Gavel, Code, ArrowUpRight, Maximize2 } from 'lucide-react';

const iconMap = {
    award: Award,
    trophy: Trophy,
    medal: Medal,
    star: Star,
    file: FileText,
    gavel: Gavel,
    code: Code,
};

const highlights = achievements.filter((a) => a.highlight);
const others = achievements.filter((a) => !a.highlight);

// Secondary link: the original PDF, a profile, or nothing (images already open in the lightbox)
const SecondaryLink = ({ achievement }) => {
    const { link, linkLabel } = achievement;
    if (!link || (!link.endsWith('.pdf') && !linkLabel)) return null;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
        >
            {linkLabel || 'Original PDF'}
            <ArrowUpRight size={15} />
        </a>
    );
};

const HighlightCard = ({ achievement, onOpen }) => {
    const Icon = iconMap[achievement.iconType] || Award;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-2xl hover:shadow-accent-950/40">
            <button
                type="button"
                onClick={() => onOpen(achievement)}
                className="relative h-44 overflow-hidden bg-zinc-950 text-left md:h-60"
                aria-label={`View ${achievement.title}`}
            >
                <img
                    src={achievement.image}
                    alt={achievement.title}
                    loading="lazy"
                    className={`h-full w-full object-cover ${achievement.imagePosition === 'center' ? 'object-center' : 'object-top'} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent"></div>
                {achievement.badge && (
                    <span className="absolute left-4 top-4 rounded-full border border-accent-400/30 bg-zinc-950/80 px-3 py-1 text-xs font-semibold text-accent-200 backdrop-blur">
                        {achievement.badge}
                    </span>
                )}
                <span className="absolute right-4 top-4 rounded-full bg-zinc-950/70 p-2 text-zinc-300 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 size={16} />
                </span>
            </button>

            <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-accent-400/10 p-2.5">
                        <Icon className="h-5 w-5 text-accent-300" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-accent-200">
                            {achievement.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-zinc-300">{achievement.issuer}</p>
                        {achievement.date && (
                            <p className="mt-1.5 font-mono text-xs uppercase tracking-wider text-zinc-500">{achievement.date}</p>
                        )}
                    </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{achievement.description}</p>
                <div className="mt-4">
                    <SecondaryLink achievement={achievement} />
                </div>
            </div>
        </article>
    );
};

const CompactRow = ({ achievement, onOpen }) => {
    const Icon = iconMap[achievement.iconType] || Award;

    return (
        <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-900/40 p-4 transition-colors duration-300 hover:border-accent-400/30">
            <div className="flex-shrink-0 rounded-lg bg-accent-400/10 p-2.5">
                <Icon className="h-5 w-5 text-accent-300" />
            </div>
            <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-zinc-100">{achievement.title}</h3>
                <p className="text-sm text-zinc-400">
                    {achievement.issuer}
                    {achievement.date && <span className="text-zinc-500"> · {achievement.date}</span>}
                </p>
                <div className="mt-1">
                    <SecondaryLink achievement={achievement} />
                </div>
            </div>
            {achievement.image && (
                <button
                    type="button"
                    onClick={() => onOpen(achievement)}
                    aria-label={`View ${achievement.title}`}
                    className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md border border-white/10"
                >
                    <img src={achievement.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </button>
            )}
        </div>
    );
};

const Achievements = () => {
    const [open, setOpen] = useState(null);
    const close = useCallback(() => setOpen(null), []);

    return (
        <section id="achievements" className="py-16 md:py-32">
            <AnimatedSection>
                <SectionHeading index="04" label="Proof & Recognition" title="Achievements &" accent="Certifications">
                    Hackathon results, research and recognition. Click any certificate or photo to view it full size.
                </SectionHeading>

                <p className="eyebrow mb-4 text-zinc-500 md:hidden">Swipe for more →</p>
                <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
                    {highlights.map((achievement) => (
                        <div key={achievement.title} className="w-[85%] shrink-0 snap-center md:w-auto">
                            <HighlightCard achievement={achievement} onOpen={setOpen} />
                        </div>
                    ))}
                </div>

                <h3 className="eyebrow mb-5 mt-10 text-zinc-500 md:mt-14">More recognition</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    {others.map((achievement) => (
                        <CompactRow key={achievement.title} achievement={achievement} onOpen={setOpen} />
                    ))}
                </div>
            </AnimatedSection>

            <Lightbox item={open} onClose={close} />
        </section>
    );
};

export default Achievements;
