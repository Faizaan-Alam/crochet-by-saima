import { CrochetFlower, Float, YarnBall } from "@/components/Decor";
import { ProductImage } from "@/components/ProductImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto w-full max-w-lg">
            <div aria-hidden="true" className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] bg-secondary" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <ProductImage
                src="/images/about/workspace.jpg"
                alt={site.about.imageAlt}
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
            <Float className="absolute -right-1 top-6" amplitude={8}>
              <YarnBall size={58} tone="primary" />
            </Float>
            <Float className="absolute -left-1 top-10" delay={0.6} amplitude={7}>
              <CrochetFlower size={48} />
            </Float>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading
            id="about-heading"
            align="left"
            eyebrow={site.about.eyebrow}
            title={site.about.title}
          />
          <p className="text-muted mt-5 max-w-xl text-lg leading-relaxed">{site.about.text}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {site.about.notes.map((note) => (
              <li key={note.title} className="rounded-3xl border border-base-300 bg-base-100 p-4 shadow-soft">
                <p className="font-display text-lg">{note.title}</p>
                <p className="text-muted mt-2 text-sm leading-relaxed">{note.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
