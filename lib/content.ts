export type NavLink = {
  label: string;
  href: `#${string}`;
};

export type ProjectHighlight = {
  number: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  href: string;
  label: string;
  featured?: boolean;
};

export type SkillColumn = {
  title: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  "Next.js App Router",
  "TypeScript",
  "Fluent UI",
  "Lottie",
  "Editorial direction",
] as const;

export const aboutBlocks = [
  "I design and build digital experiences with a strong sense of pacing. The work starts with typography, spacing, and narrative structure, then becomes robust through React architecture, TypeScript discipline, and accessible interface systems.",
  "My preferred visual language is reduced, but never cold. I am interested in products that feel deliberate: interfaces with emotional control, motion that supports reading rhythm, and frontend systems that remain maintainable long after launch.",
  "I began through game development, which trained my instinct for atmosphere, interaction loops, and detail. That still shapes how I work today whether I am refining a landing page, building a product surface, or translating a brand into a responsive web presence.",
] as const;

export const projectHighlights: ProjectHighlight[] = [
  {
    number: "01",
    title: "Herbsventure",
    year: "2024",
    description:
      "A hand-crafted indie adventure game built with two friends. I shaped the visual direction, interaction feel, and web presence around the project, balancing playful exploration with clean presentation.",
    stack: ["Unity", "C#", "Level Design", "Brand Web"],
    href: "https://jumina-studios.itch.io/herbsventure",
    label: "Play on itch.io",
    featured: true,
  },
  {
    number: "02",
    title: "Merlin Hose Portfolio",
    year: "2026",
    description:
      "This portfolio system rebuilt as a typography-led single-column experience with Fluent UI for interactions, restrained motion, and a calm light-first theme model.",
    stack: ["Next.js", "TypeScript", "Fluent UI", "Framer Motion"],
    href: "https://github.com/MerlinHose",
    label: "View source",
  },
  {
    number: "03",
    title: "Interface Study: Product Journal",
    year: "2025",
    description:
      "An editorial product concept exploring long-form storytelling, modular commerce sections, and a reading rhythm that avoids standard marketing page formulas.",
    stack: ["React", "Design Systems", "Content Strategy"],
    href: "https://github.com/MerlinHose",
    label: "Project archive",
  },
  {
    number: "04",
    title: "Weather Motion Prototype",
    year: "2025",
    description:
      "A front-end experiment around environmental data, soft transitions, and animated forecast storytelling designed for mobile-first reading and quick scanning.",
    stack: ["TypeScript", "APIs", "Motion Design"],
    href: "https://github.com/MerlinHose",
    label: "Prototype notes",
  },
];

export const skillColumns: SkillColumn[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Accessible HTML"],
  },
  {
    title: "Systems",
    items: ["Fluent UI", "Design tokens", "Component APIs", "Responsive content layouts", "Dark mode strategy"],
  },
  {
    title: "Workflow",
    items: ["GitHub", "VS Code", "Figma", "Vercel", "Prototyping", "Content-first iteration"],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MerlinHose" },
  { label: "LinkedIn", href: "https://linkedin.com/in/merlin-hose" },
  { label: "Email", href: "mailto:hoesl.merlin@gmail.com" },
];