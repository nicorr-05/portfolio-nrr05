import { DictationFlow } from "./DictationFlow";
import { IspRoute } from "./IspRoute";

// Compact system view shown in the hover preview on the home work list.
export function CasePreview({ slug }: { slug: string }) {
  return (
    <div className="p-6 text-on-field">
      {slug === "ai-in-clinical-workflows" ? (
        <DictationFlow tone="field" caption={false} />
      ) : (
        <IspRoute tone="field" caption={false} />
      )}
    </div>
  );
}
