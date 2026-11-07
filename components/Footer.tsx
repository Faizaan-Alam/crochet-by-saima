"use client";

import { useSyncExternalStore } from "react";
import { navLinks, site, whatsappHref } from "@/data/site";

function subscribe() {
  return () => {};
}

function currentYear() {
  return new Date().getFullYear();
}

export function Footer() {
  const year = useSyncExternalStore(subscribe, currentYear, () => null);

  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="shell grid gap-8 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl">{site.name}</p>
          <p className="text-muted mt-2 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-2 text-sm font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className="hover:text-primary" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <a
            className="font-semibold hover:text-primary"
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {site.phoneDisplay}
          </a>
          <p className="text-muted mt-3">
            © {year ?? ""} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
