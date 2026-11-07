"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="shell pt-3 sm:pt-4">
      <nav
        className="flex items-center justify-between gap-3 rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-soft sm:px-4"
        aria-label="Primary"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5 rounded-full pr-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-content">
            <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
              <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <path
                d="M9 15c2.2-3 4.4-3 6.6 0s4.4 3 6.6 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-display max-w-[8.5rem] text-[0.95rem] leading-tight sm:max-w-none sm:text-lg sm:leading-none">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "location" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold ${
                active === link.id
                  ? "bg-primary/10 text-primary"
                  : "text-base-content hover:bg-base-200"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-base-300 bg-base-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="mt-2 rounded-3xl border border-base-300 bg-base-100 p-3 shadow-soft md:hidden"
        >
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-base-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      </div>
    </header>
  );
}
