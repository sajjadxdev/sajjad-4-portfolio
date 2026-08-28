import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
import ShadowCard from "@/app/components/ShadowCard";
import InnerShadowCard from "@/app/components/InnerShadowEffect";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const SERVICE_DETAILS: Record<
  string,
  {
    title: string;
    description: string;
    heroHeadline: string;
    overview: string;
    architecture: string[];
    useCases: string[];
    keywords: string[];
  }
> = {
  "ai-agent-development": {
    title: "AI Agent Development Services",
    description: "Engineering autonomous AI agents with tool-calling capabilities, multi-agent coordination, decision logic, and CRM integration.",
    heroHeadline: "Autonomous AI Agents Designed for Tool Execution & Goal Solving",
    overview: "We design and deploy autonomous AI agents capable of planning multi-step tasks, invoking custom REST APIs, querying vector databases, and updating business systems dynamically.",
    architecture: [
      "Goal Decomposition & Planning Engine",
      "Function Calling & API Execution Layer",
      "Vector Memory & Context Retrieval",
      "Human-in-the-loop Guardrails & Fallbacks",
    ],
    useCases: [
      "Autonomous Lead Qualification & Sales Engagement",
      "Multi-step Customer Support Escalation Agents",
      "Automated Market Research & Web Scraping Agents",
      "Internal Enterprise Knowledge Retrieval Agents",
    ],
    keywords: ["AI Agent Development", "Autonomous AI Agents", "Tool-using AI Agents", "Multi-Agent Systems"],
  },
  "rag-development": {
    title: "Custom RAG Development Services",
    description: "Enterprise Retrieval-Augmented Generation systems built with ChromaDB, LlamaIndex, and FastAPI for zero-hallucination factual search.",
    heroHeadline: "Zero-Hallucination Retrieval-Augmented Generation Systems",
    overview: "We build enterprise RAG pipelines that index your documents, knowledge bases, and codebase into high-density vector databases with strict distance thresholds to ensure 100% factual accuracy.",
    architecture: [
      "Document Parsing & Chunking Optimization",
      "Dense Embedding Indexing (ChromaDB / Pinecone)",
      "Hybrid Vector & Keyword Search",
      "Distance Threshold Guardrail Enforcement",
    ],
    useCases: [
      "Enterprise Knowledge Base Search",
      "Legal & Regulatory Document Analysis",
      "Medical & Technical Specification Retrieval",
      "Customer Support Knowledge Augmentation",
    ],
    keywords: ["RAG Development", "Custom RAG Pipeline", "Vector Search", "Enterprise RAG"],
  },
  "generative-ai": {
    title: "Generative AI Development Services",
    description: "Full-stack Generative AI solutions, custom LLM integration, prompt engineering, and production Web application development.",
    heroHeadline: "Production-Grade Generative AI & LLM Applications",
    overview: "From custom LLM prompt engineering to full-stack Next.js and FastAPI web applications, we build production AI solutions tailored to your operational workflows.",
    architecture: [
      "LLM Model Selection & Prompt Optimization",
      "FastAPI Async Backend Microservices",
      "Next.js App Router Web Interface",
      "Cost, Latency & Token Usage Engineering",
    ],
    useCases: [
      "Custom Generative Copywriting & Content Tools",
      "Automated Code & Document Generators",
      "Domain-Specific AI Assistants",
      "Multimodal Content Creation Platforms",
    ],
    keywords: ["Generative AI Services", "LLM Development", "Custom AI Applications"],
  },
  "mcp-development": {
    title: "Model Context Protocol (MCP) Server Development",
    description: "Standardized TypeScript and Python MCP server development connecting AI clients to local databases, APIs, and file systems.",
    heroHeadline: "Standardized MCP Server & Tool Integration",
    overview: "We build custom Model Context Protocol (MCP) servers that allow AI models (Claude, Cursor, custom agents) to securely discover and invoke tools, databases, and internal APIs.",
    architecture: [
      "JSON-RPC Protocol Communication Layer",
      "Tool & Resource Definition Schema",
      "TypeScript / Python Server Implementation",
      "Security & Scope Authentication Controls",
    ],
    useCases: [
      "Connecting AI Assistants to Production Databases",
      "Creating Enterprise Tool Connectors for Claude",
      "Local Filesystem & IDE Context Extensions",
      "Automated API Execution via Standard Protocols",
    ],
    keywords: ["MCP Server Development", "Model Context Protocol", "MCP Integrations"],
  },
  "ai-automation": {
    title: "AI Automation Services",
    description: "End-to-end intelligent workflow automation replacing manual labor with automated AI pipelines and CRM/ERP synchronization.",
    heroHeadline: "Streamline Operations with Intelligent AI Workflows",
    overview: "We replace manual, repetitive business processes with automated AI microservices that process incoming data, classify intent, trigger multi-channel actions, and sync with your stack.",
    architecture: [
      "Webhook & Real-Time Event Triggers",
      "Intent Classification & Data Extraction",
      "Multi-Channel Action Execution (Email, Slack, Web)",
      "CRM & Database Synchronization",
    ],
    useCases: [
      "Automated Inbound Lead Qualification & Routing",
      "Invoice & Contract Data Extraction",
      "Multi-channel Customer Ticket Triage",
      "Automated Weekly Analytics & Reporting",
    ],
    keywords: ["AI Automation Services", "Business AI Workflows", "Sales Automation"],
  },
  "computer-vision": {
    title: "Computer Vision & Multimodal AI Services",
    description: "Visual AI systems for object detection, OCR document analysis, image classification, and Vision-Language Model integration.",
    heroHeadline: "Visual AI & Document Intelligence Systems",
    overview: "We engineer computer vision solutions using PyTorch, YOLO, OpenCV, and Vision-Language Models to automate image analysis, document OCR, and real-world visual monitoring.",
    architecture: [
      "Model Training & Fine-Tuning (PyTorch / YOLO)",
      "OCR & Document Layout Extraction",
      "Vision-Language Model (VLM) Integration",
      "Real-time Video & Image Inference Pipelines",
    ],
    useCases: [
      "Automated PDF & Scan Data Extraction (OCR)",
      "Real-Time Object Detection & Tracking",
      "Defect & Anomaly Inspection in Images",
      "Multimodal Image & Text Search",
    ],
    keywords: ["Computer Vision Development", "OCR Services", "Document AI"],
  },
};

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    return { title: "Service Not Found | Sajjad Ahmad" };
  }

  return {
    title: `${service.title} | Sajjad Ahmad — AI Engineer`,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `https://sajjadahmadai.vercel.app/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Sajjad Ahmad`,
      description: service.description,
      url: `https://sajjadahmadai.vercel.app/services/${slug}`,
      siteName: "Sajjad Ahmad Portfolio",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Person",
          name: "Sajjad Ahmad",
          url: "https://sajjadahmadai.vercel.app",
        },
        serviceType: service.title,
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
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://sajjadahmadai.vercel.app/services/${slug}`,
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

      {/* Top Breadcrumb */}
      <div className="pt-28 pb-8 px-6 max-w-4xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-medium"
        >
          <ArrowLeft size={16} /> Back to All Services
        </Link>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
          {service.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {service.overview}
        </p>
      </div>

      {/* Details Body */}
      <div className="px-6 max-w-4xl mx-auto space-y-12">
        {/* Architecture Specs */}
        <ShadowCard className="p-8 rounded-3xl border border-border space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            Key Architectural Components
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.architecture.map((item, i) => (
              <InnerShadowCard key={i} className="p-4 rounded-xl space-y-1">
                <p className="font-bold text-foreground text-sm m-0 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" /> {item}
                </p>
              </InnerShadowCard>
            ))}
          </div>
        </ShadowCard>

        {/* Real World Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Production Use Cases
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.useCases.map((useCase, i) => (
              <div key={i} className="p-5 rounded-2xl border border-border bg-card">
                <p className="font-semibold text-foreground text-sm m-0">✓ {useCase}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-background border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Discuss Your {service.title} Project</h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Sajjad Ahmad provides custom AI engineering from concept to production deployment.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-md">
            Request an AI Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}
