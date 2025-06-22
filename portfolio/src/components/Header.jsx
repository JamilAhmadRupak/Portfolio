import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../constants';

const Header = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white hover:text-teal-400 transition-colors duration-300">
                    {/* J<span className="text-teal-400">.</span>A<span className="text-teal-400">.</span>Rupak */}
                    Rupak
                </a>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-lg font-medium transition-colors duration-300 relative group ${
                                activeSection === link.href.substring(1)
                                    ? 'text-teal-400'
                                    : 'text-slate-300 hover:text-teal-400'
                            }`}
                        >
                            {link.label}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeSection === link.href.substring(1) ? 'scale-x-100' : ''}`}></span>
                        </a>
                    ))}
                </nav>
                 {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-xl">
                    <nav className="flex flex-col items-center py-4 space-y-4">
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
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
