import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajjad Ahmad | Top AI & ML Developer in Peshawar — Machine Learning Engineer & LLM Specialist",
  description: "Looking for an AI and ML developer in Peshawar? Sajjad Ahmad is a top Machine Learning Engineer specializing in LLM applications, RAG pipelines, NLP, Computer Vision, and scalable AI systems. View CV, projects & hire the best AI developer in Peshawar, Pakistan.",
  keywords: [
    "AI and ML developer in pesh",
    "AI and ML developer in Peshawar",
    "AI developer in Peshawar",
    "ML developer in Peshawar",
    "Machine Learning Engineer Peshawar",
    "Sajjad Ahmad",
    "Sajjad Ahmad CV",
    "Sajjad Ahmad Resume",
    "Sajjad Ahmad AI developer",
    "Sajjad Ahmad ML Engineer",
    "AI engineer Peshawar Pakistan",
    "NLP engineer Peshawar",
    "LLM developer Peshawar",
    "RAG pipeline developer Peshawar",
    "Python AI developer Peshawar",
    "Best AI developer in Peshawar",
    "Top ML engineer Peshawar",
    "Artificial Intelligence developer Pakistan",
    "Deep Learning Engineer Peshawar",
    "Generative AI developer Peshawar",
    "FastAPI developer Peshawar",
    "PyTorch developer Pakistan",
    "Agentic AI developer Peshawar",
    "LangChain developer Peshawar",
    "LlamaIndex developer Pakistan",
    "HuggingFace developer Pakistan",
    "AI consultant Peshawar",
    "Machine learning consultant Pakistan",
    "Freelance AI developer Pakistan",
    "Freelance ML engineer Peshawar",
    "AI Web App Developer Pakistan",
    "Computer Vision Engineer Peshawar",
    "Full Stack AI developer Peshawar",
    "Scikit-learn developer Peshawar",
    "SpaCy NLP developer Pakistan"
  ],
  authors: [{ name: "Sajjad Ahmad", url: "https://github.com/sajjadxdev" }],
  creator: "Sajjad Ahmad",
  publisher: "Sajjad Ahmad",
  metadataBase: new URL("https://sajjadahmadai.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sajjad Ahmad | Top AI & ML Developer in Peshawar — Machine Learning Engineer",
    description: "Looking for an AI and ML developer in Peshawar? Sajjad Ahmad is a top Machine Learning Engineer specializing in LLMs, RAG pipelines, NLP, Computer Vision, and scalable AI systems. View CV & projects.",
    url: "https://sajjadahmadai.vercel.app",
    siteName: "Sajjad Ahmad - AI & ML Developer Portfolio",
    images: [
      {
        url: "/sajjad.png",
        width: 1200,
        height: 630,
        alt: "Sajjad Ahmad - AI & ML Developer in Peshawar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajjad Ahmad | Top AI & ML Developer in Peshawar",
    description: "Top Machine Learning Engineer & AI Developer in Peshawar specializing in LLMs, RAG, NLP, and Computer Vision.",
    images: ["/sajjad.png"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sajjadahmadai.vercel.app/#person",
      name: "Sajjad Ahmad",
      givenName: "Sajjad",
      familyName: "Ahmad",
      jobTitle: "AI and ML Developer",
      description: "Top Machine Learning Engineer and AI Developer based in Peshawar, specializing in LLM-powered applications, RAG pipelines, NLP, Computer Vision, and scalable AI systems.",
      url: "https://sajjadahmadai.vercel.app",
      image: "https://sajjadahmadai.vercel.app/sajjad.png",
      email: "sajjadxdev@gmail.com",
      telephone: "+923166400174",
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
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Natural Language Processing",
        "Large Language Models (LLMs)",
        "RAG Pipelines",
        "Computer Vision",
        "PyTorch",
        "TensorFlow",
        "Python",
        "FastAPI",
        "Docker",
        "AWS",
        "LangChain",
        "LlamaIndex",
        "Scikit-learn",
        "HuggingFace",
        "SpaCy",
        "REST APIs",
        "Agentic AI",
        "Generative AI",
        "Deep Learning"
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://sajjadahmadai.vercel.app/#profilepage",
      url: "https://sajjadahmadai.vercel.app",
      name: "Sajjad Ahmad | AI and ML Developer in Peshawar - CV & Portfolio",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://sajjadahmadai.vercel.app/#website",
        name: "Sajjad Ahmad Portfolio",
        url: "https://sajjadahmadai.vercel.app",
      },
      about: {
        "@id": "https://sajjadahmadai.vercel.app/#person",
      },
      description: "Portfolio and CV of Sajjad Ahmad, Top AI and ML Developer in Peshawar, Pakistan.",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}