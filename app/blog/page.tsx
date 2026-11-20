import Image from "next/image";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import ShadowCard from "../components/ShadowCard";
import { BLOG_POSTS } from "./data/posts";
import { ArrowRight, Calendar, Clock, Sparkles, Tag, } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & ML Insights Blog | Sajjad Ahmad — AI Engineer",
  description: "Read cutting-edge articles on Agentic AI, RAG pipelines, LLM fine-tuning, Machine Learning architecture, and business automation by Sajjad Ahmad.",
  keywords: [
    "AI Blog",
    "Agentic AI business sales",
    "Machine Learning Blog Islamabad",
    "LLM RAG guide",
    "Sajjad Ahmad blog",
    "AI sales automation",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {

    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sajjad Ahmad, AI Engineer" }],
    title: "AI & ML Insights Blog | Sajjad Ahmad",
    description: "Cutting-edge insights on Agentic AI, RAG pipelines, and LLM automation for business growth.",
    url: "https://www.sajjadahmad.site/blog",
    siteName: "Sajjad Ahmad Portfolio & Blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS[0];

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Header */}
      <section className="pt-20 pb-16 px-[var(--gutter)]">
        <div className="eyebrow inline-flex items-center gap-2 mb-6">
          <Sparkles size={14} />
          AI & Machine Learning Insights
        </div>

        <h1 className="text-[42px] sm:text-6xl lg:text-7xl font-bold tracking-[-0.06em] leading-[0.95] mb-6 max-w-4xl">
          Engineering the Future of <br className="hidden sm:inline" />
          <span className="text-primary">
            Agentic AI & Business Automation
          </span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          In-depth technical guides, business ROI analyses, and architectural breakdowns written by Sajjad Ahmad—AI Engineer based in Islamabad.
        </p>
      </section>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="px-[var(--gutter)] mb-20">
          <ShadowCard className="p-8 sm:p-12 rounded-[32px] border border-border relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
                  <span className="eyebrow">
                    Featured Article
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {featuredPost.publishedAt}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border bg-card text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-border overflow-hidden bg-muted">
                      <Image src={featuredPost.author.image} alt={featuredPost.author.name} width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground m-0">{featuredPost.author.name}</p>
                      <p className="text-xs text-muted-foreground m-0">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Read Full Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Visual Banner Image */}
              <div className="lg:col-span-4 h-full min-h-[240px] rounded-2xl border border-border overflow-hidden relative group">
                <Link href={`/blog/${featuredPost.slug}`} className="relative block h-full w-full">
                  <Image
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
              </div>

            </div>
          </ShadowCard>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="px-[var(--gutter)]">
        <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Tag size={20} className="text-primary" />
            All Published Guides
          </h2>
          <span className="text-sm text-muted-foreground">{BLOG_POSTS.length} Article(s)</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).map((post) => (
            <ShadowCard key={post.slug} className="p-6 rounded-2xl border border-border flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-border bg-card text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Post <ArrowRight size={14} />
                </Link>
              </div>
            </ShadowCard>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
