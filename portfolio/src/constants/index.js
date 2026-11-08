// This file centralizes all the content for the portfolio, making it easier to update.

// The CV lives in its own repo (github.com/JamilAhmadRupak/cv); link to the PDF there so
// updating the CV repo updates this link too.
export const cvUrl = "https://github.com/JamilAhmadRupak/cv/blob/main/Jamil_Ahmad_Rupak.pdf";

export const socialLinks = [
    { href: "https://github.com/JamilAhmadRupak/", label: "GitHub", icon: "Github" },
    { href: "https://www.linkedin.com/in/jamil-ahmad-rupak-997077317/", label: "LinkedIn", icon: "Linkedin" },
    { href: "https://codeforces.com/profile/JamilAhmadRupak", label: "Codeforces", icon: "Code" },
    { href: "https://leetcode.com/u/Rupak23/", label: "LeetCode", icon: "BrainCircuit" },
];

export const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
];

export const heroStats = [
    { value: "Oct 2025", label: "SWE at Algoclan" },
    { value: "1st Place", label: "Mysoftheaven × CUET AI Hackathon" },
    { value: "Top 10", label: "in 3+ national hackathons" },
];

export const experienceData = [
    {
        type: 'work',
        date: 'Oct 2025 – Present',
        title: 'Software Engineer',
        institution: 'Algoclan',
        description: 'Building production inventory, order and pricing systems for e-commerce clients.',
        highlights: [
            'Core contributor (250+ commits across backend and frontend) to a multi-tenant inventory and listing platform integrated with two major resale-marketplace APIs.',
            'Built the RFID/barcode scanning workflow end to end: batch scanning, EPC-to-UPC conversion, reviewable scan drafts, fallback lookups and retries for unknown items.',
            'Built stock reconciliation against physical warehouse counts and applied a reconciled count of ~19,400 inventory rows to production, with rollback files prepared in advance.',
            'Automated order ingestion and cross-marketplace delisting so sold items stop being listed elsewhere; added multi-client onboarding and per-client attribution.',
            'Implemented four pricing strategies (competitive index, demand momentum, seasonality, market momentum) in a FastAPI repricing service with scheduled bid/ask time-series collection.',
            'Built the weekly-analysis tool for the platform’s tool-calling AI agent (Vercel AI SDK): five P&L, revenue and stock aggregations run in parallel for the model to report on.',
            'Built n8n workflows that collect articles daily from public sources, clean them and upsert them into MongoDB without duplicates.',
            'Added audit logging, rate limiting, API-key auth and Swagger/OpenAPI docs; Dockerized and set up CI/CD for another product.',
        ],
        tags: ['Node.js', 'Express', 'Next.js', 'FastAPI', 'MongoDB', 'Docker', 'Vercel AI SDK', 'n8n'],
    },
    {
        type: 'work',
        date: 'Sep 2026',
        title: 'AI R&D Industrial Trainee (Team Lead)',
        institution: 'Mysoftheaven (BD) Ltd.',
        description: 'CUET industrial attachment in the AI R&D division.',
        highlights: [
            'Led a 3-person team building an AI Security Gateway against LLM prompt injection and sensitive-data leakage (OWASP LLM01/LLM02).',
            'Designed the multi-stage defense: regex pre-filters, ML baselines and a DeBERTa detector feeding a separate policy engine, with metadata-only audit logging.',
            'Built a leakage-safe dataset pipeline over 26k records, and ran an audit that replaced an inflated 100% detection claim with honest held-out metrics.',
        ],
        tags: ['Python', 'Hugging Face', 'DeBERTa', 'LLM Security'],
    },
    {
        type: 'education',
        date: 'Session 2021–22 · Final year',
        title: 'B.Sc. in Computer Science & Engineering',
        institution: 'Chittagong University of Engineering & Technology (CUET)',
        description: 'Coursework in algorithms, data structures, databases, operating systems, networks and software engineering.',
    },
    {
        type: 'education',
        date: '2021',
        title: 'Higher Secondary Certificate (HSC)',
        institution: 'BAF Shaheen College, Dhaka',
        description: 'GPA 5.00. Former Secretary of the college Math Club.',
    },
];

export const skills = [
    {
        title: "Languages",
        iconType: "Code",
        skills: ["JavaScript", "Python", "C++", "C# (coursework)", "SQL"],
    },
    {
        title: "Backend",
        iconType: "Server",
        skills: ["Node.js", "Express", "FastAPI", "Django REST Framework", "REST API design"],
    },
    {
        title: "Frontend",
        iconType: "Layout",
        skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    },
    {
        title: "Databases",
        iconType: "Database",
        skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
        title: "AI",
        iconType: "Sparkles",
        skills: ["Tool-calling agents", "Vercel AI SDK", "OpenAI API", "Gemini API"],
    },
    {
        title: "DevOps & Tools",
        iconType: "Wrench",
        skills: ["Docker", "CI/CD", "Git", "Swagger/OpenAPI", "Cron jobs", "Celery", "n8n"],
    },
];

export const projects = [
    {
        title: "Automed",
        subtitle: "AI patient health records",
        description: "Patient–doctor platform built around a \"digital twin\" of each patient's medical history. Uploaded records are read with OCR and summarised by Gemini, an AI prescription assistant suggests medicines for the doctor to review, and patients approve who can see their records, with every view logged.",
        tags: ['Next.js', 'Express', 'MongoDB', 'Gemini'],
        link: "https://patient-history-management-system.vercel.app/",
        isFeatured: true,
        images: ["/PATIENT_DASHBOARD.png", "/DOCTOR_DASHBOARD.png"]
    },
    {
        title: "LTSR",
        subtitle: "Learning Through Spaced Repetition",
        description: "Study app with flashcards scheduled by the SM-2 spaced-repetition algorithm, topic-organized notes and recurring tasks. Celery jobs send email reminders; progress is charted with Chart.js.",
        tags: ['React', 'Django REST', 'Celery', 'JWT'],
        link: "https://learnwsrs.netlify.app/",
        repo: "https://github.com/JamilAhmadRupak/ltsr",
        video: "/ltsr_demo.mp4",
        poster: "/ltsr_poster.jpg"
    },
    {
        title: "ModelMate",
        subtitle: "AI Community Platform",
        description: "Community web app where AI users share knowledge and discuss models, with authentication and a REST API.",
        tags: ['Django', 'PostgreSQL', 'REST APIs'],
        link: "https://modelmate-beige.vercel.app/",
        repo: "https://github.com/JamilAhmadRupak/ModelMate",
        image: "/modelmate_home.jpg"
    },
];

// badge: label shown on the image ("Certificate", "Photo", "Paper").
// highlight: shown as a large card; the rest go in the compact list below.
// link: original file or profile, shown as a secondary link (images open in a lightbox).
export const achievements = [
    {
        title: "1st Place, AI Hackathon",
        highlight: true,
        issuer: "Mysoftheaven (BD) Ltd. × Department of CSE, CUET",
        date: "2026",
        description: "Won first place at an AI hackathon organized jointly by Mysoftheaven and CUET CSE, held alongside the workshop \"Challenges of Quality Software Development with AI and IT Entrepreneurship\".",
        image: "/ai_hackathon_first_place.jpg",
        imagePosition: "center",
        badge: "Photo",
        iconType: "trophy",
    },
    {
        title: "Top 10, Micro-Ops Hackathon",
        highlight: true,
        issuer: "CUET CSE Fest 2025 · Team DevsOfOlympus",
        date: "Dec 2025",
        description: "Placed in the top ten in a national microservices and DevOps hackathon. One of 3+ national hackathons where I finished top 10, out of 7+ I've competed in.",
        image: "/microOps_hackathon_certificate.png",
        badge: "Certificate",
        iconType: "trophy",
        link: "/Certificates-DevsOfOlympus_Jamil.pdf"
    },
    {
        title: "Paper Presented at ICCCNT 2025",
        highlight: true,
        issuer: "16th ICCCNT · IIT Indore, with IEEE EPS & AICTE",
        date: "Jul 2025",
        description: "Presented \"Momentum: An E-Court Service and Lawyer Help Assistant Mobile Application\" with case filing, cause list, court discrepancy and case search features (Paper ID 2133).",
        image: "/icccnt_2025_certificate.jpg",
        badge: "Paper",
        iconType: "file",
        link: "/icccnt_2025_certificate.pdf"
    },
    {
        title: "Judge, BUILD@CUET Hackathon",
        highlight: true,
        issuer: "CUET Computer Club · presented by Gemini & MLH",
        date: "2026",
        description: "Invited to judge a 3-hour hackathon, evaluating the ideas and prototypes student teams built.",
        image: "/build_cuet_judge.jpg",
        badge: "Photo",
        iconType: "gavel",
    },
    {
        title: "Industrial Attachment, AI R&D",
        issuer: "Mysoft Heaven (BD) Ltd. · CUET CSE",
        date: "Sep 2026",
        description: "Completed a 3-week industrial attachment in the AI R&D division, leading a team that built an AI Security Gateway against prompt injection and data leakage in LLM apps and agents.",
        image: "/mysoftheaven_attachment_certificate_thumb.jpg",
        full: "/mysoftheaven_attachment_certificate.jpg",
        badge: "Certificate",
        iconType: "medal",
        link: "/mysoftheaven_attachment_certificate.jpg"
    },
    {
        title: "~500 Problems Solved",
        issuer: "Codeforces & LeetCode",
        date: "",
        description: "Competitive programming practice in data structures, algorithms and math.",
        iconType: "code",
        link: "https://codeforces.com/profile/JamilAhmadRupak",
        linkLabel: "View Codeforces profile"
    },
    {
        title: "President's Scout Award",
        issuer: "Bangladesh Scouts",
        date: "",
        description: "National scouting honour, received from the President of Bangladesh, recognizing leadership, discipline and service.",
        image: "/presidents_scout_award.jpg",
        badge: "Photo",
        iconType: "award"
    },
    {
        title: "Python (Django) Training, 80 hours",
        issuer: "EDGE Project, Bangladesh Computer Council · CUET CSE",
        date: "Sep – Dec 2024",
        description: "Government-funded training under the ICT Division's Enhancing Digital Government and Economy (EDGE) project, conducted by the CSE department at CUET.",
        image: "/django_certificate_edge_thumb.jpg",
        full: "/django_certificate_edge_course.jpg",
        badge: "Certificate",
        iconType: "medal",
        link: "/django_certificate_edge_course.jpg"
    },
    {
        title: "Shapla Cub Award",
        issuer: "Bangladesh Scouts",
        date: "",
        description: "Highest award at the cub scout level.",
        iconType: "star"
    },
];
