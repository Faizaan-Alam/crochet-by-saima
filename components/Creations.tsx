"use client";

import { useMemo, useState } from "react";
import { categories, products, type Category, type Product } from "@/data/products";
import { site } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type Filter = "all" | Category;

export function Creations() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Product | null>(null);
  const visible = useMemo(
    () => (filter === "all" ? products : products.filter((product) => product.category === filter)),
    [filter],
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((category) => ({ id: category.id, label: category.label })),
  ];

  return (
    <section id="creations" className="py-16 sm:py-24" aria-labelledby="creations-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="creations-heading"
            eyebrow={site.creations.eyebrow}
            title={site.creations.title}
            subtitle={site.creations.subtitle}
          />
        </Reveal>
        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="radiogroup"
          aria-label="Filter creations by category"
        >
          {filters.map((item) => {
            const selectedFilter = filter === item.id;
            const count =
              item.id === "all"
                ? products.length
                : products.filter((product) => product.category === item.id).length;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selectedFilter}
                className={`min-h-11 rounded-full px-4 text-sm font-semibold transition ${
                  selectedFilter
                    ? "bg-primary text-primary-content shadow-soft"
                    : "border border-base-300 bg-base-100 hover:bg-base-200"
                }`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                <span className={selectedFilter ? "opacity-80" : "text-muted"}> {count}</span>
              </button>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} creations
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onOpen={setSelected} />
            </li>
          ))}
        </ul>
      </div>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
