import { IconYouTube, IconInstagram, YOUTUBE_URL, INSTAGRAM_URL } from "./SocialIcons";

export default function SocialFollowBanner() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-5 rounded-2xl border border-border-soft bg-white p-6 shadow-sm transition-shadow duration-200 [@media(hover:hover)]:hover:shadow-md"
      >
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FF0000] text-white">
          <IconYouTube className="h-5 w-5" />
        </span>
        <span className="flex-1">
          <span className="block font-serif text-lg font-bold text-ink">Watch on YouTube</span>
          <span className="block text-sm text-ink-muted">
            Trip vlogs, guides, and behind-the-scenes footage from every destination.
          </span>
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="flex-shrink-0 text-ink-muted transition-transform duration-200 group-hover:translate-x-1"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-5 rounded-2xl border border-border-soft bg-white p-6 shadow-sm transition-shadow duration-200 [@media(hover:hover)]:hover:shadow-md"
      >
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white">
          <IconInstagram className="h-5 w-5" />
        </span>
        <span className="flex-1">
          <span className="block font-serif text-lg font-bold text-ink">Follow on Instagram</span>
          <span className="block text-sm text-ink-muted">
            Daily photos and stories from travelers exploring with us right now.
          </span>
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="flex-shrink-0 text-ink-muted transition-transform duration-200 group-hover:translate-x-1"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
