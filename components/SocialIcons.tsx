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

export function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

export const YOUTUBE_URL = "https://www.youtube.com/@Voyagervibe0001";
export const INSTAGRAM_URL = "https://www.instagram.com/voyagervibe01";
export const FACEBOOK_URL = "https://www.facebook.com/share/14qgijaL8Xf/";

const SOCIALS = [
  { name: "Facebook", href: FACEBOOK_URL, Icon: IconFacebook },
  { name: "Instagram", href: INSTAGRAM_URL, Icon: IconInstagram },
  { name: "YouTube", href: YOUTUBE_URL, Icon: IconYouTube },
];

const tones = {
  dark: "border-white/20 text-white/80 [@media(hover:hover)]:hover:border-gold-light [@media(hover:hover)]:hover:text-gold-light",
  light:
    "border-border-soft text-ink-muted [@media(hover:hover)]:hover:border-crimson [@media(hover:hover)]:hover:text-crimson",
};

export default function SocialIcons({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 ${tones[tone]}`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
