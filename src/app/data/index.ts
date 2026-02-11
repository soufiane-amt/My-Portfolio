// Navigation Items
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Work" },
  { id: "contacts", label: "Contact" },
];

// Home Section Data
export const homeData = {
  typingTexts: ["Software Developer", "Full Stack Engineer"],
  name: "Soufiane Amajat",
  greeting: "Hello, I'm",
  description:
    "Passionate about building innovative software solutions and exploring cybersecurity. Currently focused on full-stack development with modern technologies.",
  availabilityStatus: "Available for opportunities",
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
  profile: "Software Developer",
  email: "amajatsoufiane@gmail.com",
  phone: "+212689398453",
  location: "Morocco",
  experience: "2+ Years",
};

export const skills = [
  { name: "HTML/CSS", level: 90, color: "#e34f26" },
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "Next.js", level: 80, color: "#ffffff" },
  { name: "Nest.js", level: 70, color: "#e0234e" },
  { name: "React.js", level: 80, color: "#ffffff" },
  { name: "C/C++", level: 85, color: "#00599c" },
  { name: "Java", level: 70, color: "#3776ab" },
];

export const aboutText = {
  heading: "A passionate developer crafting digital experiences",
  paragraphs: [
    "Greetings! I'm Soufiane, a tech enthusiast who honed their coding skills at 1337 and is now delving into the captivating realm of software development. My journey began with immersive learning and collaboration at 1337, where I mastered the art of coding through hands-on projects and peer-to-peer education.",
    "Building on my foundation in software development, I've pivoted towards the exciting field of advanced software solutions. Fueled by a passion for creating innovative digital landscapes, I'm currently immersed in the complexities of web development and application programming.",
    "Leveraging the problem-solving mindset instilled at 1337, I'm navigating the ever-evolving software development landscape, exploring new challenges, and embracing continuous learning.",
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
    title: "Full Stack Developer Intern",
    company: "Flow Digital Transformation",
    location: "Morocco",
    duration: "2024",
    type: "Internship",
    description: [
      "Resolved 30+ bugs in an ERP system using Next.js, Nest.js, and PostgreSQL.",
      "Collaborated with a 7-member development team and followed Scrum methodology.",
      "Tested and debugged backend services and frontend components to ensure system quality.",
      "Participated in code reviews and applied modern development practices.",
    ],
    technologies: ["Next.js", "Nest.js", "PostgreSQL", "Scrum", "Git"],
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
      "SoukNova is a modern e-commerce platform dedicated to selling house decorations.",
    image: "/ProjectElement/souknova.png",
    url: "https://github.com/soufiane-amt/SoukNova",
    liveDemo: "https://souk-nova-front.vercel.app/",
    tech: ["NestJS", "React", "PostgreSQL", "WebSocket"],
  },
  {
    name: "Ft_transcendance",
    category: "Web",
    description:
      "Real-time multiplayer PingPong game with chat system and user authentication.",
    image: "/ProjectElement/ft_transcendance.png",
    url: "https://github.com/soufiane-amt/ft_transcendance",
    liveDemo: "https://ft-transcendance-three.vercel.app/",
    tech: ["NestJS", "React", "PostgreSQL", "WebSocket"],
  },
  {
    name: "Webserv",
    category: "Systems",
    description:
      "Custom HTTP server with efficient request handling and CGI support.",
    image: "/ProjectElement/webserv.webp",
    url: "https://github.com/soufiane-amt/webserv",
    tech: ["C++", "HTTP", "Networking"],
  },
  {
    name: "Inception",
    category: "DevOps",
    description:
      "Docker-based infrastructure with NGINX, WordPress, and MariaDB.",
    image: "/ProjectElement/inception.png",
    url: "https://github.com/soufiane-amt/inception",
    tech: ["Docker", "NGINX", "MariaDB"],
  },
  {
    name: "Minishell",
    category: "Systems",
    description:
      "Shell interpreter inspired by Bash with command execution features.",
    image: "/ProjectElement/minishell.png",
    url: "https://github.com/soufiane-amt/minishell",
    tech: ["C", "Shell", "Unix"],
  },
  {
    name: "ft_containers",
    category: "Systems",
    description:
      "C++ STL containers reimplementation including vector, stack, map, set.",
    image: "/ProjectElement/ft_containers.webp",
    url: "https://github.com/soufiane-amt/ft_containers",
    tech: ["C++", "STL", "Data Structures"],
  },
  {
    name: "Cub3D",
    category: "Graphics",
    description: "Raycasting game engine inspired by Wolfenstein 3D.",
    image: "/ProjectElement/cubTd.webp",
    url: "https://github.com/soufiane-amt/cub3d",
    tech: ["C", "Raycasting", "miniLibX"],
  },
  {
    name: "So_long",
    category: "Graphics",
    description: "2D game project with sprite animations and map parsing.",
    image: "/ProjectElement/so_long.webp",
    url: "https://github.com/soufiane-amt/so_long",
    tech: ["C", "miniLibX", "Graphics"],
  },
  {
    name: "Born2beroot",
    category: "DevOps",
    description: "System administration and virtualization project.",
    image: "/ProjectElement/borntoberoot.png",
    url: "https://github.com/soufiane-amt/",
    tech: ["Linux", "VM", "Security"],
  },
  {
    name: "Netpractice",
    category: "DevOps",
    description: "Networking fundamentals and TCP/IP configuration project.",
    image: "/ProjectElement/netpractice.png",
    url: "https://github.com/soufiane-amt/NetPractice",
    tech: ["Networking", "TCP/IP", "Subnetting"],
  },
  {
    name: "Philosophers",
    category: "Systems",
    description: "Introduction to processes, threads, and mutexes.",
    image: "/ProjectElement/philosophers.webp",
    url: "https://github.com/soufiane-amt/Philosopher",
    tech: ["C", "Threads", "Mutexes"],
  },
  {
    name: "Pipex",
    category: "Systems",
    description: "Reimplementation of Linux shell pipe functionality.",
    image: "/ProjectElement/pipex.webp",
    url: "https://github.com/soufiane-amt/pipex",
    tech: ["C", "Unix", "Processes"],
  },
  {
    name: "Get_next_line",
    category: "Systems",
    description: "Function to read a line from a file descriptor.",
    image: "/ProjectElement/get_next_line.webp",
    url: "https://github.com/soufiane-amt/get_next_line",
    tech: ["C", "File I/O", "Memory"],
  },
  {
    name: "Push_swap",
    category: "Systems",
    description: "Sorting algorithm with limited set of instructions.",
    image: "/ProjectElement/push_swap.webp",
    url: "https://github.com/soufiane-amt/push_swap",
    tech: ["C", "Algorithms", "Sorting"],
  },
  {
    name: "Ft_printf",
    category: "Systems",
    description: "Reimplementation of printf function.",
    image: "/ProjectElement/ft_printf.webp",
    url: "https://github.com/soufiane-amt/ft_printf",
    tech: ["C", "Variadic", "Formatting"],
  },
  {
    name: "Libft",
    category: "Systems",
    description: "Custom C library with essential functions.",
    image: "/ProjectElement/libft.png",
    url: "https://github.com/soufiane-amt/Libft",
    tech: ["C", "Library", "Memory"],
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
    value: "Check out my repositories",
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
  { icon: "bi-twitter-x", link: "https://twitter.com", label: "Twitter" },
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
