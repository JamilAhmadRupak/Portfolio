import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                if (displayText.length > 0) {
                    setDisplayText(prev => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                }
            } else {
                if (displayText.length < text.length) {
                    setDisplayText(prev => prev + text.charAt(currentIndex));
                    setCurrentIndex(prev => prev + 1);
                } else {
                    // Wait for a bit then start deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        };
        
        // Reset index when deleting is finished
        if (!isDeleting && displayText.length === 0) {
            setCurrentIndex(0);
        }

        const timeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, text, speed, currentIndex]);

    return (
        <span className="relative">
            {displayText}
            <span className="animate-ping">|</span>
        </span>
    );
};

export default Typewriter;
