type DiamondDividerProps = {
  width?: number;
  className?: string;
};

export function DiamondDivider({ width = 80, className }: DiamondDividerProps) {
  return (
    <svg
      viewBox="0 0 100 12"
      width={width}
      height={12}
      aria-hidden
      className={className}
    >
      <line
        x1="0"
        y1="6"
        x2="42"
        y2="6"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <line
        x1="58"
        y1="6"
        x2="100"
        y2="6"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <path
        d="M50 1 L54 6 L50 11 L46 6 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
    </svg>
  );
}
