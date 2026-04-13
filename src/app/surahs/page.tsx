import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurahList from "@/components/SurahList";
import Link from "next/link";
import React from "react";
import { getSurahs } from "@/lib/firebase";

export const metadata = {
  title: "All 114 Quran Surahs in Luganda – Sheikh Sulaiman Nkata",
  description: "Browse and listen to all 114 surahs of the Holy Quran with Luganda audio translation by Sheikh Sulaiman Nkata. Access full audio and text translations.",
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
