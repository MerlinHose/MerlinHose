import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: string;
  pulse?: boolean;
  className?: string;
};

export function SectionLabel({ children, pulse = true, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2",
        className,
      )}
    >
      <span className={cn("h-2 w-2 rounded-full bg-accent", pulse && "animate-pulse-dot")} />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{children}</span>
    </div>
  );
}
