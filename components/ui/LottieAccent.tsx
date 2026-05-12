"use client";

import Lottie, { type LottieComponentProps } from "lottie-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LottieAccentProps = {
  className?: string;
  animationData: LottieComponentProps["animationData"];
  delay?: number;
};

export function LottieAccent({
  className,
  animationData,
  delay = 0,
}: LottieAccentProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("pointer-events-none select-none", className)}
    >
      <Lottie animationData={animationData} autoplay loop renderer="svg" />
    </motion.div>
  );
}