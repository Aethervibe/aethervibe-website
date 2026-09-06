import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const BASE = "https://www.aethervibe.com";

/**
 * 自动发现 app/ 下的所有页面路由。
 *
 * ⛔ 不再手写 sitemap —— 2026-08-29 诊断出的问题正是这个：
 * public/sitemap.xml 里只有 6 个 URL，13 篇 insights 只进去了 1 篇，
 * 且 lastmod 冻在 2026-05-09。12 篇文章从未被告知给搜索引擎。
 */
function pageMtime(...segments: string[]): Date {
  return fs.statSync(path.join(process.cwd(), ...segments, "page.tsx")).mtime;
}

function insightRoutes() {
  const dir = path.join(process.cwd(), "app", "insights");

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) =>
      fs.existsSync(path.join(dir, entry.name, "page.tsx"))
    )
    .map((entry) => ({
      url: `${BASE}/insights/${entry.name}`,
      lastModified: pageMtime("app", "insights", entry.name),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }))
    .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = insightRoutes();

  const insightsIndexLastModified = articles.length
    ? new Date(Math.max(...articles.map((a) => a.lastModified.getTime())))
    : pageMtime("app", "insights");

  return [
    {
      url: `${BASE}/`,
      lastModified: pageMtime("app"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/insights`,
      lastModified: insightsIndexLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles,
    {
      url: `${BASE}/open-questions`,
      lastModified: pageMtime("app", "open-questions"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/faq`,
      lastModified: pageMtime("app", "faq"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: pageMtime("app", "privacy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: pageMtime("app", "terms"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
