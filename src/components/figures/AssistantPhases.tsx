import { Caption, Link, Node, type Tone } from "./parts";

const phases = ["Screen context", "Help center", "Account", "Final answer"];

export function AssistantPhases({ tone = "paper" }: { tone?: Tone }) {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 @xl:grid-cols-[1.1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] @xl:items-center">
        <Node tone={tone} label="Router, small model" strong>Intent with a typed schema</Node>
        {phases.map((p, i) => (
          <PhaseStep key={p} tone={tone} label={`Phase ${i + 1}`} text={p} />
        ))}
      </div>
      <Caption tone={tone}>
        A larger open-weight model runs the phases in order, with specific tools active or forced at each step and a
        cap on steps and tokens.
      </Caption>
    </div>
  );
}

function PhaseStep({ tone, label, text }: { tone: Tone; label: string; text: string }) {
  return (
    <>
      <Link tone={tone} />
      <Node tone={tone} label={label}>{text}</Node>
    </>
  );
}
