export const summary =
  "Full stack engineer with 5 years taking software from ambiguous requirements to production for US and Latin American clients in AI, fintech and healthtech. As founding engineer and CTO of Docguía, I built a healthcare platform to 7,000+ daily active users and shipped AI into clinical workflows. I own the customer relationship, the code and the outcome.";

export type Job = {
  company: string;
  role: string;
  client?: string;
  period: string;
  detail: string;
};

export const experience: Job[] = [
  {
    company: "Docguía",
    role: "Founding Engineer & CTO",
    period: "Aug 2025 - Oct 2026",
    detail:
      "Healthcare platform for medical specialists: EMR, digital prescriptions, scheduling, payments and pharmacy integrations. Zero to 7,000+ daily active users. Next.js and Django on AWS ECS, PostgreSQL on RDS. AI in clinical dictation and an in-app assistant, with evals and tracing. React Native app in both stores. Led a team of four.",
  },
  {
    company: "PeakActivity",
    role: "Software Engineer",
    client: "TradeStation",
    period: "Mar 2025 - Aug 2025",
    detail:
      "Reusable Next.js component system integrated with Contentstack behind TradeStation's public website, a FINRA-regulated US brokerage.",
  },
  {
    company: "Alluxi",
    role: "Software Engineer",
    period: "Jul 2023 - Mar 2025",
    detail:
      "Next.js and Django architecture for 100,000+ active users, AI-driven recruitment platform, real-time auctions with WebSockets.",
  },
  {
    company: "Encora",
    role: "Software Engineer I & II",
    client: "Replicant",
    period: "Sep 2021 - Jul 2023",
    detail: "Client-facing engineer embedded with Replicant (conversational AI for contact centers).",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Product", items: ["React", "Next.js", "TypeScript", "React Native"] },
  { group: "Backend", items: ["Node.js", "tRPC", "Django", "Python", "PostgreSQL"] },
  { group: "Infrastructure", items: ["AWS", "Vercel", "Cloudflare"] },
  { group: "Applied AI", items: ["Vercel AI SDK", "LangChain", "LangGraph", "Evals and tracing for LLM features"] },
];
