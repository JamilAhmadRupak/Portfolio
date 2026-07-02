// This file centralizes all the content for the portfolio, making it easier to update.

export const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience'},
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export const experienceData = [
    {
        type: 'work',
        date: 'Current',
        title: 'Software Engineer',
        institution: 'Algoclan',
        description: 'Developing and maintaining software solutions, optimizing performance, and building scalable applications.'
    },
    {
        type: 'education',
        date: 'Session 2021-22',
        title: 'B.Sc. in Computer Science & Engineering',
        institution: 'Chittagong University of Engineering & Technology',
        description: 'Studying computer science and engineering with a focus on algorithms, data structures, software development, and practical problem solving.'
    },
    {
        type: 'education',
        date: '2021',
        title: 'Higher Secondary Certificate (HSC)',
        institution: 'BAF Shaheen College, Dhaka',
        description: 'Completed higher secondary education with GPA 5.00.'
    },
];

export const skills = [
    {
        title: "Languages",
        iconType: "Code",
        skills: ["Python", "Java", "JavaScript", "C++", "C#", "SQL"],
    },
    {
        title: "Frameworks",
        iconType: "Server",
        skills: ["Django", "React", "Next.js", "FastAPI", "Node.js"],
    },
    {
        title: "Databases",
        iconType: "Database",
        skills: ["PostgreSQL", "MySQL"],
    },
    {
        title: "Concepts & Tools",
        iconType: "BrainCircuit",
        skills: ["OOP", "Data Structures", "REST APIs", "Git", "Spring Security"],
    },
];

export const projects = [
    {
        title: "HealthTwin",
        description: "Designed an AI-powered patient-doctor platform delivering intelligent patient insights, symptom tracking, prescription assistance, and digital twin health monitoring.",
        tags: ['React', 'Next.js', 'Django', 'PostgreSQL', 'REST APIs'],
        link: "https://patient-history-management-system.vercel.app/",
        isFeatured: true,
        images: ["/PATIENT_DASHBOARD.png", "/DOCTOR_DASHBOARD.png"]
    },
    {
        title: "ModelMate",
        description: "Built a secure social platform for AI enthusiasts to collaborate, share knowledge, and interact through a modern web application.",
        tags: ['Django', 'PostgreSQL', 'REST APIs'],
        link: "https://modelmate-beige.vercel.app/",
        image: "https://placehold.co/600x400/0f172a/2dd4bf?text=ModelMate"
    },
    {
        title: "LTSR",
        description: "Created a responsive productivity application that helps users organize tasks, improve workflow, and boost daily efficiency.",
        tags: ['React', 'Next.js', 'Productivity', 'UI/UX'],
        link: "https://learnwsrs.netlify.app/",
        video: "/ltsr_video.mp4"
    },
];

export const achievements = [
    {
        title: "Django Web Development Certificate",
        issuer: "Edge Course",
        date: "2024",
        description: "Completed a Django web development course covering backend development, database management, and full-stack web application fundamentals.",
        image: "/django_certificate_edge_course.jpg",
        iconType: "award",
        link: "#"
    },
    {
        title: "MICRO-OPS HACKATHON",
        issuer: "CUET CSE FEST 2025",
        date: "2026",
        description: "Participated in the Micro-Ops Hackathon at CUET CSE Fest, applying software development and problem-solving skills in a competitive setting.",
        image: "/microOps_hackathon_certificate.png",
        iconType: "trophy",
        link: "#"
    },
    {
        title: "DevsOfOlympus Certificate",
        issuer: "DevsOfOlympus",
        date: "",
        description: "Recognized with a DevsOfOlympus certificate for participation and contribution in a developer-focused program.",
        iconType: "medal",
        link: "/Certificates-DevsOfOlympus_Jamil.pdf"
    },
    {
        title: "President Scouts Award",
        issuer: "Scouts",
        date: "",
        description: "Recognized for discipline, leadership, and service through scouting activities.",
        iconType: "award"
    },
    {
        title: "Shapla Cub Award",
        issuer: "Scouts",
        date: "",
        description: "Awarded for commitment and contribution in early scouting involvement.",
        iconType: "trophy"
    },
    {
        title: "Former Secretary, Math Club",
        issuer: "BAF Shaheen College, Dhaka",
        date: "",
        description: "Served in a leadership role supporting club activities and math-focused initiatives.",
        iconType: "star"
    },
];
