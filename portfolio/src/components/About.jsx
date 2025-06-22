import React from 'react';
import { User, Code, Coffee, Award, Heart, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection'; // Reusable animation component

// A simple styled container for bento grid items
const BentoBox = ({ className, children }) => (
    <div className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 transition-all duration-300 hover:border-teal-500/50 ${className}`}>
        {children}
    </div>
);

// A reusable stat item
const StatItem = ({ icon, number, label }) => (
    <div className="text-center group">
        <div className="text-teal-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon, { size: 28 })}
        </div>
        <div className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{number}</div>
        <div className="text-sm text-slate-400">{label}</div>
    </div>
);

const About = () => {
    const interests = [
        { icon: <Code size={20}/>, text: 'Clean Code' },
        { icon: <Zap size={20}/>, text: 'Performance' },
        { icon: <Heart size={20}/>, text: 'Problem Solving' },
    ];

    return (
        <section id="about" className="py-24 md:py-32">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    About <span className="text-teal-400">Me</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Bio */}
                    <BentoBox className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center"><User className="mr-3 text-teal-400" /> Bio</h3>
                        <div className="text-slate-400 space-y-4">
                            <p>Hello! I'm Jamil Ahmad Rupak, a dedicated Software Engineering learner with a strong foundation in Computer Science from CUET. My journey in tech is driven by a fascination with building things that solve real-world problems.</p>
                            <p>I specialize in full-stack development, with a deep love for Python, Django, and modern frontend technologies like React. I thrive on tackling challenging algorithmic problems.</p>
                        </div>
                    </BentoBox>

                    {/* Stats */}
                    <BentoBox>
                         <h3 className="text-xl font-bold text-white mb-4">Stats</h3>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                           <StatItem icon={<Coffee />} number="500+" label="Coffees" />
                           <StatItem icon={<Code />} number="50+" label="Projects" />
                           <StatItem icon={<Award />} number="3+" label="Years" />
                        </div>
                    </BentoBox>

                    {/* Image */}
                    <BentoBox className="lg:row-start-2 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}>
                        <img
                            src="https://avatars.githubusercontent.com/u/98692337?v=4"
                            alt="Jamil Ahmad Rupak"
                            className="w-48 h-48 rounded-full border-4 border-slate-700 object-cover shadow-2xl"
                        />
                    </BentoBox>
                    
                    {/* What I Love */}
                    <BentoBox className="lg:col-span-2">
                         <h3 className="text-xl font-bold text-white mb-4">What I Love To Do</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            {interests.map((interest, index) => (
                                <div key={index} className="bg-slate-700/50 p-4 rounded-lg flex flex-col items-center justify-center space-y-2">
                                    <div className="text-teal-400">{interest.icon}</div>
                                    <p className="text-slate-300">{interest.text}</p>
                                </div>
                            ))}
                        </div>
                    </BentoBox>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default About;
