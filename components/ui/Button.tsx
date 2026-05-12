"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
export type ButtonSize    = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  /** Left-side icon */
  leftIcon?: React.ReactNode;
  /** Right-side icon */
  rightIcon?: React.ReactNode;
  /** Full-width */
  fullWidth?: boolean;
  children?: React.ReactNode;
}

// ── Variant styles ────────────────────────────────────────

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "relative overflow-hidden",
    "bg-gradient-to-r from-cyan-500 to-blue-600",
    "text-white font-semibold",
    "border border-transparent",
    "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    "hover:shadow-[0_0_32px_rgba(6,182,212,0.5),0_0_12px_rgba(6,182,212,0.3)]",
    "hover:from-cyan-400 hover:to-blue-500",
    "active:scale-[0.97]",
    "transition-all duration-200",
  ].join(" "),

  secondary: [
    "glass",
    "text-[hsl(var(--foreground))] font-medium",
    "border border-[var(--glass-border)]",
    "hover:border-cyan-500/40",
    "hover:bg-[hsl(var(--surface-raised))]",
    "hover:shadow-[0_0_16px_rgba(6,182,212,0.15)]",
    "transition-all duration-200",
  ].join(" "),

  ghost: [
    "bg-transparent",
    "text-[hsl(var(--muted))] font-medium",
    "border border-transparent",
    "hover:bg-[hsl(var(--surface))]",
    "hover:text-[hsl(var(--foreground))]",
    "hover:border-[hsl(var(--border))]",
    "transition-all duration-200",
  ].join(" "),

  outline: [
    "bg-transparent",
    "text-cyan-500 font-semibold",
    "border border-cyan-500/50",
    "hover:bg-cyan-500/10",
    "hover:border-cyan-400",
    "hover:shadow-[0_0_16px_rgba(6,182,212,0.2)]",
    "transition-all duration-200",
  ].join(" "),

  danger: [
    "bg-gradient-to-r from-rose-600 to-red-600",
    "text-white font-semibold",
    "border border-transparent",
    "hover:from-rose-500 hover:to-red-500",
    "hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]",
    "transition-all duration-200",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:   "h-8  px-3    text-xs  rounded-lg  gap-1.5",
  md:   "h-10 px-5    text-sm  rounded-xl  gap-2",
  lg:   "h-12 px-7    text-base rounded-xl gap-2.5 tracking-wide",
  icon: "h-10 w-10    text-sm  rounded-xl  justify-center",
};

// ── Spinner ───────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        whileHover={isDisabled ? {} : { y: -1 }}
        whileTap={isDisabled ? {} : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={cn(
          // Base
          "inline-flex items-center font-medium select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          fullWidth && "w-full justify-center",
          // Variant & Size
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {/* Primary shimmer overlay */}
        {variant === "primary" && !isDisabled && (
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]"
          >
            <span className="absolute -top-1 -left-full w-1/2 h-[200%] rotate-12 bg-white/10 transition-[left] duration-500 ease-out group-hover:left-[150%]" />
          </span>
        )}

        {loading ? <Spinner /> : leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
