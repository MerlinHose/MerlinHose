"use client";

import {
  ArrowRight,
  CircleArrowRight,
  Layers,
  LineChart,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { InteractiveHeroObject } from "@/components/hero/interactive-hero-object";
import { FloatingShapes } from "@/components/svg/floating-shapes";
import { BlobAnimation } from "@/components/svg/blob-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionLabel } from "@/components/ui/section-label";

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const tiers = [
  {
    name: "Admin Dashboard",
    price: "2024",
    highlight: false,
    items: ["React", "TypeScript", "Recharts", "Node.js", "PostgreSQL"],
    description: {
      de: "Web-basiertes Verwaltungs-Dashboard mit Live-Daten und interaktiven Charts.",
      en: "Web-based administration dashboard with live data and interactive charts.",
    },
    link: "https://github.com/MerlinHose",
  },
  {
    name: "Herbsventure",
    price: "2024",
    highlight: true,
    items: ["Game Development", "Unity", "C#", "Itch.io"],
    description: {
      de: "2D Abenteuer-Spiel mit Puzzle-Elementen. Spielbar auf itch.io.",
      en: "2D adventure game with puzzle elements. Playable on itch.io.",
    },
    link: "https://jumina-studios.itch.io/herbsventure",
  },
  {
    name: "E-Commerce Store",
    price: "2023",
    highlight: false,
    items: ["Next.js", "Stripe", "TypeScript", "Tailwind", "PostgreSQL"],
    description: {
      de: "Vollstandiger Online-Shop mit Zahlungsabwicklung und Bestandsverwaltung.",
      en: "Full online store with payment flow and inventory management.",
    },
    link: "https://github.com/MerlinHose",
  },
];

export default function Home() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [contactEmail, setContactEmail] = useState("");

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(language === "de" ? "Portfolio Anfrage" : "Portfolio inquiry");
    const body = encodeURIComponent(
      `${language === "de" ? "Kontakt" : "Contact"}: ${contactEmail}\n\n${language === "de" ? "Hallo Milan," : "Hi Milan,"}`,
    );
    window.location.href = `mailto:milanhosl@gmail.com?subject=${subject}&body=${body}`;
  };

  const features = [
    {
      title: t.skills.cleanCode,
      text: t.skills.cleanCodeDesc,
      icon: Layers,
    },
    {
      title: t.skills.ux,
      text: t.skills.uxDesc,
      icon: Sparkles,
    },
    {
      title: t.skills.fullStack,
      text: t.skills.fullStackDesc,
      icon: LineChart,
    },
  ];

  const steps = [t.process.step1, t.process.step2, t.process.step3];

  const stats = [
    {
      number: t.stats.projects.split(" ")[0],
      label: t.stats.projectsDesc,
    },
    {
      number: t.stats.tech.split(" ")[0],
      label: t.stats.techDesc,
    },
    {
      number: t.stats.focus.split(" ")[0],
      label: t.stats.focusDesc,
    },
    {
      number: "",
      label: t.stats.learningDesc,
    },
  ];

  return (
    <main className="relative overflow-x-hidden bg-white text-foreground">
      <section className="relative bg-white px-6 py-28 md:py-36 lg:py-44">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,82,255,0.1),transparent_50%)]" />
        <div className="overlay pointer-events-none absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={fadeInUp}>
              <SectionLabel>{t.hero.title}</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-[2.75rem] leading-[1.05] tracking-[-0.02em] text-foreground md:text-6xl lg:text-[5.25rem]"
            >
              Milan
              <span className="relative ml-3 inline-block rounded-lg px-2 py-1">
                <span className="gradient-text">Hösl</span>
                <span className="absolute -bottom-1 left-0 h-3 w-full rounded-sm bg-gradient-to-r from-accent/20 to-accent-secondary/10 md:-bottom-2 md:h-4" />
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group w-full sm:w-auto">
                {t.hero.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                {t.contact.label}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative hidden md:block"
          >
            <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-accent/12 blur-[80px]" />
            <Card className="relative min-h-[460px] overflow-hidden rounded-[2rem] border-border/70 p-8 shadow-[0_20px_25px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <div className="h-80 w-80">
                  <InteractiveHeroObject />
                </div>
              </div>

              <Card className="animate-float-y absolute right-3 top-3 z-10 w-36 border-slate-200/75 bg-white/66 text-slate-900 shadow-[0_10px_20px_rgba(15,23,42,0.1)] backdrop-blur-md">
                <CardContent className="space-y-1.5 p-2.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{language === "de" ? "Erfahrung" : "Experience"}</p>
                  <p className="text-base font-semibold tracking-tight text-slate-900">5+ {language === "de" ? "Jahre" : "Years"}</p>
                </CardContent>
              </Card>

              <Card className="animate-float-y-fast absolute bottom-3 left-3 z-10 w-36 border-slate-200/75 bg-white/66 text-slate-900 shadow-[0_10px_20px_rgba(15,23,42,0.1)] backdrop-blur-md">
                <CardContent className="space-y-1.5 p-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                    {language === "de" ? "Ausbildung" : "Apprenticeship"}
                  </div>
                  <p className="text-xs font-medium leading-relaxed text-slate-800">2026</p>
                </CardContent>
              </Card>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-28 text-foreground md:py-36">
        <div className="dot-pattern absolute inset-0 opacity-80" />
        <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/8 blur-[140px]" />
        <motion.div
          className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="border-l border-border pl-5 first:border-l-0 first:pl-0">
              {stat.number && <p className="text-2xl font-semibold tracking-tight md:text-3xl">{stat.number}</p>}
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-28 md:py-36">
        <FloatingShapes />
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionLabel className="mb-6">{t.skills.label}</SectionLabel>
            <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-[3.25rem]">
              {language === "de" 
                ? "Spezialisiert auf moderne Full-Stack Development" 
                : "Specialized in modern Full-Stack Development"}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={feature.title} className={index === 0 ? "lg:col-span-2" : ""}>
                  <CardContent className="relative p-8">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-accent to-accent-secondary p-3 text-white shadow-[0_4px_14px_rgba(0,82,255,0.25)]">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{feature.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{feature.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-28 md:py-36">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/10 blur-[120px] -z-10" />
        <div className="absolute -left-20 bottom-10 h-96 w-96 rounded-full bg-accent/8 blur-[140px] -z-10" />
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionLabel className="mb-6">{t.process.label}</SectionLabel>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, idx) => (
                <Card key={step} className="relative">
                  <CardContent className="space-y-4 p-8">
                    <p className="font-display text-4xl text-accent">0{idx + 1}</p>
                    <p className="text-muted-foreground">{step}</p>
                    {idx < steps.length - 1 ? (
                      <span className="hidden md:flex absolute -right-6 top-1/2 h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <CircleArrowRight className="h-4 w-4" />
                      </span>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 pb-28 md:pb-36">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-accent/15 to-accent-secondary/10 blur-[120px] -z-10" />
        <div className="absolute right-20 top-0 h-96 w-96">
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <BlobAnimation />
          </div>
        </div>
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionLabel className="mb-6">{t.projects.label}</SectionLabel>
            <h2 className="mb-16 max-w-3xl font-display text-4xl leading-tight md:text-[3.25rem]">
              {language === "de" 
                ? "Ausgewählte Arbeiten & Experimente" 
                : "Selected Works & Experiments"}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((project) => {
                if (project.highlight) {
                  return (
                    <div
                      key={project.name}
                      className="rounded-2xl bg-gradient-to-br from-accent via-accent-secondary to-accent p-[2px] md:-translate-y-4"
                    >
                      <Card className="h-full border-none bg-card flex flex-col">
                        <CardContent className="space-y-4 flex-1 p-8">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{project.name}</p>
                              <p className="mt-2 text-sm text-muted-foreground/70">{project.price}</p>
                            </div>
                          </div>
                          <p className="text-base text-foreground leading-relaxed">{project.description[language]}</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.items.map((tech) => (
                              <span
                                key={tech}
                                className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Button className="w-full mt-4" onClick={() => (window.location.href = project.link)}>
                            {t.projects.viewProject}
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  );
                }

                return (
                  <Card key={project.name} className="flex flex-col">
                    <CardContent className="space-y-4 flex-1 p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{project.name}</p>
                          <p className="mt-2 text-sm text-muted-foreground/70">{project.price}</p>
                        </div>
                      </div>
                      <p className="text-base text-foreground leading-relaxed">{project.description[language]}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.items.map((tech) => (
                          <span key={tech} className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button variant="secondary" className="w-full mt-4" onClick={() => (window.location.href = project.link)}>
                        {t.projects.moreInfo}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-24">
              <h3 className="font-display text-2xl font-semibold mb-10">{t.projects.wip}</h3>
              <div className="space-y-4 pl-4 border-l border-accent/30">
                {[
                  { name: language === "de" ? "Real-time Collaboration Tool" : "Real-time Collaboration Tool", year: "2025" },
                  { name: language === "de" ? "AI-powered Code Assistant" : "AI-powered Code Assistant", year: "2025" },
                  { name: language === "de" ? "Mobile App Projekt" : "Mobile App Project", year: "2024-2025" },
                ].map((item) => (
                  <div key={item.name} className="relative pl-6 pb-6">
                    <div className="absolute -left-3 top-2 h-4 w-4 rounded-full bg-accent ring-2 ring-background" />
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-28 text-foreground md:py-36">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-[150px]" />
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="mb-6">{t.contact.label}</SectionLabel>
          <h2 className="font-display text-4xl leading-tight md:text-[3.25rem]">
            {language === "de" 
              ? "Lass uns zusammen etwas Großartiges bauen" 
              : "Let's build something great together"}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            {t.contact.subtitle}
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row" onSubmit={handleContactSubmit}>
            <Input
              className="h-14 border-white/20 bg-white text-foreground sm:flex-1"
              placeholder={t.contact.placeholder}
              aria-label="Email address"
              type="email"
              name="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              required
            />
            <Button size="lg" className="h-14 w-full sm:w-auto" type="submit">
              <WandSparkles className="h-4 w-4" />
              {t.contact.button}
            </Button>
          </form>
          
          <div className="mx-auto mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/MerlinHose" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{t.contact.github}</a>
            <a href="mailto:milanhosl@gmail.com" className="hover:text-accent transition-colors">{t.contact.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
