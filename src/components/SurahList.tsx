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

const SurahList = ({ limitCount }: { limitCount?: number }) => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        // 1. Check if we have cached data in localStorage
        const cachedSurahs = localStorage.getItem("luganda_quran_surahs");
        if (cachedSurahs) {
          const parsedSurahs = JSON.parse(cachedSurahs);
          if (parsedSurahs && parsedSurahs.length > 0) {
            setSurahs(parsedSurahs);
            setLoading(false);
            return; // Skip Firebase if we have data
          }
        }

        setLoading(true);
        const q = query(collection(db, "surah"), orderBy("surahIndex", "asc"), limit(114));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setError("No surahs found in the 'surah' collection. Please check the collection name in Firebase.");
        } else {
          const fetchedSurahs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Surah[];
          
          setSurahs(fetchedSurahs);
          // 2. Save to localStorage for next time
          localStorage.setItem("luganda_quran_surahs", JSON.stringify(fetchedSurahs));
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching surahs: ", err);
        setError("Failed to connect to Firebase. Please check your Firestore collection and permissions.");
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

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
