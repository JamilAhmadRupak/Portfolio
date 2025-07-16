// This file centralizes all the content for the portfolio, making it easier to update.

export const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience'},
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export const experienceData = [
    {
        type: 'education',
        date: '2023 - Present',
        title: 'B.Sc. in Computer Science & Engineering',
        institution: 'Chittagong University of Engineering & Technology',
        description: 'Focusing on algorithms, data structures, and software development. Maintained a strong academic record while actively participating in programming contests, projects and hackathons.'
    },
    {
        type: 'work',
        date: '-',
        title: '-',
        institution: '-',
        description: '-'
    },
];

export const skills = [
    {
        title: "Languages",
        iconType: "Code",
        skills: ["Python", "JavaScript", "C++", "HTML/CSS", "SQL", "C#"],
    },
    {
        title: "Backend",
        iconType: "Server",
        skills: ["Django", "Node.js", "REST APIs"],
    },
    {
        title: "Databases",
        iconType: "Database",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    },
    {
        title: "Frontend & Tools",
        iconType: "BrainCircuit",
        skills: ["React", "Next.js", "Tailwind CSS", "Git & GitHub", "Docker"],
    },
];

export const projects = [
    {
        title: "ModelMate",
        description: "A forum type platform for AI user about their user experience.(still in development) It allows users to share their experiences, ask questions, and collaborate on machine learning projects.",
        tags: ['Collaboration', 'Next.js', 'ML', 'Platform', 'Django'],
        link: "https://modelmate-beige.vercel.app/",
        isFeatured: true,
        image: "https://placehold.co/600x400/0f172a/2dd4bf?text=ModelMate" 
    },
    {
        title: "LTSR - Learning Through Space Repetition",
        description: "A web application for spaced repetition learning, helping users memorizing by email/notification and retain information effectively through flashcards and quizzes.(A prototype available)",
        tags: ['Django', 'HR Tech', 'Web App'],
        link: "https://learnwsrs.netlify.app/",
        // --- CHANGE HERE ---
        // The 'image' key has been replaced with the 'video' key.
        video: "/ltsr_video.mp4" 
    },
    {
        title: "Django E-commerce",
        description: "A full-featured e-commerce website built with Django",
        tags: ['Django', 'E-commerce', 'Python'],
        link: "https://github.com/JamilAhmadRupak/DjangoProject",
        image: "https://placehold.co/600x400/0f172a/2dd4bf?text=E-commerce"
    },
];
