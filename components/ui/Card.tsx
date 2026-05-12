"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────

export type CardVariant = "glass" | "solid" | "outline" | "elevated";

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
  /** Enable lift + glow on hover (default: true) */
  interactive?: boolean;
  /** Optional cyan accent glow on hover */
  glow?: boolean;
  /** Padding size */
  padding?: "none" | "sm" | "md" | "lg";
}

// ── Styles ────────────────────────────────────────────────

const variantStyles: Record<CardVariant, string> = {
  glass: [
    "glass",                                  // from globals.css
    "border border-[var(--glass-border)]",
  ].join(" "),

  solid: [
    "bg-[hsl(var(--surface))]",
    "border border-[hsl(var(--border))]",
  ].join(" "),

  outline: [
    "bg-transparent",
    "border border-[hsl(var(--border))]",
    "hover:border-cyan-500/40",
  ].join(" "),

  elevated: [
    "bg-[hsl(var(--surface-raised))]",
    "border border-[hsl(var(--border-subtle))]",
    "shadow-[0_2px_12px_rgba(0,0,0,0.08)]",
  ].join(" "),
};

const paddingStyles = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

// ── Component ─────────────────────────────────────────────

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "glass",
      interactive = true,
      glow = false,
      padding = "md",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          interactive
            ? {
                y: -4,
                boxShadow: glow
                  ? "0 20px 48px rgba(0,0,0,0.18), 0 0 32px rgba(6,182,212,0.18)"
                  : "0 20px 48px rgba(0,0,0,0.14)",
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={cn(
          "rounded-2xl overflow-hidden",
          "transition-colors duration-200",
          variantStyles[variant],
          paddingStyles[padding],
          interactive && "cursor-default",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// ── Card sub-components ───────────────────────────────────

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5 mb-4", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-tight tracking-tight",
        "text-[hsl(var(--foreground))]",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-[hsl(var(--muted))] leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 mt-4 pt-4 border-t border-[hsl(var(--border-subtle))]", className)}>
      {children}
    </div>
  );
}
