import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { projects } from '../constants';

// Plays only while on screen and loads nothing until then; stays on the poster for reduced-motion users
const LazyVideo = ({ src, poster, className }) => {
    const ref = useRef(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return undefined;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    return (
        <video ref={ref} src={src} poster={poster} loop muted playsInline preload="none" className={className}>
            Your browser does not support the video tag.
        </video>
    );
};

// Fake browser chrome around project media
const WindowBar = ({ title }) => (
    <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-zinc-950/80 px-4 py-2 backdrop-blur">
        <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        </div>
        <span className="font-mono text-xs text-zinc-500">{title}</span>
    </div>
);

const ProjectMedia = ({ title, image, images, video, poster }) => {
    const media = 'h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]';

    if (video) return <LazyVideo src={video} poster={poster} className={`${media} pt-9`} />;
    if (images?.length) {
        return (
            <div className="grid h-full grid-cols-1 gap-px pt-9 sm:grid-cols-2">
                {images.map((src) => (
                    <img key={src} src={src} alt={title} loading="lazy" className={media} />
                ))}
            </div>
        );
    }
    if (image) return <img src={image} alt={title} loading="lazy" className={`${media} pt-9`} />;
    return (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-accent-950/60 pt-9">
            <span className="accent text-4xl text-white/90">{title}</span>
        </div>
    );
};

const ProjectLinks = ({ link, repo }) => (
    <div className="flex flex-wrap gap-3">
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors duration-300 hover:bg-accent-300"
        >
            Live Demo <ExternalLink size={15} />
        </a>
        {repo && (
            <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors duration-300 hover:border-accent-400 hover:text-accent-300"
            >
                <Github size={15} /> Source
            </a>
        )}
    </div>
);

const ProjectCard = (project) => {
    const { title, subtitle, description, tags, isFeatured } = project;

    return (
        <article
            className={`group flex flex-col overflow-hidden rounded-2xl border bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 ${
                isFeatured
                    ? 'border-accent-400/30 shadow-2xl shadow-accent-950/30 hover:border-accent-400/60 md:col-span-2 lg:flex-row'
                    : 'border-white/5 hover:border-accent-400/40'
            }`}
        >
            <div className={`relative overflow-hidden bg-zinc-950 ${isFeatured ? 'h-72 md:h-96 lg:h-auto lg:min-h-[26rem] lg:w-3/5' : 'h-60'}`}>
                <WindowBar title={title} />
                <ProjectMedia {...project} />
            </div>

            <div className={`flex flex-1 flex-col p-6 md:p-8 ${isFeatured ? 'lg:justify-center' : ''}`}>
                {isFeatured && (
                    <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 text-xs font-semibold text-accent-300">
                        <Star size={14} /> Featured project
                    </span>
                )}
                <h3 className={`${isFeatured ? 'text-3xl' : 'text-2xl'} font-semibold text-white`}>{title}</h3>
                {subtitle && <p className="mt-1 text-sm text-accent-300/90">{subtitle}</p>}
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs font-medium text-zinc-300">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-6">
                    <ProjectLinks {...project} />
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-32">
            <AnimatedSection>
                <SectionHeading
                    index="03"
                    label="Personal Projects"
                    title="Things I've"
                    accent="Built"
                    action={
                        <a href="#contact" className="inline-flex min-h-11 items-center gap-2 text-zinc-300 transition-colors hover:text-accent-300">
                            Discuss a project
                            <ArrowUpRight size={18} />
                        </a>
                    }
                >
                    Side projects built outside work. My Algoclan work is client-confidential, so it's described in Experience.
                </SectionHeading>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Projects;
