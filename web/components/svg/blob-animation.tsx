export function BlobAnimation() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#4D7CFF" />
        </linearGradient>
        <filter id="blobFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
        <style>{`
          @keyframes blobFloat {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(8px, -12px) scale(1.05); }
            66% { transform: translate(-6px, 10px) scale(0.95); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .blob-shape {
            animation: blobFloat 6s ease-in-out infinite;
            filter: url(#blobFilter);
          }
        `}</style>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="url(#blobGradient)"
        opacity="0.3"
        className="blob-shape"
      />
    </svg>
  );
}