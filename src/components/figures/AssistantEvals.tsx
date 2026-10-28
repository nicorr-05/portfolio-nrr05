// Part-to-whole bars for the assistant's evaluation. Status steps from the dataviz
// reference palette; every segment is labeled, so color never carries meaning alone.

type Segment = { label: string; value: number; tone: "good" | "neutral" | "critical" };
type Row = { title: string; note: string; segments: Segment[] };

const rows: Row[] = [
  {
    title: "Review bank",
    note: "Seeded questions, human review",
    segments: [
      { label: "Good", value: 57, tone: "good" },
      { label: "Escalated correctly", value: 3, tone: "neutral" },
      { label: "Wrong", value: 0, tone: "critical" },
    ],
  },
  {
    title: "Production ratings",
    note: "Ratings from users",
    segments: [
      { label: "Good", value: 293, tone: "good" },
      { label: "Bad", value: 7, tone: "critical" },
    ],
  },
];

const fill = { good: "bg-status-good", neutral: "bg-status-neutral", critical: "bg-status-critical" };

export function AssistantEvals() {
  return (
    <div className="grid gap-8">
      {rows.map((row) => {
        const total = row.segments.reduce((s, x) => s + x.value, 0);
        return (
          <div key={row.title}>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="font-medium">{row.title}</p>
              <p className="text-[0.9rem] text-muted">
                {row.note} · <span className="tabular">{total}</span> total
              </p>
            </div>
            <div className="flex h-3 gap-[2px]" role="group" aria-label={`${row.title}: ${row.segments.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(", ")}`}>
              {row.segments
                .filter((s) => s.value > 0)
                .map((s, i) => (
                  <div
                    key={s.label}
                    tabIndex={0}
                    aria-label={`${s.value} ${s.label.toLowerCase()}`}
                    className={`group/seg relative h-full min-w-[3px] rounded-[2px] first:rounded-l-[4px] last:rounded-r-[4px] ${fill[s.tone]} outline-offset-2`}
                    style={{ flexGrow: s.value, flexBasis: 0 }}
                  >
                    <span className={`pointer-events-none absolute bottom-full z-10 mb-2 whitespace-nowrap ${i === 0 ? "left-0" : "right-0"} rounded bg-ink px-2 py-1 text-[0.8rem] text-paper opacity-0 transition-opacity duration-200 group-hover/seg:opacity-100 group-focus-visible/seg:opacity-100`}>
                      <span className="tabular">{s.value}</span> {s.label.toLowerCase()} · {Math.round((s.value / total) * 1000) / 10}%
                    </span>
                  </div>
                ))}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[0.9rem]">
              {row.segments.map((s) => (
                <li key={s.label} className="inline-flex items-center gap-2">
                  <span aria-hidden className={`size-2.5 rounded-[2px] ${fill[s.tone]}`} />
                  <span className="tabular font-medium">{s.value}</span>
                  <span className="text-muted">{s.label.toLowerCase()}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
