import { categoryLabel, type Product } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { TiltCard } from "@/components/TiltCard";

export function ProductCard({
  product,
  onOpen,
  variant = "default",
}: {
  product: Product;
  onOpen: (product: Product) => void;
  variant?: "default" | "feature";
}) {
  const feature = variant === "feature";

  return (
    <TiltCard>
      <article className="h-full overflow-hidden rounded-[1.75rem] border border-base-300 bg-base-100 shadow-soft transition-shadow duration-300 hover:shadow-lift">
        <button
          type="button"
          onClick={() => onOpen(product)}
          className={`group flex h-full w-full text-left ${feature ? "flex-col md:grid md:grid-cols-2" : "flex-col"}`}
        >
          <span className="relative">
            <ProductImage
              src={product.image}
              alt={product.alt}
              className={feature ? "aspect-square md:aspect-auto md:min-h-80" : "aspect-square"}
              imageClassName="transition duration-700 ease-out group-hover:scale-[1.04]"
              sizes={feature ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
            />
            {product.badge ? (
              <span className="absolute left-3 top-3 rounded-full bg-base-100 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                {product.badge}
              </span>
            ) : null}
          </span>
          <span className="flex flex-1 flex-col p-5 sm:p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {categoryLabel(product.category)}
            </span>
            <span className={`font-display mt-2 tracking-tight ${feature ? "text-3xl" : "text-2xl"}`}>
              {product.name}
            </span>
            <span className="text-muted mt-2 flex-1 text-sm leading-relaxed">
              {product.description}
            </span>
            <span className="mt-4 text-sm font-semibold text-primary">View piece</span>
          </span>
        </button>
      </article>
    </TiltCard>
  );
}
