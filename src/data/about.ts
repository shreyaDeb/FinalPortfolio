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
    company: "Xilligence",
    role: "Junior Software Engineer / Full-Stack Developer",
    date: "2024 – 2026",
    description:
      "Build and maintain full-stack web applications using modern frontend and backend technologies, with a focus on AI-powered features, APIs, and production-ready software.",
  },

  {
    company: "Thoughts Circuit LLC",
    role: "Software Engineer Trainee",
    date: "2024",
    description:
      "Worked on full-stack software development, building web applications and backend services while gaining hands-on experience with modern development workflows and APIs.",
  },

  {
    company: "Softworld Technology LLC",
    role: "Software Engineer Trainee",
    date: "2023 – 2024",
    description:
      "Developed and supported web applications while working with Python, Django, REST APIs, databases, and full-stack development practices.",
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
