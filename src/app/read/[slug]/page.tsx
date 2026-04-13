import fs from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

const SUFFIX = "-translated-by-sheikh-abdul-razak-matovu";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const surahSlugPart = slug.replace(SUFFIX, "");

  try {
    const filePath = path.join(process.cwd(), 'src/data/luganda_arabic_offline.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const allSurahs = JSON.parse(fileData);
    const surah = allSurahs.find((s: any) =>
      s.name_english.toLowerCase().replace(/ /g, "-") === surahSlugPart
    );

    if (surah) {
      return {
        title: `Surah ${surah.name_english} (${surah.chapter_id}) Luganda Translation – Sheikh Abdurazak Matovu`,
        description: `Read the complete Luganda translation of Surah ${surah.name_english} (${surah.name_arabic}) — ${surah.verses?.length || ""} ayahs. Translated by Sheikh Abdurazak Matovu. Clear Arabic text and Luganda meaning side by side.`,
        openGraph: {
          title: `Surah ${surah.name_english} Luganda – Sheikh Abdurazak Matovu`,
          description: `Read Surah ${surah.name_english} in Luganda. Written translation by Sheikh Abdurazak Matovu. Surah ${surah.chapter_id} of 114.`,
          type: "article",
          url: `https://lugandaquran.online/read/${slug}`,
        },
      };
    }
  } catch {}

  // Fallback
  const name = surahNameFromSlug.charAt(0).toUpperCase() + surahNameFromSlug.slice(1);
  return {
    title: `${name} Luganda Translation – Sheikh Abdurazak Matovu`,
    description: `Read the Luganda translation of Surah ${name} from the Holy Quran, translated by Sheikh Abdurazak Matovu. Clear Arabic text and Luganda meaning.`,
  };
}

export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/luganda_arabic_offline.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const allSurahs = JSON.parse(fileData);
    
    return allSurahs.map((surah: any) => ({
      slug: `${surah.name_english.toLowerCase().replace(/ /g, "-")}${SUFFIX}`
    }));
  } catch (error) {
    console.error("Error generating static params for read pages:", error);
    return [];
  }
}

export default async function ReadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Extract just the surah name part of the slug (remove the suffix)
  const surahSlugPart = slug.replace(SUFFIX, "");

  let surah = null;
  let allSurahs = [];
  try {
    const filePath = path.join(process.cwd(), 'src/data/luganda_arabic_offline.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    allSurahs = JSON.parse(fileData);
    // Match by generating a slug from the JSON name and comparing to the URL slug part
    surah = allSurahs.find((s: any) =>
      s.name_english.toLowerCase().replace(/ /g, "-") === surahSlugPart
    );
  } catch (error) {
    console.error("Error loading surah data:", error);
  }

  if (!surah) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ paddingTop: "150px", textAlign: "center" }}>
          <h2>Surah data not found</h2>
          <Link href="/" className="back-link">Back to Home</Link>
        </main>
        <Footer />
      </>
    );
  }

  const chapterId = surah.chapter_id;
  const prevSurah = allSurahs.find((s: any) => s.chapter_id === chapterId - 1);
  const nextSurah = allSurahs.find((s: any) => s.chapter_id === chapterId + 1);

  const getSlug = (s: any) => `${s.name_english.toLowerCase().replace(/ /g, "-")}${SUFFIX}`;

  return (
    <>
      <Navbar />
      <main className="reading-page" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container">
          <div className="reading-header">
            <Link href="/" className="back-link">
              <i className="fas fa-arrow-left"></i> Home
            </Link>
            <div className="surah-info-center">
              <h1>{surah.name_english}</h1>
              <h2 className="arabic-text">{surah.name_arabic}</h2>
              <p style={{ color: "var(--primary)", fontWeight: "600", marginTop: "10px" }}>
                Translation by Sheikh Abdul Razak Matovu
              </p>
            </div>
            <div className="reading-navigation">
              {prevSurah && (
                <Link href={`/read/${getSlug(prevSurah)}`} className="nav-btn" title="Previous Surah">
                  <i className="fas fa-chevron-left"></i>
                </Link>
              )}
              <span className="chapter-label">Surah {surah.chapter_id}</span>
              {nextSurah && (
                <Link href={`/read/${getSlug(nextSurah)}`} className="nav-btn" title="Next Surah">
                  <i className="fas fa-chevron-right"></i>
                </Link>
              )}
            </div>
          </div>

          <div className="bismillah-container">
            {chapterId !== 1 && chapterId !== 9 && (
              <p className="arabic-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            )}
          </div>

          <div className="verses-container">
            {surah.verses.map((v: any) => (
              <div key={v.verse} className="verse-item">
                <div className="verse-badge">{v.verse}</div>
                <div className="verse-content">
                  <p className="verse-arabic" dir="rtl">{v.arabic}</p>
                  <p className="verse-luganda">{v.luganda}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reading-footer-nav">
             {prevSurah && (
               <Link href={`/read/${getSlug(prevSurah)}`} className="btn-secondary">
                 <i className="fas fa-arrow-left"></i> Previous
               </Link>
             )}
             {nextSurah && (
               <Link href={`/read/${getSlug(nextSurah)}`} className="btn-secondary">
                 Next <i className="fas fa-arrow-right"></i>
               </Link>
             )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
