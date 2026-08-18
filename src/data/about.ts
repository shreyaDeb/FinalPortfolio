export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  date: string;
}

export interface PersonalInterest {
  id: string;
  label: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "HomeEase",
    role: "Full-Stack Engineer",
    date: "2024",
    description:
      "Built a smart home management platform with real-time device controls, automation rules, and energy monitoring.",
  },
  {
    company: "Zing Tongue",
    role: "Full-Stack Engineer",
    date: "2024",
    description:
      "Developed an interactive language learning app with gamification and spaced repetition for accelerated fluency.",
  },
  {
    company: "Slib",
    role: "Full-Stack Engineer",
    date: "2023",
    description:
      "Created a minimalist library management tool with smart categorization and full-text search.",
  },
  {
    company: "Online Library",
    role: "Full-Stack Engineer",
    date: "2023",
    description:
      "Built a distraction-free digital reading platform with bookmarking, notes, and reading progress tracking.",
  },
  {
    company: "Nanami's Website",
    role: "Full-Stack Engineer",
    date: "2023",
    description:
      "Developed a custom personal website with blog functionality and a distinctive visual identity for a client.",
  },
];

export const education: Education = {
  institution: "Bachelor of Technology",
  degree: "B.Tech",
  field: "Computer Science and Engineering",
  date: "2019 — 2023",
};

export const personalInterests: PersonalInterest[] = [
  {
    id: "photography",
    label: "Photography",
    description: "Capturing moments and exploring composition through the lens.",
  },
  {
    id: "reading",
    label: "Reading",
    description: "Fiction, non-fiction, and everything in between.",
  },
  {
    id: "digital-art",
    label: "Digital Art",
    description: "Experimenting with colors, shapes, and digital canvases.",
  },
  {
    id: "nature",
    label: "Nature",
    description: "Finding inspiration and calm outdoors.",
  },
  {
    id: "crochet",
    label: "Crochet",
    description: "Creating something tangible with yarn and patience.",
  },
  {
    id: "anime",
    label: "Anime",
    description: "Stories that move, inspire, and make you think.",
  },
];
