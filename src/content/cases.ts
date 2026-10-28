// Case text is the author's own and is used verbatim. Edit figures only with him.

export type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "figure"; figure: FigureId };

export type FigureId = "dictation-flow" | "assistant-phases" | "assistant-evals" | "isp-route";

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  summary: string;
  meta: { label: string; value: string }[];
  highlights: string[];
  blocks: Block[];
};

const aiInClinicalWorkflows: CaseStudy = {
  slug: "ai-in-clinical-workflows",
  index: "01",
  title: "Shipping AI into clinical workflows without letting it make things up",
  shortTitle: "Shipping AI into clinical workflows",
  summary:
    "Clinical dictation that edits the patient record through structured operations, and an in-app assistant measured with evals and traces instead of vibes.",
  meta: [
    { label: "Role", value: "Founding Engineer & CTO" },
    { label: "Company", value: "Docguía" },
    { label: "Domain", value: "Healthcare, EMR" },
    { label: "Focus", value: "LLM features, evals, tracing" },
  ],
  highlights: ["16 eval suites", "57 of 60 good, 0 wrong", "~2,500 conversations"],
  blocks: [
    { type: "h2", text: "Context", id: "context" },
    {
      type: "p",
      text: "Docguía is a healthcare platform for medical specialists in Venezuela (EMR, digital prescriptions, scheduling, payments). As founding engineer and CTO I shipped two AI features into the product doctors use every day: clinical dictation that edits the patient record, and an in-app assistant that answers \"how do I do X?\". Both live in a domain where a confident wrong answer is worse than no answer.",
    },

    { type: "h2", text: "1. Clinical dictation", id: "clinical-dictation" },
    { type: "h3", text: "Problem" },
    {
      type: "p",
      text: "Doctors dictate during the consultation and the text has to be merged into a clinical note that already exists. The first version asked the model to rewrite the whole document, and it sometimes deleted content nobody asked it to delete. In a medical record, that's unacceptable.",
    },
    { type: "h3", text: "Decision" },
    {
      type: "p",
      text: "I redesigned it around structured operations instead of letting the model return the final document. A planner model decides what to change and a faster executor applies it through three tools only: replace a fragment, append at the end, or finish without changes. The doctor sees a preview and confirms before anything is saved. I also dropped a \"search and patch\" strategy that added complexity without improving results, and added validation for duplicated sections.",
    },
    { type: "figure", figure: "dictation-flow" },
    { type: "h3", text: "How I kept it honest" },
    {
      type: "ul",
      items: [
        "Preservation rules: never delete or replace content without an explicit instruction.",
        "Every run is traced step by step, with cost per call, so I could see where it went wrong.",
        "Regression evals built from real traces, asserting what must be preserved, what must never appear and a maximum preservation loss ratio, wired to fail the run on regression. Patient data stays in a private, git-ignored folder.",
        "Later, a clinical eval framework with 16 suites that compares every new model against a baseline before switching.",
      ],
    },
    { type: "h3", text: "An AI mistake I caught" },
    {
      type: "p",
      text: "Reviewing outputs, I noticed the model was \"over-medicalizing\" what doctors said: turning colloquial phrasing into harder clinical terms and raising the level of certainty. A doctor saying a patient \"maybe has gastritis\" could end up as a diagnosis. I changed the instructions to keep the same level of certainty and never upgrade or over-diagnose, and added it to the eval cases so it can't silently come back.",
    },
    { type: "h3", text: "Result" },
    {
      type: "p",
      text: "Tens of thousands of dictation calls since launch, at a cost of a few hundred dollars, with no content loss regressions after the redesign.",
    },

    { type: "h2", text: "2. In-app assistant", id: "in-app-assistant" },
    { type: "h3", text: "Problem" },
    {
      type: "p",
      text: "Doctors and their assistants kept asking support how to do things inside the app. I built an assistant that answers from the help center, the user's account state and what they have on screen.",
    },
    { type: "h3", text: "Architecture" },
    {
      type: "p",
      text: "A small model routes intent with a typed schema, then a larger open-weight model runs a phase-based orchestration I wrote by hand: screen context, then help center, then account, then final answer, with specific tools active or forced at each step and a cap on steps and tokens. Conversations persist with short-lived sessions.",
    },
    { type: "figure", figure: "assistant-phases" },
    { type: "h3", text: "Decisions" },
    {
      type: "p",
      text: "I removed the tool that let the agent act on the UI and kept it as a guide only, removed subscription data from its context, and kept patient tools disabled in production. Less power, fewer ways to fail.",
    },
    { type: "h3", text: "AI mistakes I caught and fixed" },
    {
      type: "ul",
      items: [
        "It answered pricing and product questions from memory. Fixed with grounding rules: no claims about product, prices or UI without evidence from a tool; otherwise hand off to support on WhatsApp.",
        "It answered from search snippets. Now it has to read the full article after a search with results.",
        "It invented where a button was in the UI. Added a final consistency pass.",
        "It \"corrected\" Venezuelan terms into other synonyms. Added a terminology lock.",
        "Some bad answers came from the help center itself, so I fixed the article, not the prompt.",
      ],
    },
    { type: "h3", text: "Evaluation" },
    {
      type: "p",
      text: "I built an admin eval panel with seeded questions and human review. In the review bank, 57 of 60 answers were good, 3 escalated correctly and 0 were wrong. In production ratings, 293 good vs 7 bad.",
    },
    { type: "figure", figure: "assistant-evals" },
    { type: "h3", text: "Result" },
    { type: "p", text: "About 2,500 conversations from about 1,600 users since March 2026." },

    { type: "h2", text: "What this shows", id: "what-this-shows" },
    {
      type: "p",
      text: "Putting LLMs into a sensitive, real workflow; designing so the model can't do damage (structured operations, previews, fewer tools); measuring it with evals and traces instead of vibes; and catching specific AI failures and making sure they don't come back.",
    },
  ],
};

const whenTheBugIsntInYourCode: CaseStudy = {
  slug: "when-the-bug-isnt-in-your-code",
  index: "02",
  title: "When the bug isn't in your code: fixing access for users on two Venezuelan ISPs",
  shortTitle: "When the bug isn't in your code",
  summary:
    "Doctors on two small ISPs couldn't open the product while every dashboard looked healthy. Diagnosed at the network level and fixed with no code change.",
  meta: [
    { label: "Role", value: "Founding Engineer & CTO" },
    { label: "Company", value: "Docguía" },
    { label: "Stack", value: "Next.js on Vercel, Cloudflare" },
    { label: "Focus", value: "Network diagnosis" },
  ],
  highlights: ["18 doctors back", "~3 hours", "$0"],
  blocks: [
    { type: "h2", text: "Context", id: "context" },
    {
      type: "p",
      text: "Docguía is a healthcare platform for medical specialists in Venezuela with 7,000+ daily active users. The web app runs on Next.js on Vercel, with a Django and Node backend on AWS. I was the founding engineer and CTO.",
    },
    { type: "h2", text: "The problem", id: "the-problem" },
    {
      type: "p",
      text: "A group of doctors started seeing a generic \"page not available\" screen, the kind you get when a site is blocked. It was intermittent, our monitoring looked healthy, and we couldn't reproduce it from our own connections, so it would have been easy to blame the users' internet. It affected 18 doctors, a small group, but they were active users who couldn't open the product at all.",
    },
    { type: "h2", text: "Diagnosis", id: "diagnosis" },
    {
      type: "p",
      text: "Using Vercel's firewall analytics broken down by network, I found the affected users all came from two small Venezuelan ISPs. Their traffic wasn't being blocked on our side. The route from those ISPs to Vercel's IP ranges was broken, so requests never reached us reliably. Nothing in our code or infrastructure had changed.",
    },
    { type: "h2", text: "Decision", id: "decision" },
    {
      type: "p",
      text: "I put Cloudflare in front of Vercel as a DNS proxy: moved the domain's nameservers to Cloudflare, pointed the record to Vercel with the proxy enabled, and set SSL to Full (strict) to avoid redirect loops. Users on those ISPs now connect to Cloudflare's IPs instead of Vercel's, and Cloudflare talks to Vercel over HTTPS behind the scenes.",
    },
    { type: "figure", figure: "isp-route" },
    { type: "h3", text: "Why Cloudflare and not something else" },
    {
      type: "ul",
      items: [
        "Cloudflare has strong presence and peering in Latin America, so small local ISPs almost always have a good route to it.",
        "CloudFront would keep us in the same AWS-style routing that was failing.",
        "Fastly or Bunny have less regional presence, so a lower chance of fixing the route.",
        "Migrating off Vercel was disproportionate for a problem affecting two small ISPs.",
        "Asking doctors to install a VPN is a workaround, not a fix.",
      ],
    },
    {
      type: "p",
      text: "The whole change took about 3 hours and cost $0 on Cloudflare's free plan, with no change to the application.",
    },
    { type: "h2", text: "Tradeoff", id: "tradeoff" },
    {
      type: "p",
      text: "Behind Cloudflare, Vercel sees Cloudflare's IPs instead of the users' real IPs, so the per-ISP view that helped me diagnose this is no longer visible in Vercel by default. I accepted that to get the 18 doctors back in quickly; restoring it means forwarding the original IP header from Cloudflare.",
    },
    { type: "h2", text: "Result", id: "result" },
    {
      type: "p",
      text: "The reports stopped and all 18 affected doctors could use Docguía normally again. No code changes, no migration, no new cost.",
    },
    { type: "h2", text: "What this shows", id: "what-this-shows" },
    {
      type: "p",
      text: "Owning the problem from the user's side when every dashboard says things are fine, diagnosing at the network level in an environment with little documentation, and choosing the fix with the smallest blast radius instead of the biggest one.",
    },
  ],
};

export const cases: CaseStudy[] = [aiInClinicalWorkflows, whenTheBugIsntInYourCode];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function nextCase(slug: string) {
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length];
}
