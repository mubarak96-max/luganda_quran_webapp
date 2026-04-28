import { getSurahs, type SurahRecord } from "@/lib/firebase";
import { blogPosts } from "@/lib/blogPosts";
import { createAudioSurahSlug, createReadSurahSlug } from "@/lib/surahSlugs";

export default async function sitemap() {
  const baseUrl = "https://lugandaquran.online";

  // Fetch surahs for dynamic paths
  const allSurahs: SurahRecord[] = await getSurahs();

  const surahUrls = allSurahs.map((surah) => ({
    url: `${baseUrl}/surah/${createAudioSurahSlug(surah.surahName)}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const readingUrls = allSurahs.map((surah) => ({
    url: `${baseUrl}/read/${createReadSurahSlug(surah.surahIndex, surah.surahName)}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/surahs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogUrls,
    ...surahUrls,
    ...readingUrls,
  ];
}
