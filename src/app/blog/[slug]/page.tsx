import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <article className="blog-post">
        <div className="container blog-content">
          <Link href="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <h1>{post.title}</h1>
          <div 
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </article>

      <Footer />
    </>
  );
}
