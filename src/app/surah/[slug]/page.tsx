import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const surahNameSlug = slug.replace("-translated-in-luganda-quran-by-sheikh-nkata", "").replace(/-/g, " ");
  
  return {
    title: `${surahNameSlug.charAt(0).toUpperCase() + surahNameSlug.slice(1)} Translated in Luganda Quran by Sheikh Nkata`,
    description: `Listen to and download ${surahNameSlug} Quran translation in Luganda by Sheikh Sulaiman Nkata. High quality audio and clear translation.`,
  };
}

export async function generateStaticParams() {
  try {
    const querySnapshot = await getDocs(collection(db, "surah"));
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const slug = `${data.surahName.toLowerCase().replace(/ /g, "-")}-translated-in-luganda-quran-by-sheikh-nkata`;
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
  const surahNameFromSlug = slug.replace("-translated-in-luganda-quran-by-sheikh-nkata", "").replace(/-/g, " ");

  // Fetch all surahs and find the matching one (simplified lookup for SEO slug)
  const querySnapshot = await getDocs(collection(db, "surah"));
  const surahDoc = querySnapshot.docs.find(doc => {
    const data = doc.data();
    return data.surahName.toLowerCase() === surahNameFromSlug.toLowerCase();
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
    "name": `Surah ${surah.surahName} – Luganda Translation by Sheikh Nkata`,
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
                <a href={surah.audioURL} download={`${surah.surahName}.m4a`} className="btn-primary">
                  <i className="fas fa-download"></i> Download Audio
                </a>
                <span className="translator-label">Translated by Sheikh Ahmad Nkata</span>
              </div>
              <div className="action-column">
                <Link 
                  href={`/read/${surah.surahName.toLowerCase().replace(/ /g, "-")}-translated-by-sheikh-abdul-razak-matovu`} 
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
