"use client"

import { Github, ExternalLink, Mic, Camera, Car, FileSearch, BarChart3 } from "lucide-react"
import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"

const projects = [
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
    },
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-2xl mb-10 2xl:mb-20">
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

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {projects.map((project, index) => (
                        <ShadowCard key={index} className="p-8 rounded-3xl group">
                            <div className="flex items-start gap-4 mb-6">
                                <InnerShadowCard className="p-3">
                                    {project.icon}
                                </InnerShadowCard>

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            <ul className="text-sm text-muted-foreground space-y-1.5 mb-6">
                                {project.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-foreground mt-1.5 w-1 h-1 rounded-full bg-foreground shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <InnerShadowCard
                                        variant="button"
                                        className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
                                    >
                                        <Github size={14} />
                                        View on GitHub
                                    </InnerShadowCard>
                                </a>
                            </div>
                        </ShadowCard>
                    ))}

                </div>

                {/* GitHub profile CTA */}
                <div className="flex justify-center mt-16">
                    <a href="https://github.com/sajjadxdev" target="_blank" rel="noopener noreferrer">
                        <ShadowCard
                            variant="button"
                            className="px-8 py-4 rounded-full cursor-pointer text-sm font-medium flex items-center gap-3 hover:scale-105 transition-transform"
                        >
                            <Github size={18} />
                            View all projects on GitHub
                            <ExternalLink size={14} />
                        </ShadowCard>
                    </a>
                </div>

            </div>
        </section>
    )
}