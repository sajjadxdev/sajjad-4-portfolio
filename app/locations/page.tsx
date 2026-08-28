import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import ShadowCard from "../components/ShadowCard";
import { ArrowRight, Globe, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Global AI Engineering & Geographic Service Regions | Sajjad Ahmad",
  description: "Explore AI engineering and development services across target regional hubs: Islamabad, Pakistan, UAE & Middle East, Germany & Europe, and the United States.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Geographic Service Regions | Sajjad Ahmad — AI Engineer",
    description: "Sajjad Ahmad provides remote and regional AI engineering services across Pakistan, the Middle East, Europe, and the US.",
    url: "https://sajjadahmadai.vercel.app/locations",
    siteName: "Sajjad Ahmad Portfolio",
    type: "website",
  },
};

const LOCATIONS = [
  {
    slug: "islamabad",
    name: "Islamabad, Pakistan",
    tier: "Tier 1 — Hyper-Local",
    description: "Local AI consultation, Machine Learning development, and technical project delivery in Islamabad & ICT.",
  },
  {
    slug: "pakistan",
    name: "Pakistan (Nationwide)",
    tier: "Tier 2 — National",
    description: "Nationwide AI development, Generative AI applications, and RAG systems across Islamabad, Lahore, Karachi, and Pakistan.",
  },
  {
    slug: "uae",
    name: "United Arab Emirates & Gulf",
    tier: "Tier 3 — Middle East",
    description: "Enterprise AI automation, Agentic sales systems, and custom RAG solutions for businesses in Dubai, Abu Dhabi, and the Gulf region.",
  },
  {
    slug: "germany",
    name: "Germany & Wider Europe",
    tier: "Tier 4 — Europe",
    description: "Remote AI engineering, European timezone compatibility, compliance-focused RAG, and LLM application development.",
  },
  {
    slug: "usa",
    name: "United States (US Market)",
    tier: "Tier 5 — Global Remote",
    description: "Full-stack AI development, Model Context Protocol (MCP) servers, and custom AI agent engineering for US tech companies.",
  },
];

export default function LocationsIndexPage() {
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

      <section className="pt-36 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6 text-xs uppercase tracking-widest text-primary font-semibold">
          <Globe size={14} /> Geographic Service Hubs
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          AI Engineering Across Key Regions
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Sajjad Ahmad provides custom AI engineering, Agentic AI development, and RAG systems tailored to local, regional, and global remote business requirements.
        </p>
      </section>

      <section className="px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {LOCATIONS.map((loc) => (
          <ShadowCard key={loc.slug} className="p-8 rounded-3xl border border-border flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              <span className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/10 font-semibold w-fit inline-block">
                {loc.tier}
              </span>

              <Link href={`/locations/${loc.slug}`} className="block">
                <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight flex items-center gap-2">
                  <MapPin size={20} className="text-primary" /> {loc.name}
                </h2>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {loc.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60">
              <Link
                href={`/locations/${loc.slug}`}
                className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                View Regional Details <ArrowRight size={14} />
              </Link>
            </div>
          </ShadowCard>
        ))}
      </section>
    </main>
  );
}
