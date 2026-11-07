"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import { categoryLabel, type Product } from "@/data/products";
import { productEnquiryHref } from "@/data/site";
import { primaryButton, secondaryButton } from "@/lib/styles";
import { ProductImage } from "@/components/ProductImage";

export function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  return (
    <dialog
      ref={ref}
      className="studio-dialog"
      aria-labelledby={product ? titleId : undefined}
      onClose={onClose}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const inside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        if (!inside) onClose();
      }}
    >
      {product ? (
        <div className="grid md:grid-cols-2">
          <ProductImage
            src={product.image}
            alt={product.alt}
            className="aspect-square"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="relative p-6 sm:p-8">
            <button
              type="button"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-base-300 bg-base-100"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X size={16} />
            </button>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {categoryLabel(product.category)}
            </p>
            <h3 id={titleId} className="font-display mt-3 pr-12 text-4xl tracking-tight">
              {product.name}
            </h3>
            {product.badge ? (
              <p className="mt-4 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-content">
                {product.badge}
              </p>
            ) : null}
            <p className="text-muted mt-4 leading-relaxed">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className={primaryButton}
                href={productEnquiryHref(product.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp
              </a>
              <button type="button" className={secondaryButton} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
