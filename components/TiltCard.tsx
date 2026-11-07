"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element || !enabled.current) return;
    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-6px)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`h-full transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
