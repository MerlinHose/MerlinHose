export function FloatingShapes() {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {/* Floating circles with slight rotation */}
      <g className="opacity-20">
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="2"
          className="animate-slow-spin"
          style={{ animationDuration: "20s" }}
        />
      </g>

      <g className="opacity-15" style={{ animationDelay: "2s" }}>
        <circle
          cx="700"
          cy="500"
          r="80"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="1.5"
          className="animate-slow-spin"
          style={{ animationDuration: "30s" }}
        />
      </g>

      {/* Animated dots grid */}
      <g className="opacity-10">
        {Array.from({ length: 6 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={150 + i * 100}
              cy={100 + j * 120}
              r="3"
              fill="#0052FF"
              className="animate-pulse-dot"
              style={{ animationDelay: `${i * 0.1 + j * 0.15}s` }}
            />
          )),
        )}
      </g>

      {/* Accent lines */}
      <g stroke="url(#accentGradient)" strokeWidth="1" opacity="0.3">
        <line x1="0" y1="150" x2="200" y2="150" className="animate-pulse" />
        <line x1="600" y1="450" x2="800" y2="450" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
      </g>

      <defs>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#4D7CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
