import React, { useState, useEffect } from 'react';

// Import all the components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skill'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// The main App component
const App = () => {
    // State to track the active section for the navigation bar
    const [activeSection, setActiveSection] = useState('home');
    // State to track the mouse position for the background gradient effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Effect to add and clean up event listeners
    useEffect(() => {
        // Function to handle scroll events and update active section
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2.5;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                }
            }
        };

        // Function to handle mouse movement for the background effect
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        // Add event listeners when the component mounts
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Remove event listeners when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed selection:bg-teal-400 selection:text-slate-900">
            {/* Animated Gradient Pointer */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
            ></div>

            <div className="flex flex-col min-h-screen">
                <Header activeSection={activeSection} />
                {/* All sections are wrapped in a single main tag */}
                <main className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;

