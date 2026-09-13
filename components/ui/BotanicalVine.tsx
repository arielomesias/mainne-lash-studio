export function BotanicalVine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 520"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M209 8C112 76 181 149 92 210C21 259 106 338 31 414C13 432 8 468 22 511"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g fill="currentColor" opacity=".9">
        <path d="M159 72c-34-8-51 6-56 31 32 8 50-2 56-31Z" />
        <path d="M175 121c31-7 48 5 53 29-29 7-46-2-53-29Z" />
        <path d="M113 189c-33-7-50 6-54 31 31 6 48-4 54-31Z" />
        <path d="M79 247c30-2 44 11 44 34-29 2-43-9-44-34Z" />
        <path d="M66 318c-30-1-44 12-43 35 28 1 42-11 43-35Z" />
        <path d="M40 390c29 4 40 19 35 41-27-4-39-17-35-41Z" />
        <path d="M24 448c-25 10-32 27-22 45 24-9 31-24 22-45Z" />
      </g>
    </svg>
  );
}
