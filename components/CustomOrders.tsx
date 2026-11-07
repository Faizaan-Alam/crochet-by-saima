import { MessageCircle } from "lucide-react";
import { Float, YarnBall } from "@/components/Decor";
import { Reveal } from "@/components/Reveal";
import { site, whatsappHref } from "@/data/site";
import { primaryButton } from "@/lib/styles";

export function CustomOrders() {
  return (
    <section id="custom" className="pb-16 sm:pb-24" aria-labelledby="custom-heading">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-base-200 px-6 py-12 sm:px-12 sm:py-16">
            <Float className="absolute -left-4 top-6 hidden sm:block" amplitude={10}>
              <YarnBall size={78} tone="secondary" />
            </Float>
            <Float className="absolute -right-3 bottom-4 hidden sm:block" delay={0.5} amplitude={8}>
              <YarnBall size={56} tone="primary" />
            </Float>
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {site.custom.eyebrow}
              </p>
              <h2 id="custom-heading" className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">
                {site.custom.title}
              </h2>
              <p className="text-muted mt-4 text-lg leading-relaxed">{site.custom.text}</p>
              <a
                className={`${primaryButton} mt-8`}
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {site.custom.cta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
