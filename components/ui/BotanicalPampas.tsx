type BotanicalPampasProps = {
  className?: string;
  mirrored?: boolean;
};

/**
 * Full, feathery pampas drawn in the same botanical line language as the
 * vines. The plumes use layered fronds instead of a photographic texture, so
 * they can soften every section without competing with the lash photography.
 */
export function BotanicalPampas({
  className = "",
  mirrored = false,
}: BotanicalPampasProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 280 560"
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
        <path d="M22 552C32 427 47 294 92 154" opacity=".82" />
        <path d="M76 556C88 413 111 253 151 92" opacity=".78" />
        <path d="M139 558C147 426 180 313 214 178" opacity=".64" />
        <path d="M196 558C197 428 226 326 250 230" opacity=".48" />

        <g className="pampas-plume pampas-plume-a">
          <path
            d="M92 154C54 145 31 108 43 59C58 77 66 36 98 12C122 47 151 65 153 107C156 135 127 155 92 154Z"
            fill="currentColor"
            fillOpacity=".16"
            stroke="none"
          />
          <path d="M92 151C94 107 96 59 98 15" />
          <path
            d="M92 137C69 116 55 90 45 62M94 125C67 99 57 70 54 43M95 112C75 82 70 54 74 28M96 97C84 68 85 42 89 18M93 139C120 118 139 95 149 71M95 126C125 101 143 79 149 55M96 111C123 82 137 58 135 35M97 95C116 67 123 42 116 21"
            opacity=".78"
          />
        </g>

        <g className="pampas-plume pampas-plume-b">
          <path
            d="M151 92C107 81 92 39 112 2C127 21 142 0 170 0C184 32 207 59 195 87C187 106 168 102 151 92Z"
            fill="currentColor"
            fillOpacity=".14"
            stroke="none"
          />
          <path d="M151 90C155 61 160 31 169 3" />
          <path
            d="M153 80C130 64 119 44 113 23M156 70C136 49 131 28 133 9M159 57C148 38 147 19 151 3M154 81C176 68 188 52 194 34M157 69C180 52 190 34 188 17M161 56C178 38 181 21 176 4"
            opacity=".7"
          />
        </g>

        <g className="pampas-plume pampas-plume-c">
          <path
            d="M214 178C177 168 163 133 176 94C194 109 200 76 222 55C242 84 263 109 257 139C253 163 236 180 214 178Z"
            fill="currentColor"
            fillOpacity=".13"
            stroke="none"
          />
          <path d="M214 175C216 136 219 94 222 58" />
          <path
            d="M214 161C193 143 182 121 177 96M216 148C195 125 191 103 194 80M218 134C204 111 205 86 210 66M215 163C237 147 250 126 256 105M217 150C244 130 255 107 252 85M219 135C239 112 245 88 239 68"
            opacity=".66"
          />
        </g>

        <g className="pampas-plume pampas-plume-a">
          <path
            d="M250 230C218 219 207 188 218 157C233 170 242 142 258 125C275 150 286 178 278 202C272 221 261 232 250 230Z"
            fill="currentColor"
            fillOpacity=".11"
            stroke="none"
          />
          <path d="M250 227C252 193 255 158 258 128" />
          <path
            d="M250 216C234 198 224 180 220 159M252 202C238 180 236 160 239 143M254 188C246 168 247 149 251 132M251 217C268 202 276 185 278 167M253 202C273 183 280 164 275 147M255 188C270 170 273 151 267 134"
            opacity=".58"
          />
        </g>
      </g>
    </svg>
  );
}
