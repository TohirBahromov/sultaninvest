/** The shooting schedule: the order of work, as a production lays it out. */
export default function CallSheet({
  steps,
  dark = false,
}: {
  steps: { name: string; text: string }[];
  dark?: boolean;
}) {
  return (
    <ol className={`callsheet${dark ? " callsheet--dark" : ""}`}>
      {steps.map((s, i) => (
        <li key={s.name} data-reveal>
          <span className="callsheet__step credit">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="callsheet__name">{s.name}</h3>
          <p className="callsheet__text">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
