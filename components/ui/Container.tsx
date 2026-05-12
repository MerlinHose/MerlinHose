import { cn } from "@/lib/utils";

// ── Container ─────────────────────────────────────────────

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Constrain max width. Default: "default" (1200px) */
  size?: "sm" | "default" | "lg" | "full";
}

const containerSizes = {
  sm:      "max-w-3xl",
  default: "max-w-6xl",
  lg:      "max-w-7xl",
  full:    "max-w-none",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        "px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

// ── Section ───────────────────────────────────────────────

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Adds default top/bottom padding */
  padded?: boolean;
  /** Adds animated dot-grid background */
  dotGrid?: boolean;
  /** Adds subtle radial gradient overlay */
  withGlow?: boolean;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className,
  id,
  padded = true,
  dotGrid = false,
  withGlow = false,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        padded && "py-24 md:py-36",
        dotGrid && "bg-dot-grid",
        className
      )}
    >
      {withGlow && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        />
      )}
      {children}
    </Tag>
  );
}

// ── Divider ───────────────────────────────────────────────

export function GlowDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-full h-px",
        "bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent",
        className
      )}
    />
  );
}
