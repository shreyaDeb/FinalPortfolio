import homezen from "../images/homezen.png"
import zingTongue from "../images/zingTongue.png"
import nanami from "../images/nanami.png"
import slib from "../images/zlib.png"
import comfyPetsImage from "../images/comfyPetss.png"
import Demo from "../images/Demo.gif"
import queryGeniusAi from "../images/queryGeniusAi.png"
import dataFlowAi from "../images/DataFlow.png"
import linguavoxAi from "../images/VoiceText.png"
import visionmatchAi from "../images/VisualMatch.png"

export type ProjectCategory = "product" | "experiment" | "case-study";

export interface Technology {
  category: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface GalleryItem {
  type: "full" | "two" | "image-text" | "feature";
  src?: string;
  alt?: string;
  caption?: string;
  text?: string;
  aspectRatio?: "4/3" | "16/10" | "3/4" | "1/1";
}

export interface Project {
  show: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  featured: boolean;
  image?: string;
  link?: string;
  github?: string;
  caseStudy?: string;
  confidential?: number;
  // Expanded case-study fields
  number?: string;
  technologies?: Technology[];
  heroImage?: string;
  overview?: string;
  role?: string[];
  challenges?: string[];
  lessons?: string[];
  gallery?: GalleryItem[];
  links?: ProjectLink[];
  nextProject?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    show: 0,
    slug: "querygenius-ai",
    image: queryGeniusAi.src,
    title: "QueryGenius AI",
    subtitle: "Natural Language to SQL Query & Visualization Tool",
    description:
      "An AI-powered tool that converts natural language questions into SQL queries, fetches data based on database structure, and generates insightful visualizations.",
    category: "product",
    tags: ["Python", "Flask", "OpenAI API", "NLP", "LangChain", "SQLAlchemy", "MySQL", "Pandas", "Plotly"],
    year: "2024",
    featured: false,
    link: "#",
    number: "05",
    technologies: [
      { category: "Frontend", items: ["JavaScript", "HTML", "CSS"] },
      { category: "Backend", items: ["Python", "Flask", "SQLAlchemy"] },
      { category: "AI & NLP", items: ["OpenAI API", "LangChain", "NLP"] },
      { category: "Data Processing", items: ["Pandas", "Matplotlib", "Seaborn", "Plotly"] },
      { category: "Database", items: ["MySQL"] },
    ],
    overview:
      "QueryGenius AI allows users to ask questions in natural English. The AI reads only the structure of the connected database—tables and columns, without accessing any actual data. It automatically generates SQL queries based on the question, retrieves the results, and produces interactive graphs and visual insights. This tool democratizes data access by enabling non-technical users to explore databases through natural language, while maintaining strict data security through schema-only access.",
    role: [
      "Built the Flask backend with secure API endpoints for query generation",
      "Integrated OpenAI API with LangChain for natural language to SQL conversion",
      "Implemented schema-only database access to ensure data privacy and security",
      "Developed dynamic visualization pipelines using Matplotlib, Seaborn, and Plotly",
      "Designed the responsive frontend dashboard for query input and results display",
      "Created secure SQL query execution with parameterized queries and validation",
    ],
    challenges: [
      "Ensuring the AI generates accurate SQL queries without accessing actual data",
      "Maintaining data security while providing full functionality",
      "Creating meaningful visualizations from varying query results and data types",
      "Handling complex natural language questions with ambiguous intent",
      "Optimizing AI prompt design for consistent and reliable query generation",
      "Managing latency between natural language processing and visualization rendering",
    ],
    lessons: [
      "Learned to integrate AI with database schema understanding for safe query generation",
      "Gained experience in automating SQL query generation with proper security measures",
      "Mastered dynamic visualization rendering based on varied data structures",
      "Discovered the importance of prompt engineering for consistent AI outputs",
      "Balancing AI autonomy with data security requires careful architectural design",
    ],
    gallery: [
      {
        type: "image-text",
        src: "",
        alt: "QueryGenius AI dashboard",
        caption: "Natural language query interface",
        text: "Users type questions in natural English. The AI reads only the database structure (tables and columns) to generate secure SQL queries without accessing actual data.",
      },
      {
        type: "image-text",
        src: "",
        alt: "Generated visualizations",
        caption: "Interactive data visualizations",
        text: "Query results are automatically processed and displayed as interactive graphs using Matplotlib, Seaborn, and Plotly, providing immediate visual insights.",
      },
    ],
    links: [
      { label: "Source Code", href: "#" }, // Confidential
      { label: "Live Project", href: "#" }, // Confidential
    ],
    confidential: 1, // Flag to indicate this is a work project
  },
  {
    show: 0,
    slug: "data-flow-ai",
    image: dataFlowAi.src, // You'll need to import this
    title: "Data Flow AI",
    subtitle: "AI-Powered Document Processing & Bookkeeping Platform",
    description:
      "An AI-powered bookkeeping and document processing platform that extracts, structures, and stores financial data from uploaded PDFs or scanned files using OCR and AI models.",
    category: "product",
    tags: ["React", "AWS Lambda", "Python", "Tesseract OCR", "OpenAI API", "MySQL", "Redux", "AWS S3"],
    year: "2024",
    featured: false,
    link: "#", // Confidential project
    number: "06",
    technologies: [
      { category: "Frontend", items: ["React", "Redux", "CSS"] },
      { category: "Backend", items: ["Python", "AWS Lambda", "API Gateway"] },
      { category: "OCR & AI", items: ["Tesseract OCR", "OpenAI API"] },
      { category: "Storage", items: ["AWS S3"] },
      { category: "Database", items: ["MySQL"] },
    ],
    overview:
      "Data Flow AI automates data extraction and organization from invoices, receipts, and financial documents. Using Tesseract OCR and GPT-based AI models, it converts unstructured text into a structured format, stores it in a MySQL database, and provides users with an intuitive interface to view, verify, and process their documents. The platform handles various document types and formats, making bookkeeping efficient and error-free.",
    role: [
      "Built the React-based frontend with Redux for state management",
      "Implemented AWS Lambda functions for serverless document processing",
      "Integrated Tesseract OCR for text extraction from scanned documents",
      "Developed AI prompt engineering for structured data extraction",
      "Designed the MySQL database schema for multi-user document storage",
      "Created the interactive dashboard with real-time document preview",
      "Implemented secure AWS S3 integration for document storage",
    ],
    challenges: [
      "Handling inconsistent document formats and varying layout structures",
      "Improving text extraction accuracy from scanned and handwritten documents",
      "Optimizing prompt design for AI to ensure reliable field extraction",
      "Managing pagination and multi-page document processing",
      "Implementing file reprocessing and conditional rendering in React",
      "Maintaining performance with large document uploads and processing",
    ],
    lessons: [
      "Gained hands-on experience integrating OCR with AI for intelligent document parsing",
      "Learned to manage asynchronous file workflows at scale",
      "Discovered the importance of prompt engineering for reliable entity extraction",
      "Mastered building API-driven architectures with serverless computing",
      "Understanding user workflows helps design better document processing pipelines",
    ],
    gallery: [
      {
        type: "image-text",
        src: "",
        alt: "Document upload and processing",
        caption: "AI-powered document processing",
        text: "Users upload documents (PDFs or images). The system extracts text using Tesseract OCR, processes it through AI models, and structures financial data like vendor names, dates, and totals.",
      },
      {
        type: "image-text",
        src: "",
        alt: "Dashboard and history view",
        caption: "Document history dashboard",
        text: "Processed documents are stored in MySQL and can be viewed in a detailed history dashboard. Users can reprocess files and open them directly in the app.",
      },
    ],
    links: [
      { label: "Source Code", href: "#" }, // Confidential
      { label: "Live Project", href: "#" }, // Confidential
    ],
    confidential: 1, // Flag to indicate this is a work project
  },
  {
    show: 0,
    slug: "linguavox-ai",
    image: linguavoxAi.src, // You'll need to import this
    title: "LinguaVox AI",
    subtitle: "Multilingual AI-Powered Voice-to-Text Converter",
    description:
      "A multilingual AI-powered voice-to-text converter supporting Indian Languages, Korean, Japanese, and English using Whisper and SpeechRecognition APIs.",
    category: "product",
    tags: ["Python", "Flask", "OpenAI Whisper", "SpeechRecognition", "JavaScript", "Bootstrap"],
    year: "2024",
    featured: false,
    link: "#", // Confidential project
    number: "07",
    technologies: [
      { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
      { category: "Backend", items: ["Python", "Flask"] },
      { category: "AI & Speech", items: ["OpenAI Whisper", "SpeechRecognition API"] },
    ],
    overview:
      "LinguaVox AI is a speech recognition web app that converts spoken input into accurate text across multiple languages. It uses OpenAI Whisper for high-quality transcription and integrates a clean Flask backend for handling recordings and AI processing. The transcribed text is then used directly in the search bar for one of our products, enabling faster and more intuitive search functionality. Supporting Malayalam, Hindi, English, Japanese, Korean, and more, the app makes voice search accessible across diverse linguistic backgrounds.",
    role: [
      "Built the Flask backend with audio processing pipelines",
      "Integrated OpenAI Whisper for multilingual speech-to-text conversion",
      "Implemented Web Speech API and MediaRecorder for audio capture",
      "Designed the simple, intuitive frontend interface with Bootstrap",
      "Optimized audio format and preprocessing for accurate transcription",
      "Created real-time UI updates for transcription display",
    ],
    challenges: [
      "Managing noise in audio input for accurate transcription",
      "Handling long speech sessions efficiently without performance degradation",
      "Ensuring proper language model selection for regional languages like Malayalam",
      "Optimizing latency between recording and transcription",
      "Processing various audio formats while maintaining quality",
      "Balancing real-time responsiveness with AI processing time",
    ],
    lessons: [
      "Learned to integrate real-time speech recognition in web applications",
      "Gained experience handling multi-language audio input and processing",
      "Mastered optimizing audio file formats for AI transcription",
      "Discovered the importance of audio preprocessing for better accuracy",
      "Understanding user flow helped design more intuitive voice interfaces",
    ],
    gallery: [
      {
        type: "image-text",
        src: "",
        alt: "LinguaVox AI recording interface",
        caption: "Voice recording and transcription interface",
        text: "Users can start/stop recording with a simple UI. Audio is captured and sent to the backend for processing with OpenAI Whisper.",
      },
      {
        type: "image-text",
        src: "",
        alt: "Multilingual transcription support",
        caption: "Supporting multiple languages",
        text: "The app supports Malayalam, Hindi, English, Japanese, Korean, and more, making voice search accessible across diverse linguistic backgrounds.",
      },
    ],
    links: [
      { label: "Source Code", href: "#" }, // Confidential
      { label: "Live Project", href: "#" }, // Confidential
    ],
    confidential: 1,
  },
  {
    show: 0,
    slug: "visionmatch-ai",
    image: visionmatchAi.src,
    title: "VisionMatch AI",
    subtitle: "AI-Powered Image Generation & Similarity Analysis",
    description:
      "An AI-powered image generation platform that modifies user-provided reference images according to a text prompt and evaluates similarity against a folder of reference images.",
    category: "product",
    tags: ["Python", "Flask", "OpenAI", "DALL·E", "Stable Diffusion", "OpenCV", "NumPy", "HTML", "CSS", "JavaScript"],
    year: "2024",
    featured: false,
    link: "#",
    number: "08",
    technologies: [
      { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
      { category: "Backend", items: ["Python", "Flask"] },
      { category: "AI Generation", items: ["OpenAI", "DALL·E", "Stable Diffusion"] },
      { category: "Image Processing", items: ["OpenCV", "NumPy"] },
    ],
    overview:
      "VisionMatch AI allows users to upload a reference image and provide a text prompt. The system generates a new image based on the prompt and compares it against multiple stored reference images to determine how closely it matches in terms of background, positioning, and overall similarity. The platform combines AI image generation with automated similarity scoring, making it ideal for design validation, product visualization, and quality assessment tasks.",
    role: [
      "Built the Flask backend with image generation and processing pipelines",
      "Integrated multiple AI image generation models (OpenAI, DALL·E, Stable Diffusion)",
      "Implemented image similarity scoring using OpenCV and NumPy",
      "Designed the frontend for image upload, prompt input, and results display",
      "Created the reference image comparison system with percentage match scoring",
      "Optimized preprocessing pipelines for consistent similarity calculations",
    ],
    challenges: [
      "Finding the right AI model for the specific task requirements",
      "Ensuring generated images accurately followed prompts while maintaining reference features",
      "Calculating reliable similarity percentages across images with different backgrounds",
      "Selecting appropriate similarity metrics (SSIM, cosine similarity, etc.)",
      "Optimizing performance for multiple reference image comparisons",
      "Preprocessing images consistently for accurate similarity scoring",
    ],
    lessons: [
      "Gained experience in integrating AI image generation models with real-world pipelines",
      "Learned to use OpenCV and NumPy for advanced image processing and similarity scoring",
      "Discovered the importance of metric selection for reliable image comparison",
      "Mastered combining AI generation with automated evaluation workflows",
      "Understanding visual similarity metrics helps build better AI evaluation tools",
    ],
    gallery: [
      {
        type: "image-text",
        src: "",
        alt: "VisionMatch AI upload interface",
        caption: "Reference image upload and prompt input",
        text: "Users upload a reference image and provide a text prompt describing the desired modifications. The AI generates a new image based on both inputs.",
      },
      {
        type: "image-text",
        src: "",
        alt: "Similarity comparison results",
        caption: "AI-generated image comparison",
        text: "The generated image is compared against multiple reference images. Similarity percentages are calculated, and the closest match is highlighted for the user.",
      },
    ],
    links: [
      { label: "Source Code", href: "#" },
      { label: "Live Project", href: "#" },
    ],
    confidential: 1,
  },
  {
    show: 1,
    slug: "zing-tongue",
    image: zingTongue.src,
    title: "Zing Tongue",
    subtitle: "Language Learning Reimagined",
    description:
      "An interactive language learning application that uses gamification and spaced repetition to accelerate fluency.",
    category: "product",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    year: "2024",
    featured: true,
    link: "https://ztwebapp.vercel.app/",
    number: "02",
    technologies: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Supabase", "PostgreSQL", "Edge Functions"] },
      { category: "Design", items: ["Figma"] },
    ],
    overview:
      "Zing Tongue reimagines language learning through gamification and scientifically-backed spaced repetition. It addresses the engagement problem in traditional language apps — most users abandon within two weeks. The platform turns vocabulary practice into interactive challenges, tracks retention curves, and adapts difficulty in real time. Built for serious learners who want structure without the boredom.",
    role: [
      "Architected the Next.js application with App Router and server components",
      "Implemented the spaced repetition algorithm with adaptive scheduling",
      "Built interactive vocabulary games with Framer Motion animations",
      "Designed the Supabase database schema for user progress and content",
      "Created the responsive UI with Tailwind CSS",
      "Integrated audio pronunciation with Web Speech API",
    ],
    challenges: [
      "Designing a spaced repetition algorithm that balances retention with user engagement",
      "Managing complex game state across client and server without over-fetching",
      "Creating animations that feel playful without distracting from learning",
    ],
    lessons: [
      "Gamification works best when it serves the learning goal, not the other way around",
      "Server components can dramatically simplify data fetching when used thoughtfully",
      "Edge functions are ideal for lightweight personalization logic",
    ],
    gallery: [
      {
        type: "feature",
        src: "",
        alt: "Zing Tongue learning interface",
        caption: "Interactive vocabulary challenges",
      },
    ],
    links: [
      { label: "Live Project", href: "#" },
    ],
    confidential: 0,
  },
  {
    show: 0,
    slug: "AHomeAZen",
    image: homezen.src,
    title: "Home Zen",
    subtitle: "Smart Home Management Platform",
    description:
      "A comprehensive platform for managing smart home devices with an intuitive interface and automation capabilities.",
    category: "product",
    tags: ["React", "Node.js", "IoT", "PostgreSQL"],
    year: "2024",
    featured: true,
    link: "http://ahomeazen.co.in/",
    number: "01",
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "REST API"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "Infrastructure", items: ["AWS IoT", "Docker"] },
    ],
    overview:
      "HomeEase is a smart home management platform designed to simplify the control and automation of connected devices. It addresses the fragmentation problem in the IoT ecosystem, where users juggle multiple apps for different devices. The platform provides a unified dashboard for device management, automation rules, and energy monitoring — built for homeowners who want simplicity without sacrificing control.",
    role: [
      "Led full-stack development from concept to deployment",
      "Designed and implemented the REST API architecture",
      "Built the React frontend with real-time device status updates",
      "Integrated AWS IoT Core for device communication",
      "Designed the PostgreSQL schema for device states and automation rules",
      "Implemented WebSocket connections for live updates",
    ],
    challenges: [
      "Handling real-time state synchronization across 50+ concurrent device connections",
      "Designing an automation rule engine that remains intuitive for non-technical users",
      "Optimizing API response times for dashboard load under high concurrency",
    ],
    lessons: [
      "Real-time systems require careful consideration of connection lifecycle and reconnection strategies",
      "Simplifying complex automation logic into a visual interface is one of the hardest UX challenges",
      "Type safety across the full stack dramatically reduces integration bugs",
    ],
    gallery: [
      {
        type: "feature",
        src: "",
        alt: "HomeEase dashboard showing device controls",
        caption: "Unified dashboard for all connected devices",
      },
      {
        type: "two",
        alt: "HomeEase automation rules and energy monitoring",
        caption: "Automation rules and energy insights",
      },
    ],
    links: [
      { label: "Live Project", href: "#" },
    ],

  },
  {
    show: 1,
    slug: "comfy-pets",
    image: comfyPetsImage.src,
    title: "Comfy Pets",
    subtitle: "Care for Every Kind of Companion",
    description:
      "A comprehensive pet care platform offering diapers, toys, training, grooming, and store appointments for all species — from dogs and cats to hamsters, hens, and reptiles.",
    category: "product",
    tags: ["Next.js", "Tailwind CSS", "React Native"],
    year: "2026",
    featured: true,
    link: "https://comfypets.vercel.app/",
    number: "04",
    technologies: [
      { category: "Frontend (Web)", items: ["Next.js", "React", "Tailwind CSS"] },
      { category: "Mobile", items: ["React Native", "Expo"] },
      { category: "Design", items: ["Figma", "Custom Design System"] },
      { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma"] },
    ],
    overview:
      "Comfy Pets is a full-service pet care platform designed for every kind of companion — not just dogs and cats. The brand embraces all species, from hamsters and hens to snakes and reptiles. The platform combines an e-commerce experience with service booking, allowing users to purchase diapers, toys, and training supplies while also scheduling grooming appointments and store visits. The design language draws from boarding pass aesthetics — a ticket stub metaphor that communicates journey, care, and the idea that every pet is special.",
    role: [
      "Led the design and development of the complete platform",
      "Created the boarding-pass inspired visual identity and design system",
      "Built the Next.js landing page with full responsive design",
      "Designed the React Native app with shared brand language",
      "Implemented service booking and product catalog systems",
      "Developed the species-first content strategy and UI",
    ],
    challenges: [
      "Creating a brand identity that feels equally welcoming for a hamster owner and a snake enthusiast",
      "Building a unified design system that works across web and mobile",
      "Designing an e-commerce + booking flow that doesn't overwhelm users with choices",
      "Translating the vintage ticket stub aesthetic into a modern, functional interface",
    ],
    lessons: [
      "Universal design doesn't mean generic — it means thoughtful inclusion of all use cases",
      "A strong visual metaphor (boarding pass) can unify disparate features",
      "Green + cream + gold can feel premium when balanced with careful contrast and spacing",
      "Mobile-first thinking applies to brand experience, not just layout",
    ],
    gallery: [
      {
        type: "image-text",
        src: "",
        alt: "Comfy Pets landing page",
        caption: "Boarding pass inspired hero section",
        text: "The landing page captures the brand's 'all species welcome' ethos with a ticket stub metaphor — a visual identity that immediately communicates journey, care, and inclusivity.",
      },
      {
        type: "image-text",
        src: "",
        alt: "Species grid and services",
        caption: "Species-first design approach",
        text: "The species grid prominently features every animal type, making it clear from the first interaction that this platform is for all pets, not just traditional ones.",
      },
      {
        type: "image-text",
        src: "",
        alt: "Mobile app interface",
        caption: "React Native mobile experience",
        text: "The app maintains the same boarding pass aesthetic with adapted UI patterns for mobile — stamp badges, ticket stubs, and species icons translate beautifully to smaller screens.",
      },
    ],
    links: [
      { label: "Live Website", href: "https://comfy-pets.com" },
      { label: "App Store", href: "#" },
      { label: "Play Store", href: "#" },
    ],
    confidential: 0,
  },
  {
    show: 0,
    slug: "nanami-website",
    image: nanami.src,
    title: "Nanami's Website",
    subtitle: "Personal Portfolio & Blog",
    description:
      "A custom-built personal website with blog functionality and a unique visual identity.",
    category: "product",
    tags: ["Next.js", "Framer Motion", "Contentful"],
    year: "2023",
    featured: false,
    link: "https://nanami-site.vercel.app/",
    number: "05",
    technologies: [
      { category: "Frontend", items: ["Next.js", "React", "Framer Motion", "Tailwind CSS"] },
      { category: "CMS", items: ["Contentful"] },
    ],
    overview:
      "A custom-built personal website for a client, featuring a blog with Contentful CMS integration and a distinctive visual identity. The design emphasizes smooth animations and a cohesive brand experience across all pages.",
    role: [
      "Built the Next.js site with dynamic routing and SSG",
      "Integrated Contentful as a headless CMS for blog content",
      "Designed and implemented custom animations with Framer Motion",
      "Created a unique visual identity with custom CSS and Tailwind",
    ],
    challenges: [
      "Creating a unique visual identity that stands out from template portfolios",
      "Optimizing Contentful content delivery for fast page loads",
    ],
    lessons: [
      "Client projects require balancing creative vision with practical constraints",
      "Headless CMS integration is powerful when the content model is well-designed",
    ],
    gallery: [],
    links: [
      { label: "Live Project", href: "#" },
    ],
    confidential: 0,
  },
  {
    show: 0,
    slug: "slib",
    image: slib.src,
    title: "Slib",
    subtitle: "Minimalist Library Management",
    description:
      "A clean, focused tool for personal library management with smart categorization and search.",
    category: "product",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    year: "2023",
    featured: true,
    link: "https://s-lib.vercel.app/",
    number: "03",
    technologies: [
      { category: "Frontend", items: ["Vue.js", "Pinia", "Tailwind CSS"] },
      { category: "Backend", items: ["Firebase", "Firestore"] },
      { category: "Design", items: ["Figma"] },
    ],
    overview:
      "Slib is a minimalist personal library management tool for book lovers who want to catalog their collection without the bloat of traditional library software. It focuses on the essentials — adding books, organizing by custom categories, and finding anything instantly. The clean interface respects the content, making it a pleasure to browse your own collection.",
    role: [
      "Built the Vue.js frontend with reactive state management",
      "Designed the Firestore data model for books, categories, and metadata",
      "Implemented full-text search with Firestore query optimization",
      "Created the minimalist UI design system with Tailwind",
      "Set up Firebase authentication and cloud sync",
    ],
    challenges: [
      "Designing a data model flexible enough for diverse book metadata while keeping queries fast",
      "Balancing minimalism with discoverability — hiding features without hiding power",
    ],
    lessons: [
      "Minimalism in UI requires maximal clarity in data modeling",
      "Offline-first architecture with Firebase is surprisingly straightforward",
      "The best feature is the one the user never has to think about",
    ],
    gallery: [
      {
        type: "image-text",
        src: "",
        alt: "Slib library view",
        caption: "Clean catalog view with smart categorization",
        text: "The interface strips away everything except what matters: your books, organized your way.",
      },
    ],
    links: [
      { label: "Live Project", href: "#" },
    ],
    confidential: 0,
  },
  {
    show: 0,
    slug: "break-time-bliss",
    image: Demo.src,
    title: "Break Time Bliss",
    subtitle: "Desktop Productivity Tool with Break Reminders",
    description:
      "A Python desktop productivity tool that displays an hourly popup reminder for scheduled breaks. After a 5-minute countdown, a close button appears, and an optional mini Dino Jump-inspired game helps keep users alert during breaks.",
    category: "product",
    tags: ["Python", "Tkinter", "Threading"],
    year: "2024",
    featured: false,
    link: "https://github.com/shreyaDeb/Break-Time-Bliss",
    number: "04",
    technologies: [
      { category: "Frontend", items: ["Tkinter"] },
      { category: "Backend", items: ["Python", "Threading"] },
      { category: "Game Engine", items: ["Tkinter Canvas", "Keyboard Events"] },
    ],
    overview:
      "Break Time Bliss encourages healthy work habits by enforcing short, consistent breaks. The popup only closes after a 5-minute timer finishes, ensuring users rest their eyes and focus. An optional built-in game provides light engagement to refresh the mind before returning to work. Built entirely with Python and Tkinter, the project uses scheduled timers to show a popup window every hour. The popup remains active for five minutes, showing a countdown timer. Once the timer completes, a close button is enabled. During this time, users can play a simple Dino Jump-style game implemented using Tkinter Canvas animations and keyboard events.",
    role: [
      "Developed the complete desktop application using Python and Tkinter",
      "Implemented hourly popup scheduling with timer management",
      "Built the 5-minute countdown system with close button logic",
      "Created the Dino Jump-inspired mini-game with Tkinter Canvas",
      "Designed smooth jump physics and dynamic obstacle spawning",
      "Managed concurrent timers and event loop synchronization",
    ],
    challenges: [
      "Creating smooth animations in Tkinter without external libraries",
      "Managing concurrent timers and keeping the interface responsive",
      "Balancing non-blocking timers with GUI updates in the event loop",
      "Implementing real-time collision detection and game state management",
      "Synchronizing keyboard events with animation frames",
    ],
    lessons: [
      "Learned to manage asynchronous GUI updates and timer scheduling using Tkinter's event loop",
      "Improved understanding of frame-based animations and collision detection",
      "Gained experience with user input handling in GUI environments",
      "Mastered the balance between blocking operations and responsive interfaces",
      "Discovered that simple tools can have significant impact on productivity habits",
    ],
    gallery: [
    ],
    links: [
      { label: "Source Code", href: "https://github.com/yourusername/break-time-bliss" },
      { label: "View Project", href: "#" }, // Add a live demo if available
    ],
    features: [
      "Hourly popup reminder enforcing short breaks",
      "5-minute countdown before enabling the close button",
      "Optional Dino Jump-style mini-game built in Tkinter Canvas",
      "Smooth jump physics and dynamic obstacle spawning",
      "Lightweight and non-intrusive desktop tool",
      "Encourages sustainable productivity and focus",
    ],
    confidential: 0,
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) return undefined;
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex <= 0) return undefined;
  return projects[currentIndex - 1];
}
