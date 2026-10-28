import { Caption, Link, Node, type Tone, toneClasses } from "./parts";

export function IspRoute({ tone = "paper", caption = true }: { tone?: Tone; caption?: boolean }) {
  const t = toneClasses(tone);
  return (
    <div className="@container">
      <div className="grid gap-8 @xl:gap-6">
        <div>
          <p className={`mb-3 text-[0.85rem] font-medium ${t.muted}`}>Before</p>
          <div className="grid grid-cols-1 @xl:grid-cols-[1fr_1.4fr_1fr] @xl:items-center">
            <Node tone={tone} label="Doctors">On two small Venezuelan ISPs</Node>
            <Link tone={tone} broken />
            <Node tone={tone} label="Vercel">IP ranges the route couldn&apos;t reach</Node>
          </div>
        </div>
        <div>
          <p className={`mb-3 text-[0.85rem] font-medium ${t.muted}`}>After</p>
          <div className="grid grid-cols-1 @xl:grid-cols-[1fr_0.7fr_1fr_0.7fr_1fr] @xl:items-center">
            <Node tone={tone} label="Doctors">Same two ISPs</Node>
            <Link tone={tone} />
            <Node tone={tone} label="Cloudflare" strong>DNS proxy, SSL Full (strict)</Node>
            <div aria-hidden className="relative flex items-center justify-center self-stretch @xl:self-center">
              <div className={`h-8 w-px ${t.line} @xl:h-px @xl:w-full`} />
              <span className={`absolute rounded-full px-2 py-0.5 text-[0.75rem] font-medium ${tone === "field" ? "bg-field text-on-field" : "bg-paper text-muted"}`}>
                HTTPS
              </span>
            </div>
            <Node tone={tone} label="Vercel">No change to the application</Node>
          </div>
        </div>
      </div>
      {caption ? (
        <Caption tone={tone}>Users on those ISPs connect to Cloudflare&apos;s IPs instead of Vercel&apos;s.</Caption>
      ) : null}
    </div>
  );
}
