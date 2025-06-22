import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const socialLinks = [
    { href: "https://github.com/JamilAhmadRupak/", icon: Github },
    { href: "https://www.linkedin.com/in/jamil-ahmad-rupak-997077317/", icon: Linkedin },
    { href: "https://github.com/JamilAhmadRupak/cv", icon: FileText }
];

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 mt-20 relative z-10">
            <div className="container mx-auto px-6 py-8 text-center text-slate-500">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.href}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 transition-colors duration-300"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Jamil Ahmad Rupak. All rights reserved.</p>
                <p className="text-sm mt-2">
                    Built with <span className="text-red-500">❤</span> using React, Tailwind CSS, and Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
