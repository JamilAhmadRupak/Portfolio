import React from 'react';
import { User, Boxes, ScanLine, LineChart, Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection'; // Reusable animation component
import SectionHeading from './SectionHeading';

// A simple styled container for bento grid items
const BentoBox = ({ className = '', children }) => (
    <div className={`bg-zinc-900/50 backdrop-blur-sm p-6 md:p-7 rounded-2xl border border-white/5 transition-colors duration-300 hover:border-accent-400/30 ${className}`}>
        {children}
    </div>
);

const now = [
    { icon: Briefcase, text: 'Building inventory & pricing systems at Algoclan' },
    { icon: GraduationCap, text: 'Final year, CSE at CUET' },
    { icon: MapPin, text: 'Based in Dhaka, Bangladesh' },
    { icon: Sparkles, text: 'Open to software engineering roles' },
];

const interests = [
    { icon: ScanLine, text: 'Warehouse & inventory workflows' },
    { icon: LineChart, text: 'Pricing & market data' },
    { icon: Boxes, text: 'Clean backend architecture' },
];

const About = () => {
    return (
        <section id="about" className="py-16 md:py-32">
            <AnimatedSection>
                <SectionHeading index="01" label="Introduction" title="About" accent="Me" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Bio */}
                    <BentoBox className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center"><User className="mr-3 text-accent-400" size={20} /> Bio</h3>
                        <div className="text-zinc-400 space-y-4 leading-relaxed">
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

                    {/* Currently */}
                    <BentoBox>
                        <h3 className="eyebrow text-accent-300 mb-5">Currently</h3>
                        <ul className="space-y-4">
                            {now.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.text} className="flex items-start gap-3 text-zinc-300">
                                        <Icon size={18} className="mt-0.5 flex-shrink-0 text-accent-400" />
                                        <span>{item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </BentoBox>

                    {/* Image */}
                    <BentoBox className="lg:row-start-2 flex items-center justify-center">
                        <img
                            src="/jamil_ahmad_rupak.png"
                            alt="Jamil Ahmad Rupak"
                            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl ring-1 ring-accent-400/40 ring-offset-4 ring-offset-zinc-950"
                        />
                    </BentoBox>

                    {/* What I enjoy */}
                    <BentoBox className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-4">What I enjoy building</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:text-center">
                            {interests.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.text} className="bg-zinc-800/50 px-4 py-3 md:p-5 rounded-xl flex items-center gap-3 md:flex-col md:justify-center">
                                        <Icon size={20} className="text-accent-400" />
                                        <p className="text-zinc-300">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </BentoBox>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default About;
