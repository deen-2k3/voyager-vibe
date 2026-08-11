const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "frontend", "public", "images", "destinations");
fs.mkdirSync(outDir, { recursive: true });

// Each entry: [slug, gradientStart, gradientEnd, accent]
const scenes = [
  ["swiss-alps", "#274472", "#8CA6C9", "#FFFFFF"],
  ["banff", "#1B5E3A", "#4C9A6A", "#DDEFE2"],
  ["santorini", "#2B6CB0", "#F6AD55", "#FFFFFF"],
  ["bali", "#0F6B4C", "#8FD19E", "#FFF3C4"],
  ["kyoto", "#7A1F2B", "#E8A93D", "#FCE7C8"],
  ["machu-picchu", "#3E4A2E", "#A3B76B", "#E9F0DC"],
];

function mountainScene(id, c1, c2, accent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" width="640" height="420">
  <defs>
    <linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="640" height="420" fill="url(#sky-${id})"/>
  <circle cx="480" cy="110" r="52" fill="${accent}" opacity="0.85"/>
  <path d="M0 300 L90 180 L160 260 L230 140 L300 300 Z" fill="${accent}" opacity="0.22"/>
  <path d="M120 320 L240 160 L330 260 L420 120 L560 320 Z" fill="${accent}" opacity="0.35"/>
  <path d="M0 420 L120 240 L210 330 L300 210 L400 330 L480 250 L640 420 Z" fill="${accent}" opacity="0.55"/>
  <rect x="0" y="380" width="640" height="40" fill="${accent}" opacity="0.18"/>
</svg>`;
}

scenes.forEach(([slug, c1, c2, accent]) => {
  const svg = mountainScene(slug, c1, c2, accent);
  fs.writeFileSync(path.join(outDir, `${slug}.svg`), svg, "utf8");
  console.log("wrote", slug);
});
