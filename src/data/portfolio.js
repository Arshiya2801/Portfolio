import { Github, ChevronDown, Brain, Laptop, Server, Coins, Palette, CheckSquare, PieChart, Briefcase, ExternalLink, Code2, FileCode2, TerminalSquare, Braces, Atom, Wind, LayoutTemplate, Figma, Box, Database, Network, Cpu, LayoutGrid, Globe, Webhook, Terminal, Container, Cloud, GitBranch, Code, Send, Image, Key, Sparkles, PenTool, Radio, Wifi, Shield, Monitor, Mail, Rocket, Activity, Trophy, Medal, Flame, Users, Award, Megaphone, GraduationCap, Building2 } from 'lucide-react';
import msLogo from '../assets/microsoft-logo.svg';

// Existing portfolio content, retained as the redesign's source of truth.
export const primaryProjects = [

    {
        title: 'Apollo',
        thumbnail: '/thumb_apollo.png',
        icon: Laptop,
        tagline: 'An AI-powered coding workspace and interview simulator.',
        features: [
            { title: 'Intelligent Coding Assistance', desc: 'Provides real-time code explanation, debugging, and review through 20+ specialized AI personas, enhancing learning and productivity.' },
            { title: 'Interactive Development Environment', desc: 'Integrates Monaco Editor and Judge0 for secure multi-language execution with instant feedback and collaborative live sessions.' },
            { title: 'Interview Simulator', desc: 'Features dynamic problem generation, adaptive difficulty scaling, timed assessments, and AI evaluations that mirror real interview experiences.' },
            { title: 'Streaming AI Copilot', desc: 'Uses the OpenAI API and SSE token streaming for context-aware explanation, debugging, and review across concurrent sessions.' },
            { title: 'Codebase Retrieval', desc: 'Combines a custom RAG pipeline with MongoDB Atlas Vector Search for contextual codebase Q&A, alongside WebRTC collaborative video rooms.' },
            { title: 'Sandboxed Execution', desc: 'Executes code securely through Judge0 across 10+ programming languages in isolated runtimes.' },
            { title: 'Secure & Personalized Experience', desc: 'Implements JWT authentication, bcrypt hashing, and MongoDB-backed session management to maintain secure user accounts and coding history.' }
        ],
        whyUnique: 'Unlike traditional IDEs or isolated coding platforms, Apollo converges an AI mentor, a fully-featured code workspace, and an interactive interview coach into one cohesive environment. It goes beyond simple code execution by actively providing real-time code explanations, reviewing complex logic, simulating timed interview scenarios with dynamic difficulty, and delivering personalized feedback, essentially serving as a dedicated pair-programmer and technical interviewer.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'Node.js', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'Monaco', type: 'frontend' },
            { name: 'MongoDB Atlas Vector Search', type: 'backend' },
            { name: 'RAG', type: 'backend' },
            { name: 'SSE', type: 'backend' },
            { name: 'OpenAI API', type: 'backend' },
            { name: 'WebRTC', type: 'backend' },
            { name: 'Socket.io', type: 'backend' },
            { name: 'Judge0', type: 'backend' }
        ],
        link: 'https://github.com/Arshiya2801/Apollo',
        deploymentLink: 'https://apollo-phi-two.vercel.app'
    },
    {
        title: 'MindClash',
        thumbnail: '/thumb-mind.png',
        icon: Brain,
        tagline: 'A gamified, real-time debate arena with AI-driven moderation.',
        features: [
            { title: 'Seamless Interaction', desc: 'Enables 1v1 and team-based debating with <1s latency, ensuring participants stay synced without refreshing.' },
            { title: 'AI-Enhanced Integrity', desc: 'Features a unique OpenAI-powered fact-checking layer that provides live feedback and scoring, elevating the quality of arguments.' },
            { title: 'Reliable Real-Time Sessions', desc: 'Supports reconnection retries, sub-100ms event propagation, spectator mode, and live interactive scoring using Socket.io and Redis.' },
            { title: 'AI Evaluation & Analytics', desc: 'Integrates OpenAI for speech evaluation, debate moderation, and live fact-checking, with Redis queues for message reliability and detailed post-match analytics.' },
            { title: 'Backend Architecture', desc: 'Includes 40+ REST APIs, Redis pub/sub and caching, and indexed MongoDB schemas for concurrent sessions and real-time message processing.' },
            { title: 'Engaging User Experience', desc: 'Includes a secure anonymous mode and a proprietary XP-based betting system that incentivizes spectators to engage deeply with the debates.' }
        ],
        whyUnique: 'Unlike standard video conferencing platforms that struggle with structured discussions, MindClash introduces a real-time "referee" and an AI-driven "scoring system" layer to maintain debate integrity. By providing live fact-checking, scoring user arguments on the fly, and integrating a proprietary XP-based spectator betting system, it transforms passive debate-watching into a highly active, gamified, and intellectually honest ecosystem that rewards logical consistency over rhetoric.',
        tags: [
            { name: 'MongoDB', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'React', type: 'frontend' },
            { name: 'Node.js', type: 'backend' },
            { name: 'Socket.io', type: 'backend' },
            { name: 'Redis', type: 'backend' },
            { name: 'JWT', type: 'backend' },
            { name: 'OpenAI API', type: 'backend' },
            { name: 'Tailwind CSS', type: 'frontend' }
        ],
        link: 'https://github.com/Arshiya2801/MindClash',
        deploymentLink: 'https://mind-clash-nine.vercel.app/',

    },
    {
        title: 'MediQueue',
        thumbnail: '/thumb-mediqueue.png',
        // icon: Stethoscope,
        tagline: 'A Smart Hospital Appointment & Queue Management System',
        features: [
            {
                title: 'Smart Appointment Booking',
                desc: 'Allows patients to discover doctors by specialization, view availability, select time slots, and securely book appointments through an intuitive healthcare workflow.'
            },
            {
                title: 'Real-Time Queue Tracking',
                desc: 'Provides live queue monitoring with token-based tracking, estimated waiting time, patients-ahead calculations, and instant status updates powered by Socket.io.'
            },
            {
                title: 'Role-Based Healthcare Management',
                desc: 'Features dedicated patient and doctor dashboards for appointment management, queue operations, profile management, earnings tracking, and consultation workflows.'
            }
        ],
        whyUnique: 'Unlike traditional appointment booking systems, MediQueue bridges the gap between scheduling and hospital visits through real-time queue intelligence. Patients can monitor their queue position remotely, while doctors manage appointments, queues, and consultations from a unified dashboard, significantly reducing waiting-room congestion and improving operational efficiency.',
        tags: [
            { name: 'MongoDB', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'React', type: 'frontend' },
            { name: 'Node.js', type: 'backend' },
            { name: 'Socket.io', type: 'backend' },
            { name: 'JWT', type: 'backend' },
            { name: 'Razorpay', type: 'backend' },
            { name: 'Tailwind CSS', type: 'frontend' },
            { name: 'Cloudinary', type: 'backend' }
        ],
        link: 'https://github.com/Arshiya2801/MediQueue',
        deploymentLink: 'https://medi-queue-topaz-nine.vercel.app/'
    },

];

export const secondaryProjects = [
    // {
    //     title: 'TalentIQ',
    //     icon: Laptop,
    //     tagline: 'The all-in-one technical interview environment for remote assessments.',
    //     features: [
    //         { title: 'Unified Workspace', desc: 'Combines real-time coding, video conferencing, and chat into one interface, eliminating the need to toggle between Zoom, VS Code, and Slack.' },
    //         { title: 'Secure Sandboxed Coding', desc: 'Features an in-browser code editor with isolated execution, allowing interviewers to verify logic instantly without risking the host system.' },
    //         { title: 'High-Stability Infrastructure', desc: 'Built with WebRTC to guarantee 99% call stability, ensuring zero friction during critical interview moments.' }
    //     ],
    //     whyUnique: 'It solves "Context-Switching Fatigue" for interviewers. By creating a professional, unified environment, it reduces evaluation time by 75% compared to multi-tool setups.',
    //     tags: [
    //         { name: 'React', type: 'frontend' },
    //         { name: 'Tailwind CSS', type: 'frontend' },
    //         { name: 'Node.js', type: 'backend' },
    //         { name: 'Express.js', type: 'backend' },
    //         { name: 'WebRTC', type: 'backend' },
    //         { name: 'Stream', type: 'backend' },
    //         { name: 'Clerk', type: 'backend' }
    //     ],
    //     link: 'https://github.com/Arshiya2801/TalentIQ'
    // },
    {
        title: 'Streamly Backend API',
        icon: Server,
        tagline: 'A secure video management backend designed for speed and reliability.',
        features: [
            { title: 'Robust Media Pipeline', desc: 'Automates complex media workflows, handling everything from high-resolution uploads to playlist organization.' },
            { title: 'Security-First Architecture', desc: 'Implements industry-standard JWT-based session management, ensuring that user data and content remain protected.' },
            { title: 'Performance Optimization', desc: 'Utilizes cloud-native storage and efficient caching strategies to process media 30% faster than standard implementations.' }
        ],
        whyUnique: 'It’s an "invisible" but vital piece of infrastructure. It prioritizes reliability and security over flashy features, making it a plug-and-play backbone for any video-content application.',
        tags: [
            { name: 'Node.js', type: 'backend' },
            { name: 'Express.js', type: 'backend' },
            { name: 'MongoDB', type: 'backend' },
            { name: 'Mongoose', type: 'backend' },
            { name: 'JWT', type: 'backend' },
            { name: 'Multer', type: 'backend' },
            { name: 'Cloudinary', type: 'backend' }
        ],
        link: 'https://github.com/Arshiya2801/Streamly'
    },
    {
        title: 'Currency Converter',
        thumbnail: '/thumb-currency.png',
        icon: Coins,
        tagline: 'Sleek React app, API-based real-time conversion, Tailwind CSS.',
        description: 'A responsive currency converter leveraging real-time exchange rates, built with React and styled elegantly using Tailwind CSS for a modern user experience.',
        tags: [
            { name: 'ReactJS', type: 'frontend' },
            { name: 'Tailwind CSS', type: 'frontend' },
            { name: 'Real-time API', type: 'backend' }
        ],
        // thumbnail: '/thumb-customer.png',
        link: 'https://github.com/Arshiya2801/Currency-Convertor'
    },
    {
        title: 'Background Changer',
        thumbnail: '/thumb-bg.png',
        icon: Palette,
        tagline: 'React app, color palette history, dark/light mode toggle.',
        description: 'An interactive utility that allows users to instantly change the background color of the application, keeping a history of selected palettes and supporting dark/light UI modes.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'UI/UX', type: 'frontend' }
        ],

        // thumbnail: '/thumb-currency.png',
        link: 'https://github.com/Arshiya2801/Background-Changer'
    },
    {
        title: 'To-Do List',
        thumbnail: '/thumb-todo.png',
        icon: CheckSquare,
        tagline: 'Responsive app, local storage persistence, filterable tags, Vite/React.',
        description: 'A high-performance task management application featuring persistent local storage, dynamic tag filtering, and a lightning-fast Vite-based React setup.',
        tags: [
            { name: 'React', type: 'frontend' },
            { name: 'Vite', type: 'frontend' },
            { name: 'localStorage', type: 'backend' }
        ],
        // thumbnail: '/thumb-todo.png',
        link: 'https://github.com/Arshiya2801/To-Do-List-Application'
    },
    {
        title: 'Customer Segmentation',
        thumbnail: '/thumb-customer.png',
        icon: PieChart,
        tagline: 'Streamlit ML dashboard, K-Means clustering, PCA visualization.',
        description: 'A comprehensive machine learning dashboard built in Streamlit. It applies K-Means clustering on customer data and visualizes the results intuitively using PCA along with detailed data charts.',
        tags: [
            { name: 'Streamlit', type: 'frontend' },
            { name: 'Machine Learning', type: 'backend' },
            { name: 'K-Means', type: 'backend' },
            { name: 'PCA', type: 'backend' }
        ],

        // thumbnail: '/thumb-bg.png',
        link: 'https://github.com/Arshiya2801/Customer-Segmentation'
    }
];

export const skillCategories = [
    {
        title: "Languages",
        color: "var(--color-accent-text)",
        skills: [
            { name: "C", subtitle: "Programming", icon: Code2, color: "#60a5fa" },
            { name: "C++", subtitle: "System Lang", icon: FileCode2, color: "#3b82f6" },
            { name: "Python", subtitle: "Scripting", icon: Terminal, color: "#facc15" },
            { name: "JavaScript", subtitle: "Web Lang", icon: Braces, color: "#fde047" }
        ]
    },
    {
        title: "Frontend",
        color: "var(--color-accent-text)",
        skills: [
            { name: "React.js", subtitle: "UI Library", icon: Atom, color: "#22d3ee" },
            { name: "Tailwind", subtitle: "CSS Framework", icon: Wind, color: "#2dd4bf" },
            { name: "HTML5", subtitle: "Markup", icon: LayoutTemplate, color: "#f97316" },
            { name: "CSS3", subtitle: "Styling", icon: Palette, color: "#60a5fa" },
            { name: "Framer", subtitle: "Animation", icon: Figma, color: "#f472b6" }
        ]
    },
    {
        title: "Backend & Databases",
        color: "var(--color-accent-text)",
        skills: [
            { name: "Node.js", subtitle: "Runtime", icon: Server, color: "#22c55e" },
            { name: "Express", subtitle: "Framework", icon: Box, color: "#d1d5db" },
            { name: "MongoDB", subtitle: "NoSQL DB", icon: Database, color: "#16a34a" },
            { name: "Mongoose", subtitle: "ODM", icon: LayoutGrid, color: "#f87171" },
            { name: "Redis", subtitle: "Caching", icon: Database, color: "#dc382d" },
            { name: "SQL", subtitle: "Relational DB", icon: Database, color: "#93c5fd" },
            { name: "MySQL", subtitle: "RDBMS", icon: Database, color: "#00758f" },
            { name: "Socket.io", subtitle: "Real-time", icon: Network, color: "#e5e7eb" },
            { name: "WebRTC", subtitle: "Video Calls", icon: Wifi, color: "#5c6bc0" },
            { name: "SSE", subtitle: "Server Events", icon: Radio, color: "#f97316" },
            { name: "JWT", subtitle: "Authentication", icon: Shield, color: "#ff6b6b" },
            { name: "REST APIs", subtitle: "Integration", icon: Code2, color: "#14b8a6" },
            { name: "WebSockets", subtitle: "Real-time", icon: Network, color: "#22d3ee" },
            { name: "RBAC", subtitle: "Authorization", icon: Shield, color: "#f87171" },
            { name: "Atlas Vector Search", subtitle: "MongoDB", icon: Database, color: "#22c55e" }
        ]
    },
    {
        title: "Generative AI",
        color: "var(--color-lavender)",
        skills: [
            { name: "RAG Pipelines", subtitle: "Context Retrieval", icon: Brain, color: "var(--color-lavender)" },
            { name: "Embeddings", subtitle: "Vector Search", icon: Database, color: "var(--color-lavender)" },
            { name: "Semantic Search", subtitle: "Retrieval", icon: Sparkles, color: "var(--color-lavender)" },
            { name: "LLM Integration", subtitle: "AI Features", icon: Webhook, color: "var(--color-lavender)" },
            { name: "OpenAI", subtitle: "LLM API", icon: Brain, color: "var(--color-lavender)" },
            { name: "Llama 3", subtitle: "Language Model", icon: Brain, color: "var(--color-lavender)" },
            { name: "AI Agents", subtitle: "Tool Calling", icon: Cpu, color: "var(--color-lavender)" },
            { name: "MCP", subtitle: "Tool Integration", icon: Network, color: "var(--color-lavender)" },
            { name: "Prompt Engineering", subtitle: "LLM Instructions", icon: TerminalSquare, color: "var(--color-lavender)" }
        ]
    },
    {
        title: "DevOps & Cloud",
        color: "var(--color-accent-text)",
        skills: [
            { name: "Linux", subtitle: "OS", icon: Terminal, color: "#fef08a" },
            { name: "AWS EC2", subtitle: "Compute", icon: Cloud, color: "#fb923c" },
            { name: "CI/CD", subtitle: "Automation", icon: Rocket, color: "#ef4444" },
            { name: "Event-Driven", subtitle: "Architecture", icon: Activity, color: "#8b5cf6" }
        ]
    },
    {
        title: "Tools",
        color: "var(--color-accent-text)",
        skills: [
            { name: "Git", subtitle: "Version Ctrl", icon: GitBranch, color: "#f97316" },
            { name: "GitHub", subtitle: "Collaboration", icon: Github, color: "#e5e7eb" },
            { name: "VS Code", subtitle: "IDE", icon: Code, color: "#3b82f6" },
            { name: "Postman", subtitle: "API Testing", icon: Send, color: "#fb923c" },
            { name: "Cloudinary", subtitle: "Media", icon: Image, color: "#60a5fa" },
            { name: "Clerk", subtitle: "Auth", icon: Key, color: "#818cf8" },
            { name: "Brevo", subtitle: "Email API", icon: Mail, color: "#0092ff" },
            { name: "Gemini AI", subtitle: "LLM", icon: Brain, color: "#4285f4" },
            { name: "Monaco", subtitle: "Code Editor", icon: Monitor, color: "#007acc" },
            { name: "Judge0", subtitle: "Code Execution", icon: Cpu, color: "#ff6b00" },
            { name: "Canva", subtitle: "Design", icon: PenTool, color: "#67e8f9" },
            { name: "Claude Code", subtitle: "AI Coding", icon: Terminal, color: "#fb923c" },
            { name: "Cursor", subtitle: "AI Editor", icon: Code, color: "#a3a3a3" }
        ]
    },
    {
        title: "Core Computer Science",
        color: "var(--color-accent-text)",
        skills: [
            { name: "DSA", subtitle: "Problem Solving", icon: Code2, color: "var(--color-accent-text)" },
            { name: "System Design", subtitle: "Architecture", icon: Network, color: "var(--color-accent-text)" },
            { name: "Distributed Systems", subtitle: "Core CS", icon: Server, color: "var(--color-accent-text)" },
            { name: "OOP", subtitle: "Programming", icon: Box, color: "var(--color-accent-text)" },
            { name: "Operating Systems", subtitle: "Core CS", icon: Terminal, color: "var(--color-accent-text)" },
            { name: "Computer Networks", subtitle: "Core CS", icon: Globe, color: "var(--color-accent-text)" },
            { name: "DBMS", subtitle: "Data Management", icon: Database, color: "var(--color-accent-text)" }
        ]
    }
];

export const certifications = [
        {
            id: 3,
            title: 'AI Fluency: Framework & Foundations',
            issuer: 'Anthropic',
            logo: '/anthropic-logo.png',
            link: 'https://verify.skilljar.com/c/ng4zxm5w222h',
            color: 'var(--color-lavender)',
            description: 'Certified in AI fundamentals, use, and tool application.'
        },
        {
            id: 1,
            title: 'Walmart Advanced Software Engineering Job Simulation',
            issuer: 'Walmart Global Tech',
            date: '2024',
            link: 'https://drive.google.com/file/d/132FpMU90Ra9-yMfY_UGLKadGxYEDfewV/view',
            logo: '/walmart.png',
            color: '#ffd400',
            description: 'Implemented custom heap data structures in Java, designed UML class diagrams using SOLID principles, and developed Python data pipelines for database ingestion'
        },
        {
            id: 2,
            title: 'GitHub Foundations',
            issuer: 'Microsoft Learn',
            date: '2023',
            link: 'https://drive.google.com/file/d/1v2Rrt6G6CnHwyaSMABKyZ-uYh1wDYIDS/view',
            logo: msLogo,
            color: '#0078D6',
            description: 'Certification covering GitHub fundamentals and version control.'
        }
    ];

export const achievements = [
    {
        icon: Trophy,
        title: 'ICPC Algo Queen 2026',
        highlight: '42nd National Rank',
        desc: 'Ranked 42nd among 1,658 participants nationally in The Girls’ Competitive Programming Cup.',
        color: 'var(--color-lavender)'
    },
    {
        icon: Trophy,
        title: 'National Road Safety Hackathon',
        highlight: 'Semi-Finalist',
        desc: 'Top 50 out of 5,000+ teams — organized by the Ministry of Road Transport & Highways (MoRTH).',
        color: 'var(--color-accent-text)'
    },
    {
        icon: Award,
        title: "Engineer's Ring of Honour",
        highlight: '3rd Rank',
        desc: 'Naukri Campus Competition — secured 3rd position with a ₹10,000 prize.',
        color: 'var(--color-accent-text)'
    },
    {
        icon: Code2,
        title: 'Competitive Programming',
        highlight: '600+ Problems Solved',
        desc: 'Across LeetCode (Knight), CodeChef (2 Star) & GeeksforGeeks.',
        color: 'var(--color-accent-text)'
    },
    {
        icon: Users,
        title: 'Open Source Contributor',
        highlight: 'GSSoC 2024',
        desc: 'Active contributor during GirlScript Summer of Code 2024.',
        color: 'var(--color-lavender)'
    },
    {
        icon: Flame,
        title: 'Adobe GenSolve Hackathon',
        highlight: 'Round 2 Qualifier',
        desc: 'Top 4,000 out of 260,000+ participants nationwide.',
        color: 'var(--color-accent-text)'
    },
    {
        icon: Medal,
        title: 'Yalgaar Sports Fest',
        highlight: 'Gold & Bronze Medals',
        desc: 'Gold Medal in Basketball and Bronze Medal in 400m Relay at IIIT Una.',
        color: 'var(--color-accent-text)'
    },
    {
        icon: Award,
        title: "Ryan's Scholars Award",
        highlight: 'Academic Excellence',
        desc: 'Recognized for outstanding academic performance and overall contribution.',
        color: 'var(--color-accent-text)'
    }
];

export const leadership = [
    {
        icon: Palette,
        role: 'Design Lead',
        org: 'Eunoia Club',
        desc: 'Leading visual identity, branding, and creative direction for college cultural initiatives.',
        color: 'var(--color-lavender)'
    },
    {
        icon: PenTool,
        role: 'Graphic Designer',
        org: 'FORCE Club',
        desc: 'Crafting promotional material, social media graphics, and event branding.',
        color: 'var(--color-accent-text)'
    },
    {
        icon: Megaphone,
        role: 'Content Writer',
        org: 'EPMOC Club',
        desc: 'Producing engaging written content, articles, and event communications for the club.',
        color: 'var(--color-lavender)'
    }
];

export const education = [
    {
        institution: "Indian Institute of Information Technology, Una",
        degree: "B.Tech in Information Technology",
        date: "Aug 2023 – 2027 (Expected)",
        grade: "Current CGPA: 8.59 / 10.0",
        logo: "/iiit-logo.png",
        details: [
            { label: "Relevant Coursework", value: "Data Structures and Algorithms (DSA), Database Management System (DBMS), Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming (OOP)" }
        ]
    },
    {
        institution: "Ryan International School, Greater Noida",
        degree: "CBSE(XII), Maths & Computer Science",
        date: "2020 – 2022",
        grade: "91%",
        logo: "/ryan-logo.png",
        details: [
            { label: "Stream", value: "Completed Senior Secondary (Class 12th) with Computer Science as an optional subject." }
        ]
    },
    {
        institution: "Ryan International School, Greater Noida",
        degree: "CBSE(X), All Subjects with Computer Science",
        date: "2019 – 2020",
        grade: "96.8%",
        logo: "/ryan-logo.png",
        details: [
            { label: "Academics", value: "Completed High School (Class 10th) with outstanding academic performance." }
        ]
    }
];

export const experiences = [
  {
    "company": "Infinito Comics",
    "logo": "/infinito-comics-logo.png",
    "role": "Full Stack AI Developer Intern",
    "date": "July 2026 - September 2026",
    "location": "Remote",
    "document": "/infinito-comics-offer-letter.pdf",
    "documentLabel": "Offer letter",
    "details": [
      "Built an AI customer assistant using RAG, vector embeddings, semantic catalog search, and client session state for customer support and real-time navigation guidance.",
      "Integrated Razorpay checkout for recurring subscription tiers and merchandise using React and Node.js, with HMAC-verified payment webhooks.",
      "Engineered headless WooCommerce REST API pipelines to synchronize merchandise catalogs, inventory counts, and customer checkout flows.",
      "Developed responsive React 19 and Tailwind CSS client portals in a full-stack monorepo, including cross-origin postMessage iframe bridges.",
      "Collaborated in an Agile engineering team, led QA review sessions, and maintained production releases through Jest and automated API integration tests, CI/CD pipelines, and CodeRabbit reviews."
    ]
  },
  {
    "company": "Microvison",
    "logo": "/microvison-logo.png",
    "role": "Web Development Intern",
    "date": "May 2026 - July 2026",
    "location": "Remote",
    "scope": "Service centres across 5+ states",
    "document": "https://drive.google.com/file/d/16EhqDJlo8M1cNKoCMPLCjz4GN6BD4goD/view?usp=sharing",
    "documentLabel": "Internship certificate",
    "details": [
      "Architected and deployed a MERN service management platform for 300+ service centres, implementing complaint registration, service assignment, billing, and real-time tracking to replace a manual phone-based workflow.",
      "Developed a RBAC-based admin system using React.js, Node.js and JWT, featuring complaint management, product tracking, automated warranty validation, and a 5-step registration workflow and location mapping.",
      "Integrated the Meta WhatsApp Cloud API with 7 message templates and 8 automated workflows, built a Critical Action module for warranty handling, and deployed the application as a Progressive Web App (PWA).",
      "Built multi-tenant ticket registration and a rule-based warranty verification engine for the guided five-step workflow.",
      "Designed a transactional billing engine with indexed serial lookups, in- and out-of-warranty claims processing, and bulk invoice reconciliation to eliminate manual spreadsheet billing.",
      "Added retry queues for reliable customer notifications across eight event-driven webhooks."
    ]
  }
];
