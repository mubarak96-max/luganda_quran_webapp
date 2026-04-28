import { BlogArticlePage, buildBlogMetadata } from "@/components/blog/BlogArticlePage";
import { blogPostsBySlug } from "@/lib/blogPosts";

const post = blogPostsBySlug["how-to-download-full-luganda-quran-audio-by-sheikh-sulaiman-nkata"];

const content = `
  <p>For many years, the Ugandan Muslim community has relied on the powerful and clear translations of
      <b>Sheikh Ismail Sulaiman Nkata</b>. His work has made the profound message of the Holy Quran accessible to
      millions of Luganda speakers worldwide.</p>

  <p>In this guide, we will show you how to access the full 114 surahs in Luganda audio, whether you want to
      listen online or download them for offline use.</p>

  <h2>Why Choose Sheikh Ismail Sulaiman Nkata's Audio?</h2>
  <p>Sheikh Ismail Sulaiman Nkata is renowned for his deep linguistic knowledge and spiritual clarity. Unlike
      standard recitations, his Luganda translation helps the listener understand the context and commands of
      Allah (SWT) in our native language. This makes it a perfect companion for both daily listening and deep
      study.</p>

  <h2>Listen Online vs. Download in Full</h2>
  <p>This website provides two main ways to experience this audio:</p>
  <ul>
      <li><strong>Listen Online:</strong> Save storage space on your phone and stream any surah instantly with
          high-quality MP3 format.</li>
      <li><strong>Offline Listening:</strong> Planning to travel or live in areas with poor internet? You can
          download individual surahs directly to your device.</li>
  </ul>

  <h2>Steps to Download the Audio</h2>
  <p>1. Open lugandaquran.online.<br>
      2. Choose the surah you want to listen to.<br>
      3. Select the Download Audio button on that surah page.<br>
      4. Once downloaded, you can listen anytime without using your mobile data.</p>

  <p>Bring the light of the Quran into your daily life today. Start listening
      with Sheikh Ismail Sulaiman Nkata.</p>
`;

export const metadata = buildBlogMetadata(post);

export default function Page() {
  return <BlogArticlePage post={post} content={content} />;
}
