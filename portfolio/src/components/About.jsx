import React from 'react';
import { User, Boxes, ScanLine, LineChart, Trophy, Briefcase, FileText } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection'; // Reusable animation component

// A simple styled container for bento grid items
const BentoBox = ({ className = '', children }) => (
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
        { icon: <ScanLine size={20}/>, text: 'Warehouse & inventory workflows' },
        { icon: <LineChart size={20}/>, text: 'Pricing & market data' },
        { icon: <Boxes size={20}/>, text: 'Clean backend architecture' },
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
                            <p>
                                I'm Jamil Ahmad Rupak, a software engineer at Algoclan and a final-year CSE student at CUET.
                                Since October 2025 I've been building a multi-tenant inventory platform for an e-commerce reseller:
                                RFID and barcode scanning, stock reconciliation, order sync and automated repricing.
                            </p>
                            <p>
                                I work across the stack with Node.js, Next.js, FastAPI and MongoDB, and I've built personal projects
                                with Django and React. I won first place at the Mysoftheaven × CUET AI Hackathon, finished top 10 in three
                                national hackathons, presented a paper at ICCCNT 2025, and have solved around 500 competitive programming problems.
                            </p>
                        </div>
                    </BentoBox>

                    {/* Stats */}
                    <BentoBox>
                         <h3 className="text-xl font-bold text-white mb-4">At a glance</h3>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                           <StatItem icon={<Trophy />} number="1st" label="AI hackathon win" />
                           <StatItem icon={<Briefcase />} number="3+" label="Top-10 national hackathons" />
                           <StatItem icon={<FileText />} number="~500" label="CP problems solved" />
                        </div>
                    </BentoBox>

                    {/* Image */}
                    <BentoBox className="lg:row-start-2 flex items-center justify-center">
                        <img
                            src="/jamil_ahmad_rupak.png"
                            alt="Jamil Ahmad Rupak"
                            className="w-48 h-48 rounded-full border-4 border-slate-700 object-cover shadow-2xl"
                        />
                    </BentoBox>

                    {/* What I Love */}
                    <BentoBox className="lg:col-span-2">
                         <h3 className="text-xl font-bold text-white mb-4">What I enjoy building</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            {interests.map((interest) => (
                                <div key={interest.text} className="bg-slate-700/50 p-4 rounded-lg flex flex-col items-center justify-center space-y-2">
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
