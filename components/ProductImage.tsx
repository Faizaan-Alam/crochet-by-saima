"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProductImage({
  src,
  alt,
  className = "aspect-square",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: ProductImageProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className={`relative overflow-hidden bg-base-200 ${className}`}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center">
          <svg viewBox="0 0 200 200" className="h-3/5 w-3/5" aria-hidden="true">
            <circle cx="78" cy="92" r="42" fill="var(--color-secondary)" />
            <circle cx="118" cy="108" r="28" fill="var(--color-primary)" opacity="0.85" />
            <path
              d="M46 150c18-16 28-16 40 0"
              fill="none"
              stroke="var(--color-base-100)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="150" cy="62" r="8" fill="var(--color-accent)" />
            <circle cx="166" cy="74" r="6" fill="var(--color-secondary)" />
            <circle cx="154" cy="80" r="5" fill="var(--color-primary)" />
          </svg>
          <span className="absolute bottom-3 left-3 rounded-full bg-base-100 px-2.5 py-1 text-[0.7rem] font-semibold text-primary">
            Preview
          </span>
        </div>
      )}
    </div>
  );
}
