import { BlogArticlePage, buildBlogMetadata } from "@/components/blog/BlogArticlePage";
import { blogPostsBySlug } from "@/lib/blogPosts";

const post = blogPostsBySlug["authentic-luganda-quran-translation-by-sheikh-abdurazak-matovu"];

const content = `
  <p>When it comes to reading the Quran in Luganda, accuracy and clarity are of the utmost importance. The
      translation by <b>Sheikh Abdurazak Matovu</b> stands as the most respected and authoritative text in the
      Ugandan community.</p>

  <p>This translation captures the essence of the Arabic text while ensuring that the Luganda vocabulary used
      is both modern and spiritually appropriate.</p>

  <h2>Who was Sheikh Abdurazak Matovu?</h2>
  <p>Sheikh Abdurazak Matovu was a pioneer of Islamic education in Uganda. His dedicated life's work was to
      ensure that every Luganda speaker could read and understand the Word of Allah without barriers. His
      translation has been vetted by scholars and continues to be the standard for schools, mosques, and homes
      across the country.</p>

  <h2>Why Read this Translation?</h2>
  <p>Reading the Quran in your native language allows for a deeper emotional connection. Sheikh Matovu's
      translation is unique because:</p>
  <ul>
      <li><strong>Linguistic Precision:</strong> He ensures that complex Arabic concepts are explained using
          precise Luganda terms.</li>
      <li><strong>Cultural Context:</strong> The translation is written in a way that resonates with the
          Ugandan cultural and social experience.</li>
      <li><strong>Clear Layout:</strong> This website presents this text alongside the original Arabic for a
          complete learning experience.</li>
  </ul>

  <h2>Get the Digital Version</h2>
  <p>Traditionally, finding a printed copy of Sheikh Matovu's translation could be difficult. However, with
      lugandaquran.online, we have made this text available digitally for free. You can read it
      surah-by-surah alongside the original Arabic text.</p>

  <p>Experience the beauty of the Quran through the words of Sheikh Abdurazak Matovu today.</p>
`;

export const metadata = buildBlogMetadata(post);

export default function Page() {
  return <BlogArticlePage post={post} content={content} />;
}
