import React from 'react';
import { Mail, MapPin, Linkedin, Send, FileText } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { cvUrl } from '../constants';

const ContactItem = ({ icon, text, href }) => (
    <div className="flex items-center gap-3 text-slate-300 group">
        <div className="text-teal-400 group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        {href ? (
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">{text}</a>
        ) : (
            <span>{text}</span>
        )}
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32">
            <AnimatedSection>
                <div className="text-center max-w-3xl mx-auto rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-800/40 to-slate-900/40 px-6 py-14 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get In <span className="text-teal-400">Touch</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        I'm open to software engineering roles and interesting collaborations.
                        If you're hiring or have a project in mind, email me and I'll reply.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-lg mb-10">
                        <ContactItem icon={<Mail />} text="jhrupok@gmail.com" href="mailto:jhrupok@gmail.com" />
                        <ContactItem icon={<Linkedin />} text="LinkedIn" href="https://www.linkedin.com/in/jamil-ahmad-rupak-997077317/" />
                        <ContactItem icon={<MapPin />} text="Dhaka, Bangladesh" />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="mailto:jhrupok@gmail.com"
                            className="inline-flex items-center justify-center gap-2 bg-teal-400 text-slate-950 font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-300 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <Send size={20} />
                            Email Me
                        </a>
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-200 font-bold py-3 px-8 rounded-lg text-lg hover:border-teal-400 hover:text-teal-300 transition-all duration-300"
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
