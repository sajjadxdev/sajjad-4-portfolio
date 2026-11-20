import Image from "next/image";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
import ShadowCard from "@/app/components/ShadowCard";
import InnerShadowCard from "@/app/components/InnerShadowEffect";
import { BLOG_POSTS } from "../data/posts";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Github,
  Linkedin,
  List,
  MessageSquare,
  Sparkles,
  } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Sajjad Ahmad",
    };
  }

  const full = `${post.title} | Sajjad Ahmad`;
  const title = full.length <= 60 ? full : post.title;
  return {
    title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://www.sajjadahmad.site/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.sajjadahmad.site/blog/${post.slug}`,
      siteName: "Sajjad Ahmad - AI & ML Developer Portfolio",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["https://www.sajjadahmad.site"],
      images: [
        {
          url: post.coverImage ? `https://www.sajjadahmad.site${post.coverImage}` : "https://www.sajjadahmad.site/og.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage ? `https://www.sajjadahmad.site${post.coverImage}` : "https://www.sajjadahmad.site/og.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score || b.p.publishedAt.localeCompare(a.p.publishedAt))
    .slice(0, 3)
    .map(({ p }) => p);

  // Generate BlogPosting JSON-LD
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.sajjadahmad.site/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: `https://www.sajjadahmad.site${post.coverImage || "/og.png"}`,
    inLanguage: "en",
    wordCount: post.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.sajjadahmad.site/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      "@id": "https://www.sajjadahmad.site/#person",
      url: "https://www.sajjadahmad.site/about",
      sameAs: [post.author.github, post.author.linkedin],
    },
    publisher: {
      "@type": "Organization",
      name: "Sajjad Ahmad",
      url: "https://www.sajjadahmad.site",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sajjadahmad.site/og.png",
      },
    },
    keywords: post.tags.join(", "),
  };

  // Generate FAQPage JSON-LD for GEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      {/* Top Banner / Breadcrumb */}
      <div className="pt-12 pb-8 px-[var(--gutter)]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-medium"
        >
          <ArrowLeft size={16} /> Back to All Articles
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="eyebrow"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-[42px] sm:text-6xl lg:text-7xl font-bold tracking-[-0.06em] leading-[0.95] text-foreground mb-6">
          {post.title}
        </h1>

        {/* Meta Author Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border">
          <div className="flex items-center gap-3">
            <Image
              width={48}
              height={48}
              src={post.author.image}
              alt={post.author.name}
              className="w-12 h-12 rounded-full border border-border object-cover"
            />
            <div>
              <p className="font-bold text-foreground m-0 text-sm sm:text-base">{post.author.name}</p>
              <p className="text-xs text-muted-foreground m-0">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Published: {post.publishedAt}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>

        {/* Featured Banner Image */}
        {post.coverImage && (
          <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
            <Image
              width={1200}
              height={675}
              priority
              sizes="(max-width: 900px) 100vw, 896px"
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        )}
      </div>

      {/* Main Content & Table of Contents Grid */}
      <div className="px-[var(--gutter)] grid lg:grid-cols-12 gap-12">
        
        {/* Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            <ShadowCard className="p-6 rounded-2xl border border-border">
              <h3 className="font-bold text-sm uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                <List size={16} className="text-primary" /> Table of Contents
              </h3>
              <nav className="space-y-2">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1 leading-normal"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </ShadowCard>

            {/* Author E-E-A-T Card */}
            <InnerShadowCard className="p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                <Sparkles size={16} className="text-primary" /> About the Author
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed m-0">
                Sajjad Ahmad is an AI Engineer specializing in LLM RAG pipelines, FastAPI backends, and Agentic AI applications in Islamabad, Pakistan.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href={post.author.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:text-primary text-muted-foreground transition-colors">
                  <Github size={14} />
                </a>
                <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:text-primary text-muted-foreground transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            </InnerShadowCard>
          </div>
        </aside>

        {/* Article Body */}
        <article className="lg:col-span-8 space-y-8 text-foreground font-sans">
          
          {/* Article HTML Content */}
          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Q&A / GEO FAQ Section inside article */}
          <section id="faq" className="mt-16 pt-12 border-t border-border">
            <div className="eyebrow inline-flex items-center gap-2 mb-6">
              <MessageSquare size={14} /> GEO & AI Search FAQ
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              Frequently Asked Questions (Agentic AI Sales)
            </h2>

            <div className="space-y-4">
              {post.faqs.map((faq, index) => (
                <InnerShadowCard key={index} className="p-5 rounded-xl space-y-2">
                  <h3 className="font-semibold text-foreground text-base m-0 flex items-start gap-2">
                    <span className="text-primary font-bold">Q:</span> {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0 pl-5">
                    {faq.answer}
                  </p>
                </InnerShadowCard>
              ))}
            </div>
          </section>

          {/* Article Footer & Author Signature */}
          <div className="mt-12 p-6 rounded-2xl border border-border bg-card flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src={post.author.image} alt={post.author.name} width={40} height={40} className="w-10 h-10 rounded-full border border-border object-cover" />
              <div>
                <p className="font-bold text-sm text-foreground m-0">{post.author.name}</p>
                <p className="text-xs text-muted-foreground m-0">AI Engineer based in Islamabad</p>
              </div>
            </div>

            <Link href="/#contact" className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
              Hire Sajjad for AI Development →
            </Link>
          </div>

          {/* Related articles: internal links between posts */}
          <nav aria-label="Related articles" className="mt-16 pt-10 border-t border-border">
            <p className="eyebrow mb-6">Keep reading</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="theme-card block p-5 no-underline">
                  <span className="text-xs text-muted-foreground">{r.readTime}</span>
                  <p className="mt-2 mb-0 font-bold text-foreground leading-snug">{r.title}</p>
                </Link>
              ))}
            </div>
          </nav>
        </article>

      </div>
      <Footer />
    </main>
  );
}
