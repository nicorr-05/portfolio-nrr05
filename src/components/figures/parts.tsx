// Shared pieces for code-native diagrams. Figures size by container, not viewport,
// so the same diagram works in the article, the case header and the hover preview.

export type Tone = "field" | "paper";

export function toneClasses(tone: Tone) {
  return tone === "field"
    ? { box: "bg-field-deep/55 text-on-field", line: "bg-on-field/45", muted: "text-on-field/90", border: "border-on-field/25" }
    : { box: "bg-wash text-ink", line: "bg-muted/50", muted: "text-muted", border: "border-rule" };
}

export function Node({
  tone,
  label,
  children,
  strong = false,
}: {
  tone: Tone;
  label: string;
  children?: React.ReactNode;
  strong?: boolean;
}) {
  const t = toneClasses(tone);
  return (
    <div
      className={`min-w-0 rounded-md px-3.5 py-3 ${t.box} ${
        strong ? (tone === "field" ? "ring-1 ring-on-field/70" : "ring-1 ring-ink") : ""
      }`}
    >
      <div className={`text-[0.78rem] font-medium tracking-[0.02em] ${t.muted}`}>{label}</div>
      {children ? <div className="mt-1 text-[0.92rem] leading-snug">{children}</div> : null}
    </div>
  );
}

// Connector that is horizontal in a wide container and vertical in a narrow one.
export function Link({ tone, broken = false }: { tone: Tone; broken?: boolean }) {
  const t = toneClasses(tone);
  if (broken) {
    return (
      <div aria-hidden className="relative flex items-center justify-center self-stretch @xl:self-center">
        <div className="h-8 w-px border-l border-dashed border-status-critical @xl:h-px @xl:w-full @xl:min-w-10 @xl:border-l-0 @xl:border-t" />
        <span className="absolute grid size-6 place-items-center rounded-full bg-status-critical text-[0.8rem] font-bold text-white">
          <svg viewBox="0 0 12 12" className="size-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 3l6 6M9 3l-6 6" />
          </svg>
        </span>
      </div>
    );
  }
  return (
    <div aria-hidden className="flex items-center justify-center self-stretch @xl:self-center">
      <div className={`h-6 w-px ${t.line} @xl:h-px @xl:w-full @xl:min-w-6`} />
    </div>
  );
}

export function Caption({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return <p className={`mt-4 text-[0.9rem] leading-snug ${toneClasses(tone).muted}`}>{children}</p>;
}
