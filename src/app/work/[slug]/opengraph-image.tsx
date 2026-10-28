import { cases, getCase } from "@/content/cases";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Case study by Nicolás Restrepo";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  return renderOg({ title: c?.shortTitle ?? "Case study", kicker: `Case study · Docguía` });
}
