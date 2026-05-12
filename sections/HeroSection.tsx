"use client";

import { Button } from "@fluentui/react-components";
import { motion } from "framer-motion";
import { LottieAccent } from "@/components/ui/LottieAccent";
import { heroHighlights } from "@/lib/content";
import heroAccent from "@/lib/lottie/hero-accent.json";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section-shell section-anchor-offset flex min-h-[100svh] items-end pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full pb-12 pt-24 md:pb-24 md:pt-36"
      >
        <LottieAccent
          animationData={heroAccent}
          delay={0.24}
          className="absolute right-[-4rem] top-[8rem] hidden h-[22rem] w-[22rem] opacity-50 md:block"
        />

        <div className="hero-grid max-w-[88rem]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="section-kicker"
            >
              Issue No. 01 / Bavaria / Available for selected work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="balanced-text mt-8 max-w-[9ch] text-[clamp(5.6rem,15vw,13.5rem)] leading-[0.83] tracking-[-0.07em] text-[var(--ink)]"
            >
              Merlin
              <br />
              Hose
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-[46rem] md:ml-[14%]"
            >
              <p className="page-intro balanced-text">
                Frontend developer building calm, high-detail interfaces where
                editorial pacing, strong systems, and subtle motion work as one.
              </p>

              <div className="mt-9 flex flex-wrap gap-3 md:mt-12">
                <Button as="a" href="#projects" appearance="primary" size="large">
                  View projects
                </Button>
                <Button as="a" href="#contact" appearance="secondary" size="large">
                  Contact
                </Button>
              </div>

              <p className="muted-label mt-10 max-w-[34rem]">
                {heroHighlights.join(" / ")}
              </p>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8"
          >
            <p className="section-kicker">Current focus</p>
            <p className="mt-5 text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.2] text-[var(--ink)]">
              Design-sensitive frontend work with Microsoft Fluent as the
              functional layer, not the visual default.
            </p>
            <p className="editorial-copy mt-5 text-[1rem]">
              Light mode comes first. Motion stays quiet. Controls remain
              accessible and familiar.
            </p>
            <div className="project-divider my-6" />
            <p className="muted-label">Based in Bavaria, Germany</p>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Available for selected freelance work, product collaborations, and
              thoughtful in-house opportunities.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
