type BotanicalPampasProps = {
  className?: string;
  mirrored?: boolean;
};

/**
 * Delicate pampas stems drawn in the same single-line language as the vines.
 * The three plumes sway at slightly different speeds to keep the movement
 * organic; reduced-motion is handled globally.
 */
export function BotanicalPampas({
  className = "",
  mirrored = false,
}: BotanicalPampasProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${mirrored ? "-scale-x-100" : ""} ${className}`}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M33 514C39 420 58 303 103 111" opacity=".9" />
        <path d="M82 518C91 401 121 280 153 64" opacity=".72" />
        <path d="M127 520C130 417 151 321 194 155" opacity=".55" />

        <g className="pampas-plume pampas-plume-a">
          <path d="M103 111C95 88 96 50 112 12C126 49 124 83 103 111Z" fill="currentColor" fillOpacity=".045" />
          <path d="M103 109C106 75 109 43 112 14" />
          <path d="M105 94L82 64M106 84L82 49M108 73L88 35M109 61L94 23M110 49L101 15M104 98L128 73M106 87L137 59M107 76L139 43M109 64L135 30M110 52L128 20M111 39L121 13" opacity=".78" />
        </g>

        <g className="pampas-plume pampas-plume-b">
          <path d="M153 66C143 44 146 19 165 1C177 27 171 52 153 66Z" fill="currentColor" fillOpacity=".04" />
          <path d="M153 65C157 44 160 23 165 3" />
          <path d="M155 54L139 38M157 45L142 27M159 36L148 17M161 26L155 9M156 57L177 44M157 48L183 34M159 39L184 23M161 30L180 13M163 21L174 6" opacity=".68" />
        </g>

        <g className="pampas-plume pampas-plume-c">
          <path d="M194 156C184 132 188 102 209 78C220 111 215 139 194 155Z" fill="currentColor" fillOpacity=".035" />
          <path d="M194 155C198 128 203 102 209 80" />
          <path d="M197 143L176 121M199 133L177 108M201 122L183 96M203 111L190 86M205 100L198 81M198 146L219 130M200 136L228 119M202 126L232 106M204 115L229 94M206 104L222 85M208 94L216 79" opacity=".58" />
        </g>
      </g>
    </svg>
  );
}
