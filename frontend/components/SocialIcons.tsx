export function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.49-1.46H16.5V4.3C16.2 4.26 15.2 4.17 14 4.17c-2.4 0-4.05 1.47-4.05 4.16V10.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}

export function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 4l7.1 9.3L4.4 20h1.9l5.9-5.9 4.4 5.9H20l-7.4-9.7L19 4h-1.9l-5.4 5.4L8 4H4zm2.9 1.4h1.8l9.4 12.4h-1.8L6.9 5.4z" />
    </svg>
  );
}

export function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.8 10v7M7.8 7.3v.01M12 17v-4.2c0-1.4.9-2.3 2.1-2.3 1.2 0 1.9.8 1.9 2.3V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="7.8" cy="7.3" r="0.2" />
    </svg>
  );
}

// TODO: replace with your real profile URLs
export const YOUTUBE_URL = "https://youtube.com/@voyagervibe";
export const INSTAGRAM_URL = "https://instagram.com/voyagervibe";
export const FACEBOOK_URL = "https://facebook.com/voyagervibe";
export const X_URL = "https://x.com/voyagervibe";
export const LINKEDIN_URL = "https://linkedin.com/company/voyagervibe";

const SOCIALS = [
  { name: "Facebook", href: FACEBOOK_URL, Icon: IconFacebook },
  { name: "Instagram", href: INSTAGRAM_URL, Icon: IconInstagram },
  { name: "X", href: X_URL, Icon: IconX },
  { name: "YouTube", href: YOUTUBE_URL, Icon: IconYouTube },
  { name: "LinkedIn", href: LINKEDIN_URL, Icon: IconLinkedIn },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 [@media(hover:hover)]:hover:border-gold-light [@media(hover:hover)]:hover:text-gold-light"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
