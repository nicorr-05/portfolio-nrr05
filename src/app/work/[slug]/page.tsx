import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactFooter } from "@/components/ContactFooter";
import { DictationFlow } from "@/components/figures/DictationFlow";
import { Figure } from "@/components/figures/Figure";
import { IspRoute } from "@/components/figures/IspRoute";
import { ArrowRight } from "@/components/icons";
import { SiteNav } from "@/components/SiteNav";
import { type Block, cases, getCase, nextCase } from "@/content/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { type: "article", title: c.title, description: c.summary, url: `/work/${c.slug}` },
  };
}

export default async function CasePage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const c = getCase(slug);
  if (!c) notFound();
  const next = nextCase(c.slug);
  // The lead figure opens the case in the gray band, so it isn't repeated inline.
  const lead = c.slug === "ai-in-clinical-workflows" ? "dictation-flow" : "isp-route";
  const blocks = c.blocks.filter((b) => !(b.type === "figure" && b.figure === lead));
  const toc = c.blocks.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");

  return (
    <>
      <SiteNav />
      <main>
        <header className="wrap pt-10 pb-16 sm:pt-16 sm:pb-24">
          <Link href="/#work" className="group inline-flex items-center gap-2 text-[0.95rem] text-muted no-underline hover:text-ink">
            <ArrowRight className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All work
          </Link>
          <h1 className="headline mt-8 max-w-[19ch] text-[clamp(2.5rem,6.4vw,6rem)]">{c.title}</h1>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-rule pt-6 md:grid-cols-4">
            {c.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[0.85rem] text-muted">{m.label}</dt>
                <dd className="mt-1 text-[1.02rem] leading-snug">{m.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="bg-field text-on-field">
          <div className="wrap py-14 sm:py-20">
            {c.slug === "ai-in-clinical-workflows" ? <DictationFlow tone="field" /> : <IspRoute tone="field" />}
          </div>
        </div>

        <div className="wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-10 grid gap-2.5 text-[0.92rem]">
              {toc.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="text-muted no-underline transition-colors hover:text-ink">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="prose-measure min-w-0">
            {blocks.map((b, i) => (
              <CaseBlock key={i} block={b} first={i === 0} />
            ))}
          </article>
        </div>

        <section aria-label="Next case" className="border-t border-rule">
          <Link href={`/work/${next.slug}`} className="group wrap block py-20 no-underline sm:py-28">
            <span className="text-[0.95rem] text-muted">Next case</span>
            <span className="mt-4 flex items-end justify-between gap-8">
              <span className="headline max-w-[16ch] text-[clamp(2.4rem,6vw,5.5rem)] transition-transform duration-700 ease-[var(--ease-out)] group-hover:translate-x-3">
                {next.shortTitle}
              </span>
              <span className="mb-3 grid size-16 shrink-0 place-items-center rounded-full border border-rule transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper sm:size-20">
                <ArrowRight className="size-6" />
              </span>
            </span>
          </Link>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}

function CaseBlock({ block, first }: { block: Block; first: boolean }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={block.id} className={`headline scroll-mt-10 text-[clamp(1.9rem,3.4vw,2.6rem)] ${first ? "" : "mt-20"} mb-6`}>
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-10 mb-3 text-[1.15rem] font-semibold tracking-[-0.005em]">{block.text}</h3>;
    case "p":
      return <p className="mb-5 text-[1.125rem] leading-[1.7] text-pretty">{block.text}</p>;
    case "ul":
      return (
        <ul className="mb-6 grid gap-3">
          {block.items.map((item) => (
            <li key={item} className="relative pl-6 text-[1.125rem] leading-[1.65]">
              <span aria-hidden className="absolute left-1 top-[0.62em] size-1.5 rounded-full bg-ink" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "figure":
      return <Figure id={block.figure} />;
  }
}
