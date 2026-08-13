import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import SocialIcons from "./SocialIcons";

const EXPLORE_LINKS = [
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/feedback", label: "Feedback" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-forest-dark text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Voyager Vibe logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <span className="font-serif text-lg font-bold text-gold-light">Voyager Vibe</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Explore more. Live the vibe. We design breathtaking journeys and handle every detail
            along the way.
          </p>
          <SocialIcons className="mt-5" />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {EXPLORE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a href="tel:+919971118370" className="transition-colors hover:text-white">
                +91 99711 18370
              </a>
            </li>
            <li>
              <a
                href="mailto:voyagervibe0001@gmail.com"
                className="transition-colors hover:text-white"
              >
                voyagervibe0001@gmail.com
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@voyagervibe.in"
                className="transition-colors hover:text-white"
              >
                contact@voyagervibe.in
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Voyager Vibe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>
          <p>Explore More. Live The Vibe.</p>
        </Container>
      </div>
    </footer>
  );
}
