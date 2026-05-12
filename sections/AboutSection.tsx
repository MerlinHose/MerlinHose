"use client";

import { Button } from "@fluentui/react-components";
import { motion } from "framer-motion";
import { aboutBlocks } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-anchor-offset">
      <div className="max-w-[70rem]">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-kicker"
        >
          01 / About
        </motion.p>
        <div className="section-rule" />

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.85, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading section-heading-wide balanced-text mt-8 text-[var(--ink)]"
        >
          Built through curiosity, refined through restraint.
        </motion.h2>

        <div className="mt-14 space-y-9 md:mt-18 md:space-y-12">
          {aboutBlocks.map((block, index) => (
            <motion.p
              key={block}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={index === 1 ? "editorial-copy md:ml-[14%]" : "editorial-copy"}
            >
              {block}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <p className="muted-label">Bavaria / Born 2005 / Self-taught</p>
            <Button as="a" href="https://github.com/MerlinHose" appearance="subtle">
              GitHub archive
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
