import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import ShadowCard from "../components/ShadowCard";
import InnerShadowCard from "../components/InnerShadowEffect";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Code,
  Cpu,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Sajjad Ahmad | AI Engineer — Generative AI, Agentic AI & RAG",
  description: "Learn about Sajjad Ahmad, AI Engineer based in Peshawar, Pakistan. Specializing in Generative AI, Agentic AI, custom RAG pipelines, LLM integration, and production ML systems.",
  keywords: [
    "About Sajjad Ahmad",
    "Sajjad Ahmad AI Engineer",
    "AI Developer Peshawar",
    "Machine Learning Engineer Pakistan",
    "Agentic AI Engineer",
    "RAG Specialist Pakistan",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sajjad Ahmad | AI Engineer — Generative AI, Agentic AI & RAG",
    description: "Sajjad Ahmad is an AI Engineer specializing in Generative AI, Agentic AI, custom RAG pipelines, and scalable production AI systems.",
    url: "https://sajjadahmadai.vercel.app/about",
    siteName: "Sajjad Ahmad - AI Engineer Portfolio",
    type: "profile",
    images: [{ url: "/sajjad.png", alt: "Sajjad Ahmad - AI Engineer" }],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sajjadahmadai.vercel.app/#person",
        name: "Sajjad Ahmad",
        jobTitle: "AI Engineer",
        description: "AI Engineer specializing in Generative AI, Agentic AI, custom RAG pipelines, LLM applications, and production Machine Learning systems.",
        url: "https://sajjadahmadai.vercel.app",
        image: "https://sajjadahmadai.vercel.app/sajjad.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Peshawar",
          addressRegion: "Khyber Pakhtunkhwa",
          addressCountry: "PK",
        },
        sameAs: [
          "https://github.com/sajjadxdev",
          "https://linkedin.com/in/sajjadxdev",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://sajjadahmadai.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://sajjadahmadai.vercel.app/about",
          },
        ],
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6 text-xs uppercase tracking-widest text-primary font-semibold">
          <Brain size={14} /> About Sajjad Ahmad
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          AI Engineer Building Production-Ready AI Systems
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-3xl">
          Based in <strong className="text-foreground">Peshawar, Pakistan</strong> and available for remote engineering projects worldwide. Specializing in Generative AI, Agentic AI, custom RAG architectures, LLM applications, and robust backend microservices.
        </p>
      </section>

      {/* Main Profile Grid */}
      <section className="px-6 max-w-5xl mx-auto space-y-12">
        <ShadowCard className="p-8 sm:p-12 rounded-[32px] border border-border">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="w-36 h-36 rounded-3xl border border-border overflow-hidden shadow-xl bg-card">
                <img src="/sajjad.png" alt="Sajjad Ahmad" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Sajjad Ahmad</h2>
                <p className="text-xs text-primary font-semibold m-0">AI Engineer</p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-2">
                  <MapPin size={13} className="text-primary" /> Peshawar, PK (Remote Worldwide)
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com/sajjadxdev" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-border hover:text-primary transition-colors text-muted-foreground">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com/in/sajjadxdev" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-border hover:text-primary transition-colors text-muted-foreground">
                  <Linkedin size={16} />
                </a>
                <a href="mailto:sajjadxdev@gmail.com" className="p-2.5 rounded-full border border-border hover:text-primary transition-colors text-muted-foreground">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                Engineering Philosophy & Expertise
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I bridge the gap between cutting-edge AI research and scalable, production-grade applications. Rather than building simple wrapper scripts, I design full-stack AI pipelines—combining vector database retrieval (ChromaDB), FastAPI microservices, distance-threshold guardrails, and autonomous agent frameworks.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <InnerShadowCard className="p-4 rounded-xl space-y-1">
                  <p className="font-bold text-foreground text-sm m-0 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> Agentic AI Systems
                  </p>
                  <p className="text-xs text-muted-foreground m-0">Autonomous goal seeking & tool calling</p>
                </InnerShadowCard>

                <InnerShadowCard className="p-4 rounded-xl space-y-1">
                  <p className="font-bold text-foreground text-sm m-0 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> Custom RAG Pipelines
                  </p>
                  <p className="text-xs text-muted-foreground m-0">Zero-hallucination factual knowledge retrieval</p>
                </InnerShadowCard>

                <InnerShadowCard className="p-4 rounded-xl space-y-1">
                  <p className="font-bold text-foreground text-sm m-0 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> Model Context Protocol
                  </p>
                  <p className="text-xs text-muted-foreground m-0">Custom MCP server & API integrations</p>
                </InnerShadowCard>

                <InnerShadowCard className="p-4 rounded-xl space-y-1">
                  <p className="font-bold text-foreground text-sm m-0 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> Computer Vision & NLP
                  </p>
                  <p className="text-xs text-muted-foreground m-0">Object detection, OCR & text classification</p>
                </InnerShadowCard>
              </div>
            </div>

          </div>
        </ShadowCard>

        {/* Global Work & Collaboration */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Global Remote Collaboration
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            While based in Peshawar, Pakistan, I work seamlessly with engineering teams and businesses across the <strong className="text-foreground">UAE & Middle East, Europe (Germany, UK, EU), and the United States</strong>. I maintain structured communication, milestone-driven check-ins, and flexible time-zone availability.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <Link href="/locations/peshawar" className="p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors block">
              <h3 className="font-bold text-foreground text-base mb-2">Peshawar & Pakistan</h3>
              <p className="text-xs text-muted-foreground m-0">Local consultation & national AI development</p>
            </Link>

            <Link href="/locations/uae" className="p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors block">
              <h3 className="font-bold text-foreground text-base mb-2">Middle East & UAE</h3>
              <p className="text-xs text-muted-foreground m-0">Enterprise AI automation & RAG solutions</p>
            </Link>

            <Link href="/locations/usa" className="p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors block">
              <h3 className="font-bold text-foreground text-base mb-2">US & Global Remote</h3>
              <p className="text-xs text-muted-foreground m-0">Full-stack AI development & remote engineering</p>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-background border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Let's Discuss Your AI Project</h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Whether you need autonomous AI agents, enterprise RAG, custom MCP servers, or full AI application development, get in touch to get started.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/services" className="px-6 py-2.5 rounded-full border border-border text-xs font-semibold hover:border-primary transition-colors">
              Explore Services
            </Link>
            <Link href="/#contact" className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-md">
              Start Consultation →
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}
