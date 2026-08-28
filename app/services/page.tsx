import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import ShadowCard from "../components/ShadowCard";
import InnerShadowCard from "../components/InnerShadowEffect";
import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Development Services | Sajjad Ahmad — AI Engineer",
  description: "Explore production AI development services: Agentic AI Systems, Custom RAG Pipelines, Generative AI Applications, Model Context Protocol (MCP) Servers, and Computer Vision.",
  keywords: [
    "AI Development Services",
    "Agentic AI Development",
    "Custom RAG Development",
    "Generative AI Development",
    "MCP Server Development",
    "Computer Vision Services",
    "AI Automation Services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "AI Development Services | Sajjad Ahmad",
    description: "Production AI development services: Agentic AI, RAG pipelines, LLM applications, and custom MCP integrations.",
    url: "https://sajjadahmadai.vercel.app/services",
    siteName: "Sajjad Ahmad Portfolio",
    type: "website",
  },
};

const SERVICES = [
  {
    slug: "ai-agent-development",
    icon: Bot,
    title: "AI Agent Development",
    description: "Autonomous goal-driven AI agents with tool-calling capabilities, multi-agent coordination, and decision-making logic.",
    features: ["Multi-step reasoning", "API & Database tool execution", "Autonomous lead qualification", "CRM & Workflow integration"],
  },
  {
    slug: "rag-development",
    icon: Database,
    title: "Custom RAG Pipelines",
    description: "Enterprise Retrieval-Augmented Generation systems leveraging vector databases (ChromaDB, Pinecone) for zero-hallucination factual search.",
    features: ["Vector embedding indexing", "Distance threshold guardrails", "Hybrid semantic search", "Document & Knowledge Base AI"],
  },
  {
    slug: "generative-ai",
    icon: Sparkles,
    title: "Generative AI Applications",
    description: "Full-stack generative AI solutions, custom LLM fine-tuning, prompt engineering, and production web application integration.",
    features: ["Custom LLM integration", "Next.js & FastAPI full-stack apps", "Prompt optimization", "Cost & Latency engineering"],
  },
  {
    slug: "mcp-development",
    icon: Wrench,
    title: "Model Context Protocol (MCP)",
    description: "Standardized TypeScript/Python MCP server development connecting AI agents to custom tools, local files, and enterprise databases.",
    features: ["Custom MCP server creation", "Claude & AI client integration", "Secure tool definitions", "Database & API connectors"],
  },
  {
    slug: "ai-automation",
    icon: Layers,
    title: "AI Automation Services",
    description: "End-to-end process automation replacing manual labor with intelligent AI pipelines and CRM/ERP synchronization.",
    features: ["Sales & Support automation", "Lead scoring & routing", "Multi-channel AI workflows", "Real-time analytics"],
  },
  {
    slug: "computer-vision",
    icon: Cpu,
    title: "Computer Vision & Multimodal AI",
    description: "Visual AI systems for object detection, document OCR, image classification, and vision-language model integration.",
    features: ["YOLO & PyTorch models", "Document AI & OCR", "Image classification", "Multimodal RAG"],
  },
];

export default function ServicesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI Development Services",
        provider: {
          "@type": "Person",
          name: "Sajjad Ahmad",
          url: "https://sajjadahmadai.vercel.app",
        },
        serviceType: "Artificial Intelligence Development",
        areaServed: ["Worldwide", "Pakistan", "United Arab Emirates", "Germany", "United States"],
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
            name: "Services",
            item: "https://sajjadahmadai.vercel.app/services",
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
      <section className="pt-36 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6 text-xs uppercase tracking-widest text-primary font-semibold">
          <Brain size={14} /> AI Development Services
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Production AI Systems Built for Real-World Value
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          From autonomous agent architectures to enterprise RAG pipelines, explore specialized AI engineering services tailored to your technical requirements.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <ShadowCard
              key={service.slug}
              className="p-8 rounded-3xl border border-border flex flex-col justify-between group hover:border-primary/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl border border-border bg-card w-fit text-primary">
                  <Icon size={24} />
                </div>

                <Link href={`/services/${service.slug}`} className="block">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {service.title}
                  </h2>
                </Link>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  View Service Details <ArrowRight size={14} />
                </Link>
              </div>
            </ShadowCard>
          );
        })}
      </section>
    </main>
  );
}
