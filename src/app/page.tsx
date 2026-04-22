import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurahList from "@/components/SurahList";
import FundraisingBanner from "@/components/FundraisingBanner";
import Link from "next/link";
import { getSurahs } from "@/lib/firebase";

export const metadata = {
  title: "Download Complete Luganda Quran Translation Audio - All 114 Surahs",
  description: "Download Complete Luganda Quran translation audio and listen online. Access all 114 surahs translated by Sheikh Ismail Sulaiman Nkata, plus written Luganda translation by Sheikh Abdurazak Matovu.",
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
            <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "35px" }}>Full Quran in Luganda</h2>
            <SurahList limitCount={10} initialData={initialSurahs} />
            <div style={{ textAlign: "center", marginTop: "43px" }}>
              <Link href="/surahs" className="btn-secondary">
                See All 114 Surahs <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        <FundraisingBanner />

        {/* SEO Content Section */}
        <section className="seo-content section-padding">
          <div className="container">
            <div className="seo-block">
              <h1>Full Luganda Quran Translated by Sheikh Ismail Sulaiman Nkata</h1>
              <p>
                Welcome to the home of the complete Quran translated in Luganda. This website gives you free access to all 114 surahs of the
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
                Sheikh Ismail Sulaiman Nkata taught at King Faisal Secondary School in Mityana and was widely respected for
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
                Sheikh Ismail Sulaiman Nkata&apos;s Luganda translation makes the Quran accessible to Muslims who may not have
                had the opportunity to study Arabic. From the opening surah Al-Fatiha to the final surah An-Nas,
                every ayah is explained clearly in Luganda so that any listener can grasp its meaning.
              </p>
            </div>

            <div className="seo-block">
              <h2>What you will find on this site</h2>
              <p>
                This site contains the full audio Luganda Quran by Sheikh Ismail Sulaiman Nkata — all 114 surahs, free to
                stream directly in your browser. You will also find the written Luganda translation by Sheikh
                Abdurazak Matovu. Everything is mobile-friendly and works on any phone, tablet, or computer
                without any app installation.
              </p>
            </div>

            <div className="seo-block">
              <h2>How to listen to Sheikh Ismail Sulaiman Nkata&apos;s Luganda Quran</h2>
              <p>
                From the homepage, tap or click on any surah to open it and start playing the audio. You can
                also visit the full surahs page to browse all 114 surahs. The audio quality is clear and
                authentic. Whether you are looking for Surah Al-Baqarah, Surah Yasin, Surah Al-Mulk, or
                Surah An-Nas, everything is available here for free.
              </p>
            </div>

            <div className="seo-block">
              <h2>Download Luganda Quran Translation Audio</h2>
              <p>
                You can download Luganda Quran translation audio for every surah directly from each surah page.
                This lets you listen offline when you have no internet connection while still accessing the same
                authentic recordings by Sheikh Ismail Sulaiman Nkata.
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

        {/* FAQ Section with JSON-LD Schema */}
        <section className="faq-section section-padding" style={{ background: "#f9f9f9" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "32px" }}>
              Frequently Asked Questions
            </h2>
            <div className="faq-list">
              {[
                {
                  q: "How can I download Luganda Quran translation audio?",
                  a: "Open any surah page and click the Download Audio button. Your browser will save the Luganda Quran translation audio file so you can listen offline.",
                },
                {
                  q: "Who translated the Quran into Luganda?",
                  a: "The audio Luganda Quran was recorded by Sheikh Ismail Sulaiman Nkata (Rahmatullāh ʿAlayh), one of Uganda's most respected Islamic scholars. The written translation is by Sheikh Abdurazak Matovu.",
                },
                {
                  q: "Is the Luganda Quran free to listen to?",
                  a: "Yes. All 114 surahs of the Quran are free to stream on lugandaquran.online — no account, no app, and no subscription required.",
                },
                {
                  q: "Can I listen to the Luganda Quran on my phone?",
                  a: "Yes. The site is fully mobile-friendly and works on any smartphone or tablet. You can also install it as an app directly from your browser — no app store required.",
                },
                {
                  q: "Which surahs are available in Luganda?",
                  a: "All 114 surahs of the Holy Quran are available in Luganda, from Surah Al-Fatiha (1) to Surah An-Nas (114), including popular surahs like Surah Al-Baqarah, Surah Yasin, Surah Al-Kahf, and Surah Al-Mulk.",
                },
                {
                  q: "Who was Sheikh Ismail Sulaiman Nkata?",
                  a: "Sheikh Ismail Sulaiman Nkata was a renowned Ugandan Islamic scholar and teacher at King Faisal Secondary School in Mityana. He dedicated his life to making the Quran understandable to Luganda-speaking Muslims. His complete Luganda audio Quran remains one of the most treasured Islamic resources in Uganda.",
                },
                {
                  q: "Can I read the Luganda Quran text as well as listen?",
                  a: "Yes. Each surah page has a 'Read Luganda' button that opens the full written Luganda translation by Sheikh Abdurazak Matovu, displayed alongside the original Arabic text.",
                },
              ].map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{item.q}</summary>
                  <p className="faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* FAQ JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How can I download Luganda Quran translation audio?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Open any surah page and click the Download Audio button. Your browser will save the Luganda Quran translation audio file so you can listen offline.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Who translated the Quran into Luganda?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The audio Luganda Quran was recorded by Sheikh Ismail Sulaiman Nkata (Rahmatullāh ʿAlayh), one of Uganda's most respected Islamic scholars. The written translation is by Sheikh Abdurazak Matovu.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is the Luganda Quran free to listen to?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. All 114 surahs of the Quran are free to stream on lugandaquran.online — no account, no app, and no subscription required.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I listen to the Luganda Quran on my phone?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. The site is fully mobile-friendly and works on any smartphone or tablet. You can also install it as an app directly from your browser — no app store required.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which surahs are available in Luganda?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "All 114 surahs of the Holy Quran are available in Luganda, from Surah Al-Fatiha (1) to Surah An-Nas (114), including popular surahs like Surah Al-Baqarah, Surah Yasin, Surah Al-Kahf, and Surah Al-Mulk.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Who was Sheikh Ismail Sulaiman Nkata?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sheikh Ismail Sulaiman Nkata was a renowned Ugandan Islamic scholar and teacher at King Faisal Secondary School in Mityana. He dedicated his life to making the Quran understandable to Luganda-speaking Muslims.",
                    },
                  },
                ],
              }),
            }}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
