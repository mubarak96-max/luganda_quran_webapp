import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurahList from "@/components/SurahList";
import Link from "next/link";
import React from "react";
import { getSurahs } from "@/lib/firebase";

export const metadata = {
  title: "Download Luganda Quran Translation Audio - Browse All Surahs",
  description: "Browse all 114 surahs and download Luganda Quran translation audio by Sheikh Sulaiman Nkata. Listen online or save each surah for offline listening.",
};

export default async function AllSurahsPage() {
  const allSurahs = await getSurahs() as any;

  return (
    <>
      <Navbar />
      <main className="all-surahs-page" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px" }}>
            <h1>All Quran Surahs in Luganda</h1>
            <Link href="/" className="back-link">
              <i className="fas fa-arrow-left"></i> Home
            </Link>
          </div>
          <SurahList initialData={allSurahs} />
        </div>
      </main>
      <Footer />
    </>
  );
}
