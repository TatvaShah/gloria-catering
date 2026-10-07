import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date("2026-10-07"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
