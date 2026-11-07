import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site, whatsappHref } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="pb-20 sm:pb-28" aria-labelledby="contact-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow={site.contact.eyebrow}
            title={site.contact.title}
            subtitle={site.contact.text}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-[1.75rem] border border-base-300 bg-base-100 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-content">
              <MessageCircle aria-hidden="true" />
            </span>
            <span>
              <span className="text-muted block text-sm font-semibold">{site.contact.whatsappLabel}</span>
              <span className="font-display mt-1 block text-2xl">{site.phoneDisplay}</span>
              <span className="mt-1 block text-sm font-semibold text-primary">
                {site.contact.whatsappAction}
              </span>
            </span>
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-4 rounded-[1.75rem] border border-base-300 bg-base-100 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-content">
              <Phone aria-hidden="true" />
            </span>
            <span>
              <span className="text-muted block text-sm font-semibold">{site.contact.phoneLabel}</span>
              <span className="font-display mt-1 block text-2xl">{site.phoneDisplay}</span>
              <span className="mt-1 block text-sm font-semibold text-primary">
                {site.contact.phoneAction}
              </span>
            </span>
          </a>
        </div>
        <div
          className="mt-4 flex items-center gap-4 rounded-[1.75rem] border border-dashed border-base-300 bg-base-100/70 px-5 py-4"
          aria-label="Instagram, coming soon"
        >
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-base-200 text-base-content">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span>
            <span className="block text-sm font-semibold">{site.contact.instagramLabel}</span>
            <span className="text-muted block text-sm">{site.contact.instagramStatus}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
