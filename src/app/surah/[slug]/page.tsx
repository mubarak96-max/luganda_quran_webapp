import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadAudioButton from "@/components/DownloadAudioButton";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import {
  AUDIO_SURAH_SUFFIX,
  createAudioSurahSlug,
  createReadSurahSlug,
  slugifySurahName,
  stripSuffix,
} from "@/lib/surahSlugs";

function getSurahNameSlug(slug: string) {
  return slugifySurahName(stripSuffix(slug, AUDIO_SURAH_SUFFIX).replace(/^\d+-/, ""));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const surahNameFromSlug = stripSuffix(slug, AUDIO_SURAH_SUFFIX).replace(/^\d+-/, "").replace(/-/g, " ");
  const surahSlugFromUrl = getSurahNameSlug(slug);

  try {
    const querySnapshot = await getDocs(collection(db, "surah"));
    const surahDoc = querySnapshot.docs.find(
      (doc) => slugifySurahName(doc.data().surahName) === surahSlugFromUrl
    );

    if (surahDoc) {
      const surah = surahDoc.data();
      return {
        title: `Surah ${surah.surahName} (${surah.surahIndex}) in Luganda – Sheikh Ismail Sulaiman Nkata`,
        description: `Listen to Surah ${surah.surahName} — Surah ${surah.surahIndex} of 114 — translated in Luganda by Sheikh Ismail Sulaiman Nkata. Free audio stream. ${surah.englishName ? `"${surah.englishName}"` : ""} with Luganda meaning explained.`,
        openGraph: {
          title: `Surah ${surah.surahName} Luganda Translation – Sheikh Ismail Sulaiman Nkata`,
          description: `Free Luganda audio for Surah ${surah.surahName} (${surah.surahIndex}) by Sheikh Ismail Sulaiman Nkata.`,
          type: "website",
          url: `https://lugandaquran.online/surah/${slug}`,
        },
      };
    }
  } catch { }

  // Fallback
  const name = surahNameFromSlug.charAt(0).toUpperCase() + surahNameFromSlug.slice(1);
  return {
    title: `Surah ${name} Luganda Translation – Sheikh Ismail Sulaiman Nkata`,
    description: `Listen to Surah ${name} translated in Luganda by Sheikh Ismail Sulaiman Nkata. Free audio stream of all 114 Quran surahs in Luganda.`,
  };
}

export async function generateStaticParams() {
  try {
    const querySnapshot = await getDocs(collection(db, "surah"));
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const slug = createAudioSurahSlug(data.surahName);
      return { slug };
    });
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function SurahPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Extract the surah name from the slug
  const surahNameFromSlug = stripSuffix(slug, AUDIO_SURAH_SUFFIX).replace(/^\d+-/, "").replace(/-/g, " ");
  const surahSlugFromUrl = getSurahNameSlug(slug);

  // Fetch all surahs and find the matching one (simplified lookup for SEO slug)
  const querySnapshot = await getDocs(collection(db, "surah"));
  const surahDoc = querySnapshot.docs.find(doc => {
    const data = doc.data();
    return slugifySurahName(data.surahName) === surahSlugFromUrl;
  });

  if (!surahDoc) {
    return (
      <div className="loading" style={{ paddingTop: "150px" }}>
        <h2>Surah not found</h2>
        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  const surah = surahDoc.data();

  const schema = {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    "name": `Surah ${surah.surahName} – Luganda Translation by Sheikh Ismail Sulaiman Nkata`,
    "description": `Listen to Surah ${surah.surahName} (Surah ${surah.surahIndex}) translated in Luganda by Sheikh Ismail Sulaiman Nkata. High quality audio translation.`,
    "inLanguage": "lg",
    "encodingFormat": "audio/mpeg",
    "url": `https://lugandaquran.online/surah/${slug}`,
    "contentUrl": surah.audioURL,
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="surah-details-page" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container">
          <Link href="/" className="back-link" style={{ marginBottom: "30px", display: "inline-block" }}>
            <i className="fas fa-arrow-left"></i> Back to all surahs
          </Link>

          <div className="surah-details-content">
            <div className="surah-header-simple" style={{ marginBottom: "40px" }}>
              <div className="surah-titles">
                <span className="badge" style={{ marginBottom: "10px", display: "inline-block" }}>Surah {surah.surahIndex}</span>
                <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>{surah.surahName}</h1>
                <p className="translation" style={{ fontSize: "20px", color: "var(--gray)", marginBottom: "5px" }}>{surah.englishName} — {surah.lugandaName}</p>
                {surah.nameArabic && <h2 className="arabic-text-big" style={{ marginTop: "20px", fontSize: "56px" }}>{surah.nameArabic}</h2>}
                <span className="badge" style={{ marginTop: "10px" }}>{surah.location}</span>
              </div>
            </div>

            <div className="surah-actions-simple" style={{ display: "flex", gap: "20px", marginBottom: "50px", flexWrap: "wrap" }}>
              <div className="action-column-simple">
                <DownloadAudioButton
                  audioUrl={surah.audioURL}
                  filename={`${surah.surahName}.m4a`}
                />
                <p className="translator-label" style={{ marginTop: "10px" }}>Translated by Sheikh Ismail Sulaiman Nkata</p>
              </div>
              <div className="action-column-simple">
                <Link
                  href={`/read/${createReadSurahSlug(surah.surahIndex, surah.surahName)}`}
                  className="btn-secondary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "50px", fontWeight: "700" }}
                >
                  <i className="fas fa-book-open"></i> Read Luganda
                </Link>
                <p className="translator-label" style={{ marginTop: "10px" }}>Translated by Sheikh Abdul Razak Matovu</p>
              </div>
            </div>

            {surah.surahTheme && (
              <div className="surah-theme-section" style={{ borderTop: "1px solid #eee", paddingTop: "40px" }}>
                <h2 style={{ marginBottom: "25px", fontSize: "28px", color: "var(--primary)" }}>Surah Context</h2>
                <div className="theme-text-normal" style={{ fontSize: "19px", lineHeight: "1.8", color: "#333", whiteSpace: "pre-wrap" }}>
                  {surah.surahTheme}
                </div>
              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
