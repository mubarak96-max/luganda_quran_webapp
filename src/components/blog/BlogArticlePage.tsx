import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { BlogPostMeta } from "@/lib/blogPosts";

const siteUrl = "https://lugandaquran.online";

export function buildBlogMetadata(post: BlogPostMeta): Metadata {
  return {
    title: post.seoTitle ?? post.title,
    description: post.metaDescription ?? post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.metaDescription ?? post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Luganda Quran Online",
      type: "article",
      images: [
        {
          url: `${siteUrl}${post.image}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.metaDescription ?? post.description,
      images: [`${siteUrl}${post.image}`],
    },
  };
}

export function BlogArticlePage({
  post,
  content,
}: {
  post: BlogPostMeta;
  content: string;
}) {
  return (
    <>
      <Navbar />
      <article className="blog-post">
        <div className="container blog-content">
          <Link href="/blog" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Link>
          <h1>{post.title}</h1>
          <div className="blog-meta" style={{ marginBottom: "40px", color: "#666", display: "flex", gap: "20px", fontSize: "0.95rem" }}>
            <span><i className="fas fa-user" style={{ marginRight: "8px" }}></i> Mubarak Mutesasira</span>
            {post.publishedAt && (
              <span><i className="fas fa-calendar" style={{ marginRight: "8px" }}></i> {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            )}
          </div>
          <div
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription ?? post.description,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            image: [`${siteUrl}${post.image}`],
            mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
            author: {
              "@type": "Organization",
              name: "Luganda Quran Online",
            },
            publisher: {
              "@type": "Organization",
              name: "Luganda Quran Online",
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/icon.png`,
              },
            },
            keywords: post.keywords?.join(", "),
          }),
        }}
      />
      <Footer />
    </>
  );
}
