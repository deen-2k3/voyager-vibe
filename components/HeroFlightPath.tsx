export default function HeroFlightPath({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 140"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* contrail arcs */}
      <path
        d="M10 95 C130 30, 260 15, 400 40"
        stroke="#c11f2f"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M30 110 C150 55, 270 40, 395 65"
        stroke="#9aa3ab"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* small birds */}
      <path
        d="M60 30 q6 -8 12 0 q6 -8 12 0"
        stroke="#6b6459"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M95 15 q5 -7 10 0 q5 -7 10 0"
        stroke="#6b6459"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* plane 1 (larger, trailing the crimson arc) */}
      <g transform="translate(300,32) rotate(18)">
        <path
          d="M0 4 L26 4 L34 0 L36 2 L30 6 L36 10 L34 12 L26 8 L0 8 L-6 12 L-10 11 L-5 6 L-10 1 L-6 0 Z"
          fill="#c11f2f"
        />
      </g>

      {/* plane 2 (smaller, trailing the gray arc) */}
      <g transform="translate(378,58) rotate(14) scale(0.7)">
        <path
          d="M0 4 L26 4 L34 0 L36 2 L30 6 L36 10 L34 12 L26 8 L0 8 L-6 12 L-10 11 L-5 6 L-10 1 L-6 0 Z"
          fill="#c11f2f"
        />
      </g>
    </svg>
  );
}
