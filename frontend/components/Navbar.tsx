"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";
import Button from "./Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const transparent = isHome && !open && !scrolled;

  useEffect(() => {
    setScrolled(window.scrollY > 40);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 40);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-gradient-to-b from-white/40 to-transparent"
          : "border-b border-border-soft bg-cream/95 shadow-sm backdrop-blur"
      }`}
    >
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <Link
          href="/"
          className="flex items-center gap-3"
          style={{ marginLeft: "10px" }}
          onClick={() => setOpen(false)}
        >
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-white/80 sm:h-16 sm:w-16 lg:h-[70px] lg:w-[70px]">
            <Image
              src="/images/logo.jpg"
              alt="Voyager Vibe logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-none">
            <p className="font-serif text-lg font-bold tracking-wide text-crimson sm:text-xl lg:text-2xl">
              VOYAGER
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-px w-3 bg-forest sm:w-4" />
              <p className="font-serif text-xs font-bold tracking-[0.25em] text-forest sm:text-sm lg:text-base">
                VIBE
              </p>
              <span className="h-px w-3 bg-forest sm:w-4" />
            </div>
            <p className="mt-1 hidden whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.15em] text-ink-muted sm:block">
              Explore More. Live The Vibe.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  active ? "text-crimson" : "text-ink [@media(hover:hover)]:hover:text-crimson"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button href="/contact" size="sm">
            Enquire<span className="hidden sm:inline"> Now</span>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-cream/80 text-ink lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border-soft bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide ${
                  pathname === link.href ? "bg-crimson/10 text-crimson" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
