"use client";

import { Button } from "@fluentui/react-components";
import { motion } from "framer-motion";
import { LottieAccent } from "@/components/ui/LottieAccent";
import { projectHighlights } from "@/lib/content";
import projectAccent from "@/lib/lottie/project-accent.json";
import { cn } from "@/lib/utils";

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projectHighlights)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <article
        className={cn(
          "project-entry",
          project.featured ? "pb-18 md:pb-24" : "pb-12 md:pb-14"
        )}
      >
        {project.featured ? (
          <LottieAccent
            animationData={projectAccent}
            delay={0.12}
            className="lottie-cloud hidden h-32 w-48 md:block"
          />
        ) : null}

        <p className="text-[0.78rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          {project.number} / {project.year}
        </p>

        <h3
          className={cn(
            "balanced-text mt-4 max-w-[12ch] text-[var(--ink)]",
            project.featured
              ? "text-[clamp(4.2rem,9.2vw,7.9rem)] leading-[0.86]"
              : "text-[clamp(2.45rem,5.2vw,4.4rem)] leading-[0.92]"
          )}
        >
          {project.title}
        </h3>

        <p className={cn("editorial-copy mt-5", project.featured && "md:ml-[12%]")}>
          {project.description}
        </p>

        <div className={cn("project-stack mt-5", project.featured && "md:ml-[12%]")}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className={cn("mt-6", project.featured && "md:ml-[12%]")}>
          <Button
            as="a"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            appearance={project.featured ? "primary" : "secondary"}
          >
            {project.label}
          </Button>
        </div>
      </article>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-anchor-offset">
      <div className="max-w-[78rem]">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-kicker"
        >
          02 / Projects
        </motion.p>
        <div className="section-rule" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.82, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading balanced-text mt-8 text-[var(--ink)]"
        >
          Selected work, arranged as a deliberate vertical read.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="editorial-copy mt-8 max-w-[42rem] md:ml-[12%]"
        >
          No cards, no dashboard framing. Each project holds its own space,
          numbered and paced like an editorial feature instead of a SaaS grid.
        </motion.p>

        <div className="mt-14 md:mt-20">
          <div className="project-divider" />
          {projectHighlights.map((project, i) => (
            <div key={project.number}>
              <ProjectRow project={project} index={i} />
              <div className="project-divider" />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:ml-[12%]"
        >
          <Button
            as="a"
            href="https://github.com/MerlinHose"
            target="_blank"
            rel="noopener noreferrer"
            appearance="subtle"
          >
            More work on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
