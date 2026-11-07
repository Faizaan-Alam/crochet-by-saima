export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display mt-3 text-4xl leading-[1.12] tracking-tight sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
