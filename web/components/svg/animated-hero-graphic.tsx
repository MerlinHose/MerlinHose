export function AnimatedHeroGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Rotating outer ring */}
      <circle
        cx="200"
        cy="200"
        r="180"
        fill="none"
        stroke="url(#gradientRing)"
        strokeWidth="2"
        strokeDasharray="565 565"
        strokeDashoffset="0"
        className="animate-slow-spin"
      />

      {/* Floating spheres */}
      <g className="animate-float-y-fast">
        <circle cx="200" cy="80" r="25" fill="url(#gradientOrb)" opacity="0.8" />
      </g>

      <g className="animate-float-y" style={{ animationDelay: "0.5s" }}>
        <circle cx="100" cy="250" r="20" fill="url(#gradientOrbSecondary)" opacity="0.6" />
      </g>

      <g className="animate-float-y-fast" style={{ animationDelay: "1s" }}>
        <circle cx="300" cy="280" r="22" fill="url(#gradientOrbSecondary)" opacity="0.7" />
      </g>

      {/* Accent geometric shapes */}
      <rect
        x="160"
        y="160"
        width="80"
        height="80"
        rx="12"
        fill="url(#gradientOrb)"
        opacity="0.15"
      />

      <circle cx="200" cy="200" r="40" fill="none" stroke="url(#gradientRing)" strokeWidth="1" opacity="0.5" />

      {/* Center bright circle */}
      <circle cx="200" cy="200" r="15" fill="url(#gradientOrb)" />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradientRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#4D7CFF" />
        </linearGradient>
        <radialGradient id="gradientOrb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4D7CFF" />
          <stop offset="100%" stopColor="#0052FF" />
        </radialGradient>
        <radialGradient id="gradientOrbSecondary" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0052FF" opacity="0.9" />
          <stop offset="100%" stopColor="#0052FF" opacity="0.3" />
        </radialGradient>
      </defs>
    </svg>
  );
}
