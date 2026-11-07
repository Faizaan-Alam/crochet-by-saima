"use client";

import { CrochetFlower, Float, YarnBall } from "@/components/Decor";
import { ProductImage } from "@/components/ProductImage";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { primaryButton, secondaryButton } from "@/lib/styles";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-8 pt-8 sm:pt-12" aria-labelledby="hero-heading">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {site.hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-4 max-w-xl text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {site.hero.titleLead}
            <span className="mt-1 block italic text-primary">{site.hero.titleAccent}</span>
          </h1>
          <p className="text-muted mt-6 max-w-lg text-lg leading-relaxed">{site.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={primaryButton} href="#creations">
              {site.hero.primaryCta}
            </a>
            <a className={secondaryButton} href="#contact">
              {site.hero.secondaryCta}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {site.hero.notes.map((note) => (
              <li key={note} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative mx-auto aspect-[5/6] w-full max-w-[34rem] sm:aspect-square">
          <div
            aria-hidden="true"
            className="organic absolute -left-2 top-8 h-40 w-40 bg-secondary"
          />
          <div className="absolute right-0 top-0 w-[82%] overflow-hidden rounded-[2rem] shadow-lift">
            <ProductImage
              src="/images/hero/still-life.jpg"
              alt={site.hero.imageAlt}
              priority
              sizes="(max-width: 1024px) 80vw, 460px"
              imageClassName="transition duration-700"
            />
          </div>
          <div className="absolute bottom-4 left-0 w-[46%] overflow-hidden rounded-[1.5rem] border-4 border-base-100 shadow-lift">
            <ProductImage
              src="/images/products/blush-peony.jpg"
              alt="Handmade blush crochet peony"
              sizes="220px"
            />
          </div>
          <Float className="absolute left-6 top-2" amplitude={12}>
            <YarnBall size={68} tone="primary" />
          </Float>
          <Float className="absolute bottom-2 right-4" delay={0.8} amplitude={8}>
            <YarnBall size={46} tone="secondary" />
          </Float>
          <Float className="absolute left-8 top-28" delay={0.4} amplitude={8}>
            <CrochetFlower size={46} />
          </Float>
        </div>
      </div>
    </section>
  );
}
