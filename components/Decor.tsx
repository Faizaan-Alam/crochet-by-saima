"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Float({
  children,
  className,
  delay = 0,
  amplitude = 10,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration: 6.5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function YarnBall({
  className = "",
  size = 72,
  tone = "primary",
}: {
  className?: string;
  size?: number;
  tone?: "primary" | "secondary" | "accent";
}) {
  const color =
    tone === "accent"
      ? "var(--color-accent)"
      : tone === "secondary"
        ? "var(--color-secondary)"
        : "var(--color-primary)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "999px",
        background: `radial-gradient(circle at 32% 28%, color-mix(in oklab, white 75%, ${color}), ${color} 48%, color-mix(in oklab, black 22%, ${color}))`,
        boxShadow: `inset -6px -8px 14px color-mix(in oklab, black 16%, transparent), 0 14px 24px -14px color-mix(in oklab, ${color} 75%, transparent)`,
      }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-50">
        <path
          d="M18 46c8-12 16-12 24 0s16 12 24 0 16-12 24 0"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 58c10-10 18-10 26 0s16 10 26 0 16-10 24 0"
          fill="none"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M22 70c8-8 14-8 22 0s14 8 22 0 14-8 20 0"
          fill="none"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function CrochetFlower({
  className = "",
  size = 56,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={`pointer-events-none ${className}`}
    >
      {[0, 60, 120, 180, 240, 300].map((degree) => (
        <ellipse
          key={degree}
          cx="40"
          cy="22"
          rx="11"
          ry="16"
          fill="var(--color-secondary)"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          transform={`rotate(${degree} 40 40)`}
        />
      ))}
      <circle cx="40" cy="40" r="8" fill="var(--color-primary)" />
      <circle cx="40" cy="40" r="3.2" fill="var(--color-base-100)" />
    </svg>
  );
}
