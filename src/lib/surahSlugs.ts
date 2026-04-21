export const READ_SURAH_SUFFIX = "-translated-by-sheikh-abdul-razak-matovu";
export const AUDIO_SURAH_SUFFIX = "-translated-in-luganda-quran-by-sheikh-nkata";

export function slugifySurahName(name: string) {
  return name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['\u2018\u2019`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function createReadSurahSlug(chapterId: number | string, name: string) {
  return `${chapterId}-${slugifySurahName(name)}${READ_SURAH_SUFFIX}`;
}

export function createAudioSurahSlug(name: string) {
  return `${slugifySurahName(name)}${AUDIO_SURAH_SUFFIX}`;
}

export function stripSuffix(slug: string, suffix: string) {
  const decodedSlug = decodeSlug(slug);
  return decodedSlug.endsWith(suffix)
    ? decodedSlug.slice(0, -suffix.length)
    : decodedSlug;
}

export function decodeSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}
