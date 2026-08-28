import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
import ShadowCard from "@/app/components/ShadowCard";
import InnerShadowCard from "@/app/components/InnerShadowEffect";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const LOCATION_DETAILS: Record<
  string,
  {
    name: string;
    regionType: string;
    headline: string;
    description: string;
    overview: string;
    servicesOffered: string[];
    collaborationDetails: string[];
    keywords: string[];
  }
> = {
  islamabad: {
    name: "Islamabad, Pakistan",
    regionType: "Hyper-Local Region (Tier 1)",
    headline: "AI Engineering & Machine Learning Development in Islamabad",
    description: "Local AI consultation, Generative AI applications, custom RAG systems, and Machine Learning engineering services in Islamabad.",
    overview: "Sajjad Ahmad provides in-person and local AI consultation for tech companies, startups, and institutions in Islamabad and the ICT region. From prototype development to full production AI deployment.",
    servicesOffered: [
      "Local AI Strategy & Architectural Consultation",
      "Custom Agentic AI & RAG System Development",
      "Python, PyTorch & FastAPI Machine Learning Microservices",
      "Computer Vision & Document Intelligence (OCR)",
    ],
    collaborationDetails: [
      "In-person and remote technical consultations in Islamabad",
      "Direct milestone delivery and ongoing code maintenance",
      "Technical mentorship for local engineering teams",
    ],
    keywords: ["AI Developer Islamabad", "AI Engineer Islamabad", "Machine Learning Islamabad", "RAG Developer Islamabad"],
  },
  pakistan: {
    name: "Pakistan (Nationwide)",
    regionType: "National Region (Tier 2)",
    headline: "Nationwide AI Engineering & Generative AI Solutions in Pakistan",
    description: "Production AI development, Agentic AI, custom RAG pipelines, and LLM applications for businesses and startups across Pakistan.",
    overview: "Serving technology companies, software houses, and enterprises across Islamabad, Lahore, Karachi, and nationwide. Delivering high-quality, production-ready AI solutions.",
    servicesOffered: [
      "Generative AI & LLM Application Engineering",
      "Enterprise Vector Database & Custom RAG Pipelines",
      "Model Context Protocol (MCP) Server Development",
      "AI Automation & Process Optimization",
    ],
    collaborationDetails: [
      "Full remote collaboration across all Pakistani time zones",
      "Structured sprint planning and GitHub repository delivery",
      "API microservice deployment on cloud infrastructure",
    ],
    keywords: ["AI Engineer Pakistan", "AI Developer Pakistan", "Generative AI Pakistan", "RAG Developer Pakistan"],
  },
  uae: {
    name: "United Arab Emirates & Gulf Region",
    regionType: "Middle East Market (Tier 3)",
    headline: "AI Engineering & Automation Services for UAE & Gulf Businesses",
    description: "Enterprise AI automation, Agentic sales systems, and custom RAG knowledge bases for businesses in Dubai, Abu Dhabi, Saudi Arabia, and the Gulf.",
    overview: "Delivering custom AI agent workflows and zero-hallucination RAG pipelines designed for growing businesses in Dubai, Abu Dhabi, Riyadh, and the GCC region.",
    servicesOffered: [
      "Autonomous AI Agents for Lead Qualification & Sales",
      "Multilingual Enterprise RAG Knowledge Systems",
      "Automated Workflow Integration for CRM & ERPs",
      "High-Performance FastAPI Microservices",
    ],
    collaborationDetails: [
      "GST / Gulf timezone alignment for real-time communication",
      "Enterprise SLA standards and secure API integration",
      "Clear documentation and production deployment support",
    ],
    keywords: ["AI Developer UAE", "AI Engineer Dubai", "AI Automation Gulf", "Generative AI Saudi Arabia"],
  },
  germany: {
    name: "Germany & Wider Europe",
    regionType: "European Market (Tier 4)",
    headline: "Remote AI Engineering Services for European Businesses",
    description: "Remote AI development, custom RAG systems, and Agentic AI workflows for companies in Germany, the UK, Finland, Netherlands, and Europe.",
    overview: "Providing engineering expertise in Generative AI, custom Model Context Protocol (MCP) servers, and RAG architectures for European technology teams with strict data privacy and compliance considerations.",
    servicesOffered: [
      "GDPR-Aware Custom RAG & Vector Search Systems",
      "Model Context Protocol (MCP) Server Integrations",
      "Agentic AI Architecture & Tool Calling",
      "Async FastAPI & Next.js Full-Stack AI Apps",
    ],
    collaborationDetails: [
      "CET / BST European timezone overlap for daily syncs",
      "Clear English documentation and clean git workflows",
      "Fixed-scope or ongoing remote developer arrangement",
    ],
    keywords: ["AI Developer Germany", "AI Engineer Europe", "Remote AI Engineer UK", "RAG Developer Germany"],
  },
  usa: {
    name: "United States (US Market)",
    regionType: "Global Remote Market (Tier 5)",
    headline: "Full-Stack AI Engineering & Custom AI Development for US Companies",
    description: "Remote AI engineering, custom AI agent development, enterprise RAG, and MCP servers for tech startups and enterprises in the United States.",
    overview: "Partnering with US technology startups, SaaS founders, and engineering leaders to design, train, and deploy production AI microservices with clean code architecture.",
    servicesOffered: [
      "Autonomous Tool-Using AI Agents & Workflows",
      "Enterprise RAG & Hybrid Vector Retrieval Systems",
      "Custom MCP Server Development (TypeScript / Python)",
      "High-Throughput PyTorch & FastAPI Backends",
    ],
    collaborationDetails: [
      "Overlapping working hours with US Eastern and Pacific time zones",
      "Async-first development culture with transparent GitHub PRs",
      "Production-ready deployment on AWS / Docker infrastructure",
    ],
    keywords: ["AI Developer USA", "AI Engineer USA", "Remote AI Engineer", "Hire AI Agent Developer"],
  },
};

export async function generateStaticParams() {
  return Object.keys(LOCATION_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATION_DETAILS[slug];

  if (!loc) {
    return { title: "Location Not Found | Sajjad Ahmad" };
  }

  return {
    title: `${loc.name} AI Engineering Services | Sajjad Ahmad`,
    description: loc.description,
    keywords: loc.keywords,
    alternates: {
      canonical: `https://sajjadahmadai.vercel.app/locations/${slug}`,
    },
    openGraph: {
      title: `${loc.name} AI Engineering Services | Sajjad Ahmad`,
      description: loc.description,
      url: `https://sajjadahmadai.vercel.app/locations/${slug}`,
      siteName: "Sajjad Ahmad Portfolio",
      type: "website",
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATION_DETAILS[slug];

  if (!loc) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
            name: "Locations",
            item: "https://sajjadahmadai.vercel.app/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: loc.name,
            item: `https://sajjadahmadai.vercel.app/locations/${slug}`,
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
          href="/locations"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-medium"
        >
          <ArrowLeft size={16} /> Back to All Locations
        </Link>

        <span className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/10 font-semibold mb-4 block w-fit">
          {loc.regionType}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
          {loc.headline}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {loc.overview}
        </p>
      </div>

      {/* Body Details */}
      <div className="px-6 max-w-4xl mx-auto space-y-12">
        <ShadowCard className="p-8 rounded-3xl border border-border space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            AI Engineering Capabilities for {loc.name}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {loc.servicesOffered.map((item, i) => (
              <InnerShadowCard key={i} className="p-4 rounded-xl space-y-1">
                <p className="font-bold text-foreground text-sm m-0 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" /> {item}
                </p>
              </InnerShadowCard>
            ))}
          </div>
        </ShadowCard>

        {/* Remote Collaboration Details */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Delivery & Remote Work Framework
          </h2>

          <div className="space-y-3">
            {loc.collaborationDetails.map((detail, i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-card">
                <p className="text-sm text-muted-foreground m-0 font-medium">✓ {detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-background border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Start an AI Project in {loc.name}</h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Discuss your AI engineering requirements with Sajjad Ahmad.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-md">
            Schedule an AI Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}
