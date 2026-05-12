"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Mesh Gradient Background ──────────────────────────────

export function MeshGradient({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden -z-10", className)}
    >
      {/* Top-center cyan radial */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/[0.07] blur-[120px]" />
      {/* Upper-right blue */}
      <div className="absolute -top-20 -right-40 w-[600px] h-[500px] rounded-full bg-blue-600/8 dark:bg-blue-600/[0.06] blur-[100px]" />
      {/* Lower-left indigo */}
      <div className="absolute bottom-0 -left-32 w-[500px] h-[400px] rounded-full bg-indigo-600/8 dark:bg-indigo-700/[0.05] blur-[100px]" />
    </div>
  );
}

// ── Animated Orbs ─────────────────────────────────────────

const ORBS = [
  {
    className: "top-[10%] left-[15%] w-72 h-72",
    color: "bg-cyan-500/[0.06] dark:bg-cyan-500/[0.09]",
    duration: 16,
    delay: 0,
  },
  {
    className: "top-[50%] right-[10%] w-96 h-96",
    color: "bg-blue-600/[0.05] dark:bg-blue-600/[0.08]",
    duration: 20,
    delay: 4,
  },
  {
    className: "bottom-[15%] left-[40%] w-80 h-80",
    color: "bg-indigo-500/[0.04] dark:bg-indigo-500/[0.07]",
    duration: 18,
    delay: 8,
  },
] as const;

export function AnimatedOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden -z-10", className)}
    >
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full blur-3xl", orb.className, orb.color)}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ── Dot Grid ─────────────────────────────────────────────

export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        "bg-dot-grid opacity-40 dark:opacity-20",
        // fade edges
        "[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]",
        className
      )}
    />
  );
}

// ── Canvas Particle Field ─────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    const particles: Particle[] = [];
    const COUNT = 55;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawn = (): Particle => ({
      x:      Math.random() * canvas.width,
      y:      Math.random() * canvas.height,
      vx:     (Math.random() - 0.5) * 0.35,
      vy:     (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.4,
      alpha:  Math.random() * 0.5 + 0.15,
    });

    resize();
    for (let i = 0; i < COUNT; i++) particles.push(spawn());

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Determine accent color from CSS var (supports dark/light)
      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark ? "6,182,212" : "6,182,212";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor},${p.alpha})`;
        ctx.fill();
      }

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${baseColor},${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    loop();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 w-full h-full -z-10",
        className
      )}
    />
  );
}

// ── Hero Background (composite) ───────────────────────────

export function HeroBackground({ className }: { className?: string }) {
  return (
    <>
      <MeshGradient className={className} />
      <DotGrid />
      <ParticleField />
    </>
  );
}
