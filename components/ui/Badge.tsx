import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────

export type BadgeVariant = "default" | "cyan" | "blue" | "indigo" | "green" | "amber" | "rose" | "ghost";
export type BadgeSize    = "sm" | "md" | "lg";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Optional left icon */
  icon?: React.ReactNode;
  /** Adds a subtle dot indicator */
  dot?: boolean;
  className?: string;
}

// ── Styles ────────────────────────────────────────────────

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[hsl(var(--surface-raised))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]",
  cyan:    "bg-cyan-500/10  text-cyan-500   border border-cyan-500/25   dark:bg-cyan-500/[0.12]",
  blue:    "bg-blue-500/10  text-blue-500   border border-blue-500/25   dark:bg-blue-500/[0.12]",
  indigo:  "bg-indigo-500/10 text-indigo-500 border border-indigo-500/25 dark:bg-indigo-500/[0.12]",
  green:   "bg-emerald-500/10 text-emerald-500 border border-emerald-500/25",
  amber:   "bg-amber-500/10 text-amber-500  border border-amber-500/25",
  rose:    "bg-rose-500/10  text-rose-500   border border-rose-500/25",
  ghost:   "bg-transparent  text-[hsl(var(--muted))] border border-[hsl(var(--border-subtle))]",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2    py-0.5 text-[10px] rounded-md   gap-1",
  md: "px-2.5 py-1   text-xs     rounded-lg   gap-1.5",
  lg: "px-3   py-1.5 text-sm     rounded-xl   gap-2",
};

const dotColors: Record<BadgeVariant, string> = {
  default: "bg-[hsl(var(--muted))]",
  cyan:    "bg-cyan-500",
  blue:    "bg-blue-500",
  indigo:  "bg-indigo-500",
  green:   "bg-emerald-500",
  amber:   "bg-amber-500",
  rose:    "bg-rose-500",
  ghost:   "bg-[hsl(var(--muted))]",
};

// ── Component ─────────────────────────────────────────────

export function Badge({
  children,
  variant = "default",
  size = "md",
  icon,
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium shrink-0",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0 animate-pulse-slow",
            dotColors[variant]
          )}
        />
      )}
      {icon && <span className="shrink-0 opacity-80">{icon}</span>}
      {children}
    </span>
  );
}

// ── TechBadge — specialized for tech stack display ───────

const techVariants: Record<string, BadgeVariant> = {
  "next.js":       "default",
  nextjs:          "default",
  react:           "cyan",
  typescript:      "blue",
  "tailwind css":  "cyan",
  tailwind:        "cyan",
  "framer motion": "indigo",
  "node.js":       "green",
  nodejs:          "green",
  github:          "ghost",
  unity:           "ghost",
  "c#":            "indigo",
  "game design":   "amber",
  "ui/ux":         "rose",
  apis:            "blue",
};

interface TechBadgeProps {
  tech: string;
  icon?: React.ReactNode;
  className?: string;
}

export function TechBadge({ tech, icon, className }: TechBadgeProps) {
  const variant = techVariants[tech.toLowerCase()] ?? "default";
  return (
    <Badge variant={variant} size="md" icon={icon} className={className}>
      {tech}
    </Badge>
  );
}
