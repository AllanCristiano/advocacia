import type { MetadataRoute } from "next";
import { site, areas, team, articles } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    { url: `${base}/`, priority: 1 },
    ...areas.map((a) => ({ url: `${base}/areas-de-atuacao/${a.slug}`, priority: 0.8 })),
    ...team.map((l) => ({ url: `${base}/equipe/${l.slug}`, priority: 0.6 })),
    ...articles.map((a) => ({ url: `${base}/artigos/${a.slug}`, lastModified: a.date, priority: 0.6 })),
    { url: `${base}/politica-de-privacidade`, priority: 0.2 },
  ];
}
