import React from 'react';
import { Github, Linkedin, Code, BrainCircuit } from 'lucide-react';

// Maps the icon names used in constants/socialLinks to lucide components
const icons = { Github, Linkedin, Code, BrainCircuit };

const SocialIcon = ({ name, ...props }) => {
    const Icon = icons[name] || Code;
    return <Icon {...props} />;
};

export default SocialIcon;
