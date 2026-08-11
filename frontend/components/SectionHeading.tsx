export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      <div
        className={`mt-4 flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-start"}`}
      >
        <span className="h-[3px] w-10 rounded-full bg-forest" />
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="h-[3px] w-10 rounded-full bg-crimson" />
      </div>
    </div>
  );
}
