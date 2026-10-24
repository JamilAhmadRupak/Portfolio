import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { navLinks, cvUrl } from '../constants';

const Header = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white hover:text-teal-400 transition-colors duration-300">
                    Rupak<span className="text-teal-400">.</span>
                </a>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex space-x-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-base font-medium transition-colors duration-300 relative group ${
                                    activeSection === link.href.substring(1)
                                        ? 'text-teal-400'
                                        : 'text-slate-300 hover:text-teal-400'
                                }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeSection === link.href.substring(1) ? 'scale-x-100' : ''}`}></span>
                            </a>
                        ))}
                    </nav>
                    <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-teal-400/60 px-4 py-2 text-sm font-semibold text-teal-300 hover:bg-teal-400 hover:text-slate-950 transition-all duration-300"
                    >
                        <FileText size={16} />
                        Resume
                    </a>
                </div>
                 {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl">
                    <nav className="flex flex-col items-center py-4 space-y-2">
                        {navLinks.map((link) => (
                             <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-lg font-medium w-full text-center py-2 transition-colors duration-300 ${
                                    activeSection === link.href.substring(1) ? 'text-teal-400 bg-slate-800' : 'text-slate-300 hover:text-teal-400 hover:bg-slate-800'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-2 font-semibold text-slate-950"
                        >
                            <FileText size={18} />
                            Resume
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
