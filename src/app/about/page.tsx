import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Luganda Quran Online",
  description: "Learn about the mission behind Luganda Quran Online and the people who made it possible, including Sheikh Ismail Sulaiman Nkata and Sheikh Abdurazak Matovu.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", textAlign: "center" }}>About Luganda Quran Online</h1>
            
            <section style={{ marginBottom: "50px" }}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
                Welcome to <strong>Luganda Quran Online</strong>, a dedicated digital platform designed to make the Noble Quran accessible and understandable to the Luganda-speaking community in Uganda and across the world.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
                Our mission is to provide free, high-quality access to the Word of Allah in our mother tongue, helping Muslims deepen their spiritual connection and understanding of the Quranic message through both audio and written translations.
              </p>
            </section>

            <div style={{ display: "grid", gap: "40px", marginBottom: "60px" }}>
              <div style={{ background: "#fff", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <h2 style={{ color: "var(--primary)", marginBottom: "15px" }}>The Audio Translation</h2>
                <p style={{ lineHeight: "1.7", color: "#555" }}>
                  The complete audio translation featured on this site was recorded by the late <strong>Sheikh Ismail Sulaiman Nkata</strong> (Rahmatullāh ʿAlayh). Sheikh Nkata was a renowned Ugandan Islamic scholar who dedicated his life to teaching and making the Quran accessible to everyday Baganda. His voice remains a treasure for the community.
                </p>
              </div>

              <div style={{ background: "#fff", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <h2 style={{ color: "var(--primary)", marginBottom: "15px" }}>The Written Translation</h2>
                <p style={{ lineHeight: "1.7", color: "#555" }}>
                  The written Luganda translation displayed alongside the Arabic text is the work of <strong>Sheikh Abdurazak Matovu</strong>. This translation is widely regarded as the most authentic and precise Luganda rendition of the Quran, used by scholars and students throughout Uganda.
                </p>
              </div>
            </div>

            <section style={{ textAlign: "center", background: "#f0f9f9", padding: "40px", borderRadius: "30px" }}>
              <h2 style={{ marginBottom: "20px" }}>Our Vision</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444", maxWidth: "600px", margin: "0 auto 30px" }}>
                Founded and managed by <strong>Mubarak Mutesasira</strong>, this project was born out of a desire to preserve these scholarly works and make them available to the digital generation. We believe that technology should be used to bring people closer to their faith.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Link href="/contact" className="btn-primary">Get in Touch</Link>
                <Link href="/" className="btn-secondary">Start Listening</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
