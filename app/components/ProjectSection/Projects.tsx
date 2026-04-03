"use client";
import { useRef } from "react";
import NotebookGlassCard from "./NoteBookCard";
import NotebookStackAnimation from "./NotebookStackAnimation";
import { ArrowRight, BarChart3, Camera, Car, FileSearch, LucideIcon, Mic } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    stack: string[];
    highlights: string[];
    github: string;
}

const projectsLarge: Project[] = [
    {
        icon: <Mic size={20} />,
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
        image: "/project.webp"
    },
    {
        icon: <Camera size={20} />,
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
        image: "/project.webp"
    },
    {
        icon: <Car size={20} />,
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
        image: "/project.webp"
    },
    {
        icon: <FileSearch size={20} />,
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
        image: "/project.webp"
    },
    {
        icon: <BarChart3 size={20} />,
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
        image: "/project.webp"
    },
]

function Projects() {
    const stackRef = useRef<HTMLDivElement | null>(null);
    NotebookStackAnimation(stackRef);

    return (
        <>
            <section id="portfolio" className="relative py-28">
                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Header */}
                    <div className="max-w-2xl">
                        <p className="text-sm text-muted-foreground mb-0 2xl:mb-3">
                            Projects
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 2xl:mb-6">
                            Real projects, real impact
                        </h2>

                        <p className="text-sm 2xl:text-base text-muted-foreground leading-relaxed">
                            AI/ML solutions built for production use — from computer vision systems
                            to LLM-powered agents and RAG pipelines. Each project on GitHub.
                        </p>
                    </div>

                </div>
            </section>
            <div
                ref={stackRef}
                className="notebook-wrapper relative w-full h-screen pt-25 2xl:pt-40 -mt-55 lg:-mt-45"
            >
                <div className="notebook-stack relative w-full h-full max-w-7xl mx-auto">
                    <NotebookGlassCard project={projectsLarge[0]} index={0} />
                    <NotebookGlassCard project={projectsLarge[1]} index={1} />
                    <NotebookGlassCard project={projectsLarge[2]} index={2} />
                    <NotebookGlassCard project={projectsLarge[3]} index={3} />
                    <NotebookGlassCard project={projectsLarge[4]} index={4} />
                </div>
            </div>
        </>
    );
}

export default Projects;