"use client";

import { motion } from "framer-motion";
import { skillColumns } from "@/lib/content";

function SkillGroup({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="skills-column"
    >
      <p className="text-[0.78rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
        {title}
      </p>
      <p className="skills-list">
        {items.join(" · ")}
      </p>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-anchor-offset">
      <div className="max-w-[72rem]">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-kicker"
        >
          03 / Skills
        </motion.p>
        <div className="section-rule" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.82, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading balanced-text mt-8 text-[var(--ink)]"
        >
          Tools, systems, and frontend habits kept close.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="editorial-copy mt-8 max-w-[40rem] md:ml-[10%]"
        >
          Presented as text first. The point is clarity and fit, not decorative
          badge systems or noisy skill clouds.
        </motion.p>

        <div className="skills-grid mt-14 md:mt-18">
          {skillColumns.map((group, i) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              items={[...group.items]}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
