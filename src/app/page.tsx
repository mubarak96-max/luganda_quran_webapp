import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurahList from "@/components/SurahList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <section id="surahs" style={{ padding: "100px 0" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "36px" }}>The Noble Quran</h2>
            <SurahList limitCount={10} />
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <Link href="/surahs" className="btn-secondary">
                See All Surahs <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
