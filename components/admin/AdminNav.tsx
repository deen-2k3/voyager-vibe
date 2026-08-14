"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clearAdminToken } from "@/lib/adminApi";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/destinations", label: "Destinations" },
  { href: "/admin/blogs", label: "Blog" },
  { href: "/admin/enquiries", label: "Enquiries" },
  { href: "/admin/feedback", label: "Feedback" },
];

export default function AdminNav() {
  const pathname = usePathname();

  function handleLogout() {
    clearAdminToken();
    window.location.href = "/admin";
  }

  return (
    <header className="border-b border-border-soft bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/admin" className="font-serif text-lg font-bold text-crimson">
          Voyager Vibe Admin
        </Link>
        <nav className="flex flex-wrap items-center gap-6">
          {LINKS.map((l) => {
            const active = l.href === "/admin" ? pathname === "/admin" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold ${
                  active ? "text-crimson" : "text-ink [@media(hover:hover)]:hover:text-crimson"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={handleLogout}
            className="cursor-pointer text-sm font-semibold text-ink-muted [@media(hover:hover)]:hover:text-crimson"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
