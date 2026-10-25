import React from 'react';
import { Mail, MapPin, Linkedin, Send, FileText } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { cvUrl } from '../constants';
import SectionHeading from './SectionHeading';

const ContactItem = ({ icon, text, href }) => (
    <div className="flex items-center gap-3 text-zinc-300 group">
        <div className="text-accent-400 group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        {href ? (
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-accent-400 transition-colors duration-300">{text}</a>
        ) : (
            <span>{text}</span>
        )}
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-32">
            <AnimatedSection>
                <div className="relative isolate overflow-hidden text-center max-w-3xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 px-6 py-14 md:px-12">
                    <div className="pointer-events-none absolute -z-10 -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-accent-400/10 blur-3xl"></div>
                    <SectionHeading index="06" label="Contact" title="Get In" accent="Touch" center>
                        I'm open to software engineering roles and interesting collaborations.
                        If you're hiring or have a project in mind, email me and I'll reply.
                    </SectionHeading>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-lg mb-10">
                        <ContactItem icon={<Mail />} text="jhrupok@gmail.com" href="mailto:jhrupok@gmail.com" />
                        <ContactItem icon={<Linkedin />} text="LinkedIn" href="https://www.linkedin.com/in/jamil-ahmad-rupak-997077317/" />
                        <ContactItem icon={<MapPin />} text="Dhaka, Bangladesh" />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="mailto:jhrupok@gmail.com"
                            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-zinc-950 font-bold py-3 px-8 rounded-lg text-lg hover:bg-accent-300 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <Send size={20} />
                            Email Me
                        </a>
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-200 font-bold py-3 px-8 rounded-lg text-lg hover:border-accent-400 hover:text-accent-300 transition-all duration-300"
                        >
                            <FileText size={20} />
                            Resume
                        </a>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Contact;
