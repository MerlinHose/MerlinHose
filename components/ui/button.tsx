import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "h-12 bg-gradient-to-r from-accent to-accent-secondary px-6 text-accent-foreground shadow-sm hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] active:scale-[0.98]",
        secondary:
          "h-12 border border-border bg-transparent px-6 text-foreground hover:-translate-y-0.5 hover:border-accent/30 hover:bg-muted",
        ghost: "h-10 px-4 text-muted-foreground hover:text-foreground",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
