import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { projects } from '../constants';

// The ProjectCard component is now updated to accept and handle a 'video' prop.
const ProjectCard = ({ title, description, tags, link, isFeatured, image, video }) => (
    <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col border transition-all duration-300 group ${
        isFeatured ? 'border-teal-500/50 shadow-lg shadow-teal-500/10' : 'border-slate-700/50 hover:border-teal-500/50'
    } hover:-translate-y-2`}>
        <div className="h-48 overflow-hidden">
            {/* This is the new logic: if a 'video' prop exists, it renders a video tag. Otherwise, it renders the image tag. */}
            {video ? (
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                >
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/0f172a/2dd4bf?text=${title.replace(' ', '+')}`; }}
                />
            )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div>
                {isFeatured && (
                    <div className="flex items-center text-yellow-400 mb-2 animate-pulse">
                        <Star size={16} className="mr-2" />
                        <span className="font-bold text-sm">Featured Project</span>
                    </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">{title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed flex-grow">{description}</p>
            </div>
            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-slate-700 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-teal-400 hover:text-teal-300 transition-all duration-300">
                    View Project <ExternalLink size={16} className="ml-2" />
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Featured <span className="text-teal-400">Creations</span>
                </h2>
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
