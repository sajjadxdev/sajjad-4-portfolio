import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
import { LOCATION_EXTRAS } from "../data/location-extras";
import ShadowCard from "@/app/components/ShadowCard";
import InnerShadowCard from "@/app/components/InnerShadowEffect";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
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
    overview: "Delivering custom AI agent workflows and source-grounded RAG pipelines designed for growing businesses in Dubai, Abu Dhabi, Riyadh, and the GCC region.",
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

  const full = `${loc.name} AI Engineering | Sajjad Ahmad`;
  const title = full.length <= 60 ? full : `${loc.name} AI Engineering`;
  return {
    title,
    description: loc.description,
    keywords: loc.keywords,
    alternates: {
      canonical: `https://www.sajjadahmad.site/locations/${slug}`,
    },
    openGraph: {

      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sajjad Ahmad, AI Engineer" }],
      title,
      description: loc.description,
      url: `https://www.sajjadahmad.site/locations/${slug}`,
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

  const extra = LOCATION_EXTRAS[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: loc.headline,
        description: loc.description,
        serviceType: "AI engineering",
        areaServed: loc.name,
        provider: { "@id": "https://www.sajjadahmad.site/#person" },
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
            name: "Locations",
            item: "https://www.sajjadahmad.site/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: loc.name,
            item: `https://www.sajjadahmad.site/locations/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Top Breadcrumb */}
      <div className="pt-12 pb-8 px-[var(--gutter)]">
        <Link
          href="/locations"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-medium"
        >
          <ArrowLeft size={16} /> Back to All Locations
        </Link>

        <span className="eyebrow mb-4 block w-fit">
          {loc.regionType}
        </span>

        <h1 className="text-[42px] sm:text-6xl lg:text-7xl font-bold tracking-[-0.06em] leading-[0.95] text-foreground mb-6">
          {loc.headline}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {loc.overview}
        </p>
      </div>

      {/* Body Details */}
      <div className="px-[var(--gutter)] space-y-12">
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

        {extra && (
          <>
            {/* Market-specific detail */}
            <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <p className="text-lg leading-relaxed text-muted-foreground m-0">{extra.intro}</p>
              <div className="theme-dark-cta rounded-3xl p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e0574d] mb-3">Time zones</p>
                <p className="text-2xl font-bold tracking-[-0.03em] mb-3">{extra.timezone.label}</p>
                <p className="text-muted-foreground m-0 leading-relaxed">{extra.timezone.overlap}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">AI use cases for this market</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {extra.useCases.map((u) => (
                  <div key={u.title} className="theme-card p-6">
                    <h3 className="text-lg font-bold mb-2">{u.title}</h3>
                    <p className="text-sm text-muted-foreground m-0 leading-relaxed">{u.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">Data protection & AI rules I design for</h2>
              <div className="border-t border-border">
                {extra.compliance.map((c) => (
                  <div key={c.title} className="grid gap-2 border-b border-border py-5 md:grid-cols-[1fr_2fr] md:gap-8">
                    <h3 className="text-base font-bold m-0">{c.title}</h3>
                    <p className="text-sm text-muted-foreground m-0 leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground m-0">This is engineering guidance, not legal advice. Your legal team confirms what applies.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">How we work together</h2>
              <ul className="list-none p-0 m-0 border-t border-border">
                {extra.engagement.map((e) => (
                  <li key={e} className="flex gap-4 border-b border-border py-4 text-base">
                    <ArrowRight size={18} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6" aria-labelledby="loc-faq">
              <h2 id="loc-faq" className="text-2xl font-bold text-foreground tracking-tight">Frequently asked questions</h2>
              <div className="border-t border-border">
                {extra.faqs.map((f) => (
                  <details key={f.question} className="group border-b border-border py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <h3 className="m-0 text-lg font-semibold">{f.question}</h3>
                      <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 mb-0 text-base leading-relaxed text-muted-foreground">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Conversion CTA */}
        <nav aria-label="Other regions" className="pt-4">
          <p className="eyebrow mb-4">Other regions I work with</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(LOCATION_DETAILS)
              .filter(([s]) => s !== slug)
              .map(([s, l]) => (
                <Link key={s} href={`/locations/${s}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
                  {l.name}
                </Link>
              ))}
          </div>
        </nav>

        <div className="p-8 rounded-3xl theme-dark-cta text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Start an AI Project in {loc.name}</h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Discuss your AI engineering requirements with Sajjad Ahmad.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-md">
            Schedule an AI Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
