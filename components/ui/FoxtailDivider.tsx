/**
 * Motivo de marca: cola de zorro en line-art (docs/design-system.md).
 * Reemplaza al <hr> generico como divisor de seccion.
 *
 * Reglas: trazo fino, `currentColor`, maximo 1-2 apariciones por viewport,
 * nunca como patron de fondo. Decorativo => aria-hidden.
 *
 * Las barbas se calculan sobre la curva del raquis en vez de escribirse a mano,
 * para que la densidad quede pareja y afine hacia las puntas.
 */

const VIEW_W = 240;
const VIEW_H = 44;
const BARB_COUNT = 17;

// Bezier cuadratica del raquis: de (16,26) a (224,26) con control en (120,10).
const P0 = { x: 16, y: 26 };
const P1 = { x: 120, y: 10 };
const P2 = { x: 224, y: 26 };

function pointAt(t: number) {
  const u = 1 - t;
  return {
    x: u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x,
    y: u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y,
  };
}

function tangentAt(t: number) {
  const dx = 2 * (1 - t) * (P1.x - P0.x) + 2 * t * (P2.x - P1.x);
  const dy = 2 * (1 - t) * (P1.y - P0.y) + 2 * t * (P2.y - P1.y);
  const len = Math.hypot(dx, dy) || 1;
  return { x: dx / len, y: dy / len };
}

function barbs() {
  const paths: string[] = [];

  for (let i = 0; i < BARB_COUNT; i++) {
    const t = (i + 0.5) / BARB_COUNT;
    const { x, y } = pointAt(t);
    const tan = tangentAt(t);
    // Normal a la curva.
    const nx = -tan.y;
    const ny = tan.x;

    // Plumosa en el centro, afinada en los extremos.
    const length = Math.sin(Math.PI * t) ** 0.8 * 15 + 2;
    // Las barbas se peinan hacia atras, no perpendiculares.
    const sweep = 6;

    for (const side of [1, -1] as const) {
      const tipX = x + nx * length * side - tan.x * sweep;
      const tipY = y + ny * length * side - tan.y * sweep;
      const ctrlX = x + nx * length * 0.55 * side;
      const ctrlY = y + ny * length * 0.55 * side;
      paths.push(`M${x.toFixed(1)} ${y.toFixed(1)} Q${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)}`);
    }
  }

  return paths;
}

export function FoxtailDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 max-w-24 bg-current opacity-25" />
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-8 w-40 shrink-0 sm:w-52"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
      >
        {barbs().map((d, i) => (
          <path key={i} d={d} opacity={0.55} />
        ))}
        <path
          d={`M${P0.x} ${P0.y} Q${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
          strokeWidth={1.2}
        />
        {/* Tallo, prolongando el raquis hacia la derecha. */}
        <path d={`M${P2.x} ${P2.y} q6 1.5 11 5`} strokeWidth={1.2} />
      </svg>
      <span className="h-px flex-1 max-w-24 bg-current opacity-25" />
    </div>
  );
}
