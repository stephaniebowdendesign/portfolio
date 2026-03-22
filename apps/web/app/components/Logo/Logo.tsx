export function Logo() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SB logomark"
    >
      <defs>
        <linearGradient id="sb-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4956a" />
          <stop offset="50%" stopColor="#e8799a" />
          <stop offset="100%" stopColor="#b85fc4" />
        </linearGradient>
      </defs>

      {/* Rounded square */}
      <rect width="34" height="34" rx="9" fill="url(#sb-gradient)" />

      {/* SB monogram using text — correct letterforms guaranteed */}
      <text
        x="17"
        y="23"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="15"
        letterSpacing="-0.5"
        fill="white"
      >
        SB
      </text>
    </svg>
  );
}
