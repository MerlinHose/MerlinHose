export type Language = "de" | "en";

export const translations = {
  de: {
    // Hero Section
    hero: {
      name: "Milan Hösl",
      title: "FULL-STACK DEVELOPER",
      subtitle: "Ich entwickle moderne Web-Anwendungen mit Leidenschaft für sauberen Code und hoher User Experience.",
      cta: "Mehr über mich entdecken",
    },
    // Stats Section
    stats: {
      label: "STATISTIKEN",
      projects: "15+ Projekte",
      projectsDesc: "Erfolgreich abgeschlossen",
      tech: "5+ Technologien",
      techDesc: "Ständig lernen und wachsen",
      focus: "100% Fokus",
      focusDesc: "Qualität an erster Stelle",
      learning: "Immer lernbereit",
      learningDesc: "Neue Technologien erforschen",
    },
    // Skills Section
    skills: {
      label: "FÄHIGKEITEN",
      cleanCode: "Clean Code",
      cleanCodeDesc: "Wartbare, strukturierte Lösungen mit Fokus auf Best Practices und Performance.",
      ux: "User Experience",
      uxDesc: "Intuitive Interfaces mit Attention to Detail für optimal Benutzerinteraktion.",
      fullStack: "Full-Stack",
      fullStackDesc: "Frontend bis Backend – komplette Entwicklung vom Konzept bis Produktion.",
    },
    // Process Section
    process: {
      label: "PROZESS",
      step1: "Frontend Development",
      step2: "Backend Architecture",
      step3: "Database Design",
    },
    // Projects Section
    projects: {
      label: "PROJEKTE",
      viewProject: "Projekt ansehen",
      moreInfo: "Mehr Info",
      wip: "IN ARBEIT",
    },
    // Contact Section
    contact: {
      label: "KONTAKT",
      subtitle: "Ich freue mich auf neue Projekte und die Zusammenarbeit mit dir. Schreib mir eine Nachricht!",
      placeholder: "deine.email@example.de",
      button: "Kontakt",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      email: "Email",
    },
    // Navigation
    nav: {
      language: "Sprache",
    },
  },
  en: {
    // Hero Section
    hero: {
      name: "Milan Hösl",
      title: "FULL-STACK DEVELOPER",
      subtitle: "I develop modern web applications with a passion for clean code and outstanding user experience.",
      cta: "Learn more about me",
    },
    // Stats Section
    stats: {
      label: "STATISTICS",
      projects: "15+ Projects",
      projectsDesc: "Successfully completed",
      tech: "5+ Technologies",
      techDesc: "Constantly learning and growing",
      focus: "100% Focus",
      focusDesc: "Quality comes first",
      learning: "Always Learning",
      learningDesc: "Exploring new technologies",
    },
    // Skills Section
    skills: {
      label: "SKILLS",
      cleanCode: "Clean Code",
      cleanCodeDesc: "Maintainable, well-structured solutions with focus on best practices and performance.",
      ux: "User Experience",
      uxDesc: "Intuitive interfaces with attention to detail for optimal user interaction.",
      fullStack: "Full-Stack",
      fullStackDesc: "Frontend to backend – complete development from concept to production.",
    },
    // Process Section
    process: {
      label: "PROCESS",
      step1: "Frontend Development",
      step2: "Backend Architecture",
      step3: "Database Design",
    },
    // Projects Section
    projects: {
      label: "PROJECTS",
      viewProject: "View Project",
      moreInfo: "More Info",
      wip: "WORK IN PROGRESS",
    },
    // Contact Section
    contact: {
      label: "CONTACT",
      subtitle: "I look forward to new projects and collaborating with you. Send me a message!",
      placeholder: "your.email@example.com",
      button: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      email: "Email",
    },
    // Navigation
    nav: {
      language: "Language",
    },
  },
};

export const getTranslations = (lang: Language) => translations[lang];
