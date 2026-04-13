"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import SurahCard from "./SurahCard";

interface Surah {
  id: string;
  surahIndex: number;
  surahName: string;
  englishName: string;
  lugandaName: string;
  verses: number;
  nameArabic?: string;
}

const SurahList = ({ limitCount, initialData = [] }: { limitCount?: number; initialData?: Surah[] }) => {
  const [surahs, setSurahs] = useState<Surah[]>(initialData);
  const [loading, setLoading] = useState(initialData.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      // If we already have initialData, we might still want to check cache or sync,
      // but to follow SEO "don't fetch JS every time" for crawlers, we use initialData.
      if (initialData.length > 0 && surahs.length === 0) {
        setSurahs(initialData);
        setLoading(false);
      }

      try {
        // Only fetch if we don't have surahs
        if (surahs.length > 0) return;

        // 1. Check if we have cached data in localStorage
        const cachedSurahs = localStorage.getItem("luganda_quran_surahs");
        if (cachedSurahs) {
          const parsedSurahs = JSON.parse(cachedSurahs);
          if (parsedSurahs && parsedSurahs.length > 0) {
            setSurahs(parsedSurahs);
            setLoading(false);
            return;
          }
        }

        setLoading(true);
        const q = query(collection(db, "surah"), orderBy("surahIndex", "asc"), limit(114));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setError("No surahs found.");
        } else {
          const fetchedSurahs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Surah[];
          
          setSurahs(fetchedSurahs);
          localStorage.setItem("luganda_quran_surahs", JSON.stringify(fetchedSurahs));
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching surahs: ", err);
        setError("Failed to load surahs.");
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();
  }, [initialData, surahs.length]);

  const displaySurahs = limitCount ? surahs.slice(0, limitCount) : surahs;

  if (loading && surahs.length === 0) return <div className="loading">Loading Surahs...</div>;

  if (error) return <div className="loading" style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="surahs-grid">
      {displaySurahs.map((surah) => (
        <SurahCard 
          key={surah.id} 
          index={surah.surahIndex}
          nameEnglish={surah.surahName}
          translation={surah.englishName}
          nameArabic={surah.nameArabic || ""} // Fallback if Arabic name is missing
          ayahCount={surah.verses}
          lugandaName={surah.lugandaName}
        />
      ))}
    </div>
  );
};

export default SurahList;
