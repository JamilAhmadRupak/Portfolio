import React from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const ContactItem = ({ icon, text, href }) => (
    <div className="flex items-center gap-3 text-slate-300 group">
        <div className="text-teal-400 group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        {href ? (
            <a href={href} className="hover:text-teal-400 transition-colors duration-300">{text}</a>
        ) : (
            <span>{text}</span>
        )}
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32">
            <AnimatedSection>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get In <span className="text-teal-400">Touch</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, feel free to reach out!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg mb-12">
                        <ContactItem icon={<Mail />} text="jhrupok@gmail.com" href="mailto:jhrupok@gmail.com" />
                        <ContactItem icon={<MapPin />} text="Chittagong, Bangladesh" />
                    </div>
                    <a
                        href="mailto:jhrupok@gmail.com"
                        className="inline-block bg-transparent border-2 border-teal-500 text-teal-500 font-bold py-3 px-8 rounded-lg text-lg hover:bg-teal-500 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            <Heart size={20} />
                            Say Hello
                        </span>
                    </a>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Contact;
