import { ReactNode } from "react";

type MaxWidth = "3xl" | "5xl" | "7xl";

const maxWidths: Record<MaxWidth, string> = {
  "3xl": "max-w-3xl",
  "5xl": "max-w-5xl",
  "7xl": "max-w-7xl",
};

export default function Container({
  children,
  className = "",
  maxWidth = "7xl",
}: {
  children: ReactNode;
  className?: string;
  maxWidth?: MaxWidth;
}) {
  return (
    <div className={`mx-auto w-full ${maxWidths[maxWidth]} px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
