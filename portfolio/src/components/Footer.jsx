import React from 'react';
import { FileText } from 'lucide-react';
import SocialIcon from './SocialIcon';
import { socialLinks, cvUrl } from '../constants';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 mt-20 relative z-10">
            <div className="container mx-auto px-6 py-8 text-center text-zinc-500">
                <div className="flex justify-center gap-2 mb-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.href}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="rounded-full p-2.5 hover:text-accent-400 transition-colors duration-300"
                        >
                            <SocialIcon name={social.icon} size={24} />
                        </a>
                    ))}
                    <a href={cvUrl} target="_blank" rel="noopener noreferrer" aria-label="Resume" className="rounded-full p-2.5 hover:text-accent-400 transition-colors duration-300">
                        <FileText size={24} />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Jamil Ahmad Rupak. All rights reserved.</p>
                <p className="text-sm mt-2">
                    Built with React, Vite and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
