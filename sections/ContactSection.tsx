"use client";

import {
  Button,
  Field,
  Input,
  Link,
  Textarea,
} from "@fluentui/react-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { socialLinks } from "@/lib/content";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a new contact"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || ""}`,
        `Email: ${email || ""}`,
        "",
        message || "",
      ].join("\n")
    );

    window.location.href = `mailto:hoesl.merlin@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell section-anchor-offset pb-28 md:pb-36">
      <div className="max-w-[78rem]">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-kicker"
        >
          04 / Contact
        </motion.p>
        <div className="section-rule" />

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.85, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading balanced-text mt-8 text-[var(--ink)]"
        >
          Open for thoughtful digital work.
        </motion.h2>

        <div className="contact-grid mt-12 md:mt-14 md:ml-[12%]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="editorial-copy max-w-[33rem]">
              I am open to selected freelance projects, collaborations, and
              carefully matched in-house roles where design sensitivity and
              frontend precision are both expected.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <Field label="Name" className="portfolio-form-field">
                <Input value={name} onChange={(_, data) => setName(data.value)} placeholder="Your name" />
              </Field>

              <Field label="Email" className="portfolio-form-field">
                <Input
                  type="email"
                  value={email}
                  onChange={(_, data) => setEmail(data.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Message" className="portfolio-form-field">
                <Textarea
                  value={message}
                  onChange={(_, data) => setMessage(data.value)}
                  placeholder="Tell me about the project, role, or collaboration."
                  resize="vertical"
                  rows={6}
                />
              </Field>

              <div className="flex flex-wrap items-center gap-3">
                <Button appearance="primary" type="submit">
                  Start conversation
                </Button>
                <Button as="a" href="mailto:hoesl.merlin@gmail.com" appearance="secondary">
                  Email directly
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[1.75rem] p-6 md:p-7"
          >
            <p className="section-kicker">Direct channels</p>
            <Link href="mailto:hoesl.merlin@gmail.com" className="mt-5 inline-block text-[1.05rem] text-[var(--ink)]">
              hoesl.merlin@gmail.com
            </Link>
            <div className="project-divider my-6" />
            <p className="muted-label">Elsewhere</p>
            <div className="mt-4 flex flex-col items-start gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[var(--ink-soft)]"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
