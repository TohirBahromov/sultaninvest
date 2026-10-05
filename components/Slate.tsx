type Cell = { key: string; value: string; chalk?: boolean; wide?: boolean };

/**
 * A clapperboard. It is how a production marks a shot before the footage
 * exists, so it is also this site's honest stand-in for media not yet supplied.
 */
export default function Slate({
  cells,
  media,
  ratio = "4 / 3",
  label,
}: {
  cells: Cell[];
  media?: string;
  ratio?: string;
  label?: string;
}) {
  return (
    <div className="slate" style={{ "--slate-ratio": ratio } as React.CSSProperties} role="img" aria-label={label}>
      <div className="slate__sticks" aria-hidden="true" />
      <div className="slate__body" aria-hidden="true">
        {cells.map((c) => (
          <div key={c.key} className={`slate__cell${c.wide ? " slate__cell--wide" : ""}`}>
            <span className="slate__key">{c.key}</span>
            <span className={`slate__value${c.chalk ? " slate__value--chalk" : ""}`}>{c.value}</span>
          </div>
        ))}
      </div>
      {media && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="slate__media" src={media} alt={label ?? ""} loading="lazy" />
      )}
    </div>
  );
}
