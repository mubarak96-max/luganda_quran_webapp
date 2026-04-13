import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurahList from "@/components/SurahList";
import Link from "next/link";
import { getSurahs } from "@/lib/firebase";

export const metadata = {
  title: "Luganda Quran by Sheikh Nkata – Full Audio, All 114 Surahs | Free",
  description: "Listen to the complete Quran translated in Luganda by Sheikh Ismail Sulaiman Nkata. All 114 surahs free to stream online. Also includes written translation by Sheikh Abdurazak Matovu.",
};

export default async function Home() {
  const allSurahs = await getSurahs();
  const initialSurahs = allSurahs.slice(0, 10) as any;

  return (
    <>
      <Navbar />

      <main className="main-content">
        <section id="surahs" style={{ padding: "140px 0 60px 0" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "39px" }}>Full Quran in Luganda</h2>
            <SurahList limitCount={10} initialData={initialSurahs} />
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <Link href="/surahs" className="btn-secondary">
                See All 114 Surahs <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="seo-content section-padding">
          <div className="container">
            <div className="seo-block">
              <h1>Luganda Quran by Sheikh Ismail Sulaiman Nkata</h1>
              <p>
                Welcome to the home of the complete Quran translated in Luganda — the language of the
                Baganda people of Uganda. This website gives you free access to all 114 surahs of the
                Noble Quran, audio translated into Luganda by the late Sheikh Ismail Sulaiman Nkata,
                and the written Luganda translation by Sheikh Abdurazak Matovu.
              </p>
              <p>
                Whether you are at home, at the mosque, or on the go, you can listen to the full Luganda
                Quran audio online without downloading any app. Simply open the site, choose a surah, and listen.
              </p>
            </div>

            <div className="seo-block">
              <h2>About Sheikh Ismail Sulaiman Nkata</h2>
              <p>
                Sheikh Ismail Sulaiman Nkata (Rahmatullāh ʿAlayh) was one of Uganda&apos;s most beloved
                Islamic scholars. He dedicated his life to making the message of the Quran accessible to
                Luganda-speaking Muslims. His audio translation of the complete Quran — all 114 surahs —
                remains one of the most treasured Islamic resources in Uganda and among Baganda Muslims worldwide.
              </p>
              <p>
                Sheikh Nkata taught at King Faisal Secondary School in Mityana and was widely respected for
                his deep knowledge, his clear teaching style, and his warm voice. His Luganda Quran translation
                has helped hundreds of thousands of Muslims understand the meaning of Allah&apos;s words in
                their mother tongue.
              </p>
            </div>

            <div className="seo-block">
              <h2>Why listen to the Quran in Luganda?</h2>
              <p>
                Arabic is the language of the Quran, and reciting it in Arabic carries great reward. However,
                understanding the meaning of what you recite deepens your connection to Allah&apos;s words.
                For Luganda speakers, hearing the Quran explained in their own language opens a door to deeper
                understanding, reflection, and spiritual growth.
              </p>
              <p>
                Sheikh Nkata&apos;s Luganda translation makes the Quran accessible to Muslims who may not have
                had the opportunity to study Arabic. From the opening surah Al-Fatiha to the final surah An-Nas,
                every ayah is explained clearly in Luganda so that any listener can grasp its meaning.
              </p>
            </div>

            <div className="seo-block">
              <h2>What you will find on this site</h2>
              <p>
                This site contains the full audio Luganda Quran by Sheikh Nkata — all 114 surahs, free to
                stream directly in your browser. You will also find the written Luganda translation by Sheikh
                Abdurazak Matovu. Everything is mobile-friendly and works on any phone, tablet, or computer
                without any app installation.
              </p>
            </div>

            <div className="seo-block">
              <h2>How to listen to Sheikh Nkata&apos;s Luganda Quran</h2>
              <p>
                From the homepage, tap or click on any surah to open it and start playing the audio. You can
                also visit the full surahs page to browse all 114 surahs. The audio quality is clear and
                authentic. Whether you are looking for Surah Al-Baqarah, Surah Yasin, Surah Al-Mulk, or
                Surah An-Nas, everything is available here for free.
              </p>
            </div>

            <div className="seo-block">
              <h2>A free resource for the Ugandan Muslim community</h2>
              <p>
                This website was built as a free resource for the Luganda-speaking Muslim community,
                both in Uganda and around the world. If you find it useful, please share it with your
                family, friends, and fellow Muslims. May Allah grant us all understanding of His book. Ameen.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
