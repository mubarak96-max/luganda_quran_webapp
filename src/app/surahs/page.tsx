import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurahList from "@/components/SurahList";
import Link from "next/link";
import React from "react";

export default function AllSurahsPage() {
  return (
    <>
      <Navbar />
      <main className="all-surahs-page" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px" }}>
            <h1>All Quran Surahs</h1>
            <Link href="/" className="back-link">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <SurahList />
        </div>
      </main>
      <Footer />
    </>
  );
}
