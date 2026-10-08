
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Work" },
  { id: "contacts", label: "Contact" },
];

// Home Section Data
export const homeData = {
  typingTexts: [
    "Full Stack Developer",
    "Full Stack Engineer",
    "React & Next.js Developer",
    "React Native Developer",
  ],
  name: "Soufiane Amajat",
  greeting: "Hello, I'm",
  description:
    "Full Stack Developer building scalable web and mobile applications with TypeScript, React, Next.js, NestJS, and React Native. Experienced in delivering production-ready solutions, optimizing performance, and managing mobile app releases for iOS and Android.",
  availabilityStatus: "Open to opportunities",
  socialLinks: [
    {
      icon: "bi-github",
      url: "https://github.com/soufiane-amt",
      label: "GitHub",
    },
    {
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/soufiane-amajat/",
      label: "LinkedIn",
    },
    {
      icon: "bi-envelope",
      url: "mailto:amajatsoufiane@gmail.com",
      label: "Email",
    },
    {
      icon: "bi-medium",
      url: "https://medium.com/@amajatsoufiane",
      label: "Medium",
    },
  ],
};

// About Section Data
export const profileInfo = {
  name: "Soufiane Amajat",
  profile: "Full Stack Developer",
  email: "amajatsoufiane@gmail.com",
  phone: "+212689398453",
  location: "Casablanca, Morocco",
  experience: "2+ Years",
};

export const skills = [
  { name: "TypeScript", level: 90, color: "#3178c6" },
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "React.js", level: 85, color: "#61dafb" },
  { name: "Next.js", level: 85, color: "#ffffff" },
  { name: "React Native", level: 85, color: "#61dafb" },
  { name: "Expo", level: 80, color: "#ffffff" },
  { name: "NestJS", level: 85, color: "#e0234e" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "PostgreSQL", level: 80, color: "#4169e1" },
  { name: "Prisma", level: 80, color: "#5a67d8" },
  { name: "Docker", level: 75, color: "#2496ed" },
  { name: "Git", level: 90, color: "#f05032" },
  { name: "C/C++", level: 85, color: "#00599c" },
  { name: "Java", level: 70, color: "#e76f00" },
];

export const aboutText = {
  heading: "Building reliable software from idea to production",
  paragraphs: [
    "I'm Soufiane Amajat, a Full Stack Developer based in Casablanca, Morocco. I specialize in building modern web and mobile applications using TypeScript, React, Next.js, NestJS, React Native, and PostgreSQL. I work across the development lifecycle, from designing application features and implementing APIs to improving performance and preparing production releases.",

    "My professional experience includes developing mobile applications, improving enterprise software, and building digital workflows for businesses. At Camelo, I contribute to a content-production platform and its mobile application, including Android and iOS release processes. At Autocash, I worked on mobile field operations, CRM functionality, and administrative tools, contributing to workflows handling more than MAD 500,000 in transactions.",

    "My engineering foundation comes from 1337 (42 Network), where I developed strong problem-solving skills through systems programming, algorithms, networking, and collaborative projects. Across more than 20 projects, I've worked with different teams and technologies, always focusing on maintainable code, practical solutions, and measurable improvements.",
  ],
};

// Experience Section Data
export interface Experience {
  title: string;
  company: string;
  location?: string;
  duration: string;
  type: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full Stack & Mobile Developer",
    company: "Camelo",
    location: "Casablanca, Morocco",
    duration: "Sep 2026 – Present",
    type: "Professional",
    description: [
      "Develop and maintain Camelo's mobile application using React Native, Expo, and TypeScript, providing clients with centralized production tracking, communication, and deliverable approvals.",
      "Work on application features and integrations supporting project workflows, client feedback, and content production management.",
      "Configure Android and iOS build environments using Expo Application Services (EAS), including development and production variants.",
      "Manage mobile release workflows, versioning, and submissions to Google Play Store and Apple App Store.",
      "Investigate technical issues, improve application reliability, and support production deployments.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React",
      "EAS Build",
      "Android",
      "iOS",
      "Git",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Autocash (Kazoto SARL)",
    location: "Casablanca, Morocco",
    duration: "Mar 2026 – Aug 2026",
    type: "Professional",
    description: [
      "Developed and optimized the React Native Expertise application, digitizing vehicle inspection and field workflows while reducing manual data entry.",
      "Built purchase-order workflows supporting 5–7 monthly transactions with a combined value exceeding MAD 500,000.",
      "Implemented CRM and search features that generated more than 50 qualified leads and saved over 10 hours of manual work per week.",
      "Improved the internal React.js back-office application, enhancing administrative workflows and operational efficiency.",
    ],
    technologies: [
      "React Native",
      "React.js",
      "JavaScript",
      "TypeScript",
      "CRM",
      "Git",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Flow Digital Transformation",
    location: "Rabat, Morocco",
    duration: "Aug 2024 – Dec 2024",
    type: "Professional",
    description: [
      "Resolved more than 40 bugs across an enterprise ERP system built with Next.js, NestJS, and PostgreSQL.",
      "Collaborated with a seven-member Scrum team to maintain and improve frontend components and backend services.",
      "Investigated application issues, implemented fixes, and supported testing and code reviews to improve system reliability.",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Scrum",
      "Git",
    ],
  },
];

// Portfolio Section Data
export interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  url: string;
  liveDemo?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "SoukNova",
    category: "Web",
    description:
      "Full-stack e-commerce platform supporting 300+ products, authentication, administration, and order management. Improved data retrieval speed by 96% through pagination and Redis caching, reduced API payloads by 69.8%, and optimized search performance by 90%.",
    image: "/ProjectElement/souknova.png",
    url: "https://github.com/soufiane-amt/SoukNova",
    liveDemo: "https://souk-nova-front.vercel.app/",
    tech: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Jest",
      "Playwright",
    ],
  },
  {
    name: "Ft_transcendance",
    category: "Web",
    description:
      "Real-time multiplayer ping-pong platform developed in a four-person team, featuring authentication, direct messaging, public and private chat rooms, user blocking, and WebSocket communication supporting 30+ concurrent users.",
    image: "/ProjectElement/ft_transcendance.png",
    url: "https://github.com/soufiane-amt/ft_transcendance",
    liveDemo: "https://ft-transcendance-three.vercel.app/",
    tech: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "React",
      "PostgreSQL",
      "WebSocket",
      "Docker",
    ],
  },
  {
    name: "Webserv",
    category: "Systems",
    description:
      "Custom HTTP server developed in C++ by a three-person team, supporting 100+ concurrent connections, HTTP request processing, configuration management, and CGI execution.",
    image: "/ProjectElement/webserv.webp",
    url: "https://github.com/soufiane-amt/webserv",
    tech: ["C++", "HTTP", "Networking", "Sockets", "CGI"],
  },
  {
    name: "Inception",
    category: "DevOps",
    description:
      "Containerized multi-service infrastructure using Docker, NGINX, WordPress, and MariaDB, with TLS configuration, persistent volumes, and isolated service networking.",
    image: "/ProjectElement/inception.png",
    url: "https://github.com/soufiane-amt/inception",
    tech: ["Docker", "NGINX", "MariaDB", "Linux", "TLS"],
  },
  {
    name: "Minishell",
    category: "Systems",
    description:
      "Unix shell interpreter inspired by Bash, implementing command parsing, pipelines, redirections, environment variables, built-in commands, and process management.",
    image: "/ProjectElement/minishell.png",
    url: "https://github.com/soufiane-amt/minishell",
    tech: ["C", "Shell", "Unix", "Processes"],
  },
  {
    name: "ft_containers",
    category: "Systems",
    description:
      "Reimplementation of standard C++ containers, including vector, stack, map, and set, with custom iterators, templates, and data structures.",
    image: "/ProjectElement/ft_containers.webp",
    url: "https://github.com/soufiane-amt/ft_containers",
    tech: ["C++", "STL", "Templates", "Data Structures"],
  },
  {
    name: "Cub3D",
    category: "Graphics",
    description:
      "3D maze exploration game using raycasting techniques, inspired by Wolfenstein 3D, featuring texture rendering, player movement, and map parsing.",
    image: "/ProjectElement/cubTd.webp",
    url: "https://github.com/soufiane-amt/cub3d",
    tech: ["C", "Raycasting", "miniLibX", "Graphics"],
  },
  {
    name: "So_long",
    category: "Graphics",
    description:
      "2D game developed in C with sprite rendering, keyboard controls, map validation, collision handling, and collectible-based gameplay.",
    image: "/ProjectElement/so_long.webp",
    url: "https://github.com/soufiane-amt/so_long",
    tech: ["C", "miniLibX", "Graphics"],
  },
  {
    name: "Born2beroot",
    category: "DevOps",
    description:
      "Linux server administration project covering virtualization, SSH, firewall configuration, user permissions, system monitoring, and security policies.",
    image: "/ProjectElement/borntoberoot.png",
    url: "https://github.com/soufiane-amt/",
    tech: ["Linux", "Virtualization", "SSH", "Security"],
  },
  {
    name: "Netpractice",
    category: "DevOps",
    description:
      "Networking exercises focused on IPv4 addressing, routing, subnetting, TCP/IP fundamentals, and network troubleshooting.",
    image: "/ProjectElement/netpractice.png",
    url: "https://github.com/soufiane-amt/NetPractice",
    tech: ["Networking", "TCP/IP", "Subnetting", "Routing"],
  },
  {
    name: "Philosophers",
    category: "Systems",
    description:
      "Concurrent programming simulation implementing threads, mutexes, resource synchronization, and deadlock prevention.",
    image: "/ProjectElement/philosophers.webp",
    url: "https://github.com/soufiane-amt/Philosopher",
    tech: ["C", "Threads", "Mutexes", "Concurrency"],
  },
  {
    name: "Pipex",
    category: "Systems",
    description:
      "Unix pipeline implementation handling process creation, file descriptors, command execution, and inter-process communication.",
    image: "/ProjectElement/pipex.webp",
    url: "https://github.com/soufiane-amt/pipex",
    tech: ["C", "Unix", "Processes", "Pipes"],
  },
  {
    name: "Get_next_line",
    category: "Systems",
    description:
      "Buffered file-reading utility in C that retrieves lines from file descriptors while managing memory and persistent read state.",
    image: "/ProjectElement/get_next_line.webp",
    url: "https://github.com/soufiane-amt/get_next_line",
    tech: ["C", "File I/O", "Memory Management"],
  },
  {
    name: "Push_swap",
    category: "Systems",
    description:
      "Stack-based sorting algorithm designed to sort integer sequences using a restricted instruction set and optimized operation counts.",
    image: "/ProjectElement/push_swap.webp",
    url: "https://github.com/soufiane-amt/push_swap",
    tech: ["C", "Algorithms", "Sorting", "Stacks"],
  },
  {
    name: "Ft_printf",
    category: "Systems",
    description:
      "Custom implementation of the C printf function, supporting formatted output, variadic arguments, and multiple conversion specifiers.",
    image: "/ProjectElement/ft_printf.webp",
    url: "https://github.com/soufiane-amt/ft_printf",
    tech: ["C", "Variadic Functions", "Formatting"],
  },
  {
    name: "Libft",
    category: "Systems",
    description:
      "Custom C utility library implementing string manipulation, memory operations, linked lists, and reusable foundational functions.",
    image: "/ProjectElement/libft.png",
    url: "https://github.com/soufiane-amt/Libft",
    tech: ["C", "Library Development", "Memory Management"],
  },
];

export const projectCategories = [
  "All",
  "Web",
  "Systems",
  "Graphics",
  "DevOps",
];

// Contact Section Data
export const contactMethods = [
  {
    icon: "bi-envelope-at",
    title: "Email Me",
    value: "amajatsoufiane@gmail.com",
    link: "mailto:amajatsoufiane@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: "bi-linkedin",
    title: "LinkedIn",
    value: "Let's connect professionally",
    link: "https://www.linkedin.com/in/soufiane-amajat/",
    color: "#0077b5",
  },
  {
    icon: "bi-github",
    title: "GitHub",
    value: "Explore my projects",
    link: "https://github.com/soufiane-amt",
    color: "#8b5cf6",
  },
  {
    icon: "bi-telephone",
    title: "Call Me",
    value: "+212 689 398 453",
    link: "tel:+212689398453",
    color: "#10b981",
  },
];

export const socialLinks = [
  {
    icon: "bi-twitter-x",
    link: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: "bi-medium",
    link: "https://medium.com/@amajatsoufiane",
    label: "Medium",
  },
];

// Resume Downloads
export const resumeDownloads = [
  {
    label: "English",
    icon: "bi-file-earmark-pdf",
    url: "/resume/Soufiane-Amajat-full-stack-en.pdf",
  },
  {
    label: "Français",
    icon: "bi-file-earmark-pdf",
    url: "/resume/Soufiane-Amajat-full-stack-fr.pdf",
  },
];
