"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ── SectionHeading ────────────────────────────────────────

interface SectionHeadingProps {
  /** Small label above the title (e.g. "01 — About") */
  eyebrow?: string;
  title: string | React.ReactNode;
  /** Part of the title rendered with gradient */
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Animate on scroll (uses Framer Motion viewport) */
  animate?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
  animate = true,
}: SectionHeadingProps) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        variants: staggerContainer,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  const ItemWrapper = animate ? motion.div : "div";
  const itemProps = animate ? { variants: fadeInUp } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <ItemWrapper {...itemProps}>
          <span className="inline-flex items-center text-[11px] font-mono font-medium tracking-[0.24em] uppercase text-[hsl(var(--muted))]">
            {eyebrow}
          </span>
        </ItemWrapper>
      )}

      <ItemWrapper {...itemProps}>
        <h2 className="text-[2.25rem] sm:text-[2.9rem] md:text-[3.75rem] font-bold leading-[0.96] tracking-[-0.04em] text-[hsl(var(--foreground))]">
          {typeof title === "string" && highlight ? (
            <>
              {title.split(highlight).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-[hsl(var(--accent-cyan))]">{highlight}</span>
                  )}
                </span>
              ))}
            </>
          ) : (
            title
          )}
        </h2>
      </ItemWrapper>

      {description && (
        <ItemWrapper {...itemProps}>
          <p
            className={cn(
              "text-base sm:text-lg text-[hsl(var(--muted))] leading-[1.8]",
              align === "center" ? "max-w-2xl" : "max-w-[36rem]"
            )}
          >
            {description}
          </p>
        </ItemWrapper>
      )}
    </Wrapper>
  );
}

// ── StatCard — animated number stat ──────────────────────

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "flex flex-col gap-1 p-5 rounded-2xl",
        "glass border border-[var(--glass-border)]",
        "text-center",
        className
      )}
    >
      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {value}
      </span>
      <span className="text-sm font-semibold text-[hsl(var(--foreground))]">{label}</span>
      {description && (
        <span className="text-xs text-[hsl(var(--muted))]">{description}</span>
      )}
    </motion.div>
  );
}
