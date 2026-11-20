import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
import { SERVICE_EXTRAS } from "../data/service-extras";
import { BLOG_POSTS } from "@/app/blog/data/posts";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

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
    description: "Enterprise Retrieval-Augmented Generation systems built with ChromaDB, LlamaIndex, and FastAPI to ground answers in your own documents.",
    heroHeadline: "Retrieval-Augmented Generation Grounded in Your Own Data",
    overview: "We build enterprise RAG pipelines that index your documents, knowledge bases, and codebase into high-density vector databases with relevance thresholds and source citations, so answers stay grounded in your content and the system says “I don’t know” instead of guessing.",
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
  "production-apis": {
    title: "Production AI API Development",
    description: "Scalable FastAPI backends that turn trained models into reliable, documented APIs, containerized with Docker and ready for AWS.",
    heroHeadline: "Turn Your Models into Reliable, Scalable APIs",
    overview: "A model in a notebook doesn't help your product. I wrap models in async FastAPI services with validation, authentication, logging and Docker images, so your web or mobile app can call AI the same way it calls any other API, and keep working under real traffic.",
    architecture: [
      "Async FastAPI Endpoints with Pydantic Request Validation",
      "Model Loading, Batching & Response Caching",
      "Docker Containers & Nginx Reverse Proxy",
      "AWS Deployment, Health Checks & Structured Logging",
    ],
    useCases: [
      "Your model works locally but nobody can use it in the product",
      "AI features are slow or time out under load",
      "Mobile / web apps need one clean API for several models",
      "Deployments are manual and break between environments",
    ],
    keywords: ["FastAPI Development", "ML Model Deployment", "AI Backend API", "Dockerized AI"],
  },
  "ml-engineering": {
    title: "Machine Learning Engineering Services",
    description: "End-to-end ML engineering: data preparation, model training, evaluation and deployment with Python, PyTorch, TensorFlow and Scikit-learn.",
    heroHeadline: "From Raw Data to a Model You Can Trust",
    overview: "I take your data from messy spreadsheets or logs to a trained, evaluated model with honest metrics, then hand it over in a form your team can retrain and deploy. Every step is reproducible, so results don't depend on one person's laptop.",
    architecture: [
      "Data Cleaning, Feature Engineering & Train/Test Splits",
      "Model Selection & Training (Scikit-learn, PyTorch, TensorFlow)",
      "Cross-Validation, Hyperparameter Tuning & Error Analysis",
      "Packaged Inference Pipeline & Retraining Guide",
    ],
    useCases: [
      "You have data but no model that predicts reliably",
      "Model accuracy looks good in testing but fails in production",
      "Forecasting, classification or scoring done by hand today",
      "No one can reproduce how the current model was trained",
    ],
    keywords: ["Machine Learning Engineering", "ML Model Development", "PyTorch Developer", "Data Science Services"],
  },
  "ai-product-delivery": {
    title: "AI Product Delivery",
    description: "Clear scope, milestones and rapid iteration to take an AI idea from concept to a deployed, measurable product.",
    heroHeadline: "From AI Idea to Shipped Product, Without the Guesswork",
    overview: "Most AI projects stall between the demo and the launch. I start by scoping what success means in numbers, then deliver in short milestones you can see and test, so you always know what is done, what is next, and whether the AI is actually paying off.",
    architecture: [
      "Discovery Call & Feasibility Check",
      "Scoped Milestones with Clear Deliverables",
      "Iterative Builds You Can Test Every Step",
      "Launch, Handover Docs & Post-Launch Support",
    ],
    useCases: [
      "You have an AI idea but don't know if it's feasible",
      "A previous AI project produced a demo that never shipped",
      "You need an estimate and roadmap before committing budget",
      "Non-technical founders who need one accountable engineer",
    ],
    keywords: ["AI Product Development", "AI MVP Development", "AI Consulting", "AI Project Delivery"],
  },
  "model-optimization": {
    title: "AI Model Optimization & Fine-Tuning",
    description: "Fine-tuning with LoRA/QLoRA, prompt engineering, evaluation workflows and inference improvements for accurate, efficient AI.",
    heroHeadline: "Make Your AI More Accurate, Faster and Cheaper",
    overview: "When an off-the-shelf model is too generic, too slow or too expensive, I tune it to your domain. That means fine-tuning with LoRA/QLoRA, tightening prompts, and measuring every change against an evaluation set, so improvements are proven, not guessed. In past work this cut inference latency by about 30%.",
    architecture: [
      "Baseline Evaluation Set & Metrics",
      "Prompt Engineering & Output Structuring",
      "LoRA / QLoRA Fine-Tuning on Your Data",
      "Inference Speed-ups: Quantization, Batching & Caching",
    ],
    useCases: [
      "Answers are generic or miss your domain's terminology",
      "LLM costs are growing faster than usage",
      "Responses are too slow for a real-time product",
      "No reliable way to tell if a prompt or model change helped",
    ],
    keywords: ["LLM Fine-Tuning", "LoRA QLoRA", "Model Optimization", "Prompt Engineering"],
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

  const full = `${service.title} | Sajjad Ahmad`;
  const title = full.length <= 60 ? full : service.title;
  return {
    title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `https://www.sajjadahmad.site/services/${slug}`,
    },
    openGraph: {

      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sajjad Ahmad, AI Engineer" }],
      title,
      description: service.description,
      url: `https://www.sajjadahmad.site/services/${slug}`,
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

  const extra = SERVICE_EXTRAS[slug];
  const RELATED_READING: Record<string, string[]> = {
    "ai-agent-development": ["how-to-build-an-ai-agent", "best-ai-agent-frameworks", "what-is-agentic-ai"],
    "rag-development": ["what-is-rag-retrieval-augmented-generation", "best-vector-databases-for-rag", "rag-vs-fine-tuning"],
    "generative-ai": ["generative-ai-use-cases-for-small-business", "ai-chatbot-for-customer-support", "how-to-reduce-llm-hallucinations"],
    "mcp-development": ["what-is-model-context-protocol-mcp", "how-to-build-an-ai-agent"],
    "ai-automation": ["how-can-ai-agents-increase-sales-for-your-business", "ai-chatbot-for-customer-support", "how-ai-voice-agents-work"],
    "computer-vision": ["train-custom-yolo-object-detection", "deploy-machine-learning-model-fastapi-docker"],
    "production-apis": ["deploy-machine-learning-model-fastapi-docker", "how-to-reduce-llm-api-costs"],
    "ml-engineering": ["train-custom-yolo-object-detection", "how-to-evaluate-llm-applications", "deploy-machine-learning-model-fastapi-docker"],
    "ai-product-delivery": ["ai-development-cost", "how-to-hire-an-ai-engineer", "andrew-ng-biggest-opportunities-in-ai"],
    "model-optimization": ["rag-vs-fine-tuning", "how-to-reduce-llm-api-costs", "how-to-evaluate-llm-applications"],
  };
  const reading = (RELATED_READING[slug] ?? [])
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p));

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
          url: "https://www.sajjadahmad.site",
        },
        serviceType: service.title,
        areaServed: ["Worldwide", "Pakistan", "United Arab Emirates", "Germany", "United States"],
      },
      ...(extra
        ? [{
            "@type": "FAQPage",
            mainEntity: extra.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sajjadahmad.site",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.sajjadahmad.site/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://www.sajjadahmad.site/services/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="site-shell min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Intro */}
      <section className="px-[var(--gutter)] pt-16 sm:pt-24 pb-16">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> All services
        </Link>
        <p className="eyebrow mt-10 mb-6">{service.title}</p>
        <h1 className="max-w-4xl text-[40px] sm:text-6xl lg:text-7xl font-bold tracking-[-0.06em] leading-[0.95]">
          {service.heroHeadline}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {service.overview}
        </p>
        <div className="hero-actions">
          <Link className="button button-red" href="/#contact">
            Discuss your project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="px-[var(--gutter)] py-16 sm:py-24 bg-secondary">
        <p className="eyebrow mb-5">How it works</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.06em] leading-[0.95] mb-12">
          The process, <em className="not-italic text-primary">step by step.</em>
        </h2>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
          {service.architecture.map((step, i) => (
            <li key={step} className="border-t-2 border-foreground pt-5">
              <span className="text-xs font-bold tracking-[0.18em] text-primary">0{i + 1}</span>
              <p className="mt-4 text-lg font-semibold tracking-[-0.03em] leading-snug">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Problems it solves */}
      <section className="px-[var(--gutter)] py-16 sm:py-24">
        <p className="eyebrow mb-5">Problems I solve</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.06em] leading-[0.95] mb-12">
          Sound <em className="not-italic text-primary">familiar?</em>
        </h2>
        <ul className="list-none p-0 m-0 border-t border-border">
          {service.useCases.map((useCase) => (
            <li key={useCase} className="flex items-start gap-5 border-b border-border py-6">
              <ArrowRight size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <p className="m-0 text-xl sm:text-2xl font-medium tracking-[-0.03em] leading-snug">{useCase}</p>
            </li>
          ))}
        </ul>
      </section>

      {extra && (
        <>
          {/* What you get */}
          <section className="px-[var(--gutter)] py-16 sm:py-24 bg-secondary">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-5">What you get</p>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.06em] leading-[0.95] mb-10">
                  Deliverables, <em className="not-italic text-primary">not just a demo.</em>
                </h2>
                <ul className="list-none p-0 m-0 border-t border-border">
                  {extra.deliverables.map((d) => (
                    <li key={d} className="flex gap-4 border-b border-border py-4 text-base font-medium">
                      <ArrowRight size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-5">Tech stack</p>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0 mb-10">
                  {extra.techStack.map((t) => (
                    <li key={t} className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-semibold">{t}</li>
                  ))}
                </ul>
                {extra.relatedProject && (
                  <div className="theme-dark-cta rounded-3xl p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e0574d] mb-3">Related project</p>
                    <p className="text-2xl font-bold tracking-[-0.03em] mb-3">{extra.relatedProject.name}</p>
                    <p className="text-muted-foreground m-0 leading-relaxed">{extra.relatedProject.summary}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="px-[var(--gutter)] py-16 sm:py-24" aria-labelledby="service-faq">
            <p className="eyebrow mb-5">FAQ</p>
            <h2 id="service-faq" className="text-4xl sm:text-5xl font-bold tracking-[-0.06em] leading-[0.95] mb-12">
              Questions clients <em className="not-italic text-primary">ask first.</em>
            </h2>
            <div className="border-t border-border max-w-4xl">
              {extra.faqs.map((f) => (
                <details key={f.question} className="group border-b border-border py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-xl font-semibold tracking-[-0.02em]">
                    <h3 className="m-0 text-xl font-semibold">{f.question}</h3>
                    <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 mb-0 max-w-3xl text-base leading-relaxed text-muted-foreground">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </>
      )}

      {reading.length > 0 && (
        <section className="px-[var(--gutter)] pb-16 sm:pb-24" aria-labelledby="related-reading">
          <p className="eyebrow mb-5">Related reading</p>
          <h2 id="related-reading" className="text-3xl sm:text-4xl font-bold tracking-[-0.05em] leading-[0.95] mb-8">
            Learn more <em className="not-italic text-primary">before we talk.</em>
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {reading.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="theme-card block p-6">
                <span className="text-xs font-semibold text-muted-foreground">{r.readTime}</span>
                <p className="mt-3 mb-0 text-lg font-bold leading-snug tracking-[-0.02em]">{r.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="contact-section">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#c75850]">Ready to start?</p>
          <h2>Let&apos;s talk about<br /><em>your project.</em></h2>
        </div>
        <div className="contact-copy">
          <p>
            Tell me what you&apos;re trying to solve. You&apos;ll get a clear technical
            direction, realistic milestones, and a practical next step.
          </p>
          <Link className="button button-red" href="/#contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
