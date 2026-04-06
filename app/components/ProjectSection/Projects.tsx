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
    accent?: string;
}

const projectsLarge: Project[] = [
    {
        icon: <Mic size={20} className="text-violet-400" />,
        title: "AI Voice Call Agent",
        description: "Real-time AI voice agent integrating Speech-to-Text and Text-to-Speech with LLM-based conversational orchestration and contextual memory handling.",
        stack: ["LLM", "FastAPI", "Docker", "Twilio"],
        highlights: [
            "Real-time speech processing pipeline",
            "LLM orchestration with contextual memory",
            "Modular backend architecture",
            "Containerized for scalable deployment"
        ],
        github: "https://github.com/sajjadxdev",
        image: "/project.webp",
        accent: "rgba(139,92,246,0.5)",
    },
    {
        icon: <Camera size={20} className="text-cyan-400" />,
        title: "Traffic Light Detection System",
        description: "Computer vision system using YOLO-based object detection for real-time traffic light recognition with 84% validation accuracy.",
        stack: ["YOLO", "CNN", "Python", "OpenCV"],
        highlights: [
            "84% validation accuracy",
            "Real-time video stream processing",
            "Custom dataset training & fine-tuning",
            "Optimized inference speed"
        ],
        github: "https://github.com/sajjadxdev",
        image: "/project.webp",
        accent: "rgba(34,211,238,0.5)",
    },
    {
        icon: <Car size={20} className="text-emerald-400" />,
        title: "Automatic License Plate Recognition",
        description: "End-to-end detection and OCR pipeline for real-time license plate recognition using YOLOv8 and Tesseract.",
        stack: ["YOLOv8", "Tesseract OCR", "Python", "OpenCV"],
        highlights: [
            "YOLOv8 for plate detection",
            "Tesseract OCR text extraction",
            "Modular architecture (detection → preprocessing → output)",
            "Real-time processing capability"
        ],
        github: "https://github.com/sajjadxdev",
        image: "/project.webp",
        accent: "rgba(52,211,153,0.5)",
    },
    {
        icon: <FileSearch size={20} className="text-amber-400" />,
        title: "AI-Powered PDF Q&A System",
        description: "RAG pipeline using embeddings and semantic search for intelligent document question answering with conversational retrieval.",
        stack: ["RAG", "LangChain", "HuggingFace", "Streamlit"],
        highlights: [
            "Document chunking & vector embeddings",
            "Semantic search retrieval",
            "Conversational Q&A with LangChain",
            "Interactive Streamlit frontend"
        ],
        github: "https://github.com/sajjadxdev",
        image: "/project.webp",
        accent: "rgba(251,191,36,0.5)",
    },
    {
        icon: <BarChart3 size={20} className="text-rose-400" />,
        title: "Titanic Survival Prediction",
        description: "Complete ML pipeline including EDA, feature engineering, model training, and validation achieving 82% accuracy.",
        stack: ["Random Forest", "XGBoost", "Pandas", "Scikit-learn"],
        highlights: [
            "82% prediction accuracy",
            "Feature engineering & EDA",
            "Hyperparameter tuning",
            "Cross-validation techniques"
        ],
        github: "https://github.com/sajjadxdev",
        image: "/project.webp",
        accent: "rgba(251,113,133,0.5)",
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
            <section id="portfolio" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
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