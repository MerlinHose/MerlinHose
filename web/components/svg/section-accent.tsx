export function SectionAccent({ variant = "top" }: { variant?: "top" | "bottom" }) {
  return (
    <svg
      viewBox="0 0 1200 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      {variant === "top" ? (
        <>
          {/* Top wave with gradient */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0052FF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#4D7CFF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0052FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 0,30 Q 300,10 600,30 T 1200,30 L 1200,0 L 0,0 Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M 0,50 Q 200,30 600,50 T 1200,50 L 1200,100 L 0,100 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
          />
        </>
      ) : (
        <>
          {/* Bottom wave */}
          <defs>
            <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0052FF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#4D7CFF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0052FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 0,50 Q 300,70 600,50 T 1200,50 L 1200,100 L 0,100 Z"
            fill="url(#waveGradientBottom)"
          />
          <path
            d="M 0,30 Q 200,50 600,30 T 1200,30 L 1200,0 L 0,0 Z"
            fill="url(#waveGradientBottom)"
            opacity="0.5"
          />
        </>
      )}
    </svg>
  );
}
