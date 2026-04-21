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
  } catch {}

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
          
          <div className="surah-detail-card">
            <div className="surah-header">
              <div className="surah-index-big">
                <span>{surah.surahIndex}</span>
              </div>
              <div className="surah-titles">
                <h1>{surah.surahName}</h1>
                <p className="translation">{surah.englishName}</p>
                <p className="luganda">{surah.lugandaName}</p>
              </div>
              <div className="surah-arabic-title">
                {surah.nameArabic && <h2 className="arabic-text-big">{surah.nameArabic}</h2>}
                <span className="badge">{surah.location}</span>
              </div>
            </div>
            
            <div className="surah-actions">
              <div className="action-column">
                <DownloadAudioButton
                  audioUrl={surah.audioURL}
                  filename={`${surah.surahName}.m4a`}
                />
                <span className="translator-label">Translated by Sheikh Ismail Sulaiman Nkata</span>
              </div>
              <div className="action-column">
                <Link 
                  href={`/read/${createReadSurahSlug(surah.surahIndex, surah.surahName)}`}
                  className="btn-secondary"
                >
                  <i className="fas fa-book-open"></i> Read Luganda
                </Link>
                <span className="translator-label">Translated by Sheikh Abdul Razak Matovu</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
