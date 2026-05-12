"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--rule)] px-[clamp(1.25rem,4vw,3rem)] py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-[90rem] flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <p className="text-[0.78rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          Merlin Hose / {year}
        </p>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.82rem] text-[var(--ink-faint)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </footer>
  );
}
