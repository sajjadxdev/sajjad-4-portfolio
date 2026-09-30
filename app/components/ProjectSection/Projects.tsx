"use client";
import { useRef, useState, useEffect } from "react";
import NotebookGlassCard from "./NoteBookCard";
import NotebookStackAnimation from "./NotebookStackAnimation";
import MobileCardSwiper from "./MobileCardSwiper";
import { BarChart3, Camera, Car, FileSearch, Mic } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    stack: string[];
    highlights: string[];
    github: string;
    linkText?: string;
    accent?: string;
}

const projectsLarge: Project[] = [
    {
        icon: <Mic size={20} className="text-violet-400" />,
        title: "AI Voice Call Agent",
        description: "Real-time AI voice agent integrating Speech-to-Text, Large Language Models, and Text-to-Speech with conversational memory for natural voice interactions.",
        stack: ["Python", "STT/TTS", "LLMs", "FastAPI", "LangChain"],
        highlights: [
            "Real-time speech-to-text, LLM, and text-to-speech integration",
            "Multi-turn conversational memory & context orchestration",
            "End-to-end conversational AI workflow for voice calls"
        ],
        github: "https://drive.google.com/file/d/1M4A1Qn5exDoYM34kARs2IpG6EEYuvJZh/view",
        linkText: "Watch Demo Video",
        image: "/voice-assistant.jpeg",
        accent: "rgba(139,92,246,0.5)",
    },
    {
        icon: <Car size={20} className="text-emerald-400" />,
        title: "Automatic License Plate Recognition (ALPR)",
        description: "Automatic vehicle license plate detection and extraction system using YOLO object detection and EasyOCR.",
        stack: ["YOLO", "EasyOCR", "Python", "OpenCV", "PyTorch"],
        highlights: [
            "YOLO object detection & OCR text extraction",
            "Computer Vision pipeline detecting license plates from vehicle images",
            "Automated license plate detail parsing"
        ],
        github: "https://www.awesomescreenshot.com/video/54841618?key=92dc04fd65f5a9d743cd25fe95125412",
        linkText: "Watch Demo Video",
        image: "/detection1.png",
        accent: "rgba(52,211,153,0.5)",
    },
    {
        icon: <Camera size={20} className="text-cyan-400" />,
        title: "Traffic Light Detection System",
        description: "Real-time traffic light detection and state recognition system built with YOLO for intelligent transportation systems.",
        stack: ["YOLO", "PyTorch", "Python", "OpenCV", "Real-Time Inference"],
        highlights: [
            "Real-time traffic light detection using YOLO architecture",
            "Custom dataset training, object detection, and evaluation",
            "Low-latency real-time video stream inference"
        ],
        github: "https://www.awesomescreenshot.com/video/54840783?key=d977f0332f7983810b68fa89cdd280ac",
        linkText: "Watch Demo Video",
        image: "/trafic.jpeg",
        accent: "rgba(34,211,238,0.5)",
    },
    {
        icon: <FileSearch size={20} className="text-amber-400" />,
        title: "Lead Finder -- B2B Service Intelligence",
        description: "Asynchronous B2B lead-generation platform discovering Google Maps listings with deep website gap analysis and automated scoring.",
        stack: ["FastAPI", "Playwright", "BeautifulSoup4", "Pandas", "JavaScript"],
        highlights: [
            "Discovers and analyzes targeted Google Maps business listings",
            "Deep website gap-analysis (SSL, live chat, Cloudflare email extraction)",
            "Opportunity Scoring & Service Matchmaking (Hot/Warm/Cold tiers)",
            "Bloomberg Terminal-style dashboard with export capabilities"
        ],
        github: "https://github.com/sajjadxdev",
        linkText: "View Repository",
        image: "/lead_finder_dashboard.jpg",
        accent: "rgba(251,191,36,0.5)",
    },
    {
        icon: <BarChart3 size={20} className="text-rose-400" />,
        title: "Crypto Volatility & Market Scanner -- GulelX",
        description: "High-frequency crypto market scanner streaming real-time metrics for 300+ USDT pairs via Binance APIs and WebSockets.",
        stack: ["Python", "Flask", "WebSockets", "SSE", "NumPy", "Pandas"],
        highlights: [
            "Streams 300+ USDT market pairs via WebSockets & Binance APIs",
            "Concurrent workers using multithreading & ThreadPoolExecutor",
            "ATR, Bollinger Bands, Historical Volatility & Volume Surge scoring",
            "SSE-based real-time updates & thread-safe bounded buffers"
        ],
        github: "https://github.com/sajjadxdev/Voiltile_coin/",
        linkText: "View Repository",
        image: "/gulelx_crypto_scanner.jpg",
        accent: "rgba(251,113,133,0.5)",
    },
    {
        icon: <FileSearch size={20} className="text-indigo-400" />,
        title: "AI Academic Quiz & RAG Platform",
        description: "Modular RAG backend using ChromaDB and Groq LLM to generate context-aware academic quizzes with LaTeX normalization.",
        stack: ["FastAPI", "RAG", "ChromaDB", "Groq LLM", "Docker", "Supabase"],
        highlights: [
            "RAG backend generating context-aware MCQs via Groq LLM",
            "Vector indexing pipeline with Sentence-Transformers & LaTeX parsing",
            "Solo & multiplayer quiz APIs with Supabase/PostgreSQL",
            "Productionized via Docker, Nginx, Systemd with Flutter mobile app"
        ],
        github: "https://github.com/sajjadxdev",
        linkText: "View Repository",
        image: "/pdf-reader.jpeg",
        accent: "rgba(129,140,248,0.5)",
    },
];

function Projects() {
    const stackRef = useRef<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Only run GSAP animation on desktop
    NotebookStackAnimation(stackRef, isMobile || !mounted);

    return (
        <>
            <section id="projects" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Header */}
                    <div className="max-w-2xl mb-8 lg:mb-0">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 2xl:mb-3 uppercase tracking-widest font-medium">
                            Projects
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 2xl:mb-6">
                            Real projects, real impact
                        </h2>

                        <p className="text-xs sm:text-sm 2xl:text-base text-muted-foreground leading-relaxed">
                            AI/ML solutions built for production use — from computer vision systems
                            to LLM-powered agents and RAG pipelines. Each project on GitHub.
                        </p>
                    </div>

                </div>
            </section>

            {/* Render both layouts but hide/show with CSS to avoid hydration mismatch */}
            {mounted && (
                <>
                    {/* Mobile: Card Swiper */}
                    {isMobile && (
                        <div className="px-3 sm:px-6 pb-16 -mt-4">
                            <MobileCardSwiper projects={projectsLarge} />
                        </div>
                    )}

                    {/* Desktop: Stacked scroll animation */}
                    {!isMobile && (
                        <div
                            ref={stackRef}
                            className="notebook-wrapper relative w-full h-screen pt-25 2xl:pt-40 -mt-55 lg:-mt-45 px-4"
                        >
                            <div className="notebook-stack relative w-full h-full max-w-7xl mx-auto">
                                {projectsLarge.map((project, i) => (
                                    <NotebookGlassCard key={i} project={project} index={i} />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* SSR fallback — shown before hydration, matches server render to prevent mismatch */}
            {!mounted && (
                <div className="px-4 pb-16">
                    <div className="max-w-7xl mx-auto">
                        <NotebookGlassCard project={projectsLarge[0]} index={0} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;