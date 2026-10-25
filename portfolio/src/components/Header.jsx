import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { navLinks, cvUrl } from '../constants';

// Floating pill navbar that stays with the user the whole way down:
// - transparent over the hero, frosted glass with a gold hairline once the page scrolls
// - a highlight slides behind the active section's link
const Header = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
    const linkRefs = useRef({});

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Measure the active link so the highlight can slide to it
    useLayoutEffect(() => {
        const measure = () => {
            const el = linkRefs.current[activeSection];
            setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth, visible: true } : (prev) => ({ ...prev, visible: false }));
        };

        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [activeSection]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
            <div className="w-full max-w-4xl">
                <div
                    className={`flex items-center justify-between rounded-full border transition-all duration-500 ${
                        isScrolled || isMenuOpen
                            ? 'border-accent-400/20 bg-zinc-900/70 py-2 pl-6 pr-2 shadow-2xl shadow-black/50 backdrop-blur-xl'
                            : 'border-transparent bg-transparent py-3 pl-6 pr-3'
                    }`}
                >
                    <a href="#home" className="accent text-2xl text-white transition-colors duration-300 hover:text-accent-300">
                        Rupak<span className="text-accent-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="relative hidden items-center md:flex" aria-label="Primary">
                        <span
                            aria-hidden="true"
                            className={`absolute inset-y-0 rounded-full bg-white/[0.06] ring-1 ring-white/10 transition-all duration-300 ease-out ${
                                indicator.visible ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ left: indicator.left, width: indicator.width }}
                        ></span>
                        {navLinks.map((link) => {
                            const id = link.href.substring(1);
                            const isActive = activeSection === id;
                            return (
                                <a
                                    key={link.href}
                                    ref={(el) => { linkRefs.current[id] = el; }}
                                    href={link.href}
                                    aria-current={isActive ? 'true' : undefined}
                                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                                        isActive ? 'text-accent-200' : 'text-zinc-400 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden items-center gap-2 rounded-full bg-accent-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors duration-300 hover:bg-accent-300 md:inline-flex"
                        >
                            <FileText size={15} />
                            Resume
                        </a>
                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mt-2 animate-fade-in rounded-3xl border border-white/10 bg-zinc-900/90 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden">
                        <nav className="flex flex-col" aria-label="Mobile">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-300 ${
                                        activeSection === link.href.substring(1)
                                            ? 'bg-white/[0.06] text-accent-200'
                                            : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-400 px-5 py-3 font-semibold text-zinc-950"
                            >
                                <FileText size={18} />
                                Resume
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
