import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ChatTooltip from "./components/ChatTooltip";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajjad Ahmad | AI Engineer — Generative AI, Agentic AI & RAG",
  description: "Sajjad Ahmad is an AI Engineer in Islamabad building production Generative AI, AI agents, RAG pipelines and computer vision systems. Remote worldwide.",
  keywords: [
    "Sajjad Ahmad",
    "AI Engineer",
    "AI Developer",
    "Generative AI Engineer",
    "Agentic AI Developer",
    "RAG Developer",
    "LLM Developer",
    "Machine Learning Engineer",
    "AI Engineer Islamabad",
    "AI Engineer Pakistan",
    "Remote AI Engineer",
    "Model Context Protocol",
    "MCP Developer",
    "Computer Vision Engineer"
  ],
  authors: [{ name: "Sajjad Ahmad", url: "https://github.com/sajjadxdev" }],
  creator: "Sajjad Ahmad",
  publisher: "Sajjad Ahmad",
  metadataBase: new URL("https://www.sajjadahmad.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sajjad Ahmad | AI Engineer — Generative AI, Agentic AI & RAG",
    description: "Sajjad Ahmad is an AI Engineer specializing in Generative AI, Agentic AI, custom RAG pipelines, LLM integration, and production ML systems.",
    url: "https://www.sajjadahmad.site",
    siteName: "Sajjad Ahmad - AI Engineer Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sajjad Ahmad - AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajjad Ahmad | AI Engineer — Generative AI, Agentic AI & RAG",
    description: "AI Engineer specializing in Generative AI, Agentic AI, RAG pipelines, and LLM applications.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google4ecb985a18b1e318",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.sajjadahmad.site/#person",
      name: "Sajjad Ahmad",
      givenName: "Sajjad",
      familyName: "Ahmad",
      jobTitle: "AI Engineer",
      description: "AI Engineer specializing in Generative AI, Agentic AI systems, custom RAG pipelines, LLM application architecture, and production Machine Learning systems based in Islamabad, Pakistan.",
      url: "https://www.sajjadahmad.site",
      image: {
        "@type": "ImageObject",
        url: "https://www.sajjadahmad.site/sajjad-ahmad-ai-engineer.jpg",
        width: 356,
        height: 784,
        caption: "Sajjad Ahmad, AI Engineer in Islamabad, Pakistan",
      },
      email: "sajjadxdev@gmail.com",
      telephone: "+923166400174",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        addressCountry: "PK",
      },
      sameAs: [
        "https://github.com/sajjadxdev",
        "https://linkedin.com/in/sajjadxdev",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Generative AI",
        "Agentic AI",
        "Retrieval-Augmented Generation (RAG)",
        "Model Context Protocol (MCP)",
        "Large Language Models (LLMs)",
        "Computer Vision",
        "Machine Learning",
        "Natural Language Processing",
        "PyTorch",
        "FastAPI",
        "Docker",
        "Python"
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sajjadahmad.site/#website",
      url: "https://www.sajjadahmad.site",
      name: "Sajjad Ahmad — AI Engineer Portfolio",
      description: "Official website of Sajjad Ahmad, AI Engineer specializing in Generative AI, Agentic AI, RAG pipelines, and production AI systems.",
      publisher: {
        "@id": "https://www.sajjadahmad.site/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <ChatTooltip />
          <Script
            id="qualzo-widget"
            src="https://qualzo.app/widget.js"
            data-user="cms5rcyqj03vsjqym74a0z8bt"
            strategy="lazyOnload"
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}