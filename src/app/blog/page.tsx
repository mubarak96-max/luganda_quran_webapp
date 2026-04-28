import { blogPosts } from "@/lib/blogPosts";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luganda Quran Blog | Quran in Luganda, Audio, Translation, and Islamic Guides",
  description: "Read SEO-friendly guides about the Luganda Quran, Luganda Quran audio, Sheikh Ismail Sulaiman Nkata, and practical Islamic life in Uganda.",
  keywords: [
    "Luganda Quran blog",
    "Quran in Luganda",
    "Luganda Quran audio",
    "Sheikh Ismail Sulaiman Nkata",
    "Luganda Quran translation",
    "Islam in Uganda",
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="blog-index" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container">
          <div className="blog-header" style={{ textAlign: "center", marginBottom: "60px" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Luganda Quran Blog</h1>
            <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "700px", margin: "0 auto" }}>
              Educational resources, news, and deep dives into the history of Quran translation in Uganda.
            </p>
          </div>

          <div className="blog-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "30px"
          }}>
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card-link">
                <article className="blog-card" style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "15px", lineHeight: "1.3" }}>{post.title}</h2>
                    <div style={{ display: "flex", gap: "15px", fontSize: "0.85rem", color: "#888", marginBottom: "15px" }}>
                      <span><i className="fas fa-user"></i> Mubarak Mutesasira</span>
                      {post.publishedAt && <span><i className="fas fa-calendar"></i> {post.publishedAt}</span>}
                    </div>
                    <p style={{ color: "#666", marginBottom: "20px", flexGrow: 1 }}>{post.description.substring(0, 120)}...</p>
                    <span style={{
                      color: "var(--primary)",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      Read Article <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
