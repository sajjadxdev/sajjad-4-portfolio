"use client"

import Link from "next/link"
import ShadowCard from "./ShadowCard"
import { BLOG_POSTS } from "../blog/data/posts"
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from "lucide-react"

export default function BlogSection() {
    return (
        <section id="blog" className="w-full py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card text-xs uppercase tracking-widest text-primary font-semibold">
                            <BookOpen size={14} />
                            Insights & Articles
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            Latest AI & Engineering Insights
                        </h2>

                        <p className="text-muted-foreground text-base leading-relaxed">
                            Deep dives on Agentic AI, RAG architecture, LLMs, and machine learning solutions for business growth.
                        </p>
                    </div>

                    <Link href="/blog">
                        <ShadowCard variant="button" className="px-6 py-3 rounded-full cursor-pointer">
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                View All Articles
                                <ArrowRight size={16} className="text-primary" />
                            </div>
                        </ShadowCard>
                    </Link>
                </div>

                {/* Featured Blog Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.slice(0, 3).map((post) => (
                        <ShadowCard
                            key={post.slug}
                            className="p-6 rounded-3xl border border-border flex flex-col justify-between group hover:border-primary/50 transition-colors"
                        >
                            <div className="space-y-4">
                                {/* Post Cover Banner */}
                                {post.coverImage && (
                                    <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl border border-border">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </Link>
                                )}

                                {/* Post Metadata */}
                                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                                    <span className="flex items-center gap-1.5 font-medium">
                                        <Calendar size={13} /> {post.publishedAt}
                                    </span>
                                    <span className="flex items-center gap-1.5 font-medium">
                                        <Clock size={13} /> {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                </Link>

                                {/* Excerpt */}
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] px-2.5 py-0.5 rounded-full border border-border bg-card text-muted-foreground"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={post.author.image}
                                        alt={post.author.name}
                                        className="w-7 h-7 rounded-full border border-border object-cover"
                                    />
                                    <span className="text-xs font-semibold text-foreground">
                                        {post.author.name}
                                    </span>
                                </div>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                                >
                                    Read Post <ArrowRight size={14} />
                                </Link>
                            </div>
                        </ShadowCard>
                    ))}
                </div>

            </div>
        </section>
    )
}
