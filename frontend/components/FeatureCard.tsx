import { ReactNode } from "react";

export default function FeatureCard({
  icon,
  title,
  description,
  tone = "forest",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  tone?: "forest" | "gold" | "crimson";
}) {
  const toneClasses = {
    forest: "bg-forest text-white",
    gold: "bg-gold text-white",
    crimson: "bg-crimson text-white",
  }[tone];

  return (
    <div className="flex h-full items-start gap-4 rounded-2xl border border-border-soft bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${toneClasses}`}
      >
        <span className="h-6 w-6">{icon}</span>
      </div>
      <div>
        <h3 className="font-sans text-base font-bold text-ink">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  );
}
