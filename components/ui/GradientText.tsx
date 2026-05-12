import { cn } from "@/lib/utils";

// ── GradientText ──────────────────────────────────────────

export type GradientPreset =
  | "cyan-blue"
  | "blue-indigo"
  | "cyan-indigo"
  | "hot"
  | "cool";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  preset?: GradientPreset;
  /** Custom gradient (overrides preset) */
  gradient?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

const presets: Record<GradientPreset, string> = {
  "cyan-blue":   "from-cyan-400 via-cyan-500  to-blue-600",
  "blue-indigo": "from-blue-400 via-blue-500  to-indigo-600",
  "cyan-indigo": "from-cyan-400 via-blue-500  to-indigo-500",
  hot:           "from-rose-400 via-orange-400 to-yellow-400",
  cool:          "from-teal-400 via-cyan-400   to-sky-500",
};

export function GradientText({
  children,
  className,
  preset = "cyan-blue",
  gradient,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradient ?? presets[preset],
        className
      )}
    >
      {children}
    </Tag>
  );
}

// ── GlowText — text with a soft neon halo ─────────────────

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  color?: "cyan" | "blue" | "indigo";
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

const glowColors = {
  cyan:   "drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]",
  blue:   "drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]",
  indigo: "drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]",
} as const;

export function GlowText({
  children,
  className,
  color = "cyan",
  as: Tag = "span",
}: GlowTextProps) {
  return (
    <Tag className={cn(glowColors[color], className)}>{children}</Tag>
  );
}
