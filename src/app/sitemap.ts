import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...cases.map((c) => ({
      url: `${SITE_URL}/work/${c.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
