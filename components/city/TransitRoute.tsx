export function TransitRoute({
  label,
  stops,
}: {
  label: string;
  stops: string[];
}) {
  return (
    <aside className="relative overflow-hidden rounded-[1.5rem_5rem_1.5rem_5rem] bg-ink p-7 text-cream sm:p-9">
      <p className="text-[.67rem] font-semibold uppercase tracking-[.15em] text-sage-light">
        {label}
      </p>
      <ol className="relative mt-7 space-y-0 before:absolute before:bottom-3 before:left-[.34rem] before:top-3 before:w-px before:bg-pampas/35">
        {stops.map((stop, index) => (
          <li key={stop} className="relative flex min-h-14 items-center gap-5 pl-7">
            <span
              aria-hidden="true"
              className={`absolute left-0 h-3 w-3 rounded-full border ${index === stops.length - 1 ? "border-pampas bg-pampas" : "border-sage-light bg-ink"}`}
            />
            <span className={index === stops.length - 1 ? "font-serif text-xl text-pampas" : "text-sm text-cream/72"}>
              {stop}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-5 border-t border-cream/12 pt-5 text-xs leading-5 text-cream/48">
        Exact travel time depends on your starting point and transit service.
      </p>
    </aside>
  );
}
