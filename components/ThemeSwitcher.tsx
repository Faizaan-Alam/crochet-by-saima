"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, isThemeId, themes, type ThemeId } from "@/data/themes";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function currentTheme(): ThemeId {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeId(saved) ? saved : themes[0].id;
}

function applyTheme(theme: ThemeId) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
  listeners.forEach((listener) => listener());
}

export function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => themes[0].id);
  const [open, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function choose(next: ThemeId) {
    applyTheme(next);
    setOpen(false);
    const label = themes.find((item) => item.id === next)?.label ?? next;
    setAnnouncement(`${label} theme selected`);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-base-300 bg-base-100 px-2.5 py-1.5 text-sm font-semibold sm:px-3"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex -space-x-1" aria-hidden="true">
          {themes.map((item) => (
            <span
              key={item.id}
              className="h-3.5 w-3.5 rounded-full ring-2 ring-base-100"
              style={{ backgroundColor: item.swatch }}
            />
          ))}
        </span>
        <span className="sr-only">Choose a theme</span>
        <span className="hidden lg:inline">Theme</span>
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Colour themes"
          className="absolute right-0 z-50 mt-2 w-56 rounded-3xl border border-base-300 bg-base-100 p-2 shadow-lift"
        >
          {themes.map((item) => {
            const selected = item.id === theme;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-semibold ${
                    selected ? "bg-primary/10 text-primary" : "hover:bg-base-200"
                  }`}
                  onClick={() => choose(item.id)}
                >
                  <span
                    className="h-5 w-5 rounded-full ring-2 ring-base-100"
                    style={{
                      backgroundColor: item.swatch,
                      boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--color-base-content) 18%, transparent)",
                    }}
                    aria-hidden="true"
                  />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
