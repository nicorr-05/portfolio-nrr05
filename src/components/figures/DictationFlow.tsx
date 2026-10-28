import { Caption, Link, Node, type Tone, toneClasses } from "./parts";

const tools = ["Replace a fragment", "Append at the end", "Finish without changes"];

export function DictationFlow({ tone = "paper", caption = true }: { tone?: Tone; caption?: boolean }) {
  const t = toneClasses(tone);
  return (
    <div className="@container">
      <div className="grid grid-cols-1 @xl:grid-cols-[1fr_auto_1fr_auto_1.25fr_auto_1fr] @xl:items-center">
        <Node tone={tone} label="Input">Doctor dictates during the consultation</Node>
        <Link tone={tone} />
        <Node tone={tone} label="Planner model" strong>Decides what to change</Node>
        <Link tone={tone} />
        <div className={`rounded-md px-3.5 py-3 ${t.box}`}>
          <div className={`text-[0.78rem] font-medium tracking-[0.02em] ${t.muted}`}>Executor, three tools only</div>
          <ul className="mt-2 grid gap-1.5">
            {tools.map((tool) => (
              <li key={tool} className={`rounded border px-2.5 py-1.5 text-[0.85rem] leading-tight ${t.border}`}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <Link tone={tone} />
        <Node tone={tone} label="Preview" strong>Doctor confirms before anything is saved</Node>
      </div>
      {caption ? (
        <Caption tone={tone}>
          The model never returns the final document. It can only propose these operations.
        </Caption>
      ) : null}
    </div>
  );
}
