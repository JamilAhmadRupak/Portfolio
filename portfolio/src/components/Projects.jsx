import React from 'react';
import { ArrowUpRight, ExternalLink, Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { projects } from '../constants';

// The ProjectCard component accepts video, a single image, or a small screenshot pair.
const ProjectCard = ({ title, description, tags, link, isFeatured, image, images, video }) => (
    <div className={`bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col border transition-all duration-300 group ${
        isFeatured
            ? 'md:col-span-2 border-teal-400/50 shadow-2xl shadow-teal-950/40'
            : 'border-slate-800 hover:border-teal-500/50'
    } hover:-translate-y-2`}>
        <div className={`${isFeatured ? 'h-80' : 'h-56'} overflow-hidden bg-slate-950 relative`}>
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-4 py-2 backdrop-blur">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <span className="text-xs font-semibold text-slate-400">{title}</span>
            </div>
            {video ? (
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover pt-9 group-hover:scale-105 transition-transform duration-500"
                >
                    Your browser does not support the video tag.
                </video>
            ) : images?.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full gap-px pt-9">
                    {images.map((projectImage) => (
                        <img
                            key={projectImage}
                            src={projectImage}
                            alt={title}
                            className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/0f172a/2dd4bf?text=${title.replace(' ', '+')}`; }}
                        />
                    ))}
                </div>
            ) : (
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover pt-9 group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/0f172a/2dd4bf?text=${title.replace(' ', '+')}`; }}
                />
            )}
        </div>
        <div className="p-6 md:p-7 flex flex-col flex-grow">
            <div>
                {isFeatured && (
                    <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-yellow-300 mb-3">
                        <Star size={16} className="mr-2" />
                        <span className="font-bold text-sm">Featured Project</span>
                    </div>
                )}
                <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300`}>
                    {title}
                </h3>
                <p className="text-slate-400 mb-5 text-sm leading-relaxed flex-grow">{description}</p>
            </div>
            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-slate-800 text-teal-200 border border-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300 transition-all duration-300">
                    Live Demo <ExternalLink size={16} />
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32">
            <AnimatedSection>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300 mb-3">Selected Work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Product <span className="text-teal-400">Showcase</span>
                        </h2>
                    </div>
                    <a href="#contact" className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors">
                        Discuss a project
                        <ArrowUpRight size={18} />
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {projects.map((project, index) => (
                       <ProjectCard key={index} {...project} />
                   ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Projects;
