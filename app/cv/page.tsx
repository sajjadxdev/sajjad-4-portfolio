import type { Metadata } from "next";
import ShadowCard from "../components/ShadowCard";
import InnerShadowCard from "../components/InnerShadowEffect";
import {
  Download,
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sajjad Ahmad CV & Resume | Top AI and ML Developer in Peshawar",
  description:
    "Official Curriculum Vitae (CV) and Resume of Sajjad Ahmad — Top Machine Learning Engineer and AI Developer based in Peshawar, Pakistan. Specializing in LLM applications, RAG pipelines, NLP, and Computer Vision.",
  keywords: [
    "Sajjad Ahmad CV",
    "Sajjad Ahmad Resume",
    "AI and ML developer in pesh CV",
    "AI and ML developer in Peshawar Resume",
    "Machine Learning Engineer Peshawar CV",
    "Sajjad Ahmad AI Developer Resume",
    "Hire AI developer Peshawar",
    "Top ML engineer Peshawar CV",
  ],
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Top Bar / Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link href="/">
            <ShadowCard
              variant="button"
              className="px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </ShadowCard>
          </Link>

          <div className="flex gap-3">
            <a
              href="/sajjad_ahmad_resume_1 (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sajjad_Ahmad_AI_ML_Developer_Resume.pdf"
            >
              <ShadowCard
                variant="button"
                className="px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold hover:scale-105 transition-transform cursor-pointer border border-primary/50"
              >
                <Download size={18} />
                Download PDF Resume
              </ShadowCard>
            </a>
          </div>
        </div>

        {/* Resume Header Card */}
        <ShadowCard className="p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-border pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 inline-block">
                Curriculum Vitae
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-1">
                Sajjad Ahmad
              </h1>
              <p className="text-xl text-muted-foreground font-medium mt-2">
                Machine Learning Engineer & AI Developer
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Peshawar, Pakistan • Remote Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:sajjadxdev@gmail.com"
                  className="hover:underline text-foreground"
                >
                  sajjadxdev@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+923166400174" className="hover:underline text-foreground">
                  +92 316 6400174
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-primary" />
                <a
                  href="https://sajjadahmadai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-foreground"
                >
                  sajjadahmadai.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Top-performing{" "}
              <strong className="text-foreground">
                AI and ML Developer in Peshawar
              </strong>{" "}
              with proven expertise in designing, training, and deploying
              production-grade Machine Learning and Large Language Model (LLM)
              solutions. Specialized in RAG (Retrieval-Augmented Generation)
              pipelines, NLP, Computer Vision, and scalable REST APIs using
              Python, PyTorch, TensorFlow, LangChain, and FastAPI. Passionate
              about building intelligent agents that solve complex real-world
              problems with low latency and high accuracy.
            </p>
          </div>

          {/* Core Competencies & Keywords (SEO Powerhouse) */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Core Expertise & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <InnerShadowCard className="p-4 rounded-2xl space-y-1">
                <h3 className="font-semibold text-sm text-foreground">
                  AI & Large Language Models
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  LangChain, LlamaIndex, RAG Pipelines, Prompt Engineering,
                  Fine-tuning (LoRA/QLoRA), OpenAI API, HuggingFace Transformers
                </p>
              </InnerShadowCard>

              <InnerShadowCard className="p-4 rounded-2xl space-y-1">
                <h3 className="font-semibold text-sm text-foreground">
                  Machine Learning & Deep Learning
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  PyTorch, TensorFlow, Scikit-Learn, Computer Vision (YOLO,
                  OpenCV), NLP (SpaCy, NLTK), Time-Series Forecasting
                </p>
              </InnerShadowCard>

              <InnerShadowCard className="p-4 rounded-2xl space-y-1">
                <h3 className="font-semibold text-sm text-foreground">
                  Backend & MLOps
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Python, FastAPI, Docker, AWS, Git, CI/CD, REST APIs, Vector
                  Databases (Pinecone, ChromaDB, Qdrant, Weaviate)
                </p>
              </InnerShadowCard>
            </div>
          </div>

          {/* Featured Projects / Experience Highlights */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Key Projects & Experience
            </h2>

            <div className="space-y-6 border-l-2 border-primary/30 pl-6 ml-2">
              <div className="space-y-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="font-bold text-lg text-foreground">
                    Enterprise RAG & LLM Assistant Platform
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    Production AI
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  • Designed and deployed an end-to-end Retrieval-Augmented
                  Generation (RAG) system processing 100,000+ enterprise
                  documents with sub-second retrieval.
                  <br />
                  • Integrated vector search (Pinecone) with custom embedding
                  models and LangChain agents, boosting response accuracy by
                  40%.
                  <br />• Built scalable asynchronous API endpoints using
                  FastAPI and containerized via Docker for AWS cloud deployment.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="font-bold text-lg text-foreground">
                    Real-Time Computer Vision & Object Detection System
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    Computer Vision
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  • Trained and optimized custom YOLO models for real-time video
                  stream analysis and automated anomaly detection.
                  <br />
                  • Optimized model inference latency by 30% using model
                  quantization and TensorRT optimization.
                  <br />• Implemented full monitoring dashboard and alert
                  pipeline for live production feeds.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="font-bold text-lg text-foreground">
                    AI Voice Assistant & NLP Trading Analyzer
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    NLP & Audio AI
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  • Developed speech-to-text and speech synthesis pipelines for
                  hands-free conversational AI interaction.
                  <br />• Implemented sentiment analysis and entity extraction
                  on financial news streams to generate predictive trading
                  signals.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Education & Background
            </h2>
            <div className="flex justify-between items-center bg-card p-4 rounded-2xl border border-border">
              <div>
                <h3 className="font-bold text-foreground">
                  Bachelor of Science in Computer Science / AI
                </h3>
                <p className="text-sm text-muted-foreground">
                  Peshawar, Pakistan • Focus on Artificial Intelligence & Deep
                  Learning
                </p>
              </div>
              <span className="text-sm font-semibold text-primary">
                Graduated / Certified
              </span>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="font-bold text-lg">Interested in hiring Sajjad?</p>
              <p className="text-sm text-muted-foreground">
                Available for freelance, contract, and full-time ML roles in
                Peshawar & Remote.
              </p>
            </div>
            <Link href="/#contact">
              <ShadowCard
                variant="button"
                className="px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform cursor-pointer border border-primary"
              >
                Get in Touch →
              </ShadowCard>
            </Link>
          </div>
        </ShadowCard>
      </div>
    </main>
  );
}
