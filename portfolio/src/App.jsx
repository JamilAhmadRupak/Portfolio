import React, { useState, useEffect, useRef } from 'react';

// Import all the components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skill'
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { navLinks } from './constants';

const sectionIds = navLinks.map((link) => link.href.substring(1));

// The main App component
const App = () => {
    // State to track the active section for the navigation bar
    const [activeSection, setActiveSection] = useState('');
    // The pointer glow and scroll progress bar are driven by refs so they don't re-render the page
    const glowRef = useRef(null);
    const progressRef = useRef(null);

    // Effect to add and clean up event listeners
    useEffect(() => {
        // Function to handle scroll events: update the progress bar and the active nav section
        const handleScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
            progressRef.current?.style.setProperty('transform', `scaleX(${progress})`);

            const scrollPosition = window.scrollY + window.innerHeight / 2.5;
            // Sections without a nav link (hero, skills) leave nothing highlighted
            const current = sectionIds.find((section) => {
                const element = document.getElementById(section);
                return element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight;
            });
            setActiveSection(current ?? '');
        };

        // Function to handle mouse movement for the background effect
        const handleMouseMove = (e) => {
            glowRef.current?.style.setProperty('--x', `${e.clientX}px`);
            glowRef.current?.style.setProperty('--y', `${e.clientY}px`);
        };

        // Add event listeners when the component mounts
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Remove event listeners when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative bg-zinc-950 text-zinc-300 font-sans leading-relaxed selection:bg-accent-400 selection:text-zinc-900">
            {/* Static hero backdrop (works on touch screens too): soft warm glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden">
                <div className="absolute left-1/2 top-[-380px] h-[760px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(216,176,106,0.16),transparent)]"></div>
            </div>

            {/* Film grain over the whole page */}
            <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-40"></div>

            {/* Scroll progress bar */}
            <div
                ref={progressRef}
                aria-hidden="true"
                className="fixed left-0 right-0 top-0 z-[55] h-0.5 origin-left bg-gradient-to-r from-accent-500 via-accent-300 to-accent-200"
                style={{ transform: 'scaleX(0)' }}
            ></div>

            {/* Animated Gradient Pointer */}
            <div
                ref={glowRef}
                className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
                style={{
                    background: 'radial-gradient(600px at var(--x, 50%) var(--y, 20%), rgba(214, 174, 99, 0.07), transparent 80%)',
                }}
            ></div>

            <div className="flex flex-col min-h-screen">
                <Header activeSection={activeSection} />
                {/* All sections are wrapped in a single main tag */}
                <main className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Achievements />
                    <Skills />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
