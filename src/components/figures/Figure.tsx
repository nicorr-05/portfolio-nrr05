import type { FigureId } from "@/content/cases";
import { AssistantEvals } from "./AssistantEvals";
import { AssistantPhases } from "./AssistantPhases";
import { DictationFlow } from "./DictationFlow";
import { IspRoute } from "./IspRoute";

const labels: Record<FigureId, string> = {
  "dictation-flow": "Clinical dictation as structured operations",
  "assistant-phases": "Assistant orchestration, phase by phase",
  "assistant-evals": "Assistant evaluation results",
  "isp-route": "Routing before and after Cloudflare",
};

// Inline figure inside the case article, slightly wider than the text column.
export function Figure({ id }: { id: FigureId }) {
  return (
    <figure className="my-12 rounded-xl bg-wash p-5 sm:p-8" aria-label={labels[id]}>
      {id === "dictation-flow" && <DictationFlow />}
      {id === "assistant-phases" && <AssistantPhases />}
      {id === "assistant-evals" && <AssistantEvals />}
      {id === "isp-route" && <IspRoute />}
    </figure>
  );
}
