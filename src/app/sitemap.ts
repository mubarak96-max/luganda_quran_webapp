import { getSurahs } from "@/lib/firebase";
import { createAudioSurahSlug, createReadSurahSlug } from "@/lib/surahSlugs";

export default async function sitemap() {
  const baseUrl = "https://lugandaquran.online";

  // Fetch surahs for dynamic paths
  const allSurahs = await getSurahs();

  const surahUrls = allSurahs.map((surah: any) => ({
    url: `${baseUrl}/surah/${createAudioSurahSlug(surah.surahName)}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const readingUrls = allSurahs.map((surah: any) => ({
    url: `${baseUrl}/read/${createReadSurahSlug(surah.surahIndex, surah.surahName)}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/surahs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...surahUrls,
    ...readingUrls,
  ];
}
