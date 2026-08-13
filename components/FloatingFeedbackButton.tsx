"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingFeedbackButton() {
  const pathname = usePathname();

  if (pathname === "/feedback") return null;

  return (
    <Link
      href="/feedback"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 [@media(hover:hover)]:hover:bg-forest-dark"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Feedback
    </Link>
  );
}
