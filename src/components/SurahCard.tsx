"use client";

import Link from "next/link";
import { createAudioSurahSlug } from "@/lib/surahSlugs";

export interface SurahCardProps {
  index: number;
  nameEnglish: string;
  translation: string;
  nameArabic: string;
  ayahCount: number;
  isActive?: boolean;
  lugandaName?: string;
}

const SurahCard: React.FC<SurahCardProps> = ({
  index,
  nameEnglish,
  translation,
  nameArabic,
  ayahCount,
  isActive = false,
  lugandaName,
}) => {
  const slug = createAudioSurahSlug(nameEnglish);

  return (
    <Link href={`/surah/${slug}`} className={`surah-item-simple ${isActive ? "active" : ""}`} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "15px 0", borderBottom: "1px solid #eee", textDecoration: "none", color: "inherit" }}>
      <div className="surah-index-simple" style={{ minWidth: "40px", fontSize: "18px", fontWeight: "700", color: "var(--gray)" }}>
        {index}
      </div>
      <div className="surah-card-info" style={{ flex: 1 }}>
        <h3 style={{ fontSize: "18px", margin: "0" }}>{nameEnglish}</h3>
        <p className="translation-text" style={{ fontSize: "14px", color: "var(--gray)", margin: "2px 0" }}>{translation}</p>
        {lugandaName && <p className="luganda-text" style={{ fontSize: "13px", color: "var(--primary)", fontWeight: "600" }}>{lugandaName}</p>}
      </div>
      <div className="surah-card-arabic" style={{ textAlign: "right" }}>
        <h3 className="arabic-text" style={{ fontSize: "20px", margin: "0" }}>{nameArabic}</h3>
        <p style={{ fontSize: "12px", color: "var(--gray)", margin: "0" }}>{ayahCount} Ayahs</p>
      </div>
    </Link>
  );
};

export default SurahCard;
