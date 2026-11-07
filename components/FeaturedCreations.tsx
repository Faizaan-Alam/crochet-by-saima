"use client";

import { useState } from "react";
import { featuredProducts, type Product } from "@/data/products";
import { site } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedCreations() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="featured" className="pb-16 sm:pb-24" aria-labelledby="featured-heading">
      <div className="shell">
        <div className="rounded-[2.25rem] bg-base-200 px-5 py-12 sm:px-10 sm:py-16">
          <Reveal>
            <SectionHeading
              id="featured-heading"
              eyebrow={site.featured.eyebrow}
              title={site.featured.title}
              subtitle={site.featured.subtitle}
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <li key={product.id} className={index === 0 ? "md:col-span-2" : ""}>
                <ProductCard
                  product={product}
                  onOpen={setSelected}
                  variant={index === 0 ? "feature" : "default"}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
