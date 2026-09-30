"use client"

import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"
import {
    Briefcase,
    GraduationCap
} from "lucide-react"

const experiences = [
    {
        title: "AI Engineer",
        company: "Apptex Software Solution, Pakistan",
        period: "Aug 2025 – Present",
        type: "work",
        highlights: [
            "Develop and test Machine Learning and Deep Learning solutions using Python, PyTorch, and TensorFlow for real-world AI applications.",
            "Perform end-to-end data preprocessing, feature engineering, model evaluation, debugging, and performance optimization across AI workflows.",
            "Develop Computer Vision solutions using YOLO and CNN architectures for real-time object detection and image processing applications.",
            "Build and integrate trained AI models through FastAPI REST APIs for backend deployment and application integration.",
            "Develop LLM-powered applications using prompt engineering, RAG, and conversational memory as part of enterprise AI solutions."
        ],
    },
    {
        title: "Machine Learning Trainee",
        company: "ML1 Pvt Ltd, Pakistan",
        period: "Apr 2025 – Jun 2025",
        type: "work",
        highlights: [
            "Implemented end-to-end Machine Learning workflows including data preprocessing, feature scaling, model training, and validation using Python and Scikit-learn.",
            "Worked with supervised and unsupervised learning techniques on real-world datasets to extract actionable data insights.",
            "Developed Computer Vision models using CNNs and YOLO for object detection and classification tasks.",
            "Applied cross-validation techniques and hyperparameter tuning to improve model performance and generalization."
        ],
    },
    {
        title: "Chatbot Developer",
        company: "INNOVATION.TECH, Pakistan",
        period: "Jan 2025 – Apr 2025",
        type: "work",
        highlights: [
            "Developed LLM-powered applications using Python, LangChain, and Hugging Face models.",
            "Designed multi-turn conversational pipelines with stateful memory mechanisms for context-aware interactive agents.",
            "Integrated AI core services with FastAPI backends and REST APIs for low-latency client communication.",
            "Engineered optimized prompt templates and LLM evaluation workflows to improve response accuracy."
        ],
    },
    {
        title: "Generative AI & Machine Learning Intern",
        company: "VersatileSoft, Pakistan",
        period: "Apr 2023 – Oct 2024",
        type: "work",
        highlights: [
            "Developed and fine-tuned Large Language Models (LLMs) to generate accurate, domain-specific, and context-aware responses.",
            "Built and refined Small Language Models (SLMs) and optimized runtime latency for edge and resource-constrained environments.",
            "Executed automated data preprocessing, data cleaning, and evaluation pipelines to enhance dataset quality and model reliability.",
            "Worked on modern Generative AI model architectures, fine-tuning methodologies (LoRA/QLoRA), and inference optimization.",
            "Collaborated within cross-functional teams to resolve production bottlenecks and deliver robust AI product capabilities."
        ],
    },
    {
        title: "BS Computer Science",
        company: "FATA University",
        period: "2020 – 2024",
        type: "education",
        highlights: [
            "CGPA: 3.64 / 4.00",
            "Coursework: Machine Learning, AI, Statistics, Data Structures, Algorithms"
        ],
    },
]

export default function ExperienceSection() {
    return (
        <section id="experience" className="w-full py-32 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="max-w-2xl mb-10 2xl:mb-20">
                    <p className="text-sm text-muted-foreground mb-3">
                        Career
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Experience & Education
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        My journey from CS student to production ML engineer —
                        each role building deeper expertise in AI systems.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative sm:pl-16">
                                {/* Timeline Dot */}
                                <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-muted-foreground/30 border-2 border-background hidden sm:block" />

                                <ShadowCard className="p-8 rounded-3xl">
                                    <div className="flex items-start gap-4 mb-4">
                                        <InnerShadowCard className="p-3 rounded-xl shrink-0">
                                            {exp.type === "education" ? (
                                                <GraduationCap size={20} />
                                            ) : (
                                                <Briefcase size={20} />
                                            )}
                                        </InnerShadowCard>

                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">
                                                {exp.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                {exp.company}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {exp.period}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="text-sm text-muted-foreground space-y-1.5 ml-0 sm:ml-[52px]">
                                        {exp.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-foreground mt-1.5 w-1 h-1 rounded-full bg-foreground shrink-0" />
                                                    {h}
                                                </li>
                                        ))}
                                    </ul>
                                </ShadowCard>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}