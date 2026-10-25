import React, { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const AnimatedSection = ({ children }) => {
    // With reduced motion, show content immediately instead of fading it in on scroll
    const [isVisible, setIsVisible] = useState(prefersReducedMotion);
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node || isVisible) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        observer.observe(node);

        return () => observer.unobserve(node);
    }, [isVisible]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
            {children}
        </div>
    );
};
