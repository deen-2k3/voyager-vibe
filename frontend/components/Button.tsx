import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson cursor-pointer";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm",
  md: "px-6 py-3 text-sm",
};

const variants: Record<Variant, string> = {
  primary: "bg-crimson text-white [@media(hover:hover)]:hover:bg-crimson-dark",
  outline:
    "border-2 border-forest text-forest [@media(hover:hover)]:hover:bg-forest [@media(hover:hover)]:hover:text-white",
  ghost: "text-ink [@media(hover:hover)]:hover:text-crimson",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
