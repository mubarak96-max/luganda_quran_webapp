"use client";

import Link from "next/link";

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
  const slug = `${nameEnglish.toLowerCase().replace(/ /g, "-")}-translated-in-luganda-quran-by-sheikh-nkata`;

  return (
    <Link href={`/surah/${slug}`} className={`surah-card ${isActive ? "active" : ""}`}>
      <div className="surah-card-index">
        <div className="diamond">
          <span>{index}</span>
        </div>
      </div>
      <div className="surah-card-info">
        <h3>{nameEnglish}</h3>
        <p className="translation-text">{translation}</p>
        {lugandaName && <p className="luganda-text">{lugandaName}</p>}
      </div>
      <div className="surah-card-arabic">
        {nameArabic ? (
          <h3 className="arabic-text">{nameArabic}</h3>
        ) : (
          <h3 className="ayah-count-heading">{ayahCount} Ayahs</h3>
        )}
        <p className="verses-label">{nameArabic ? `${ayahCount} Ayahs` : "verses"}</p>
      </div>
    </Link>
  );
};

export default SurahCard;
