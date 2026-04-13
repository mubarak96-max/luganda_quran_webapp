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
  const surahName = slug.replace(SUFFIX, "").replace(/-/g, " ");
  const formattedName = surahName.charAt(0).toUpperCase() + surahName.slice(1);
  
  return {
    title: `${formattedName} Luganda Translation - Sheikh Abdul Razak Matovu`,
    description: `Read the Luganda translation of Surah ${formattedName} from the Holy Quran, translated by Sheikh Abdul Razak Matovu. Clear Arabic text and Luganda meaning.`,
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
  const surahNameFromSlug = slug.replace(SUFFIX, "").replace(/-/g, " ");

  let surah = null;
  let allSurahs = [];
  try {
    const filePath = path.join(process.cwd(), 'src/data/luganda_arabic_offline.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    allSurahs = JSON.parse(fileData);
    surah = allSurahs.find((s: any) => s.name_english.toLowerCase() === surahNameFromSlug.toLowerCase());
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
